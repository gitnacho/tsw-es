import { TwoslashError } from "./"

/** Para asegurarse de que los errores coincidan correctamente */
export function validateCodeForErrors(
  relevantErrors: import("typescript").Diagnostic[],
  handbookOptions: { errors: number[] },
  extension: string,
  originalCode: string,
  vfsRoot: string
) {
  const inErrsButNotFoundInTheHeader = relevantErrors.filter(e => !handbookOptions.errors.includes(e.code))
  const errorsFound = Array.from(new Set(inErrsButNotFoundInTheHeader.map(e => e.code))).join(" ")

  if (inErrsButNotFoundInTheHeader.length) {
    const errorsToShow = new Set(relevantErrors.map(e => e.code))
    const codeToAdd = `// @errors: ${Array.from(errorsToShow).join(" ")}`

    const missing = handbookOptions.errors.length
      ? `\nLa anotación existente especificó ${handbookOptions.errors.join(" ")}`
      : "\nExpected: " + codeToAdd

    // Estos se llenan a continuación
    const filesToErrors: Record<string, import("typescript").Diagnostic[]> = {}
    const noFiles: import("typescript").Diagnostic[] = []

    inErrsButNotFoundInTheHeader.forEach(d => {
      const fileRef = d.file?.fileName && d.file.fileName.replace(vfsRoot, "")
      if (!fileRef) noFiles.push(d)
      else {
        const existing = filesToErrors[fileRef]
        if (existing) existing.push(d)
        else filesToErrors[fileRef] = [d]
      }
    })

    const showDiagnostics = (title: string, diags: import("typescript").Diagnostic[]) => {
      return (
        `${title}\n  ` +
        diags
          .map(e => {
            const msg = typeof e.messageText === "string" ? e.messageText : e.messageText.messageText
            return `[${e.code}] ${e.start} - ${msg}`
          })
          .join("\n  ")
      )
    }

    const innerDiags: string[] = []
    if (noFiles.length) {
      innerDiags.push(showDiagnostics("Ambient Errors", noFiles))
    }
    Object.keys(filesToErrors).forEach(filepath => {
      innerDiags.push(showDiagnostics(filepath, filesToErrors[filepath]))
    })

    const allMessages = innerDiags.join("\n\n")

    const newErr = new TwoslashError(
      `Se arrojaron errores en el ejemplo, pero no se incluyeron en una etiqueta errors`,
      `Estos errores no se marcaron como esperados: ${errorsFound}. ${missing}`,
      `Errores del compilador:\n\n${allMessages}`
    )

    newErr.code = `## Code\n\n'''${extension}\n${originalCode}\n'''`
    throw newErr
  }
}

/** Principalmente para advertirme, he perdido unos buenos minutos con esto antes */
export function validateInput(code: string) {
  if (code.includes("// @errors ")) {
    throw new TwoslashError(
      `Tienes '// @errors ' (con un espacio)`,
      `Quieres '// @errors: ' (con dos puntos)`,
      `Este es un error de escritura bastante común`
    )
  }

  if (code.includes("// @filename ")) {
    throw new TwoslashError(
      `Tienes '// @filename ' (con un espacio)`,
      `Quieres '// @filename: ' (con dos puntos)`,
      `Este es un error de escritura bastante común`
    )
  }
}
