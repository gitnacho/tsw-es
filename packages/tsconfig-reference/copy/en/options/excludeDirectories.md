---
display: "excludeDirectories"
oneline: "Elimina una lista de directorios del proceso de vigilancia."
---

Puedes usar [`excludeFiles`](#excludeFiles) para reducir drásticamente el número de archivos que se vigilan durante `--watch`. Esta puede ser una forma útil de reducir la cantidad de archivos abiertos que *TypeScript* rastrea en *Linux*.

```json tsconfig
{
  "watchOptions": {
    "excludeDirectories": ["**/node_modules", "_build", "temp/*"]
  }
}
```
