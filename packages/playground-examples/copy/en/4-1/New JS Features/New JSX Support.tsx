//// { "compiler": { "ts": "4.1.0-dev.20201028", "jsx": 4 } }

// En la versión 17, el equipo de React introdujo un nuevo formato
// para el JavaScript emitido por las transformaciones JSX. Puedes
// ver el JavaScript en el lado derecho de
// el playground en la pestaña ".JS" ->

import { useState } from "react";

export function ExampleApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hiciste clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}> Haz clic en mí </button>
    </div>
  );
}

// Algunos de los principales cambios:
//
// - Usa una `import` para proporcionar funciones en lugar de un identificador React
// - Diferentes funciones para un solo elemento (jsx) vs muchos hijos (jsxs)
// - La llave está separada de los accesorios.
//
// Puedes leer el RFC que implementa este cambio aquí
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

// Estos cambios en su mayoría son cambios bajo el capó
// lo cual no debería afectarte al escribir el código JSX como
// un usuario final.
