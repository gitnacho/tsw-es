type Sandbox = import("@typescript/sandbox").Sandbox
type Factory = import("../../../../static/js/playground").PluginFactory
type PluginUtils = import("../../../../static/js/playground").PluginUtils

const intro = `
El error workbench utiliza <a href='https://www.npmjs.com/package/@typescript/twoslash'>Twoslash</a> para ayudarte a crear informes de error precisos. 
Twoslash es un formato de marcado para archivos TypeScript que te permite resaltar código, manejar varios archivos y
muestra los archivos que crea el compilador de TypeScript.
`.trim()

const why = `
El banco de trabajo de errores te permite hacer reproducciones de errores que son triviales para verificar con muchas versiones diferentes de TypeScript a lo largo del tiempo.
`.trim()

const how = `
Una reproducción puede resaltar un problema de varias maneras:
<ul>
  <li>¿Este ejemplo de código no se compila?</li>
  <li>¿Hay un tipo incorrecto en una posición del archivo?</li>
  <li>¿Es incorrecto el archivo .js/.d.ts/.map?</li>
</ul>
`.trim()

const cta = `
Para conocer las herramientas para hacer una reproducción, ve a "Docs"

`.trim()

export const workbenchHelpPlugin: Factory = (i, utils) => {
  return {
    id: "about",
    displayName: "About",
    didMount: (sandbox, container) => {
      const ds = utils.createDesignSystem(container)

      ds.title("Twoslash Overview")
      ds.p(intro)

      ds.p(why)
      ds.p(how)
      ds.p(cta)
    },
  }
}
