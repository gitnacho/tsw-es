---
display: "Declare"
tags: typescript types keyword
---

La palabra clave `declare` se utiliza para informar a *TypeScript* [Tipo `System`](#type-system) que existe una variable incluso si no se puede encontrar en el código fuente actual.

```ts twoslash
// Declara que existe un fantasma y que tiene una función llamada "boo".
declare const ghost: { boo: () => void };

ghost.boo();
```

*TypeScript* [emitiría](#emit) código *JavaScript* como:

```ts twoslash
// @showEmit
// Declara que existe un fantasma y que tiene una función llamada "boo".
declare const ghost: { boo: () => void };

ghost.boo();
```

Este código podría fallar si no hay otro código configurando el objeto `ghost` en otro lugar.
