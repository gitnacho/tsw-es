## Estructura *URL*s

Debido a que *Playground* se ejecuta en el navegador, nos esforzamos por representar todas las configuraciones ambientales posibles dentro del *URL* para que puedas compartir fácilmente tu *Playground*. Esto incluye el código, los indicadores del compilador y la configuración.

*Playground* admite dos formas de entradas del *URL*: El hash y las consultas.

### El hash

El hash generalmente representa el estado del editor:

- `#code/PRAz3dDc3...` - Una versión base64 y comprimida del código que debería estar en el editor
- `#src/The%20code...` - Manera *URLEncoded* de tener el código para el editor (usado para compatibilidad con versiones anteriores de *URL* más antiguos)
- `#example/generic-functions` ⏤ Tome el código de un ejemplo de *Playground* con *id generic-functions*
- `#handbook-2` - El manual de *Playground* con el número de página
- `#gist/92cf0a3...` ⏤ El *ID* de una esencia pública de *GitHub*, el *playground* renderizará un conjunto de documentos de archivos *Markdown* y *TS*/*JS* o tomará el contenido de un solo archivo y lo mostrará. Dado el soporte para páginas de múltiples archivos, puede agregar `-[n` para acceder al enésimo archivo (teniendo en cuenta la indexación 0) ⏤ así que `/play/#gist/303ebff59a6fc37f88c86e86dbdeb0e8-3` de manera predeterminada abrirá la cuarta página.

O para, de forma predeterminada, activar alguna acción en la interfaz de usuario de *Playground*:

- `#show-examples` ⏤ Cuando se carga la aplicación, muestra el panel "Ejemplos"
- `#show-whatisnew` ⏤ Cuando se carga la aplicación, muestra el panel "Novedades".

### La consulta

Entonces, la cadena de consulta tiende a tratar de cambiar el estado predeterminado de la configuración de *Playground*:

- `?ts=3.9.2` ⏤ Establece la versión de *TypeScript*, la lista de versiones compatibles se encuentra en estos [dos](https://typescript.azureedge.net/indexes/pre-releases.json) archivos [`json`](https://typescript.azureedge.net/indexes /releases.json).

  Hay dos casos especiales para la opción `ts`:

  - `ts=Nightly` donde cambiará a la versión nocturna más reciente.

- `ts=dev` donde usas tu [compilación *TypeScript* del desarrollador local](https://github.com/microsoft/TypeScript/blob/main/scripts/createPlaygroundBuild.js)

- `?flag=value` ⏤ Cualquier indicador del compilador al que se hace referencia se puede establecer desde una consulta
- `?filetype=js|ts|dts` ⏤ Le dice a *Playground* que establezca el lenguaje del editor.
- `?install-plugin=npm-module` ⏤ Comprueba si hay un complemento del *playground* instalado con ese nombre y, si no es así, ofrece instalarlo en un modal a través de `npm`.

El *playground* intentará retener cualquier configuración de opción que no sea del compilador durante las actualizaciones de *URL*, esto es para garantizar que los complementos del *playground* puedan leer/escribir sus propios parámetros con los que el *playground* evita interferir.

### Límites de longitud de *URL*

Es posible alcanzar un límite de longitud de *URL* con una muestra de código lo suficientemente larga. Puedes usar un [*Gist Playgrounds*](/play#handbook-15) o te recomendamos que busques en la sección de complementos de *Playground* (que estamos a punto de ir [al siguiente](<](/play# handbook-11)>)) para encontrar un acortador de *URL*.
