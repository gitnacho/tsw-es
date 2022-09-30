---
display: "Interface"
tags: typescript types keyword
---

Una interfaz es una forma de describir la [Forma](#shape) de un objeto *JavaScript*. Por ejemplo, un perro podría describirse en el siguiente formato:

```ts twoslash
interface Dog {
  name: string;
  dateOfBirth: Date;
  markings: string[];
}
```

Esto significa que solo un objeto con un `name`, `dateOfBirth` y `markings` se podría clasificar como un "Dog" en el [Sistema de tipos](#sistema-de-tipos).
