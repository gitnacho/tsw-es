## Detalles de implementación

Si deseas comprender la arquitectura técnica del *playground*, puedes obtener la esencia completa en los primeros 10 minutos de [esta charla](https://www.youtube.com/watch?v=eJWtTl62gy0). También hay una inmersión extendida a través de todo el código fuente del sitio web de *TypeScript* desde que [estaba en beta](https://www.youtube.com/watch?v=HOvivt6B7hE).

En resumen, *Playground* es una aplicación *DOM* construida en *TypeScript*, no utiliza marcos ni bibliotecas externas. Si bien *Playground* vive dentro del sitio web de *TypeScript*, que es una aplicación *React*, no hace ningún uso de la biblioteca. Esto es para mantener bajos los conocimientos técnicos necesarios para fomentar las contribuciones de los miembros del equipo del compilador de *TypeScript*.

Como abstracción, *Playground* es el editor, la barra lateral y las barras de herramientas. Existen diferentes "Playgrounds" en el sitio web de *TypeScript* (como el [*Bug Workbench*](/play#handbook-16)) pero la principal diferencia es que tienen diferentes conjuntos de complementos predeterminados.

Muchas de las características de *Playground* se encuentran dentro de una biblioteca llamada *TypeScript Sandbox*, que es un contenedor para *Monaco*. Entonces, *Monaco* vive en el *Sandbox*, el *Sandbox* vive en el *Playground*.

- **Monaco**: El componente editor en *VS Code*
- **Sandbox**: Un contenedor de alto nivel para *monaco* con *APIs* específicas de *TypeScript*
- **Playground**: La interfaz de usuario, el sistema de complementos y todo lo que no esté involucrado en la presentación del texto.
