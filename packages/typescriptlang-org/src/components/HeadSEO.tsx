import * as React from "react"
import { Helmet } from "react-helmet";

export type SeoProps = {
  title: string
  description: string
  ogTags?: { [key: string]: string }
}

export const HeadSEO = (props: SeoProps) => {

  const ogTags = {
    ...props.ogTags,
    "og:title": props.title,
    "og:description": props.description,
    "twitter:site": "typescriptlang",
  }

  // Omite la indexación del motor de búsqueda en el sitio de prueba, esto se cambia ejecutando:
  // yarn workspace typescriptlang-org setup-staging
  const staging = false;

  // ¿Queremos que las páginas localizadas sean la versión en inglés?
  //{seo.url && <meta property="og:url" content={seo.url} />}

  // TODO: Muchas páginas deberían tener esto.
  // <meta property="og:type" content="article" />

  // TODO: Tal vez en prod podamos generar una imagen para cada archivo
  // <meta name="image" content={seo.image} />

  return (
    <>
      <Helmet title={props.title} titleTemplate={"TypeScript: %s"}>
        <meta name="description" key="description" content={props.description} />
        { staging ? <meta name="robots" content="noindex" />: null }
        {
          Object.keys(ogTags).map(k => <meta key={k} property={k} content={ogTags[k]} />)
        }
      </Helmet>
    </>
  )
}
