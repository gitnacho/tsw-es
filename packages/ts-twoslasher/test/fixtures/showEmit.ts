// @showEmit
// @target: ES5
// @downleveliteration

// --importHelpers on: El asistente de propagación se importará desde 'tslib'

export function fn(arr: number[]) {
  const arr2 = [1, ...arr]
}
