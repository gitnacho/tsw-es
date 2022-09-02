import React, { useEffect } from "react"

import { RenderExamples } from "../ShowExamples"

interface Props {
  lang: string
}

export const PlaygroundSamples = (props: Props) => {

  // Esto garantiza que la ventana emergente solo esté disponible cuando JS esté habilitado

  useEffect(() => {
    // Solo permite flotar en ventanas más anchas 
    const allowHover = window.innerWidth > 900
    if (!allowHover) {
      (document.getElementById("playground-samples-popover") as any).style.display = "none"
      return
    }

    // Habilita visualmente el icono emergente
    const iconSpan = document.getElementsByClassName("footer-icon")[0] as HTMLElement
    iconSpan.style.display = "inline-block"

    // Esto es todo lo que se necesita para pasar el mouse
    // @ts-ignore
    for (const element of document.getElementsByClassName("popover-container")) {
      element.classList.add("allow-hover")
    }

    // Esto se usa para manejar tabulaciones
    const showPopover = () => {
      const popover = document.getElementById("playground-samples-popover")
      if (!popover) throw new Error("No popover found")
      popover.style.visibility = "visible"
      popover.style.opacity = "1"

      // Cuando el popover esté arriba, permite tabular a través de todos los elementos para ocultar el emergente
      popover.addEventListener("blur", (e) => {
        const element = e.relatedTarget as HTMLElement
        if (!element || element.tagName === "A" && !element.classList.contains("example-link")) {
          popover.style.visibility = "hidden"
        }
      }, true);
    }

    const triggerAnchor = document.getElementById("popover-trigger-anchor")
    if (!triggerAnchor) throw new Error("No se encontró el ancla de activación")
    triggerAnchor.onfocus = showPopover
  }, []);

  return (
    <div id="playground-samples-popover" aria-label="Submenú de código de ejemplo" tabIndex={-1}>
      <RenderExamples defaultSection="TypeScript" sections={["JavaScript", "TypeScript"]} />
      <div className="arrow-down" />
    </div>)
}
