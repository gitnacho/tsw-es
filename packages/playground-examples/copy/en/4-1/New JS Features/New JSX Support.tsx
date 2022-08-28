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
// - Use an `import` to provide functions instead of a React identifier
// - Different functions for a single element (jsx) vs many children (jsxs)
// - Key is separate from the props
//
// You can read the RFC which this change implements here
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

// These changes are mostly under-the-hood changes
// which shouldn't affect you you write JSX code as
// an end user.
