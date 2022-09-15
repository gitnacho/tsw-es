import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Layout } from "../components/layout"
import { withPrefix, graphql } from "gatsby"

import "./play.scss"
import { RenderExamples } from "../components/ShowExamples"

import { useIntl } from "react-intl";
import { createInternational } from "../lib/createInternational"
import { hasLocalStorage } from "../lib/hasLocalStorage"
import { headCopy } from "../copy/en/head-seo"
import { playCopy } from "../copy/en/playground"

import { Intl } from "../components/Intl"
import "reflect-metadata"

import playgroundReleases from "../../../sandbox/src/releases.json"
import { getPlaygroundUrls } from "../lib/playgroundURLs"

// Esto lo establece el playground
declare const playground: ReturnType<typeof import("@typescript/playground").setupPlayground>

type Props = {
  pageContext: {
    lang: string
    examplesTOC: typeof import("../../static/js/examples/en.json")
    optionsSummary: any // esto solo se pasa a la biblioteca JS del playground en este punto
    playgroundHandbookTOC: { docs: any[] }
  }
}

const Play: React.FC<Props> = (props) => {
  const i = createInternational<typeof headCopy & typeof playCopy>(useIntl())

  useEffect(() => {
    if (!document.getElementById("monaco-editor-embed")) return
    if (document.getElementById("monaco-editor-embed")!.childElementCount > 0) {
      return console.log("Playground ya cargado")
    }

    // Detecta si has salido del playground y regresas a través del botón Atrás, lo que forzará
    // una recarga de página para asegurarse de que el playground esté completamente configurado
    let leftPlayground = false
    window.addEventListener('popstate', (event) => {
      const onPlayground = document.location.pathname.endsWith("/play/") || document.location.pathname.endsWith("/play")
      if (leftPlayground && onPlayground) {
        document.location.reload()
      } else if (!leftPlayground && !onPlayground) {
        leftPlayground = true
      }
    });

    if (!hasLocalStorage) {
      document.getElementById("loading-message")!.innerText = "No se puede cargar el Playground con el almacenamiento deshabilitado en tu navegador"
      return
    }

    // @ts-ignore - para que el manual del playground pueda tomar estos datos
    window.playgroundHandbookTOC = props.pageContext.playgroundHandbookTOC
    // @ts-ignore - por lo tanto las opciones de configuración pueden usar descripciones localizadas
    window.optionsSummary = props.pageContext.optionsSummary
    // @ts-ignore - para complementos basados ​​en React
    window.react = React
    // @ts-ignore - para complementos basados ​​en React
    window.reactDOM = ReactDOM
    // @ts-ignore - para que los complementos, etc. puedan usar i18n
    window.i = i

    const getLoaderScript = document.createElement('script');
    getLoaderScript.src = withPrefix("/js/vs.loader.js");
    getLoaderScript.async = true;
    getLoaderScript.onload = async () => {
      const params = new URLSearchParams(location.search)

      let tsVersionParam = params.get("ts")
      // maneja la búsqueda nocturna 
      if (tsVersionParam && tsVersionParam === "Nightly" || tsVersionParam === "next") {
        // Evita el CDN para omitir el almacenamiento en caché por partida doble
        const nightlyLookup = await fetch("https://tswebinfra.blob.core.windows.net/indexes/next.json", { cache: "no-cache" })
        const nightlyJSON = await nightlyLookup.json()
        tsVersionParam = nightlyJSON.version
      }

      // De alguna manera, la gente sigue intentando -insiders urls en lugar de -dev - tal vez alguna herramienta que no conozco?
      if (tsVersionParam && tsVersionParam.includes("-insiders.")) {
        tsVersionParam = tsVersionParam.replace("-insiders.", "-dev.")
      }

      const latestRelease = [...playgroundReleases.versions].sort().pop()!
      const tsVersion = tsVersionParam || latestRelease

      // Debido a que podemos llegar a los puertos de host local desde el sitio, es posible que el compilador construido localmente 
      // se aloje y potencie el editor con un poco de esfuerzo.
      const useLocalCompiler = tsVersion === "dev"
      const devIsh = ["pr", "dev"]
      const version = devIsh.find(d => tsVersion.includes(d)) ? "dev" : "min"
      const urlForMonaco = useLocalCompiler ? "http://localhost:5615/dev/vs" : `https://typescript.azureedge.net/cdn/${tsVersion}/monaco/${version}/vs`

      // Hace una llamada HEAD rápida para el editor principal de monaco para esta versión de TS, si es
      // bails luego da un mensaje de error útil y bail.
      const nightlyLookup = await fetch(urlForMonaco + "/editor/editor.main.js", { method: "HEAD" })
      if (!nightlyLookup.ok) {
        document.querySelectorAll<HTMLDivElement>(".lds-grid div").forEach(div => {
          div.style.backgroundColor = "red"
          div.style.animation = ""
          div.style.webkitAnimation = ""
        })

        document.getElementById("loading-message")!.innerHTML = `Esta versión de TypeScript <em>(${tsVersion?.replace("<", "-")})</em><br/>no preparada para el Playground<br/><br/>Prueba <a href='/play?ts=${latestRelease}${document.location.hash}'>${latestRelease}</a> o <a href ="/play?ts=next${document.location.hash}">Nocturna</a>`
        return
      }

      // Permite compilaciones de prod/staging para establecer un prefijo de confirmación personalizado para romper cachés
      const { sandboxRoot, playgroundRoot, playgroundWorker } = getPlaygroundUrls()

      // @ts-ignore
      const re: any = global.require
      re.config({
        paths: {
          vs: urlForMonaco,
          "typescript-sandbox": sandboxRoot,
          "typescript-playground": playgroundRoot,
          "unpkg": "https://unpkg.com",
          "local": "http://localhost:5000",
        },
        ignoreDuplicateModules: ["vs/editor/editor.main"],
        catchError: true,
        onError: function (err) {
          if (document.getElementById("loading-message")) {
            document.getElementById("loading-message")!.innerText = "No se puede cargar el Playground en este navegador"
            console.error("Error al configurar monaco/sandbox/playground desde el JS, es probable que estés usando un navegador que monaco no admite.")
          } else {
            console.error("Se detectó un error que probablemente ocurra durante la inicialización de un complemento del playground:")
          }
          console.error(err)
        }
      });

      re(["vs/editor/editor.main", "vs/language/typescript/tsWorker", "typescript-sandbox/index", "typescript-playground/index"], async (main: typeof import("monaco-editor"), tsWorker: any, sandbox: typeof import("@typescript/sandbox"), playground: typeof import("@typescript/playground")) => {
        // Importar "vs/language/typescript/tsWorker" configurará ts como global
        const ts = (global as any).ts || tsWorker.typescript
        const isOK = main && ts && sandbox && playground
        if (isOK) {
          document.getElementById("loader")!.parentNode?.removeChild(document.getElementById("loader")!)
        } else {
          console.error("Error al configurar las 4 dependencias clave")
          console.error("main", !!main, "ts", !!ts, "sandbox", !!sandbox, "playground", !!playground)
          document.getElementById("loading-message")!.innerText = "No se puede cargar Playground en este navegador, ve registros en la consola."
          return
        }

        // Establece la altura de monaco para que sea la altura de tu ventana o 600px - el que sea más pequeño
        const container = document.getElementById("playground-container")!
        container.style.display = "flex"
        const height = Math.max(window.innerHeight, 600)
        container.style.height = `${height - Math.round(container.getClientRects()[0].top) - 18}px`

        const extension = (!!params.get("useJavaScript") ? "js" : params.get("filetype") || "ts") as any
        const workerPath = params.get("multiFile") ? `${document.location.origin + playgroundWorker}?filetype=${extension}` : undefined

        // Crea la caja de arena — sandbox
        const sandboxEnv = await sandbox.createTypeScriptSandbox({
          text: localStorage.getItem('sandbox-history') || i("play_default_code_sample"),
          compilerOptions: {},
          domID: "monaco-editor-embed",
          filetype: extension,
          acquireTypes: !localStorage.getItem("disable-ata"),
          supportTwoslashCompilerOptions: true,
          customTypeScriptWorkerPath: workerPath,
          monacoSettings: {
            fontFamily: "var(--code-font)",
            fontLigatures: true
          }
        }, main, ts)

        const playgroundConfig = {
          lang: props.pageContext.lang,
          prefix: withPrefix("/"),
          supportCustomPlugins: true
        }

        playground.setupPlayground(sandboxEnv, main, playgroundConfig, i as any, React)

        // Modo oscuro faff
        const darkModeEnabled = document.documentElement.classList.contains("dark-theme")
        if (darkModeEnabled) {
          sandboxEnv.monaco.editor.setTheme("sandbox-dark");
        }

        sandboxEnv.editor.focus()
        sandboxEnv.editor.layout()
      });
    }

    document.body.appendChild(getLoaderScript);
  }, [])


  return (
    <Layout title={i("head_playground_title")} description={i("head_playground_description")} lang={props.pageContext.lang}>
      {/** Este es el nav superior, que está fuera del editor */}
      <nav className="navbar-sub">
        <ul className="nav">
          <li className="name hide-small"><span>Playground</span></li>

          <li className="dropdown">
            <a id="compiler-options-button" href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="menu" aria-expanded="false" aria-controls="compiler-options-dropdown">{i("play_subnav_config")} <span className="caret"></span></a>
            <div id="compiler-options-dropdown" className="dropdown-dialog" aria-labelledby="compiler-options-button">
              <h3>{i("play_subnav_config")}</h3>
              <div className="info" id="config-container">
                <button className="examples-close">{i("play_subnav_examples_close")}</button>

                <div id="compiler-dropdowns">
                  <label className="select">
                    <span className="select-label">Lang</span>
                    <select id="language-selector">
                      <option>TypeScript</option>
                      <option>Definiciones TypeScript</option>
                      <option>JavaScript</option>
                    </select>
                    <span className="compiler-flag-blurb">{i("play_config_language_blurb")}</span>
                  </label>
                </div>

              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#" id="examples-button" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="menu" aria-expanded="false" aria-controls="examples">{i("play_subnav_examples")} <span className="caret"></span></a>
            <div className="dropdown-dialog" id="examples" aria-labelledby="examples-button">
              <button className="examples-close" aria-label="Close dropdown" role="button">{i("play_subnav_examples_close")}</button>
              <RenderExamples defaultSection="TypeScript" sections={["JavaScript", "TypeScript"]} examples={props.pageContext.examplesTOC} locale={props.pageContext.lang} />
            </div>
          </li>

          <li className="dropdown">
            <a href="#" id="whatisnew-button" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="menu" aria-expanded="false" aria-controls="whatisnew">{i("play_subnav_whatsnew")} <span className="caret"></span></a>
            <div className="dropdown-dialog" id="whatisnew" aria-labelledby="whatisnew-button">
              <button role="button" aria-label="Close dropdown" className="examples-close">{i("play_subnav_examples_close")}</button>
              <RenderExamples defaultSection="4.4" sections={["4.4", "4.3", "4.2", "4.1", "4.0", "3.8", "3.7", "Playground"]} examples={props.pageContext.examplesTOC} locale={props.pageContext.lang} />
            </div>
          </li>

          <li className="dropdown">
            <a href="#" id="handbook-button" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="menu" aria-expanded="false" aria-controls="examples">{i("play_subnav_handbook")} <span className="caret"></span></a>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right hidden-xs">
          <li><a href="#" id="playground-settings" role="button">Ajustes</a></li>
        </ul>
      </nav>

      <div className="raised" style={{ paddingTop: "0", marginTop: "0", marginBottom: "3rem", paddingBottom: "1.5rem" }}>
        <div id="loader">
          <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <p id="loading-message" role="status">{i("play_downloading_typescript")}</p>
        </div>
        <div id="playground-container" style={{ display: "none" }}>
          <div id="editor-container">
            <div id="story-container" style={{ display: "none" }}></div>
            <div id="editor-toolbar" className="navbar-sub" >

              <ul>
                <li id="versions" className="dropdown" >
                  <a href="#" data-toggle="dropdown" role="button" aria-haspopup="menu" aria-expanded="false" aria-controls="versions-dropdown" id='versions-button'>{i("play_downloading_version")}... <span className="caret" /></a>
                  <ul className="dropdown-menu versions" id="versions-dropdown" aria-labelledby="versions-button"></ul>
                </li>
                <li><a id="run-button" href="#" role="button">{i("play_toolbar_run")}</a></li>

                <li className="dropdown">
                  <a href="#" id="exports-dropdown" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="export-dropdown-menu">{i("play_toolbar_export")} <span className="caret"></span></a>
                  <ul className="dropdown-menu" id='export-dropdown-menu' aria-labelledby="whatisnew-button">
                    <li><a href="#" onClick={() => playground.exporter.exportAsTweet()} aria-label={i("play_export_tweet_md")} >{i("play_export_tweet_md")}</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" onClick={(e: any) => playground.exporter.copyAsMarkdownIssue(e)} aria-label={i("play_export_copy_md")} >{i("play_export_copy_md")}</a></li>
                    <li><a href="#" onClick={(e: any) => playground.exporter.copyForChat(e)} aria-label={i("play_export_copy_link")}  >{i("play_export_copy_link")}</a></li>
                    < li > <a href="#" onClick={(e: any) => playground.exporter.copyForChatWithPreview(e)} aria-label={i("play_export_copy_link_preview")}  >{i("play_export_copy_link_preview")}</a></li>
                    < li role="separator" className="divider" ></li>
                    <li><a href="#" onClick={() => playground.exporter.openInTSAST()} aria-label={i("play_export_tsast")}>{i("play_export_tsast")}</a></li>
                    <li><a href="#" onClick={() => playground.exporter.openInBugWorkbench()} aria-label={i("play_export_bugworkbench")}>{i("play_export_bugworkbench")}</a></li>
                    <li><a href="#" onClick={() => playground.exporter.openInVSCodeDev()} aria-label={i("play_export_vscode_dev_play")}>{i("play_export_vscode_dev_play")}</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" onClick={() => playground.exporter.openProjectInCodeSandbox()} aria-label={i("play_export_sandbox")} >{i("play_export_sandbox")}</a></li>
                    <li><a href="#" onClick={() => playground.exporter.openProjectInStackBlitz()} aria-label={i("play_export_stackblitz")} >{i("play_export_stackblitz")}</a></li>
                  </ul>
                </li>
                <li><a id="share-button" href="#" role="button">{i("play_toolbar_share")}</a></li>
              </ul>

              <ul className="right">
                <li><a id="sidebar-toggle" aria-label="Hide Sidebar" href="#">&#x21E5;</a></li>
              </ul>
            </div>
            { /** Este es el div al que se agrega monaco: cuidado, muchos cambios ocurren aquí en el entorno de ejecución **/}
            <div id="monaco-editor-embed" />
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default (props: Props) => <Intl locale={props.pageContext.lang}><Play {...props} /></Intl>
