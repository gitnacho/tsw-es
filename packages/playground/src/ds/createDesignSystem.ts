import type { Sandbox } from "@typescript/sandbox"
import type { DiagnosticRelatedInformation, Node } from "typescript"

export type LocalStorageOption = {
  blurb: string
  flag: string
  display: string

  emptyImpliesEnabled?: true
  oneline?: true
  requireRestart?: true
  onchange?: (newValue: boolean) => void
}

export type OptionsListConfig = {
  style: "separated" | "rows"
  requireRestart?: true
}

const el = (str: string, elementType: string, container: Element) => {
  const el = document.createElement(elementType)
  el.innerHTML = str
  container.appendChild(el)
  return el
}

export type DesignSystem = ReturnType<ReturnType<typeof createDesignSystem>>

// El sistema de diseño de complementos de playground
export const createDesignSystem = (sandbox: Sandbox) => {
  const ts = sandbox.ts

  return (container: Element) => {
    const clear = () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
    let decorations: string[] = []
    let decorationLock = false

    const clearDeltaDecorators = (force?: true) => {
      // console.log(`clearing, ${decorations.length}}`)
      // console.log(sandbox.editor.getModel()?.getAllDecorations())
      if (force) {
        sandbox.editor.deltaDecorations(decorations, [])
        decorations = []
        decorationLock = false
      } else if (!decorationLock) {
        sandbox.editor.deltaDecorations(decorations, [])
        decorations = []
      }
    }

    /** Deja que un elemento HTML se cierne para resaltar el código en el editor */
    const addEditorHoverToElement = (
      element: HTMLElement,
      pos: { start: number; end: number },
      config: { type: "error" | "info" }
    ) => {
      element.onmouseenter = () => {
        if (!decorationLock) {
          const model = sandbox.getModel()
          const start = model.getPositionAt(pos.start)
          const end = model.getPositionAt(pos.end)

          decorations = sandbox.editor.deltaDecorations(decorations, [
            {
              range: new sandbox.monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),
              options: { inlineClassName: "highlight-" + config.type },
            },
          ])
        }
      }

      element.onmouseleave = () => {
        clearDeltaDecorators()
      }
    }

    const declareRestartRequired = (i?: (key: string) => string) => {
      if (document.getElementById("restart-required")) return
      const localize = i || (window as any).i
      const li = document.createElement("li")
      li.id = "restart-required"

      const a = document.createElement("a")
      a.style.color = "#c63131"
      a.textContent = localize("play_sidebar_options_restart_required")
      a.href = "#"
      a.onclick = () => document.location.reload()

      const nav = document.getElementsByClassName("navbar-right")[0]
      li.appendChild(a)
      nav.insertBefore(li, nav.firstChild)
    }

    const localStorageOption = (setting: LocalStorageOption) => {
      // Piensa en esto como algo que deseas habilitar de manera predeterminada y se puede
      // suprimir si debería hacer algo.
      const invertedLogic = setting.emptyImpliesEnabled

      const li = document.createElement("li")
      const label = document.createElement("label")
      const split = setting.oneline ? "" : "<br/>"
      label.innerHTML = `<span>${setting.display}</span>${split}${setting.blurb}`

      const key = setting.flag
      const input = document.createElement("input")
      input.type = "checkbox"
      input.id = key

      input.checked = invertedLogic ? !localStorage.getItem(key) : !!localStorage.getItem(key)

      input.onchange = () => {
        if (input.checked) {
          if (!invertedLogic) localStorage.setItem(key, "true")
          else localStorage.removeItem(key)
        } else {
          if (invertedLogic) localStorage.setItem(key, "true")
          else localStorage.removeItem(key)
        }

        if (setting.onchange) {
          setting.onchange(!!localStorage.getItem(key))
        }
        if (setting.requireRestart) {
          declareRestartRequired()
        }
      }

      label.htmlFor = input.id

      li.appendChild(input)
      li.appendChild(label)
      container.appendChild(li)
      return li
    }

    const button = (settings: { label: string; onclick?: (ev: MouseEvent) => void }) => {
      const join = document.createElement("input")
      join.type = "button"
      join.value = settings.label
      if (settings.onclick) {
        join.onclick = settings.onclick
      }

      container.appendChild(join)
      return join
    }

    const code = (code: string) => {
      const createCodePre = document.createElement("pre")
      createCodePre.setAttribute("tabindex", "0")
      const codeElement = document.createElement("code")

      codeElement.innerHTML = code

      createCodePre.appendChild(codeElement)
      container.appendChild(createCodePre)

      return codeElement
    }

    const showEmptyScreen = (message: string) => {
      clear()

      const noErrorsMessage = document.createElement("div")
      noErrorsMessage.id = "empty-message-container"

      const messageDiv = document.createElement("div")
      messageDiv.textContent = message
      messageDiv.classList.add("empty-plugin-message")
      noErrorsMessage.appendChild(messageDiv)

      container.appendChild(noErrorsMessage)
      return noErrorsMessage
    }

    const createTabBar = () => {
      const tabBar = document.createElement("div")
      tabBar.classList.add("playground-plugin-tabview")

      /** Soporte a left/right en la barra de pestañas para la accesibilidad */
      let tabFocus = 0
      tabBar.addEventListener("keydown", e => {
        const tabs = tabBar.querySelectorAll('[role="tab"]')
        // Mueve a la derecha
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          tabs[tabFocus].setAttribute("tabindex", "-1")
          if (e.key === "ArrowRight") {
            tabFocus++
            // Si está al final, va al principio
            if (tabFocus >= tabs.length) {
              tabFocus = 0
            }
            // Mueve a la izquierda
          } else if (e.key === "ArrowLeft") {
            tabFocus--
            // Si está al principio, va al final
            if (tabFocus < 0) {
              tabFocus = tabs.length - 1
            }
          }

          tabs[tabFocus].setAttribute("tabindex", "0")
          ;(tabs[tabFocus] as any).focus()
        }
      })

      container.appendChild(tabBar)
      return tabBar
    }

    const createTabButton = (text: string) => {
      const element = document.createElement("button")
      element.setAttribute("role", "tab")
      element.textContent = text
      return element
    }

    const listDiags = (model: import("monaco-editor").editor.ITextModel, diags: DiagnosticRelatedInformation[]) => {
      const errorUL = document.createElement("ul")
      errorUL.className = "compiler-diagnostics"
      errorUL.onmouseleave = ev => {
        clearDeltaDecorators()
      }
      container.appendChild(errorUL)

      diags.forEach(diag => {
        const li = document.createElement("li")
        li.classList.add("diagnostic")
        switch (diag.category) {
          case 0:
            li.classList.add("warning")
            break
          case 1:
            li.classList.add("error")
            break
          case 2:
            li.classList.add("suggestion")
            break
          case 3:
            li.classList.add("message")
            break
        }

        if (typeof diag === "string") {
          li.textContent = diag
        } else {
          li.textContent = sandbox.ts.flattenDiagnosticMessageText(diag.messageText, "\n", 4)
        }
        errorUL.appendChild(li)

        if (diag.start && diag.length) {
          addEditorHoverToElement(li, { start: diag.start, end: diag.start + diag.length }, { type: "error" })
        }

        li.onclick = () => {
          if (diag.start && diag.length) {
            const start = model.getPositionAt(diag.start)
            sandbox.editor.revealLine(start.lineNumber)

            const end = model.getPositionAt(diag.start + diag.length)
            decorations = sandbox.editor.deltaDecorations(decorations, [
              {
                range: new sandbox.monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),
                options: { inlineClassName: "error-highlight", isWholeLine: true },
              },
            ])

            decorationLock = true
            setTimeout(() => {
              decorationLock = false
              sandbox.editor.deltaDecorations(decorations, [])
            }, 300)
          }
        }
      })
      return errorUL
    }

    const showOptionList = (options: LocalStorageOption[], style: OptionsListConfig) => {
      const ol = document.createElement("ol")
      ol.className = style.style === "separated" ? "playground-options" : "playground-options tight"

      options.forEach(option => {
        if (style.style === "rows") option.oneline = true
        if (style.requireRestart) option.requireRestart = true

        const settingButton = localStorageOption(option)
        ol.appendChild(settingButton)
      })

      container.appendChild(ol)
    }

    const createASTTree = (node: Node, settings?: { closedByDefault?: true }) => {
      const autoOpen = !settings || !settings.closedByDefault

      const div = document.createElement("div")
      div.className = "ast"

      const infoForNode = (node: Node) => {
        const name = ts.SyntaxKind[node.kind]

        return {
          name,
        }
      }

      type NodeInfo = ReturnType<typeof infoForNode>

      const renderLiteralField = (key: string, value: string, info: NodeInfo) => {
        const li = document.createElement("li")
        const typeofSpan = `ast-node-${typeof value}`
        let suffix = ""
        if (key === "kind") {
          suffix = ` (SyntaxKind.${info.name})`
        }
        li.innerHTML = `${key}: <span class='${typeofSpan}'>${value}</span>${suffix}`
        return li
      }

      const renderSingleChild = (key: string, value: Node, depth: number) => {
        const li = document.createElement("li")
        li.innerHTML = `${key}: `

        renderItem(li, value, depth + 1)
        return li
      }

      const renderManyChildren = (key: string, nodes: Node[], depth: number) => {
        const childers = document.createElement("div")
        childers.classList.add("ast-children")

        const li = document.createElement("li")
        li.innerHTML = `${key}: [<br/>`
        childers.appendChild(li)

        nodes.forEach(node => {
          renderItem(childers, node, depth + 1)
        })

        const liEnd = document.createElement("li")
        liEnd.innerHTML += "]"
        childers.appendChild(liEnd)
        return childers
      }

      const renderItem = (parentElement: Element, node: Node, depth: number) => {
        const itemDiv = document.createElement("div")
        parentElement.appendChild(itemDiv)
        itemDiv.className = "ast-tree-start"
        itemDiv.attributes.setNamedItem
        // @ts-expect-error
        itemDiv.dataset.pos = node.pos
        // @ts-expect-error
        itemDiv.dataset.end = node.end
        // @ts-expect-error
        itemDiv.dataset.depth = depth

        if (depth === 0 && autoOpen) itemDiv.classList.add("open")

        const info = infoForNode(node)

        const a = document.createElement("a")
        a.classList.add("node-name")
        a.textContent = info.name
        itemDiv.appendChild(a)
        a.onclick = _ => a.parentElement!.classList.toggle("open")
        addEditorHoverToElement(a, { start: node.pos, end: node.end }, { type: "info" })

        const properties = document.createElement("ul")
        properties.className = "ast-tree"
        itemDiv.appendChild(properties)

        Object.keys(node).forEach(field => {
          if (typeof field === "function") return
          if (field === "parent" || field === "flowNode") return

          const value = (node as any)[field]
          if (typeof value === "object" && Array.isArray(value) && value[0] && "pos" in value[0] && "end" in value[0]) {
            //  Es un arreglo de Nodos
            properties.appendChild(renderManyChildren(field, value, depth))
          } else if (typeof value === "object" && "pos" in value && "end" in value) {
            // Es una propiedad single de los hijos
            properties.appendChild(renderSingleChild(field, value, depth))
          } else {
            properties.appendChild(renderLiteralField(field, value, info))
          }
        })
      }

      renderItem(div, node, 0)
      container.append(div)
      return div
    }

    type TextInputConfig = {
      id: string
      placeholder: string

      onChanged?: (text: string, input: HTMLInputElement) => void
      onEnter: (text: string, input: HTMLInputElement) => void

      value?: string
      keepValueAcrossReloads?: true
      isEnabled?: (input: HTMLInputElement) => boolean
    }

    const createTextInput = (config: TextInputConfig) => {
      const form = document.createElement("form")

      const textbox = document.createElement("input")
      textbox.id = config.id
      textbox.placeholder = config.placeholder
      textbox.autocomplete = "off"
      textbox.autocapitalize = "off"
      textbox.spellcheck = false
      // @ts-ignore
      textbox.autocorrect = "off"

      const localStorageKey = "playground-input-" + config.id

      if (config.value) {
        textbox.value = config.value
      } else if (config.keepValueAcrossReloads) {
        const storedQuery = localStorage.getItem(localStorageKey)
        if (storedQuery) textbox.value = storedQuery
      }

      if (config.isEnabled) {
        const enabled = config.isEnabled(textbox)
        textbox.classList.add(enabled ? "good" : "bad")
      } else {
        textbox.classList.add("good")
      }

      const textUpdate = (e: any) => {
        const href = e.target.value.trim()
        if (config.keepValueAcrossReloads) {
          localStorage.setItem(localStorageKey, href)
        }
        if (config.onChanged) config.onChanged(e.target.value, textbox)
      }

      textbox.style.width = "90%"
      textbox.style.height = "2rem"
      textbox.addEventListener("input", textUpdate)

      // Suprime la tecla ENTER
      textbox.onkeydown = (evt: KeyboardEvent) => {
        if (evt.key === "Enter" || evt.code === "Enter") {
          config.onEnter(textbox.value, textbox)
          return false
        }
      }

      form.appendChild(textbox)
      container.appendChild(form)
      return form
    }

    const createSubDesignSystem = (): any => {
      const div = document.createElement("div")
      container.appendChild(div)
      const ds = createDesignSystem(sandbox)(div)
      return ds
    }

    return {
      /** El elemento del sistema de diseño */
      container,
      /** Borra la barra lateral */
      clear,
      /** Presenta código en un pre > code */
      code,
      /** Idealmente, solo usa esto una vez, y tal vez incluso prefieras usar subtítulos en todas partes */
      title: (title: string) => el(title, "h3", container),
      /** Se usa para resaltar secciones, dar información, etc. */
      subtitle: (subtitle: string) => el(subtitle, "h4", container),
      /** Se usa para mostrar un párrafo */
      p: (subtitle: string) => el(subtitle, "p", container),
      /** Cuando no puedes hacer algo, o no tienes nada que mostrar */
      showEmptyScreen,
      /**
       * Muestra una lista de elementos que se pueden desplazar y seleccionar (errores, resaltados, etc.) que tienen representación de código.
       * El tipo es bastante pequeño, por lo que debería ser muy factible modificar otros datos para que encajen en esta función.
       */
      listDiags,
      /** Te permite eliminar los cursores de listDiags, etc. */
      clearDeltaDecorators,
      /** Muestra una sola opción en el almacenamiento local (agrega un li al contenedor BTW) */
      localStorageOption,
      /** Usa localStorageOption para crear una lista de opciones */
      showOptionList,
      /** Muestra un input de texto de ancho completo */
      createTextInput,
      /** Renderiza un árbol AST */
      createASTTree,
      /** Crea un botón input */
      button,
      /** Se usa para recrear una interfaz de usuario como la barra de pestañas en la parte superior de la sección de complementos */
      createTabBar,
      /** Usado con createTabBar para agregar botones */
      createTabButton,
      /** Un mensaje general de "reinicia tu navegador" */
      declareRestartRequired,
      /** Crea una nueva instancia de Design System y la agrega al contenedor. Tendrás que lanzar
       * esto después de usarlo, porque de lo contrario el sistema de tipos se referencia circularmente a sí mismo
       */
      createSubDesignSystem,
    }
  }
}
