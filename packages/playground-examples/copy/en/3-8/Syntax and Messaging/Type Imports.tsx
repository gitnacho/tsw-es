//// { "compiler": { "ts": "3.8.3" } }
// En 3.8 agregamos una nueva sintaxis para importar tipos, que
// sería similar a los usuarios que han venido de flow.

// 'import type' proporciona una forma de declarar un tipo solo importar
// lo que significa que puedes estar seguro de que el código se borrará cuando
// se convierta a JavaScript de una manera muy predecible porque
// ¡siempre será eliminado!

// Por ejemplo, esta línea nunca agregará una import ni require
import type { CSSProperties } from "react";

// Que se utiliza aquí como un tipo
const style: CSSProperties = {
  textAlign: "center",
};

// Esto contrasta con esta importación:
import * as React from "react";

// Que se incluirá en el JavaScript
export class Welcome extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>Hello, world</h1>
      </div>
    );
  }
}

// Sin embargo, si la 'import' sin tipos, solo importa
// tipos - también se podría quitar. Si miras en la
// salida JS compilada, esta importación no está incluida

import { FunctionComponent } from "react";

export const BetaNotice: FunctionComponent = () => {
  return <p>This page is still in beta</p>;
};

// Esto se denomina elisión de import y puede ser la fuente
// de confusión. La sintaxis 'import type' te permite ser
// específico sobre lo que quieres en JavaScript.

// Esta es una pequeña descripción general de uno de los principales casos de uso.
// para 'import types' pero hay más que puedes leer
// en las notas de la versión 3.8

// https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports
