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
  // En este momento TypeScript no sabe cuál de los tres
  // potenciales tipos de estado podría ser.

  // Intentar acceder a una propiedad que no se comparte
  // en todos los tipos generará un error
  state.code

  // Al activar el estado, TypeScript puede reducir la unión
  // abajo en el análisis de flujo de código
  switch (state.state) {
    case 'loading':
      return 'Descargando...'
    case 'failed':
      // El tipo aquí debe ser NetworkFailedState,
      // así que acceder al campo `code` es seguro
      return `Error ${state.code} descargando`
    case 'success':
      return `Downloaded ${state.response.title} ⏤ ${state.response.summary}`
  }
}
