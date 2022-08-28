import { DefinitionInfo, Diagnostic, ModuleResolutionKind, QuickInfo, ReferenceEntry } from "typescript"

type TwoSlashFiles = Array<{ file: string, startIndex: number, endIndex: number, content: string, updatedAt: string }>

// Devuelve una subclase del trabajador que tiene en cuenta la división del archivo Twoslash. La clave para entender
// cómo/por qué funciona esto es que TypeScript no tiene acceso _directo_ al modelo monaco. Las funciones 
// getScriptFileNames y _getScriptText proporcionan la entrada al TSServer, por lo que esta versión del trabajador
// manipula esas funciones para crear una capa adicional de twoslash vfs encima de los vfs existentes.

const worker: import("./types").CustomTSWebWorkerFactory = (TypeScriptWorker, ts, libFileMap) => {
    // @ts-ignore
    const params = new URLSearchParams(self.search)
    const extension = (!!params.get("useJavaScript") ? "js" : params.get("filetype") || "ts") as any

    return class MonacoTSWorker extends TypeScriptWorker {
        mainFile = `input.${extension}`

        // Esta es la clave de caché que es razonable para adicionalTwoslashFiles
        twolashFilesModelString: string = ""
        twoslashFiles: TwoSlashFiles = []
        additionalTwoslashFilenames: string[] = []

        // Estos dos están básicamente usando las partes internas de TypeScriptWorker
        // pero no creo que sea probable que alguna vez vayan a cambiar

        // Necesitamos una forma de obtener acceso al texto principal del editor monaco, que actualmente solo está
        // accesible a través de estos modelos reflejados. Sólo hay uno en un Playground.
        getMainText(): string {
            // @ts-ignore
            return this._ctx.getMirrorModels()[0].getValue()
        }

        // Útil para tomar un programa TypeScript o 
        getLanguageService(): import("typescript").LanguageService {
            // @ts-ignore
            return this._languageService
        }

        // Actualiza nuestras representaciones de archivos twoslash en memoria si es necesario, porque esto se llama
        // mucho, almacena en caché los resultados de acuerdo con el texto principal en el editor monaco.
        updateTwoslashInfoIfNeeded(): void {
            const modelValue = this.getMainText()
            const files = modelValue.split("// @filename: ")
            if (files.length === 1) {
                if (this.twoslashFiles.length) {
                    this.twoslashFiles = []
                    this.additionalTwoslashFilenames = []
                }
                return
            }

            // OK, entonces tenemos que pensar en twoslash, verifica la caché para ver si la entrada es
            // la misma, por lo que no necesitamos volver a ejecutar twoslash
            if (this.twolashFilesModelString === modelValue) return
            const convertedToMultiFile = this.twoslashFiles.length === 0

            // Hace el trabajo
            const splits = splitTwoslashCodeInfoFiles(modelValue, this.mainFile, "file:///")
            const twoslashResults = splits.map(f => {
                const content = f[1].join("\n")
                const updatedAt = (new Date()).toUTCString()
                return {
                    file: f[0],
                    content,
                    startIndex: modelValue.indexOf(content),
                    endIndex: modelValue.indexOf(content) + content.length,
                    updatedAt
                }
            })

            this.twoslashFiles = twoslashResults
            this.additionalTwoslashFilenames = twoslashResults.map(f => f.file).filter(f => f !== this.mainFile)
            this.twolashFilesModelString = modelValue

            if (convertedToMultiFile) {
                console.log("Switched playground to use multiple files: ", this.additionalTwoslashFilenames)
            }
        }

        getCurrentDirectory(): string {
            return "/"
        }

        readDirectory(_path: string, _extensions?: readonly string[], _exclude?: readonly string[], _include?: readonly string[], _depth?: number): string[] {
            const giving = this.twoslashFiles.map(f => f.file)
            return giving.map(f => f.replace("file://", ""))
        }

        // Toma un nombre de archivo y una posición y lo cambia al nuevo archivo/pos de acuerdo con las divisiones de twoslash
        repositionInTwoslash(fileName: string, position: number) {
            this.updateTwoslashInfoIfNeeded()

            if (this.twoslashFiles.length === 0) return { tsFileName: fileName, tsPosition: position, twoslash: undefined }
            const thisFile = this.twoslashFiles.find(r => r.startIndex < position && position <= r.endIndex)
            if (!thisFile) return null

            return {
                tsPosition: position - thisFile.startIndex,
                tsFileName: thisFile.file
            }
        }

        // Qué archivos TypeScript están disponibles, incluidos los archivos creados por twoslash
        // esto se pregunta mucho, así que creé una variable específica para esto que
        // no incluye una copia del archivo predeterminado en la súper llamada
        override getScriptFileNames() {
            const main = super.getScriptFileNames()
            const files = [...main, ...this.additionalTwoslashFilenames]
            return files
        }

        // Este es TypeScript preguntando 'cuál es el contenido de este archivo' - queremos
        // redefinir el modelo TS vfs subyacente con nuestro multiarchivo twoslash 
        // cuando sea posible; de lo contrario, pásalo de vuelta a super
        override _getScriptText(fileName: string): string | undefined {
            const twoslashed = this.twoslashFiles.find(f => fileName === f.file)
            if (twoslashed) {
                return twoslashed.content
            }
            return super._getScriptText(fileName)
        }

        // TypeScript utiliza un sistema de control de versiones en un archivo para saber si
        // necesita volver a revisar el archivo. Lo que hacemos es establecer la fecha y hora al volver a analizar 
        // con twoslash y siempre pase ese número, para que cualquier cambio se refleje
        // en el servidor ts
        override getScriptVersion(fileName: string) {
            this.updateTwoslashInfoIfNeeded()

            const thisFile = this.twoslashFiles.find(f => f.file)
            if (thisFile) return thisFile.updatedAt
            return super.getScriptVersion(fileName)
        }

        // Las APIs que redefinimos brindan la experiencia de herramientas, se recuperan 
        // para manejar el modo potencial multiarchivos. 

        // ¿Quizás hay una manera de hacer que todos estos `bind(this)` desaparezcan?

        // Montón de funciones prometedoras -> diag[]
        override async getSemanticDiagnostics(fileName: string) {
            return this._getDiagsWrapper(super.getSemanticDiagnostics.bind(this), fileName)
        }

        override async getSyntacticDiagnostics(fileName: string) {
            return this._getDiagsWrapper(super.getSyntacticDiagnostics.bind(this), fileName)
        }

        override async getCompilerOptionsDiagnostics(fileName: string) {
            return this._getDiagsWrapper(super.getCompilerOptionsDiagnostics.bind(this), fileName)
        }

        override async getSuggestionDiagnostics(fileName: string) {
            return this._getDiagsWrapper(super.getSuggestionDiagnostics.bind(this), fileName)
        }

        // Las funciones de aquí incluyen una respuesta vacía cuando alguien está interactuando dentro de los espacios.
        // entre archivos (por ejemplo, el // @filename: xyz.ts bit)

        override async getQuickInfoAtPosition(fileName: string, position: number) {
            const empty = Promise.resolve({ kind: "" as any, kindModifiers: "", textSpan: { start: 0, length: 0 } })
            const pos = await this._overrideFileNamePos(super.getQuickInfoAtPosition.bind(this), fileName, position, undefined, empty, (result: QuickInfo | undefined, twoslashFile) => {
                if (twoslashFile && result && result.textSpan)
                    result.textSpan.start += twoslashFile.startIndex

                return result
            })
            return pos
        }

        override async getCompletionsAtPosition(fileName: string, position: number) {
            const empty = Promise.resolve({ isGlobalCompletion: false, isMemberCompletion: false, isNewIdentifierLocation: false, entries: [] })
            const completions = await this._overrideFileNamePos(super.getCompletionsAtPosition.bind(this), fileName, position, undefined, empty, (result) => result)
            return completions
        }

        override async getCompletionEntryDetails(fileName: string, position: number, entry: string) {
            const empty = Promise.resolve({ name: "", kind: "" as any, kindModifiers: "", displayParts: [] })
            return this._overrideFileNamePos(super.getCompletionEntryDetails.bind(this), fileName, position, entry, empty, (result) => result)
        }

        override async getOccurrencesAtPosition(fileName: string, position: number) {
            const empty = Promise.resolve([])
            return this._overrideFileNamePos(super.getOccurrencesAtPosition.bind(this), fileName, position, undefined, empty, (result) => {
                if (result) {
                    result.forEach(re => {
                        const twoslash = this.twoslashFiles.find(f => f.file === re.fileName)
                        if (twoslash) re.textSpan.start += twoslash.startIndex
                    })
                }
                return result
            })
        }

        override async getDefinitionAtPosition(fileName: string, position: number) {
            const empty = Promise.resolve([])
            return this._overrideFileNamePos(super.getDefinitionAtPosition.bind(this), fileName, position, undefined, empty, (result) => {
                if (result) {
                    result.forEach(re => {
                        const twoslash = this.twoslashFiles.find(f => f.file === re.fileName)
                        if (twoslash) {
                            re.textSpan.start += twoslash.startIndex
                        }
                        re.fileName = fileName
                    })
                }
                return result
            })
        }

        override async getReferencesAtPosition(fileName: string, position: number) {
            const empty = Promise.resolve([])
            return this._overrideFileNamePos(super.getReferencesAtPosition.bind(this), fileName, position, undefined, empty, (result) => {
                if (result) {
                    result.forEach(re => {
                        const twoslash = this.twoslashFiles.find(f => f.file === re.fileName)
                        if (twoslash) {
                            re.textSpan.start += twoslash.startIndex
                        }
                        re.fileName = fileName
                    })
                }
                return result
            })
        }

        override async getNavigationBarItems(fileName: string) {
            const empty = Promise.resolve([])
            return this._overrideFileNamePos(super.getNavigationBarItems.bind(this), fileName, -1, undefined, empty, (result) => result)
        }

        // Funciones auxiliares que hacen que los reenlaces sean más fáciles de administrar

        // Puede manejar cualquier archivo, la función POS está reenlazada
        async _overrideFileNamePos<T extends (fileName: string, position: number, other: any) => any>(
            fnc: T,
            fileName: string,
            position: number,
            other: any,
            empty: ReturnType<T>,
            editFunc: (res: Awaited<ReturnType<T>>, twoslash: TwoSlashFiles[0] | undefined) => any): Promise<ReturnType<T>> {
            const newLocation = this.repositionInTwoslash(fileName, position)
            // Los espacios entre archivos omiten la información, pasa un blank
            if (!newLocation) return empty

            const { tsFileName, tsPosition } = newLocation
            const result = await fnc.bind(this)(tsFileName, tsPosition, other)
            editFunc(result, this.twoslashFiles.find(f => f.file === tsFileName))
            return result
        }

        // Puede manejar una func que es múltiple en todos los archivos posibles y luego reenlazarla
        // con sus posiciones de nuevo a la asignación del archivos original
        async _getDiagsWrapper(getDiagnostics: (a: string) => Promise<Diagnostic[]>, fileName: string) {
            if (!this.getLanguageService()) return []

            this.updateTwoslashInfoIfNeeded()

            if (fileName === this.mainFile && this.twoslashFiles.length === 0) return getDiagnostics(fileName)

            let diags: Diagnostic[] = []
            for (const f of this.twoslashFiles) {
                const d = await getDiagnostics(f.file)
                d.forEach(diag => { if (diag && diag.start) diag.start += f.startIndex })
                diags = diags.concat(d)
            }

            return diags
        }
    };
};


// Tomado directamente del código fuente de Twoslash
const splitTwoslashCodeInfoFiles = (code: string, defaultFileName: string, root: string) => {
    const lines = code.split(/\r\n?|\n/g)

    let nameForFile = code.includes(`@filename: ${defaultFileName}`) ? "global.ts" : defaultFileName
    let currentFileContent: string[] = []
    const fileMap: Array<[string, string[]]> = []

    for (const line of lines) {
        if (line.includes("// @filename: ")) {
            fileMap.push([root + nameForFile, currentFileContent])
            nameForFile = line.split("// @filename: ")[1].trim()
            currentFileContent = []
        } else {
            currentFileContent.push(line)
        }
    }
    fileMap.push([root + nameForFile, currentFileContent])

    // Básicamente, despoja estos:
    // ["index.ts", []]
    // ["index.ts", [""]]
    const nameContent = fileMap.filter(n => n[1].length > 0 && (n[1].length > 1 || n[1][0] !== ""))
    return nameContent
}


self.customTSWorkerFactory = worker;
