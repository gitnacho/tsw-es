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
        title="Developers - Sandbox"
        description="La zona de pruebas de TypeScript potencia el TypeScript Playground. Aprende cómo puedes hacer que tus experiencias sean como el playground usando la caja de arena."
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
                  Building interactive web tools which use TypeScript, with a
                  lot of the Playgrounds developer experience for free
                </li>
              </ul>
              <p>
                Por ejemplo, el entorno aislado, a un lado, ha tomado los Tipos para{" "}
                <a href="https://danger.systems/js/">DangerJS</a> sin
                modifications for this code sample. This is because the
                Playground's Automatic Type Acquisition is enabled by default.
                It will also look for the same parameters for code, and
                selection indexes inside the URL.
              </p>
              <p>
                Try clicking{" "}
                <a href="?q=1#code/PTAEBUAsFMGdtAYwPYFtXQHYBdagO7QBOCiJAhttACagCWmo2MEAngA7QDKZd72oAAoAbcqwDmRZAFdM1AFAhQ5OUxiNmCAKoAlADKhI5WJALGkydnRqhkAN2JNkahJmj5QuvfMVgodPAwVPBVWUHYpACtoRAFpWAZxNk4eIj4BWBVqACNkAA84JBVfUGhjOmEw+FUUagRyKVlabGcyxFNkTSJQHxRMWAEYYWFnAF5QACIACWhh5wB1ZCJhagn5PthkYWgAOhHxAAohkYBKIA">
                  this URL
                </a>{" "}
                to see that in action.{" "}
              </p>
              <p>
                This library builds on top of the{" "}
                <a href="https://microsoft.github.io/monaco-editor/index.html">
                  Monaco Editor
                </a>
                , providing a higher level API but offering access to all the
                lower-level APIs via a single <code>sandbox</code> object.
              </p>
              <p>
                You can find the code for the TypeScript Sandbox inside the{" "}
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
                    Downloading Sandbox...
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
            <h2>Usage</h2>
            <p>
              A sandbox uses the same tools as monaco-editor, meaning this
              library is shipped as an AMD bundle which you can use the{" "}
              <a href="https://github.com/microsoft/vscode-loader/">
                VSCode Loader
              </a>{" "}
              to <code>require</code>.
            </p>
            <p>
              Because we need it for the TypeScript website, you can use our
              hosted copy{" "}
              <a
                href="https://typescriptlang.org/js/vs.loader.js"
                title="Link to the JS for the visual studio require loader"
              >
                here.
              </a>
            </p>

            <h3>Get Started</h3>
            <p>
              Create a new file: <code>index.html</code> and paste this code
              into that file.
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

      // For the monaco version you can use unpkg or the TypeSCript web infra CDN
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
          console.error('Could not get all the dependencies of sandbox set up!')
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
              Opening the file <code>index.html</code> in a web browser will
              load up the same sandbox up at the top of the page.
            </p>
            <h3>Some examples of the API</h3>
            {codeSamples.map(code => (
              <div className="split-code" key={code.blurb}>
                <p>{code.blurb}</p>
                <pre>
                  <code className="ts-code">{code.code.trim()}</code>
                </pre>
              </div>
            ))}
            <p>
              The API is mainly a light shim over the{" "}
              <a href="https://microsoft.github.io/monaco-editor/api/index.html">
                monaco-editor API
              </a>{" "}
              with the{" "}
              <a href="https://github.com/microsoft/monaco-typescript">
                monaco-typescript API
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
  <Intl locale="en">
    <Index {...props} />
  </Intl>
)

const codeSamples = [
  {
    blurb: "Converting the user's TypeScript into JavaScript",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// Async because it needs to go  
const js = await sandbox.getRunnableJS()
console.log(js)`,
  },
  {
    blurb: "Get the DTS for the user's editor",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

const dts = await sandbox.getDTSForCode()
console.log(dts)`,
  },
  {
    blurb: "Make a request for an LSP response",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// A worker here is a web-worker, set up by monaco-typescript
// which does the computation in the background 
const worker = await sandbox.getWorkerProcess()
const definitions =  await client.getDefinitionAtPosition(model.uri.toString(), 6)
  `,
  },
  {
    blurb: "Change compiler flags using a few different APIs",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// Hook in to all changes to the compiler
sandbox.setDidUpdateCompilerSettings((newOptions) => {
  console.log("Compiler settings changed: ", newOptions)
})

// Update via key value
sandbox.updateCompilerSetting("allowJs", true)
// Update via an object
sandbox.updateCompilerSettings({ jsx: 0 })
// Replace the compiler settings
sandbox.setCompilerSettings({})
`,
  },
  {
    blurb: "Highlight some code in the editor",
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
    blurb: "Create your own playground.",
    code: `const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)

// Use a script to make a JSON file like:
// { 
//   "file:///node_modules/types/keyboard/index.d.ts": "export const enterKey: string"
// }
//
// Where the keys are the paths, and the values are the source-code. The sandbox
// will use the node resolution lookup strategy by default.

const dtsFiles = {} 

Object.keys(dtsFiles).forEach(path => {
  sandbox.languageServiceDefaults.addExtraLib(dts[path], path);
});
`,
  },
]
