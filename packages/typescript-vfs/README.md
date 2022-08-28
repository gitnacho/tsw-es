### *TypeScript* `VFS`

Un sistema de archivos virtual *TypeScript* basado en mapas.

Útil cuando necesitas:

- Ejecutar *TypeScript* en el navegador
- Ejecutar entornos virtuales de *TypeScript* donde los archivos en el disco no son la fuente de la verdad

### Uso

Empieza por crear un mapa que represente todos los archivos en el `ts.System` virtual:

```ts
import { createSystem } from "@typescript/vfs"

const fsMap = new Map<string, string>()
fsMap.set("index.ts", 'const a = "Hello World"')

const system = createSystem(fsMap)
```

Luego puedes crear un entorno *TypeScript* virtual:

```ts
import { createSystem, createVirtualTypeScriptEnvironment } from "@typescript/vfs"
import ts from "typescript"

const fsMap = new Map<string, string>()
const system = createSystem(fsMap)

const compilerOpts = {}
const env = createVirtualTypeScriptEnvironment(system, ["index.ts"], ts, compilerOpts)

// A continuación, puedes interactuar con languageService para realizar una introspección del código.
env.languageService.getDocumentHighlights("index.ts", 0, ["index.ts"])
```

Cuando trabajes en pruebas o en entornos con acceso al sistema de archivos, puedes cambiar tu sistema virtual con `ts.sys` para usar el sistema de archivos real con el entorno virtual.

## *API*

Lo más probable es que estés interesado en la *API* disponible en `env.languageService`, aquí está a partir de 3.7.4:

<!-- prettier-ignore-start -->

```ts
interface LanguageService {
    cleanupSemanticCache(): void;
    getSyntacticDiagnostics(fileName: string): DiagnosticWithLocation[];
    getSemanticDiagnostics(fileName: string): Diagnostic[];
    getSuggestionDiagnostics(fileName: string): DiagnosticWithLocation[];
    getCompilerOptionsDiagnostics(): Diagnostic[];
    getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications;
    getEncodedSemanticClassifications(fileName: string, span: TextSpan): Classifications;
    getCompletionsAtPosition(fileName: string, position: number, options: GetCompletionsAtPositionOptions | undefined): WithMetadata<CompletionInfo> | undefined;
    getCompletionEntryDetails(fileName: string, position: number, name: string, formatOptions: FormatCodeOptions | FormatCodeSettings | undefined, source: string | undefined, preferences: UserPreferences | undefined): CompletionEntryDetails | undefined;
    getCompletionEntrySymbol(fileName: string, position: number, name: string, source: string | undefined): Symbol | undefined;
    getQuickInfoAtPosition(fileName: string, position: number): QuickInfo | undefined;
    getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan | undefined;
    getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan | undefined;
    getSignatureHelpItems(fileName: string, position: number, options: SignatureHelpItemsOptions | undefined): SignatureHelpItems | undefined;
    getRenameInfo(fileName: string, position: number, options?: RenameInfoOptions): RenameInfo;
    findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean, providePrefixAndSuffixTextForRename?: boolean): readonly RenameLocation[] | undefined;
    getSmartSelectionRange(fileName: string, position: number): SelectionRange;
    getDefinitionAtPosition(fileName: string, position: number): readonly DefinitionInfo[] | undefined;
    getDefinitionAndBoundSpan(fileName: string, position: number): DefinitionInfoAndBoundSpan | undefined;
    getTypeDefinitionAtPosition(fileName: string, position: number): readonly DefinitionInfo[] | undefined;
    getImplementationAtPosition(fileName: string, position: number): readonly ImplementationLocation[] | undefined;
    getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[] | undefined;
    findReferences(fileName: string, position: number): ReferencedSymbol[] | undefined;
    getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[] | undefined;
    getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string, excludeDtsFiles?: boolean): NavigateToItem[];
    getNavigationBarItems(fileName: string): NavigationBarItem[];
    getNavigationTree(fileName: string): NavigationTree;
    getOutliningSpans(fileName: string): OutliningSpan[];
    getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
    getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
    getIndentationAtPosition(fileName: string, position: number, options: EditorOptions | EditorSettings): number;
    getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
    getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
    getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
    getDocCommentTemplateAtPosition(fileName: string, position: number): TextInsertion | undefined;
    isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): boolean;
    getJsxClosingTagAtPosition(fileName: string, position: number): JsxClosingTagInfo | undefined;
    getSpanOfEnclosingComment(fileName: string, position: number, onlyMultiLine: boolean): TextSpan | undefined;
    toLineColumnOffset(fileName: string, position: number): LineAndCharacter;
    getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: readonly number[], formatOptions: FormatCodeSettings, preferences: UserPreferences): readonly CodeFixAction[];
    getCombinedCodeFix(scope: CombinedCodeFixScope, fixId: {}, formatOptions: FormatCodeSettings, preferences: UserPreferences): CombinedCodeActions;
    applyCodeActionCommand(action: CodeActionCommand, formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult>;
    applyCodeActionCommand(action: CodeActionCommand[], formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult[]>;
    applyCodeActionCommand(action: CodeActionCommand | CodeActionCommand[], formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult | ApplyCodeActionCommandResult[]>;
    getApplicableRefactors(fileName: string, positionOrRange: number | TextRange, preferences: UserPreferences | undefined): ApplicableRefactorInfo[];
    getEditsForRefactor(fileName: string, formatOptions: FormatCodeSettings, positionOrRange: number | TextRange, refactorName: string, actionName: string, preferences: UserPreferences | undefined): RefactorEditInfo | undefined;
    organizeImports(scope: OrganizeImportsScope, formatOptions: FormatCodeSettings, preferences: UserPreferences | undefined): readonly FileTextChanges[];
    getEditsForFileRename(oldFilePath: string, newFilePath: string, formatOptions: FormatCodeSettings, preferences: UserPreferences | undefined): readonly FileTextChanges[];
    getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean, forceDtsEmit?: boolean): EmitOutput;
    getProgram(): Program | undefined;
}
```
<!-- prettier-ignore-end -->

## Uso

#### Al trabajar con Web

Es **muy** probable que necesites configurar tus archivos lib `*.d.ts` para usar esto.

Si estás ejecutando en un entorno donde tienes acceso a el directorio `node_modules`, entonces puedes escribir un código como este:

```ts
const getLib = (name: string) => {
  const lib = dirname(require.resolve("typescript"))
  return readFileSync(join(lib, name), "utf8")
}

const addLib = (name: string, map: Map<string, string>) => {
  map.set("/" + name, getLib(name))
}

const createDefaultMap2015 = () => {
  const fsMap = new Map<string, string>()
  addLib("lib.es2015.d.ts", fsMap)
  addLib("lib.es2015.collection.d.ts", fsMap)
  addLib("lib.es2015.core.d.ts", fsMap)
  addLib("lib.es2015.generator.d.ts", fsMap)
  addLib("lib.es2015.iterable.d.ts", fsMap)
  addLib("lib.es2015.promise.d.ts", fsMap)
  addLib("lib.es2015.proxy.d.ts", fsMap)
  addLib("lib.es2015.reflect.d.ts", fsMap)
  addLib("lib.es2015.symbol.d.ts", fsMap)
  addLib("lib.es2015.symbol.wellknown.d.ts", fsMap)
  addLib("lib.es5.d.ts", fsMap)
  return fsMap
}
```

Esta lista es el conjunto predeterminado de definiciones (es importante tener en cuenta que las diferentes opciones para `target` o `lib` afectarán el aspecto de esta lista) y está tomando el contenido de la biblioteca de la dependencia local de *TypeScript*.

Mantenerse en la parte superior de esta lista es bastante trabajo, por lo que esta biblioteca incluye funciones para generar un mapa con estas funciones precargadas de una versión de *TypeScript* disponible en disco.

Nota: es posible que esta lista se desincronice con *TypeScript* con el tiempo. Se sincronizó por última vez con ¨TypeScript 3.8.0-rc*.

```ts
import { createDefaultMapFromNodeModules } from "@typescript/vfs"
import ts from "typescript"

const fsMap = createDefaultMapFromNodeModules({ target: ts.ScriptTarget.ES2015 })
fsMap.set("index.ts", "const hello = 'hi'")
// ...
```

Si no tienes acceso a `node_modules`, puedes usar el *CDN* de *TypeScript* o `unpkg` para recuperar los archivos `lib`. Esto podría ser de hasta 1.5*MB*, y probablemente deberías almacenar los valores en `localStorage` para que los usuarios solo tengan que tomarlo una vez.

Esto se gestiona a través de `createDefaultMapFromCDN`.

```ts
import { createDefaultMapFromCDN } from "@typescript/vfs"
import ts from "typescript"
import lzstring from "lz-string"

const start = async () => {
  const shouldCache = true
  // Esto almacena en caché los archivos lib en el localStorage del sitio.
  const fsMap = await createDefaultMapFromCDN({ target: ts.ScriptTarget.ES2015 }, "3.7.3", shouldCache, ts)

  // Esto almacena los archivos lib como una cadena comprimida para ahorrar espacio en la caché
  const otherMap = await createDefaultMapFromCDN({ target: ts.ScriptTarget.ES2015 }, "3.7.3", shouldCache, ts, lzstring)

  fsMap.set("index.ts", "const hello = 'hi'")
  // ...
}

start()
```

La caché de `CDN`:

- Purga automáticamente los elementos que utilizan una versión diferente de *TypeScript* para ahorrar espacio
- Puedes usar una copia del módulo `lz-string` para comprimir/descomprimir los archivos `lib`

#### Al trabajar con `node`

Si puedes acceder de manera confiable al sistema de archivos, entonces puedes tener un tiempo más simple:

```ts
const compilerOpts: ts.CompilerOptions = { target: ts.ScriptTarget.ES2016, esModuleInterop: true }
const fsMap = new Map<string, string>()

// Si usas importaciones donde los tipos no coinciden directamente con tu representación FS (como el
// importaciones para node) luego usa las directivas de triple barra para asegurarte de que los globales se configuren primero.
const content = `/// <reference types="node" />\nimport * as path from 'path';\npath.`
fsMap.set("index.ts", content)

// Al proporcionar una raíz del proyecto, el sistema sabe cómo resolver node_modules correctamente
const projectRoot = path.join(__dirname, "..")
const system = createFSBackedSystem(fsMap, projectRoot)
const env = createVirtualTypeScriptEnvironment(system, ["index.ts"], ts, compilerOpts)

// Solicita autocompleción en `path.|`
const completions = env.languageService.getCompletionsAtPosition("index.ts", content.length, {})
```

`createFSBackedSystem` te permitirá desplazarte por un entorno virtual en la parte superior del sistema de archivos en una ruta en particular.

### Un ejemplo completo

¿Cómo se ve un ejemplo completo? Esto viene básicamente del código base literal del `Sandbox` de *TypeScript*:

```ts
import ts from "typescript"
import tsvfs from "@typescript/vfs"
import lzstring from "lz-string"

const fsMap = await tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts, lzstring)
fsMap.set("index.ts", "// main TypeScript file content")

const system = tsvfs.createSystem(fsMap)
const host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts)

const program = ts.createProgram({
  rootNames: [...fsMap.keys()],
  options: compilerOptions,
  host: host.compilerHost,
})

// Esto actualizará el fsMap con nuevos archivos.
// para los archivos .d.ts y .js
program.emit()

// Ahora puedo mirar el AST por el archivo .ts también
const index = program.getSourceFile("index.ts")
```

## Usar esta dependencia

Este paquete se puede utilizar como una importación `commonjs`, un `esmodule` y directamente a través de una etiqueta de script que edita el espacio de nombres global. Todos estos archivos están incrustados dentro de los paquetes publicados.
