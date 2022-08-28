### Una guía para convertir a *Twoslash*

Para ejecutar el sitio con *Twoslash* habilitado, debes usar `yarn start`.

El código de los ejemplos en el sitio web de *TypeScript* se debe ejecutar a través de [*Twoslash*](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher#typescript-twoslash) lo que permite al compilador hacer más del trabajo.

Sin `twoslash`, un código de ejemplo se ve así:

````
```ts
// Declara un tipo tupla
let x: [string, number];

// Lo inicia
x = ["hello", 10]; // Bien
// Lo Inicia incorrectamente
x = [10, "hello"]; // Error
```
````

Con `twoslash`:

````
```ts twoslash
// Declara un tipo tupla
let x: [string, number];

// Lo inicia
x = ["hello", 10]; // Bien
// Lo Inicia incorrectamente
x = [10, "hello"]; // Error
```
````

Esto ahora rompería la construcción del sitio web de *TypeScript* porque el código de ejemplo tiene un error de compilación, esto es genial. Solucionemos eso diciéndole a *TypeScript* que este error es a propósito:

````
```ts twoslash
// @errors: 2322
// Declara un tipo tupla
let x: [string, number];

// Lo inicia
x = ["hello", 10]; // Bien
// Lo Inicia incorrectamente
x = [10, "hello"]; // Error
```
````

Ahora pasará. La cuestión a partir de aquí es que los comentarios son algo redundantes porque el compilador te dará esa información, así que los recortamos:

````
```ts twoslash
// @errors: 2322
// Declara un tipo tupla
let x: [string, number];

// Lo inicia
x = ["hola", 10];

// Lo Inicia incorrectamente
x = [10, "hola"];
```
````

---

Una muestra de código `twoslash` puede hacer *mucho* ⏤ la mejor documentación para `twoslash` se encuentra dentro de [`bug workbench`](https://www.staging-typescript.org/dev/bug-workbench) donde puedes probar tu código de ejemplo en vivo y leer cómo funciona todo.
