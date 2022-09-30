## Conjuntos de documentos esenciales

Si deseas explicar algo que requiere mirar un problema desde muchos ángulos, o siente que hay valor en intercalar texto entre muestras de código ⏤ puedes crear un *Playground Docset* impulsado por *GitHub Gist*. Estos conjuntos de documentos se generan en el entorno de ejecución a partir de archivos `.ts`, `.tsx`, `.tsx`, `.mjs` y `.md` dentro de una esencia que lo crea por separado del *Playground*.

Por ejemplo, la recreación de la serie de publicaciones de blog de 2020 `Tipo | Trata` puedes ver https://gist.github.com/303ebff59a6fc37f88c86e86dbdeb0e8 ⏤ el *URL* para cargar esta esencia en *Playground* es:

```
https://www.typescriptlang.org/play#gist/303ebff59a6fc37f88c86e86dbdeb0e8-6
//                                       ^ gist id                        ^ page
```

Esto funciona mediante la utilización de [TypeScript-Playground-Gist-Proxy-API](https://github.com/microsoft/TypeScript-Playground-Gist-Proxy-API) que prerenderiza de forma segura el *markdown* en *HTML* y pasa a través de los archivos *TS*/*JS* al *Playground*.

### *Gists* de un solo archivo

Si simplemente deseas hacer un *Playground realmente* largo, puedes hacer un resumen de un solo archivo y eso se cargará en el *Playground* sin ceremonia.

### *Playgrounds* de varios archivos

Los *playgrounds* con tecnología *Gist* son donde reside la complejidad interesante. Puedes utilizar una combinación de archivos `.ts`, `.tsx`, `.js` y `.md` para crear un conjunto de documentos convincente.

#### Sistemas de nombres

*Playground* admite ordenamientos en la barra lateral a través del nombre del archivo. Puedes prefijar el nombre del archivo con un índice. Por ejemplo: `"0 ~ Intro.md` vendría primero, después de eso `01 ~ code.ts`. *Playground* eliminará cualquier espacio en blanco inicial después de eliminar el `~` para extraer el índice.

Si deja un espacio entre los números, por ejemplo, `03 ~ Wrap Up.md` y luego `05 ~ Part Two.md`, el cuarto índice se mostrará en la barra lateral como un guión que indica el final de un grupo.

La vida es más fácil cuando se trabaja con lo esencial ⏤o *gist*⏤ si agregas el `0` para los números antes de diez, eso es opcional.

#### Archivos de código

Cada archivo de código reemplaza el contenido principal del *playground*, lo cual significa que no puedes importar archivos individuales. El estado no se guarda por archivo, por lo que si editas un archivo de código y luego cambias la página ⏤ el *playground* no restaurará esos cambios si regresas.

Los archivos de código admiten la configuración de las opciones del compilador a través de un comentario especial de cuatro barras en la línea superior:

```js
//// { "compiler": { "strictNullChecks": false } }
// La primera línea real de mi código

const a = 123
```

Establecería `strictNullChecks` en `false`, y luego eliminaría esa línea del código de ejemplo.

Los indicadores del compilador se establecen cuando un usuario hace clic en la página, no se revierte cuando hace clic en otra página. Si confías en cambiar entre configuraciones para mostrar una idea, es mejor ser explícito en ambas.

#### Markdown

*Markdown* se renderiza en *HTML* a través de la [*API Markdown* de *GitHub*](https://docs.github.com/es/rest/reference/markdown), lo cual significa que cualquier característica que veas en *GitHub* se refleja en el *markdown* en *Playground*.

Si deseas vincular páginas, puedes usar la dirección completa de *Playground* de tu esencia ⏤*gist*⏤ con la página y *Playground* redefinirá esos enlaces y lo tratará como si hubieras hecho clic en la barra lateral.

A cualquier otro enlace automáticamente se le aplicará `target="_blank"`.
