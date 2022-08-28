## Adquisición de tipo

No *Playground* es una isla. Bueno, no estrictamente, ningún *playground necesita* ser una isla. Uno de los primeros problemas que encontramos al agregar soporte para `.tsx`/`.jsx` al *playground* fue que **realmente** usa *JSX* para escribir componentes de *React* ⏤ necesitas los tipos para *React*.

Esto nos dejó con el dilema de tener que agrupar los tipos en evolución de *React* en *Playground* o replicar la función que se encuentra en los proyectos de *JavaScript* que utilizan *TypeScript*: Adquisición automática de tipos. La idea detrás de la *Adquisición Automática de Tipo* (*ATA*) es que detrás de escena, el *Playground* buscará cualquier `import`/`require` / [`/// <tipos de referencia"`](/docs/handbook/triple-slash-directives.html) y comprender a qué módulos `npm` se ha hecho referencia.

Para estos módulos referenciados, *TypeScript* buscará en el contenido del paquete `npm` y, potencialmente, en el equivalente `@types` de los archivos `.d.ts` para describir cómo funciona la biblioteca. Esto significa que para obtener los tipos de *React*, crearías un *playground* como:

```ts
import React from "react"

const myComponent = () => <h1>Hello, world</h1>
```

La adquisición de tipo debe:

- buscar en el paquete `react` en `npm`, ver que no hay archivos `.d.ts` en su contenido
- buscar para ver si existe `@types/react`, descargar todos los archivos `.d.ts`
- leer los archivos `.d.ts` en `@types/react`, y descubrir que se importan desde `csstype` y `prop-types`
  - buscar en el paquete `csstype` los archivos `.d.ts` y descargarlos
  - buscar en el paquete `prop-types` los archivos `.d.ts` y si no encuentra ninguno
  - mirar para ver si existe `@types/prop-types` y descargar los archivos `.d.ts` desde ese

Esa única línea de importación ha descargado los archivos `.d.ts` de `@types/react`, `@types/prop-types` y `csstype`. Estos se agregan al directorio `node_modules` del proyecto *TypeScript* de *Playground* y *TypeScript* los recoge.

Todo esto se basa en [jsdelivr CDN](https://www.jsdelivr.com/) que ha mantenido baja la complejidad, y el sistema de adquisición de tipos está disponible para que otros proyectos lo utilicen a través de `npm` en [`@typescript/ata`](https://www.npmjs.com/package/@typescript/ata).

Si necesitas más control sobre la versión de los tipos que se importan a *Playground*, puedes agregar `// types: npm_tag_or_version`

```
import { xy } from "xyz" // types: beta
```

La adquisición de tipos tal como está es bastante entusiasta y puede comenzar a extraer tus tipos antes de que hayas configurado la etiqueta o versión `npm`. En ese caso, puedes volver a cargar tu navegador una vez que esté escrito para obtener la versión correcta.
