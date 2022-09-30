## Versiones de *TypeScript*

*TypeScript Playground* admite versiones de *TypeScript* desde `3.3.3` (que fue versionada como [`3.3.3333`](https://github.com/Microsoft/TypeScript/issues/30032)) hasta la más reciente construcción nocturna.

La capacidad de cambiar la versión de *TypeScript* facilita descubrir posibles regresiones y permitir que las personas prueben nuevas funciones del lenguaje sin tener que actualizar sus proyectos a (potencialmente) una versión inestable de *TypeScript*. Puedes acceder a la lista de versiones de producción de *TypeScript* a través de un menú desplegable en la barra de herramientas del editor dentro de *Playground*. Si hay una versión beta o rc actual, se mostrará en la parte superior.

El menú desplegable muestra la versión de parche más alta para una versión de *TypeScript*, pero no todas las versiones están disponibles. Puedes consultar estos dos archivos *JSON* para obtener la lista completa de [versiones de lanzamiento](https://typescript.azureedge.net/indexes/releases.json) y [versiones preliminares](https://typescript.azureedge.net/indexes/pre-releases.json).

Si configuras una versión de *TypeScript*, se agregará `?ts=[versión]` a tu *URL* y se volverá a cargar. Por ejemplo, si configuras la versión de *TypeScript* en 4.3.5, se agregará `?ts=4.3.5` al *URL*, que es un paso correcto a la descripción general de la [estructura del *URL*](/play#handbook-10).

Hay un caso especial en el que `?ts=Nightly` encontrará la última versión de *TypeScript* que se creó para *Playground* y la usará.

<details>
<summary>Eso fue mentira, hay dos casos especiales</summary>

Curiosamente, lo que realmente se siente como un agujero de seguridad en los navegadores *Firefox*/*Chromium* (*para este autor*) es que las páginas web en esos navegadores pueden cargar *JavaScript* arbitrariamente desde `localhost`. Se abusa de esta "característica" para admitir entornos de desarrollo de complementos dentro de la versión de producción del sitio web de *TypeScript*.

Este mismo sistema se puede usar para cargar una versión de desarrollo de *TypeScript* desde tu computadora, hay un [script dentro del compilador de *TypeScript*](https://github.com/microsoft/TypeScript/blob/main/scripts/createPlaygroundBuild.js) que inicia un servidor web en *node* y conecta tu copia local al *playground*.

</details>
