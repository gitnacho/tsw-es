import * as React from "react";
import { useIntl } from "react-intl";
import { createInternational } from "../lib/createInternational";
import { docCopy } from "../copy/en/documentation";
import { createIntlLink } from "./IntlLink";

// Metadatos automáticos de npm y VS Marketplace
import releaseInfo from "../lib/release-info.json";
import { withPrefix } from "gatsby";

export type Props = {
  title: string;
  lang: string;
};
export const QuickJump = (props: Props) => {
  const intl = useIntl();
  const i = createInternational<typeof docCopy>(intl);
  i;

  const releaseURL = withPrefix(releaseInfo.releaseNotesURL);
  let betaURL: string | undefined = undefined;
  if (releaseInfo.isBeta) betaURL = releaseInfo.betaPostURL;
  if (releaseInfo.isRC) betaURL = releaseInfo.rcPostURL;

  const IntlLink = createIntlLink(props.lang);

  // TODO: Internacionaliza estas cadenas
  return <div className="main-content-block">
    <h2 style={{ textAlign: "center" }}>{props.title}</h2>
    <div className="columns">
      <div className="item raised">
        <h4>Empezar</h4>
        <ul>
          <li>
            <IntlLink to="/docs/bootstrap">
              Bootstrap para proyectos TS
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/typescript-in-5-minutes.html">
              JS a TS
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/typescript-from-scratch.html">
              Nuevo en programación
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/typescript-in-5-minutes-oop.html">
              OOP a JS
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/typescript-in-5-minutes-func.html">
              Funcional a JS
            </IntlLink>
          </li>
          <li><IntlLink to="/download">Instalación</IntlLink></li>
        </ul>
      </div>

      <div className="item raised">
        <h4>Manual</h4>
        <ul>
          <li>
            <IntlLink to="/docs/handbook/basic-types.html">
              Tipos básicos
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/advanced-types.html">
              Tipos avanzados
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/interfaces.html">
              Interfaces
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/variable-declarations.html">
              Declaración de variables
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/functions.html">Functions</IntlLink>
          </li>
        </ul>
      </div>

      <div className="item raised">
        <h4>Herramientas</h4>
        <ul>
          <li><IntlLink to="/play/">Playground</IntlLink></li>
          <li><IntlLink to="/tsconfig/">Referencia de TSConfig</IntlLink></li>
        </ul>
        <h4 style={{ marginTop: "28px" }}>Notas de la versión</h4>
        <ul>
          {betaURL
            ? <li>
              <a href={betaURL}>
                ¿Qué viene en {releaseInfo.tags.betaMajMin}?
              </a>
            </li>
            : null}
          <li>
            <IntlLink to={releaseURL}>
              Novedades en {releaseInfo.tags.stableMajMin}
            </IntlLink>
          </li>
        </ul>
      </div>

      <div className="item raised">
        <h4>Tutoriales</h4>
        <ul>
          <li>
            <IntlLink to="/docs/handbook/asp-net-core.html">ASP.NET</IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/migrating-from-javascript.html">
              Migración desde JS
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/dom-manipulation.html">
              Trabajar con el DOM
            </IntlLink>
          </li>
          <li>
            <IntlLink to="/docs/handbook/react-&-webpack.html">
              React &amp; Webpack
            </IntlLink>
          </li>
        </ul>
      </div>
    </div>
  </div>;
};
