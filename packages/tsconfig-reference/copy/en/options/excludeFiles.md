---
display: "excludeFiles"
oneline: "Elimina una lista de archivos del procesamiento del modo watch."
---

Puedes utilizar `excludeFiles` para eliminar un conjunto de archivos específicos de los archivos que se vigilan.

```json tsconfig
{
  "watchOptions": {
    "excludeFiles": ["temp/file.ts"]
  }
}
```
