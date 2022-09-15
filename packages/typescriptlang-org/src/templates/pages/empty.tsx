import * as React from "react"
import { Layout } from "../../components/layout"
import { Intl } from "../../components/Intl"

type Props = {
  pageContext: any
}

const Index: React.FC<Props> = (props) =>
  <Layout title="NO-OP" description="Esta página se dejó vacía intencionalmente" lang={props.pageContext.lang}>
    <div className="raised main-content-block">
      <p>Esta página se dejó vacía intencionalmente</p>
    </div>
  </Layout>


export default (props: Props) => <Intl locale={props.pageContext.lang}><Index {...props} /></Intl>
