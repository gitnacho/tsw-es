### Meta

- **URLs**: [producción](https://www.typescriptlang.org), [andamiaje](http://www.staging-typescript.org/)
- **Admin**: Prod: [Portal de Azure](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/99160d5b-9289-4b66-8074-ed268e739e8e/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/TypeScript-1ebb3390-2634-4956-a955-eab987b7bb25/appServices), [Deploy logs](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/99160d5b-9289-4b66-8074-ed268e739e8e/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/TypeScript-1ebb3390-2634-4956-a955-eab987b7bb25/vstscd), [App Insights](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/57bfeeed-c34a-4ffd-a06b-ccff27ac91b8/resourceGroups/typescriptlang-org/providers/microsoft.insights/components/TypeScriptLang-Prod-Ai/overview)
- **Traducciones**: [microsoft/TypeScript-Website-Localizations](https://github.com/microsoft/TypeScript-Website-Localizations)

### Introducción

Este repositorio utiliza [espacios de trabajo yarn][y-wrk] con node 13+ y [watchman](https://facebook.github.io/watchman/docs/install.html). (Los usuarios de Windows pueden instalar [watchman vía chocolatey](https://chocolatey.org/packages/watchman))

Con estos configurados, clona este repositorio y ejecuta `yarn install`.

```sh
git clone https://github.com/microsoft/TypeScript-website
cd TypeScript-website
yarn install
code .

# Luego:
yarn bootstrap
# Opcional, graba las traducciones:
yarn docs-sync pull microsoft/TypeScript-Website-localizations#main 1

# Ahora puedes iniciar el sitio web
yarn start
```

Trabajar en este repositorio se realiza ejecutando `yarn start` - esto inicia el sitio web en el puerto `8000` y crea un
trabajador del `builder` para cada paquete en el repositorio, por lo que si realizas un cambio fuera del sitio, se compilará y filtrará, etc.

Algunos conocimientos útiles que necesitas saber:

- Todos los paquetes tienen: `yarn build` y `yarn test`
- Todos los paquetes usan [debug](https://www.npmjs.com/package/debug) - lo cual significa que puedes hacer `env DEBUG="*" yarn test` para obtener registros detallados

Lo puedes hacer manualmente a través de GH Actions para [producción aquí](https://github.com/microsoft/TypeScript-Website/actions?query=workflow%3A%22Monday+Website+Push+To+Production%22) y [andamiaje aquí](https://github.com/microsoft/TypeScript-Website/actions?query=workflow%3A%22Build+Website+To+Staging%22).

¿Tienes problemas para configurar? [Consulta la resolución de problemas](./docs/Setup%20Troubleshooting.md).

## Despliegue

El despliegue es automático:

- Empuja a la rama *v2* para desplegar en [andamiaje](http://www.staging-typescript.org)
- Un lunes, la rama *v2* se despliega en [producción](https://www.typescriptlang.org)

Puedes encontrar los registros de compilación en [Acciones de GitHub](https://github.com/microsoft/TypeScript-Website/actions)

## Docs

Si deseas conocer *en profundidad* cómo funciona este sitio web, hay un [video de una hora de duración que cubre el código base, despliegue y herramientas en YouTube](https://www.youtube.com/watch?v=HOvivt6B7hE). De lo contrario, hay algunas guías breves:

- [Conversión código de ejemplo de `twoslash`](./docs/Converting%20Twoslash%20Code%20Samples.md)
- [Cómo funciona i8n para copiar el sitio](./docs/How%20i8n%20Works%20For%20Site%20Copy.md)
- [Actualización de la versión de TypeScript](./docs/New%20TypeScript%20Version.md)
- [Algo salió mal](./docs/Something%20Went%20Wrong.md)

# Sitios web de paquetes

## TypeScriptLang-Org

El sitio web principal de *TypeScript*, un sitio web de Gatsby que se despliega estáticamente. Lo puedes ejecutar a través de:

```sh
yarn start
```

Para optimizar aún más, la variable de entorno `NO_TRANSLATIONS` como `true` hará que el sitio web solo cargue páginas en inglés.

## *Sandbox*

El aspecto del editor del *BLEI* de *TypeScript Playground*, utilizable para todos los sitios que quieran mostrar un editor monaco
con código *TypeScript* o *JavaScript*.

## `Playground`

El código *JS* tiene un módulo *AMD* para el área de juegos que se carga en el entorno de ejecución en el sitio web de *Playground*.

# Paquetes *Doc*

## Referencia de `TSConfig`

Un conjunto de herramientas y scripts para generar una referencia completa de la *API* para el archivo *JSON* *TSConfig*.

```sh
# Generar JSON desde la `cli` de TypeScript
yarn workspace tsconfig-reference run generate-json
# Agrupa todo en un solo archivo
yarn workspace tsconfig-reference run generate-markdown
```

Validar los documentos:

```sh
yarn workspace tsconfig-reference run test

# o simplemente ejecuta el linter sin una compilación
yarn workspace tsconfig-reference run lint

# o solo un linter para un solo documento
yarn workspace tsconfig-reference run lint resolveJson
```

## Documentación

Los documentos de *TypeScript*. Originalmente transferidos desde [microsoft/TypeScript-Handbook](https://github.com/microsoft/TypeScript-Handbook/) y luego mezclados con [microsoft/TypeScript-New-Handbook](https://github.com/microsoft/TypeScript-New-Handbook), y finalmente actualízalos para [Twoslash](http://www.staging-typescript.org/dev/twoslash/) con nuevo contenido.

## Esquema *JSON*

Es un poco extraño, pero el paquete `tsconfig-reference` crea el esquema *JSON* para archivos `TSConfig`:

```sh
yarn workspace tsconfig-reference build
```

Entonces lo puedes encontrar en: [`packages/tsconfig-reference/scripts/schema/result/schema.json`](packages/tsconfig-reference/scripts/schema/result/schema.json).

## Manual de *playground*

La documentación para el usuario de *Playground*.

## Ejemplos en *Playground*

Los ejemplos de código utilizados en *Playground* se dividen en varios lenguajes.

# Paquetes *Infra*

La mayoría de estos paquetes utilizan [`tsdx`](https://tsdx.io).

## TS Twoslash

Una extensión de marcado de código de ejemplo para *TypeScript*. Disponible en `npm`: [@typescript/twoslash](https://www.npmjs.com/package/@typescript/twoslash)

## *TypeScript* `VFS`

Una forma completa de ejecutar proyectos *TypeScript* en memoria en un navegador o entorno de node. Disponible en `npm`: [@typescript/vfs](https://www.npmjs.com/package/@typescript/vfs)

## Crear complemento de *Playground*

Una plantilla para generar un nuevo complemento de *playground* que se puede utilizar a través de `npm init playground-plugin [nombre]`

## Publicación electrónica del manual

Genera un archivo *epub* a partir de los archivos del manual. Puedes intentar descargarlo en https://www.typescriptlang.org/assets/typescript-handbook.epub

## Meta de la comunidad

Genera metadatos JSON de contribución sobre quién editó las páginas del manual.

## Trabajador de *Playground*

Un trabajador web que se encuentra entre el *Playground* y *Monaco-TypeScript*

# Colaborar

Este proyecto agradece contribuciones y sugerencias. La mayoría de las contribuciones requieren que aceptes un
Acuerdo de Licencia de Colaborador (*CLA*) el cual declara que tienes derecho a otorgarnos, y de hecho lo haces,
los derechos para utilizar tu contribución. Para obtener más información, visita https://cla.microsoft.com.

Cuando envías una solicitud de extracción, un *bot* de *CLA* determinará automáticamente si necesitas proporcionar
un *CLA* y decorar la *SE* de manera apropiada (por ejemplo, label, comment). Simplemente sigue las instrucciones
proporcionadas por el *bot*. Solo necesitarás hacer esto una vez en todos los repositorios usando nuestro *CLA*.

Este proyecto ha adoptado el [Código de conducta de código abierto de *Microsoft*](https://opensource.microsoft.com/codeofconduct/).
Para obtener más información, consulta las [Preguntas frecuentes sobre el Código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o
ponte en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tienes preguntas o comentarios adicionales.

# Avisos legales

Microsoft y cualquier colaborador te otorgan una licencia para la documentación de Microsoft y otro contenido.
en este repositorio bajo la [Licencia pública internacional Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/legalcode),
ve el archivo [LICENSE](LICENSE) y otórgarte una licencia para cualquier código en el repositorio bajo la [Licencia MIT](https://opensource.org/licenses/MIT), consulta el archivo
[LICENSE-CODE](LICENSE-CODE).

Microsoft, Windows, Microsoft Azure y/u otros productos y servicios de Microsoft mencionados en la documentación
pueden ser marcas comerciales o marcas comerciales registradas de Microsoft en los Estados Unidos y/o en otros países.
Las licencias para este proyecto no te otorgan derechos para utilizar ningún nombre, logotipo o marca comercial de Microsoft.
Las pautas generales de marcas comerciales de Microsoft se pueden encontrar en http://go.microsoft.com/fwlink/?LinkID=254653.

La información de privacidad se puede encontrar en https://privacy.microsoft.com/en-us/

Microsoft y cualquier colaborador se reservan todos los demás derechos, ya sea bajo sus respectivos derechos de autor, patentes,
o marcas registradas, ya sea por implicación, impedimento legal o de otro modo.

[y-wrk]: https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/
