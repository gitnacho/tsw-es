// @ts-check
// Volcado de datos de todas las opciones de TSConfig

/** Corre con:
     node --inspect-brk ./node_modules/.bin/ts-node packages/tsconfig-reference/scripts/tsconfig/generateJSON.ts
     yarn ts-node packages/tsconfig-reference/scripts/tsconfig/generateJSON.ts
*/

console.log("TSConfig Ref: JSON para TSConfig");

import ts from "typescript";

import { CommandLineOptionBase } from "../types";
import { writeFileSync } from "fs";
import { join } from "path";
import prettier from "prettier";
import {
  denyList,
  relatedTo,
  deprecated,
  internal,
  defaultsForOptions,
  recommended,
  allowedValues,
  configToRelease,
  additionalOptionDescriptors,
} from "../tsconfigRules.js";
import { CompilerOptionName } from "../../data/_types";

const toJSONString = (obj) =>
  prettier.format(JSON.stringify(obj, null, "  "), { filepath: "thing.json" });
const writeJSON = (name, obj) =>
  writeFileSync(
    new URL(`../../data/${name}`, import.meta.url),
    toJSONString(obj)
  );
const writeString = (name, text) =>
  writeFileSync(
    new URL(`../../data/${name}`, import.meta.url),
    prettier.format(text, { filepath: name })
  );

export interface CompilerOptionJSON extends CommandLineOptionBase {
  releaseVersion?: string;
  allowedValues?: string[];
  categoryCode?: number;
  related?: string[];
  deprecated?: string;
  internal?: true;
  recommended?: true;
  defaultValue?: string;
  hostObj: string;
}

// Estas son todas
const options = [
  // @ts-ignore
  ...ts.optionDeclarations,
  // @ts-ignore
  ...ts.optionsForWatch,
  // @ts-ignore
  ...ts.buildOpts,
  // @ts-ignore
  ...ts.typeAcquisitionDeclarations,
].filter((item, pos, arr) => arr.indexOf(item) == pos) as CompilerOptionJSON[];

const categories = new Set<ts.DiagnosticMessage>();

// Recorta la lista
const filteredOptions = options
  .filter((o) => !denyList.includes(o.name as CompilerOptionName))
  .filter((o) => !o.isCommandLineOnly);

// La importación desde TS no está limpia - 'clean'
const buildOpts = ["build", "verbose", "dry", "clean", "force"];
// @ts-ignore
const watchOpts = [...ts.optionsForWatch.map((opt) => opt.name), "watch"];

// No obtenemos datos estructurados para todas las banderas del compilador (especialmente las que no están en 'compilerOptions')
// entonces, créalos manualmente.

const topLevelTSConfigOptions: CompilerOptionJSON[] = [
  {
    name: "files",
    type: "list",
    categoryCode: 0,
    // @ts-ignore
    description: {
      message: "Print names of files part of the compilation.",
    },
    defaultValue: "false",
    hostObj: "top_level",
  },
  {
    name: "include",
    type: "list",
    categoryCode: 0,
    // @ts-ignore
    description: {
      message: "Print names of files part of the compilation.",
    },
    defaultValue: "false",
    hostObj: "top_level",
  },
  {
    name: "exclude",
    type: "list",
    categoryCode: 0,
    // @ts-ignore
    description: {
      message: "Print names of files part of the compilation.",
    },
    defaultValue: "false",
    hostObj: "top_level",
  },
  {
    name: "extends",
    type: "string",
    categoryCode: 0,
    // @ts-ignore
    description: {
      message: "Print names of files part of the compilation.",
    },
    defaultValue: "false",
    hostObj: "top_level",
  },
  {
    name: "references",
    type: "string",
    categoryCode: 0,
    // @ts-ignore
    description: {
      message: "Print names of files part of the compilation.",
    },
    defaultValue: "false",
    hostObj: "top_level",
  },
];

const allOptions = [...topLevelTSConfigOptions, ...filteredOptions].sort((l, r) =>
  l.name.localeCompare(r.name)
);

allOptions.forEach((option) => {
  const name = option.name as CompilerOptionName;

  // Convierte los tipos Map de JS en un obj JSONable
  if ("type" in option && typeof option.type === "object" && "get" in option.type) {
    // La opción definitivamente tiene un mapa obj, necesita resolverlo
    const newOptions = {};
    option.type.forEach((v, k) => (newOptions[k] = v));
    // @ts-ignore
    option.type = newOptions;
  }

  // Convierte categorías para que sean algo que se pueda buscar
  if ("category" in option) {
    categories.add(option.category);
    option.categoryCode = option.category.code;
    option.category = undefined;
  } else if (option.name in additionalOptionDescriptors) {
    // Establece el código de category manualmente porque algunas opciones no tienen categoría
    option.categoryCode = additionalOptionDescriptors[option.name].categoryCode;
  }

  // Si tiene campos relacionados, los configura
  const relatedMetadata = relatedTo.find((a) => a[0] == name);
  if (relatedMetadata) {
    option.related = relatedMetadata[1];
  }

  if (deprecated.includes(name)) {
    option.deprecated = "Deprecated";
  }

  if (internal.includes(name)) {
    option.internal = true;
  }

  if (recommended.includes(name)) {
    option.recommended = true;
  }

  if (name in allowedValues) {
    option.allowedValues = allowedValues[name];
  }

  if (name in configToRelease) {
    option.releaseVersion = configToRelease[name];
  }

  if (name in defaultsForOptions) {
    option.defaultValue = defaultsForOptions[name];
  }

  if (buildOpts.includes(name)) option.hostObj = "build";
  else if (watchOpts.includes(name)) option.hostObj = "watchOptions";
  else option.hostObj = "compilerOptions";

  // Elimina propiedades irrelevantes
  delete option.shortName;
  delete option.showInSimplifiedHelpView;
});

writeJSON("tsconfigOpts.json", allOptions);

// Mejora las reglas de tipado
writeString(
  "_types.ts",
  `// __auto-generated__ \n\n export type CompilerOptionName = '${options
    .map((o) => o.name)
    .join("' | '")}'`
);

const categoryMap = {};
categories.forEach((c) => (categoryMap[c.code] = c));

// Agrega categorías personalizadas, para banderas personalizadas del compilador
categoryMap["0"] = {
  code: 0,
  category: 3,
  key: "Project_Files_0",
  message: "Project File Management",
};

categoryMap["999"] = {
  code: 999,
  category: 4,
  key: "Watch_Options_999",
  message: "Watch Options",
};

writeJSON("tsconfigCategories.json", categoryMap);

// de  TypeScript  @ts-ignore  - Imprime los valores predeterminados para un archivo TS Config
const defaults = ts.defaultInitCompilerOptions;
writeJSON("tsconfigDefaults.json", defaults);
