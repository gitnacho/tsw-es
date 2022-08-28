## Contribuir a un complemento de *TypeScript Playground*

## Colaborar

Puede usar `yarn start` para configurar tanto una copia de `Rollup` para generar el *JS* como `Serve` para alojarlo.

```sh
yarn start
```

Luego configura el *playground* de *TypeScript* para conectarse a un complemento de desarrollo en `http://localhost:5000/`.

#### *API* del complemento

La *API* del complemento está documentada en la [interfaz *PlaygroundPlugin* en `./src/index.ts`](src/index.ts).

Aproximadamente:

- Hay un conjunto de funciones de montaje y desmontaje que puedes utilizar para manejar tu interfaz de usuario en la barra lateral
- Hay métodos `modelChanged`, que son atajos para saber cuándo ha cambiado el código en el editor monaco

### *Sandbox*

Los complementos son copias del *sandbox* de *TypeScript*, que es un contenedor de *API* de alto nivel al [`monaco-editor`](https://microsoft.github.io/monaco-editor/). Puedes obtener más información sobre el *sandbox* en [el sitio web de *TypeScript*](http://www.typescriptlang.org/v2/dev/sandbox/).

#### *Rollup*

[*Rollup*](https://rollupjs.org) es un paquete de *JavaScript*, que tomará todo el *TypeScript* + código *JavaScript* al que hace referencia y luego crea un paquete *AMD* para todo. los paquetes *AMD* se utilizan en *Monaco*, `TypeScript Sandbox` y `Playground` ⏤ por lo tanto, esto se usa para mantener la coherencia con el resto del ecosistema.

## Agregar una dependencia

Debido a que la mayoría de los módulos `node_modules` esperan ejecutarse en `node`, es posible que debas hacer algo de trabajo para que la dependencia funcione en la web.

La ruta para manejar esto es a través de un `rollup`:

- agrega una nueva dependencia a través de `yarn add xyz`
- impórtalo en tu `index.ts`
- ejecuta `yarn build` ⏤ ¿proporcionó algunos mensajes de error?
  - Si lo hizo, es posible que debas editar tu `rollup.config.js`.
  - Probablemente podría comenzar tomando la [configuración acumulada de `playground-plugin-tsquery`](https://github.com/orta/playground-plugin-tsquery/blob/master/rollup.config.js) y agrega cualquier extra externos y globales.

#### *Serve*

[*Serve*](https://github.com/zeit/serve) se utiliza para crear un servidor web para el directorio `dist`.

## Despliegue

Este módulo se debe implementar en `npm` cuando desees que el mundo lo vea, esto puede significar hacer que tu código maneje un entorno de ensayo frente a un entorno de producción (porque las *URL* serán diferentes).

Por ejemplo, así es como puedes manejar la obtención de la *URL* de un archivo *CSS* que se incluye en tu directorio `dist`:

```ts
const isDev = document.location.host.includes("localhost")
const unpkgURL = "https://unpkg.com/typescript-playground-presentation-mode@latest/dist/slideshow.css"
const cssHref = isDev ? "http://localhost:5000/slideshow.css" : unpkgURL
```

### Después de desplegar

Una vez implementado, lo puedes probar en el *playground* de *TypeScript* pasando el nombre de tu complemento en `npm` al cuadro de complemento personalizado. Este es efectivamente tu entorno de ensayo.

Una vez que estés satisfecho y esté refinado, puedes solicitar tenerlo en la lista de complementos predeterminada.

## Apoya

Haz preguntas sobre los problemas del sitio web de *TypeScript*](https://github.com/microsoft/TypeScript-Website/issues) o en la [comunidad *Discordia de TypeScript*](https://discord.gg/typescript) - en el canal del sitio web de *TypeScript*.
