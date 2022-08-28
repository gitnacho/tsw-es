type TwoSlashReturns = import("@typescript/twoslash").TwoSlashReturn
type PluginFactory = import("../../../../static/js/playground").PluginFactory

export const workbenchDebugPlugin: PluginFactory = (i, utils) => {
  let pluginContainer: HTMLDivElement

  return {
    id: "results",
    displayName: "Debug",
    didMount: (_sandbox, container) => {
      pluginContainer = container
    },
    noResults: () => {
      const ds = utils.createDesignSystem(pluginContainer)
      ds.clear()

      ds.p("No results")
    },
    getResults: (
      _sandbox: any,
      results: TwoSlashReturns,
      dtsMap: Map<string, string>
    ) => {
      const ds = utils.createDesignSystem(pluginContainer)
      ds.clear()

      ds.p(
        "Esta pestaña muestra los datos sin procesar que se remontan a Twoslash. Esto puede ser útil en la depuración si algo no funciona como era de esperar. Dicho esto, si estás luchando con una repro - Pregunta en el canal <a href='https://discord.gg/typescript'>#compiler-api  de TypeScript en Discord</a>."
      )

      ds.subtitle(`Output Code as ${results.extension}`)
      ds.code(results.code)

      // @ts-ignore
      results.staticQuickInfos = ["..."]

      ds.subtitle(`Twoslash JSON`)
      ds.code(JSON.stringify(results, null, "  "))

      ds.subtitle("Virtual File System")

      const files = Array.from(dtsMap.keys()).reverse()
      const dtsFiles: string[] = []
      files.forEach(filename => {
        if (filename.startsWith("/lib.")) {
          dtsFiles.push(filename.replace("/lib", "lib"))
        } else {
          ds.p("<strong>" + filename + "</strong>")
          ds.code(dtsMap.get(filename)!.trim())
        }
      })
      ds.subtitle("Lib files")
      ds.p(dtsFiles.join(", "))
    },
  }
}
