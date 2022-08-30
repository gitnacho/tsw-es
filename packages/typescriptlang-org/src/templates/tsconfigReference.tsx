import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"

import { useIntl } from "react-intl";
import { createInternational } from "../lib/createInternational"
import { Intl } from "../components/Intl"
import { headCopy } from "../copy/en/head-seo"

import "./markdown.scss"
import "./tsconfig.scss"

type Category = { anchor: string, display: string, options: Array<{ anchor: string, name: string }> }

type Props = {
  pageContext: {
    categories: Category[],
    tsconfigMDPath: string,
    intro: {
      html: string
      header: string
      preview: string
    },
    locale: string
  },
  data: GatsbyTypes.TSConfigReferenceTemplateQuery,
  path: string
}

const TSConfigReferenceTemplateComponent = (props: Props) => {
  const i = createInternational<typeof headCopy>(useIntl())

  const post = props.data.markdownRemark
  if (!post) {
    console.log("Could not render:", JSON.stringify(props))
    return <div></div>
  }

  useEffect(() => {
    const calculateOffset = (
      target: HTMLElement,
      subnav: HTMLElement | null
    ) => {
      let offset = target.offsetTop
      if (subnav) {
        // Resta la altura de subnav si "position: sticky" está activa
        const style = window.getComputedStyle(subnav)
        if (style.position === "sticky") {
          offset -= subnav.clientHeight
        }
      }
      return offset
    }

    const scrollToHash = (hash: string) => {
      if (hash === "#") return
      const target = document.querySelector<HTMLElement>(hash)
      if (!target) return

      // Busca subnav si el objetivo es descendiente de <article>
      let search = target
      let subnav: HTMLElement | null = null
      while (search.parentElement) {
        search = search.parentElement
        if (search.tagName === "ARTICLE") {
          subnav = search.querySelector("nav")
          break
        }
      }

      // Se desplaza suavemente hacia el objetivo
      const offset = calculateOffset(target, subnav)
      if (!offset) return
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }

    // Overrides the anchor behavior to smooth scroll instead
    const hashLinks = document.querySelectorAll<HTMLAnchorElement>(
      ".tsconfig a[href^='#']"
    )
    hashLinks.forEach(link => {
      link.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault()
        scrollToHash(link.hash)

        // Actualiza la URL sin activar el comportamiento de desplazamiento predeterminado
        window.history.pushState(null, "", link.hash)
      })
    })

    // Establece la selección actual
    // Basado en https://css-tricks.com/sticky-smooth-active-nav/
    const subnavs = document.querySelectorAll<HTMLElement>(
      ".tsconfig article nav"
    )
    const updateSidebar = () => {
      const fromTop = window.scrollY

      subnavs.forEach(subnav => {
        const subnavLinks = subnav.querySelectorAll<HTMLAnchorElement>(
          "a[href^='#']"
        )
        let currentPossibleAnchor: HTMLAnchorElement | undefined

        // Se Desplaza hacia abajo para encontrar el ancla más alta en la pantalla
        subnavLinks.forEach(link => {
          const section = document.querySelector<HTMLElement>(link.hash)
          if (!section) return
          const offset = calculateOffset(section, subnav)
          const isBelow = offset - 100 <= fromTop
          if (isBelow) currentPossibleAnchor = link
        })

        // A continuación, establece la etiqueta activa
        subnavLinks.forEach(link => {
          if (link === currentPossibleAnchor) {
            link.classList.add("current")
          } else {
            link.classList.remove("current")
          }
        })
      })
    }

    // Maneja el ajuste del desplazamiento 
    window.addEventListener("scroll", updateSidebar, { passive: true, capture: true });
    updateSidebar()

    return () => {
      window.removeEventListener("scroll", updateSidebar)
    }
  }, [])

  const joiner = (options: any[], opt: any) => {
    const index = options.indexOf(opt)
    if (index === options.length - 1) return null
    return (index === options.length - 2) ? (<span> and </span>) : <span>, </span>
  }

  const anchor = (sectionName: string | undefined, anchor: string) => {
    const prefixes = {
      "watchOptions": "watch",
      "typeAcquisition": "type"
    }
    if (!sectionName || !prefixes[sectionName]) return "#" + anchor
    return `#${prefixes[sectionName]}-${anchor}`
  }

  const showCategories = (categories: Category[], sectionName?: string) => {
    return <div className={sectionName ? "tsconfig-quick-nav grouped" : "tsconfig-quick-nav"}>
      {sectionName ? <h4><code><a href={`#${sectionName}`}>"{sectionName}"</a></code></h4> : <div />}
      {
        categories.map(c => <div className="tsconfig-quick-nav-category" key={c.display}>
          <h5 id={`quick-nav-${c.anchor}`}>{c.display}</h5>
          <ol aria-labelledby={`quick-nav-${c.anchor}`}>
            {c.options.map(o => <li key={o.name}><code><a href={anchor(sectionName, o.anchor)}>{o.anchor}</a>{joiner(c.options, o)}</code></li>)}
          </ol>
        </div>)
      }
    </div >
  }
  const categories = props.pageContext.categories

  const root = categories.filter(c => c.anchor === "Top Level")
  const watch = categories.filter(c => c.anchor === "watchOptions")
  const typeAcq = categories.filter(c => c.anchor === "typeAcquisition")
  const skip = ["Top Level", "watchOptions", "typeAcquisition"]
  const compilerOpts = categories.filter(c => !skip.includes(c.anchor))

  const [openInfo, setOpenInfo] = useState(false)
  const toggleInfoState = () => setOpenInfo(!openInfo)


  return (
    <Layout title={i("tsconfig_title")} description={i("tsconfig_description")} lang={props.pageContext.locale}>

      <div className={`tsconfig raised main-content-block markdown button ${openInfo ? "open" : "closed"}`} >
        <a href="#" onClick={toggleInfoState}>
          <h2>
            <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 1L11 11.5L21.5 1" stroke="black" />
            </svg>
            {props.pageContext.intro.header}</h2>
          {!openInfo && <div className="preview">{props.pageContext.intro.preview}</div>}
        </a>

        {openInfo && <div className="content">  <div dangerouslySetInnerHTML={{ __html: props.pageContext.intro.html }} /></div>}
      </div>

      <div className="tsconfig main-content-block">
        <h2>Compiler Options</h2>
        {showCategories(root)}
        {showCategories(compilerOpts, "compilerOptions")}
        {showCategories(watch, "watchOptions")}
        {showCategories(typeAcq, "typeAcquisition")}
      </div>


      <div dangerouslySetInnerHTML={{ __html: post.html! }} />

    </Layout >
  )
}


export const pageQuery = graphql`
query TSConfigReferenceTemplate($tsconfigMDPath: String!) {

  markdownRemark(fileAbsolutePath: {eq: $tsconfigMDPath} ) {
    id
    html
    frontmatter {
      permalink
    }
  }
}
`


export default (props: Props) => <Intl locale={props.pageContext.locale}><TSConfigReferenceTemplateComponent {...props} /></Intl>
