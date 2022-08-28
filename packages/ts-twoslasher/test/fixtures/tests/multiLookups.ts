interface Shape {}
declare function getShape(): Shape

// TODO: Anímate a aceptar un desafío, elimina los comentarios adicionales
//       a continuación para obtener una excepción lanzada desde TS

interface PaintOptions {
  shape: Shape
  xPos?: number
  // //  ^
  yPos?: number
  // //  ^
}

// ---cut---
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos
  //              ^?
  let yPos = opts.yPos
  //              ^?
  // ...
}
