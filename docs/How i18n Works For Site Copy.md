## ¿Cómo funciona i18n en el sitio?

Tomemos un código de ejemplo del interior de la [barra de navegación superior](../packages/typescriptlang-org/src/components/layout/TopNav.tsx) en el sitio:

```ts
// prettier-ignore
<nav role="navigation">
  <ul>
    <li className="nav-item hide-small"><IntlLink to="/download">{i("nav_download")}</IntlLink></li>
    <li className="nav-item"><IntlLink to="/docs/home"><span>{i("nav_documentation_short")}</span></IntlLink></li>
    <li className="nav-item show-only-large"><IntlLink to="/docs/handbook/intro.html">{i("nav_handbook")}</IntlLink></li>
    <li className="nav-item"><IntlLink to="/community">{i("nav_community")}</IntlLink></li>
    <li className="nav-item show-only-largest"><IntlLink to="/play">{i("nav_playground")}</IntlLink></li>
    <li className="nav-item"><IntlLink to="/tools">{i("nav_tools")}</IntlLink></li>
  </ul>
</nav>
```

Hay dos primitivos i18n aquí:

- `IntlLink`
- `i("nav_download")`

## `IntlLink`

Un `IntlLink` es un elemento `<Link>`, que efectivamente es `<a>`, pero que conoce todo el mapa del sitio y la configuración regional actual.

Esto significa que el enlace detectará si hay una versión de la página disponible en la configuración regional actual si es posible. Simplemente escribe la URL en inglés.

## i("x")

Este es [React Intl](https://www.npmjs.com/package/react-intl).

Hay algunas partes que conducen a tener una `i("x")`. Vayamos en orden:

- Una página del sitio que se pueda internacionalizar debe estar envuelta en un [componente `Intl`](https://github.com/microsoft/TypeScript-website/blob/v2/packages/typescriptlang-org/src/components/Intl.tsx#L7)

  Esto configura la copia del idioma según la configuración regional, utiliza un requisito dinámico para el directorio [`copy/`](https://github.com/microsoft/TypeScript-website/blob/v2/packages/typescriptlang-org/src/copy/) + la localidad + `.ts`. Esto establece el contexto externo.

  En el sitio, tenemos esto como la `exportación predeterminada` para las páginas i18n.

  ```ts
  export default (props: Props) => (
    <Intl locale={props.pageContext.lang}>
      <Comm {...props} />
    </Intl>
  )
  ```

- Al inicio del componente `react` de la página, creamos una `i`:

  ```ts
  type Props = {
    data: CommunityPageQuery
    pageContext: any
  }

  export const Comm: React.FC<Props> = props => {
    const intl = useIntl()
    const i = createInternational<typeof comCopy>(intl)
    // ...
  }
  ```

  La primera línea relevante es `useIntl()` que es una característica estándar de react-intl.

  La segunda envuelve el resultado de `useIntl` en una función que te permite usar los tipos para determinar las claves disponibles para este archivo.
