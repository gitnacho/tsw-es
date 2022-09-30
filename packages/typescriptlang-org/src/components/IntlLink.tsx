import * as React from "react"
import { GatsbyLinkProps, Link } from "gatsby"
import { allFiles } from "../__generated__/allPages"

/** 
 * Crea un <Link> que admite la migración gradual, proporciona un enlace a la página en inglés y
 * si la página soporta la misma versión pero en tu idioma, opta por esa.
 */
export const createIntlLink = (currentLocale: string) => {
  const paths = allFiles

  return (linkProps: GatsbyLinkProps<{}>) => {
    let to = linkProps.to

    // /thing -> /ja/thing
    // Esto ocurre cuando queremos que el URL sea compatible con el sitio anterior

    const localeVersion = "/" + currentLocale + to
    if (currentLocale !== "en" && paths.includes(localeVersion)) {
      to = localeVersion
    }

    // Esto también se debe duplicar en gatsby-config.js
    const blocklistIncludes = ["/play", "sandbox", "/dev"]
    const blocklisted = blocklistIncludes.find(blocked => to.includes(blocked))

    if (blocklisted) {
      // @ts-ignore
      return <a {...linkProps} href={to} />
    } else {
      // @ts-ignore
      return <Link {...linkProps} to={to} />
    }
  }
}


