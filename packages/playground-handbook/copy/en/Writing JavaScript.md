## Escribir *JavaScript*

"¡Escribir *JavaScript* en el *TypeScript Playground*, una locura!" ⏤ tal vez, pero hay algunos casos importantes por los que querrías hacer esto:

1. **Aprender *JavaScript* tipado** - *JavaScript* con sabor a *JSDoc* es *TypeScript-lite* sin la sobrecarga de herramientas y con una sintaxis más extraña. *JavaScript* con sabor a *JSDoc* es un trampolín legítimo para migrar a *TypeScript* y un punto de parada perfectamente bueno para obtener herramientas más ricas sin complejidad adicional.

1. **Depuración de conversión de JavaScript .d.ts** - *TypeScript* puede generar archivos `.d.ts` a partir de archivos `.js`, lo que brinda a los autores de bibliotecas la oportunidad de permanecer en *JavaScript*, pero aún ofrece una rica experiencia de desarrollador a sus usuarios. La pestaña de la barra lateral `.d.ts` ofrece un ciclo de retroalimentación rápida para comprender cómo *TypeScript* entiende el código.

1. **Experimenta con el análisis de flujo de código y la configuración de `jsconfig.json`** - Un proyecto de *JavaScript* puede usar un archivo `jsconfig.json` para configurar su experiencia de herramientas, y *Playground* se puede usar para emular ese entorno.

1. **Ejecutar JavaScript localmente** - Puedes copiar en la sintaxis moderna de *JavaScript*, y se reducirá automáticamente a la sintaxis de *JavaScript* anterior, lo cual significa que lo puedes ejecutar de manera confiable. Haciendo que sea más fácil hacer un *playground* rápido "haz este trabajo" y presiona *Ejecutar* para ver el resultado.

Puedes activar el modo *JavaScript* abriendo el menú "TS Config" y cambiando el "lenguaje" a "*JavaScript*". Esto agregará `?filetype=js` al *URL* (nota que`?isJavaScript=true` también es compatible con enlaces más antiguos) y volverá a cargar el *Playground* en un contexto de *JavaScript*.
