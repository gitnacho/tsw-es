## Cómo actualizar el sitio de *TypeScript* a una nueva versión

Usaremos 3.9.0 como ejemplo. Ten en cuenta que esto parece largo porque hay muchas explicaciones, asumiendo que todo se compila, entonces probablemente tomará entre 15 y 30m.

### Beta

##### Sitio

El sitio web utiliza una versión de *TypeScript* que puedes encontrar en `package.json` en el directorio raíz dentro del campo `resolutions`. Siempre es una versión específica, así que cambia la versión a:

```json
  "resolutions": {
    "typescript": "3.9.0-beta",
  },
```

Luego ejecuta `yarn install`.

Eso actualizará todo el sitio para usar 3.9.0 para la construcción. Ejecuta `yarn build` para ver si se rompió algún código del sitio web.

Es posible que veas problemas con la aplicación de parches de `yarn` en *TypeScript*, si es así, intenta ejecutar: `yarn set version latest` primero para actualizar al `yarn` más reciente.

Luego vacía la caché de `twoslash`: `rm node_modules/.cache/twoslash`.

##### Nuevos documentos del manual

Es posible que tengas un nuevo documento de referencia para agregar, se encuentra en [`packages/documentation/copy`](https://github.com/microsoft/TypeScript-website/blob/v2/packages/documentation/copy). Puedes ignorar otros idiomas además de `en`. La estructura de directorios es solo para tu referencia y no influye en la navegación del sitio. Cada documento *markdown* necesita un encabezado como:

```md
---
title: Tipos básicos
layout: docs
permalink: /docs/handbook/basic-types.html
oneline: "Paso uno para aprender TypeScript: Tipos básicos."
---
```

O el sitio fallará en la construcción. Una vez que el archivo esté listo, agrégalo a la barra lateral a través del archivo [`packages/documentation/scripts/generateDocsNavigationPerLanguage.js`](https://github.com/microsoft/TypeScript-website/blob/v2/packages/documentation/scripts/generateDocsNavigationPerLanguage.js).

### Actualizaciones del esquema *JSON*

La fuente de la verdad para el esquema *JSON* es https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/tsconfig.json

Para descargar una copia de eso en nuestro repositorio para manejar las nuevas *SE* que se le envían entre los lanzamientos de *TS*, ejecuta: `node ./node_modules/.bin/ts-node packages/tsconfig-reference/scripts/schema/downloadSchemaBase.ts`

##### Referencia de `TSConfig`

La actualización de la versión de *TypeScript* te obligará a actualizar la Referencia de *TSConfig*. Fallará de forma incremental con cada indicador faltante del compilador.

Para cada nuevo indicador:

- Agrega un archivo *markdown* para los nuevos indicadores del compilador. La compilación se bloqueará y te dará un comando para ejecutar que lo configurará.

- Agrega la bandera al [archivo *JSON* base de esquema](https://github.com/microsoft/TypeScript-website/blob/v2/packages/tsconfig-reference/scripts/schema/result/schema.json). Puedes dejar las descripciones en blanco allí, ya que el sitio las agregará.

- Actualiza [`tsconfigRules.ts`](https://github.com/microsoft/TypeScript-website/blob/v2/packages/tsconfig-reference/scripts/tsconfigRules.ts#L16) — con cosas como:

  - Valores predeterminados
  - Vinculación de versiones del compilador
  - Agrega una nueva sección a `releaseToConfigsMap` para tu versión

#### `Playground`

La etiqueta se debe generar de manera automática [diariamente](https://github.com/microsoft/TypeScript-Make-Monaco-Builds/actions/workflows/nightly_check_prod_deploys.yml) - para que no tengas que hacer nada

##### Pruebas

Ejecuta `yarn test`.

Las pruebas pueden fallar entre compilaciones de *TypeScript*, por ejemplo, pruebas de instantáneas en paquetes que tienen errores del compilador o respuestas `LSP`.
Ejecuta `yarn build; yarn update-test-snapshots` para intentar actualizar automáticamente todas las instantáneas; de lo contrario, usa `yarn workspace [nombre_paquete] test -u` para 1 paquete.

### RC (de "Release Candidate")

A menos que algo drástico haya cambiado, no deberías tener que hacer nada. Puedes ejecutar el `playground` para la *RC* y actualizar el menú desplegable para que sea la *RC*.

### Lanzamiento

#### Notas de lanzamiento

Toma el *markdown* del [blog del repositorio de publicaciones](https://github.com/microsoft/TypeScript-blog-posts), y crea un archivo como: `packages/documentation/copy/en/release-notes/TypeScript 3.9.md`

Toma la información del encabezado de las notas de una versión anterior y agrégala a tu nueva versión:

```md
---
title: TypeScript 3.9
layout: docs
permalink: /docs/handbook/release-notes/typescript-3-9.html
oneline: TypeScript 3.9 Notas de lanzamiento
---
```

Puedes agregar `twoslash` a los ejemplos de código si lo deseas.

Cuando estés satisfecho con eso, edita [`packages/documentation/copy/en/release-notes/Overview.md`(https://github.com/microsoft/TypeScript-website/blob/v2/packages/documentation/copy/en/release-notes/Overview.md) para incluir los cambios que acabas de agregar y simplificar las descripciones.

##### Almacén de esquemas de actualización

Usando la *CLI* de *GitHub*, desde la raíz del repositorio

```
# Clona una copia y mueve un archivo nuevo
gh repo clone https://github.com/SchemaStore/schemastore.git /tmp/schemastore
cp packages/tsconfig-reference/scripts/schema/result/schema.json /tmp/schemastore/src/schemas/json/tsconfig.json

# Entra y configura los cambios
cd /tmp/schemastore
gh repo fork
git add .
git commit -m "Actualiza el esquema tsconfig.json"

# Valida que nada se rompió
cd src
npm ci
npm run build

# Envíalo
gh pr create --web
```
