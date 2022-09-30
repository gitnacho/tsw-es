---
title: TypeScript 4.8
layout: docs
permalink: /docs/handbook/release-notes/typescript-4-8.html
oneline: Notas de la versión 4.8 de TypeScript
---

## Reducción de intersecciones mejorada, compatibilidad con unión y reducción

TypeScript 4.8 trae una serie de mejoras de corrección y consistencia en `--strictNullChecks`.
Estos cambios afectan el funcionamiento de la intersección y unión de tipos, y se aprovechan en la forma en que TypeScript reduce los tipos.

Por ejemplo, `unknown` tiene un espíritu cercano al tipo unión `{} | null | undefined` porque acepta `null`, `undefined` y cualquier otro tipo.
TypeScript ahora reconoce esto y permite asignaciones de `unknown` a `{} | null | undefined`.

```ts
function f(x: unknown, y: {} | null | undefined) {
    x = y; // siempre ha trabajado
    y = x; // solía tener error, ahora funciona
}
```

Otro cambio es que `{}` intersectado con cualquier otro tipo de objeto simplifica directamente a ese tipo de objeto.
Eso significa que pudimos reescribir `NonNullable` para simplemente usar una intersección con `{}`, porque `{} & null` y `{} & undefined` simplemente se desechan.

```diff
- type NonNullable<T> = T extends null | undefined ? never : T;
+ type NonNullable<T> = T & {};
```

Esta es una mejora porque la intersección de tipos como esta se pueden reducir y asignar, mientras que los tipos condicionales actualmente no pueden.
Entonces `NonNullable<NonNullable<T>>` ahora se simplifica al menos a `NonNullable<T>`, mientras que antes no lo hacía.

```ts
function foo<T>(x: NonNullable<T>, y: NonNullable<NonNullable<T>>) {
    x = y; // siempre ha trabajado
    y = x; // solía tener error, ahora funciona
}
```

Estos cambios también nos permitieron introducir mejoras importantes en el análisis del control de flujo y la reducción de tipos.
Por ejemplo, `unknown` ahora se reduce al igual que `{} | null | undefined` en ramas veraces.

```ts
function narrowUnknownishUnion(x: {} | null | undefined) {
    if (x) {
        x;  // {}
    }
    else {
        x;  // {} | null | undefined
    }
}

function narrowUnknown(x: unknown) {
    if (x) {
        x;  // solía ser 'unknown', ahora '{}'
    }
    else {
        x;  // unknown  requiere
    }
}
```

Los valores genéricos también se reducen de manera similar.
Al comprobar que un valor no es `null` o `undefined`, *TypeScript* ahora simplemente lo intersecta con `{}` — lo que, de nuevo, es lo mismo que decir que es `NonNullable`.
Al juntar muchos de los cambios aquí, ahora podemos definir la siguiente función sin ningún tipo de aserción.

```ts
function throwIfNullable<T>(value: T): NonNullable<T> {
    if (value === undefined || value === null) {
        throw Error("¡El valor puede ser null!");
    }

    // Solía ​​fallar porque 'T' no se podía asignar a 'NonNullable<T>'.
    // Ahora se limita a 'T & {}' y tiene éxito porque eso simplemente
    // es 'NonNullable<T>'.
    return value;
}
```

`value` ahora se reduce a `T & {}`, y ahora es idéntico a `NonNullable<T>` — por lo que el cuerpo de la función simplemente funciona sin una sintaxis específica de *TypeScript*.

Por sí solos, estos cambios pueden parecer pequeños — pero representan soluciones para muchos recortes de papel que se han informado durante varios años.

Para obtener más detalles sobre estas mejoras, puedes [leer más aquí](https://github.com/microsoft/TypeScript/pull/49119).

## Inferencia mejorada para tipos `infer` en tipos `template string`

*TypeScript* introdujo recientemente una forma de agregar restricciones `extends` a las variables de tipo `infer` en tipos condicionales.

```ts
// Toma el primer elemento de una tupla si es asignable a 'number',
// y devuelve 'never' si no puede encontrar uno.
type TryGetNumberIfFirst<T> =
    T extends [infer U extends number, ...unknown[]] ? U : never;
```

Si estos tipos `infer` aparecen en un tipo `template string` y están restringidos a un tipo primitivo, *TypeScript* ahora intentará procesar un tipo literal.

```ts
// SomeNum solía ser 'number'; ahora es '100'.
type SomeNum = "100" extends `${infer U extends number}` ? U : never;

// SomeBigInt solía ser 'bigint'; ahora es '100n'.
type SomeBigInt = "100" extends `${infer U extends bigint}` ? U : never;

// SomeBool solía ser 'boolean'; ahora es 'true'.
type SomeBool = "true" extends `${infer U extends boolean}` ? U : never;
```

Esto ahora puede transmitir mejor lo que hará una biblioteca en el entorno de ejecución y brindar tipos más precisos.

Una nota sobre esto es que cuando *TypeScript* procesa estos tipos literales, intentará analizar con avidez todo lo que parezca del tipo primitivo apropiado;
sin embargo, luego verifica si la copia impresa de ese primitivo coincide con el contenido de la cadena.
En otras palabras, *TypeScript* comprueba si coincide el paso de cadena al primitivo y viceversa.
Si no ve que la cadena puede ser "de ida y vuelta", entonces volverá al tipo primitivo base.

```ts
// JustNumber es `number` aquí porque TypeScript procesa `"1.0"`,
// pero `String(Number("1.0"))` es `"1"` y no coincide.
type JustNumber = "1.0" extends `${infer T extends number}` ? T : never; 
```

Puedes [ver más sobre esta característica aquí](https://github.com/microsoft/TypeScript/pull/48094).

## Mejoras en el rendimiento de `--build`, `--watch` e `--incremental`

*TypeScript 4.8* presenta varias optimizaciones que deberían acelerar los escenarios en torno a `--watch` e `--incremental`, junto con compilaciones de proyectos de referencia que usan `--build`.
Por ejemplo, *TypeScript* ahora puede evitar perder tiempo actualizando las marcas de tiempo durante los cambios no operativos en el modo `--watch`, lo que hace que las reconstrucciones sean más rápidas y evita jugar con otras herramientas de compilación que podrían estar observando la salida de *TypeScript*.
También se han introducido muchas otras optimizaciones en las que podemos reutilizar información en `--build`, `--watch` e `--incremental`.

¿Qué tan grandes son estas mejoras?
Bueno, en un código base interno bastante grande, hemos visto reducciones de tiempo del orden del 10 % al 25 % en muchas operaciones comunes simples, con alrededor del 40 % de reducción de tiempo en escenarios sin cambios.
También hemos visto resultados similares en el código base de *TypeScript*.

Puedes ver [los cambios, junto con los resultados de rendimiento en GitHub](https://github.com/microsoft/TypeScript/pull/48784).

## Errores al comparar objetos y arreglos literales

En muchos lenguajes, los operadores como `==` realizan lo que se llama igualdad de "valor" en los objetos.
Por ejemplo, en *Python* es válido verificar si una lista está vacía comprobando si un valor es igual a la lista vacía usando `==`.

```py
if people_at_home == []:
    print("Aquí es donde estoy, roto por dentro. </3")
    adopt_animals()
```

Este no es el caso en *JavaScript*, donde `==` e `===` entre objetos (y por lo tanto, arreglos) verifican si ambas referencias apuntan al mismo valor.
Creemos que un código similar en *JavaScript* es, en el mejor de los casos, una primera prueba para los desarrolladores de *JavaScript* y, en el peor de los casos, un error en el código de producción.
Es por eso que *TypeScript* ahora **no** permite código como el siguiente.

```ts
if (peopleAtHome === []) {
//  ~~~~~~~~~~~~~~~~~~~
// Esta condición siempre devolverá 'false' puesto que JavaScript
// compara objetos por referencia, no por valor.
    console.log("Aquí es donde estoy, roto por dentro. </3")
    adoptAnimals();
}
```

Nos gustaría extender nuestro agradecimiento a [Jack Works](https://github.com/Jack-Works) que contribuyó con esta comprobación.
Puedes [ver los cambios involucrados aquí](https://github.com/microsoft/TypeScript/pull/45978).

## Inferencia mejorada a partir de patrones de enlace

En algunos casos, *TypeScript* seleccionará un tipo de un patrón de enlace para hacer mejores inferencias.

```ts
declare function chooseRandomly<T>(x: T, y: T): T;

let [a, b, c] = chooseRandomly([42, true, "hi!"], [0, false, "bye!"]);
//   ^  ^  ^
//   |  |  |
//   |  |  string
//   |  |
//   |  boolean
//   |
//   number
```

Cuando `chooseRandomly` necesita encontrar un tipo para `T`, buscará principalmente `[42, true, "hi!"]` y `[0, false, "bye!"]`;
pero *TypeScript* necesita averiguar si esos dos tipos deberían ser `Array<number | booleano | string>` o de tipo tupla `[number, boolean, string]`.
Para hacerlo, buscará candidatos existentes como una pista para ver si hay algún tipo de tupla.
Cuando *TypeScript* ve el patrón de enlace `[a, b, c]`, crea el tipo `[any, any, any]`, y ese tipo se selecciona como un candidato de baja prioridad para `T`, que también se usa como una pista para los tipos `[42, true, "¡hi!"]` y `[0, false, "bye!"]`.

Puedes ver cómo esto fue bueno para `chooseRandomly`, pero se quedó corto en otros casos.
Por ejemplo, toma el siguiente código

```ts
declare function f<T>(x?: T): T;

let [x, y, z] = f();
```

El patrón de enlace `[x, y, z]` insinuaba que `f` debería producir una tupla `[any, any, any]`;
pero `f` realmente no debería cambiar su argumento de tipo basado en un patrón vinculante.
No puede evocar repentinamente un nuevo valor similar a un arreglo en función de lo que se le asigna, por lo que el tipo del patrón de enlace tiene demasiada influencia en el tipo producido.
Además de eso, debido a que el tipo de patrón de enlace está lleno de `any`s, nos quedamos con `x`, `y` y `z` tipificados como `any`.

En *TypeScript 4.8*, estos patrones de enlace nunca se usan como candidatos para argumentos de tipo.
En cambio, solo se consultan en caso de que un parámetro necesite un tipo más específico, como en nuestro ejemplo `chooseRandomly`.
Si necesitas volver al comportamiento anterior, siempre puedes proporcionar argumentos de tipo explícitos.

Puedes [mirar el cambio en GitHub](https://github.com/microsoft/TypeScript/pull/49086) si tienes curiosidad por saber más.

## Arreglos para la vigilancia de archivos (especialmente en `git checkout`s)

Hemos tenido un error de larga data en el que *TypeScript* tiene dificultades con ciertos cambios de archivo en el modo `--watch` y en los escenarios del editor.
A veces, los síntomas son errores obsoletos o inexactos que pueden aparecer y requieren reinicio de `tsc` o *VS Code*.
Con frecuencia, esto ocurre en los sistemas Unix, y es posible que los hayas visto después de guardar un archivo con vim o intercambiar ramas en git.

Esto se debió a las suposiciones de cómo *Node.js* maneja los eventos de cambio de nombre en los sistemas de archivos.
Los sistemas de archivos utilizados por Linux y macOS utilizan [`inode`s](https://en.wikipedia.org/wiki/Inode) y [*Node.js* adjuntará vigías de archivos a los `inode`s en lugar de rutas de archivos](https://nodejs. org/api/fs.html#inodes).
Entonces, cuando *Node.js* devuelve [un objeto `watcher`](https://nodejs.org/api/fs.html#class-fsfswatcher), podría estar vigilando una ruta o un `inode` según la plataforma y el sistema de archivos.

Para ser un poco más eficiente, *TypeScript* intenta reutilizar los mismos objetos de vigilancia si detecta que aún existe una ruta en el disco.
Aquí es donde las cosas salieron mal, porque incluso si todavía existe un archivo en esa ruta, es posible que se haya creado un archivo distinto y ese archivo tendrá un `inode` diferente.
Entonces, *TypeScript* terminaría reutilizando el objeto `watcher` en lugar de instalar un nuevo vigía en la ubicación original, y vigilará los cambios en lo que podría ser un archivo totalmente irrelevante.
Así que *TypeScript 4.8* ahora maneja estos casos en sistemas `inode` e instala correctamente un nuevo vigía y soluciona esto.

Nos gustaría extender nuestro agradecimiento a [Marc Celani](https://github.com/MarcCelani-at) y su equipo en Airtable, quienes invirtieron mucho tiempo investigando los problemas que estaban experimentando y señalando la causa raíz.
Puedes ver [las correcciones específicas sobre la visualización de archivos aquí](https://github.com/microsoft/TypeScript/pull/48997).

## Mejoras en el rendimiento de Buscar todas las referencias

Al ejecutar buscar todas las referencias —`find-all-references`— en tu editor, *TypeScript* ahora puede actuar de manera un poco más inteligente a medida que agrega referencias.
Esto redujo la cantidad de tiempo que *TypeScript* tardó en buscar un identificador ampliamente utilizado en su propio código base en aproximadamente un 20 %.

[Puedes leer más sobre la mejora aquí](https://github.com/microsoft/TypeScript/pull/49581).

## Excluir archivos específicos de las importaciones automáticas

*TypeScript 4.8* presenta una preferencia de editor para excluir archivos de las importaciones automáticas.
En *Visual Studio Code*, los nombres de archivo o los globos se pueden agregar en "Patrones de exclusión de archivo de importación automática" en la interfaz de usuario de configuración, o en un archivo `.vscode/settings.json`:

```jsonc
{
    // Ten en cuenta que
	// `javascript.preferences.autoImportFileExcludePatterns`
    // también se puede especificar para JavaScript.
    "typescript.preferences.autoImportFileExcludePatterns": [
      "**/node_modules/@types/node"
    ]
}
```

Esto puede ser útil en casos en los que no puedes evitar tener ciertos módulos o bibliotecas en tu compilación pero rara vez deseas importar desde ellos.
Estos módulos pueden tener muchas exportaciones que pueden contaminar la lista de importaciones automáticas y dificultar la navegación, y esta opción puede ayudar en esas situaciones.

Puedes [ver más detalles sobre la implementación aquí](https://github.com/microsoft/TypeScript/pull/49578).

## Corrección de correcciones y cambios importantes

Debido a la naturaleza de los cambios en el sistema de tipos, hay muy pocos cambios que **no afecten algún código**;
sin embargo, hay algunos cambios que probablemente requieran adaptar el código existente.

### Actualizaciones de `lib.d.ts`

Si bien *TypeScript* se esfuerza por evitar rupturas importantes, incluso los pequeños cambios en las bibliotecas integradas pueden causar problemas.
No esperamos rupturas importantes como resultado de las actualizaciones de DOM y `lib.d.ts`, pero un cambio notable es que la propiedad `cause` en `Error`s ahora tiene el tipo `unknown` en lugar de `Error`.

### Los genéricos sin restricciones ya no se pueden asignar a `{}`

En *TypeScript 4.8*, para proyectos con `strictNullChecks` habilitado, *TypeScript* ahora emitirá correctamente un error cuando se use un parámetro de tipo sin restricciones en una posición donde `null` o `undefined` no sean valores legales.
Eso incluirá cualquier tipo que espere `{}`, `object`, o un tipo de objeto con todas las propiedades opcionales.

A continuación puedes ver un sencillo ejemplo.

```ts
// Acepta cualquier valor no undefined o no null
function bar(value: {}) {
  Object.keys(value); // Esta llamada genera null/undefined en el
                      // entorno de ejecución.
}

// Parámetro de tipo sin restricciones T...
function foo<T>(x: T) {
    bar(x); // Solía ​​estar permitido, ahora es un error en 4.8.
    //  ~
    // error: el argumento de tipo 'T' no se puede asignar al
	// parámetro de tipo '{}'.
}

foo(undefined);
```

Como se demostró anteriormente, un código como este tiene un error potencial — los valores `null` y `undefined` se pueden pasar indirectamente a través de estos parámetros de tipo sin restricciones al código que se supone que no debe vigilar esos valores.

Este comportamiento también será visible en las posiciones de tipo. Un ejemplo sería:
```ts
interface Foo<T> {
  x: Bar<T>;
}

interface Bar<T extends {}> { }
```

El código existente que no quería manejar `null` y `undefined` se puede arreglar propagando las restricciones apropiadas.

```diff
- function foo<T>(x: T) {
+ function foo<T extends {}>(x: T) {
```

Otra solución alternativa sería buscar `null` y `undefined` en el entorno de ejecución.

```diff
  function foo<T>(x: T) {
+     if (x !== null && x !== undefined) {
          bar(x);
+     }
  }
```

Y si sabes que, por alguna razón, tu valor genérico no puede ser `null` o `undefined`, puedes usar una aserción no `null`.

```diff
  function foo<T>(x: T) {
-     bar(x);
+     bar(x!);
  }
```

Cuando se trata de tipos, a menudo necesitarás propagar restricciones o intersecar tus tipos con `{}`.

Para obtener más información, puedes [ver el cambio que introdujo esto](https://github.com/microsoft/TypeScript/pull/49119) junto con [el problema de discusión específico sobre cómo funcionan ahora los genéricos sin restricciones](https://github.com/microsoft/TypeScript/issues/49489).

### Los decoradores se colocan en `modifiers` en los árboles de sintaxis *TypeScript*

La dirección actual de los decoradores en *TC39* significa que *TypeScript* tendrá que manejar una ruptura en términos de ubicación de los decoradores.
Anteriormente, *TypeScript* suponía que los decoradores siempre se colocarían antes de todas las palabras clave/modificadores.
Por ejemplo  una  API

```ts
@decorator
export class Foo {
  // ...
}
```

Los decoradores propuestos actualmente no admiten esta sintaxis.
En su lugar, la palabra clave `export` debe preceder al decorador.

```ts
export @decorator class Foo {
  // ...
}
```

Desafortunadamente, los árboles de *TypeScript* son *concretos* en lugar de *abstractos*, y nuestra arquitectura espera campos nodo del árbol de sintaxis que se ordenarán completamente antes o después de otros.
Para admitir tanto los decoradores heredados como los decoradores propuestos, *TypeScript* tendrá que analizar e intercalar correctamente modificadores y decoradores.

Para hacerlo, expone un nuevo tipo de alias llamado `ModifierLike` que es un `Modifier` o un `Decorator`.

```ts
export type ModifierLike = Modifier | Decorator;
```

Los decoradores ahora se colocan en el mismo campo que los `modifiers`, que ahora es un `NodeArray<ModifierLike>` cuando se establece, y todo el campo queda obsoleto.

```diff
- readonly modifiers?: NodeArray<Modifier> | undefined;
+ /**
+  * @deprecated ...
+  * Usa `ts.canHaveModifiers()` para probar si un `Node` puede tener modificadores.
+  * Usa `ts.getModifiers()` para obtener los modificadores de un `Node`.
+  * ...
+  */
+ readonly modifiers?: NodeArray<ModifierLike> | undefined;
```

Todas las propiedades `decorators` existentes se han marcado como obsoletas y siempre serán `undefined` si se leen.
El tipo también se ha cambiado a `undefined` para que las herramientas existentes sepan manejarlos correctamente.

```diff
- readonly decorators?: NodeArray<Decorator> | undefined;
+ /**
+  * @deprecated ...
+  * Usa `ts.canHaveDecorators()` para probar si un `Node` puede tener decoradores.
+  * Usa `ts.getDecorators()` para obtener los decoradores de un `Node`.
+  * ...
+  */
+ readonly decorators?: undefined;
```

Para evitar nuevas advertencias de desaprobación y otros problemas, *TypeScript* ahora expone cuatro nuevas funciones para usar en lugar de las propiedades `decorators` y `modifiers`.
Hay predicados individuales para probar si un nodo es compatible con modificadores y decoradores, junto con las respectivas funciones de acceso para capturarlos.

```ts
function canHaveModifiers(node: Node): node is HasModifiers;
function getModifiers(node: HasModifiers): readonly Modifier[] | undefined;

function canHaveDecorators(node: Node): node is HasDecorators;
function getDecorators(node: HasDecorators): readonly Decorator[] | undefined;
```

Un ejemplo de cómo acceder a los modificadores fuera de un nodo, puedes escribir

```ts
const modifiers = canHaveModifiers(myNode) ? getModifiers(myNode) : undefined;
```

Con la nota de que cada llamada a `getModifiers` y `getDecorators` puede asignar un nuevo arreglo.

Para obtener más información, consulta los cambios en torno a:

* [la reestructuración de nuestro árbol de nodos](https://github.com/microsoft/TypeScript/pull/49089)
* [las obsolescencias](https://github.com/microsoft/TypeScript/pull/50343)
* [la exposición de funciones predicado](https://github.com/microsoft/TypeScript/pull/50399)

### Los tipos no se pueden importar/exportar en archivos *JavaScript*

Anteriormente *TypeScript* permitía que los archivos de *JavaScript* importaran y exportaran entidades declaradas con un tipo, pero sin valor, en declaraciones de `import` y `export`.
Este comportamiento era incorrecto, porque las importaciones y exportaciones con nombre para valores que no existen provocarían un error en el entorno de ejecución en los módulos ECMAScript.
Cuando se verifica el tipo de un archivo *JavaScript* en `--checkJs` o mediante un comentario `// @ts-check`, *TypeScript* ahora emitirá un error.

```ts
// @ts-check

// Fallará en el entorno de ejecución porque 'SomeType' no es un valor.
import { someValue, SomeType } from "some-module";

/**
 * @type {SomeType}
 */
export const myValue = someValue;

/**
 * @typedef {string | number} MyType
 */

// Fallará en el entorno de ejecución porque 'MyType' no es un valor.
export { MyType as MyExportedType };
```

Para hacer referencia a un tipo de otro módulo, en su lugar, puedes calificar directamente la importación.

```diff
- import { someValue, SomeType } from "some-module";
+ import { someValue } from "some-module";
  
  /**
-  * @type {SomeType}
+  * @type {import("some-module").SomeType}
   */
  export const myValue = someValue;
```

Para exportar un tipo, puedes usar un comentario @typedef */` en *JSDoc*.
Los comentarios `@typedef` ya exportan tipos automáticamente desde sus módulos contenedores.

```diff
  /**
   * @typedef {string | number} MyType
   */

+ /**
+  * @typedef {MyType} MyExportedType
+  */
- export { MyType as MyExportedType };
```

Puedes [leer más sobre el cambio aquí](https://github.com/microsoft/TypeScript/pull/49580).

### Los patrones de enlace no contribuyen directamente a los candidatos de inferencia

Como se mencionó anteriormente, los patrones de enlace ya no cambian el tipo de resultados de inferencia en las llamadas a funciones.
Puedes [leer más sobre el cambio original aquí](https://github.com/microsoft/TypeScript/pull/49086).

### Los cambios de nombre no utilizados en los patrones de enlace ahora son errores en las firmas de tipo

La sintaxis de anotación de tipo de *TypeScript* a menudo parece que se puede usar al desestructurar valores.
Por ejemplo, tome la siguiente función.

```ts
declare function makePerson({ name: string, age: number }): Person;
```

Podrías leer esta firma y pensar que `makePerson` obviamente toma un objeto con una propiedad `name` con el tipo `string` y una propiedad `age` con el tipo `number`;
sin embargo, la sintaxis de desestructuración de *JavaScript* tiene prioridad aquí.
`makePerson` dice que va a tomar un objeto con una propiedad `name` y `age`, pero en lugar de especificar un tipo para ellos, solo dice que cambia el nombre de `name` y `age` a `string` y `number` respectivamente.

En una construcción de tipo puro, escribir código como este es inútil y, por lo general, es un error, ya que los desarrolladores suelen suponer que están escribiendo una anotación de tipo.

*TypeScript 4.8* los convierte en un error a menos que se haga referencia a ellos más adelante en la firma.
La forma correcta de escribir la firma anterior sería la siguiente:

```ts
declare function makePerson(options: { name: string, age: number }): Person;

// o

declare function makePerson({ name, age }: { name: string, age: number }): Person;
```

Este cambio puede detectar errores en las declaraciones y ha sido útil para mejorar el código existente.
Nos gustaría extender nuestro agradecimiento a el [usuario uhyo de GitHub](https://github.com/uhyo) por proporcionar esta comprobación.
[Puedes leer sobre el cambio aquí](https://github.com/microsoft/TypeScript/pull/41044).