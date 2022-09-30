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
      <Layout title="Desarrolladores - Complementos de Playground" description="¿Qué es un complemento TypeScript de Playground y cómo puedes crear uno?" lang="es">
        <div id="dev">
          <DevNav active="playground plugins" />
          <div className="raised content main-content-block">
            <div className="split-fivehundred">
              <h1 style={{ marginTop: "20px" }}>Tus juguetes, nuestro arenero</h1>
              <p>El nuevo Playground de TypeScript permite a las personas conectarse al Playground y ampliarlo de formas que el equipo de TypeScript no espera.</p>
              <p>La barra lateral de Playground utiliza la misma infraestructura de complementos que los complementos externos, por lo que tiene el mismo nivel de acceso que Playground para crear interesantes proyectos.</p>
              <p>Los complementos de Playground se crean a través de la API DOM y un sistema de diseño expansivo, sin embargo, puedes usar un marco como React o Svelte en el entorno de ejecución.</p>
              <p>&nbsp;</p>
              <p>Comenzar es fácil, tenemos una plantilla de complemento y Playground tiene un modo de desarrollo para conectarse directamente a tu servidor local, por lo que no necesitas ejecutar una copia del sitio web de TypeScript para tener un entorno de desarrollo funcional.</p>
              <p>Hay un repositorio de complementos de muestra en <a href="https://github.com/microsoft/TypeScript-Playground-Samples/">microsoft/TypeScript-Playground-Samples</a> y existen muchos Complementos de código abierto para mirar también: <a href="https://github.com/orta/playground-slides">Presentation Mode</a>, <a href="https://github.com/orta/playground-clippy#playground-plugin-clippy">Clippy</a> <a href="https://github.com/orta/playground-plugin-tsquery">TSQuery</a>, <a href="https://github.com/orta/playground-collaborate#typescript-playground-collaborate">Collaborate</a> and <a href="https://github.com/orta/playground-transformer-timeline">Transformer</a> which are available by default for you to investigate and understand.</p>
              <p>Si tienes preguntas mientras trabajas en tu complemento, pregunta en el <a href='https://discord.gg/typescript'>Discord de la comunidad TypeScript</a>. Cuando esté pulido, envíalo al registro npm y llegará a la barra lateral de complementos.</p>
            </div>

            <div className="fivehundred" style={{ borderLeft: "1px solid gray" }}>
              <img src={require("../../assets/playground-plugin-preview.png").default} width="100%" alt="Captura de pantalla del playground que muestra la pestaña de complementos" />
            </div>
          </div>

          <div className="raised main-content-block">
            <h2>Tutorial rápido</h2>
            <p>Necesitas unos 5 minutos, Node.js, yarn y Firefox/Edge o Chrome.</p>
            <p><b>Paso 1</b>: Utiliza la plantilla para arrancar: <code>yarn create typescript-playground-plugin playground-my-plugin</code></p>
            <p><b>Paso 2</b>: Ejecuta <code>yarn start</code> en el nuevo repositorio, para iniciar el servidor de desarrollo local</p>
            <p><b>Paso 3</b>: Abre el <a href={withPrefix("/play/")}>playground</a> en tu navegador, haz clic en "Opciones" y habilita <code>"Connect to localhost:5000/index.js"</code></p>
            <p><b>Paso 4</b>: Actualiza, y ve la nueva pestaña. Ese es tu complemento en funcionamiento</p>
            <p>&nbsp;</p>
            <p>Todas las piezas funcionan en conjunto, ahora puedes realizar cambios en la plantilla y crear tu complemento. El complemento en modo dev siempre se destacará cuando esté conectado, por lo que puedes volver a cargar sin muchos clics. Para comprender la tecnología de la plantilla, lee <a href='https://github.com/microsoft/TypeScript-Website/blob/v2/packages/create-typescript-playground-plugin/template/CONTRIBUTING.md'>CONTRIBUTING.md</a></p>

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
