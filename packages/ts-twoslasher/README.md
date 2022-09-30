# `TwoSlash` en *TypeScript*

Un formato de marcado para código *TypeScript*, ideal para crear ejemplos de código autónomos que permiten al compilador *TypeScript* hacer el trabajo adicional. Inspirado
por el [sistema de prueba `fourslash`](https://github.com/orta/typescript-notes/blob/master/systems/testing/fourslash.md).

Se utiliza como analizador previo antes de mostrar ejemplos de código dentro del sitio web de *TypeScript* y para crear una forma estándar para nosotros.
para crear ejemplos de errores en el rastreador de problemas del compilador.

Puedes obtener una vista previa de `twoslash` en el sitio web de *TypeScript* aquí: https://www.typescriptlang.org/dev/twoslash/

### ¿Qué es `Twoslash`?

Puede que sea más fácil mostrarlo en lugar de decirlo, aquí hay un ejemplo de código del manual de *TypeScript*. Usaremos
`twoslash` para permitir que el compilador maneje los mensajes de error y proporcione información de resaltado enriquecido.

##### Antes

> Los tipos tupla te permiten expresar un arreglo con un número fijo de elementos cuyos tipos son conocidos, pero no es necesario que sean los mismos. Por ejemplo, posiblemente desees representar un valor como un par de una `string` y un `number`:

<pre>```ts 
// Declara un tipo tupla
let x: [string, number];

// Lo inicia
x = ["hello", 10]; // Bien
// Lo Inicia incorrectamente
x = [10, "hello"]; // Error
```</pre>

> Al acceder a un elemento con un índice conocido, se recupera el tipo correcto:

<pre>```ts
console.log(x[0].substring(1)) // Bien
console.log(x[1].substring(1)) // Error, 'number' no tiene 'substring'
```</pre>

##### Después:

> Los tipos tupla te permiten expresar un arreglo con un número fijo de elementos cuyos tipos son conocidos, pero no es necesario que sean los mismos. Por ejemplo, posiblemente desees representar un valor como un par de una `string` y un `number`:

<pre>```ts twoslash
// @errors: 2322
// Declara un tipo tupla
let x: [string, number];

// Lo inicia
x = ["hola", 10];
// Lo Inicia incorrectamente
x = [10, "hola"];
```</pre>

> Al acceder a un elemento con un índice conocido, se recupera el tipo correcto:

<pre>```ts
// @errors: 2339
let x: [string, number];
x = ["hello", 10]; // Bien
/// ---cut---
console.log(x[0].substring(1));
console.log(x[1].substring(1));
```</pre>

[Obsérvalo en acción en el sitio](https://www.typescriptlang.org/es/docs/handbook/basic-types.html#tuple).

##### ¿Qué cambió?

Cambiar este ejemplo de código para usar `twoslash` tiene algunas ventajas:

- Los mensajes de error en ambos los proporciona el compilador de *TypeScript*, por lo que no es necesario escribir "OK" o "Error".
- Marcamos explícitamente qué errores se esperan en el código de ejemplo, si no ocurre, `twoslash` lanzará
- El segundo ejemplo es un ejemplo completo para el compilador. Esto lo hace disponible para realizar búsquedas de identificadores y errores reales del compilador, pero el usuario solo ve las dos últimas líneas.

Por otro lado, es un poco más detallado porque cada ejemplo de `twoslash` es un entorno de compilador único: por lo que debes incluir todo el código dependiente en cada ejemplo.

### Características

El lenguaje de marcado `Twoslash` ayuda con:

- Aplicar errores precisos de un código de ejemplo *TypeScript* y dejar la mensajería al compilador
- Dividir un código de ejemplo para ocultar el código que distrae
- Resaltar símbolos declarativamente en tu código de ejemplo
- Reemplazo de código con los resultados de la transpilación a diferentes archivos o archivos auxiliares como archivos `.d.ts` o `.map`
- Maneja importaciones de múltiples archivos en un solo código de ejemplo
- Crear un enlace de *playground* para el código

### Notas

- Líneas que tienen `//prettier-ignore` se eliminan

### *API*

<!-- AUTO-GENERATED-CONTENT:START (FIXTURES) -->

La *API* de marcado de `twoslash` vive dentro de tu código de ejemplo de código como comentarios, que pueden ejecutar comandos especiales. Existen los siguientes comandos:

```ts
/** Indicadores en línea disponibles que no son indicadores del compilador */
export interface ExampleOptions {
  /** Permite que el ejemplo suprima todos los diagnósticos de error */
  noErrors: boolean
  /** Un arreglo de códigos de error de TS, que escribes separados por espacios: esto es para que la herramienta pueda conocer errores inesperados */
  errors: number[]
  /** Muestra el equivalente JS del código TypeScript en su lugar */
  showEmit: boolean
  /**
   * Se debe usar con showEmit, te permite elegir el archivo para presentar en lugar de la fuente ⏤ de manera predeterminada es index.js que
   * significa que cuando solo usas `showEmit` arriba, muestra el JS transpilado.
   */
  showEmittedFile: string
  /** Ya sea para deshabilitar la pre-caché de las llamadas LSP para identificadores interesantes, el valor predeterminado es false */
  noStaticSemanticInfo: boolean
  /** Declara que el programa TypeScript debe editar el fsMap que se le pasa, esto solo es útil para los creadores de herramientas, por omisión es false */
  emit: boolean
  /** Declara que no necesita validar que los errores tengan las anotaciones correspondientes, el valor predeterminado es false */
  noErrorValidation: boolean
}
```

Además de este conjunto, puedes usar `@filename` que permite exportar entre archivos.

Finalmente, puedes configurar cualquier marca del compilador `tsconfig` usando esta sintaxis, que puedes ver en algunos de los ejemplos a continuación.

### Ejemplos

#### `compiler_errors.ts`

```ts
// @target: ES2015
// @errors: 7006

function fn(s) {
  console.log(s.subtr(3))
}

fn(42)
```

Se convierte en:

> ```ts
> function fn(s) {
>   console.log(s.subtr(3))
> }
>
> fn(42)
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [],
>   "staticQuickInfos": "[ 7 items ]",
>   "errors": [
>     {
>       "category": 1,
>       "code": 7006,
>       "length": 1,
>       "start": 13,
>       "line": 1,
>       "character": 12,
>       "renderedMessage": "Parameter 's' implicitly has an 'any' type.",
>       "id": "err-7006-13-1"
>     }
>   ],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/PTAEAEBcEMCcHMCmkBcoCiBlATABgIwCsAUCBIrLAPawDOaA7LrgGzHEBmArgHYDGkAJZUeoDjwAUtAJSgA3sVCg+I2lQA2iAHTqq8KVtpcARpFgSAzNOnEAvu3ESALNhtA",
>   "tags": []
> }
> ```

#### `compiler_flags.ts`

```ts
// @noImplicitAny: false
// @target: ES2015

// Esto no lanzará debido al noImplicitAny
function fn(s) {
  console.log(s.subtr(3))
}

fn(42)
```

Se convierte en:

> ```ts
> // Esto no lanzará debido al noImplicitAny
> function fn(s) {
>   console.log(s.subtr(3))
> }
>
> fn(42)
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [],
>   "staticQuickInfos": "[ 7 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/PTAEAEDsHsEkFsAOAbAlgY1QFwIKQJ4BcoAZgIbIDOApgFAgRZkBOA5tVsQKIDKATAAYAjAFZa9MABUAFqkqgA7qmTJQMLKCzTm0BaABG1dGQCuNUNBKbp1NXCRpMuArRInI6LKmiRSkABSUAJSgAN60oKDoPpTQyNQAdMjQrIEJlCb6WMz+AMxBQbQAvuIkAQAsfEEA3LRAA",
>   "tags": []
> }
> ```

#### `completions.ts`

```ts
console.log
//       ^|
```

Se convierte en:

> ```ts
> console.log
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [
>     {
>       "completions": [
>         {
>           "name": "assert",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "clear",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "count",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "countReset",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "debug",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "dir",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "dirxml",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "error",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "group",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "groupCollapsed",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "groupEnd",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "info",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "log",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "table",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "time",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "timeEnd",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "timeLog",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "timeStamp",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "trace",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         },
>         {
>           "name": "warn",
>           "kind": "method",
>           "kindModifiers": "declare",
>           "sortText": "11"
>         }
>       ],
>       "kind": "completions",
>       "start": 9,
>       "completionsPrefix": "l",
>       "length": 1,
>       "offset": 9,
>       "line": 1
>     }
>   ],
>   "staticQuickInfos": "[ 2 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/MYewdgziA2CmB00QHMBQB6dACHusD0AfVIA",
>   "tags": []
> }
> ```

#### `cuts_out_unneccessary_code.ts`

```ts
interface IdLabel {
  id: number /* some fields */
}
interface NameLabel {
  name: string /* other fields */
}
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel
// Este comentario no se debe incluir

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"
}

let a = createLabel("typescript")
//  ^?

let b = createLabel(2.8)
//  ^?

let c = createLabel(Math.random() ? "hello" : 42)
//  ^?
```

Se convierte en:

> ```ts
> function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
>   throw "unimplemented"
> }
>
> let a = createLabel("typescript")
>
> let b = createLabel(2.8)
>
> let c = createLabel(Math.random() ? "hello" : 42)
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [
>     {
>       "docs": "",
>       "kind": "query",
>       "start": 354,
>       "length": 16,
>       "text": "let a: NameLabel",
>       "offset": 4,
>       "line": 5
>     },
>     {
>       "docs": "",
>       "kind": "query",
>       "start": 390,
>       "length": 14,
>       "text": "let b: IdLabel",
>       "offset": 4,
>       "line": 7
>     },
>     {
>       "docs": "",
>       "kind": "query",
>       "start": 417,
>       "length": 26,
>       "text": "let c: NameLabel | IdLabel",
>       "offset": 4,
>       "line": 9
>     }
>   ],
>   "staticQuickInfos": "[ 14 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgJIBMAycBGEA2yA3ssOgFzIgCuAtnlADTID0AVMgM4D2tKMwAuk7I2LZAF8AUKEixEKAHJw+2PIRIgVESpzBRQAc2btk3MAAtoyAUJFjJUsAE8ADku0B5KBgA8AFWQIAA9IEGEqOgZkAB8ufSMAPmQAXmRAkLCImnprAH40LFwCZEplVWL8AG4pFnF-C2ARBF4+cC4Lbmp8dCpzZDxSEAR8anQIdCla8QBaOYRqMDmZqRhqYbBgbhBkBCgIOEg1AgCg0IhwkRzouL0DEENEgAoyb3KddIBKMq8fdADkkQpMgQchLFBuAB3ZAAInWwFornwEDakHQMKk0ikyLAyDgqV2+0OEGO+CeMJc7k4e2ArjAMM+NTqIIAenkpjiBgS9gcjpUngAmAB0AA5GdNWezsRBcQhuUS+eongBZQ4WIVQODhXhPT7IAowqz4fDcGGlZAAFgF4uZyDZUiAA",
>   "tags": []
> }
> ```

#### `declarations.ts`

```ts
// @declaration: true
// @showEmit
// @showEmittedFile: index.d.ts

/**
 * Obtiene la longitud de una cadena
 * @param valor una cadena
 */
export function getStringLength(value: string) {
  return value.length
}
```

Se convierte en:

> ```ts
> /**
>  * Obtiene la longitud de una cadena
>  * @param valor una cadena
>  */
> export declare function getStringLength(value: string): number
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [],
>   "staticQuickInfos": "[ 0 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/PTAEAEBMFMGMBsCGAnRAXAlgewHYC5Q1kBXaAKBAgGcALLAdwFEBbDNCscWhlttaSADEM8aAQw4YADwB0kGWipkKAKhVlQK0AHFoiwjWihROAOZoaoLADNQiUFSITTGreAAOKRM1AA3RPCkdg5OZq7AZNBS7ljIaKDWxDiwmLigpnoAyqGmADLQZhYAFP6BYiHIzgCUoADeGqDIesTIOH4BpDIm5jRkAL5kQA",
>   "tags": []
> }
> ```

#### `errorsWithGenerics.ts`

```ts
// @errors: 2322
const a: Record<string, string> = {}
let b: Record<string, number> = {}
b = a
```

Se convierte en:

> ```ts
> const a: Record<string, string> = {}
> let b: Record<string, number> = {}
> b = a
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [],
>   "staticQuickInfos": "[ 6 items ]",
>   "errors": [
>     {
>       "category": 1,
>       "code": 2322,
>       "length": 1,
>       "start": 72,
>       "line": 2,
>       "character": 0,
>       "renderedMessage": "El tipo `Record<string, string>` no se puede asignar al tipo `Record<string, number>`.\n los índices de firmas de `string` son incompatibles.\n El tipo 'string' no se puede asignar al tipo 'number'.",
>       "id": "err-2322-72-1"
>     }
>   ],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oFAGM4A7RAF1AENUAlSA6AEwB5ToBLQgcwBpQX2OAfKAC8oAN4BfHABtIZAEbVaCJn049CAVwC28mENGSc8kRRxA",
>   "tags": []
> }
> ```

#### `highlighting.ts`

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

greet("Maddison", new Date())
//                ^^^^^^^^^^
```

Se convierte en:

> ```ts
> function greet(person: string, date: Date) {
>   console.log(`Hello ${person}, today is ${date.toDateString()}!`)
> }
>
> greet("Maddison", new Date())
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [
>     {
>       "kind": "highlight",
>       "offset": 134,
>       "length": 10,
>       "text": "",
>       "line": 4,
>       "start": 18
>     }
>   ],
>   "queries": [],
>   "staticQuickInfos": "[ 11 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwE4FN1QBQAd2oDOCAXIoVKjGMgDSIAmAhlOmQCIvoCUiA3gChEiCAmIAbdADpxcZNgAGACXTjZiACR98RBAF96UOMwCeiGIU19mrKUc6sAypWrzuegIQLuAbgF6BATRMHAAiAFkmBgYLBFD6MHQAd0QHdGxuXwEAemzhfILC4QA9UrLygSA",
>   "tags": []
> }
> ```

#### `import_files.ts`

```ts
// @filename: file-with-export.ts
export const helloWorld = "Example string"

// @filename: index.ts
import { helloWorld } from "./file-with-export"
console.log(helloWorld)
```

Se convierte en:

> ```ts
> // @filename: file-with-export.ts
> export const helloWorld = "Example string"
>
> // @filename: index.ts
> import { helloWorld } from "./file-with-export"
> console.log(helloWorld)
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [],
>   "staticQuickInfos": "[ 5 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/PTAEAEDMEsBsFMB2BDAtvAXKGCC0B3aAFwAtd4APABwHsAnIgOiIGcAoS2h0AYxsRZFQJeLFg0A6vVgATUAF5QAIgCiFNFQShBdaIgDmSgNxs2ICDiRpMoPTMrN20VFyEBvEWMnSZAX2x0NKjKjMCWBMRknPRESmx8AjQIjOL6ABSe4lJ0sgCUbEA",
>   "tags": []
> }
> ```

#### `importsModules.ts`

```ts
// @filename: Component.tsx
import React from "react"

export function Hello() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

// @filename: index.ts
import { Hello } from "./Component"
console.log(Hello)
```

Se convierte en:

> ```ts
> // @filename: Component.tsx
> import React from "react"
>
> export function Hello() {
>   return (
>     <div>
>       <h1>Hello World</h1>
>     </div>
>   )
> }
>
> // @filename: index.ts
> import { Hello } from "./Component"
> console.log(Hello)
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [],
>   "staticQuickInfos": "[ 10 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/PTAEAEDMEsBsFMB2BDAtvAXKAwge1QA66JIAuAdKQM4AeAUNIbgE6mgBK8yAxm5M-lAAiZl15C6deDSKtQkAK6Je0YqAAS8WLFwAKAJSgA3nVChRpBc0Shdps6AA8AE2gA3AHz2HTgBYBGD01tXFAAdRZYZ0dgAK8fGNdPe306AF9JEAgYBBR0LGhEZ2lKKgYmOSMNLR1QNPkBVGFyYDwmEkRSCW5iKlwEch0Ac11gnVSgA",
>   "tags": []
> }
> ```

#### `query.ts`

```ts
let foo = "hello there!"
//  ^?
```

Se convierte en:

> ```ts
> let foo = "hello there!"
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "ts",
>   "highlights": [],
>   "queries": [
>     {
>       "docs": "",
>       "kind": "query",
>       "start": 4,
>       "length": 15,
>       "text": "let foo: string",
>       "offset": 4,
>       "line": 1
>     }
>   ],
>   "staticQuickInfos": "[ 1 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/DYUwLgBAZg9jEF4ICIAWJjHmdAnEAhMgNwBQA9ORBAHoD8pQA",
>   "tags": []
> }
> ```

#### `showEmit.ts`

```ts
// @showEmit
// @target: ES5
// @downleveliteration

// --importHelpers on: El asistente de propagación se importará desde 'tslib'

export function fn(arr: number[]) {
  const arr2 = [1, ...arr]
}
```

Se convierte en:

> ```js
> // --importHelpers on: El asistente de propagación se importará desde 'tslib'
> var __read =
>   (this && this.__read) ||
>   function (o, n) {
>     var m = typeof Symbol === "function" && o[Symbol.iterator]
>     if (!m) return o
>     var i = m.call(o),
>       r,
>       ar = [],
>       e
>     try {
>       while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
>     } catch (error) {
>       e = { error: error }
>     } finally {
>       try {
>         if (r && !r.done && (m = i["return"])) m.call(i)
>       } finally {
>         if (e) throw e.error
>       }
>     }
>     return ar
>   }
> var __spreadArray =
>   (this && this.__spreadArray) ||
>   function (to, from, pack) {
>     if (pack || arguments.length === 2)
>       for (var i = 0, l = from.length, ar; i < l; i++) {
>         if (ar || !(i in from)) {
>           if (!ar) ar = Array.prototype.slice.call(from, 0, i)
>           ar[i] = from[i]
>         }
>       }
>     return to.concat(ar || Array.prototype.slice.call(from))
>   }
> export function fn(arr) {
>   var arr2 = __spreadArray([1], __read(arr), false)
> }
> ```

> With:

> ```json
> {
>   "code": "See above",
>   "extension": "js",
>   "highlights": [],
>   "queries": [],
>   "staticQuickInfos": "[ 0 items ]",
>   "errors": [],
>   "playgroundURL": "https://www.typescriptlang.org/play/#code/PTAEAEGcAsHsHcCiBbAlgFwFAgughgE4DmApugFyiIDKArNmOACYIB2ANiQG4nsYkE86VLFaYGoALSTUyAA6wC6ABK85AyKFGVqcgiTxNQ0NQNDxU7dqABGJULIVKSRgGYFYyUAHJ0kPjbe4iQAHk7ooK4ArqwAxsKikawAFIQElKxRyHYEANoAugCUoADemKCgsaKQEWkATKAAvKC5AIwANKAAdD1p+ZgAvphAA",
>   "tags": []
> }
> ```

### *API*

La *API* es una función `main` exportada:

```ts
/**
 * Ejecuta el corrector contra un código de ejemplo TypeScript/JavaScript que potencialmente devuelve
 * la diferencia de código y un conjunto de anotaciones sobre cómo funciona.
 *
 * @param code El código marcado con twoslash
 * @param extension Por ejemplo: "ts", "tsx", "typescript", "javascript" or "js".
 * @param options Opciones adicionales para twoslash
 */
export function twoslasher(code: string, extension: string, options: TwoSlashOptions = {}): TwoSlashReturn
```

Que toma las opciones:

```ts
export interface TwoSlashOptions {
  /** Permite configurar cualquiera de las opciones del manual desde fuera de la función, útil si no deseas identificadores LSP */
  defaultOptions?: Partial<ExampleOptions>
  /** Permite configurar cualquiera de las opciones del compilador desde fuera de la función */
  defaultCompilerOptions?: CompilerOptions
  /** Permite aplicar transformadores personalizados al resultado de la emisión, solo es útil con la salida showEmit */
  customTransformers?: CustomTransformers
  /** Se requerirá una copia opcional de la importación de TypeScript, si falta. */
  tsModule?: TS
  /** Una copia opcional de la importación lz-string, si falta, será necesaria. */
  lzstringModule?: LZ
  /**
   * Un objeto Map opcional que se pasa a @typescript/vfs - si estás usando twoslash en la
   * web, lo necesitarás para configurar tus archivos lib *.d.ts. Si falta, usará tu fs.
   */
  fsMap?: Map<string, string>
  /** El cwd del directorio sobre el que se deben superponer los fs virtuales cuando se usan fs locales, opta por process.cwd() si no está presente */
  vfsRoot?: string
  /** Un conjunto conocido de etiquetas `//@[tags]` para extraer y no tratar como un comentario */
  customTags?: string[]
}
```

Y devuelve:

```ts
export interface TwoSlashReturn {
  /** El código de salida, podría ser *TypeScript*, pero también podría ser un `JS/JSON/d.ts` */
  code: string
  /** El nuevo tipo de extensión para el código, potencialmente cambiado si han solicitado resultados emitidos */
  extension: string
  /** Solicitudes para resaltar una parte particular del código */
  highlights: {
    kind: "highlight"
    /** El índice del texto en el archivo */
    start: number
    /** ¿En qué línea está el identificador resaltado? */
    line: number
    /** ¿En qué índice de la línea representa el símbolo de intercalación */
    offset: number
    /** El texto del token que está resaltado */
    text?: string
    /** La longitud del token */
    length: number
  }[]
  /** Un arreglo de identificadores de respuestas LSP en el ejemplo */
  staticQuickInfos: {
    /** El contenido de la cadena del nodo que esto representa (principalmente para depuración) */
    targetString: string
    /** La respuesta LSP base (el tipo) */
    text: string
    /** Información JSDoc adjunta */
    docs: string | undefined
    /** El índice del texto en el archivo */
    start: number
    /** cuanto tiempo el identificador */
    length: number
    /** número de línea donde se encuentra */
    line: number
    /** El carácter de la línea */
    character: number
  }[]
  /** Solicitudes para usar el LSP para obtener información de un símbolo en particular en la fuente */
  queries: {
    kind: "query" | "completions"
    /** ¿En qué línea está el identificador resaltado? */
    line: number
    /** ¿En qué índice de la línea representa el símbolo de intercalación */
    offset: number
    /** El texto del token que está resaltado */
    text?: string
    /** Cualquier JSDocs adjunto */
    docs?: string | undefined
    /** El inicio del token que indica la consulta */
    start: number
    /** La longitud del token */
    length: number
    /** Resultados de terminaciones en un punto en particular */
    completions?: import("typescript").CompletionEntry[]
    /* Prefijo de finalización, p. ej. las letras antes del cursor en la palabra para que pueda filtrar */
    completionsPrefix?: string
  }[]
  /** Los comandos extraídos de twoslash para las etiquetas personalizadas pasadas a través de customTags */
  tags: {
    /** Cuál era el nombre de la etiqueta */
    name: string
    /** Dónde estaba ubicado en el archivo fuente original */
    line: number
    /** Cuál fue el texto después de la cadena `//@tag:` (opcional porque podrías hacer @tag en su propia línea sin el ':') */
    annotation?: string
  }[]
  /** Mensajes de error de diagnóstico que aparecieron al crear el programa */
  errors: {
    renderedMessage: string
    id: string
    category: 0 | 1 | 2 | 3
    code: number
    start: number | undefined
    length: number | undefined
    line: number | undefined
    character: number | undefined
  }[]
  /** El URL de este ejemplo en el playground */
  playgroundURL: string
}
```

<!-- AUTO-GENERATED-CONTENT:END -->

## Usar esta dependencia

Este paquete se puede utilizar como una importación `commonjs`, un `esmodule` y directamente a través de una etiqueta de script que edita el espacio de nombres global. Todos estos archivos están incrustados dentro de los paquetes publicados.

## Desarrollo local

A continuación se muestra una lista de comandos que probablemente te resulten útiles. Puedes obtener registros de depuración ejecutando con la var env de `DEBUG="*"`.

### `npm start` o `yarn start`

Ejecuta el proyecto en modo de desarrollo/`watch`. Tu proyecto se reconstruirá con los cambios. La biblioteca se reconstruirá si realizas modificaciones.

### `npm run build` o `yarn build`

Agrupa el paquete en el directorio `dist`. El paquete está optimizado y empaquetado con `Rollup` en múltiples formatos (*CommonJS*, *UMD* y *ES Module*).

### `npm test` o `yarn test`

Ejecuta el observador de pruebas (`Jest`) en modo interactivo. De forma predeterminada, ejecuta pruebas relacionadas con archivos modificados desde la última confirmación.
