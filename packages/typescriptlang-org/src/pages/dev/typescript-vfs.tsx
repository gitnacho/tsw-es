import * as React from "react"
import { Layout } from "../../components/layout"
import { withPrefix, graphql, Link } from "gatsby"

import "./dev.scss"
import { Intl } from "../../components/Intl"
import { DevNav } from "../../components/devNav"

type Props = {}

const Index: React.FC<Props> = (props) => {
  return (
    <>
      <Layout title="Desarrolladores - TypeScript VFS" description="Ejecuta TypeScript en el navegador, o en cualquier lugar - utilizando un sistema de archivos virtual" lang="en">
        <div id="dev">
          <DevNav active="typescript vfs" />
          <div className="raised content main-content-block">
            <div className="split-fivehundred">
              <h1 style={{ marginTop: "20px" }}>Fácil acceso a la API del compilador</h1>
              <p>TypeScript VFS te permite crear un entorno de TypeScript autónomo completamente bajo tu control. Esta biblioteca se utiliza para potenciar Playground y proporciona las herramientas subyacentes para ejemplos de código<Link to="/dev/twoslash">twoslash</Link>.</p>
              <p>Hay 3 usos principales para TypeScript VFS:</p>
              <ul>
                <li>Creación de un programa TypeScript como punto de entrada a la API del compilador</li>
                <li>Ejecutar TypeScript para emitir archivos como <code>*.js</code>, <code>*.d.ts</code> o <code>*.map</code></li>
                <li>Utilizar el servicio de lenguaje de TypeScript para realizar las mismas llamadas que haría un editor</li>
              </ul>
              <p>Puedes obtener más información en <a href="https://github.com/microsoft/TypeScript-Website/blob/v2/packages/typescript-vfs/">TypeScript VFS README</a></p >
            </div>

            <div className="fivehundred" style={{ borderLeft: "1px solid gray", padding: "20px" }}>
              <h3>Configuración con TypeScript desde node_modules</h3>
              <pre tabIndex={0}><code className="html-code">{`import ts from 'typescript'
import tsvfs from '@typescript/vfs'

const fsMap = tsvfs.createDefaultMapFromNodeModules({ target: ts.ScriptTarget.ES2015 })
fsMap.set('index.ts', 'console.log("Hola mundo")')

// ....
              `}</code></pre>

              <h3>Usa el CDN de TypeScript para obtener tus archivos lib.d.ts</h3>
              <pre tabIndex={0}><code className="html-code">{`import ts from 'typescript'
import tsvfs from '@typescript/vfs'

const fsMap = await tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts)
fsMap.set('index.ts', 'console.log("Hola mundo")')

const system = tsvfs.createSystem(fsMap)
const host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts)

const program = ts.createProgram({
  rootNames: [...fsMap.keys()],
  options: compilerOptions,
  host: host.compilerHost,
})

// Esto actualizará el fsMap con nuevos archivos.
// para los archivos .d.ts y .js
program.emit()

// Ahora puedo mirar el AST por el archivo .ts también
const index = program.getSourceFile('index.ts')
              `}</code></pre>
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}

export default (props: Props) => <Intl locale="en"><Index {...props} /></Intl>
