# *PlayGround* de *TypeScript*

Esta es la herramienta *JS* que impulsa a https://www.typescriptlang.org/play/

Es un *JavaScript* orientado a *DOM* más o menos estándar con la menor cantidad posible de dependencias. Originalmente basado en el
trabajo de [Artem Tyurin](https://github.com/agentcooper/typescript-play) pero ahora se aleja mucho de esa bifurcación.

## Arquitectura

La biblioteca del playground se encuentra encima del [*sandbox* de *TypeScript*](../sandbox) y ofrece características como:

- Los ejemplos de código admiten
- Las barras de navegación y la interfaz de usuario de los indicadores del compilador
- La infraestructura del complemento de la barra lateral para mostrar *JS*/*DTS*/etc.
- Las funciones de exportación a *Code Sandbox*/*TS AST Viewer*/etc.

Al decidir dónde agregar una función al *playground* de *TypeScript*, considera si sería útil para cualquiera que muestre
*TypeScript* en un *REPL*. Si es así, agrégalo al *playground* y expón una función para que la use el *playground*. Por ejemplo
La adquisición automática de tipo es una característica que vive en el *sandbox* y no en el *playground* porque casi cualquiera que muestre código *TypeScript* lo querría.

## Sintaxis del enlace

*Playground* admite un conjunto de entradas de consulta desde la *URL*. El *hash* se usa para reflejar el código:

- `#code/PRA` ⏤ Una versión base64 y comprimida del código que debería estar en el editor
- `#src/The%20code` ⏤ Manera *URLEncoded* de tener el código para el editor
- `#example/generic-functions` ⏤ Toma el código de un ejemplo con `id generic-functions`
- `#gist/92cf0a3...` ⏤ El *ID* de una *gist* público de *GitHub*, el *playground* renderizará una historia *markdown* y archivos *TS*/*JS* o tomará el contenido de un solo archivo y lo mostrará. Puedes agregar `-2` para acceder al tercer archivo (debido a la indexación 0).

O para activar alguna acción predeterminada:

- `#show-examples` ⏤ Cuando la aplicación está cargada, muestra los ejemplos `popover`
- `#show-whatisnew` ⏤ Cuando la aplicación está cargada, muestra los ejemplos `popover`

Entonces, las consultas tienden a ser sobre cómo cambiar el estado de la configuración del *PlayGround* desde el predeterminado:

- `?ts=3.9.2` ⏤ Establece la versión de *TypeScript*, la lista de versiones compatibles se encuentra en estos [dos](https://typescript.azureedge.net/indexes/pre-releases.json) archivos [`json`](https://typescript.azureedge.net/indexes /releases.json).

  Hay dos casos especiales para la opción `ts`:

  - `ts=Nightly` donde cambiará a la versión nocturna más reciente.
  - `ts=dev` donde usas tu [compilación *TypeScript* del desarrollador local](https://github.com/microsoft/TypeScript/blob/main/scripts/createPlaygroundBuild.js)

- `?flag=value` ⏤ Cualquier indicador del compilador al que se hace referencia se puede establecer desde una consulta
- `?filetype=js|ts|dts` ⏤ Le dice a *Playground* que establezca el tipo de editor.
- `?install-plugin=npm-module` ⏤ Comprueba si hay un complemento del *playground* instalado con ese nombre y, si no, ofrece instalarlo en un modal.
