### Generación de la referencia de `TSConfig`

Este "paquete" aloja documentos multilingües para `TSConfig`. Tanto como sea posible se basa
en extraer datos de `require("typescript")` y luego aumentados con *markdown* desde el interior del
directorio [`./copy`](./copy).

Aproximadamente:

```sh
Compilador TypeScript + `tsconfigRules.ts` -> `generateJSON.ts` -> JSON (in output) -> `generateMarkdown.ts` -> Markdown (in output)
```

Esto ocurre por lenguaje con alternativas al inglés para cualquier documento que falte.

## Colaborar

Para mejorar la documentación de una sola opción del compilador; todo lo que necesitas hacer es ir al directorio [`./copy`](./copy) y
editar la opción `page` en *markdown* y envía una *SE*. No es necesario salir de *GitHub*.

Luego, durante un despliegue, todos los archivos *markdown* se agrupan y se cargan los cambios combinados.

## Contribuir con un nuevo idioma

Si deseas crear un nuevo idioma:

Crea un nuevo subdirectorio en `./copy` con tu código de idioma y luego asegúrate de que los archivos en los que trabajas tengan el mismo
nombre que en inglés y tus cambios sobrescribirán la versión en inglés. Necesitarás

## Compilación

La referencia `TSConfig` se crea mediante un proceso de dos pasos:

- Creando el volcado *JSON* de toda la información útil a través de [`./scripts/generateJSON.ts`](scripts/generateJSON.ts) que puedes encontrar en [`./data`](./data).
- Un script que usa *JSON* y lo copia para generar documentos *markdown* por idioma que son recogidos por el sitio *Gatsby* de `typescriptlang-org` en `http://localhost:8000/tsconfig`

Puedes ejecutar estos comandos desde la raíz del repositorio:

```sh
yarn workspace tsconfig-reference run generate-json

yarn workspace tsconfig-reference run generate-markdown
```

Puedes validar cualquier bloque de código que use `twoslash` a través del script:

```sh
yarn workspace tsconfig-reference run test

# o simplemente ejecuta el linter sin una compilación
yarn workspace tsconfig-reference run lint

# o solo un linter
yarn workspace tsconfig-reference run lint resolveJson
```

Puedes depurar `twoslash` configurando el entorno var `DEBUG="*"` en todos estos también.
