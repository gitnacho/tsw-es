## Ejecutar código

El *playground* de *TypeScript* tiene un enfoque obvio en *TypeScript*; quiero decir, está en el nombre (¿verdad?), y los tipos en *TypeScript* son efímeros (no afectan el código en ejecución), por lo que las versiones anteriores del *playground* no tenían soporte para ejecutar el código en tu navegador.

Esto resultó ser un descuido, porque hay casos en los que los tipos de *TypeScript* no pueden mapear perfectamente el entorno de ejecución de *JavaScript* y "evaluar" ese código a veces puede ser una excelente manera de comprender si los tipos que had escrito coinciden con los resultados del entorno de ejecución de tu código.

En la barra de herramientas del editor, la que no está visible porque está leyendo este manual, es un botón "Ejecutar". Al presionar este botón de ejecución:

- Tome el código en el editor y lo convierte a *JS*
- Elimina las referencias a `"reflect-metadata"` si estás utilizando decoradores
- Ejecuta ese código dentro del contexto de tu sesión de navegador actual
- Captura cualquier llamada a `console.log`, `.error`, `.warn` y `.debug` y las muestra en la pestaña "Registros" de la barra lateral.

También puedes usar el comando desde el teclado <kbd>ctrl</kbd>/<kbd>cmd</kbd> + <kbd>intro</kbd> para activar la ejecución de tu código.

El código que se ejecuta en tu navegador significa que puedes experimentar con las *APIs* del *DOM* dentro de un entorno *TypeScript*. *Playground* incluye ejemplos para trabajar con [DOM](https://www.typescriptlang.org/play?useJavaScript=trueq=185#example/typescript-with-web) y con [WebGL](https://www.typescriptlang.org/play/useJavaScript=trueq=461#example/typescript-with-webgl) que son buenos ejemplos de cómo puede trabajar.

Convenientemente, esa es la transición perfecta a la [sección de ejemplos del manual](/play#handbook-2)
