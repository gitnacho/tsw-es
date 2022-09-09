## Desactivar una página de documentación

Empieza con esta pregunta: ¿Estás depreciando o eliminando? Lo ideal es que nunca elimines porque [las *URI*s geniales no cambian](https://www.w3.org/Provider/Style/URI.html) pero por algo que intencionalmente tuvo una vida personal limitada, está bien.

### ¿Conservar o redirigir?

Si no deseas conservar el contenido, elimina el archivo `.md` del repositorio y agrega la *URI* a [setupRedirects.ts](https://github.com/microsoft/TypeScript-website/blob/v2/packages/typescriptlang-org/src/redirects/setupRedirects.ts).

### Consérvalo

Hay dos atributos nuevos que puedes agregar al `yml` en la parte superior del documento *markdown* para indicar que una página está obsoleta:

```md
---
title: Tipos avanzados
layout: docs
permalink: /docs/handbook/advanced-types.html
oneline: Conceptos avanzados sobre tipos en TypeScript
deprecated_by: /docs/handbook/2/types-from-types.html

# prettier-ignore
deprecation_redirects: [
  type-guards-and-differentiating-types, /docs/handbook/2/narrowing.html,
  user-defined-type-guards, /docs/handbook/2/narrowing.html#usar-predicados-de-tipo,
  typeof-type-guards, "/docs/handbook/2/narrowing.html#typeof-type-guards",
  instanceof-type-guards, /docs/handbook/2/narrowing.html#instanceof-narrowing,
  tipos-que-aceptan-valores-null, /docs/handbook/2/everyday-types.html#null-y-undefined,
  alias-de-tipo, /docs/handbook/2/everyday-types.html#alias-de-tipo,
  interfaces-vs-type-aliases, /docs/handbook/2/everyday-types.html#diferencias-entre-los-alias-de-tipo-y-las-interfaces,
  enum-member-types, /docs/handbook/enums.html,
  polymorphic-this-types, /docs/handbook/2/classes.html,
  index-types, /docs/handbook/2/indexed-access-types.html,
  index-types-and-index-signatures, /docs/handbook/2/indexed-access-types.html,
  mapped-types, /docs/handbook/2/mapped-types.html,
  inference-from-mapped-types, /docs/handbook/2/mapped-types.html,
  conditional-types, /docs/handbook/2/conditional-types.html,
  tipos-condicionales-distributivos, /docs/handbook/2/conditional-types.html#tipos-condicionales-distributivos,
  inferencia-de-tipos-en-tipos-condicionales, /docs/handbook/2/conditional-types.html#inferencia-dentro-de-tipos-condicionales,
  predefined-conditional-types, /docs/handbook/utility-types.html,
]
---

Esta página enumera algunas de las formas más avanzadas en las que puedes modelar tipos, funciona en conjunto con el documento [Tipos útiles](/docs/handbook/utility-types.html) que incluye tipos que están incluidos en *TypeScript* y disponibles globalmente.

## Protectores de tipo y diferenciación de tipos

Los tipos unión son útiles para modelar situaciones en las que los valores se pueden superponer en los tipos que pueden asumir.
¿Qué sucede cuando necesitamos saber específicamente si tenemos un `Fish`?
```

La inclusión de la etiqueta `deprecated_by` marcará visualmente las páginas como obsoletas y le dirá a los motores de búsqueda que consideren esa otra página como fuente canónica. Eso debería ser suficiente para páginas simples.

Si se trata de una página a la que las personas están vinculando mucho, y *realmente*  deseas llevar a alguien a su ubicación correcta, entonces puedes hacer un mapa hash de consultas a nuevas páginas.

Si cargas la página anterior en tu navegador y ejecutas este JS en el inspector web:

```js
document.querySelectorAll(".markdown h2, .markdown h3").forEach(h => console.log(h.id))
```

Imprimirá todos los anclajes del encabezado, y ese es el lado izquierdo de tus pareados de arreglo. El sitio tiene un código del lado del cliente para anular la URL `deprecated_by` en el entorno de ejecución si detecta que un usuario tiene un hash coincidente en la *URL*.
