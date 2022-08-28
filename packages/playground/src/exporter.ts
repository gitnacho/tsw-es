import { UI } from "./createUI"

type Sandbox = import("@typescript/sandbox").Sandbox
type CompilerOptions = import("monaco-editor").languages.typescript.CompilerOptions

export const createExporter = (sandbox: Sandbox, monaco: typeof import("monaco-editor"), ui: UI) => {
  function getScriptTargetText(option: any) {
    return monaco.languages.typescript.ScriptTarget[option]
  }

  function getJsxEmitText(option: any) {
    if (option === monaco.languages.typescript.JsxEmit.None) {
      return undefined
    }
    return monaco.languages.typescript.JsxEmit[option].toLowerCase()
  }

  function getModuleKindText(option: any) {
    if (option === monaco.languages.typescript.ModuleKind.None) {
      return undefined
    }
    return monaco.languages.typescript.ModuleKind[option]
  }

  function getModuleResolutionText(option: any) {
    return option === monaco.languages.typescript.ModuleResolutionKind.Classic ? "classic" : "node"
  }

  // Estos son los valores predeterminados del compilador y queremos una diferencia de
  // estos antes de ponerlo en el tema
  const defaultCompilerOptionsForTSC: CompilerOptions = {
    esModuleInterop: false,
    strictNullChecks: false,
    strict: false,
    strictFunctionTypes: false,
    strictPropertyInitialization: false,
    strictBindCallApply: false,
    noImplicitAny: false,
    noImplicitThis: false,
    noImplicitReturns: false,
    checkJs: false,
    allowJs: false,
    experimentalDecorators: false,
    emitDecoratorMetadata: false,
  }

  function getValidCompilerOptions(options: CompilerOptions) {
    const {
      target: targetOption,
      jsx: jsxOption,
      module: moduleOption,
      moduleResolution: moduleResolutionOption,
      ...restOptions
    } = options

    const targetText = getScriptTargetText(targetOption)
    const jsxText = getJsxEmitText(jsxOption)
    const moduleKindText = getModuleKindText(moduleOption)
    const moduleResolutionText = getModuleResolutionText(moduleResolutionOption)

    const opts = {
      ...restOptions,
      ...(targetText && { target: targetText }),
      ...(jsxText && { jsx: jsxText }),
      ...(moduleKindText && { module: moduleKindText }),
      moduleResolution: moduleResolutionText,
    }

    const diffFromTSCDefaults = Object.entries(opts).reduce((acc, [key, value]) => {
      if ((opts as any)[key] && value != defaultCompilerOptionsForTSC[key]) {
        // @ts-ignore
        acc[key] = opts[key]
      }

      return acc
    }, {})

    return diffFromTSCDefaults
  }

  // Basado en https://github.com/stackblitz/core/blob/master/sdk/src/generate.ts
  function createHiddenInput(name: string, value: string) {
    const input = document.createElement("input")
    input.type = "hidden"
    input.name = name
    input.value = value
    return input
  }

  function createProjectForm(project: any) {
    const form = document.createElement("form")

    form.method = "POST"
    form.setAttribute("style", "display:none;")

    form.appendChild(createHiddenInput("project[title]", project.title))
    form.appendChild(createHiddenInput("project[description]", project.description))
    form.appendChild(createHiddenInput("project[template]", project.template))

    if (project.tags) {
      project.tags.forEach((tag: string) => {
        form.appendChild(createHiddenInput("project[tags][]", tag))
      })
    }

    if (project.dependencies) {
      form.appendChild(createHiddenInput("project[dependencies]", JSON.stringify(project.dependencies)))
    }

    if (project.settings) {
      form.appendChild(createHiddenInput("project[settings]", JSON.stringify(project.settings)))
    }

    Object.keys(project.files).forEach(path => {
      form.appendChild(createHiddenInput(`project[files][${path}]`, project.files[path]))
    })

    return form
  }

  const typescriptVersion = sandbox.ts.version
  // prettier-ignore
  const stringifiedCompilerOptions = JSON.stringify({ compilerOptions: getValidCompilerOptions(sandbox.getCompilerOptions()) }, null, '  ')

  // TODO: pull deps
  function openProjectInStackBlitz() {
    const project = {
      title: "Playground Export - ",
      description: "123",
      template: "typescript",
      files: {
        "index.ts": sandbox.getText(),
        "tsconfig.json": stringifiedCompilerOptions,
      },
      dependencies: {
        typescript: typescriptVersion,
      },
    }
    const form = createProjectForm(project)
    form.action = "https://stackblitz.com/run?view=editor"
    // https://github.com/stackblitz/core/blob/master/sdk/src/helpers.ts#L9
    // + buildProjectQuery(options);
    form.target = "_blank"

    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
  }

  function openInBugWorkbench() {
    const hash = `#code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`
    document.location.assign(`/dev/bug-workbench/${hash}`)
  }

  function openInTSAST() {
    const hash = `#code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`
    document.location.assign(`https://ts-ast-viewer.com/${hash}`)
  }

  function openInVSCodeDev() {
    const search = document.location.search
    const hash = `#code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`
    document.location.assign(`https://insiders.vscode.dev/tsplay/${search}${hash}`)
  }

  function openProjectInCodeSandbox() {
    const files = {
      "package.json": {
        content: {
          name: "TypeScript Playground Export",
          version: "0.0.0",
          description: "TypeScript playground exported Sandbox",
          dependencies: {
            typescript: typescriptVersion,
          },
        },
      },
      "index.ts": {
        content: sandbox.getText(),
      },
      "tsconfig.json": {
        content: stringifiedCompilerOptions,
      },
    }

    // Usa la API de get v1
    const parameters = sandbox.lzstring
      .compressToBase64(JSON.stringify({ files }))
      .replace(/\+/g, "-") // Convierte '+' en '-'
      .replace(/\//g, "_") // Convierte '/' en '_'
      .replace(/=+$/, "") // Eliminar el '=' final

    const url = `https://codesandbox.io/api/v1/sandboxes/define?view=editor&parameters=${parameters}`
    document.location.assign(url)

    // Alternativa usando la API URL http, que usa POST. Esto tiene la compensación donde
    // la naturaleza asíncrona de la llamada significa que la redirección al final activa
    // mecanismos de seguridad emergentes en los navegadores porque la función no está bendecida como
    // siendo un resultado directo de una acción del usuario.

    // fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
    //   method: "POST",
    //   body: JSON.stringify({ files }),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(x => x.json())
    // .then(data => {
    //   window.open('https://codesandbox.io/s/' + data.sandbox_id, '_blank');
    // });
  }

  function codify(code: string, ext: string) {
    return "```" + ext + "\n" + code + "\n```\n"
  }

  async function makeMarkdown() {
    const query = sandbox.createURLQueryWithCompilerOptions(sandbox)
    const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`
    const jsSection =
      sandbox.config.filetype === "js"
        ? ""
        : `
<details><summary><b>Output</b></summary>

${codify(await sandbox.getRunnableJS(), "ts")}

</details>
`

    return `
${codify(sandbox.getText(), "ts")}

${jsSection}

<details><summary><b>Opciones del compilador</b></summary>

${codify(stringifiedCompilerOptions, "json")}

</details>

**Playground Link:** [Provided](${fullURL})
      `
  }
  async function copyAsMarkdownIssue(e: React.MouseEvent) {
    e.persist()

    const markdown = await makeMarkdown()
    ui.showModal(
      markdown,
      document.getElementById("exports-dropdown")!,
      "Markdown Version of Playground Code for GitHub Issue",
      undefined,
      e
    )
    return false
  }

  function copyForChat(e: React.MouseEvent) {
    const query = sandbox.createURLQueryWithCompilerOptions(sandbox)
    const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`
    const chat = `[Playground Link](${fullURL})`
    ui.showModal(chat, document.getElementById("exports-dropdown")!, "Markdown for chat", undefined, e)
    return false
  }

  function copyForChatWithPreview(e: React.MouseEvent) {
    e.persist()

    const query = sandbox.createURLQueryWithCompilerOptions(sandbox)
    const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`

    const ts = sandbox.getText()
    const preview = ts.length > 200 ? ts.substring(0, 200) + "..." : ts.substring(0, 200)

    const jsx = getJsxEmitText(sandbox.getCompilerOptions().jsx)
    const codeLanguage = jsx !== undefined ? "tsx" : "ts"
    const code = "```" + codeLanguage + "\n" + preview + "\n```\n"
    const chat = `${code}\n[Playground Link](${fullURL})`
    ui.showModal(chat, document.getElementById("exports-dropdown")!, "Markdown code", undefined, e)
    return false
  }

  function exportAsTweet() {
    const query = sandbox.createURLQueryWithCompilerOptions(sandbox)
    const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`

    document.location.assign(`http://www.twitter.com/share?url=${fullURL}`)
  }

  return {
    openProjectInStackBlitz,
    openProjectInCodeSandbox,
    copyAsMarkdownIssue,
    copyForChat,
    copyForChatWithPreview,
    openInTSAST,
    openInBugWorkbench,
    openInVSCodeDev,
    exportAsTweet,
  }
}
