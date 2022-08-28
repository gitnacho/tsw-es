type Sandbox = import("@typescript/sandbox").Sandbox
type Monaco = typeof import("monaco-editor")

declare const window: any

import {
  createSidebar,
  createTabForPlugin,
  createTabBar,
  createPluginContainer,
  activatePlugin,
  createDragBar,
  setupSidebarToggle,
  createNavigationSection,
} from "./createElements"
import { runWithCustomLogs } from "./sidebar/runtime"
import { createExporter } from "./exporter"
import { createUI } from "./createUI"
import { getExampleSourceCode } from "./getExample"
import { ExampleHighlighter } from "./monaco/ExampleHighlight"
import { createConfigDropdown, updateConfigDropdownForCompilerOptions } from "./createConfigDropdown"
import { allowConnectingToLocalhost, activePlugins, addCustomPlugin } from "./sidebar/plugins"
import { createUtils, PluginUtils } from "./pluginUtils"
import type React from "react"
import { settingsPlugin, getPlaygroundPlugins } from "./sidebar/settings"
import { gistPoweredNavBar, hideNavForHandbook, showNavForHandbook } from "./navigation"
import { createTwoslashInlayProvider } from "./twoslashInlays"

export { PluginUtils } from "./pluginUtils"

export type PluginFactory = {
  (i: (key: string, components?: any) => string, utils: PluginUtils): PlaygroundPlugin
}

/** La interfaz de todos los complementos de la barra lateral */
export interface PlaygroundPlugin {
  /** No está orientado al público, pero lo usa el playground para identificar complementos de manera única */
  id: string
  /** Para mostrar en las pestañas */
  displayName: string
  /** ¿Se debería seleccionar este complemento cuando se carga por primera vez? Te permite buscar variables de consulta, etc. para cargar un complemento en particular */
  shouldBeSelected?: () => boolean
  /** Antes de mostrar la pestaña, usa esto para configurar tu HTML: todo será eliminado por el patio de recreo cuando alguien navegue fuera de la pestaña */
  willMount?: (sandbox: Sandbox, container: HTMLDivElement) => void
  /** Después mostramos la pestaña */
  didMount?: (sandbox: Sandbox, container: HTMLDivElement) => void
  /** El modelo cambia mientras este complemento está seleccionado activamente */
  modelChanged?: (sandbox: Sandbox, model: import("monaco-editor").editor.ITextModel, container: HTMLDivElement) => void
  /** Cambios de modelo retrasados mientras este complemento está seleccionado activamente, útil cuando estás trabajando con la API de TS porque no se ejecutará en cada pulsación de tecla */
  modelChangedDebounce?: (
    sandbox: Sandbox,
    model: import("monaco-editor").editor.ITextModel,
    container: HTMLDivElement
  ) => void
  /** Antes quitamos la pestaña */
  willUnmount?: (sandbox: Sandbox, container: HTMLDivElement) => void
  /** Después quitamos la pestaña */
  didUnmount?: (sandbox: Sandbox, container: HTMLDivElement) => void
  /** Un objeto que puedes usar para mantener los datos en el alcance de tu objeto complemento */
  data?: any
}

interface PlaygroundConfig {
  /** Idioma como "en" / "ja", etc. */
  lang: string
  /** Prefijo del sitio, como "v2" durante el prelanzamiento */
  prefix: string
  /** Complementos opcionales para que podamos reutilizar el playground con diferentes barras laterales */
  plugins?: PluginFactory[]
  /** ¿Debería este playground cargar complementos personalizados de localStorage? */
  supportCustomPlugins: boolean
}

export const setupPlayground = (
  sandbox: Sandbox,
  monaco: Monaco,
  config: PlaygroundConfig,
  i: (key: string) => string,
  react: typeof React
) => {
  const playgroundParent = sandbox.getDomNode().parentElement!.parentElement!.parentElement!

  // IU a la izquierda
  const leftNav = createNavigationSection()
  playgroundParent.insertBefore(leftNav, sandbox.getDomNode().parentElement!.parentElement!)

  const dragBarLeft = createDragBar("left")
  playgroundParent.insertBefore(dragBarLeft, sandbox.getDomNode().parentElement!.parentElement!)

  const showNav = () => {
    const right = document.getElementsByClassName("playground-sidebar").item(0)!
    const middle = document.getElementById("editor-container")!
    middle.style.width = `calc(100% - ${right.clientWidth + 210}px)`

    leftNav.style.display = "block"
    leftNav.style.width = "210px"
    leftNav.style.minWidth = "210px"
    leftNav.style.maxWidth = "210px"
    dragBarLeft.style.display = "block"
  }
  const hideNav = () => {
    leftNav.style.display = "none"
    dragBarLeft.style.display = "none"
  }

  hideNav()

  // IU a la derecha
  const dragBar = createDragBar("right")
  playgroundParent.appendChild(dragBar)

  const sidebar = createSidebar()
  playgroundParent.appendChild(sidebar)

  const tabBar = createTabBar()
  sidebar.appendChild(tabBar)

  const container = createPluginContainer()
  sidebar.appendChild(container)

  const plugins = [] as PlaygroundPlugin[]
  const tabs = [] as HTMLButtonElement[]

  // Hagamos que cosas como el gancho del banco de trabajo cambien de pestaña
  let didUpdateTab: (newPlugin: PlaygroundPlugin, previousPlugin: PlaygroundPlugin) => void | undefined

  const registerPlugin = (plugin: PlaygroundPlugin) => {
    plugins.push(plugin)

    const tab = createTabForPlugin(plugin)

    tabs.push(tab)

    const tabClicked: HTMLElement["onclick"] = e => {
      const previousPlugin = getCurrentPlugin()
      let newTab = e.target as HTMLElement
      // Podría ser una notificación en la que hiciste clic
      if (newTab.tagName === "DIV") newTab = newTab.parentElement!
      const newPlugin = plugins.find(p => `playground-plugin-tab-${p.id}` == newTab.id)!
      activatePlugin(newPlugin, previousPlugin, sandbox, tabBar, container)
      didUpdateTab && didUpdateTab(newPlugin, previousPlugin)
    }

    tabBar.appendChild(tab)
    tab.onclick = tabClicked
  }

  const setDidUpdateTab = (func: (newPlugin: PlaygroundPlugin, previousPlugin: PlaygroundPlugin) => void) => {
    didUpdateTab = func
  }

  const getCurrentPlugin = () => {
    const selectedTab = tabs.find(t => t.classList.contains("active"))!
    return plugins[tabs.indexOf(selectedTab)]
  }

  const defaultPlugins = config.plugins || getPlaygroundPlugins()
  const utils = createUtils(sandbox, react)
  const initialPlugins = defaultPlugins.map(f => f(i, utils))
  initialPlugins.forEach(p => registerPlugin(p))

  // Elige cuál se debe seleccionar
  const priorityPlugin = plugins.find(plugin => plugin.shouldBeSelected && plugin.shouldBeSelected())
  const selectedPlugin = priorityPlugin || plugins[0]
  const selectedTab = tabs[plugins.indexOf(selectedPlugin)]!
  selectedTab.onclick!({ target: selectedTab } as any)

  let debouncingTimer = false
  sandbox.editor.onDidChangeModelContent(_event => {
    const plugin = getCurrentPlugin()
    if (plugin.modelChanged) plugin.modelChanged(sandbox, sandbox.getModel(), container)

    // Esta debe ser la última en la función
    if (debouncingTimer) return
    debouncingTimer = true
    setTimeout(() => {
      debouncingTimer = false
      playgroundDebouncedMainFunction()

      // Solo llama a la función del complemento una vez cada 0.3s
      if (plugin.modelChangedDebounce && plugin.id === getCurrentPlugin().id) {
        plugin.modelChangedDebounce(sandbox, sandbox.getModel(), container)
      }
    }, 300)
  })

  // Cuando hay playgrounds de varios archivos, debemos mostrar el nombre de archivo implícito, idealmente esto sería
  // algo más en línea, pero podemos abusar de las lentes de código por ahora porque tienen su propia línea.
  sandbox.monaco.languages.registerCodeLensProvider(sandbox.language, {
    provideCodeLenses: function (model, token) {
      const lenses = !showFileCodeLens
        ? []
        : [
          {
            range: {
              startLineNumber: 1,
              startColumn: 1,
              endLineNumber: 2,
              endColumn: 1,
            },
            id: "implicit-filename-first",
            command: {
              id: "noop",
              title: `// @filename: ${sandbox.filepath}`,
            },
          },
        ]
      return { lenses, dispose: () => { } }
    },
  })

  let showFileCodeLens = false

  // Si estableces esto en true, entonces la próxima vez que el playground
  // haber configurado el hash del usuario, se omitiría - utilizado para establecer
  // el texto en ejemplos
  let suppressNextTextChangeForHashChange = false

  // Establece la URL y el almacenamiento de la cadena de sandbox
  const playgroundDebouncedMainFunction = () => {
    showFileCodeLens = sandbox.getText().includes("// @filename")
    localStorage.setItem("sandbox-history", sandbox.getText())
  }

  sandbox.editor.onDidBlurEditorText(() => {
    const alwaysUpdateURL = !localStorage.getItem("disable-save-on-type")
    if (alwaysUpdateURL) {
      if (suppressNextTextChangeForHashChange) {
        suppressNextTextChangeForHashChange = false
        return
      }
      const newURL = sandbox.createURLQueryWithCompilerOptions(sandbox)
      window.history.replaceState({}, "", newURL)
    }
  })

  // Realiza un seguimiento de si el proyecto se ha configurado como un módulo ESM a través de un paquete.json
  let isESMMode = false

  // Cuando se cambien los indicadores del compilador, activa un posible cambio en la URL
  sandbox.setDidUpdateCompilerSettings(async () => {
    playgroundDebouncedMainFunction()
    // @ts-ignore
    window.appInsights && window.appInsights.trackEvent({ name: "Compiler Settings changed" })

    const model = sandbox.editor.getModel()
    const plugin = getCurrentPlugin()
    if (model && plugin.modelChanged) plugin.modelChanged(sandbox, model, container)
    if (model && plugin.modelChangedDebounce) plugin.modelChangedDebounce(sandbox, model, container)

    const alwaysUpdateURL = !localStorage.getItem("disable-save-on-type")
    if (alwaysUpdateURL) {
      const newURL = sandbox.createURLQueryWithCompilerOptions(sandbox)
      window.history.replaceState({}, "", newURL)
    }

    // Agregue un paquete externo.json con 'module: type' y asegura todos los
    // otras configuraciones están en línea para el modo ESM
    const moduleNumber = (sandbox.getCompilerOptions().module as number) || 0
    const isESMviaModule = moduleNumber > 99 && moduleNumber < 200
    const moduleResNumber = sandbox.getCompilerOptions().moduleResolution || 0
    const isESMviaModuleRes = moduleResNumber > 2 && moduleResNumber < 100

    if (isESMviaModule || isESMviaModuleRes) {
      if (isESMMode) return
      isESMMode = true
      setTimeout(() => {
        ui.flashInfo(i("play_esm_mode"))
      }, 300)

      const nextRes = moduleNumber === 199 ? 99 : 2
      sandbox.setCompilerSettings({ target: 99, moduleResolution: nextRes })
      sandbox.addLibraryToRuntime(JSON.stringify({ name: "playground", type: "module" }), "/package.json")
    }
  })

  const skipInitiallySettingHash = document.location.hash && document.location.hash.includes("example/")
  if (!skipInitiallySettingHash) playgroundDebouncedMainFunction()

  // Configuración trabajando con la IU existente, una vez que están cargadas

  // las versiones de TypeScript

  // Configura la etiqueta para el menú desplegable
  const versionButton = document.querySelectorAll("#versions > a").item(0)
  versionButton.innerHTML = "v" + sandbox.ts.version + " <span class='caret'/>"
  versionButton.setAttribute("aria-label", `Select version of TypeScript, currently ${sandbox.ts.version}`)

  // Agrega las versiones al menú desplegable
  const versionsMenu = document.querySelectorAll("#versions > ul").item(0)

  // Habilita todos los submenús
  document.querySelectorAll("nav ul li").forEach(e => e.classList.add("active"))

  const notWorkingInPlayground = ["3.1.6", "3.0.1", "2.8.1", "2.7.2", "2.4.1"]

  const allVersions = [...sandbox.supportedVersions.filter(f => !notWorkingInPlayground.includes(f)), "Nightly"]

  allVersions.forEach((v: string) => {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.textContent = v
    a.href = "#"

    if (v === "Nightly") {
      li.classList.add("nightly")
    }

    if (v.toLowerCase().includes("beta")) {
      li.classList.add("beta")
    }

    li.onclick = () => {
      const currentURL = sandbox.createURLQueryWithCompilerOptions(sandbox)
      const params = new URLSearchParams(currentURL.split("#")[0])
      const version = v === "Nightly" ? "next" : v
      params.set("ts", version)

      const hash = document.location.hash.length ? document.location.hash : ""
      const newURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}?${params}${hash}`

      // @ts-ignore - está permitido
      document.location = newURL
    }

    li.appendChild(a)
    versionsMenu.appendChild(li)
  })

  // Soporte para menús desplegables
  document.querySelectorAll(".navbar-sub li.dropdown > a").forEach(link => {
    const a = link as HTMLAnchorElement
    a.onclick = _e => {
      if (a.parentElement!.classList.contains("open")) {
        escapePressed()
      } else {
        escapePressed()
        a.parentElement!.classList.toggle("open")
        a.setAttribute("aria-expanded", "true")

        const exampleContainer = a.closest("li")!.getElementsByClassName("dropdown-dialog").item(0) as HTMLElement
        if (!exampleContainer) return

        const firstLabel = exampleContainer.querySelector("label") as HTMLElement
        if (firstLabel) firstLabel.focus()

        // Establece la altura y anchos exactos para los popovers para la navegación principal del playground
        const isPlaygroundSubmenu = !!a.closest("nav")
        if (isPlaygroundSubmenu) {
          const playgroundContainer = document.getElementById("playground-container")!
          exampleContainer.style.height = `calc(${playgroundContainer.getBoundingClientRect().height + 26}px - 4rem)`

          const sideBarWidth = (document.querySelector(".playground-sidebar") as any).offsetWidth
          exampleContainer.style.width = `calc(100% - ${sideBarWidth}px - 71px)`

          // Todo esto es para asegurarse de que las pestañas permanezcan dentro del menú desplegable para tsconfig/ejemplos
          const buttons = exampleContainer.querySelectorAll("input")
          const lastButton = buttons.item(buttons.length - 1) as HTMLElement
          if (lastButton) {
            redirectTabPressTo(lastButton, exampleContainer, ".examples-close")
          } else {
            const sections = document.querySelectorAll(".dropdown-dialog .section-content")
            sections.forEach(s => {
              const buttons = s.querySelectorAll("a.example-link")
              const lastButton = buttons.item(buttons.length - 1) as HTMLElement
              if (lastButton) {
                redirectTabPressTo(lastButton, exampleContainer, ".examples-close")
              }
            })
          }
        }
      }
      return false
    }
  })

  /** Maneja la eliminación de los menús desplegables como tsconfig/examples/handbook */
  const escapePressed = () => {
    document.querySelectorAll(".navbar-sub li.open").forEach(i => i.classList.remove("open"))
    document.querySelectorAll(".navbar-sub li").forEach(i => i.setAttribute("aria-expanded", "false"))

    hideNavForHandbook(sandbox)
  }

  // Maneja el cierre de menús desplegables con escape, etc.
  document.onkeydown = function (evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc"
    } else {
      // @ts-ignore - este solía ser el caso
      isEscape = evt.keyCode === 27
    }
    if (isEscape) escapePressed()
  }

  const shareAction = {
    id: "copy-clipboard",
    label: "Save to clipboard",
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],

    contextMenuGroupId: "run",
    contextMenuOrder: 1.5,

    run: function () {
      // Actualiza la URL, luego la escribe en el portapapeles
      const newURL = sandbox.createURLQueryWithCompilerOptions(sandbox)
      window.history.replaceState({}, "", newURL)
      window.navigator.clipboard.writeText(location.href.toString()).then(
        () => ui.flashInfo(i("play_export_clipboard")),
        (e: any) => alert(e)
      )
    },
  }

  const shareButton = document.getElementById("share-button")
  if (shareButton) {
    shareButton.onclick = e => {
      e.preventDefault()
      shareAction.run()
      return false
    }

    // Configura algunas teclas de comandos
    sandbox.editor.addAction(shareAction)

    sandbox.editor.addAction({
      id: "run-js",
      label: "Run the evaluated JavaScript for your TypeScript file",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],

      contextMenuGroupId: "run",
      contextMenuOrder: 1.5,

      run: function (ed) {
        const runButton = document.getElementById("run-button")
        runButton && runButton.onclick && runButton.onclick({} as any)
      },
    })
  }

  const runButton = document.getElementById("run-button")
  if (runButton) {
    runButton.onclick = () => {
      const run = sandbox.getRunnableJS()
      const runPlugin = plugins.find(p => p.id === "logs")!
      activatePlugin(runPlugin, getCurrentPlugin(), sandbox, tabBar, container)

      runWithCustomLogs(run, i)

      const isJS = sandbox.config.filetype === "js"
      ui.flashInfo(i(isJS ? "play_run_js" : "play_run_ts"))
      return false
    }
  }

  // Maneja los botones de cierre en los ejemplos
  document.querySelectorAll("button.examples-close").forEach(b => {
    const button = b as HTMLButtonElement
    button.onclick = escapePressed
  })

  // Soporte para hacer clic en el botón del manual en la parte superior de navegación
  const handbookButton = document.getElementById("handbook-button")

  if (handbookButton) {
    handbookButton.onclick = () => {
      // Dos barras de navegación potencialmente simultáneas son demasiado
      // estado para realizar un seguimiento de cajero automático
      if (!handbookButton.parentElement!.classList.contains("active")) {
        ui.flashInfo("Cannot open the Playground handbook when in a Gist")
        return
      }

      const showingHandbook = handbookButton.parentElement!.classList.contains("open")
      if (!showingHandbook) {
        escapePressed()

        showNav()
        handbookButton.parentElement!.classList.add("open")
        showNavForHandbook(sandbox, escapePressed)
      } else {
        escapePressed()
      }

      return false
    }
  }

  setupSidebarToggle()

  if (document.getElementById("config-container")) {
    createConfigDropdown(sandbox, monaco)
    updateConfigDropdownForCompilerOptions(sandbox, monaco)
  }

  if (document.getElementById("playground-settings")) {
    const settingsToggle = document.getElementById("playground-settings")!

    settingsToggle.onclick = () => {
      const open = settingsToggle.parentElement!.classList.contains("open")
      const sidebarTabs = document.querySelector(".playground-plugin-tabview") as HTMLDivElement
      const sidebarContent = document.querySelector(".playground-plugin-container") as HTMLDivElement
      let settingsContent = document.querySelector(".playground-settings-container") as HTMLDivElement

      if (!settingsContent) {
        settingsContent = document.createElement("div")
        settingsContent.className = "playground-settings-container playground-plugin-container"
        const settings = settingsPlugin(i, utils)
        settings.didMount && settings.didMount(sandbox, settingsContent)
        document.querySelector(".playground-sidebar")!.appendChild(settingsContent)

        // Cuando se presiona el último elemento de la pestaña, vuelve al botón de configuración
        const labels = document.querySelectorAll(".playground-sidebar input")
        const lastLabel = labels.item(labels.length - 1) as HTMLElement
        if (lastLabel) {
          redirectTabPressTo(lastLabel, undefined, "#playground-settings")
        }
      }

      if (open) {
        sidebarTabs.style.display = "flex"
        sidebarContent.style.display = "block"
        settingsContent.style.display = "none"
      } else {
        sidebarTabs.style.display = "none"
        sidebarContent.style.display = "none"
        settingsContent.style.display = "block"
        document.querySelector<HTMLElement>(".playground-sidebar label")!.focus()
      }
      settingsToggle.parentElement!.classList.toggle("open")
    }

    settingsToggle.addEventListener("keydown", e => {
      const isOpen = settingsToggle.parentElement!.classList.contains("open")
      if (e.key === "Tab" && isOpen) {
        const result = document.querySelector(".playground-options li input") as any
        result.focus()
        e.preventDefault()
      }
    })
  }

  // Soporte para tomar ejemplos del hash de ubicación
  if (location.hash.startsWith("#example")) {
    const exampleName = location.hash.replace("#example/", "").trim()
    sandbox.config.logger.log("Loading example:", exampleName)
    getExampleSourceCode(config.prefix, config.lang, exampleName).then(ex => {
      if (ex.example && ex.code) {
        const { example, code } = ex

        // Actualiza el almacenamiento local mostrando que has visto esta página
        if (localStorage) {
          const seenText = localStorage.getItem("examples-seen") || "{}"
          const seen = JSON.parse(seenText)
          seen[example.id] = example.hash
          localStorage.setItem("examples-seen", JSON.stringify(seen))
        }

        const allLinks = document.querySelectorAll("example-link")
        // @ts-ignore
        for (const link of allLinks) {
          if (link.textContent === example.title) {
            link.classList.add("highlight")
          }
        }

        document.title = "TypeScript Playground - " + example.title
        suppressNextTextChangeForHashChange = true
        sandbox.setText(code)
      } else {
        suppressNextTextChangeForHashChange = true
        sandbox.setText("// Hubo un problema al obtener el ejemplo, ¿URL incorrecta? Revisa la consola en las herramientas de desarrollo")
      }
    })
  }

  // Establece el número de errores en las pestañas de la barra lateral
  const model = sandbox.getModel()
  model.onDidChangeDecorations(() => {
    const markers = sandbox.monaco.editor.getModelMarkers({ resource: model.uri }).filter(m => m.severity !== 1)
    utils.setNotifications("errors", markers.length)
  })

  // Configura una forma de hacer clic entre ejemplos
  monaco.languages.registerLinkProvider(sandbox.language, new ExampleHighlighter())

  const languageSelector = document.getElementById("language-selector") as HTMLSelectElement
  if (languageSelector) {
    const params = new URLSearchParams(location.search)
    const options = ["ts", "d.ts", "js"]
    languageSelector.options.selectedIndex = options.indexOf(params.get("filetype") || "ts")

    languageSelector.onchange = () => {
      const filetype = options[Number(languageSelector.selectedIndex || 0)]
      const query = sandbox.createURLQueryWithCompilerOptions(sandbox, { filetype })
      const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`
      // @ts-ignore
      document.location = fullURL
    }
  }

  // Se asegura de que el editor tenga el ancho completo cuando la pantalla cambie de tamaño
  window.addEventListener("resize", () => {
    sandbox.editor.layout()
  })

  const ui = createUI()
  const exporter = createExporter(sandbox, monaco, ui)

  const playground = {
    exporter,
    ui,
    registerPlugin,
    plugins,
    getCurrentPlugin,
    tabs,
    setDidUpdateTab,
    createUtils,
  }

  window.ts = sandbox.ts
  window.sandbox = sandbox
  window.playground = playground

  console.log(`Using TypeScript ${window.ts.version}`)

  console.log("Available globals:")
  console.log("\twindow.ts", window.ts)
  console.log("\twindow.sandbox", window.sandbox)
  console.log("\twindow.playground", window.playground)
  console.log("\twindow.react", window.react)
  console.log("\twindow.reactDOM", window.reactDOM)

  /** El sistema de complementos */
  const activateExternalPlugin = (
    plugin: PlaygroundPlugin | ((utils: PluginUtils) => PlaygroundPlugin),
    autoActivate: boolean
  ) => {
    let readyPlugin: PlaygroundPlugin
    // Puede ser una fábrica u objeto
    if (typeof plugin === "function") {
      const utils = createUtils(sandbox, react)
      readyPlugin = plugin(utils)
    } else {
      readyPlugin = plugin
    }

    if (autoActivate) {
      console.log(readyPlugin)
    }

    playground.registerPlugin(readyPlugin)

    // Selecciona automáticamente el complemento dev
    const pluginWantsFront = readyPlugin.shouldBeSelected && readyPlugin.shouldBeSelected()

    if (pluginWantsFront || autoActivate) {
      // Selecciona automáticamente el complemento dev
      activatePlugin(readyPlugin, getCurrentPlugin(), sandbox, tabBar, container)
    }
  }

  // Complemento de modo dev
  if (config.supportCustomPlugins && allowConnectingToLocalhost()) {
    window.exports = {}
    console.log("Connecting to dev plugin")
    try {
      // @ts-ignore
      const re = window.require
      re(["local/index"], (devPlugin: any) => {
        console.log("Set up dev plugin from localhost:5000")
        try {
          activateExternalPlugin(devPlugin, true)
        } catch (error) {
          console.error(error)
          setTimeout(() => {
            ui.flashInfo("Error: Could not load dev plugin from localhost:5000")
          }, 700)
        }
      })
    } catch (error) {
      console.error("Problem loading up the dev plugin")
      console.error(error)
    }
  }

  const downloadPlugin = (plugin: string, autoEnable: boolean) => {
    try {
      // @ts-ignore
      const re = window.require
      re([`unpkg/${plugin}@latest/dist/index`], (devPlugin: PlaygroundPlugin) => {
        activateExternalPlugin(devPlugin, autoEnable)
      })
    } catch (error) {
      console.error("Problem loading up the plugin:", plugin)
      console.error(error)
    }
  }

  if (config.supportCustomPlugins) {
    // Los toma de localstorage
    activePlugins().forEach(p => downloadPlugin(p.id, false))

    // Ofrece instalar uno si 'install-plugin' es un parámetro de consulta
    const params = new URLSearchParams(location.search)
    const pluginToInstall = params.get("install-plugin")
    if (pluginToInstall) {
      const alreadyInstalled = activePlugins().find(p => p.id === pluginToInstall)
      if (!alreadyInstalled) {
        const shouldDoIt = confirm("Would you like to install the third party plugin?\n\n" + pluginToInstall)
        if (shouldDoIt) {
          addCustomPlugin(pluginToInstall)
          downloadPlugin(pluginToInstall, true)
        }
      }
    }
  }

  const [tsMajor, tsMinor] = sandbox.ts.version.split(".")
  if (
    (parseInt(tsMajor) > 4 || (parseInt(tsMajor) == 4 && parseInt(tsMinor) >= 6)) &&
    monaco.languages.registerInlayHintsProvider
  ) {
    monaco.languages.registerInlayHintsProvider(sandbox.language, createTwoslashInlayProvider(sandbox))
  }

  if (location.hash.startsWith("#show-examples")) {
    setTimeout(() => {
      document.getElementById("examples-button")?.click()
    }, 100)
  }

  if (location.hash.startsWith("#show-whatisnew")) {
    setTimeout(() => {
      document.getElementById("whatisnew-button")?.click()
    }, 100)
  }

  // Toma el contenido de un Gist
  if (location.hash.startsWith("#gist/")) {
    gistPoweredNavBar(sandbox, ui, showNav)
  }

  // Carga automática en el playground
  if (location.hash.startsWith("#handbook")) {
    setTimeout(() => {
      document.getElementById("handbook-button")?.click()
    }, 100)
  }

  return playground
}

export type Playground = ReturnType<typeof setupPlayground>

const redirectTabPressTo = (element: HTMLElement, container: HTMLElement | undefined, query: string) => {
  element.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      const host = container || document
      const result = host.querySelector(query) as any
      if (!result) throw new Error(`Expected to find a result for keydown`)
      result.focus()
      e.preventDefault()
    }
  })
}
