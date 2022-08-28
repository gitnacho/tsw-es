---
display: "Shape"
tags: typescript javascript
---

El término `"shape"` se utiliza para describir los campos y valores de un objeto *JavaScript*. Por ejemplo, podrías decir que este objeto *JavaScript*:

```ts
const house = {
  name: "Shibden hall",
  road: "Lister's Road",
  town: "Halifax",
  county: "West Yorkshire",
};
```

tiene la forma:

- `name`: `string`
- `road`: `string`
- `town`: `string`
- `country`: `string`

*TypeScript* puede describir esta forma usando dos sintaxis diferentes: [Interfaces](#interface) y [Types](#type-literal)

```ts
interface House {
  name: string;
  road: string;
  town: string;
  country: string;
}

// o

type House = {
  name: string;
  road: string;
  town: string;
  country: string;
};
```
