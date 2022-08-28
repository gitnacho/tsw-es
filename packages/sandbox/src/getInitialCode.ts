import lzstring from "./vendor/lzstring.min"

/**
 * Toma el código fuente de un ejemplo del hash de consulta o del almacenamiento local
 * @param fallback si no se encuentra nada devuelve esto
 * @param location Hace una copia de document.location
 */
export const getInitialCode = (fallback: string, location: Location) => {
  // Apoyo de la vieja escuela
  if (location.hash.startsWith("#src")) {
    const code = location.hash.replace("#src=", "").trim()
    return decodeURIComponent(code)
  }

  // Apoyo a nueva escuela
  if (location.hash.startsWith("#code")) {
    const code = location.hash.replace("#code/", "").trim()
    let userCode = lzstring.decompressFromEncodedURIComponent(code)
    // Alternativa en caso de que haya un nivel adicional de decodificación:
    // https://gitter.im/Microsoft/TypeScript?at=5dc478ab9c39821509ff189a
    if (!userCode) userCode = lzstring.decompressFromEncodedURIComponent(decodeURIComponent(code))
    return userCode
  }

  // Copia local alternativa
  if (localStorage.getItem("sandbox-history")) {
    return localStorage.getItem("sandbox-history")!
  }

  return fallback
}
