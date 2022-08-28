# Código de ejemplo de *TypeScript*

Los ejemplos en inglés se pueden encontrar en [`en/`](en/).

# Código de ejemplo de *TypeScript*

Estos ejemplos están diseñados para hiperenlazarlos entre sí.
en un entorno de espacio aislado como *TypeScript Playground*.

Cada ejemplo tiene como objetivo cubrir una o dos características específicas para
ya sea cómo funciona JavaScript en TypeScript, o características que
TypeScript ha agregado al lenguaje.

Un ejemplo debe hacer suposiciones de que el lector está en un
entorno monaco/tipo IDE que tiene un TSServer ejecutándose para
proporcionar un análisis adicional. Además de una menor fluidez en
JavaScript.

Estos ejemplos no están escritos en piedra y estamos abiertos a nuevas
ideas. Si deseas ayudar y hablas más de un
idioma, nos encantaría ver traducciones.

## Agregar una nueva sección de ejemplo

Crea un directorio en la sección en inglés del directorio [`copy`](./copy),
luego agrega subdirectorios por la sección que te gustaría tener como encabezados
con 3-5 ejemplos.

## Agregar una localización

Todas las localizaciones viven dentro del directorio `copy`:

- Debe haber un `section.json` en la raíz de cada idioma
- Un idioma se crea copiando un ejemplo en inglés con la misma ruta y luego traduciéndolo
- Cualquier ejemplo que no se haya copiado se remonta a la versión en inglés.
- Puedes cambiar el nombre de un ejemplo a tu idioma al tener `//// { "title": 'c0d3 fl0w', ...}` en la primera línea del ejemplo

Los idiomas se compilan en archivos TOC JSON en [`generated`](./generated), uno por idioma.

# Despliegue

Hay un archivo JSON de tabla de contenido que contiene
todos los metadatos útiles sobre la jerarquía y ordenación
de los documentos.

Es probable que necesitemos crear esto por traducción.
en el futuro, pero por ahora la tabla de contenido
predeterminada en inglés.

El script está en [`scripts/generateTOC.js`](scripts/generateTOC.js), con  
\la salida del proceso de compilación se copia en el archivo `typescriptlang-org`
módulo en `static/js/examples` en [`scripts/copyFiles.js`](scripts/copyFiles.js).
