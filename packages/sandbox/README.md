# *Sandbox* de *TypeScript*

*Sandbox* de *TypeScript* es la parte del editor del *Playground* de *TypeScript*. Efectivamente es una bifurcación obstinada de
`monaco-typescript` con puntos de extensión adicionales para que puedan existir proyectos como el *Playground* de *TypeScript*.

Este proyecto te resulta útil si:

- Deseas presentar a los usuarios de tu biblioteca un editor *JS* que tiene una *API* escrita (en *JS* o *TS*)
- Quieres trabajar con `monaco` a un nivel de abstracción superior

## Metas

- Admite múltiples versiones de *TypeScript* (a través de la compatibilidad con versiones anteriores de `monaco-typescript`)
- Fácil de usar cuando se intenta reemplazar el código en línea en un sitio web
- Puntos de extensión de soporte necesarios para construir `Playground`
- *API* de alto nivel para cosas como Adquisición automática de tipos o adiciones *DTS*

## Compilación

Esta biblioteca se publica en la *CDN* como un módulo de *AMD*. Este es el mismo formato que usa `vscode`/`monaco`, por lo que puedes usar
los mismos patrones de carga en el entorno de ejecución para importar a tu página web. Este paquete también está disponible como módulo *ESM* y *CJS* en *NPM*.

## Instalación

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
  </head>
  <div id="loader">Loading...</div>
  <div id="monaco-editor-embed" style="height: 800px;" />
  <script>
    // Primero configura el cargador VSCode en una etiqueta script
    const getLoaderScript = document.createElement("script")
    getLoaderScript.src = "https://www.typescriptlang.org/js/vs.loader.js"
    getLoaderScript.async = true
    getLoaderScript.onload = () => {
      // Ahora que el cargador está listo, dile a require dónde puede obtener la versión de monaco y sandbox
      // Esta versión utiliza la última versión del sandbox, que se utiliza en el sitio web de TypeScript.

      // Para la versión de monaco, puedes usar unpkg o la Infraestructura Web CDN de TypeScript.
      // Puedes ver las versiones disponibles para TypeScript aquí:
      // https://typescript.azureedge.net/indexes/releases.json
      //
      require.config({
        paths: {
          vs: "https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs",
          // vs: 'https://unpkg.com/@typescript-deploys/monaco-editor@4.0.5/min/vs',
          sandbox: "https://www.typescriptlang.org/js/sandbox",
        },
        // Esto es algo que necesitas para que monaco funcione.
        ignoreDuplicateModules: ["vs/editor/editor.main"],
      })

      // Coge una copia de monaco, TypeScript y el sandbox
      require(["vs/editor/editor.main", "vs/language/typescript/tsWorker", "sandbox/index"], (
        main,
        _tsWorker,
        sandboxFactory
      ) => {
        const initialCode = `import {markdown, danger} from "danger"

export default async function () {
    // Comprueba si hay nuevos @types en devDependencies
    const packageJSONDiff = await danger.git.JSONDiffForFile("package.json")
    const newDeps = packageJSONDiff.devDependencies.added
    const newTypesDeps = newDeps?.filter(d => d.includes("@types")) ?? []
    if (newTypesDeps.length){
        markdown("Added new types packages " + newTypesDeps.join(", "))
    }
}
`

        const isOK = main && window.ts && sandboxFactory
        if (isOK) {
          document.getElementById("loader").parentNode.removeChild(document.getElementById("loader"))
        } else {
          console.error("Could not get all the dependencies of sandbox set up!")
          console.error("main", !!main, "ts", !!window.ts, "sandbox", !!sandbox)
          return
        }

        // Crea un sandbox y lo inserta en el div #monaco-editor-embed
        const sandboxConfig = {
          text: initialCode,
          compilerOptions: {},
          domID: "monaco-editor-embed",
        }

        const sandbox = sandboxFactory.createTypeScriptSandbox(sandboxConfig, main, window.ts)
        sandbox.editor.focus()
      })
    }

    document.body.appendChild(getLoaderScript)
  </script>
</html>
```
