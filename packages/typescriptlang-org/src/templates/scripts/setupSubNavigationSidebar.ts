export const overrideSubNavLinksWithSmoothScroll = () => {
  // Overrides the anchor behavior to smooth scroll instead
  // Came from https://css-tricks.com/sticky-smooth-active-nav/
  const subnavLinks = document.querySelectorAll<HTMLAnchorElement>(
    "#handbook-content nav ul li a"
  )
  subnavLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault()

      let target = document.querySelector(
        decodeURIComponent(event.target!["hash"])
      )
      target!.scrollIntoView({ behavior: "smooth", block: "start" })
      document.location.hash = event.target!["hash"]
    })
  })
}

// Establece la selección actual
export const updateSidebarOnScroll = () => {
  const subnavLinks = document.querySelectorAll<HTMLAnchorElement>(
    "#handbook-content nav ul li a"
  )

  const fromTop = window.scrollY
  let currentPossibleAnchor: HTMLAnchorElement | undefined
  const offset = 100

  // Se Desplaza hacia abajo para encontrar el ancla más alta en la pantalla
  subnavLinks.forEach(link => {
    try {
      const section = document.querySelector<HTMLDivElement>(
        decodeURIComponent(link.hash)
      )
      if (!section) {
        return
      }
      const isBelow = section.offsetTop - offset <= fromTop
      if (isBelow) currentPossibleAnchor = link
    } catch (error) {
      return
    }
  })

  // A continuación, establece la etiqueta activa
  subnavLinks.forEach(link => {
    if (link === currentPossibleAnchor) {
      link.classList.add("current")
    } else {
      link.classList.remove("current")
    }
  })
}
