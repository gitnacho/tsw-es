import { KeyboardEventHandler } from "react"
import { getTagFromParents } from "./Sidebar"

const UpArrow = 38
const DownArrow = 40

const childOfType = (tag: string, element: any) => {
  let found: HTMLElement | undefined
  for (const e of element.children) {
    if (e.nodeName === tag.toUpperCase()) found = e
  }
  return found
}

/**
 * Controles que se mueven hacia arriba y hacia abajo a través de la jerarquía de navegación
 * seleccionando hojas de nodo y saltando a categorías de sección
 */
export const onAnchorKeyDown: KeyboardEventHandler = event => {
  const li = getTagFromParents("li", event.target as any)

  // Arriba y salta a los encabezados de sección
  if (event.keyCode == UpArrow) {
    const aboveLI = li.previousElementSibling
    const a = aboveLI && childOfType("a", aboveLI)
    const button = aboveLI && childOfType("button", aboveLI)

    if (a) {
      // siguiente enlace
      a.focus()
    } else if (aboveLI && button) {
      // Salta arriba a la subnav, ya sea en el elemento inferior si está abierto o
      // el botón principal de lo contrario
      const open = aboveLI.classList.contains("open")
      if (open) {
        const listOfLinks = childOfType("ul", aboveLI)!
        const lastLI = listOfLinks.lastElementChild
        childOfType("a", lastLI)!.focus()
      } else {
        button.focus()
      }
    } else {
      // en la cima
      const sectionHostingLI = getTagFromParents("li", li)
      childOfType("button", sectionHostingLI)!.focus()
    }

    event.preventDefault()
  }

  // Abajo, y salta al encabezado de la sección a continuación.
  if (event.keyCode === DownArrow) {
    const belowLI = li.nextElementSibling
    const a = belowLI && childOfType("a", belowLI)
    const button = belowLI && childOfType("button", belowLI)

    if (a) {
      // siguiente enlace
      a.focus()
    } else if (button) {
      // potencial subnav arriba
      button.focus()
    } else {
      // en el fondo
      const sectionHostingLI = getTagFromParents("li", li)
      const nextLI = sectionHostingLI.nextElementSibling
      const a = nextLI && childOfType("a", nextLI)
      const button = nextLI && childOfType("button", nextLI)

      if (a) {
        // siguiente enlace
        a.focus()
      } else if (button) {
        // potencial subnav arriba
        button.focus()
      }
    }

    event.preventDefault()
  }
}

/**
 * Controles que se mueven hacia arriba y hacia abajo a través de la jerarquía de navegación
 * cuando está en una categoría de sección, que tiene una semántica diferente
 * de las a de arriba
 */
export const onButtonKeydown: KeyboardEventHandler = event => {
  const li = getTagFromParents("li", event.target as any)
  // Arriba, va al final de las a en la sección de arriba
  // if it's open or jump to the previous sibling button
  if (event.keyCode == UpArrow) {
    const aboveLI = li.previousElementSibling
    if (!aboveLI) return // Golpea la cima

    const a = aboveLI && childOfType("a", aboveLI)
    const button = aboveLI && childOfType("button", aboveLI)

    if (a) {
      // siguiente enlace
      a.focus()
    } else if (button) {
      // potencial subnav arriba
      const open = aboveLI.classList.contains("open")
      if (open) {
        const listOfLinks = childOfType("ul", aboveLI)!
        const lastLI = listOfLinks.lastElementChild
        childOfType("a", lastLI)!.focus()
      } else {
        button.focus()
      }
    } else {
      // en la cima
      const sectionHostingLI = getTagFromParents("li", li)
      childOfType("button", sectionHostingLI)!.focus()
    }

    event.preventDefault()
  }

  // Abajo, y salta al encabezado de la sección a continuación.
  if (event.keyCode == DownArrow) {
    const open = li.classList.contains("open")
    if (open) {
      // Necesito saltar al primero en la sección
      const listOfLinks = childOfType("ul", li)!
      const lastLI = listOfLinks.firstElementChild
      childOfType("a", lastLI)!.focus()
    } else {
      const belowLI = li.nextElementSibling
      if (belowLI) {
        const a = belowLI && childOfType("a", belowLI)
        const button = belowLI && childOfType("button", belowLI)

        if (a) {
          // siguiente enlace
          a.focus()
        } else if (button) {
          // potencial subnav arriba
          button.focus()
        }
      }
    }
    event.preventDefault()
  }

  // Derecha, abrir
  if (event.key === "ArrowRight") {
    li.classList.remove("closed")
    li.classList.add("open")

    event.preventDefault()
  }

  // Derecha, cerrar
  if (event.key === "ArrowLeft") {
    li.classList.remove("open")
    li.classList.add("closed")

    event.preventDefault()
  }
}
