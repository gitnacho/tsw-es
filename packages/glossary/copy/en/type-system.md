---
display: "Sistema de tipos"
tags: typescript abstract abstracto
---

El lenguaje *JavaScript* tiene tipos como `string`, `object`, `symbol`, `boolean`, etc., pero no tiene un sistema de tipos estáticos.

A menudo, cuando se utiliza el término "sistema de tipos", se refiere a un sistema de tipos *estático* como el que proporciona *TypeScript*.
Un sistema de tipos estático no necesita ejecutar tu código para comprender cómo se ve la [Forma](#shape) del código en una ubicación particular de un [Archivo fuente](#archivo-fuente).

*TypeScript* utiliza un sistema de tipos estáticos para ofrecer herramientas de edición:

```ts twoslash
// @noErrors
const shop = {
  name: "Table Store",
  address: "Maplewood",
};

shop.a;
//    ^|
```

Además de proporcionar un amplio conjunto de mensajes de error cuando los tipos dentro del sistema de tipos no coinciden:

```ts twoslash
// @errors: 2322
let shop = {
  name: "Table Store",
  address: "Maplewood",
};

shop = {
  nme: "Chair Store",
  address: "Maplewood",
};
```
