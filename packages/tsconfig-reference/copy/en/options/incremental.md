---
display: "Incremental"
oneline: "Guarda los archivos `.tsbuildinfo` para permitir la compilación incremental de proyectos."
---

Le dice a *TypeScript* que guarde información sobre el gráfico del proyecto desde la última compilación en archivos almacenados en el disco. Esta
crea una serie de archivos `.tsbuildinfo` en el mismo directorio que la salida de la compilación. No son utilizados por tu
entorno de ejecución *JavaScript* y se puede eliminar de forma segura. Puedes leer más sobre la bandera en las [notas de la versión 3.4](/es/docs/handbook/release-notes/typescript-3-4.html#subsecuentes-compilaciones-más-rápidas-con-el-indicador---incremental).

Para controlar en qué directorios deseas que se compilen los archivos, usa la opción de configuración [`tsBuildInfoFile`](#tsBuildInfoFile).
