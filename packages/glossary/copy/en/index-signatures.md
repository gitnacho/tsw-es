---
display: "Index Signature"
tags: typescript types
---

Un tipo en *TypeScript* generalmente describe un conjunto exacto de campos para hacer coincidir en un objeto.
Un índice de firmas es una forma de definir la [Forma](#shape) de los campos que no se conocen de antemano.

```ts twoslash
type MathConstants = {
  pi: 3.14159;
  phi: 1.61803;

  [key: string]: number;
};

interface ModernConstants {
  taniguchi: 0.6782344919;
  raabe: 0.9189385332;

  [key: string]: number;
}
```

La `[key: string]: number;` es el índice de firma, que indica a *TypeScript* que cualquier campo del objeto que no se mencione será de un tipo particular.

Por ejemplo, con una instancia [Declarada](#declare) de `ModernConstants`:

```ts twoslash
interface ModernConstants {
  taniguchi: 0.6782344919;
  raabe: 0.9189385332;

  [key: string]: number;
}
// ---cut---
declare const modernConstants: ModernConstants;

// Esto fue definido antes
modernConstants.raabe;
//              ^?

// Este campo no se definió anteriormente, por lo que es solo `number`
modernConstants.lebesgue;
//              ^?
```

En *TypeScript 4.1* puedes usar la marca `TSConfig` [`noPropertyAccessFromIndexSignature`](/tsconfig#noPropertyAccessFromIndexSignature) para hacer cumplir usando notación de comillas (`modernConstants ["lebesgue"]`) en lugar de notación de puntos (`modernConstants.lebesgue`) para hacer índice de firma explícita en el código de llamada.
