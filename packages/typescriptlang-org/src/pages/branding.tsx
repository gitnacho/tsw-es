import * as React from "react"
import { Layout } from "../components/layout"
import { withPrefix } from "gatsby"

import { Intl } from "../components/Intl"

import "./branding.scss"

type Props = {}

const Row = (props: { children: any, className?: string }) => <div className={[props.className, "row"].join(" ")}>{props.children}</div>

const Index: React.FC<Props> = (props) => {
  return (
    <>
      <Layout title="Branding" description="Logos y activos de diseño" lang="es" >
        <div id="branding">
          <h1>Marca</h1>
          <h2 className="subnav">Logotipos y elementos de diseño para TypeScript</h2>

          <div className="raised content main-content-block headline">
            <a href={withPrefix("/branding/typescript-design-assets.zip")}>
              <img src={withPrefix("images/branding/logo-grouping.svg")} style={{ maxWidth: "100%" }} alt="Logos de ejemplo" />
              <p style={{ textAlign: "center" }}>Haz clic para descargar el paquete de recursos</p>
            </a>
          </div>

          <h2>Recomendaciones</h2>

          <Row className="main-content-block recommendations">
            <p style={{ flex: 1 }}>Por favor, utiliza la marca azul de TypeScript de arriba como logotipo principal de TypeScript.</p>
            <p style={{ flex: 1 }}>Este es el logotipo adecuado para publicaciones de blog, artículos de noticias, calcomanías de obsequio y marketing general para ti.</p>
            <p style={{ flex: 1 }}>Las siglas "TS" en el logo, de manera predeterminada, son blancas, no transparentes.</p>
            <p style={{ flex: 1 }}>Hay una "S" mayúscula en TypeScript, al igual que en JavaScript.</p>
          </Row>

          <h2>Alternativas</h2>

          <div className="main-content-block">
            <Row>
              <div className="raised content main-content-block subheadline">
                <a href={withPrefix("/branding/typescript-design-assets.zip")} title="Descarga los recursos de diseño">
                  <img src={withPrefix("images/branding/two-colors.svg")} style={{ maxWidth: "100%", margin: "2rem 0" }} alt="Ejemplos de los logotipos como colores únicos" />
                </a>
                <p className="attached-bottom">Variante de un solo color que tiene el "TS" recortado, útil cuando necesitas un diseño de un solo color.</p>
              </div>

              <div className="raised content main-content-block subheadline">
                <a href={withPrefix("/branding/typescript-design-assets.zip")} title="Descarga los recursos de diseño">
                  <img src={withPrefix("images/branding/two-longform.svg")} style={{ maxWidth: "100%", margin: "2rem 0" }} alt="Ejemplos de los logos en formato grande. p.ej. diciendo 'TypeScript' y no solo 'TS'"/>
                </a>
                <p className="attached-bottom">Versión completa con letras del logotipo TypeScript. </p>
              </div>
            </Row>
          </div>

          <h2>Paleta</h2>

          <div className="raised content main-content-block headline">
            <a href={withPrefix("/branding/typescript-design-assets.zip")} title="Descarga los recursos de diseño">
              <img src={withPrefix("images/branding/palette.svg")} style={{ maxWidth: "100%" }} alt="Ejemplos de la paleta, puedes obtener esto en ASCII dentro de los activos de diseño" />
            </a>
          </div>

          <div className="raised content main-content-block headline">
            <a href={withPrefix("/branding/typescript-design-assets.zip")} title="Descarga los recursos de diseño">
              <img src={withPrefix("images/branding/palette-bg.svg")} style={{ maxWidth: "100%" }} alt="Ejemplos de la paleta, puedes obtener esto en ASCII dentro de los recursos de diseño" />
            </a>
          </div>


          <h2>Por favor, no</h2>

          <Row className="main-content-block recommendations">
            <p style={{ flex: 1 }}>Utilices los logotipos de TypeScript para tu aplicación/producto.</p>
            <p style={{ flex: 1 }}>Modifiques la forma de los logotipos cuando los uses.</p>
            <p style={{ flex: 1 }}>Integres el logotipo de TypeScript en el logotipo de tu aplicación.</p>
            <p style={{ flex: 1 }}>Nombres un producto que implique el respaldo de TypeScript al producto.</p>
          </Row>
        </div>
      </Layout>
    </>
  )
}

export default (props: Props) => <Intl locale="en"><Index {...props} /></Intl>

