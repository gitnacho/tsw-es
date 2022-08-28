// La infraestructura de prueba ha configurado `annotate` para que sea una etiqueta personalizada

// @annotate - left - Puedes usar los comentarios JSDoc para proporcionar información de tipo a tu editor
function compact(arr: string[]) {
  if (arr.length > 10) return arr.length
  // @annotate - right - Puedes usar los comentarios JSDoc para proporcionar información de tipo a tu editor
  return arr
}
