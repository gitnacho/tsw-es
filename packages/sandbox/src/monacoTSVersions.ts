import { supportedReleases, ReleaseVersions } from './release_data'

/** Las versiones que puedes conseguir para el sandbox */
export type SupportedTSVersions = ReleaseVersions | 'Latest'

/**
 * Las versiones de monaco-typescript que podemos usar
 * para compatibilidad con versiones anteriores
 * de TS en el playground.
 */
export const monacoTSVersions: SupportedTSVersions[] = [...supportedReleases, 'Latest']

/** Returns the latest TypeScript version supported by the sandbox */
export const latestSupportedTypeScriptVersion: string = Object.keys(monacoTSVersions)
  .filter(key => key !== 'Nightly' && !key.includes('-'))
  .sort()
  .pop()!
