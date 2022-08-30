/** Toma JS y lo convierte en markdown */
export const invertCodeToHTML = (code: string) => {
  const newlines = [] as string[]

  enum State {
    InComment,
    InCode,
  }

  let state = State.InComment

  const oldLines = code.split("\n")
  oldLines.forEach((line, index) => {
    // Salta la primera línea
    if (line.startsWith("////")) return

    const isComment = line.startsWith("//")
    const isEmpty = line.trim() === ""
    const nextLineIsComment =
      oldLines[index + 1] && oldLines[index + 1].startsWith("//")

    if (isComment && state === State.InComment) {
      newlines.push(line.slice(2))
      return
    }

    if (isEmpty && state === State.InComment) {
      newlines.push("")
      return
    }

    if (!isComment && state === State.InComment) {
      // Inicia el código
      state = State.InCode
      newlines.push("<code><pre>")
      newlines.push(line)
      return
    }

    if (isComment && state === State.InCode) {
      if (nextLineIsComment) {
        newlines.push("</pre></code>")

        state = State.InComment
      }
      newlines.push(line)
      return
    }

    newlines.push(line)
  })
  return newlines.join("\n")
}
