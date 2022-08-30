import * as React from "react"
import { Layout } from "../../components/layout"
import { withPrefix, graphql } from "gatsby"

import "./dev.scss"
import { Intl } from "../../components/Intl"
import { DevNav } from "../../components/devNav"

type Props = {}

const Index: React.FC<Props> = (props) => {
  return (
    <>
      <Layout title="Developers - Playground Plugins" description="What is a TypeScript Playground Plugin, and how can you make one?" lang="en">
        <div id="dev">
          <DevNav active="playground plugins" />
          <div className="raised content main-content-block">
            <div className="split-fivehundred">
              <h1 style={{ marginTop: "20px" }}>Your toys, our sandbox</h1>
              <p>The new TypeScript Playground allows people to hook into the Playground and extend it in ways in which the TypeScript team don't expect.</p>
              <p>The sidebar of the Playground uses the same plugin infrastructure as external plugins, so you have the same level of access as the playground to build interesting projects.</p>
              <p>Playground plugins are built via the DOM API and an expansive Design System, however, you're free to use a framework like React or Svelte at runtime.</p>
              <p>&nbsp;</p>
              <p>Getting started is easy, we have a plugin template, and the Playground has a dev-mode for hooking directly to your local server, so you don't need to run a copy of the TypeScript website to have a working development environment.</p>
              <p>There is a repo of sample plugins at <a href="https://github.com/microsoft/TypeScript-Playground-Samples/">microsoft/TypeScript-Playground-Samples</a> and there are many existing open source plugins to look at too: <a href="https://github.com/orta/playground-slides">Presentation Mode</a>, <a href="https://github.com/orta/playground-clippy#playground-plugin-clippy">Clippy</a> <a href="https://github.com/orta/playground-plugin-tsquery">TSQuery</a>, <a href="https://github.com/orta/playground-collaborate#typescript-playground-collaborate">Collaborate</a> and <a href="https://github.com/orta/playground-transformer-timeline">Transformer</a> which are available by default for you to investigate and understand.</p>
              <p>If you have questions as you are working on your plugin, ask in the <a href='https://discord.gg/typescript'>TypeScript Community Discord</a>. When it is polished, ship it to the npm registry and it will make its way into the plugins sidebar.</p>
            </div>

            <div className="fivehundred" style={{ borderLeft: "1px solid gray" }}>
              <img src={require("../../assets/playground-plugin-preview.png").default} width="100%" alt="Screenshot of the playground showing the plugins tab" />
            </div>
          </div>

          <div className="raised main-content-block">
            <h2>Tutorial rápido</h2>
            <p>Necesitas unos 5 minutos, Node.js, yarn y Firefox/Edge o Chrome.</p>
            <p><b>Paso 1</b>: Utiliza la plantilla para arrancar: <code>yarn create typescript-playground-plugin playground-my-plugin</code></p>
            <p><b>Paso 2</b>: Ejecuta <code>yarn start</code> en el nuevo repositorio, para iniciar el servidor de desarrollo local</p>
            <p><b>Paso 3</b>: Open the <a href={withPrefix("/play/")}>playground</a> in your browser, click "Options" and enable <code>"Connect to localhost:5000/index.js"</code></p>
            <p><b>Paso 4</b>: Actualiza, y ve la nueva pestaña. Ese es tu complemento en funcionamiento</p>
            <p>&nbsp;</p>
            <p>Todas las piezas funcionan en conjunto, ahora puedes realizar cambios en la plantilla y crear tu complemento. The plugin in dev mode will always become forefront when connected, so you can re-load without a lot of clicks. Para comprender la tecnología de la plantilla, lee <a href='https://github.com/microsoft/TypeScript-Website/blob/v2/packages/create-typescript-playground-plugin/template/CONTRIBUTING.md'>CONTRIBUTING.md</a></p>

            <h2>Alternativas</h2>
            <p>Hay plantillas administradas por la comunidad para complementos de Playground que inician tu complemento con bibliotecas de vistas conocidas:</p>
            <ul>
              <li><a href="https://github.com/gojutin/typescript-playground-plugin-react#typescript-playground-plugin-react">gojutin/typescript-playground-plugin-react</a></li>
              <li><a href="https://github.com/gojutin/typescript-playground-plugin-svelte#typescript-playground-plugin-svelte">gojutin/typescript-playground-plugin-svelte</a></li>
            </ul>
            <p>Tienen su propia documentación actualizada en sus archivos README.</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default (props: Props) => <Intl locale="en"><Index {...props} /></Intl>
