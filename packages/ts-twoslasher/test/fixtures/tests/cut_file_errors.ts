// @errors: 2339
type NetworkLoadingState = {
  state: 'loading'
}

type NetworkFailedState = {
  state: 'failed'
  code: number
}

type NetworkSuccessState = {
  state: 'success'
  response: {
    title: string
    duration: number
    summary: string
  }
}
// ---cut---
type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState

function networkStatus(state: NetworkState): string {
  // Ahora mismo no sabemos cuál de los tres potenciales
  // tipos de estado podría ser.

  // Intentar acceder a una propiedad que no se comparte
  // en todos los tipos generará un error
  state.code

  // Al encender el estado, podemos discriminar el
  switch (state.state) {
    case 'loading':
      return 'Descargando...'
    case 'failed':
      return `Error ${state.code} descargando`
    case 'success':
      return `Error ${state.response} descargando`
  }
}
