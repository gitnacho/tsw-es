## Barra lateral *.JS* + *.D.TS*

### Emite *.JS*

Dos de los argumentos clave para usar *TypeScript* son su interoperabilidad de *JavaScript* y "bajar de nivel" el *JavaScript* emitido a (una versión anterior de) *JavaScript*. Es posible que hayas oído hablar de "downleveling" como "transpile" o "backport", pero lo esencial es tomar la sintaxis moderna y volver a implementarla utilizando una sintaxis más antigua para navegadores y motores *JavaScript* más antiguos.

Debido a que comprender la salida de *JavaScript* desde tu *TypeScript* puede ser valioso, la convertimos en la vista predeterminada en *Playground*. La barra lateral "JS" muestra lo que sucede cuando el código de tu editor se convierte a una versión de *JavaScript* (principalmente) de acuerdo con la configuración del compilador `target`, que de manera predeterminada es `ES2017`. Esto funciona con archivos `.tsx`, `.ts`, `.js`, y se muestra (con precisión) que los archivos `.d.ts` no tienen equivalente en *JavaScript*. La barra lateral "JS" se actualizará a medida que escribes.

### Emite *.D.TS*

Los archivos `.d.ts` son las herramientas detrás de la escena que potencian las experiencias de edición para trabajar con bibliotecas *JavaScript*. Si escribes *TypeScript* todo el día e interactúas principalmente con bases de código *TypeScript*, es posible que no necesites escribir y comprender la salida de un `.d.ts` con demasiada frecuencia. Sin embargo, este no es el caso para todos y la pestaña de la barra lateral `.d.ts` te ayuda a comprender cómo *TypeScript* generará un `.d.ts` para tu código.

Hay dos casos de uso para usar la pestaña `.d.ts`:

- **TypeScript a `.d.ts`**. Comprender los efectos de `export` en tu código y cómo *TypeScript* resuelve sus tipos.

- **JavaScript a `.d.ts`**. Cuando estás escribiendo una biblioteca en *JavaScript* y usas una combinación de inferencia de tipo y [soporte *JSDoc*](https://www.typescriptlang.org/es/docs/handbook/jsdoc-supported-types.html) para agregar anotaciones de tipo.

### Otros archivos

Nadie ha pedido realmente soporte para `.map`, que es el otro archivo que podría emitir el compilador de *TypeScript*. Sin embargo, puedes activar [`inlineSourceMap`](https://www.typescriptlang.org/tsconfig#inlineSourceMap) para que se incluya en el archivo `.js` emite [por ejemplo](https://www.typescriptlang.org/play?inlineSourceMap=true#code/PTAEAEEsDsBsYKYGUD2BXATgYwQWQIYAOAUFitAM4Auo+oAvKAEQDyA0k0A).
