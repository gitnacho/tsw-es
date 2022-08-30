import path from "path"
import fs from "fs"
const { green } = require("chalk")

import { NodePluginArgs, CreatePagesArgs } from "gatsby"
import { recursiveReadDirSync } from "../../utils/recursiveReadDirSync"
import { isMultiLingual } from "./languageFilter"
import { addPathToSite } from "../pathsOnSiteTracker"

/**
 * Básicamente, puedes tener un conjunto de archivos en src/templates/pages
 * y haremos una versión con prefijo de idioma cuando haya idiomas
 * en el directorio copy.
 */

export const createRootPagesLocalized = async (
  graphql: CreatePagesArgs["graphql"],
  createPage: NodePluginArgs["actions"]["createPage"]
) => {
  console.log(`${green("success")} Creating Internationalized Pages`)

  // prettier-ignore
  const rootPagesDir = path.join(__dirname, "..", "..", "..", "src", "templates", "pages")
  const languageRootDir = path.join(__dirname, "..", "..", "..", "src", "copy")

  const langs = fs
    .readdirSync(languageRootDir)
    .filter(
      f =>
        !(
          f.endsWith(".ts") ||
          f.endsWith(".ts") ||
          f.endsWith(".md") ||
          f.startsWith(".")
        )
    )

  const files = recursiveReadDirSync(rootPagesDir)
    .filter(f => !f.startsWith(".")) // solo archivos útiles
    .filter(f => !f.includes("dev") && !f.includes("css")) // salta estos

  files.forEach(f => {
    const fullpath = path
      .join(__dirname, "..", "..", "..", "..", f)
      .replace("..//", "../")
    let originalSitePath = path
      .relative(rootPagesDir, fullpath)
      .replace(/.tsx$/g, "")

    // Elimina los archivos index
    if (originalSitePath.endsWith("index")) {
      // prettier-ignore
      originalSitePath = originalSitePath.substring(0, originalSitePath.length - 5)
    }
    // Si tienen .en, simplemente los suelta por completo.
    if (originalSitePath.endsWith(".en")) {
      // prettier-ignore
      originalSitePath = originalSitePath.substring(0, originalSitePath.length - 3)
    }

    // Siempre utiliza /s para la ruta, porque la combinación anterior en Windows sería \
    originalSitePath = originalSitePath.split("\\").join("/")

    langs.forEach(lang => {
      if (!isMultiLingual && lang !== "en") return

      const prefix = lang === "en" ? "/" : `/${lang}/`
      const sitePath = `${prefix}${originalSitePath}`
      const pageOpts = {
        path: sitePath,
        component: fullpath,
        context: {
          lang: lang === "" ? "en" : lang,
        },
      }

      addPathToSite(sitePath)
      createPage(pageOpts)
    })
  })
}
