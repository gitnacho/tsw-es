import ts from "typescript";

// Todos estos son copipegados del código base de TS

/** Interfaz Map de ES6, solo se incluyen métodos de lectura. */
export interface ReadonlyMap<T> {
  get(key: string): T | undefined;
  has(key: string): boolean;
  forEach(action: (value: T, key: string) => void): void;
  readonly size: number;
  keys(): Iterator<string>;
  values(): Iterator<T>;
  entries(): Iterator<[string, T]>;
}

/** Interfaz Map de ES6. */
export interface Map<T> extends ReadonlyMap<T> {
  set(key: string, value: T): this;
  delete(key: string): boolean;
  clear(): void;
}

export interface DiagnosticMessage {
  key: string;
  category: ts.DiagnosticCategory;
  code: number;
  message: string;
  reportsUnnecessary?: {};
  /* @internal */
  elidedInCompatabilityPyramid?: boolean;
}

/* @internal */
export interface CommandLineOptionBase {
  name: string;
  type: "string" | "number" | "boolean" | "object" | "list" | Map<number | string>; // un valor de un tipo primitivo, o un objeto literal que asigna valores con nombre a valores reales
  isFilePath?: boolean; // True si el valor de la opción es una ruta o un fileName
  shortName?: string; // Un breve mnemotécnico para mayor comodidad - por ejemplo, 'h' se puede usar en lugar de 'help'
  description?: DiagnosticMessage; // El mensaje que describe lo que hace el modificador de la línea de comandos
  paramType?: DiagnosticMessage; // El nombre que se usará para el parámetro de una opción no booleana
  isTSConfigOnly?: boolean; // True si la opción solo se puede especificar a través del archivo tsconfig.json
  isCommandLineOnly?: boolean;
  showInSimplifiedHelpView?: boolean;
  category?: DiagnosticMessage;
  strictFlag?: true; // true si la opción es una de las banderas bajo strict
  affectsSourceFile?: true; // true si debemos recrear SourceFiles después de que esta opción cambie
  affectsModuleResolution?: true; // actualmente mismo efecto que `affectsSourceFile`
  affectsBindDiagnostics?: true; // true si esto afecta el enlace (actualmente el mismo efecto que `affectsSourceFile`)
  affectsSemanticDiagnostics?: true; // true si la opción afecta el diagnóstico semántico
  affectsEmit?: true; // true si las opciones afectan a emit
  transpileOptionValue?: boolean | undefined; // Si se establece, significa que la opción se debe establecer en este valor al transpilar
}

/* @internal */
export interface CommandLineOptionOfPrimitiveType extends CommandLineOptionBase {
  type: "string" | "number" | "boolean";
}

/* @internal */
export interface CommandLineOptionOfCustomType extends CommandLineOptionBase {
  type: Map<number | string>; // un objeto literal que asigna valores con nombre a valores reales
}

/* @internal */
export interface TsConfigOnlyOption extends CommandLineOptionBase {
  type: "object";
  elementOptions?: Map<CommandLineOption>;
  extraKeyDiagnosticMessage?: DiagnosticMessage;
}

/* @internal */
export interface CommandLineOptionOfListType extends CommandLineOptionBase {
  type: "list";
  element: CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption;
}

export type CommandLineOption =
  | CommandLineOptionOfCustomType
  | CommandLineOptionOfPrimitiveType
  | TsConfigOnlyOption
  | CommandLineOptionOfListType;
