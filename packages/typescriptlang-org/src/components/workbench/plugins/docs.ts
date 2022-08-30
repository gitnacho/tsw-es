type Sandbox = import("@typescript/sandbox").Sandbox
type Factory = import("../../../../static/js/playground").PluginFactory
type PluginUtils = import("../../../../static/js/playground").PluginUtils

import tsconfigOptions from "../../../../../tsconfig-reference/output/en-summary.json"

const examples = [
  {
    issue: 37231,
    name: "Incorrect Type Inference Example",
    blurb:
      "Usa <code>// ^?</code> para resaltar cómo la inferencia da diferentes resultados en diferentes ubicaciones",
    code: `// @noImplicitAny: false

type Entity = {
  someDate: Date | null;
} & ({ id: string; } | { id: number; })

type RowRendererMeta<TInput extends {}> = {
  [key in keyof TInput]: { key: key; caption: string; formatter?: (value: TInput[key]) => string; };
}
type RowRenderer<TInput extends {}> = RowRendererMeta<TInput>[keyof RowRendererMeta<TInput>];

const test: RowRenderer<Entity> = {
  key: 'someDate',
  caption: 'My Date',
  formatter: (value) => value ? value.toString() : '-' // value: any
//            ^?
}

const thisIsNotTheIssue: Partial<RowRendererMeta<Entity>> = {
  someDate: {
    key: 'someDate',
    caption: 'My Date',
    formatter: (value) => value ? value.toString() : '-' // value: Date | null
//              ^?
  }
}`,
  },
]

const reference: {
  name: string
  content: (
    sandbox: Sandbox,
    container: HTMLDivElement,
    ds: ReturnType<PluginUtils["createDesignSystem"]>
  ) => void
}[] = [
  {
    name: "Compiler Options",
    content: (sandbox, container, ds) => {
      ds.p(`
Puedes establecer indicadores del compilador a través de comentarios <code>// @[option]</code> dentro del ejemplo.
<ul>
  <li>Booleans: <code>// @strict: true</code> or <code>// @strict: false</code>.<br/>Puedes omitir <code>: true</code> para obtener el mismo comportamiento.</li>
  <li>Strings: <code>// @target: ES2015</code></li>
  <li>Numbers: <code>// @target: 4</code></li>
  <li>Lists: <code>// @types: ['jest']</code></li>
</ul>
`)

      ds.subtitle("Compiler Option Reference")
      tsconfigOptions.options
        .sort((l, r) => l.id.localeCompare(r.id))
        .forEach(opt => {
          const skip = ["Project_Files_0", "Watch_Options_999"]
          if (skip.includes(opt.categoryID)) return

          ds.p(`<code>// @${opt.id}</code><br>${opt.oneliner}.`)
        })
    },
  },
  {
    name: "Multi File",
    content: (sandbox, container, ds) => {
      ds.p(
        "The code file can be converted into multiple files behind the scenes. This is done by chopping the code sample whenever there is a <code>// @filename: [path]</code>."
      )

      ds.code(
        `
// @showEmit
// @filename: index.ts
import {pi} from "./utils"
console.log(pi)

// @filename: utils.ts
export const pi = "3.14"
`.trim()
      )

      const button = document.createElement("button")
      button.textContent = "See an Example"
      button.onclick = () =>
        sandbox.setText(
          `
// @filename: service.ts
export type Service = {
  id: string
  display: string
}

// @filename: app.ts
import type { Service } from "./service";
//                            ^ - this error is OK

const myServices: Service[] = [
  { id: "launch", display: "Launch" },
  { id: "lunch", disply: "Lunch" },
//               ^ - this error is real but hidden
//                   you can see it in 'Assertions'
]
      `.trim()
        )
      container.appendChild(button)
    },
  },
  {
    name: "Queries",
    content: (sandbox, container, ds) => {
      ds.p(
        "Twoslash supports making queries for what the type is at a particular location of code. It also is a specially crafted comment. "
      )
      ds.code(
        `
const myExample = {
  hello: "world"
}

myExample.hello;
//         ^?
      `.trim()
      )

      ds.p(
        "You can use as many as you want of these, but you can only have one per line."
      )
      const button = document.createElement("button")
      button.textContent = "See an Example"
      button.onclick = () =>
        sandbox.setText(
          `
const button = document.createElement("button");
button.textContent = "See an Example";

button.onclick = () => {
  console.log("Example has been clicked");
  button.disabled = true;
// ^?
}

document.body.appendChild(button);
//       ^?
      `.trim()
        )
      container.appendChild(button)

      ds.p(
        "The repro testing system will use these queries as an indicator of what has changed, so if you highlight a bug in inference then when it is fixed and the type has changed it will be raised."
      )
    },
  },
  {
    name: "Emitter",
    content: (sandbox, container, ds) => {
      ds.p(
        `
Hay formas de hacer que tu reproducción de prueba sea sobre el resultado de ejecutar TypeScript. Hay dos tipos de comentarios que se pueden utilizar para resaltar estos archivos.
<br/><br/><code>// @showEmit</code> es un atajo para mostrar el archivo <code>.js</code> para una muestra de código de un solo archivo:
`.trim()
      )
      ds.code(
        `
// @showEmit
export const helloWorld: string = "Hi"
`.trim()
      )
      ds.p(
        `La forma larga es <code>// @showEmittedFile: [filename]</code> que permite mostrar cualquier archivo emitido`
      )
      ds.code(
        `
// @declaration: true
// @showEmit
// @showEmittedFile: index.d.ts

export function getStringLength(value: string) {
  return value.length
}
`.trim()
      )
      ds.p("Multi-file seems to be buggy ATM, but this should work eventually:")
      ds.code(
        `
// @showEmit
// @showEmittedFile: b.js

// @filename: a.ts
export const helloWorld: string = "Hi"

// @filename: b.ts
const abc = ""
`.trim()
      )
    },
  },
  {
    name: "Defaults",
    content: (sandbox, container, ds) => {
      examples.forEach(e => {
        ds.p(
          "El compilador twoslash solo tiene algunos cambios con respecto al TSConfig vacío predeterminado "
        )
        ds.code(`
  const defaultCompilerOptions: CompilerOptions = {
    strict: true,
    target: ts.ScriptTarget.ES2016,
    allowJs: true
  }
`)
      })
      ds.p(
        "Es posible que debas deshacer <code>strict</code> para algunas muestras, pero las otras no deberían afectar a la mayoría de las reproducciones de código."
      )
    },
  },
  {
    name: "Examples",
    content: (sandbox, container, ds) => {
      ds.p(
        "Nota: esta sección es difícil de documentar... Es posible que estos errores se hayan solucionado desde que se crearon los documentos. Considera estas tesis como ideas sobre cómo hacer reproducciones en lugar de reproducciones útiles de errores."
      )
      examples.forEach(e => {
        // prettier-ignore
        ds.subtitle(e.name + ` <a href='https://github.com/microsoft/TypeScript/issues/${e.issue}'>${e.issue}</a>`)
        ds.p(e.blurb)
        const button = document.createElement("button")
        button.textContent = "Show example"
        button.onclick = () => sandbox.setText(e.code)
        container.appendChild(button)
      })
    },
  },
]

export const workbenchReferencePlugin: Factory = (i, utils) => {
  return {
    id: "ref",
    displayName: "Docs",
    didMount: (sandbox, container) => {
      const ds = utils.createDesignSystem(container)

      const tabContainer = document.createElement("div")
      const tabBar = ds.createTabBar()
      const tabs: HTMLElement[] = []

      reference.forEach((r, i) => {
        const tab = ds.createTabButton(r.name)
        tabs.push(tab)
        tab.onclick = () => {
          tabs.forEach(t => t.classList.remove("active"))
          tab.classList.add("active")

          const ds = utils.createDesignSystem(tabContainer)
          ds.clear()
          r.content(sandbox, tabContainer, ds)
        }
        tabBar.appendChild(tab)

        if (i === 0) tab.onclick({} as any)
      })

      container.appendChild(tabBar)
      container.appendChild(tabContainer)
    },
  }
}
