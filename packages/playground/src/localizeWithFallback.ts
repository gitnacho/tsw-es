/** contiene ts-ignore y la manipulación de ventana global */
export const localize = (key: string, fallback: string) =>
  // @ts-ignore
  'i' in window ? window.i(key) : fallback
