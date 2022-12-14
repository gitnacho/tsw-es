let hasLocalStorage = false
try {
  hasLocalStorage = typeof localStorage !== `undefined`
} catch (error) { }
const hasProcess = typeof process !== `undefined`
const shouldDebug = (hasLocalStorage && localStorage.getItem("DEBUG")) || (hasProcess && process.env.DEBUG)

type LZ = typeof import("lz-string")
type TS = typeof import("typescript")
type CompilerOptions = import("typescript").CompilerOptions
type CustomTransformers = import("typescript").CustomTransformers

import { parsePrimitive, cleanMarkdownEscaped, typesToExtension, getIdentifierTextSpans, getClosestWord } from "./utils"
import { validateInput, validateCodeForErrors } from "./validation"

import { createSystem, createVirtualTypeScriptEnvironment, createFSBackedSystem } from "@typescript/vfs"

const log = shouldDebug ? console.log : (_message?: any, ..._optionalParams: any[]) => ""

// Hackea algunas cosas internas
declare module "typescript" {
  type Option = {
    name: string
    type: "list" | "boolean" | "number" | "string" | import("typescript").Map<any>
    element?: Option
  }

  const optionDeclarations: Array<Option>
}

type QueryPosition = {
  kind: "query" | "completion"
  offset: number
  text: string | undefined
  docs: string | undefined
  line: number
}

type PartialQueryResults = {
  kind: "query"
  text: string
  docs: string | undefined
  line: number
  offset: number
  file: string
}

type PartialCompletionResults = {
  kind: "completions"
  completions: import("typescript").CompletionEntry[]
  completionPrefix: string

  line: number
  offset: number
  file: string
}

type HighlightPosition = TwoSlashReturn["highlights"][number]

export class TwoslashError extends Error {
  public title: string
  public description: string
  public recommendation: string
  public code: string | undefined

  constructor(title: string, description: string, recommendation: string, code?: string | undefined) {
    let message = `
## ${title}

${description}
`
    if (recommendation) {
      message += `\n${recommendation}`
    }

    if (code) {
      message += `\n${code}`
    }

    super(message)
    this.title = title
    this.description = description
    this.recommendation = recommendation
    this.code = code
  }
}

function filterHighlightLines(codeLines: string[]): { highlights: HighlightPosition[]; queries: QueryPosition[] } {
  const highlights: HighlightPosition[] = []
  const queries: QueryPosition[] = []

  let nextContentOffset = 0
  let contentOffset = 0
  let removedLines = 0

  for (let i = 0; i < codeLines.length; i++) {
    const line = codeLines[i]
    const moveForward = () => {
      contentOffset = nextContentOffset
      nextContentOffset += line.length + 1
    }

    const stripLine = (logDesc: string) => {
      log(`Removing line ${i} for ${logDesc}`)

      removedLines++
      codeLines.splice(i, 1)
      i--
    }

    // Solo necesitamos ejecutar expresiones regulares sobre l??neas con comentarios
    if (!line.includes("//")) {
      moveForward()
    } else {
      const highlightMatch = /^\s*\/\/\s*\^+( .+)?$/.exec(line)
      const queryMatch = /^\s*\/\/\s*\^\?\s*$/.exec(line)
      // https://regex101.com/r/2yDsRk/1
      const removePrettierIgnoreMatch = /^\s*\/\/ prettier-ignore$/.exec(line)
      const completionsQuery = /^\s*\/\/\s*\^\|$/.exec(line)

      if (queryMatch !== null) {
        const start = line.indexOf("^")
        queries.push({ kind: "query", offset: start, text: undefined, docs: undefined, line: i + removedLines - 1 })
        stripLine("having a query")
      } else if (highlightMatch !== null) {
        const start = line.indexOf("^")
        const length = line.lastIndexOf("^") - start + 1
        const description = highlightMatch[1] ? highlightMatch[1].trim() : ""
        highlights.push({
          kind: "highlight",
          offset: start + contentOffset,
          length,
          text: description,
          line: i + removedLines - 1,
          start,
        })

        stripLine("having a highlight")
      } else if (removePrettierIgnoreMatch !== null) {
        stripLine("being a prettier ignore")
      } else if (completionsQuery !== null) {
        const start = line.indexOf("^")
        // prettier-ignore
        queries.push({ kind: "completion", offset: start, text: undefined, docs: undefined, line: i + removedLines - 1 })
        stripLine("having a completion query")
      } else {
        moveForward()
      }
    }
  }
  return { highlights, queries }
}

function getOptionValueFromMap(name: string, key: string, optMap: Map<string, string>) {
  const result = optMap.get(key.toLowerCase())
  log(`Get ${name} mapped option: ${key} => ${result}`)
  if (result === undefined) {
    const keys = Array.from(optMap.keys() as any)

    throw new TwoslashError(
      `Valor de compilador en l??nea no v??lido`,
      `Obtuve ${key} para ${name} pero no es un valor compatible con el compilador de TS.`,
      `Valores permitidos: ${keys.join(",")}`
    )
  }
  return result
}

function setOption(name: string, value: string, opts: CompilerOptions, ts: TS) {
  log(`Setting ${name} to ${value}`)

  for (const opt of ts.optionDeclarations) {
    if (opt.name.toLowerCase() === name.toLowerCase()) {
      switch (opt.type) {
        case "number":
        case "string":
        case "boolean":
          opts[opt.name] = parsePrimitive(value, opt.type)
          break

        case "list":
          const elementType = opt.element!.type
          const strings = value.split(",")
          if (typeof elementType === "string") {
            opts[opt.name] = strings.map(v => parsePrimitive(v, elementType))
          } else {
            opts[opt.name] = strings.map(v => getOptionValueFromMap(opt.name, v, elementType as Map<string, string>))
          }
          break

        default:
          // ??Es un mapa!
          const optMap = opt.type as Map<string, string>
          opts[opt.name] = getOptionValueFromMap(opt.name, value, optMap)
          break
      }
      return
    }
  }

  throw new TwoslashError(
    `Indicador del compilador en l??nea no v??lido`,
    `No hay un indicador del compilador de TypeScript llamado '${name}'.`,
    `Es probable que se trate de un error tipogr??fico, puede sverificar todas las banderas del compilador en la referencia de TSConfig, o verificar las banderas Twoslash adicionales en la p??gina npm para @typescript/twoslash.`
  )
}

const booleanConfigRegexp = /^\/\/\s?@(\w+)$/

// https://regex101.com/r/8B2Wwh/1
const valuedConfigRegexp = /^\/\/\s?@(\w+):\s?(.+)$/

function filterCompilerOptions(codeLines: string[], defaultCompilerOptions: CompilerOptions, ts: TS) {
  const options = { ...defaultCompilerOptions }
  for (let i = 0; i < codeLines.length;) {
    let match
    if ((match = booleanConfigRegexp.exec(codeLines[i]))) {
      options[match[1]] = true
      setOption(match[1], "true", options, ts)
    } else if ((match = valuedConfigRegexp.exec(codeLines[i]))) {
      // Omite una etiqueta de nombre de archivo, que se deber??a propagar a trav??s de esta etapa
      if (match[1] === "filename") {
        i++
        continue
      }
      setOption(match[1], match[2], options, ts)
    } else {
      i++
      continue
    }
    codeLines.splice(i, 1)
  }
  return options
}

function filterCustomTags(codeLines: string[], customTags: string[]) {
  const tags: TwoSlashReturn["tags"] = []

  for (let i = 0; i < codeLines.length;) {
    let match
    if ((match = valuedConfigRegexp.exec(codeLines[i]))) {
      if (customTags.includes(match[1])) {
        tags.push({ name: match[1], line: i, annotation: codeLines[i].split("@" + match[1] + ": ")[1] })
        codeLines.splice(i, 1)
      }
    }
    i++
  }
  return tags
}

/** Indicadores en l??nea disponibles que no son indicadores del compilador */
export interface ExampleOptions {
  /** Permite que el ejemplo suprima todos los diagn??sticos de error */
  noErrors: boolean
  /** Un arreglo de c??digos de error de TS, que escribes separados por espacios: esto es para que la herramienta pueda conocer errores inesperados */
  errors: number[]
  /** Muestra el equivalente JS del c??digo TypeScript en su lugar */
  showEmit: boolean
  /**
   * Se debe usar con showEmit, te permite elegir el archivo para presentar en lugar de la fuente ??? de manera predeterminada es index.js que
   * significa que cuando solo usas `showEmit` arriba, muestra el JS transpilado.
   */
  showEmittedFile: string

  /** Ya sea para deshabilitar la pre-cach?? de las llamadas LSP para identificadores interesantes, el valor predeterminado es false */
  noStaticSemanticInfo: boolean
  /** Declara que el programa TypeScript debe editar el fsMap que se le pasa, esto solo es ??til para los creadores de herramientas, por omisi??n es false */
  emit: boolean
  /** Declara que no necesita validar que los errores tengan las anotaciones correspondientes, el valor predeterminado es false */
  noErrorValidation: boolean
}

// Las claves de este objeto se utilizan para filtrar las opciones del manual
// antes de que se establezcan las opciones del compilador.

const defaultHandbookOptions: Partial<ExampleOptions> = {
  errors: [],
  noErrors: false,
  showEmit: false,
  showEmittedFile: undefined,
  noStaticSemanticInfo: false,
  emit: false,
  noErrorValidation: false,
}

function filterHandbookOptions(codeLines: string[]): ExampleOptions {
  const options: any = { ...defaultHandbookOptions }
  for (let i = 0; i < codeLines.length; i++) {
    let match
    if ((match = booleanConfigRegexp.exec(codeLines[i]))) {
      if (match[1] in options) {
        options[match[1]] = true
        log(`Setting options.${match[1]} to true`)
        codeLines.splice(i, 1)
        i--
      }
    } else if ((match = valuedConfigRegexp.exec(codeLines[i]))) {
      if (match[1] in options) {
        options[match[1]] = match[2]
        log(`Setting options.${match[1]} to ${match[2]}`)
        codeLines.splice(i, 1)
        i--
      }
    }
  }

  // Caso extremo el objeto errors para convertirlo en un arreglo de cadenas
  if ("errors" in options && typeof options.errors === "string") {
    options.errors = options.errors.split(" ").map(Number)
    log("Setting options.error to ", options.errors)
  }

  return options
}

export interface TwoSlashReturn {
  /** El c??digo de salida, podr??a ser *TypeScript*, pero tambi??n podr??a ser un `JS/JSON/d.ts` */
  code: string

  /** El nuevo tipo de extensi??n para el c??digo, potencialmente cambiado si han solicitado resultados emitidos */
  extension: string

  /** Solicitudes para resaltar una parte particular del c??digo */
  highlights: {
    kind: "highlight"
    /** El ??ndice del texto en el archivo */
    start: number
    /** ??En qu?? l??nea est?? el identificador resaltado? */
    line: number
    /** ??En qu?? ??ndice de la l??nea representa el s??mbolo de intercalaci??n */
    offset: number
    /** El texto del token que est?? resaltado */
    text?: string
    /** La longitud del token */
    length: number
  }[]

  /** Un arreglo de identificadores de respuestas LSP en el ejemplo */
  staticQuickInfos: {
    /** El contenido de la cadena del nodo que esto representa (principalmente para depuraci??n) */
    targetString: string
    /** La respuesta LSP base (el tipo) */
    text: string
    /** Informaci??n JSDoc adjunta */
    docs: string | undefined
    /** El ??ndice del texto en el archivo */
    start: number
    /** cuanto tiempo el identificador */
    length: number
    /** n??mero de l??nea donde se encuentra */
    line: number
    /** El car??cter de la l??nea */
    character: number
  }[]

  /** Solicitudes para usar el LSP para obtener informaci??n de un s??mbolo en particular en la fuente */
  queries: {
    kind: "query" | "completions"
    /** ??En qu?? l??nea est?? el identificador resaltado? */
    line: number
    /** ??En qu?? ??ndice de la l??nea representa el s??mbolo de intercalaci??n */
    offset: number
    /** El texto del token que est?? resaltado */
    text?: string
    /** Cualquier JSDocs adjunto */
    docs?: string | undefined
    /** El inicio del token que indica la consulta */
    start: number
    /** La longitud del token */
    length: number
    /** Resultados de terminaciones en un punto en particular */
    completions?: import("typescript").CompletionEntry[]
    /* Prefijo de finalizaci??n, p. ej. las letras antes del cursor en la palabra para que pueda filtrar */
    completionsPrefix?: string
  }[]

  /** Los comandos extra??dos de twoslash para las etiquetas personalizadas pasadas a trav??s de customTags */
  tags: {
    /** Cu??l era el nombre de la etiqueta */
    name: string
    /** D??nde estaba ubicado en el archivo fuente original */
    line: number
    /** Cu??l fue el texto despu??s de la cadena `//@tag:` (opcional porque podr??as hacer @tag en su propia l??nea sin el ':') */
    annotation?: string
  }[]

  /** Mensajes de error de diagn??stico que aparecieron al crear el programa */
  errors: {
    renderedMessage: string
    id: string
    category: 0 | 1 | 2 | 3
    code: number
    start: number | undefined
    length: number | undefined
    line: number | undefined
    character: number | undefined
  }[]

  /** El URL de este ejemplo en el playground */
  playgroundURL: string
}

export interface TwoSlashOptions {
  /** Permite configurar cualquiera de las opciones del manual desde fuera de la funci??n, ??til si no deseas identificadores LSP */
  defaultOptions?: Partial<ExampleOptions>

  /** Permite configurar cualquiera de las opciones del compilador desde fuera de la funci??n */
  defaultCompilerOptions?: CompilerOptions

  /** Permite aplicar transformadores personalizados al resultado de la emisi??n, solo es ??til con la salida showEmit */
  customTransformers?: CustomTransformers

  /** Se requerir?? una copia opcional de la importaci??n de TypeScript, si falta. */
  tsModule?: TS

  /** Ruta absoluta al directorio para buscar archivos .d.ts integrados de TypeScript. */
  tsLibDirectory?: string

  /** Una copia opcional de la importaci??n lz-string, si falta, ser?? necesaria. */
  lzstringModule?: LZ

  /**
   * Un objeto Map opcional que se pasa a @typescript/vfs - si est??s usando twoslash en la
   * web, lo necesitar??s para configurar tus archivos lib *.d.ts. Si falta, usar?? tu fs.
   */
  fsMap?: Map<string, string>

  /** El cwd del directorio sobre el que se deben superponer los fs virtuales cuando se usan fs locales, opta por process.cwd() si no est?? presente */
  vfsRoot?: string

  /** Un conjunto conocido de etiquetas `//@[tags]` para extraer y no tratar como un comentario */
  customTags?: string[]
}

/**
 * Ejecuta el corrector contra un c??digo de ejemplo TypeScript/JavaScript que potencialmente devuelve
 * la diferencia de c??digo y un conjunto de anotaciones sobre c??mo funciona.
 *
 * @param code El c??digo marcado con twoslash
 * @param extension Por ejemplo: "ts", "tsx", "typescript", "javascript" or "js".
 * @param options Opciones adicionales para twoslash
 */
export function twoslasher(code: string, extension: string, options: TwoSlashOptions = {}): TwoSlashReturn {
  const ts: TS = options.tsModule ?? require("typescript")
  const lzstring: LZ = options.lzstringModule ?? require("lz-string")

  const originalCode = code
  const safeExtension = typesToExtension(extension)
  const defaultFileName = "index." + safeExtension

  log(`\n\nLooking at code: \n\`\`\`${safeExtension}\n${code}\n\`\`\`\n`)

  const defaultCompilerOptions = {
    strict: true,
    target: ts.ScriptTarget.ES2016,
    allowJs: true,
    ...(options.defaultCompilerOptions ?? {}),
  }

  validateInput(code)

  code = cleanMarkdownEscaped(code)

  // **Nota**: codeLines es mutado por las siguientes funciones:
  const codeLines = code.split(/\r\n?|\n/g)

  let tags: TwoSlashReturn["tags"] = options.customTags ? filterCustomTags(codeLines, options.customTags) : []
  const handbookOptions = { ...filterHandbookOptions(codeLines), ...options.defaultOptions }
  const compilerOptions = filterCompilerOptions(codeLines, defaultCompilerOptions, ts)

  // Maneja la b??squeda especial de may??sculas y min??sculas cuando se usa jsx preserva que archivos crea .jsx
  if (!handbookOptions.showEmittedFile) {
    handbookOptions.showEmittedFile =
      compilerOptions.jsx && compilerOptions.jsx === ts.JsxEmit.Preserve ? "index.jsx" : "index.js"
  }

  const getRoot = () => {
    const pa = "pa"
    const path = require(pa + "th") as typeof import("path")
    const rootPath = options.vfsRoot || process.cwd()
    return rootPath.split(path.sep).join(path.posix.sep)
  }

  // En un navegador queremos DI todo, en el nodo podemos usar infraestructura local
  const useFS = !!options.fsMap
  const vfs = useFS && options.fsMap ? options.fsMap : new Map<string, string>()
  const system = useFS ? createSystem(vfs) : createFSBackedSystem(vfs, getRoot(), ts, options.tsLibDirectory)
  const fsRoot = useFS ? "/" : getRoot() + "/"

  const env = createVirtualTypeScriptEnvironment(system, [], ts, compilerOptions, options.customTransformers)
  const ls = env.languageService

  code = codeLines.join("\n")

  let partialQueries = [] as (PartialQueryResults | PartialCompletionResults)[]
  let queries = [] as TwoSlashReturn["queries"]
  let highlights = [] as TwoSlashReturn["highlights"]

  const nameContent = splitTwoslashCodeInfoFiles(code, defaultFileName, fsRoot)
  const sourceFiles = ["js", "jsx", "ts", "tsx"]

  /** Todos los archivos a los que se hace referencia en el marcado */
  const filenames = nameContent.map(nc => nc[0])

  for (const file of nameContent) {
    const [filename, codeLines] = file
    const filetype = filename.split(".").pop() || ""

    // Solo ejecuta las cosas LSP-y en archivos fuente
    const allowJSON = compilerOptions.resolveJsonModule && filetype === "json"
    if (!sourceFiles.includes(filetype) && !allowJSON) {
      continue
    }

    // Crea el archivo en el vfs
    const newFileCode = codeLines.join("\n")
    env.createFile(filename, newFileCode)

    const updates = filterHighlightLines(codeLines)
    highlights = highlights.concat(updates.highlights)

    // ------ Realiza la b??squeda de LSP para las consultas

    const lspedQueries = updates.queries.map((q, i) => {
      const sourceFile = env.getSourceFile(filename)!
      const position = ts.getPositionOfLineAndCharacter(sourceFile, q.line, q.offset)
      switch (q.kind) {
        case "query": {
          const quickInfo = ls.getQuickInfoAtPosition(filename, position)

          // prettier-ignore
          let text: string
          let docs: string | undefined

          if (quickInfo && quickInfo.displayParts) {
            text = quickInfo.displayParts.map(dp => dp.text).join("")
            docs = quickInfo.documentation ? quickInfo.documentation.map(d => d.text).join("<br/>") : undefined
          } else {
            throw new TwoslashError(
              `Consulta de QuickInfo no v??lida`,
              `??La solicitud en la l??nea ${q.line} en ${filename} para informaci??n r??pida a trav??s de ^? devuelto no desde el compilador.`,
              `Es probable que el posicionamiento x est?? desactivado.`
            )
          }

          const queryResult: PartialQueryResults = {
            kind: "query",
            text,
            docs,
            line: q.line - i,
            offset: q.offset,
            file: filename,
          }
          return queryResult
        }

        case "completion": {
          const completions = ls.getCompletionsAtPosition(filename, position - 1, {})
          if (!completions && !handbookOptions.noErrorValidation) {
            throw new TwoslashError(
              `Consulta de compleci??n no v??lida`,
              `La solicitud en la l??nea ${q.line} en ${filename} para completar a trav??s de ^| no devolvi?? compleciones del compilador.`,
              `Es probable que el posicionamiento est?? mal.`
            )
          }

          const word = getClosestWord(sourceFile.text, position - 1)
          const prefix = sourceFile.text.slice(word.startPos, position)
          const lastDot = prefix.split(".").pop() || ""

          const queryResult: PartialCompletionResults = {
            kind: "completions",
            completions: completions?.entries || [],
            completionPrefix: lastDot,
            line: q.line - i,
            offset: q.offset,
            file: filename,
          }
          return queryResult
        }
      }
    })
    partialQueries = partialQueries.concat(lspedQueries)

    // Establece el archivo en el compilador como si no tuviera comentarios.
    const newEditedFileCode = codeLines.join("\n")
    env.updateFile(filename, newEditedFileCode)
  }

  // Tambi??n tenemos que despojarnos de las consultas + resaltadas del archivo principal que se muestran a las personas
  const allCodeLines = code.split(/\r\n?|\n/g)
  filterHighlightLines(allCodeLines)
  code = allCodeLines.join("\n")

  // Permite que los cambios de fs se propaguen de regreso al fsMap
  if (handbookOptions.emit) {
    filenames.forEach(f => {
      const filetype = f.split(".").pop() || ""
      if (!sourceFiles.includes(filetype)) return

      const output = ls.getEmitOutput(f)
      output.outputFiles.forEach(output => {
        system.writeFile(output.name, output.text)
      })
    })
  }

  // El c??digo ahora deber??a ser seguro para compilar, por lo que lo dividiremos en diferentes archivos.
  let errs: import("typescript").Diagnostic[] = []
  // La define debido a un filtro al cortar
  let staticQuickInfos: TwoSlashReturn["staticQuickInfos"] = []

  // Itera a trav??s de los archivos declarados y captura errores e informaci??n r??pida de LSP
  // const declaredFiles = Object.keys(fileMap)

  filenames.forEach(file => {
    const filetype = file.split(".").pop() || ""

    // Solo ejecuta las cosas LSP-y en archivos fuente
    if (!sourceFiles.includes(filetype)) {
      return
    }

    if (!handbookOptions.noErrors) {
      errs = errs.concat(ls.getSemanticDiagnostics(file), ls.getSyntacticDiagnostics(file))
    }

    const source = env.sys.readFile(file)!
    const sourceFile = env.getSourceFile(file)
    if (!sourceFile) {
      throw new TwoslashError(
        `No se pudo encontrar un archivo TypeScript fuente para '${file}' en Twoslash vfs`,
        `Es un poco dif??cil dar consejos ??tiles sobre este error. ??Tal vez importaste algo que el compilador no cree que sea un archivo fuente?`,
        ``
      )
    }

    // Obtiene toda la ventana emergente de informaci??n r??pida e interesante
    if (!handbookOptions.showEmit) {
      const fileContentStartIndexInModifiedFile = code.indexOf(source) == -1 ? 0 : code.indexOf(source)
      const linesAbove = code.slice(0, fileContentStartIndexInModifiedFile).split("\n").length - 1

      // Obtiene todos los identificadores interesantes en el archivo, para que podamos mostrar informaci??n flotante
      const identifiers = handbookOptions.noStaticSemanticInfo ? [] : getIdentifierTextSpans(ts, sourceFile)
      for (const identifier of identifiers) {
        const span = identifier.span
        const quickInfo = ls.getQuickInfoAtPosition(file, span.start)

        if (quickInfo && quickInfo.displayParts) {
          const text = quickInfo.displayParts.map(dp => dp.text).join("")
          const targetString = identifier.text
          const docs = quickInfo.documentation ? quickInfo.documentation.map(d => d.text).join("\n") : undefined

          // Obtiene la posici??n del
          const position = span.start + fileContentStartIndexInModifiedFile
          // Utiliza TypeScript para extraer una l??nea o un car??cter del c??digo original en la posici??n + cualquier desplazamiento anterior
          const burnerSourceFile = ts.createSourceFile("_.ts", code, ts.ScriptTarget.ES2015)
          const { line, character } = ts.getLineAndCharacterOfPosition(burnerSourceFile, position)

          staticQuickInfos.push({ text, docs, start: position, length: span.length, line, character, targetString })
        }
      }

      // Compensa las consultas de este archivo porque se basan en la l??nea de ese
      // archivo espec??fico, y no el documento global de twoslash. Esto tiene que hacerse aqu?? porque
      // en los bucles anteriores, el c??digo para consultas/resaltados/etc. a??n no se ha eliminado.
      partialQueries
        .filter((q: any) => q.file === file)
        .forEach(q => {
          const pos =
            ts.getPositionOfLineAndCharacter(sourceFile, q.line, q.offset) + fileContentStartIndexInModifiedFile

          switch (q.kind) {
            case "query": {
              queries.push({
                docs: q.docs,
                kind: "query",
                start: pos + fileContentStartIndexInModifiedFile,
                length: q.text.length,
                text: q.text,
                offset: q.offset,
                line: q.line + linesAbove + 1,
              })
              break
            }
            case "completions": {
              queries.push({
                completions: q.completions,
                kind: "completions",
                start: pos + fileContentStartIndexInModifiedFile,
                completionsPrefix: q.completionPrefix,
                length: 1,
                offset: q.offset,
                line: q.line + linesAbove + 1,
              })
            }
          }
        })
    }
  })

  const relevantErrors = errs.filter(e => e.file && filenames.includes(e.file.fileName))

  // Un validador en que se mencionan c??digos de error, para que podamos saber si algo se ha estropeado en el futuro
  if (!handbookOptions.noErrorValidation && relevantErrors.length) {
    validateCodeForErrors(relevantErrors, handbookOptions, extension, originalCode, fsRoot)
  }

  let errors: TwoSlashReturn["errors"] = []

  // No podemos pasar el ts.DiagnosticResult directamente (no se puede JSON.stringified)
  for (const err of relevantErrors) {
    const codeWhereErrorLives = env.sys.readFile(err.file!.fileName)!
    const fileContentStartIndexInModifiedFile = code.indexOf(codeWhereErrorLives)
    const renderedMessage = ts.flattenDiagnosticMessageText(err.messageText, "\n")
    const id = `err-${err.code}-${err.start}-${err.length}`
    const { line, character } = ts.getLineAndCharacterOfPosition(err.file!, err.start!)

    errors.push({
      category: err.category,
      code: err.code,
      length: err.length,
      start: err.start ? err.start + fileContentStartIndexInModifiedFile : undefined,
      line,
      character,
      renderedMessage,
      id,
    })
  }

  // Maneja la emisi??n de archivos
  if (handbookOptions.showEmit) {
    // Obtiene el archivo que cre?? el archivo que queremos mostrar:
    const emitFilename = handbookOptions.showEmittedFile || defaultFileName
    const emitSourceFilename =
      fsRoot + emitFilename.replace(".jsx", "").replace(".js", "").replace(".d.ts", "").replace(".map", "")

    let emitSource = filenames.find(f => f === emitSourceFilename + ".ts" || f === emitSourceFilename + ".tsx")

    if (!emitSource && !compilerOptions.outFile) {
      const allFiles = filenames.join(", ")
      // prettier-ignore
      throw new TwoslashError(
        `No se pudo encontrar el archivo fuente para mostrar la emisi??n`,
        `No se puede encontrar el archivo  **fuente** correspondiente ${emitFilename} para completar a trav??s de ^| no devolvi?? informaci??n r??pida del compilador.`,
        `Buscado por: ${emitSourceFilename} in the vfs - que contiene: ${allFiles}`
      )
    }

    // Permite outfile, en cuyo caso necesitas alg??n archivo.
    if (compilerOptions.outFile) {
      emitSource = filenames[0]
    }

    const output = ls.getEmitOutput(emitSource!)
    const file = output.outputFiles.find(
      o => o.name === fsRoot + handbookOptions.showEmittedFile || o.name === handbookOptions.showEmittedFile
    )

    if (!file) {
      const allFiles = output.outputFiles.map(o => o.name).join(", ")
      throw new TwoslashError(
        `No se puede encontrar el archivo de salida en Twoslash VFS`,
        `Buscando ${handbookOptions.showEmittedFile} en Twoslash vfs despu??s de compilar`,
        `Buscando" ${fsRoot + handbookOptions.showEmittedFile} en el vfs - que contiene ${allFiles}.`
      )
    }

    code = file.text
    extension = file.name.split(".").pop()!

    // Elimina los resaltados y las consultas, porque no funcionar?? en las transpilaciones,
    // aunque supongo que el mapeo de fuentes podr??a manejar la transici??n
    highlights = []
    partialQueries = []
    staticQuickInfos = []
  }

  const zippedCode = lzstring.compressToEncodedURIComponent(originalCode)
  const playgroundURL = `https://www.typescriptlang.org/play/#code/${zippedCode}`

  // El corte ocurre en ??ltimo lugar y significa editar las l??neas y el ??ndice de caracteres de todas
  // las anotaciones de tipo que se adjuntan a una ubicaci??n

  const cutString = "// ---cut---\n"
  if (code.includes(cutString)) {
    // Obtiene el lugar donde est??, luego encuentre el final y el comienzo de la siguiente l??nea
    const cutIndex = code.indexOf(cutString) + cutString.length
    const lineOffset = code.substr(0, cutIndex).split("\n").length - 1

    // Elimina el c??digo mostrado
    code = code.split(cutString).pop()!

    // Para cualquier tipo de metadatos enviados, ser?? necesario cambiarlos para
    // encajar en las nuevas posiciones tras el corte
    staticQuickInfos.forEach(info => {
      info.start -= cutIndex
      info.line -= lineOffset
    })
    staticQuickInfos = staticQuickInfos.filter(s => s.start > -1)

    errors.forEach(err => {
      if (err.start) err.start -= cutIndex
      if (err.line) err.line -= lineOffset
    })
    errors = errors.filter(e => e.start && e.start > -1)

    highlights.forEach(highlight => {
      highlight.start -= cutIndex
      highlight.line -= lineOffset
    })

    highlights = highlights.filter(e => e.start > -1)

    queries.forEach(q => (q.line -= lineOffset))
    queries = queries.filter(q => q.line > -1)

    tags.forEach(q => (q.line -= lineOffset))
    tags = tags.filter(q => q.line > -1)
  }

  const cutAfterString = "// ---cut-after---\n"

  if (code.includes(cutAfterString)) {

    // Obtiene el lugar donde est??, luego encuentre el final y el comienzo de la siguiente l??nea
    const cutIndex = code.indexOf(cutAfterString) + cutAfterString.length
    const lineOffset = code.substr(0, cutIndex).split("\n").length - 1

    // Elimina el c??digo mostrado, quitando cualquier espacio en blanco al final
    code = code.split(cutAfterString).shift()!.trimEnd()

    // Corta cualquier metadato despu??s de cutAfterString
    staticQuickInfos = staticQuickInfos.filter(s => s.line < lineOffset)
    errors = errors.filter(e => e.line && e.line < lineOffset)
    highlights = highlights.filter(e => e.line < lineOffset)
    queries = queries.filter(q => q.line < lineOffset)
    tags = tags.filter(q => q.line < lineOffset)
  }

  return {
    code,
    extension,
    highlights,
    queries,
    staticQuickInfos,
    errors,
    playgroundURL,
    tags,
  }
}

const splitTwoslashCodeInfoFiles = (code: string, defaultFileName: string, root: string) => {
  const lines = code.split(/\r\n?|\n/g)

  let nameForFile = code.includes(`@filename: ${defaultFileName}`) ? "global.ts" : defaultFileName
  let currentFileContent: string[] = []
  const fileMap: Array<[string, string[]]> = []

  for (const line of lines) {
    if (line.includes("// @filename: ")) {
      fileMap.push([root + nameForFile, currentFileContent])
      nameForFile = line.split("// @filename: ")[1].trim()
      currentFileContent = []
    } else {
      currentFileContent.push(line)
    }
  }
  fileMap.push([root + nameForFile, currentFileContent])

  // B??sicamente, despoja estos:
  // ["index.ts", []]
  // ["index.ts", [""]]
  const nameContent = fileMap.filter(n => n[1].length > 0 && (n[1].length > 1 || n[1][0] !== ""))
  return nameContent
}
