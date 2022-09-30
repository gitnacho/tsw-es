import { getEffectiveConstraintOfTypeParameter } from "typescript"
import { PlaygroundPlugin } from "."

type Sandbox = import("@typescript/sandbox").Sandbox

export const createDragBar = (side: "left" | "right") => {
  const sidebar = document.createElement("div")
  sidebar.className = "playground-dragbar"
  if (side === "left") sidebar.classList.add("left")

  let leftSize = 0,
    rightSize = 0

  let left: HTMLElement, middle: HTMLElement, right: HTMLElement
  const drag = (e: MouseEvent) => {
    rightSize = right?.clientWidth
    leftSize = left?.clientWidth

    if (side === "right" && middle && right) {
      // Obtiene la distancia a la que está el mouse de la derecha
      const rightX = right.getBoundingClientRect().right
      const offset = rightX - e.pageX
      const screenClampRight = window.innerWidth - 320
      rightSize = Math.min(Math.max(offset, 280), screenClampRight)
      // console.log({ leftSize, rightSize })

      // Establece los anchos
      middle.style.width = `calc(100% - ${rightSize + leftSize}px)`
      right.style.width = `${rightSize}px`
      right.style.flexBasis = `${rightSize}px`
      right.style.maxWidth = `${rightSize}px`
    }

    if (side === "left" && left && middle) {
      // Obtiene la distancia a la que está el mouse de la derecha
      const leftX = e.pageX //left.getBoundingClientRect().left
      const screenClampLeft = window.innerWidth - 320
      leftSize = Math.min(Math.max(leftX, 180), screenClampLeft)

      // Establece los anchos
      middle.style.width = `calc(100% - ${rightSize + leftSize}px)`
      left.style.width = `${leftSize}px`
      left.style.flexBasis = `${leftSize}px`
      left.style.maxWidth = `${leftSize}px`
    }

    // Guarda la coordenada x
    if (window.localStorage) {
      window.localStorage.setItem("dragbar-left", "" + leftSize)
      window.localStorage.setItem("dragbar-right", "" + rightSize)
      window.localStorage.setItem("dragbar-window-width", "" + window.innerWidth)
    }

    // de  TypeScript  @ts-ignore  - Sé lo que estoy haciendo
    window.sandbox.editor.layout()

    // No permite la selección
    e.stopPropagation()
    e.cancelBubble = true
  }

  sidebar.addEventListener("mousedown", e => {
    sidebar.classList.add("selected")
    left = document.getElementById("navigation-container")!
    middle = document.getElementById("editor-container")!
    right = sidebar.parentElement?.getElementsByClassName("playground-sidebar").item(0)! as any
    // Maneja el arrastrando por toda la pantalla
    document.addEventListener("mousemove", drag)

    // Lo elimina cuando vayas a cualquier parte
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", drag)
      document.body.style.userSelect = "auto"
      sidebar.classList.remove("selected")
    })

    // No permite que el arrastre seleccione texto accidentalmente
    document.body.style.userSelect = "none"
    e.stopPropagation()
    e.cancelBubble = true
  })

  return sidebar
}

export const sidebarHidden = () => !!window.localStorage.getItem("sidebar-hidden")

export const createSidebar = () => {
  const sidebar = document.createElement("div")
  sidebar.className = "playground-sidebar"

  // Comienza con la barra lateral oculta en pantallas pequeñas
  const isTinyScreen = window.innerWidth < 800

  // Esto es independiente del tamaño de abajo para que mantenga la barra lateral del mismo tamaño
  if (isTinyScreen || sidebarHidden()) {
    sidebar.style.display = "none"
  }

  if (window.localStorage && window.localStorage.getItem("dragbar-x")) {
    // No restaura la por x si la ventana no es del mismo tamaño
    if (window.innerWidth === Number(window.localStorage.getItem("dragbar-window-width"))) {
      // Establece el arrastre en la pos x anterior
      let width = window.localStorage.getItem("dragbar-x")

      if (isTinyScreen) {
        width = String(Math.min(Number(width), 280))
      }

      sidebar.style.width = `${width}px`
      sidebar.style.flexBasis = `${width}px`
      sidebar.style.maxWidth = `${width}px`

      const left = document.getElementById("editor-container")!
      left.style.width = `calc(100% - ${width}px)`
    }
  }

  return sidebar
}

const toggleIconWhenOpen = "&#x21E5;"
const toggleIconWhenClosed = "&#x21E4;"

export const setupSidebarToggle = () => {
  const toggle = document.getElementById("sidebar-toggle")!

  const updateToggle = () => {
    const sidebar = window.document.querySelector(".playground-sidebar") as HTMLDivElement
    const sidebarShowing = sidebar.style.display !== "none"

    toggle.innerHTML = sidebarShowing ? toggleIconWhenOpen : toggleIconWhenClosed
    toggle.setAttribute("aria-label", sidebarShowing ? "Hide Sidebar" : "Show Sidebar")
  }

  toggle.onclick = () => {
    const sidebar = window.document.querySelector(".playground-sidebar") as HTMLDivElement
    const newState = sidebar.style.display !== "none"

    if (newState) {
      localStorage.setItem("sidebar-hidden", "true")
      sidebar.style.display = "none"
    } else {
      localStorage.removeItem("sidebar-hidden")
      sidebar.style.display = "block"
    }

    updateToggle()

    // de  TypeScript  @ts-ignore  - Sé lo que estoy haciendo
    window.sandbox.editor.layout()

    return false
  }

  // Revisa su configuración al principio
  updateToggle()
}

export const createTabBar = () => {
  const tabBar = document.createElement("div")
  tabBar.classList.add("playground-plugin-tabview")
  tabBar.id = "playground-plugin-tabbar"
  tabBar.setAttribute("aria-label", "Tabs for plugins")
  tabBar.setAttribute("role", "tablist")

  /** Soporte a left/right en la barra de pestañas para la accesibilidad */
  let tabFocus = 0
  tabBar.addEventListener("keydown", e => {
    const tabs = document.querySelectorAll('.playground-plugin-tabview [role="tab"]')
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

  return tabBar
}

export const createPluginContainer = () => {
  const container = document.createElement("div")
  container.setAttribute("role", "tabpanel")
  container.classList.add("playground-plugin-container")
  return container
}

export const createTabForPlugin = (plugin: PlaygroundPlugin) => {
  const element = document.createElement("button")
  element.setAttribute("role", "tab")
  element.setAttribute("aria-selected", "false")
  element.id = "playground-plugin-tab-" + plugin.id
  element.textContent = plugin.displayName
  return element
}

export const activatePlugin = (
  plugin: PlaygroundPlugin,
  previousPlugin: PlaygroundPlugin | undefined,
  sandbox: Sandbox,
  tabBar: HTMLDivElement,
  container: HTMLDivElement
) => {
  let newPluginTab: Element, oldPluginTab: Element
  // de  TypeScript  @ts-ignore  - Esto trabaja en el entorno de ejecución
  for (const tab of tabBar.children) {
    if (tab.id === `playground-plugin-tab-${plugin.id}`) newPluginTab = tab
    if (previousPlugin && tab.id === `playground-plugin-tab-${previousPlugin.id}`) oldPluginTab = tab
  }

  // @ts-ignore
  if (!newPluginTab) throw new Error("Could not get a tab for the plugin: " + plugin.displayName)

  // Le dice al antiguo complemento que está arrancando
  // @ts-ignore
  if (previousPlugin && oldPluginTab) {
    if (previousPlugin.willUnmount) previousPlugin.willUnmount(sandbox, container)
    oldPluginTab.classList.remove("active")
    oldPluginTab.setAttribute("aria-selected", "false")
    oldPluginTab.removeAttribute("tabindex")
  }

  // Limpia la barra lateral
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }

  // Inicia el nuevo complemento
  newPluginTab.classList.add("active")
  newPluginTab.setAttribute("aria-selected", "true")
  newPluginTab.setAttribute("tabindex", "0")

  // Ledice al nuevo complemento que comience a hacer algo de trabajo
  if (plugin.willMount) plugin.willMount(sandbox, container)
  if (plugin.modelChanged) plugin.modelChanged(sandbox, sandbox.getModel(), container)
  if (plugin.modelChangedDebounce) plugin.modelChangedDebounce(sandbox, sandbox.getModel(), container)
  if (plugin.didMount) plugin.didMount(sandbox, container)

  // Deja que el complemento anterior haga cualquier trabajo lento después de que todo esté hecho
  if (previousPlugin && previousPlugin.didUnmount) previousPlugin.didUnmount(sandbox, container)
}

export const createNavigationSection = () => {
  const container = document.createElement("div")
  container.id = "navigation-container"
  return container
}
