## Obtención de este repositorio, solución de problemas de configuración

#### El módulo `x` no está construido

A veces, y no se ha rastreado exactamente, algunas dependencias del sitio no se crean a pesar de que dice que sí. En esos casos, vuelve a ejecutar `yarn bootstrap` y `yarn build` para reconstruir todas las dependencias internas del sitio.

#### *Windows* + *Watchman*

El soporte de *Windows* para el vigilante (*watchman*) es un poco relajado. No es probable que mejore, dado lo bien que funciona *WSL* ahora. Entonces, *podrías* usar *WSL* para solucionar eso.

Sin embargo, por *muchos* cambios en el sitio: *Watchman* es opcional. Todo lo que hace el script `watchman` es ejecutar `yarn workspace [xxyy] build` cuando guardas en un paquete que no es `typescriptlang-org` (el sitio web de *gatsby*).

Para ejecutar el sitio sin el vigilante, usa `yarn workspace typescriptlang-org start`.
