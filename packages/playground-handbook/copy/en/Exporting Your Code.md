## Exportar código

Además de aprender por ti mismo, necesitarás tener formas de compartir con los demás el trabajo que has realizado. A lo largo de este manual, nos hemos centrado en la *URL* del navegador como la forma de compartir el *PlayGround*, pero esa no es la única opción. Todas las opciones de exportación están disponibles en "Exportar" en la barra de herramientas del editor. Hay tres secciones principales:

### Exportar a Markdown

Tenemos formas de generar markdown útil desde tu área *playground*, ya sea para informar un error al *TypeScript* o para proporcionar un enlace de resumen en un chat.

### Exportar a herramientas similares

Puedes enviar el código del *playground* actual a otro sistema similar al de *Playground*, por ejemplo, el [Visor AST de *TypeScript*](https://ts-ast-viewer.com) o a [*Bug Workbench*](/play#handbook-16).

### Exportar para obtener más funciones

Debido a que *Playground* tiene un fuerte enfoque en presentar solo un archivo de texto, eso viene con limitaciones.

Existen muy buenos sistemas de propósito general para ejecutar un proyecto de node en un navegador como [*CodeSandbox*](https://codesandbox.io) y [*StackBlitz*](https://stackblitz.com/): el *Playground* generará un aproximación del entorno actual con los archivos correspondientes `package.json`, `tsconfig.json` e `index.{ts, tsx, js, jsx, .d.ts}` y recrear ese proyecto node en uno de los otros servicios. Esta exportación te brinda la oportunidad de seguir trabajando cuando golpeas una pared con las funciones disponibles en *Playground*.

También hay un "Tweet este Playground" porque ¿por qué no?
