import { PlaygroundPlugin, PluginFactory } from ".."
import type { IDisposable } from "monaco-editor"

export const showASTPlugin: PluginFactory = (i, utils) => {
  let container: HTMLElement
  let ast: HTMLElement
  let disposable: IDisposable | undefined

  const plugin: PlaygroundPlugin = {
    id: "ast",
    displayName: "AST",
    willMount: (_, _container) => {
      container = _container
    },
    didMount: (sandbox, container) => {
      // Si bien este complemento está a la vanguardia, mantiene sincronizados los cambios del cursor con la selección AST

      disposable = sandbox.editor.onDidChangeCursorPosition(e => {
        const cursorPos = sandbox.getModel().getOffsetAt(e.position)
        const allTreeStarts = (container.querySelectorAll("div.ast-tree-start") as any) as HTMLDivElement[]

        let deepestElement: HTMLDivElement = null as any

        allTreeStarts.forEach(e => {
          // Primero cierra todos, porque estamos a punto de abrirlos después
          e.classList.remove("open")

          // Encuentra el elemento más profundo del conjunto y lo abre.
          const { pos, end, depth } = e.dataset as { pos: string; end: string; depth: string }
          const nPos = Number(pos)
          const nEnd = Number(end)

          if (cursorPos > nPos && cursorPos <= nEnd) {
            if (deepestElement) {
              const currentDepth = Number(deepestElement!.dataset.depth)
              if (currentDepth < Number(depth)) {
                deepestElement = e
              }
            } else {
              deepestElement = e
            }
          }
        })

        // Toma ese elemento, lo abre, luego revisa sus ancestros hasta que todos estén abiertos.
        let openUpElement: HTMLDivElement | null | undefined = deepestElement
        while (openUpElement) {
          openUpElement.classList.add("open")
          openUpElement = openUpElement.parentElement?.closest(".ast-tree-start")
        }

        // Se desplaza y parpadea para que la gente vea lo que está sucediendo
        deepestElement.scrollIntoView({ block: "nearest", behavior: "smooth" })
        utils.flashHTMLElement(deepestElement)
      })
    },
    modelChangedDebounce: sandbox => {
      const ds = utils.createDesignSystem(container)
      ds.clear()
      ds.title("AST")

      sandbox.getAST().then(tree => {
        ast = ds.createASTTree(tree)
      })
    },
    didUnmount: () => {
      disposable && disposable.dispose()
    },
  }

  return plugin
}
