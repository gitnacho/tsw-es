## 3.1.0

Agrega soporte para `// ---cut-after---`, p. ej.

````
```ts twoslash
const Page = () => (
// ---cut---
<Container>
  <ImportantComponent />
</Container>
// ---cut-after---
)
```
````

## 3.0.0

Cambia el formato de la respuesta de `highlights` de `twoslash`. Es muy probable que nadie esté usando esto, porque ninguno de los `shiki infra` es ... pero es mejor hacerlo correctamente.

## 2.2.0

- Agrega un nuevo parámetro a la configuración de `twoslash`: `customTags`. Esto se puede usar para decirle a `twoslash` que deseas manejar una `@tag` específica en el código de ejemplo. Aparece en las `tags` en `TwoSlashReturn`.

Antes de este cambio, cualquier `//@something` que no estaba en `ExampleOptions` se pasaría al compilador de *TS* (tal vez causando una excepción si no es una opción del compilador). Ahora puedes decirle a `twoslash` "Quiero hacer algo con esta etiqueta, déjalo pasar "

El caso de uso en el que estoy pensando es que `shiki-twoslash` puede querer tener sus propios comandos que se encuentran encima de `twoslash`, pero quiero asegurarme de que los componentes internos de `twoslash` estén todos alineados correctamente (piensa en `--cut --` y la compleja lógica *LSP* de múltiples archivos) bajo el capó.

## 2.1.0

Todos los errores "esperados" de `Twoslash` son del tipo `TwoslashError` que se extiende a `Error`. Esto significa que puedes detectar el error y verificar su tipo, si es un error de `Twoslash`, entonces es algo que puedes tratar de manera diferente. En este caso, es poder presentar una interfaz de usuario para esos errores en `shiki-twoslash` en lugar de una excepción crítica de finalización del proceso.

## 2.0.0

- Elimina la codificación *HTML* de los resultados generados por el error `Twoslash`. Realmente no es responsabilidad de `Twoslash` hacer eso. Estoy clasificando esto como un `semver` mayor, ya que la gente podría confiar en este comportamiento (todo lo que hace el `shiki-twoslash`, por ejemplo).

## 1.1.1

- Mejor manejo de archivos *JSON*

## 1.1.0

- Agrega un archivo *JS* en el `tarball` de `npm` para usar con una etiqueta script estándar, que establece `global.twoslash` con la función `main` de `twoslash`. Debes incluir una copia de `tsvfs` de antemano.

Desempaquetar *URL*s:

- https://unpkg.com/browse/@typescript/vfs@dist/vfs.globals.js
- https://unpkg.com/browse/@typescript/twoslash@dist/twoslash.globals.js

## 1.0.2

- Los comentarios `//@x`, `//^?` y `//^^^` ignoran los espacios en blanco anteriores

## 1.0.1

- Agrega una opción para declarar la raíz del proyecto para superponer el `vfs` sobre: `vfsRoot`

## 1.0.0

- Admite recurrir a los módulos `node` de *tu proyecto* para resolver tipos e importaciones. Esto simplifica drásticamente la configuración de un ejemplo de código que se basa en tipos que no se envían con *TypeScript*.
- Soporte para agregar archivos *JSON* `vfs` en un ejemplo de código

## 0.5.0

- Soporte *TS 4.0*
- Mejoras en `@showEmit` y `@showEmittedFile`
- cuando `noStaticSemanticInfo` está habilitado, aún puedes ejecutar consultas
- mejor soporte para múltiples archivos
- La opción del manual `emit` realmente emite todos los archivos *JS*/*DTS* de vuelta al `vfs`
- `noErrorValidation` es admitido mejor

## 0.4.0

- Líneas con `// prettier-ignore` se eliminan, si deseas mostrarla en una ejemplo de código, usa `/** prettier-ignore */`
- Puedes solicitar completados en un punto particular de un archivo, ten en cuenta: los resultados provienen directamente de *TS* y
  útiles, pero definitivamente requerirán algo de trabajo para que sean útiles (no están ordenados ni priorizados).
  Para hacer tu vida más fácil, también incluye un `"completionsPrefix"` que es la subcadena entre la posición indicada y el punto o espacio más cercano, puedes usarlo para filtrar los resultados.

Ahora puedes ver algunos resultados en el archivo README principal.

```ts
const myString = ""
myString.s
//       ^?
```

## 0.3.0

Mucho trabajo en el motor de consultas, ahora funciona en muchos archivos y varias veces en el mismo archivo. Por ejemplo:

```ts
const a = "123"
//    ^?
const b = "345"
//    ^?
```

y

```ts
// @filename: index.ts
const a = "123"
//    ^?
// @filename: main-file-queries.ts
const b = "345"
//    ^?
```

Ahora devuelve las respuestas de consulta correctas, lo necesitabas para el banco de trabajo de errores.
http://www.staging-typescript.org/dev/bug-workbench

También tienes una forma de establecer los valores predeterminados para la configuración

## 0.2.0

Versión pública inicial de `Twoslash`. Lo suficientemente bueno para usar en el
Sitio web de *TypeScript*, pero todavía con algunos agujeros.
