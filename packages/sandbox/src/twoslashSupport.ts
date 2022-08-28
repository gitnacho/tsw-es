const booleanConfigRegexp = /^\/\/\s?@(\w+)$/

// https://regex101.com/r/8B2Wwh/1
const valuedConfigRegexp = /^\/\/\s?@(\w+):\s?(.+)$/

type TS = typeof import("typescript")
type CompilerOptions = import("typescript").CompilerOptions

/**
 * Esta es una adaptación del bit twoslash que toma las opciones del código fuente
 * del compilador
 */

export const extractTwoSlashCompilerOptions = (ts: TS) => {
  let optMap = new Map<string, any>()

  if (!("optionDeclarations" in ts)) {
    console.error("Could not get compiler options from ts.optionDeclarations - skipping twoslash support.")
  } else {
    // @ts-ignore - optionDeclarations no es una API pública
    for (const opt of ts.optionDeclarations) {
      optMap.set(opt.name.toLowerCase(), opt)
    }
  }

  return (code: string) => {
    const codeLines = code.split("\n")
    const options = {} as any

    codeLines.forEach(_line => {
      let match
      const line = _line.trim()
      if ((match = booleanConfigRegexp.exec(line))) {
        if (optMap.has(match[1].toLowerCase())) {
          options[match[1]] = true
          setOption(match[1], "true", options, optMap)
        }
      } else if ((match = valuedConfigRegexp.exec(line))) {
        if (optMap.has(match[1].toLowerCase())) {
          setOption(match[1], match[2], options, optMap)
        }
      }
    })
    return options
  }
}

function setOption(name: string, value: string, opts: CompilerOptions, optMap: Map<string, any>) {
  const opt = optMap.get(name.toLowerCase())

  if (!opt) return
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
        opts[opt.name] = strings.map(v => getOptionValueFromMap(opt.name, v, elementType as Map<string, string>)!).filter(Boolean)
      }
      break

    default:          // ¡Es un mapa!
      const optMap = opt.type as Map<string, string>
      opts[opt.name] = getOptionValueFromMap(opt.name, value, optMap)
  }

  if (opts[opt.name] === undefined) {
    const keys = Array.from(opt.type.keys() as any)
    console.log(`Invalid value ${value} for ${opt.name}. Allowed values: ${keys.join(",")}`)
  }
}

export function parsePrimitive(value: string, type: string): any {
  switch (type) {
    case "number":
      return +value
    case "string":
      return value
    case "boolean":
      return value.toLowerCase() === "true" || value.length === 0
  }
  console.log(`Unknown primitive type ${type} with - ${value}`)
}


function getOptionValueFromMap(name: string, key: string, optMap: Map<string, string>) {
  const result = optMap.get(key.toLowerCase())
  if (result === undefined) {
    const keys = Array.from(optMap.keys() as any)

    console.error(
      `Valor de compilador en línea no válido`,
      `Obtuve ${key} para ${name} pero no es un valor compatible con el compilador de TS.`,
      `Valores permitidos: ${keys.join(",")}`
    )
  }
  return result
}

// Function to generate autocompletion results
export const twoslashCompletions = (ts: TS, monaco: typeof import("monaco-editor")) => (
  model: import("monaco-editor").editor.ITextModel,
  position: import("monaco-editor").Position,
  _token: any
): import("monaco-editor").languages.CompletionList => {
  const result: import("monaco-editor").languages.CompletionItem[] = []

  // Divide en cada espacio todo lo que el usuario ha escrito en la línea actual, y solo mira la última palabra
  const thisLine = model.getValueInRange({
    startLineNumber: position.lineNumber,
    startColumn: 0,
    endLineNumber: position.lineNumber,
    endColumn: position.column,
  })

  // No es un comentario
  if (!thisLine.startsWith("//")) {
    return { suggestions: [] }
  }

  const words = thisLine.replace("\t", "").split(" ")

  // No es la cantidad correcta
  if (words.length !== 2) {
    return { suggestions: [] }
  }

  const word = words[1]
  if (word.startsWith("-")) {
    return {
      suggestions: [
        {
          label: "---cut---",
          kind: 14,
          detail: "Twoslash split output",
          insertText: "---cut---".replace(word, ""),
        } as any,
      ],
    }
  }

  // No hay una @ en la primera palabra
  if (!word.startsWith("@")) {
    return { suggestions: [] }
  }

  const knowns = [
    "noErrors",
    "errors",
    "showEmit",
    "showEmittedFile",
    "noStaticSemanticInfo",
    "emit",
    "noErrorValidation",
    "filename",
  ]
  // @ts-ignore - ts.optionDeclarations is private
  const optsNames = ts.optionDeclarations.map(o => o.name)
  knowns.concat(optsNames).forEach(name => {
    if (name.startsWith(word.slice(1))) {
      // ¿De alguna manera agregar el rango parece no dar resultados de autocompleción?
      result.push({
        label: name,
        kind: 14,
        detail: "Twoslash comment",
        insertText: name,
      } as any)
    }
  })

  return {
    suggestions: result,
  }
}
