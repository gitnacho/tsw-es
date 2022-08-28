export interface UI {
  /** Muestra un texto modal, con algunos botones */
  showModal: (
    message: string,
    postFocalElement: HTMLElement,
    subtitle?: string,
    buttons?: { [text: string]: string },
    event?: React.MouseEvent
  ) => void
  /** Un destello rápido de algún texto */
  flashInfo: (message: string, time?: number) => void
  /** Crea un contenedor modal en el que puedes colocar tus propios elementos dom */
  createModalOverlay: (postFocalElement: HTMLElement, classes?: string) => HTMLDivElement
}

export const createUI = (): UI => {
  const flashInfo = (message: string, timeout = 1000) => {
    let flashBG = document.getElementById("flash-bg")
    if (flashBG) {
      flashBG.parentElement?.removeChild(flashBG)
    }

    flashBG = document.createElement("div")
    flashBG.id = "flash-bg"

    const p = document.createElement("p")
    p.textContent = message
    flashBG.appendChild(p)
    document.body.appendChild(flashBG)

    setTimeout(() => {
      flashBG?.parentElement?.removeChild(flashBG)
    }, timeout)
  }

  const createModalOverlay = (postFocalElement: HTMLElement, classList?: string) => {
    document.querySelectorAll(".navbar-sub li.open").forEach(i => i.classList.remove("open"))

    const existingPopover = document.getElementById("popover-modal")
    if (existingPopover) existingPopover.parentElement!.removeChild(existingPopover)

    const modalBG = document.createElement("div")
    modalBG.id = "popover-background"
    document.body.appendChild(modalBG)

    const modal = document.createElement("div")
    modal.id = "popover-modal"
    if (classList) modal.className = classList

    const closeButton = document.createElement("button")
    closeButton.innerText = "Close"
    closeButton.classList.add("close")
    closeButton.tabIndex = 1
    modal.appendChild(closeButton)

    const oldOnkeyDown = document.onkeydown

    const close = () => {
      modalBG.parentNode!.removeChild(modalBG)
      modal.parentNode!.removeChild(modal)
      // @ts-ignore
      document.onkeydown = oldOnkeyDown
      postFocalElement.focus()
    }

    modalBG.onclick = close
    closeButton.onclick = close

    // Admite ocultar el modal a través de escape
    document.onkeydown = whenEscape(close)

    document.body.appendChild(modal)

    return modal
  }

  /** Para mostrar mucho código */
  const showModal = (
    code: string,
    postFocalElement: HTMLElement,
    subtitle?: string,
    links?: { [text: string]: string },
    event?: React.MouseEvent
  ) => {
    const modal = createModalOverlay(postFocalElement)
    // No he podido hacer que esto funcione de una manera que
    // trabaje con cada combinación de lector de pantalla y navegador, así que
    // en cambio, estoy dejando caer la función.

    const isNotMouse = false //  event && event.screenX === 0 && event.screenY === 0

    if (subtitle) {
      const titleElement = document.createElement("h3")
      titleElement.textContent = subtitle
      setTimeout(() => {
        titleElement.setAttribute("role", "alert")
      }, 100)
      modal.appendChild(titleElement)
    }

    const textarea = document.createElement("textarea")
    textarea.readOnly = true
    textarea.wrap = "off"
    textarea.style.marginBottom = "20px"
    modal.appendChild(textarea)
    textarea.textContent = code
    textarea.rows = 60

    const buttonContainer = document.createElement("div")

    const copyButton = document.createElement("button")
    copyButton.innerText = "Copy"
    buttonContainer.appendChild(copyButton)

    const selectAllButton = document.createElement("button")
    selectAllButton.innerText = "Select All"
    buttonContainer.appendChild(selectAllButton)

    modal.appendChild(buttonContainer)
    const close = modal.querySelector(".close") as HTMLElement
    close.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        ; (modal.querySelector("textarea") as any).focus()
        e.preventDefault()
      }
    })

    if (links) {
      Object.keys(links).forEach(name => {
        const href = links[name]
        const extraButton = document.createElement("button")
        extraButton.innerText = name
        extraButton.onclick = () => (document.location = href as any)
        buttonContainer.appendChild(extraButton)
      })
    }

    const selectAll = () => {
      textarea.select()
    }

    const shouldAutoSelect = !isNotMouse
    if (shouldAutoSelect) {
      selectAll()
    } else {
      textarea.focus()
    }

    const buttons = modal.querySelectorAll("button")
    const lastButton = buttons.item(buttons.length - 1) as HTMLElement
    lastButton.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        ; (document.querySelector(".close") as any).focus()
        e.preventDefault()
      }
    })

    selectAllButton.onclick = selectAll
    copyButton.onclick = () => {
      navigator.clipboard.writeText(code)
    }
  }

  return {
    createModalOverlay,
    showModal,
    flashInfo,
  }
}

/**
 * Ejecuta el cierre cuando se pulsó escape
 * @param func Cierre a ejecutar si se presiona la tecla escape
 */
const whenEscape = (func: () => void) => (event: KeyboardEvent) => {
  const evt = event || window.event
  let isEscape = false
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc"
  } else {
    // @ts-ignore - este solía ser el caso
    isEscape = evt.keyCode === 27
  }
  if (isEscape) {
    func()
  }
}
