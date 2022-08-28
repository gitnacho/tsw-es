### Banco de trabajo de errores

El equipo de *TypeScript* son usuarios constantes de *Playground* para reproducir errores y probar funciones. A veces, sin embargo, necesitamos herramientas aún más detalladas y eso es lo que es *Bug Workbench*. *Bug Workbench* es una bifurcación del *Playground* con énfasis en la creación y visualización de la reproducción de errores complejos. Lo puedes encontrar en https://www.typescriptlang.org/dev/bug-workbench/

El banco de trabajo de errores usa comandos *Twoslash* (que están documentados de forma exhaustiva en el banco de trabajo de errores, así que lo omitiremos aquí) para describir efectos secundarios particulares como "js emite para este archivo", "este tipo en esta posición", "estos errores ", etc.

El banco de trabajo de errores tiene una función `'Export to Markdown'` que activará un comportamiento especial en los problemas del repositorio [microsoft/TypeScript](https://github.com/microsoft/TypeScript) a través de [microsoft/TypeScript-Twoslash-Repro-Action](https://github.com/microsoft/TypeScript-Twoslash-Repro-Action#twoslash-verify-github-action). Especialmente, un comentario como:

````
```ts repro
const hello = "Hello"
const msg = `${hello}, world` as const
//    ^?
```
````

Crearía una tabla de resumen del tipo en `msg` en las compilaciones nocturnas y las últimas 5 versiones de producción de *TypeScript*. Esto se revisa todos los días para ver si algo ha cambiado.
