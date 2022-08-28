import { sandboxTheme, sandboxThemeDark } from "./theme"
import { TypeScriptWorker } from "./tsWorker"
import {
  getDefaultSandboxCompilerOptions,
  getCompilerOptionsFromParams,
  createURLQueryWithCompilerOptions,
} from "./compilerOptions"
import lzstring from "./vendor/lzstring.min"
import { supportedReleases } from "./release_data"
import { getInitialCode } from "./getInitialCode"
import { extractTwoSlashCompilerOptions, twoslashCompletions } from "./twoslashSupport"
import * as tsvfs from "./vendor/typescript-vfs"
import { setupTypeAcquisition } from "./vendor/ata/index"

type CompilerOptions = import("monaco-editor").languages.typescript.CompilerOptions
type Monaco = typeof import("monaco-editor")

/**
 * Estas son configuraciones para el playground que son equivalentes a accesorios en React
 * cualquier cambio en él debería requerir una nueva configuración del playground
 */
export type SandboxConfig = {
  /** El código fuente predeterminado para el playground */
  text: string
  /** @deprecated */
  useJavaScript?: boolean
  /** El archivo predeterminado para el playground */
  filetype: "js" | "ts" | "d.ts"
  /** Opciones del compilador que se reenvían automáticamente en */
  compilerOptions: CompilerOptions
  /** Redefiniciones de configuración de monaco opcionales */
  monacoSettings?: import("monaco-editor").editor.IEditorOptions
  /** Adquirir tipos a través de la adquisición de tipos */
  acquireTypes: boolean
  /** Compatibilidad con las opciones del compilador twoslash */
  supportTwoslashCompilerOptions: boolean
  /** Obtiene el texto a través de parámetros de consulta y almacenamiento local, útil cuando el editor es la experiencia principal */
  suppressAutomaticallyGettingDefaultText?: true
  /** Suprime la configuración de las opciones del compilador de los indicadores del compilador de los parámetros de consulta */
  suppressAutomaticallyGettingCompilerFlags?: true
  /** Ruta opcional al script de la clase contenedora de trabajadores de TypeScript, consulta https://github.com/microsoft/monaco-typescript/pull/65 */
  customTypeScriptWorkerPath?: string
  /** Sistema de registro */
  logger: {
    log: (...args: any[]) => void
    error: (...args: any[]) => void
    groupCollapsed: (...args: any[]) => void
    groupEnd: (...args: any[]) => void
  }
} & (
  | { /** el ID de un nodo dom para agregar a monaco */ domID: string }
  | { /** el nodo dom para agregar a monaco */ elementToAppend: HTMLElement }
)

const languageType = (config: SandboxConfig) => (config.filetype === "js" ? "javascript" : "typescript")

// Básicamente, Android y monaco son bastante malos, esto los hace menos malos.
// Ve https://github.com/microsoft/pxt/pull/7099 para esto, y la lectura
// completa está en https://github.com/microsoft/monaco-editor/issues/563
const isAndroid = navigator && /android/i.test(navigator.userAgent)

/** Configuración predeterminada de monaco para el playground */
const sharedEditorOptions: import("monaco-editor").editor.IEditorOptions = {
  scrollBeyondLastLine: true,
  scrollBeyondLastColumn: 3,
  minimap: {
    enabled: false,
  },
  lightbulb: {
    enabled: true,
  },
  quickSuggestions: {
    other: !isAndroid,
    comments: !isAndroid,
    strings: !isAndroid,
  },
  acceptSuggestionOnCommitCharacter: !isAndroid,
  acceptSuggestionOnEnter: !isAndroid ? "on" : "off",
  accessibilitySupport: !isAndroid ? "on" : "off",
  inlayHints: {
    enabled: true,
  },
}

/** La configuración predeterminada a la que aplicamos un sobre parcial */
export function defaultPlaygroundSettings() {
  const config: SandboxConfig = {
    text: "",
    domID: "",
    compilerOptions: {},
    acquireTypes: true,
    filetype: "ts",
    supportTwoslashCompilerOptions: false,
    logger: console,
  }
  return config
}

function defaultFilePath(config: SandboxConfig, compilerOptions: CompilerOptions, monaco: Monaco) {
  const isJSX = compilerOptions.jsx !== monaco.languages.typescript.JsxEmit.None
  const ext = isJSX && config.filetype !== "d.ts" ? config.filetype + "x" : config.filetype
  return "input." + ext
}

/** Crea una referencia de archivo monaco, básicamente una ruta elegante */
function createFileUri(config: SandboxConfig, compilerOptions: CompilerOptions, monaco: Monaco) {
  return monaco.Uri.file(defaultFilePath(config, compilerOptions, monaco))
}

/** Crea un editor de sandbox y devuelve un conjunto de funciones útiles y el editor */
export const createTypeScriptSandbox = (
  partialConfig: Partial<SandboxConfig>,
  monaco: Monaco,
  ts: typeof import("typescript")
) => {
  const config = { ...defaultPlaygroundSettings(), ...partialConfig }
  if (!("domID" in config) && !("elementToAppend" in config))
    throw new Error("You did not provide a domID or elementToAppend")

  const defaultText = config.suppressAutomaticallyGettingDefaultText
    ? config.text
    : getInitialCode(config.text, document.location)

  // Predeterminados
  const compilerDefaults = getDefaultSandboxCompilerOptions(config, monaco)

  // Toma las banderas del compilador a través de los parámetros de consulta
  let compilerOptions: CompilerOptions
  if (!config.suppressAutomaticallyGettingCompilerFlags) {
    const params = new URLSearchParams(location.search)
    let queryParamCompilerOptions = getCompilerOptionsFromParams(compilerDefaults, ts, params)
    if (Object.keys(queryParamCompilerOptions).length)
      config.logger.log("[Compiler] Found compiler options in query params: ", queryParamCompilerOptions)
    compilerOptions = { ...compilerDefaults, ...queryParamCompilerOptions }
  } else {
    compilerOptions = compilerDefaults
  }

  const isJSLang = config.filetype === "js"
  // No permite un estado como allowJs = false
  if (isJSLang) {
    compilerOptions.allowJs = true
  }

  const language = languageType(config)
  const filePath = createFileUri(config, compilerOptions, monaco)
  const element = "domID" in config ? document.getElementById(config.domID) : (config as any).elementToAppend

  const model = monaco.editor.createModel(defaultText, language, filePath)
  monaco.editor.defineTheme("sandbox", sandboxTheme)
  monaco.editor.defineTheme("sandbox-dark", sandboxThemeDark)
  monaco.editor.setTheme("sandbox")

  const monacoSettings = Object.assign({ model }, sharedEditorOptions, config.monacoSettings || {})
  const editor = monaco.editor.create(element, monacoSettings)

  const getWorker = isJSLang
    ? monaco.languages.typescript.getJavaScriptWorker
    : monaco.languages.typescript.getTypeScriptWorker

  const defaults = isJSLang
    ? monaco.languages.typescript.javascriptDefaults
    : monaco.languages.typescript.typescriptDefaults

  // @ts-ignore - estos existen
  if (config.customTypeScriptWorkerPath && defaults.setWorkerOptions) {
    // @ts-ignore - esta función debe existir para haber hasta llegado aquí
    defaults.setWorkerOptions({
      customWorkerPath: config.customTypeScriptWorkerPath,
    })
  }

  defaults.setDiagnosticsOptions({
    ...defaults.getDiagnosticsOptions(),
    noSemanticValidation: false,
    // Esto es cuando no se encuentra tslib
    diagnosticCodesToIgnore: [2354],
  })

  // En el futuro, sería bueno agregar soporte para 'agregar muchos archivos'
  const addLibraryToRuntime = (code: string, _path: string) => {
    const path = "file://" + _path
    defaults.addExtraLib(code, path)
    const uri = monaco.Uri.file(path)
    if (monaco.editor.getModel(uri) === null) {
      monaco.editor.createModel(code, "javascript", uri)
    }
    config.logger.log(`[ATA] Adding ${path} to runtime`, { code })
  }

  const getTwoSlashCompilerOptions = extractTwoSlashCompilerOptions(ts)

  // Autocompleción de comentarios de twoslash
  if (config.supportTwoslashCompilerOptions) {
    const langs = ["javascript", "typescript"]
    langs.forEach(l =>
      monaco.languages.registerCompletionItemProvider(l, {
        triggerCharacters: ["@", "/", "-"],
        provideCompletionItems: twoslashCompletions(ts, monaco),
      })
    )
  }

  const ata = setupTypeAcquisition({
    projectName: "TypeScript Playground",
    typescript: ts,
    logger: console,
    delegate: {
      receivedFile: addLibraryToRuntime,
      progress: (downloaded: number, total: number) => {
        // console.log({ dl, ttl })
      },
      started: () => {
        console.log("ATA start")
      },
      finished: f => {
        console.log("ATA done")
      },
    },
  })

  const textUpdated = () => {
    const code = editor.getModel()!.getValue()

    if (config.supportTwoslashCompilerOptions) {
      const configOpts = getTwoSlashCompilerOptions(code)
      updateCompilerSettings(configOpts)
    }

    if (config.acquireTypes) {
      ata(code)
    }
  }

  // Funciones de sandbox eliminadas como twoslash y adquisición de tipos una vez por segundo
  let debouncingTimer = false
  editor.onDidChangeModelContent(_e => {
    if (debouncingTimer) return
    debouncingTimer = true
    setTimeout(() => {
      debouncingTimer = false
      textUpdated()
    }, 1000)
  })

  config.logger.log("[Compiler] Set compiler options: ", compilerOptions)
  defaults.setCompilerOptions(compilerOptions)

  // Para permitir que los clientes se conecten a los cambios de configuración del compilador
  let didUpdateCompilerSettings = (opts: CompilerOptions) => {}

  const updateCompilerSettings = (opts: CompilerOptions) => {
    const newKeys = Object.keys(opts)
    if (!newKeys.length) return

    // No actualices una configuración del compilador si es la misma
    // que la configuración actual
    newKeys.forEach(key => {
      if (compilerOptions[key] == opts[key]) delete opts[key]
    })

    if (!Object.keys(opts).length) return

    config.logger.log("[Compiler] Updating compiler options: ", opts)

    compilerOptions = { ...compilerOptions, ...opts }
    defaults.setCompilerOptions(compilerOptions)
    didUpdateCompilerSettings(compilerOptions)
  }

  const updateCompilerSetting = (key: keyof CompilerOptions, value: any) => {
    config.logger.log("[Compiler] Setting compiler options ", key, "to", value)
    compilerOptions[key] = value
    defaults.setCompilerOptions(compilerOptions)
    didUpdateCompilerSettings(compilerOptions)
  }

  const setCompilerSettings = (opts: CompilerOptions) => {
    config.logger.log("[Compiler] Setting compiler options: ", opts)
    compilerOptions = opts
    defaults.setCompilerOptions(compilerOptions)
    didUpdateCompilerSettings(compilerOptions)
  }

  const getCompilerOptions = () => {
    return compilerOptions
  }

  const setDidUpdateCompilerSettings = (func: (opts: CompilerOptions) => void) => {
    didUpdateCompilerSettings = func
  }

  /** Obtiene los resultados de compilar el código de tu editor */
  const getEmitResult = async () => {
    const model = editor.getModel()!
    const client = await getWorkerProcess()
    return await client.getEmitOutput(model.uri.toString())
  }

  /** Obtiene el JS de compilar el código de tu editor */
  const getRunnableJS = async () => {
    // Esto no es del todo _correcto_ en teoría, podemos bajar el nivel de JS -> JS
    // pero un navegador básicamente siempre es esnext-y y configura allowJs y
    // checkJs en realidad no proporciona el archivo .js de nivel inferior en la salida
    // más adelante en la línea.
    if (isJSLang) {
      return getText()
    }
    const result = await getEmitResult()
    const firstJS = result.outputFiles.find((o: any) => o.name.endsWith(".js") || o.name.endsWith(".jsx"))
    return (firstJS && firstJS.text) || ""
  }

  /** Obtiene el DTS para el JS/TS de compilar el código de tu editor */
  const getDTSForCode = async () => {
    const result = await getEmitResult()
    return result.outputFiles.find((o: any) => o.name.endsWith(".d.ts"))!.text
  }

  const getWorkerProcess = async (): Promise<TypeScriptWorker> => {
    const worker = await getWorker()
    // @ts-ignore
    return await worker(model.uri)
  }

  const getDomNode = () => editor.getDomNode()!
  const getModel = () => editor.getModel()!
  const getText = () => getModel().getValue()
  const setText = (text: string) => getModel().setValue(text)

  const setupTSVFS = async (fsMapAdditions?: Map<string, string>) => {
    const fsMap = await tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts, lzstring)
    fsMap.set(filePath.path, getText())
    if (fsMapAdditions) {
      fsMapAdditions.forEach((v, k) => fsMap.set(k, v))
    }

    const system = tsvfs.createSystem(fsMap)
    const host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts)

    const program = ts.createProgram({
      rootNames: [...fsMap.keys()],
      options: compilerOptions,
      host: host.compilerHost,
    })

    return {
      program,
      system,
      host,
      fsMap,
    }
  }

  /**
   * Crea un programa TS, si estás haciendo algo complejo
   * es probable que desee setupTSVFS en su lugar y puedas extraer el programa de eso
   *
   * Precaución: Se ejecuta en el hilo principal
   */
  const createTSProgram = async () => {
    const tsvfs = await setupTSVFS()
    return tsvfs.program
  }

  const getAST = async () => {
    const program = await createTSProgram()
    program.emit()
    return program.getSourceFile(filePath.path)!
  }

  // Transmite los lanzamientos admitidos para el playground
  const supportedVersions = supportedReleases

  textUpdated()

  return {
    /** La misma configuración que pasaste en */
    config,
    /** Una lista de versiones de TypeScript que puedes usar con el espacio aislado de TypeScript */
    supportedVersions,
    /** La instancia del editor monaco */
    editor,
    /** Ya sea "typescript" o "javascript" dependiendo de tu configuración */
    language,
    /** El módulo exterior de monaco, el resultado de require("monaco-editor") */
    monaco,
    /** Obtiene un trabajador monaco-typescript, esto te dará acceso a un servidor de idioma. Nota: prefiere esto para el trabajo del servidor de idiomas porque sucede en un trabajador web. */
    getWorkerProcess,
    /** Se puede usar una copia de require("@typescript/vfs") para configurar rápidamente un compilador en memoria que se ejecute para AST, o para obtener resultados complejos del servidor de idiomas (todo lo anterior se debe serializar cuando se pasa)*/
    tsvfs,
    /** Obtiene todos los diferentes archivos emitidos después de ejecutar TypeScript */
    getEmitResult,
    /** Obtiene solo el JavaScript para tu sandbox, se transpilará si solo está en TS */
    getRunnableJS,
    /** Obtiene la salida DTS del código principal en el editor */
    getDTSForCode,
    /** El nodo dom del monaco-editor, usado para mostrar/ocultar el editor */
    getDomNode,
    /** El modelo es un objeto que monaco usa para realizar un seguimiento del texto en el editor. Usa esto para modificar directamente el texto en el editor */
    getModel,
    /** Obtiene el texto del modelo principal, que es el texto en el editor */
    getText,
    /** Atajo para configurar el contenido de texto del modelo que actualizaría el editor */
    setText,
    /** Obtiene el AST del texto actual en monaco - usa `createTSProgram`, por lo que la advertencia de rendimiento también se aplica allí */
    getAST,
    /** El módulo que obtienes de require("typescript") */
    ts,
    /** Crea un nuevo Programa, un modelo de datos de TypeScript que represente todo el proyecto. Así como algunos de los
     * objetos primitivos que normalmente necesitarías para trabajar con los archivos.
     *
     * La primera vez que se llama, tiene que descargar todos los archivos DTS que se necesitan para una ejecución exacta del compilador. Lo cual
     * como máximo es de aproximadamente 1.5MB - después de eso, las descargas posteriores de archivos dts lib provienen de localStorage.
     *
     * Trata de usar esto con moderación ya que, computacionalmente, puede ser costoso, como mínimo deberías usar la configuración de debounced.
     *
     * Acepta un fsMap opcional que puedes usar para agregar cualquier archivo o sobrescribir el archivo predeterminado.
     *
     * TODO: Sería bueno crear una manera fácil de tener una sola instancia de programa que se actualice para ti.
     * cuando el modelo de monaco cambia.
     */
    setupTSVFS,
    /** Utiliza la llamada setupTSVFS anterior, pero solo devuelve el programa */
    createTSProgram,
    /** Las opciones de compilación predeterminadas de Sandbox */
    compilerDefaults,
    /** Las opciones actuales del compilador de Sandbox */
    getCompilerOptions,
    /** Reemplaza las opciones del compilador de Sandbox */
    setCompilerSettings,
    /** Sobrescribe las opciones del compilador de Sandbox */
    updateCompilerSetting,
    /** Actualiza una sola opción del compilador en el Sandbox */
    updateCompilerSettings,
    /** Una forma de obtener devoluciones de llamada cuando la configuración del compilador ha cambiado */
    setDidUpdateCompilerSettings,
    /** Una copia de lzstring, que se usa para archivar/desarchivar código */
    lzstring,
    /** Devuelve las opciones del compilador que se encuentran en los parámetros de la página actual */
    createURLQueryWithCompilerOptions,
    /**
     * @deprecated Usa `getTwoSlashCompilerOptions` en su lugar.
     *
     * Devuelve las opciones del compilador en el código fuente utilizando la notación de twoslash
     */
    getTwoSlashComplierOptions: getTwoSlashCompilerOptions,
    /** Devuelve las opciones del compilador en el código fuente utilizando la notación de twoslash */
    getTwoSlashCompilerOptions,
    /** Obtiene al idioma monaco actual, así es como hablas con los trabajadores web en segundo plano */
    languageServiceDefaults: defaults,
    /** La ruta que representa el archivo actual usando las opciones actuales del compilador */
    filepath: filePath.path,
    /** Agrega un archivo al vfs usado por el editor */
    addLibraryToRuntime,
  }
}

export type Sandbox = ReturnType<typeof createTypeScriptSandbox>
