import { SandboxConfig } from "."

type CompilerOptions = import("monaco-editor").languages.typescript.CompilerOptions
type Monaco = typeof import("monaco-editor")

/**
 * Estos son los valores predeterminados, pero también actúan como la lista de todas las opciones del compilador
 * que se analizan en los parámetros de consulta.
 */
export function getDefaultSandboxCompilerOptions(config: SandboxConfig, monaco: Monaco) {
  const useJavaScript = config.filetype === "js"
  const settings: CompilerOptions = {
    strict: true,

    noImplicitAny: true,
    strictNullChecks: !useJavaScript,
    strictFunctionTypes: true,
    strictPropertyInitialization: true,
    strictBindCallApply: true,
    noImplicitThis: true,
    noImplicitReturns: true,
    noUncheckedIndexedAccess: false,

    // 3.7 off, 3.8 on I think
    useDefineForClassFields: false,

    alwaysStrict: true,
    allowUnreachableCode: false,
    allowUnusedLabels: false,

    downlevelIteration: false,
    noEmitHelpers: false,
    noLib: false,
    noStrictGenericChecks: false,
    noUnusedLocals: false,
    noUnusedParameters: false,

    esModuleInterop: true,
    preserveConstEnums: false,
    removeComments: false,
    skipLibCheck: false,

    checkJs: useJavaScript,
    allowJs: useJavaScript,
    declaration: true,

    importHelpers: false,

    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,

    target: monaco.languages.typescript.ScriptTarget.ES2017,
    jsx: monaco.languages.typescript.JsxEmit.React,
    module: monaco.languages.typescript.ModuleKind.ESNext,
  }

  return { ...settings, ...config.compilerOptions }
}

/**
 * Recorre todas las entradas en las opciones del compilador existentes y luego las compara con los
 * parámetros de consulta y devuelve un objeto que es la configuración modificada a través de los parámetros de consulta
 */
export const getCompilerOptionsFromParams = (
  playgroundDefaults: CompilerOptions,
  ts: typeof import("typescript"),
  params: URLSearchParams
): CompilerOptions => {
  const returnedOptions: CompilerOptions = {}

  params.forEach((val, key) => {
    // Primero usa el objeto predeterminado para eliminar las banderas del compilador que ya están configuradas en el valor predeterminado
    if (playgroundDefaults[key]) {
      let toSet = undefined
      if (val === "true" && playgroundDefaults[key] !== true) {
        toSet = true
      } else if (val === "false" && playgroundDefaults[key] !== false) {
        toSet = false
      } else if (!isNaN(parseInt(val, 10)) && playgroundDefaults[key] !== parseInt(val, 10)) {
        toSet = parseInt(val, 10)
      }

      if (toSet !== undefined) returnedOptions[key] = toSet
    } else {
      // Si eso no funciona, verifica que la bandera exista y permita que pase
      // @ts-ignore
      const flagExists = ts.optionDeclarations.find(opt => opt.name === key)
      if (flagExists) {
        let realValue: number | boolean = true
        if (val === "false") realValue = false
        if (!isNaN(parseInt(val, 10))) realValue = parseInt(val, 10)
        returnedOptions[key] = realValue
      }
    }
  })

  return returnedOptions
}

// No se puede configurar sandbox para que sea del tipo correcto porque el parámetro contendría esta función

/** Obtiene una representación de cadena de consulta (hash + queries) */
export const createURLQueryWithCompilerOptions = (_sandbox: any, paramOverrides?: any): string => {
  const sandbox = _sandbox as import("./index").Sandbox
  const initialOptions = new URLSearchParams(document.location.search)

  const compilerOptions = sandbox.getCompilerOptions()
  const compilerDefaults = sandbox.compilerDefaults
  const diff = Object.entries(compilerOptions).reduce((acc, [key, value]) => {
    if (value !== compilerDefaults[key]) {
      // @ts-ignore
      acc[key] = compilerOptions[key]
    }

    return acc
  }, {})

  // El texto del TS/JS como el hash
  const hash = `code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`

  let urlParams: any = Object.assign({}, diff)
  for (const param of ["lib", "ts"]) {
    const params = new URLSearchParams(location.search)
    if (params.has(param)) {
      // Caso especial the nightly donde usa la versión TS para codificar
      // la construcción nocturna
      if (param === "ts" && (params.get(param) === "Nightly" || params.get(param) === "next")) {
        urlParams["ts"] = sandbox.ts.version
      } else {
        urlParams["ts"] = params.get(param)
      }
    }
  }

  // Admite el envío de la selección, pero solo si hay una selección y no es todo
  const s = sandbox.editor.getSelection()

  const isNotEmpty =
    (s && s.selectionStartLineNumber !== s.positionLineNumber) || (s && s.selectionStartColumn !== s.positionColumn)

  const range = sandbox.editor.getModel()!.getFullModelRange()
  const isFull =
    s &&
    s.selectionStartLineNumber === range.startLineNumber &&
    s.selectionStartColumn === range.startColumn &&
    s.positionColumn === range.endColumn &&
    s.positionLineNumber === range.endLineNumber

  if (s && isNotEmpty && !isFull) {
    urlParams["ssl"] = s.selectionStartLineNumber
    urlParams["ssc"] = s.selectionStartColumn
    urlParams["pln"] = s.positionLineNumber
    urlParams["pc"] = s.positionColumn
  } else {
    urlParams["ssl"] = undefined
    urlParams["ssc"] = undefined
    urlParams["pln"] = undefined
    urlParams["pc"] = undefined
  }

  if (sandbox.config.filetype !== "ts") urlParams["filetype"] = sandbox.config.filetype

  if (paramOverrides) {
    urlParams = { ...urlParams, ...paramOverrides }
  }

  // @ts-ignore - esto está en MDN pero no en libdom
  const hasInitialOpts = initialOptions.keys().length > 0

  if (Object.keys(urlParams).length > 0 || hasInitialOpts) {
    let queryString = Object.entries(urlParams)
      .filter(([_k, v]) => v !== undefined)
      .filter(([_k, v]) => v !== null)
      .map(([key, value]) => {
        return `${key}=${encodeURIComponent(value as string)}`
      })
      .join("&")

    // Queremos mantener las variables de consulta personalizadas, que
    // generalmente son utilizadas por complementos de playground, con la excepción
    // siendo el parámetro install-plugin y cualquier opción del compilador
    // que tienen un valor predeterminado

    initialOptions.forEach((value, key) => {
      const skip = ["ssl", "ssc", "pln", "pc"]
      if (skip.includes(key)) return
      if (queryString.includes(key)) return
      if (compilerOptions[key]) return

      queryString += `&${key}=${value}`
    })

    return `?${queryString}#${hash}`
  } else {
    return `#${hash}`
  }
}
