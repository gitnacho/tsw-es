# *TypeScript* ⏤ Adquisición automática de tipos

Una dependencia para descargar archivos `*.d.ts` correspondientes a un archivo fuente *Node.js*. Se basa en las *API*s proporcionadas por [`jsdelivr`](https://www.jsdelivr.com).

### Uso

```ts
// Crea la función para ejecutar ATA con una serie de devoluciones de llamada
const ata = setupTypeAcquisition({
  projectName: "My ATA Project",
  typescript: ts,
  logger: console,
  delegate: {
    receivedFile: (code: string, path: string) => {
      // Agrega código a tu entorno de ejecución en la ruta...
    },
    started: () => {
      console.log("ATA start")
    },
    progress: (downloaded: number, total: number) => {
      console.log(`Got ${downloaded} out of ${total}`)
    },
    finished: vfs => {
      console.log("ATA done", vfs)
    },
  },
})

// Ejecute esa función con el nuevo archivo fuente
ata(`import danger from "danger"`)
```

Puedes llamar a `ata` cuando sea conveniente para ti, no tomará las mismas dependencias dos veces. Las devoluciones de llamada para `started` y `finished` solo se activan cuando se va a realizar algún trabajo, por lo que puedes usarlas para mostrar/ocultar elementos de la interfaz de usuario. `progress` se activa cada 5 descargas.

### Cómo trabaja

A un alto nivel, para este código de entrada:

```
import danger from "danger"
```

La biblioteca

- Busca el último módulo `npm` de `danger`, luego obtienes su lista de archivos
- Como hay archivos `.d.ts` para descargar en el depósito, entonces se activa `started`
- Descarga los archivos `*.d.ts` para `danger` desde el módulo `danger` de `npm`
- Lee esos `.d.ts` y observa estos módulos desde el punto de vista del uso:
  - `"node-fetch"` ⏤ ve que `"node-fetch"` no tiene archivos `.d.ts` y los obtiene de `"@types/node-fetch"`
  - `"commander"` ⏤ ve que el comando envía sus propios tipos
  - `"@octokit/rest"` ⏤ ve que `octokit/rest` envía sus propios tipos
  - `"gitlab"` ⏤ también ve
- Recurre a través de sus dependencias también.
- Una vez que haya terminado, active `finished` con un mapa de los `vfs` si prefieres configurarlos de forma masiva.

### `Nicities`

Los usuarios pueden dar una versión o etiqueta específica de `npm` para trabajar en lugar de la "última" predeterminada (`latest`):

```ts
import { xy } from "xyz" // types: beta
```

Si esto no es algo que deseas, no estoy en contra de una bandera para deshabilitarlo.
