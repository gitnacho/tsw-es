import type { Sandbox } from "@typescript/sandbox"
import type React from "react"
import { createDesignSystem } from "./ds/createDesignSystem"

/** Crea un conjunto de funciones útiles que se exponen a los complementos para facilitar la creación de interfaces de usuario consistentes */
export const createUtils = (sb: any, react: typeof React) => {
  const sandbox: Sandbox = sb

  const requireURL = (path: string) => {
    // https://unpkg.com/browse/typescript-playground-presentation-mode@0.0.1/dist/x.js => unpkg/browse/typescript-playground-presentation-mode@0.0.1/dist/x
    const isDev = document.location.host.includes("localhost")
    const prefix = isDev ? "local/" : "unpkg/typescript-playground-presentation-mode/dist/"
    return prefix + path
  }

  const el = (str: string, elementType: string, container: Element) => {
    const el = document.createElement(elementType)
    el.innerHTML = str
    container.appendChild(el)
    return el
  }

  const flashHTMLElement = (element: HTMLElement) => {
    element.classList.add("briefly-highlight")
    setTimeout(() => element.classList.remove("briefly-highlight"), 1000)
  }

  const setNotifications = (pluginID: string, amount: number) => {
    const tab = document.getElementById("playground-plugin-tab-" + pluginID)
    if (!tab) return

    const notification = tab.querySelector("div.plugin-tab-notification")
    if (!amount && notification) tab.removeChild(notification)

    if (amount) {
      if (!notification) {
        const label = document.createElement("div")
        label.textContent = String(amount)
        label.classList.add("plugin-tab-notification")
        tab.appendChild(label)
      } else {
        if (notification.textContent !== String(amount)) {
          notification.textContent = String(amount)
        }
      }
    }
  }

  return {
    /** 
 * Usa  esto para  hacer algunas  funciones de  generación de  elementos
 * tontos
 */
    el,
    /** 
 * Obtiene un URL  relativo para algo en tu  directorio dist dependiendo
 * de si estás en modo desarrollador o no
 */
    requireURL,
    /** La copia Gatsby de React */
    react,
    /**
     * El sistema de diseño de complementos de playground. Llamar a cualquiera de las funciones agregará el
     * elemento al contenedor que pasa al primer parámetro y devuelve el elemento HTMLElement
     */
    createDesignSystem: createDesignSystem(sandbox),
    /** Muestra un elemento HTML */
    flashHTMLElement,
    /** Agrega un pequeño botón rojo en la esquina superior de la pestaña de un complemento con un número */
    setNotifications,
  }
}

export type PluginUtils = ReturnType<typeof createUtils>
