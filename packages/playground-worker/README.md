### El trabajador de *Playground*

Esta es una función de *WebWorker* que *Playground* usa para envolver el servicio de lenguaje *TypeScript*. Puedes aprender cómo funciona esto en esta *SE* a `monaco-typescript`: https://github.com/microsoft/monaco-typescript/pull/65

El trabajador es una función de fábrica que devuelve una subclase para el *TSServer* a los enlaces de lenguaje `monaco`, esta subclase tiene en cuenta la sintaxis `// @filename: abc.ts` que se usa en todas partes en el código *TypeScript*.

El código está bien comentado, así que es mejor leerlo para obtener más información: [`index.ts`](./index.ts).
