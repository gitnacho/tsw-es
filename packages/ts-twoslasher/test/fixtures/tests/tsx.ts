// @filename: index.tsx
// ¡Esto no funciona!
declare module JSX {
  interface Element {}
  interface IntrinsicElements {
    [s: string]: any
  }
}
// @showEmit
// @noErrors
// @jsx: preserve
export const helloWorld = () => <h1>Hello world</h1>
