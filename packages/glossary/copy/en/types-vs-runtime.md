---
display: "Tipos frente a entorno de ejecución"
tags: typescript javascript type-system
---

*TypeScript* agrega una "capa de texto" sobre el código *JavaScript*. *TypeScript* hace esto agregando sintaxis adicional a *JavaScript* que se debe eliminar para ejecutarse dentro de un [entorno de ejecución](#entorno-de-ejecucion) *JavaScript*.

Por ejemplo, este es un código *JavaScript* que se ejecutaría en un entorno de ejecución *JavaScript*:

```ts
const hello = "Hello world";
```

Esto no es:

```ts
const hello: string = "Hello world";
```

La `:string` se podría considerar como un código que solo existe en la "capa de tipo" de *TypeScript* y no en la capa del "entorno de ejecución"/"expresión" del código *JavaScript* que se ejecuta.

La capa de tipo es
