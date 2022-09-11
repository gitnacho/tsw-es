import React, { useEffect } from "react"
import { Layout } from "../../components/layout"
import { withPrefix } from "gatsby"
import { twoslasher } from "@typescript/twoslash"
import { createDefaultMapFromCDN } from "@typescript/vfs"
import { renderers } from "shiki-twoslash"
import { debounce } from "ts-debounce"

import "./dev.scss"
import { Intl } from "../../components/Intl"
import { DevNav } from "../../components/devNav"
import { isTouchDevice } from "../../lib/isTouchDevice"
import { SuppressWhenTouch } from "../../components/SuppressWhenTouch"
import { getPlaygroundUrls } from "../../lib/playgroundURLs"

/** Nota: para ejecutar toda la infraestructura web en depuración, ejecuta:
  localStorage.debug = '*'

  para eliminar el registro: localStorage.debug = undefined
 */

type Props = {}

const Index: React.FC<Props> = props => {
  useEffect(() => {
    // No monaco para tocar
    if (isTouchDevice()) {
      return
    }

    const getLoaderScript = document.createElement("script")
    getLoaderScript.src = withPrefix("/js/vs.loader.js")
    getLoaderScript.async = true
    getLoaderScript.onload = () => {
      // Permite compilaciones de prod/staging para establecer un prefijo de confirmación personalizado para romper cachés
      const {sandboxRoot} = getPlaygroundUrls()
      
      // @ts-ignore
      const re: any = global.require

      re.config({
        paths: {
          vs: "https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs",
          sandbox: sandboxRoot,
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
          // Esto activa la disponibilidad de "ts" en el alcance global
          re(["vs/language/typescript/lib/typescriptServices"], async _ts => {
            const ts = (global as any).ts
            const isOK = main && ts && sandboxEnv

            if (isOK) {
              document
                .getElementById("loader")!
                .parentNode?.removeChild(document.getElementById("loader")!)
            } else {
              console.error(
                "Error: main",
                !!main,
                "ts",
                !!ts,
                "sandbox",
                !!sandboxEnv
              )
            }

            document.getElementById("monaco-editor-embed")!.style.display =
              "block"
            const sandbox = await sandboxEnv.createTypeScriptSandbox(
              {
                text: codeSamples[0].code,
                compilerOptions: {},
                domID: "monaco-editor-embed",
                supportTwoslashCompilerOptions: true,
              },
              main,
              ts
            )
            sandbox.editor.focus()

            // @ts-ignore
            window.sandbox = sandbox

            const mapWithLibFiles = await createDefaultMapFromCDN(
              { target: 3 },
              "3.7.3",
              true,
              ts,
              sandbox.lzstring as any
            )

            const runTwoslash = () => {
              const newContent = sandbox.getText()
              mapWithLibFiles.set("index.ts", newContent)

              try {
                const newResults = twoslasher(newContent, "tsx", {
                  tsModule: ts,
                  lzstringModule: sandbox.lzstring as any,
                  fsMap: mapWithLibFiles,
                })
                const codeAsFakeShikiTokens = newResults.code
                  .split("\n")
                  .map(line => [{ content: line }])
                const html = renderers.twoslashRenderer(
                  codeAsFakeShikiTokens,
                  {},
                  // Este es un truco porque @typescript/twoslash se publica por separado de remark-shiki-twoslash
                  newResults as any,
                  {}
                )

                const results = document.getElementById("twoslash-results")!

                document.getElementById("twoslash-failure")!.style.display =
                  "none"
                document.getElementById("twoslash-results")!.innerHTML = html

                // Quitar a todos los hijos
                while (results.firstChild) {
                  results.removeChild(results.firstChild)
                }

                const p = document.createElement("p")
                p.innerText = newResults.extension
                p.className = "extension"

                const code = document.createElement("div")
                code.innerHTML = html

                const a = document.createElement("a")
                a.innerText = "Playground"
                a.href = newResults.playgroundURL

                results.appendChild(p)
                results.appendChild(code)
                results.appendChild(a)
              } catch (error) {
                const err = error as Error
                const failure = document.getElementById("twoslash-failure")

                if (!failure) return
                failure.style.display = "block"

                while (failure.firstChild) {
                  failure.removeChild(failure.firstChild)
                }

                const content = document.createElement("div")
                content.className = "err-content"

                const header = document.createElement("h3")
                header.textContent = "Exception Raised"

                const text = document.createElement("p")
                const opener = err.name.startsWith("Error")
                  ? err.name.split("Error")[1]
                  : err.name
                text.textContent = opener + err.message.split("## Code")[0]

                content.appendChild(header)
                content.appendChild(text)
                failure.appendChild(content)

                console.log(error)
              }
            }

            const debouncedTwoslash = debounce(runTwoslash, 500)
            sandbox.editor.onDidChangeModelContent(debouncedTwoslash)
            runTwoslash()

            setTimeout(() => {
              document
                .querySelectorAll("#example-buttons .disabled")
                .forEach(button => {
                  button.classList.remove("disabled")
                })

              document.querySelectorAll(".html-code").forEach(codeElement => {
                sandbox.monaco.editor
                  .colorize(codeElement.textContent || "", "html", {
                    tabSize: 2,
                  })
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
          })
        }
      )
    }

    document.body.appendChild(getLoaderScript)
  }, [])

  return (
    <>
      <Layout
        title="Desarrolladores - Ejemplos de código Twoslash"
        description="Más información sobre la biblioteca de código de ejemplo TypeScript twoslash. Se utiliza para transpilar, proporcionando desplazamiento a los identificadores y estados de error controlados por el compilador."
        lang="es"
      >
        <div id="dev">
          <DevNav active="twoslash" />
          <div className="raised content main-content-block">
            <div className="split-fifty">
              <div>
                <h1 style={{ marginTop: "20px" }}>TypeScript Twoslash</h1>
                <p>
                  Un formato de marcado para código TypeScript, ideal para crear
                  ejemplos de código independientes que permiten al compilador de TypeScript
                  hacer trabajo de piernas extra.
                </p>
                <p>Si conoces TypeScript, básicamente sabes twoslash.</p>
                <p>
                  Twoslash agrega la capacidad de declarar las opciones de tsconfig en línea,
                  dividir un ejemplo en varios archivos y algunos otros útiles
                  comandos. Puedes ver la API completa{" "}
                  <a href="https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher">
                    dentro del README
                  </a>
                </p>
              </div>
              <div style={{ paddingTop: "4.5rem" }}>
                <p>El lenguaje de marcado Twoslash ayuda a:</p>
                <ul>
                  <li>
                    Hacer cumplir errores precisos de un ejemplo de código TypeScript, y
                    dejar la mensajería al compilador
                  </li>
                  <li>Dividir un ejemplo de código para ocultar el código que distrae</li>
                  <li>
                    Resaltar símbolos declarativamente en tu código de ejemplo
                  </li>
                  <li>
                    Reemplazar código con los resultados de la transpilación a
                    diferentes archivos o archivos auxiliares, tal como archivos .d.ts o .map
                  </li>
                  <li>Manejar importaciones de múltiples archivos en un solo ejemplo de código</li>
                  <li>Crear un enlace a playground para el código</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="raised content main-content-block"
            style={{ maxWidth: "90%" }}
          >
            <div className="fivehundred" style={{ flex: 1 }}>
              <SuppressWhenTouch>
                <h3 style={{ marginTop: "0" }}>Marcado</h3>
                <p id="exampleBlurb">{codeSamples[0].blurb}</p>
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
                  style={{ height: "300px", display: "none" }}
                  id="monaco-editor-embed"
                />
                <div id="example-buttons">
                  {codeSamples.map(code => {
                    const setExample = e => {
                      if (e.target.classList.contains("disabled")) return

                      document.getElementById("exampleBlurb")!.innerText =
                        code.blurb
                      // @ts-ignore
                      window.sandbox.setText(code.code)
                    }
                    return (
                      <div className="button disabled" onClick={setExample}>
                        {code.name}
                      </div>
                    )
                  })}
                </div>
              </SuppressWhenTouch>
            </div>

            <div
              style={{
                paddingLeft: "20px",
                borderLeft: "1px solid gray",
                position: "relative",
                flex: 1,
                overflow: "auto",
              }}
            >
              <SuppressWhenTouch>
                <h3 style={{ marginTop: "0" }}>Resultado</h3>

                <div id="twoslash-results" />
                <div id="twoslash-failure" />
              </SuppressWhenTouch>
            </div>
          </div>

          <div className="raised main-content-block">
            <h2>Uso</h2>
            <p>
              La guía de uso de Twoslash está disponible en npm README en{" "}
              <a href="https://www.npmjs.com/package/@typescript/twoslash">
                <code>@typescript/twoslash</code>
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

// prettier-ignore
const codeSamples = [
  {
    name: "Highlights runtime types",
    blurb: "Ve cómo TS Twoslash tomará la información destacada para los identificadores en tu código",
    code: `// @errors: 2532
declare const quantumString: string | undefined;

// En este momento, esta cadena se encuentra en dos estados, pasa el cursor por debajo para ver
quantumString
  
if (quantumString) {
  // Sin embargo, aquí ahora tenemos un tipo diferente
  // puedes verificar pasando el cursor debajo
  quantumString.length;
}
    `
  },
  {
    name: "Show Errors",
    blurb: "Twoslash ayudará a resaltar los mensajes de error del compilador",
    code: `// @errors: 7006
function fn(s) {
  console.log(s.subtr(3))
}

fn(42)`
  }, {
    name: "Set Compiler Flags",
    blurb: "Puedes definir indicadores del compilador en línea en un código de ejemplo que se elimina de la salida",
    code: `// @noImplicitAny: false
// Esto no lanzará debido al noImplicitAny
function fn(s) {
  console.log(s.subtr(3))
}

fn(42);`
  }, {
    name: "Trims code",
    blurb: "Puedes escribir código para ayudarlo a compilar en el ejemplo que está oculto en la salida",
    code: `interface IdLabel {id: number, /* algunos campos */ }
interface NameLabel {name: string, /* otros campos */
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
// Este comentario no se debe incluir

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"
}

let a = createLabel("typescript");`
  },
  {
    name: "Show the JS",
    blurb: "Usa @showEmit para mostrar los archivos JS",
    code: `// @showEmit
export function getStringLength(value: string) {
  return value
}
`},
  {
    name: "Show the DTS",
    blurb: "Usa @showEmittedFile para configurar el archivo d.ts para que sea el código de resultado",
    code: `// @declaration: true
// @showEmit
// @showEmittedFile: index.d.ts
/**
 * Obtiene la longitud de una cadena
 * @param valor una cadena
 */
export function getStringLength(value: string) {
  return value
}
`},
  {
    name: "Highlights",
    blurb: "Resaltar algún código en el editor",
    code: `function greet(person: string, date: Date) {
  console.log(\`Hola \${person}, hoy es \${date.toDateString()}!\`);
}

greet("Maddison", new Date());
//                ^^^^^^^^^^
`
  }
]
