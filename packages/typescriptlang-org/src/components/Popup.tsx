import React, { useEffect, useState } from "react"

export interface PopupProps {
	show: boolean
	html?: string
	url?: string
	// Estos son absolutos para la página.
	position?: {left: number, top: number} | null
}

export const Popup = (props: PopupProps) => (
	<div id="quickTipPopup" className="inline-popup popup-fade-in" style={{left: props.position?.left, top: props.position?.top, opacity: props.show ? 100 : 0}}>
		<div className="inline-popup-container">
			<a className="inline-popup-extract" href={props.url}>
				<div dangerouslySetInnerHTML={{__html: props.html as string}}/>		
			</a>	
		</div>
	</div>
)


export const useQuickInfoPopup = (lang: string) => {
	const [showPopup, setShowPopup] = useState<PopupProps>({ show: false });

  // Agrega escuchas de eventos para enlaces individuales y la ventana emergente en sí misma en la carga de la página
  useEffect(() => {
    const aTags = document.getElementsByTagName("a")
    const links: HTMLAnchorElement[] = []

    for (let i = 0; i < aTags.length; i++) {
      const href = aTags[i].getAttribute("href") || "";
      if (/\/tsconfig\/?#\w+$/.test(href)) {
        aTags[i].addEventListener("mouseenter", handleLinkMouseEnter)
        aTags[i].addEventListener("mouseleave", handleLinkMouseLeave)
        links.push(aTags[i])
      }
    }

    const popupEl = document.getElementById("quickTipPopup")
    popupEl?.addEventListener("mouseenter", handlePopupMouseEnter)
    popupEl?.addEventListener("mouseleave", handlePopupMouseLeave)

    // no olvides limpiarlos al dejarlos
     return () => {
      for (const el of links) {
        el.removeEventListener("mouseenter", handleLinkMouseEnter)
        el.removeEventListener("mouseleave", handleLinkMouseLeave)
      }

      popupEl?.removeEventListener("mouseenter", handlePopupMouseEnter)
      popupEl?.removeEventListener("mouseleave", handlePopupMouseLeave)
     }
  }, [])

  // Mantén un registro de cuánto tiempo el usuario está flotando
  // o cuánto tiempo han dejado el enlace.
  var enterTimeoutId, leaveTimeoutId
  function handleLinkMouseEnter(e) {
    clearTimeout(leaveTimeoutId); 
    const target = e.target as HTMLElement
    const url = target.getAttribute("href") || "";
	const rect = target.getBoundingClientRect()

	enterTimeoutId = setTimeout((args) => {
      setShowPopup(prevProps => {
      	return { ...prevProps, show: true, url: args[0], position: args[1] } })
    }, 500, [url, { left: rect.x, top: rect.bottom + window.scrollY }])
  }

  function handleLinkMouseLeave(e) {
    clearTimeout(enterTimeoutId)
    leaveTimeoutId = setTimeout(() => {
      setShowPopup({
        show: false,
        html: "",
        url: "",
        position: null,
      })
    }, 300);
  }

  // Obtiene contenido del JSON según la URL y configura el HTML interno
  useEffect(() => {
    async function fetchHTML() {
	  if (!showPopup.url) return

      const response = await fetch(`/js/json/${lang}-tsconfig-popup.json`);
      const json = await response.json();
      const url = showPopup.url
      const configType = url.substr(url.indexOf("#") + 1)
	    const html =  `<h5>TSConfig Reference: <code>${configType}</code></h5>${json[configType]}`

      setShowPopup(prevProps => ({ ...prevProps, html }))
    }
    if (showPopup.show) fetchHTML();

  }, [showPopup.show, showPopup.url, showPopup.html])

  // Para mantener las ventanas emergentes cuando el usuario deja el enlace
  // pero aún se cierne sobre la ventana emergente en sí
  function handlePopupMouseEnter(e) {
    clearTimeout(leaveTimeoutId)
  }

  function handlePopupMouseLeave(e) {
    clearTimeout(enterTimeoutId)
    leaveTimeoutId = setTimeout(() => {
    setShowPopup({
        show: false,
        html: "",
        url: "",
        position: null,
      })
    }, 300);
  }

  return showPopup
}