/** Obtiene una URL relativa para algo en tu directorio dist dependiendo de si estás en modo desarrollador o no */
export const requireURL = (path: string) => {
  // https://unpkg.com/browse/typescript-playground-presentation-mode@0.0.1/dist/x.js => unpkg/browse/typescript-playground-presentation-mode@0.0.1/dist/x
  const isDev = document.location.host.includes('localhost')
  const prefix = isDev ? 'local/' : 'unpkg/typescript-playground-presentation-mode/dist/'
  return prefix + path
}

/** Usa esto para hacer algunas funciones de generación de elementos tontos */
export const el = (str: string, el: string, container: Element) => {
  const para = document.createElement(el)
  para.innerHTML = str
  container.appendChild(para)
}
