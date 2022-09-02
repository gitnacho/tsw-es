import React, { useEffect } from "react"

import "./Sidebar.scss"
import { SeoProps } from "../HeadSEO"
import { inYourLanguage } from "../../copy/inYourLanguage";
import { hasLocalStorage } from "../../lib/hasLocalStorage";
import { allFiles } from "../../__generated__/allPages"

type Props = SeoProps & {
  lang: string,
  children: any
}

const getLocaleVersionOfPage = () => {
  // @ts-ignore 
  const userLocale = navigator.language || navigator.userLanguage || "en-UK"
  const userLang = userLocale.split("-")[0]
  const thisPaths = location.pathname.split("/")

  // / -> /es
  if (thisPaths.length === 0) {
    return "/" + userLocale
  }

  const isEnglishPath = thisPaths[1].length !== 2

  // /play -> /zh/play
  if (isEnglishPath) {
    return "/" + userLang + location.pathname
  }

  // /zh/play -> /es/play
  thisPaths[1] = userLang
  // Suelta cualquier /s anterior
  if (thisPaths[thisPaths.length - 1] === "") thisPaths.pop()

  return thisPaths.join("/")
}

export const LanguageRecommendations = (props: Props) => {
  useEffect(() => {
    // No te metas con la interfaz de usuario móvil
    const isSmall = window.innerWidth < 800
    if (isSmall) return


    const suppressed = hasLocalStorage && localStorage.getItem("dont-recommend-translate")

    let localePath = getLocaleVersionOfPage()
    if (localePath.startsWith("/en")) {
      localePath = localePath.slice(3)
    }

    // Hey, ignora urls dt
    if (localePath.startsWith("/dt")) return

    if (localePath === "") localePath = "/"
    if (localePath === location.pathname) return

    const doesPageExist = allFiles.find(f => f === localePath || f + "/" === localePath)
    if (!doesPageExist) return

    //@ts-ignore
    const userLocale = navigator.language || navigator.userLanguage || "en-UK"
    const userLang = userLocale.split("-")[0]
    const lang = inYourLanguage[userLang] || inYourLanguage["todo"]

    // Muestra el ancla de navegación superior en tu idioma
    const quickJump = document.getElementById("my-lang-quick-jump")!
    const quickJumpA = quickJump.firstElementChild as HTMLAnchorElement

    quickJumpA.textContent = lang.shorthand !== "In xx" ? lang.shorthand : `En ${userLang}`
    quickJumpA.href = localePath
    quickJump.title = lang.body
    quickJump.style.display = "inline-block";

    // Agregar el LI, de alguna manera hace que la búsqueda aumente en 2px
    const search = document.getElementById("search-form")!
    search.style.position = "relative"
    search.style.top = "-2px"

    // Permite no mostrar la ventana emergente
    if (suppressed) return

    document.getElementById("language-recommendation-p")!.textContent = lang.body
    const open = document.getElementById("language-recommendation-open")!
    open.textContent = lang.open
    open.onclick = () => document.location.pathname = localePath

    const cancel = document.getElementById("language-recommendation-no-more")!
    cancel.textContent = lang.cancel
    cancel.onclick = () => {
      hasLocalStorage && localStorage.setItem("dont-recommend-translate", "true")
      document.getElementById("language-recommendation")!.style.display = "none"
    }

    document.getElementById("language-recommendation")!.style.display = "block"
  }, [])

  return (
    <div className="page-popup" id="language-recommendation" style={{ display: "none" }}>
      <p id="language-recommendation-p">MSG</p>
      <div>
        <button className="first" id="language-recommendation-open"></button>
        <button id="language-recommendation-no-more"></button>
      </div>
    </div>
  )
}

export const OpenInMyLangQuickJump = () =>
  <div id="my-lang-quick-jump" style={{ display: "none" }} className="nav-item"><a href=''>en En</a></div>
