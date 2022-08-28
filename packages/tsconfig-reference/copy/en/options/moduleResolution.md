---
display: "Resolución del módulo"
oneline: "Especifica cómo busca *TypeScript* un archivo de un determinado especificador de módulo."
---

Especifica la estrategia de resolución de módulo:

- `'node'` para la implementación de *CommonJS* de *Node.js*
- `'node16'` o `'nodenext'` para la compatibilidad con el módulo ECMAScript de Node.js [desde TypeScript 4.7 en adelante](https://devblogs.microsoft.com/typescript/annunciing-typescript-4-7/#esm-nodejs )
- `'classic'` utilizado en *TypeScript* antes del lanzamiento de 1.6. Probablemente no necesites usar `classic` en código moderno.

Hay una página de referencia del manual en [Resolución de módulo](/docs/handbook/module-resolution.html)
