---
display: "SynchronousWatchDirectory"
oneline: "Llama sincrónicamente a las devoluciones de llamada y actualiza el estado de los vigías de directorios en plataformas que, nativamente, no admiten la vigilancia recursiva."
---

Llama sincrónicamente a las devoluciones de llamada y actualiza el estado de los vigías de directorios en plataformas que, nativamente, no admiten la vigilancia recursiva. En lugar de dar un pequeño tiempo de espera para permitir que se produzcan posibles múltiples ediciones en un archivo.

```json tsconfig
{
  "watchOptions": {
    "synchronousWatchDirectory": true
  }
}
```
