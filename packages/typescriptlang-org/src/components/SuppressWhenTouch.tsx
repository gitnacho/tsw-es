import React, { useEffect } from "react"
import { isTouchDevice } from "../lib/isTouchDevice"

/**
 * Un componente de React que eliminará sus elementos secundarios (¡en el entorno de ejecución!)
 * de la jerarquía si estamos en un dispositivo táctil
 */
export const SuppressWhenTouch = ({ children, hideOnTouch }: any) => {

  useEffect(() => {
    if (isTouchDevice()) {
      // Es táctil, así que eliminemos el contenido en el hijo y 
      // lo reemplazamos con un mensaje de que esta sección no es buena para dispositivos móviles
      const suppressible = document.getElementById("touch-suppressible")!
      while (suppressible.firstChild) {
        suppressible.removeChild(suppressible.firstChild)
      }

      if (hideOnTouch) return

      const h4 = document.createElement("h4")
      h4.textContent = "Sección mejor en una computadora"

      const p = document.createElement("p")
      p.textContent = "Esta parte del sitio no funciona bien en un navegador táctil. Recomendamos cambiar a una computadora para continuar."

      suppressible.appendChild(h4)
      suppressible.appendChild(p)
    }

  }, [])
  return (
    <div id="touch-suppressible">
      {children}
    </div>)
}
