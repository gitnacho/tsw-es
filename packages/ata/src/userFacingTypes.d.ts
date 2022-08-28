export interface ATABootstrapConfig {
  /** Un objeto que pasa para obtener devoluciones de llamada */
  delegate: {
    /** La devolución de llamada que recibe cuando ATA decide que un archivo se debe escribir en tu VFS */
    receivedFile?: (code: string, path: string) => void
    /** Una forma de monstrar el progreso */
    progress?: (downloaded: number, estimatedTotal: number) => void
    /** Nota: ¡Un mensaje de error no significa que ATA se ha detenido! */
    errorMessage?: (userFacingMessage: string, error: Error) => void
    /** Una devolución de llamada que indica que ATA realmente tiene trabajo que hacer */
    started?: () => void
    /** La devolución de llamada cuando ATA ha terminado todo */
    finished?: (files: Map<string, string>) => void
  }
  /** Pasado para buscar como agente de usuario */
  projectName: string
  /** Tu copia local de TypeScript */
  typescript: typeof import("typescript")
  /** Si necesitas una versión personalizada de fetch */
  fetcher?: typeof fetch
  /** Si necesitas un registrador personalizado en lugar de la consola global */
  logger?: Logger
}

type ModuleMeta = { state: "loading" }

/**
 * La función que inicia la adquisición de tipos,
 * devuelve una función a la que luego le pasas el código
 * fuente inicial de la aplicación con.
 *
 * Esta es efectivamente la exportación principal, todo lo demás
 * básicamente es exportado para pruebas y se deben considerar
 * los detalles de implementación por parte de los consumidores.
 */
export const setupTypeAcquisition: (config: ATABootstrapConfig) => (initialSourceFile: string) => void

interface Logger {
  log: (...args: any[]) => void
  error: (...args: any[]) => void
  groupCollapsed: (...args: any[]) => void
  groupEnd: (...args: any[]) => void
}
