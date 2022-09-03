import { withPrefix } from "gatsby"

export const getPlaygroundUrls = () => {
  // Esto se cambiará en CI por:
  // scripts/cacheBustPlayground.mjs

  // Esta siempre debe ser una sola cadena de barra diagonal en el código base: "/"
  const commitPrefix = "/"

  return {
    sandboxRoot: withPrefix(`/js${commitPrefix}sandbox`),
    playgroundRoot: withPrefix(`/js${commitPrefix}playground`),
    playgroundWorker: withPrefix(`/js${commitPrefix}playground-worker/index.js`),
  }
}
