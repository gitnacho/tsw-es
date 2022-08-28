## Anotaciones *Twoslash*

[Twoslash](https://www.npmjs.com/package/@typescript/twoslash) es un formato de anotación para *TypeScript* que utiliza comentarios especialmente diseñados (dos barras `//`) como formato de marcado para escribir muestras de código (disponible en `npm` en [`@typescript/twoslash`](https://www.npmjs.com/package/@typescript/twoslash)). Impulsa todos los ejemplos de código en el sitio web de *TypeScript*, puedes obtener más información al respecto [aquí](https://shikijs.github.io/twoslash/).

#### Consultas *Twoslash*

*Playground* admite mostrar los tipos en una ubicación determinada mediante el uso de un comentario vacío con un `^?` para indicar el símbolo que te interesa:

```ts
const abc = "Hello"
//    ^?
```

Agregaría una anotación en línea en tiempo real sobre el tipo de "abc" en el editor. Esto puede facilitar la escritura de tipos complejos y hacer que sea mucho más obvio al compartir código lo que crees que es importante.

#### Banderas del compilador *Twoslash*

Una forma más arcana, pero muy ergonómica de establecer una configuración del compilador es a través de la bandera del compilador, que son comentarios que comienzan con `// @`.

El editor completará automáticamente los comandos de dos barras para cualquier configuración del compilador para la versión actual de *TypeScript* en tu *Playground*. Si la configuración es booleana, no es necesario establecer un valor:

```ts
// @isolatedModules
```

Habrías activado `isolatedModules` en tu *Playground*. Puedes establecer los valores a través de `true/false`:

```ts
// @strictPropertyInitialization: false
```

Para más configuraciones con más opciones de valores, puedes usar la misma cadena descriptiva que está disponible en un `tsconfig.json`:

```ts
// @target: esnext
// @module: nodenext
```

Puedes escribir una lista con una cadena separada por comas:

```ts
// @lib: es2015,dom
```

Escribir un comando de *twoslash* establecerá la marca del compilador a medida que escribes, y se establecerá instantáneamente si recargas o compartes la *URL* con otra persona. Esto puede actuar como una herramienta avanzada de usuario para configurar los indicadores del compilador *y* hacer que el cambio sea mucho más explícito que un parámetro de consulta (que puede requerir buscar en el menú desplegable de *Configuración de TS*).

<details>
<summary>¿Lo sabías?</summary>

El sistema de *twoslash* replica cómo se prueba el compilador de *TypeScript*, que son pruebas de integración de ~ 60k que utilizan comentarios especialmente diseñados para configurar ejecuciones de compilador aisladas. Es un sistema bastante bueno, puedes aprender sobre ellos con más profundidad en [`orta/typescript-notes`](https://github.com/orta/typescript-notes/tree/master/systems/testing).

</details>
