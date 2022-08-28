/**
 * Ejecuta el cierre cuando se pulsó escape
 * @param func Cierre a ejecutar si se presiona la tecla escape
 */
export const whenEscape = (func: () => void) => (event: KeyboardEvent) => {
  const evt = event || window.event
  let isEscape = false
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc"
  } else {
    // @ts-ignore - este solía ser el caso
    isEscape = evt.keyCode === 27
  }
  if (isEscape) {
    func()
  }
}
