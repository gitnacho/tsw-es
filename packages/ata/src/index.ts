import {
  getDTSFileForModuleWithVersion,
  getFiletreeForModuleWithVersion,
  getNPMVersionForModuleReference,
  getNPMVersionsForModule,
  NPMTreeMeta,
} from "./apis"
import { mapModuleNameToModule } from "./edgeCases"

export interface ATABootstrapConfig {
  /** Un objeto que pasa para obtener devoluciones de llamada */
  delegate: {
    /** La devolución de llamada que recibe cuando ATA decide que un archivo se debe escribir en tu VFS */
    receivedFile?: (code: string, path: string) => void
    /** Una forma de monstrar el progreso */
    progress?: (downloaded: number, estimatedTotal: number) => void
    /** Nota: ¡Un mensaje de error no significa que ATA se ha detenido! */
    errorMessage?: (userFacingMessage: string, error: Error) => void
    /** Una devolución de llamada que indica que ATA realmente tiene trabajo que hacer */
    started?: () => void
    /** La devolución de llamada cuando ATA ha terminado todo */
    finished?: (files: Map<string, string>) => void
  }
  /** Pasado para buscar como agente de usuario */
  projectName: string
  /** Tu copia local de TypeScript */
  typescript: typeof import("typescript")
  /** Si necesitas una versión personalizada de fetch */
  fetcher?: typeof fetch
  /** Si necesitas un registrador personalizado en lugar de la consola global */
  logger?: Logger
}

type ModuleMeta = { state: "loading" }

/**
 * La función que inicia la adquisición de tipos,
 * devuelve una función a la que luego le pasas el código
 * fuente inicial de la aplicación con.
 *
 * Esta es efectivamente la exportación principal, todo lo demás
 * básicamente es exportado para pruebas y se deben considerar
 * los detalles de implementación por parte de los consumidores.
 */
export const setupTypeAcquisition = (config: ATABootstrapConfig) => {
  const moduleMap = new Map<string, ModuleMeta>()
  const fsMap = new Map<string, string>()

  let estimatedToDownload = 0
  let estimatedDownloaded = 0

  return (initialSourceFile: string) => {
    estimatedToDownload = 0
    estimatedDownloaded = 0

    resolveDeps(initialSourceFile, 0).then(t => {
      if (estimatedDownloaded > 0) {
        config.delegate.finished?.(fsMap)
      }
    })
  }

  async function resolveDeps(initialSourceFile: string, depth: number) {
    const depsToGet = getNewDependencies(config, moduleMap, initialSourceFile)

    // Lo hace para que no se vuelva a descargar

    depsToGet.forEach(dep => moduleMap.set(dep.module, { state: "loading" }))

    // Tome los árboles de módulos que nos dan una lista de archivos para descargar
    const trees = await Promise.all(depsToGet.map(f => getFileTreeForModuleWithTag(config, f.module, f.version)))
    const treesOnly = trees.filter(t => !("error" in t)) as NPMTreeMeta[]

    // Estos son los módulos que podemos aprovechar directamente
    const hasDTS = treesOnly.filter(t => t.files.find(f => f.name.endsWith(".d.ts")))
    const dtsFilesFromNPM = hasDTS.map(t => treeToDTSFiles(t, `/node_modules/${t.moduleName}`))

    // Estos son los que debemos buscar en DT (que pueden no estar allí, quién sabe)
    const mightBeOnDT = treesOnly.filter(t => !hasDTS.includes(t))
    const dtTrees = await Promise.all(
      // TODO: Cambia de más reciente (latest) a la versión del árbol original que es controlado por el usuario
      mightBeOnDT.map(f => getFileTreeForModuleWithTag(config, `@types/${getDTName(f.moduleName)}`, "latest"))
    )

    const dtTreesOnly = dtTrees.filter(t => !("error" in t)) as NPMTreeMeta[]
    const dtsFilesFromDT = dtTreesOnly.map(t => treeToDTSFiles(t, `/node_modules/@types/${getDTName(t.moduleName).replace("types__", "")}`))

    // Recopila todas las solicitudes npm y DT DTS y aplana sus arreglos
    const allDTSFiles = dtsFilesFromNPM.concat(dtsFilesFromDT).reduce((p, c) => p.concat(c), [])
    estimatedToDownload += allDTSFiles.length
    if (allDTSFiles.length && depth === 0) {
      config.delegate.started?.()
    }

    // Toma el package.jsons para cada dependencia
    for (const tree of treesOnly) {
      let prefix = `/node_modules/${tree.moduleName}`
      if (dtTreesOnly.includes(tree)) prefix = `/node_modules/@types/${getDTName(tree.moduleName).replace("types__", "")}`
      const path = prefix + "/package.json"
      const pkgJSON = await getDTSFileForModuleWithVersion(config, tree.moduleName, tree.version, "/package.json")

      if (typeof pkgJSON == "string") {
        fsMap.set(path, pkgJSON)
        config.delegate.receivedFile?.(pkgJSON, path)
      } else {
        config.logger?.error(`Could not download package.json for ${tree.moduleName}`)
      }
    }

    // Toma todos los archivos dts
    await Promise.all(
      allDTSFiles.map(async dts => {
        const dtsCode = await getDTSFileForModuleWithVersion(config, dts.moduleName, dts.moduleVersion, dts.path)
        estimatedDownloaded++
        if (dtsCode instanceof Error) {
          // PENDIENTE?
          config.logger?.error(`Had an issue getting ${dts.path} for ${dts.moduleName}`)
        } else {
          fsMap.set(dts.vfsPath, dtsCode)
          config.delegate.receivedFile?.(dtsCode, dts.vfsPath)

          // Envía una nota de progreso cada 5 descargas
          if (config.delegate.progress && estimatedDownloaded % 5 === 0) {
            config.delegate.progress(estimatedDownloaded, estimatedToDownload)
          }

          // Recurso a través de deps
          await resolveDeps(dtsCode, depth + 1)
        }
      })
    )
  }
}

type ATADownload = {
  moduleName: string
  moduleVersion: string
  vfsPath: string
  path: string
}

function treeToDTSFiles(tree: NPMTreeMeta, vfsPrefix: string) {
  const dtsRefs: ATADownload[] = []

  for (const file of tree.files) {
    if (file.name.endsWith(".d.ts")) {
      dtsRefs.push({
        moduleName: tree.moduleName,
        moduleVersion: tree.version,
        vfsPath: `${vfsPrefix}${file.name}`,
        path: file.name,
      })
    }
  }
  return dtsRefs
}

/**
 * Extrae cualquier posible referencia a otros módulos (incluidos los relativos) con su
 * versionado npm strat también si alguien opta por una versión diferente a través de un comentario de línea final
 */
export const getReferencesForModule = (ts: typeof import("typescript"), code: string) => {
  const meta = ts.preProcessFile(code)

  // Se asegura de que no intentemos descargar las referencias de lib de TypeScript
  // @ts-ignore - privado pero probablemente nunca cambie
  const libMap: Map<string, string> = ts.libMap || new Map()

  // TODO: strip /// <reference path='X' />?

  const references = meta.referencedFiles
    .concat(meta.importedFiles)
    .concat(meta.libReferenceDirectives)
    .filter(f => !f.fileName.endsWith(".d.ts"))
    .filter(d => !libMap.has(d.fileName))

  return references.map(r => {
    let version = undefined
    if (!r.fileName.startsWith(".")) {
      version = "latest"
      const line = code.slice(r.end).split("\n")[0]!
      if (line.includes("// types:")) version = line.split("// types: ")[1]!.trim()
    }

    return {
      module: r.fileName,
      version,
    }
  })
}

/** Una lista de módulos del archivo fuente actual para los que no tenemos archivos existentes */
export function getNewDependencies(config: ATABootstrapConfig, moduleMap: Map<string, ModuleMeta>, code: string) {
  const refs = getReferencesForModule(config.typescript, code).map(ref => ({
    ...ref,
    module: mapModuleNameToModule(ref.module),
  }))

  // Elimina las rutas relativas porque estamos obteniendo todos los archivos.
  const modules = refs.filter(f => !f.module.startsWith(".")).filter(m => !moduleMap.has(m.module))
  return modules
}

/** La carga masiva del trabajo para obtener el filetree en función de cómo piensa la gente sobre los nombres y versiones de npm */
export const getFileTreeForModuleWithTag = async (
  config: ATABootstrapConfig,
  moduleName: string,
  tag: string | undefined
) => {
  let toDownload = tag || "latest"

  // Creo que tener al menos 2 puntos es un aproximado razonable para ser un semver y no una tag,
  // podemos omitir una solicitud de API, TBH esto es probablemente raro
  if (toDownload.split(".").length < 2) {
    // La API jsdelivr necesita una _versión_, no una etiqueta. Entonces, tenemos que cambiar
    // la etiqueta a la versión a través de una solicitud API.
    const response = await getNPMVersionForModuleReference(config, moduleName, toDownload)
    if (response instanceof Error) {
      return {
        error: response,
        userFacingMessage: `No se pudo pasar de una etiqueta a una versión en npm para ${moduleName} - posible error tipográfico?`,
      }
    }

    const neededVersion = response.version
    if (!neededVersion) {
      const versions = await getNPMVersionsForModule(config, moduleName)
      if (versions instanceof Error) {
        return {
          error: response,
          userFacingMessage: `No se pudieron obtener versiones en npm para ${moduleName} - posible error tipográfico?`,
        }
      }

      const tags = Object.entries(versions.tags).join(", ")
      return {
        error: new Error("Could not find tag for module"),
        userFacingMessage: `No se pudo encontrar una etiqueta para ${moduleName} llamada ${tag}. Encontré ${tags}`,
      }
    }

    toDownload = neededVersion
  }

  const res = await getFiletreeForModuleWithVersion(config, moduleName, toDownload)
  if (res instanceof Error) {
    return {
      error: res,
      userFacingMessage: `No se pudieron obtener los archivos para ${moduleName}@${toDownload}. ¿Es posible que sea un error tipográfico?`,
    }
  }

  return res
}

interface Logger {
  log: (...args: any[]) => void
  error: (...args: any[]) => void
  groupCollapsed: (...args: any[]) => void
  groupEnd: (...args: any[]) => void
}

// Tomado de dts-gen: https://github.com/microsoft/dts-gen/blob/master/lib/names.ts
function getDTName(s: string) {
  if (s.indexOf("@") === 0 && s.indexOf("/") !== -1) {
    // tenemos un módulo con ámbito, p. @bla/foo
    // que debería convertirse en bla__foo
    s = s.substr(1).replace("/", "__")
  }
  return s
}
