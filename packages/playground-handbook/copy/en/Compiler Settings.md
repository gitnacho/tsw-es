## Configuración del compilador

No hay un archivo `tsconfig.json` en el patio de juegos, pero debes poder configurar los indicadores del compilador para recrear con precisión un entorno en particular. Incluso para el código más simple, la diferencia en cómo actúa *TypeScript* entre `strict: true` y `strict: false` es bastante drástico y no poder configurarlo para que coincida sería un gran problema.

Sobre esta prosa hay dos barras de herramientas, una es la navegación del sitio en azul brillante ⏤ bajo está la barra de herramientas del *PlayGround*. Esta barra de herramientas tiene un botón "TS Config", al hacer clic en él se mostrará la interfaz principal para configurar las opciones del compilador en el *PlayGround*. Por cierto, lo puedes hacer ahora, luego haz clic en "Cerrar" para volver a este texto.

### Panel de configuración *TS*

El panel *TS Config* contiene una lista enfocada de las opciones del compilador *TypeScript* disponibles dentro de un `tsconfig.json`. Comienza con algunos menús desplegables para algunas de las opciones del compilador más importantes y luego baja a categorías con casillas de verificación booleanas. Esta lista ha crecido orgánicamente a lo largo del tiempo y, en general, representa los entornos que más utilizan las personas. Si necesitas establecer un valor que no está en esa lista, hay una manera de establecer cualquier opción a través de [anotaciones `twoslash`](/play?#Handbook-13) que veremos más adelante en el manual.

Cambiar una bandera del compilador actualizará la *URL* en su navegador (a menos que lo tengas deshabilitado en la configuración). La estructura de la *URL* funciona comparando las opciones del compilador actual con la configuración predeterminada (que se describe a continuación) y solo muestra las opciones del compilador que difieren de las predeterminadas . Por ejemplo, el valor predeterminado para un *playground* es tener habilitado `esModuleInterop: true`, por lo que cambiar `esModuleInterop` a `false` agregaría `?esModuleInterop=false` a la *URL*:

```diff
# Antes
- https://www.typescriptlang.org/play

# Después de apagar `esModuleInterop`
+ https://www.typescriptlang.org/play?esModuleInterop=false
```

Esto ayuda a mantener las *URL* de *Playground* en el lado corto, o al menos no aumenta su tamaño innecesariamente. Puedes notar que a veces las banderas del compilador no son exactamente los mismos en la *URL* que la interfaz de usuario, por ejemplo, `?Target=6` es `target: ES2019` esto nos permite guardar caracteres utilizando el valor numérico de la enumeración en lugar de la representación de cadena.

<details>
<summary>Los valores predeterminados del compilador en un playground</summary>

Efectivamente, el *Playground* tiene configuraciones que se pueden resumir así:

```json
{
  "compilerOptions": {
    "strict": true,
    "module": "esnext",
    "moduleResolution": "node",
    "target": "es2017",
    "jsx": "react",

    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

La realidad es ⏤por supuesto⏤ un poco más compleja, detectamos si una configuración del compilador está en la siguiente lista como una señal para mostrar la configuración del compilador en la interfaz de usuario del panel *TS Config* y solo agregamos una configuración a la *URL* si difiere de esta lista.

Entonces, la especificación completa para la configuración predeterminada del compilador (a partir de *TypeScript 4.5*) se ve así:

```ts
export function getDefaultSandboxCompilerOptions(config: SandboxConfig, monaco: Monaco) {
  const useJavaScript = config.filetype === "js"
  const settings: CompilerOptions = {
    strict: true,

    noImplicitAny: true,
    strictNullChecks: !useJavaScript,
    strictFunctionTypes: true,
    strictPropertyInitialization: true,
    strictBindCallApply: true,
    noImplicitThis: true,
    noImplicitReturns: true,
    noUncheckedIndexedAccess: false,

    useDefineForClassFields: false,

    alwaysStrict: true,
    allowUnreachableCode: false,
    allowUnusedLabels: false,

    downlevelIteration: false,
    noEmitHelpers: false,
    noLib: false,
    noStrictGenericChecks: false,
    noUnusedLocals: false,
    noUnusedParameters: false,

    esModuleInterop: true,
    preserveConstEnums: false,
    removeComments: false,
    skipLibCheck: false,

    checkJs: useJavaScript,
    allowJs: useJavaScript,
    declaration: true,

    importHelpers: false,

    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,

    target: monaco.languages.typescript.ScriptTarget.ES2017,
    jsx: monaco.languages.typescript.JsxEmit.React,
    module: monaco.languages.typescript.ModuleKind.ESNext,
  }

  return { ...settings, ...config.compilerOptions }
}
```

Esto incluye muchos valores que también se establecen en su valor predeterminado. Lo que en realidad puede dificultar la configuración de un entorno *perfecto* porque 'ningún conjunto de valores' puede diferir de `false` para algunas configuraciones, pero romper este sistema rompería la compatibilidad con versiones anteriores (las *URL* cambiarían) y alargaría las *URL*, por lo que permanece tal como está.

</details>

Eso es así para la configuración del compilador. A continuación, [Ejemplos](/play#handbook-2).
