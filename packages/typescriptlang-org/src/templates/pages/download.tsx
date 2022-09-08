import * as React from "react"
import { Intl } from "../../components/Intl"
import { createIntlLink } from "../../components/IntlLink"
import { Layout } from "../../components/layout"
import { QuickJump } from "../../components/QuickJump"
import releaseInfo from "../../lib/release-info.json"


type Props = {
  pageContext: any
  b: NewableFunction
}

const changeExample = (code: string) => document.getElementById("code-example")!.textContent = code
const changeExample2 = (code: string) => document.getElementById("code-run")!.textContent = code

const Index: React.FC<Props> = (props) => {
  const Link = createIntlLink(props.pageContext.lang)

  return <Layout title="Cómo configurar TypeScript" description="Agrega TypeScript a tu proyecto o instala TypeScript globalmente" lang={props.pageContext.lang}>
    <div className="raised main-content-block">
      <h1>Descarga TypeScript</h1>
      <p>TypeScript se puede instalar a través de tres rutas de instalación según cómo pretendas usarlo: un módulo npm, un paquete NuGet o una extensión de Visual Studio.</p>
      <p>Si usas Node.js, desea la versión npm. Si usas MSBuild en tu proyecto, desea el paquete NuGet o la extensión de Visual Studio.</p>
    </div>

    <div className="raised main-content-block">
      <h2>TypeScript en tu proyecto</h2>
      <p>Tener TypeScript configurado por proyecto te permite tener muchos proyectos con muchas versiones diferentes de TypeScript, esto hace que cada proyecto funcione de manera consistente.</p>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>vía npm</h3>
          <p>TypeScript está disponible como un <a href="https://www.npmjs.com/package/typescript">paquete en el registro de npm</a> disponible como <code>"typescript"</code>. </p>
          <p>Necesitarás una copia de <a title="Enlace al proyecto node.js" href="https://nodejs.org/en/">Node.js</a> como entorno para ejecutar el paquete. Luego usa un administrador de dependencias como <a title="Enlace al administrador de paquetes npm" href='https://www.npmjs.com/'>npm</a>, <a title="Enlace al paquete yarn manager" href='https://yarnpkg.com/'>yarn</a> o <a title="Enlace al administrador de paquetes pnpm" href='https://pnpm.js.org/'>pnpm< /a> para descargar TypeScript en tu proyecto.</p>
          <div>
            <code id='code-example'>npm install typescript --save-dev</code><br /><br />
            <button onClick={() => changeExample("npm install typescript --save-dev")}>npm</button> <button onClick={() => changeExample("yarn add typescript --dev")}>yarn</button> <button onClick={() => changeExample("pnpm add typescript -D")}>pnpm</button>
          </div>
          <p>Todos estos administradores de dependencia admiten archivos de bloqueo, lo que garantiza que todos los miembros de tu equipo utilicen la misma versión del lenguaje. A continuación, puedes ejecutar el compilador de TypeScript con uno de los siguientes comandos:</p>
          <div>
            <code id='code-run'>npx tsc</code><br /><br />
            <button onClick={() => changeExample2("npx tsc")}>npm</button> <button onClick={() => changeExample2("yarn tsc")}>yarn</button> <button onClick={() => changeExample2("pnpm tsc")}>pnpm</button>
          </div>
        </div>

        <div style={{ padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>con Visual Studio</h3>
          <p>Para la mayoría de los tipos de proyectos, puedes obtener TypeScript como un paquete en Nuget para tus proyectos de MSBuild, por ejemplo, una aplicación ASP.NET Core.</p>
          <p>Al usar Nuget, puedes <a href="https://docs.microsoft.com/visualstudio/javascript/tutorial-aspnet-with-typescript">instalar TypeScript a través de Visual Studio</a> usando:</ p>
          <ul>
            <li>
              La ventana Administrar paquetes NuGet (a la que puedes acceder haciendo clic con el botón derecho en un nodo de proyecto)
            </li>
            <li style={{ marginTop: "20px" }}>
              La Consola del administrador de paquetes Nuget (que se encuentra en Herramientas > Administrador de paquetes NuGet > Consola del administrador de paquetes) y luego ejecuta:<br /><code style={{ fontSize: "14px" }}>Install-Package Microsoft.TypeScript.MSBuild</code>
            </li>
          </ul>
          <p>Para los tipos de proyectos que no son compatibles con Nuget, puedes usar la <a href={releaseInfo.vs.stable.vs2019_download}>extensión TypeScript Visual Studio</a>. Puedes <a href="https://docs.microsoft.com/visualstudio/ide/finding-and-using-visual-studio-extensions?view=vs-2019">instalar la extensión</a> usando <code >Extensiones > Administrar extensiones</code> en Visual Studio.</p>
        </div>
      </section>
    </div >

    <div className="main-content-block" style={{ textAlign: "center" }}>
      <p>Los siguientes ejemplos son para casos de uso más avanzados.</p>
    </div>

    <div className="raised main-content-block">
      <h2>Instalación global de TypeScript</h2>
      <p>Puede ser útil tener TypeScript disponible en todos los proyectos, a menudo para probar ideas únicas. A largo plazo, el código base debería preferir una instalación de todo el proyecto a una instalación global para que se puedan beneficiar de compilaciones reproducibles en diferentes máquinas.</p>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>vía npm</h3>
          <p>Puedes usar npm para instalar TypeScript globalmente, esto significa que puedes usar el comando <code>tsc</code> en cualquier lugar de tu terminal.</p>
          <p>Para hacer esto, ejecuta <code>npm install -g typescript</code>. Esto instalará la versión más reciente (actualmente {releaseInfo.tags.stableMajMin}).</p>
          <p>Una alternativa es usar <a title="Enlace al paquete npx en npm" href="https://www.npmjs.com/package/npx">npx</a> cuando tengas que ejecutar < code>tsc</code> para ocasiones únicas.</p>
        </div>

        <div style={{ padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>vía Visual Studio Marketplace</h3>
          <p>Puedes instalar TypeScript como una extensión de Visual Studio, lo que te permitirá usar TypeScript en muchos proyectos de MSBuild en Visual Studio.</p>
          <p>La versión más reciente está disponible <a href={releaseInfo.vs.stable.vs2019_download} title="Enlace a Visual Studio Marketplace para la extensión TypeScript MSBuild">en Visual Studio Marketplace</a>.</p >
        </div>
      </section>
    </div>


    <div className="raised main-content-block">
      <h2>Trabajar con transpiladores compatibles con TypeScript</h2>
      <p>Existen otras herramientas que convierten archivos TypeScript en archivos JavaScript. Puedes usar estas herramientas para obtener velocidad o coherencia con tus herramientas de compilación existentes.</p>
      <p>Cada uno de estos proyectos maneja la conversión de archivos, pero no maneja los aspectos de verificación de tipos del compilador de TypeScript. Por lo tanto, es probable que aún necesites mantener la dependencia de TypeScript anterior y desees habilitar <Link to="/tsconfig#isolatedModules"><code>isolatedModules</code></Link>.</p>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>Babel</h3>
          <p><a href='https://babeljs.io/'>Babel</a> es un transpilador de JavaScript muy popular que admite archivos TypeScript a través del complemento <a href='https://babeljs.io/docs/es/babel-preset-typescript#docsNav'>@babel/plugin-transform-typescript</a>.</p>
        </div>

        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>swc</h3>
          <p><a href='https://swc-project.github.io/docs/installation/'>swc</a> es un transpilador rápido creado en Rust que admite muchas de las funciones de Babel, incluido TypeScript.</p >
        </div>

        <div style={{ padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>Sucrase</h3>
          <p><a href='https://github.com/alangpierce/sucrase#sucrase/'>Sucrase</a> es una bifurcación de Babel centrada en la velocidad para usar en modo de desarrollo. Sucrase admite TypeScript de forma nativa.</p>
        </div>
      </section>
    </div>

    <QuickJump title="Siguientes pasos" lang={props.pageContext.lang} />
  </Layout>
}

export default (props: Props) => <Intl locale={props.pageContext.lang}><Index {...props} /></Intl>
