/** Basado en https://developer.mozilla.org/docs/Web/HTTP/Browser_detection_using_the_user_agent */
export function isTouchDevice() {
  var hasTouchScreen = false
  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0
  } else if ("msMaxTouchPoints" in navigator) {
    // @ts-ignore
    hasTouchScreen = navigator.msMaxTouchPoints > 0
  } else {
    var mQ =
      typeof window !== "undefined" &&
      "matchMedia" in window &&
      matchMedia("(pointer:coarse)")
    if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches
    } else if ("orientation" in window) {
      hasTouchScreen = true // en desuso, pero buena alternativa
    } else {
      // Solo como último recurso, recurre a indagar por olfato el agente de usuario
      // @ts-ignore
      var UA = navigator.userAgent
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    }
  }
  return hasTouchScreen
}
