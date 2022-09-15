import * as React from "react"
import { Layout } from "../../components/layout"
import { Intl } from "../../components/Intl"

type Props = {
  pageContext: any
}

import "./css/tools.scss"
import { createIntlLink } from "../../components/IntlLink"
import { DevNav } from "../../components/devNav"

const Row = (props: { children: any, className?: string }) => <div className={[props.className, "row"].join(" ")}>{props.children}</div>
const Col = (props: { children: any, className?: string }) => <div className={[props.className, "col1"].join(" ")}>{props.children}</div>


const Index: React.FC<Props> = (props) => {
  const Link = createIntlLink(props.pageContext.lang)

  return <Layout title="Herramientas de referencia" description="Herramientas en línea para ayudarte a comprender TypeScript" lang={props.pageContext.lang}>
    <div className="raised main-content-block">
      <Row>
        <Col>
          <a className="cropper" href="/play">
            <img src={require("../../../static/images/tools/play.png").default} alt="Vista previa del  Playground de TypeScript" />
            <p>Playground</p>
          </a>
          <p>Un entorno en vivo para explorar, aprender y compartir código TypeScript. Prueba diferentes banderas del compilador, ejecuta extensos ejemplos de código para obtener información específica sobre cómo funciona TypeScript.</p>
        </Col>
        <Col>
          <Link className="cropper" to="/tsconfig">
            <img src={require("../../../static/images/tools/tsconfig-ref.png").default} alt="Vista previa de la captura de pantalla de referencia de TypeScript TSConfig" />
            <p>Referencia de TSConfig</p>
          </Link>
          <p>Una referencia comentada a más de cien opciones del compilador disponibles en un <code>tsconfig.json</code> o <code>jsconfig.json</code>.</p>
        </Col>
      </Row>
      <Row>
      <Col>
          <a className="cropper" href="/cheatsheets">
            <img src={require("../../../static/images/tools/cheat-sheets.png").default} alt="Vista previa de la página de hojas de referencia" />
            <p>Hojas de referencia</p>
          </a>
          <p>Encuentra rápidamente la sintaxis del código TypeScript común.</p>
        </Col>

        <Col>
          <a className="cropper" href="/dt/search">
            <img src={require("../../../static/images/tools/dt-search.png").default} alt="Vista previa de la búsqueda Definitely Typed" />
            <p>Buscar Type</p>
          </a>
          <p>Busca módulos npm con tipos de DefinitelyTyped o incrustados en el módulo.</p>
        </Col>
      </Row>
    </div>

    <div className="raised main-content-block" style={{ paddingBottom: "0.4rem" }}>
      <DevNav />
    </div>
  </Layout>

}

export default (props: Props) => <Intl locale={props.pageContext.lang}><Index {...props} /></Intl>
