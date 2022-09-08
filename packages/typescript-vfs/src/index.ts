type System = import("typescript").System
type CompilerOptions = import("typescript").CompilerOptions
type CustomTransformers = import("typescript").CustomTransformers
type LanguageServiceHost = import("typescript").LanguageServiceHost
type CompilerHost = import("typescript").CompilerHost
type SourceFile = import("typescript").SourceFile
type TS = typeof import("typescript")

let hasLocalStorage = false
try {
  hasLocalStorage = typeof localStorage !== `undefined`
} catch (error) { }

const hasProcess = typeof process !== `undefined`
const shouldDebug = (hasLocalStorage && localStorage.getItem("DEBUG")) || (hasProcess && process.env.DEBUG)
const debugLog = shouldDebug ? console.log : (_message?: any, ..._optionalParams: any[]) => ""

export interface VirtualTypeScriptEnvironment {
  sys: System
  languageService: import("typescript").LanguageService
  getSourceFile: (fileName: string) => import("typescript").SourceFile | undefined
  createFile: (fileName: string, content: string) => void
  updateFile: (fileName: string, content: string, replaceTextSpan?: import("typescript").TextSpan) => void
}

/**
 * Realiza una copia virtual del entorno TypeScript. Esta es la API principal que deseas utilizar con
 * @typescript/vfs. Muchas de las otras funciones expuestas las utiliza esta función para configurarse.
 *
 * @param sys un objeto que se ajusta al Sys de TS (una corrección sobre el acceso de lectura/escritura al fs)
 * @param rootFiles una lista de archivos que se consideran dentro del proyecto
 * @param envía una copia del módulo TypeScript
 * @param compilerOptions las opciones para ejecutar este compilador
 * @param customTransformers Transformadores personalizados para esta ejecución del compilador
 */

export function createVirtualTypeScriptEnvironment(
  sys: System,
  rootFiles: string[],
  ts: TS,
  compilerOptions: CompilerOptions = {},
  customTransformers?: CustomTransformers
): VirtualTypeScriptEnvironment {
  const mergedCompilerOpts = { ...defaultCompilerOptions(ts), ...compilerOptions }

  const { languageServiceHost, updateFile } = createVirtualLanguageServiceHost(
    sys,
    rootFiles,
    mergedCompilerOpts,
    ts,
    customTransformers
  )
  const languageService = ts.createLanguageService(languageServiceHost)
  const diagnostics = languageService.getCompilerOptionsDiagnostics()

  if (diagnostics.length) {
    const compilerHost = createVirtualCompilerHost(sys, compilerOptions, ts)
    throw new Error(ts.formatDiagnostics(diagnostics, compilerHost.compilerHost))
  }

  return {
    // @ts-ignore
    name: "vfs",
    sys,
    languageService,
    getSourceFile: fileName => languageService.getProgram()?.getSourceFile(fileName),

    createFile: (fileName, content) => {
      updateFile(ts.createSourceFile(fileName, content, mergedCompilerOpts.target!, false))
    },
    updateFile: (fileName, content, optPrevTextSpan) => {
      const prevSourceFile = languageService.getProgram()!.getSourceFile(fileName)
      if (!prevSourceFile) {
        throw new Error("Did not find a source file for " + fileName)
      }
      const prevFullContents = prevSourceFile.text

      // TODO: ¿Validar si el tramo de texto predeterminado tiene un error fencepost?
      const prevTextSpan = optPrevTextSpan ?? ts.createTextSpan(0, prevFullContents.length)
      const newText =
        prevFullContents.slice(0, prevTextSpan.start) +
        content +
        prevFullContents.slice(prevTextSpan.start + prevTextSpan.length)
      const newSourceFile = ts.updateSourceFile(prevSourceFile, newText, {
        span: prevTextSpan,
        newLength: content.length,
      })

      updateFile(newSourceFile)
    },
  }
}

/**
 * Toma la lista de archivos lib para un objetivo en particular, devolverá un poco más de lo necesario (al incluir
 * el dom) pero, está bien
 *
 * @param target La línea base del objetivo de la configuración del compilador
 * @param ts Una copia del módulo TypeScript
 */
export const knownLibFilesForCompilerOptions = (compilerOptions: CompilerOptions, ts: TS) => {
  const target = compilerOptions.target || ts.ScriptTarget.ES5
  const lib = compilerOptions.lib || []

  const files = [
    "lib.d.ts",
    "lib.dom.d.ts",
    "lib.dom.iterable.d.ts",
    "lib.webworker.d.ts",
    "lib.webworker.importscripts.d.ts",
    "lib.scripthost.d.ts",
    "lib.es5.d.ts",
    "lib.es6.d.ts",
    "lib.es2015.collection.d.ts",
    "lib.es2015.core.d.ts",
    "lib.es2015.d.ts",
    "lib.es2015.generator.d.ts",
    "lib.es2015.iterable.d.ts",
    "lib.es2015.promise.d.ts",
    "lib.es2015.proxy.d.ts",
    "lib.es2015.reflect.d.ts",
    "lib.es2015.symbol.d.ts",
    "lib.es2015.symbol.wellknown.d.ts",
    "lib.es2016.array.include.d.ts",
    "lib.es2016.d.ts",
    "lib.es2016.full.d.ts",
    "lib.es2017.d.ts",
    "lib.es2017.full.d.ts",
    "lib.es2017.intl.d.ts",
    "lib.es2017.object.d.ts",
    "lib.es2017.sharedmemory.d.ts",
    "lib.es2017.string.d.ts",
    "lib.es2017.typedarrays.d.ts",
    "lib.es2018.asyncgenerator.d.ts",
    "lib.es2018.asynciterable.d.ts",
    "lib.es2018.d.ts",
    "lib.es2018.full.d.ts",
    "lib.es2018.intl.d.ts",
    "lib.es2018.promise.d.ts",
    "lib.es2018.regexp.d.ts",
    "lib.es2019.array.d.ts",
    "lib.es2019.d.ts",
    "lib.es2019.full.d.ts",
    "lib.es2019.object.d.ts",
    "lib.es2019.string.d.ts",
    "lib.es2019.symbol.d.ts",
    "lib.es2020.d.ts",
    "lib.es2020.full.d.ts",
    "lib.es2020.string.d.ts",
    "lib.es2020.symbol.wellknown.d.ts",
    "lib.es2020.bigint.d.ts",
    "lib.es2020.promise.d.ts",
    "lib.es2020.sharedmemory.d.ts",
    "lib.es2020.intl.d.ts",
    "lib.es2021.d.ts",
    "lib.es2021.full.d.ts",
    "lib.es2021.promise.d.ts",
    "lib.es2021.string.d.ts",
    "lib.es2021.weakref.d.ts",
    "lib.esnext.d.ts",
    "lib.esnext.full.d.ts",
    "lib.esnext.intl.d.ts",
    "lib.esnext.promise.d.ts",
    "lib.esnext.string.d.ts",
    "lib.esnext.weakref.d.ts",
  ]

  const targetToCut = ts.ScriptTarget[target]
  const matches = files.filter(f => f.startsWith(`lib.${targetToCut.toLowerCase()}`))
  const targetCutIndex = files.indexOf(matches.pop()!)

  const getMax = (array: number[]) =>
    array && array.length ? array.reduce((max, current) => (current > max ? current : max)) : undefined

  // Encuentra el índice para todo en
  const indexesForCutting = lib.map(lib => {
    const matches = files.filter(f => f.startsWith(`lib.${lib.toLowerCase()}`))
    if (matches.length === 0) return 0

    const cutIndex = files.indexOf(matches.pop()!)
    return cutIndex
  })

  const libCutIndex = getMax(indexesForCutting) || 0

  const finalCutIndex = Math.max(targetCutIndex, libCutIndex)
  return files.slice(0, finalCutIndex + 1)
}

/**
 * Configura un mapa con contenido lib tomando los archivos necesarios de
 * la copia local de typescript a través del sistema de archivos.
 */
export const createDefaultMapFromNodeModules = (compilerOptions: CompilerOptions, ts?: typeof import("typescript"), tsLibDirectory?: string) => {
  const tsModule = ts || require("typescript")
  const path = requirePath()
  const fs = requireFS()

  const getLib = (name: string) => {
    const lib = tsLibDirectory || path.dirname(require.resolve("typescript"))
    return fs.readFileSync(path.join(lib, name), "utf8")
  }

  const libs = knownLibFilesForCompilerOptions(compilerOptions, tsModule)
  const fsMap = new Map<string, string>()
  libs.forEach(lib => {
    fsMap.set("/" + lib, getLib(lib))
  })
  return fsMap
}

/**
 * Agrega recursivamente archivos del FS al mapa basándose en el directorio
 */
export const addAllFilesFromFolder = (map: Map<string, string>, workingDir: string): void => {
  const path = requirePath()
  const fs = requireFS()

  const walk = function (dir: string) {
    let results: string[] = []
    const list = fs.readdirSync(dir)
    list.forEach(function (file: string) {
      file = path.join(dir, file)
      const stat = fs.statSync(file)
      if (stat && stat.isDirectory()) {
        /* Ingresa en un subdirectorio */
        results = results.concat(walk(file))
      } else {
        /* Es un archivo */
        results.push(file)
      }
    })
    return results
  }

  const allFiles = walk(workingDir)

  allFiles.forEach(lib => {
    const fsPath = "/node_modules/@types" + lib.replace(workingDir, "")
    const content = fs.readFileSync(lib, "utf8")
    const validExtensions = [".ts", ".tsx"]

    if (validExtensions.includes(path.extname(fsPath))) {
      map.set(fsPath, content)
    }
  })
}

/** Agrega todos los archivos de node_modules/@types al Map de FS */
export const addFilesForTypesIntoFolder = (map: Map<string, string>) =>
  addAllFilesFromFolder(map, "node_modules/@types")

/**
 * Crea un map virtual de FS con los archivos lib de una versión de TypeScript
 * en particular basada en el objetivo, siempre incluye dom ATM.
 *
 * @param options El objetivo del compilador, que dicta las bibliotecas a configurar
 * @param version las versiones de TypeScript que son compatibles
 * @param cache si los valores se guardan en el almacenamiento local
 * @param ts envía una copia de la import de typescript
 * @param lzstring una copia opcional de la import de lz-string
 * @param fetcher un reemplazo opcional para la función de búsqueda global (pruebas principalmente)
 * @param storer un reemplazo opcional para localStorage global (pruebas principalmente)
 */
export const createDefaultMapFromCDN = (
  options: CompilerOptions,
  version: string,
  cache: boolean,
  ts: TS,
  lzstring?: typeof import("lz-string"),
  fetcher?: typeof fetch,
  storer?: typeof localStorage
) => {
  const fetchlike = fetcher || fetch
  const fsMap = new Map<string, string>()
  const files = knownLibFilesForCompilerOptions(options, ts)
  const prefix = `https://typescript.azureedge.net/cdn/${version}/typescript/lib/`

  function zip(str: string) {
    return lzstring ? lzstring.compressToUTF16(str) : str
  }

  function unzip(str: string) {
    return lzstring ? lzstring.decompressFromUTF16(str) : str
  }

  // Asigna las bibliotecas conocidas a una promesa de búsqueda de nodo y, a continuación, devuelve el contenido
  function uncached() {
    return Promise.all(files.map(lib => fetchlike(prefix + lib).then(resp => resp.text()))).then(contents => {
      contents.forEach((text, index) => fsMap.set("/" + files[index], text))
    })
  }

  // Una versión compatible con localstorage e lzzip de los archivos lib
  function cached() {
    const storelike = storer || localStorage

    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      // Elimina todo lo que no sea de esta versión
      if (key.startsWith("ts-lib-") && !key.startsWith("ts-lib-" + version)) {
        storelike.removeItem(key)
      }
    })

    return Promise.all(
      files.map(lib => {
        const cacheKey = `ts-lib-${version}-${lib}`
        const content = storelike.getItem(cacheKey)

        if (!content) {
          // Realiza la llamada API y almacena el contenido de texto en caché
          return fetchlike(prefix + lib)
            .then(resp => resp.text())
            .then(t => {
              storelike.setItem(cacheKey, zip(t))
              return t
            })
        } else {
          return Promise.resolve(unzip(content))
        }
      })
    ).then(contents => {
      contents.forEach((text, index) => {
        const name = "/" + files[index]
        fsMap.set(name, text)
      })
    })
  }

  const func = cache ? cached : uncached
  return func().then(() => fsMap)
}

function notImplemented(methodName: string): any {
  throw new Error(`El método '${methodName}' no se ha implementado.`)
}

function audit<ArgsT extends any[], ReturnT>(
  name: string,
  fn: (...args: ArgsT) => ReturnT
): (...args: ArgsT) => ReturnT {
  return (...args) => {
    const res = fn(...args)

    const smallres = typeof res === "string" ? res.slice(0, 80) + "..." : res
    debugLog("> " + name, ...args)
    debugLog("< " + smallres)

    return res
  }
}

/** Las opciones predeterminadas del compilador si TypeScript pudiera cambiar las opciones del compilador */
const defaultCompilerOptions = (ts: typeof import("typescript")): CompilerOptions => {
  return {
    ...ts.getDefaultCompilerOptions(),
    jsx: ts.JsxEmit.React,
    strict: true,
    esModuleInterop: true,
    module: ts.ModuleKind.ESNext,
    suppressOutputPathCheck: true,
    skipLibCheck: true,
    skipDefaultLibCheck: true,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
  }
}

// "/DOM.d.ts" => "/lib.dom.d.ts"
const libize = (path: string) => path.replace("/", "/lib.").toLowerCase()

/**
 * Crea en memoria un objeto System que se puede usar en un programa TypeScript, este
 * es el que proporciona aspectos de lectura/escritura del fs virtual
 */
export function createSystem(files: Map<string, string>): System {
  return {
    args: [],
    createDirectory: () => notImplemented("createDirectory"),
    // TODO: debería hacer un árbol de archivos real
    directoryExists: audit("directoryExists", directory => {
      return Array.from(files.keys()).some(path => path.startsWith(directory))
    }),
    exit: () => notImplemented("exit"),
    fileExists: audit("fileExists", fileName => files.has(fileName) || files.has(libize(fileName))),
    getCurrentDirectory: () => "/",
    getDirectories: () => [],
    getExecutingFilePath: () => notImplemented("getExecutingFilePath"),
    readDirectory: audit("readDirectory", directory => (directory === "/" ? Array.from(files.keys()) : [])),
    readFile: audit("readFile", fileName => files.get(fileName) || files.get(libize(fileName))),
    resolvePath: path => path,
    newLine: "\n",
    useCaseSensitiveFileNames: true,
    write: () => notImplemented("write"),
    writeFile: (fileName, contents) => {
      files.set(fileName, contents)
    },
  }
}

/**
 * Crea un objeto System respaldado por un sistema de archivos que se puede usar en un programa TypeScript, proporcionas
 * un conjunto de archivos virtuales que tienen prioridad sobre las versiones FS, luego una ruta a la raíz de tu
 * proyecto (básicamente el directorio en el que vive tu node_modules)
 */
export function createFSBackedSystem(files: Map<string, string>, _projectRoot: string, ts: TS, tsLibDirectory?: string): System {
  // Necesitamos crear un directorio aislado para tsconfig, pero también debemos poder resolver la
  // estructura de node_modules existente retrocediendo a través de la historia.
  const root = _projectRoot + "/vfs"
  const path = requirePath()

  // El sistema predeterminado en TypeScript
  const nodeSys = ts.sys
  const tsLib = tsLibDirectory ?? path.dirname(require.resolve("typescript"))

  return {
    // @ts-ignore
    name: "fs-vfs",
    root,
    args: [],
    createDirectory: () => notImplemented("createDirectory"),
    // TODO: debería hacer un árbol de archivos real
    directoryExists: audit("directoryExists", directory => {
      return Array.from(files.keys()).some(path => path.startsWith(directory)) || nodeSys.directoryExists(directory)
    }),
    exit: nodeSys.exit,
    fileExists: audit("fileExists", fileName => {
      if (files.has(fileName)) return true
      // No permite que otros tsconfigs terminen tocando el vfs
      if (fileName.includes("tsconfig.json") || fileName.includes("tsconfig.json")) return false
      if (fileName.startsWith("/lib")) {
        const tsLibName = `${tsLib}/${fileName.replace("/", "")}`
        return nodeSys.fileExists(tsLibName)
      }
      return nodeSys.fileExists(fileName)
    }),
    getCurrentDirectory: () => root,
    getDirectories: nodeSys.getDirectories,
    getExecutingFilePath: () => notImplemented("getExecutingFilePath"),
    readDirectory: audit("readDirectory", (...args) => {
      if (args[0] === "/") {
        return Array.from(files.keys())
      } else {
        return nodeSys.readDirectory(...args)
      }
    }),
    readFile: audit("readFile", fileName => {
      if (files.has(fileName)) return files.get(fileName)
      if (fileName.startsWith("/lib")) {
        const tsLibName = `${tsLib}/${fileName.replace("/", "")}`
        const result = nodeSys.readFile(tsLibName)
        if (!result) {
          const libs = nodeSys.readDirectory(tsLib)
          throw new Error(
            `TSVFS: Se realizó una solicitud a ${tsLibName} pero no se encontró ningún archivo en el mapa de archivos. Es probable que tengas una discrepancia entre las opciones del compilador para la descarga de CDN y el programa compilador. Bibliotecas existentes: ${libs}.`
          )
        }
        return result
      }
      return nodeSys.readFile(fileName)
    }),
    resolvePath: path => {
      if (files.has(path)) return path
      return nodeSys.resolvePath(path)
    },
    newLine: "\n",
    useCaseSensitiveFileNames: true,
    write: () => notImplemented("write"),
    writeFile: (fileName, contents) => {
      files.set(fileName, contents)
    },
  }
}

/**
 * Crea un CompilerHost en memoria, que esencialmente es un contenedor adicional para System
 * que trabaja con objetos TypeScript - devuelve un host compilador y una forma de agregar una nueva instancia
 * de SourceFile al sistema de archivos en memoria.
 */
export function createVirtualCompilerHost(sys: System, compilerOptions: CompilerOptions, ts: TS) {
  const sourceFiles = new Map<string, SourceFile>()
  const save = (sourceFile: SourceFile) => {
    sourceFiles.set(sourceFile.fileName, sourceFile)
    return sourceFile
  }

  type Return = {
    compilerHost: CompilerHost
    updateFile: (sourceFile: SourceFile) => boolean
  }

  const vHost: Return = {
    compilerHost: {
      ...sys,
      getCanonicalFileName: fileName => fileName,
      getDefaultLibFileName: () => "/" + ts.getDefaultLibFileName(compilerOptions), // '/lib.d.ts',
      // getDefaultLibLocation: () => '/',
      getDirectories: () => [],
      getNewLine: () => sys.newLine,
      getSourceFile: fileName => {
        return (
          sourceFiles.get(fileName) ||
          save(
            ts.createSourceFile(
              fileName,
              sys.readFile(fileName)!,
              compilerOptions.target || defaultCompilerOptions(ts).target!,
              false
            )
          )
        )
      },
      useCaseSensitiveFileNames: () => sys.useCaseSensitiveFileNames,
    },
    updateFile: sourceFile => {
      const alreadyExists = sourceFiles.has(sourceFile.fileName)
      sys.writeFile(sourceFile.fileName, sourceFile.text)
      sourceFiles.set(sourceFile.fileName, sourceFile)
      return alreadyExists
    },
  }
  return vHost
}

/**
 * Crea un objeto que puede albergar un servicio de idioma contra el sistema de archivos virtual
 */
export function createVirtualLanguageServiceHost(
  sys: System,
  rootFiles: string[],
  compilerOptions: CompilerOptions,
  ts: TS,
  customTransformers?: CustomTransformers
) {
  const fileNames = [...rootFiles]
  const { compilerHost, updateFile } = createVirtualCompilerHost(sys, compilerOptions, ts)
  const fileVersions = new Map<string, string>()
  let projectVersion = 0
  const languageServiceHost: LanguageServiceHost = {
    ...compilerHost,
    getProjectVersion: () => projectVersion.toString(),
    getCompilationSettings: () => compilerOptions,
    getCustomTransformers: () => customTransformers,
    // A couple weeks of 4.8 TypeScript nightlies had a bug where the Program's
    // list of files was just a reference to the array returned by this host method,
    // which means mutations by the host that ought to result in a new Program being
    // created were not detected, since the old list of files and the new list of files
    // were in fact a reference to the same underlying array. That was fixed in
    // https://github.com/microsoft/TypeScript/pull/49813, but since the twoslash runner
    // is used in bisecting for changes, it needs to guard against being busted in that
    // couple-week period, so we defensively make a slice here.
    getScriptFileNames: () => fileNames.slice(),
    getScriptSnapshot: fileName => {
      const contents = sys.readFile(fileName)
      if (contents) {
        return ts.ScriptSnapshot.fromString(contents)
      }
      return
    },
    getScriptVersion: fileName => {
      return fileVersions.get(fileName) || "0"
    },
    writeFile: sys.writeFile,
  }

  type Return = {
    languageServiceHost: LanguageServiceHost
    updateFile: (sourceFile: import("typescript").SourceFile) => void
  }

  const lsHost: Return = {
    languageServiceHost,
    updateFile: sourceFile => {
      projectVersion++
      fileVersions.set(sourceFile.fileName, projectVersion.toString())
      if (!fileNames.includes(sourceFile.fileName)) {
        fileNames.push(sourceFile.fileName)
      }
      updateFile(sourceFile)
    },
  }
  return lsHost
}

const requirePath = () => {
  return require(String.fromCharCode(112, 97, 116, 104)) as typeof import("path")
}

const requireFS = () => {
  return require(String.fromCharCode(102, 115)) as typeof import("fs")
}
