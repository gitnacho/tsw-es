import React, { useEffect } from "react"
import { Layout } from "../components/layout"

import "./play.scss"

import { useIntl } from "react-intl";
import { createInternational } from "../lib/createInternational"
import { headCopy } from "../copy/en/head-seo"
import { Intl } from "../components/Intl"
import { withPrefix } from "gatsby";

type Props = {
  pageContext: {
    lang: string
    html: string
    name: string
    title: string
    redirectHref: string
  }
}

const Play = (props: Props) => {
  const i = createInternational<typeof headCopy>(useIntl())
  useEffect(() => {
    // Mantén esta página disponible para que esté indexada en los motores de búsqueda.
    const isBot = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)
    if (!isBot) {
      // de  TypeScript  @ts-ignore  - esto está permitido en el DOM
      document.location = withPrefix(props.pageContext.redirectHref)
    }
  }, [])

  return (
    <Layout title={"TSConfig Option: " + props.pageContext.title} description="Cómo afecta esta configuración a tu compilación." lang={props.pageContext.lang}>
      <div className="raised main-content-block markdown">
        <h1 style={{ display: "none" }}>TSConfig</h1>
        <h2>{props.pageContext.title}</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px" }}>
          <p dangerouslySetInnerHTML={{ __html: props.pageContext.html! }} />
        </div>
      </div>
    </Layout>
  )
}



export default (props: Props) => <Intl locale={props.pageContext.lang}><Play {...props} /></Intl>
