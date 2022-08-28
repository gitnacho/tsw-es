import type { PlaygroundPlugin, PluginUtils } from "./vendor/playground"

const makePlugin = (utils: PluginUtils) => {
  const customPlugin: PlaygroundPlugin = {
    id: "example",
    displayName: "Dev Example",
    didMount: (sandbox, container) => {
      console.log("Showing new plugin")

      // Crea un objeto de sistema de diseño para manejar la hechura de elementos
      // DOM que se ajusten al patio de recreo (y manejen móvil/claro/oscuro, etc.)
      const ds = utils.createDesignSystem(container)

      ds.title("Example Plugin")
      ds.p("This plugin has a button which changes the text in the editor, click below to test it")

      const startButton = document.createElement("input")
      startButton.type = "button"
      startButton.value = "Change the code in the editor"
      container.appendChild(startButton)

      startButton.onclick = () => {
        sandbox.setText("// You clicked the button!")
      }
    },

    // Esto se llama ocasionalmente ya que el texto cambia en monaco,
    // no asigna directamente 1 tecla arriba para ejecutar una vez la función
    // porque se llama intencionalmente como máximo una vez cada 0.3 segundos
    // y luego siempre se ejecutará al final.
    modelChangedDebounce: async (_sandbox, _model) => {
      // Trabaja un poco con el nuevo texto
    },

    // Le da la oportunidad de eliminar cualquier cosa instalada,
    // el contenedor en sí mismo si se limpia de hijos después de esto.
    didUnmount: () => {
      console.log("De-focusing plugin")
    },
  }

  return customPlugin
}

export default makePlugin
