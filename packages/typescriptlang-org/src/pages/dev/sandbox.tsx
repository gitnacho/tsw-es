import React, { useEffect } from "react"
import { Layout } from "../../components/layout"
import { withPrefix, graphql } from "gatsby"

import "./dev.scss"
import { Intl } from "../../components/Intl"
import { DevNav } from "../../components/devNav"
import { isTouchDevice } from "../../lib/isTouchDevice"
import { SuppressWhenTouch } from "../../components/SuppressWhenTouch"

type Props = {}

const Index: React.FC<Props> = props => {
  useEffect(() => {
    // Ni siquiera te molestes en conseguir monaco
    if (isTouchDevice()) {
      return
    }

    const getLoaderScript = document.createElement("script")
    getLoaderScript.src = withPrefix("/js/vs.loader.js")
    getLoaderScript.async = true
    getLoaderScript.onload = () => {
      // @ts-ignore
      const re: any = global.require

      re.config({
        paths: {
          vs: "https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs",
          sandbox: withPrefix("/js/sandbox"),
        },
        ignoreDuplicateModules: ["vs/editor/editor.main"],
      })

      re(
        [
          "vs/editor/editor.main",
          "vs/language/typescript/tsWorker",
          "sandbox/index",
        ],
        async (
          main: typeof import("monaco-editor"),
          ts: typeof import("typescript"),
          sandboxEnv: typeof import("@typescript/sandbox")
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
}`
          const isOK = main && ts && sandboxEnv
          if (isOK) {
            document
              .getElementById("loader")!
              .parentNode?.removeChild(document.getElementById("loader")!)
          }

          document.getElementById("monaco-editor-embed")!.style.display =
            "block"

          const sandbox = sandboxEnv.createTypeScriptSandbox(
            {
              text: initialCode,
              compilerOptions: {},
              domID: "monaco-editor-embed",
              filetype: "ts",
            },
            main,
            ts
          )
          sandbox.editor.focus()

          setTimeout(() => {
            document.querySelectorAll(".html-code").forEach(codeElement => {
              sandbox.monaco.editor
                .colorize(codeElement.textContent || "", "html", { tabSize: 2 })
                .then(newHTML => {
                  codeElement.innerHTML = newHTML
                })
            })

            document.querySelectorAll(".ts-code").forEach(codeElement => {
              sandbox.monaco.editor
                .colorize(codeElement.textContent || "", "typescript", {
                  tabSize: 2,
                })
                .then(newHTML => {
                  codeElement.innerHTML = newHTML
                })
            })
          }, 300)
        }
      )
    }

    document.body.appendChild(getLoaderScript)
  }, [])

  return (
    <>
      <Layout
        title="Desarrolladores - Sandbox"
        description="La zona de pruebas de TypeScript potencia el TypeScript Playground. Aprende cómo puedes hacer que tus experiencias sean como el playground usando el recinto de seguridad."
        lang="es"
      >
        <div id="dev">
          <DevNav active="sandbox" />
          <div className="raised content main-content-block">
            <div className="split-fivehundred">
              <h1 style={{ marginTop: "20px" }}>Sandbox de TypeScript</h1>
              <p>
                Una biblioteca DOM para interactuar con código TypeScript y JavaScript,
                que alimenta el corazón del{" "}
                <a href={withPrefix("/play/")}>Playground de TypeScript</a>
              </p>
              <p>Puedes usar el sandbox de TypeScript para:</p>
              <ul>
                <li>
                  Creación de experiencias similares al IDE para que las personas exploren la
                  API de tu biblioteca
                </li>
                <li>
                  Creación de herramientas web interactivas que utilizan <em>TypeScript</em>, con un
                  gran parte de la experiencia de desarrollador de Playgrounds gratis
                </li>
              </ul>
              <p>
                Por ejemplo, el entorno aislado, a un lado, ha tomado los Tipos para{" "}
                <a href="https://danger.systems/js/">DangerJS</a> sin
                modificaciones para este ejemplo de código. Esto se debe a que la
                adquisición automática de tipos de Playground está habilitada de forma predeterminada.
                También buscará los mismos parámetros para el código, y
                selección de índices dentro de la URL.
              </p>
              <p>
                Intenta hacer clic en{" "}
                <a href="?q=1#code/PTAEBUAsFMGdtAYwPYFtXQHYBdagO7QBOCiJAhttACagCWmo2MEAngA7QDKZd72oAAoAbcqwDmRZAFdM1AFAhQ5OUxiNmCAKoAlADKhI5WJALGkydnRqhkAN2JNkahJmj5QuvfMVgodPAwVPBVWUHYpACtoRAFpWAZxNk4eIj4BWBVqACNkAA84JBVfUGhjOmEw+FUUagRyKVlabGcyxFNkTSJQHxRMWAEYYWFnAF5QACIACWhh5wB1ZCJhagn5PthkYWgAOhHxAAohkYBKIA">
                  esta URL
                </a>{" "}
                para verlo en acción.{" "}
              </p>
              <p>
                Esta biblioteca se basa en{" "}
                <a href="https://microsoft.github.io/monaco-editor/index.html">
                  el Editor monaco
                </a>
                , proporcionando una API de mayor nivel pero ofreciendo acceso a todos los
                nivel inferiores de la API a través de un solo objeto <code>sandbox</code>.
              </p>
              <p>
                Puedes encontrar el código para <em>TypeScript Sandbox</em> dentro de{" "}
                <a href="https://github.com/microsoft/TypeScript-Website/tree/v2/packages/sandbox#@typescript/sandbox">
                  microsoft/TypeScript-Website
                </a>{" "}
                mono-repo.
              </p>
            </div>

            <SuppressWhenTouch hideOnTouch>
              <div
                className="fivehundred"
                style={{ borderLeft: "1px solid gray" }}
              >
                <div id="loader">
                  <div className="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <p id="loading-message" role="status">
                    Descargando Sandbox...
                  </p>
                </div>
                <div
                  style={{ height: "400px", display: "none" }}
                  id="monaco-editor-embed"
                />
              </div>
            </SuppressWhenTouch>
          </div>

          <div className="raised main-content-block">
            <h2>Uso</h2>
            <p>
              Un sandbox usa las mismas herramientas que monaco-editor, lo cual significa que esta
              biblioteca se envía como un paquete AMD que puedes utilizar en{" "}
              <a href="https://github.com/microsoft/vscode-loader/">
                el cargador de VSCode
              </a>{" "}
              para <code>require</code>.
            </p>
            <p>
              Debido a que lo necesitamos para el sitio web de <em>TypeScript</em>, puedes usar nuestra
              copia alojada{" "}
              <a
                href="https://typescriptlang.org/js/vs.loader.js"
                title="Enlace al JS para el cargador de Visual Studio require"
              >
                aquí.
              </a>
            </p>

            <h3>Comenzar</h3>
            <p>
              Crear un nuevo archivo: <code>index.html</code> y pega este código
              en ese archivo.
            </p>
            <pre>
              <code className="html-code">
                {`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
  </head>
  <div id="loader">Loading...</div>
  <div id="monaco-editor-embed" style="height: 800px;" />
  <script>
    // Primero configura el cargador VSCode en una etiqueta script
    const getLoaderScript = document.createElement('script')
    getLoaderScript.src = 'https://www.typescriptlang.org/js/vs.loader.js'
    getLoaderScript.async = true
    getLoaderScript.onload = () => {
      // Ahora que el cargador está listo, dile a require dónde puede obtener la versión de monaco y sandbox
      // Esta versión utiliza la última versión del sandbox, que se utiliza en el sitio web de TypeScript.

      // Para la versión de monaco, puedes usar unpkg o TypeSCript web infra CDN
      // Puedes ver las versiones disponibles para TypeScript aquí:
      // https://typescript.azureedge.net/indexes/releases.json
      //
      require.config({
        paths: {
          vs: 'https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs',
          // vs: 'https://unpkg.com/@typescript-deploys/monaco-editor@4.0.5/min/vs',
          sandbox: 'https://www.typescriptlang.org/js/sandbox',
        },
        // Esto es algo que necesitas para que monaco funcione.
        ignoreDuplicateModules: ['vs/editor/editor.main'],
      })

      // Coge una copia de monaco, TypeScript y el sandbox
      require(['vs/editor/editor.main', 'vs/language/typescript/tsWorker', 'sandbox/index'], (
        main,
        _tsWorker,
        sandboxFactory
      ) => {
        const initialCode = \`import {markdown, danger} from "danger"

export default async function () {
    // Comprueba si hay nuevos @types en devDependencies
    const packageJSONDiff = await danger.git.JSONDiffForFile("package.json")
    const newDeps = packageJSONDiff.devDependencies.added
    const newTypesDeps = newDeps?.filter(d => d.includes("@types")) ?? []
    if (newTypesDeps.length){
        markdown("Added new types packages " + newTypesDeps.join(", "))
    }
}
\`

        const isOK = main && window.ts && sandboxFactory
        if (isOK) {
          document.getElementById('loader').parentNode.removeChild(document.getElementById('loader'))
        } else {
          console.error('¡No se pudieron configurar todas las dependencias de sandbox!')
          console.error('main', !!main, 'ts', !!window.ts, 'sandbox', !!sandbox)
          return
        }

        // Crea un sandbox y lo inserta en el div #monaco-editor-embed
        const sandboxConfig = {
          text: initialCode,
          compilerOptions: {},
          domID: 'monaco-editor-embed',
        }

        const sandbox = sandboxFactory.createTypeScriptSandbox(sandboxConfig, main, window.ts)
        sandbox.editor.focus()
      })
    }

    document.body.appendChild(getLoaderScript)
  </script>
</html>`}
              </code>
            </pre>
            <p>
              Al abrir el archivo <code>index.html</code> en un navegador web,
              carga el mismo sandbox en la parte superior de la página.
            </p>
            <h3>Algunos ejemplos de la API</h3>
            {codeSamples.map(code => (
              <div className="split-code" key={code.blurb}>
                <p>{code.blurb}</p>
                <pre>
                  <code className="ts-code">{code.code.trim()}</code>
                </pre>
              </div>
            ))}
            <p>
              La API principalmente es una ligera corrección sobre la{" "}
              <a href="https://microsoft.github.io/monaco-editor/api/index.html">
                API de monaco-editor
              </a>{" "}
              con la{" "}
              <a href="https://github.com/microsoft/monaco-typescript">
                API de monaco-typescript
              </a>
              .
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default (props: Props) => (
  <Intl locale="es">
    <Index {...props} />
  </Intl>
)

const codeSamples = [
  {
    blurb: "Convirtiendo el TypeScript del usuario en JavaScript",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// Async porque necesita  
const js = await sandbox.getRunnableJS()
console.log(js)`,
  },
  {
    blurb: "Obtener el DTS para el editor del usuario",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

const dts = await sandbox.getDTSForCode()
console.log(dts)`,
  },
  {
    blurb: "Hace una solicitud de respuesta LSP",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// Un trabajador aquí es un trabajador web, creado por monaco-typescript
// que hace el cálculo en segundo plano 
const worker = await sandbox.getWorkerProcess()
const definitions =  await client.getDefinitionAtPosition(model.uri.toString(), 6)
  `,
  },
  {
    blurb: "Cambiar las banderas del compilador usando algunas APIs diferentes",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// Engánchese a todos los cambios en el compilador
sandbox.setDidUpdateCompilerSettings((newOptions) => {
  console.log("Compiler settings changed: ", newOptions)
})

// Actualizar mediante valor clave
sandbox.updateCompilerSetting("allowJs", true)
// Actualizar a través de un objeto
sandbox.updateCompilerSettings({ jsx: 0 })
// Reemplazar la configuración del compilador
sandbox.setCompilerSettings({})
`,
  },
  {
    blurb: "Resaltar algún código en el editor",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

const start = {
  lineNumber: 0,
  column: 0
}

const end = {
  lineNumber: 0,
  column: 4
}

const decorations = sandbox.editor.deltaDecorations([], [
  {
    range: new sandbox.monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),
    options: { inlineClassName: 'error-highlight' },
  },
])
`,
  },
  {
    blurb: "Crea tu propio playground.",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// Use un script para crear un archivo JSON como:
// { 
//   "file:///node_modules/types/keyboard/index.d.ts": "export const enterKey: string"
// }
//
// Donde las claves son las rutas y los valores son el código fuente. El sandbox
// utilizará la estrategia de búsqueda de resolución de nodos de forma predeterminada.

const dtsFiles = {} 

Object.keys(dtsFiles).forEach(path => {
  sandbox.languageServiceDefaults.addExtraLib(dts[path], path);
});
`,
  },
]
