### *Playground* multiarchivo

El *playground* admite la división del texto del editor en varios archivos mediante la misma sintaxis que [Twoslash](https://shikijs.github.io/twoslash/playground), que es: `// @filename: newFile.ts`:

```ts
// primer archivo implícito (input.ts/tsx/js/jsx)
const a = 1
// @filename: file2.ts
// Comentario en un segundo archivo
const a = 12
// @filename: file3.ts
// Comentario en un tercer archivo
const a = 123
```

Consta de tres archivos separados en el mismo directorio. En cada archivo, `a` se asigna a un valor diferente. Puedes importar entre estos archivos usando `import`/`export` por omisión, o cambiando las marcas del compilador al tipo de módulo apropiado para la forma que desees importar:

```ts
export type Task = "Hace algo"

// @filename: file2.ts
import { Task } from "./input.js"
```
