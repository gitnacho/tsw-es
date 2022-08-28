// @ts-check
// Volcado de datos de todas las opciones de la CLI

/** Ejecutar con:
     node ./node_modules/.bin/ts-node-transpile-only  packages/tsconfig-reference/scripts/schema/generateJSON.ts
     yarn ts-node scripts/cli/generateJSON.ts
     yarn workspace tsconfig-reference generate:json:schema
*/
console.log("TSConfig Ref: JSON schema");

import matter from "gray-matter";
import { CommandLineOptionBase } from "../types";
import { writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";
import { CompilerOptionName } from "../../data/_types";
import ts from "typescript";
import type { JSONSchema7 } from "json-schema";
import type { CommandLineOption } from "../tsconfigRules.js";

const toJSONString = (obj) =>
  prettier.format(JSON.stringify(obj, null, "  "), { filepath: "thing.json" });
const writeJSON = (name, obj) =>
  writeFileSync(new URL(`result/${name}`, import.meta.url), toJSONString(obj));

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

import schemaBase from "./vendor/base.json";
// @ts-ignore
import tsconfigOpts from "../../data/tsconfigOpts.json";

// Recorta la lista
const filteredOptions = tsconfigOpts
  // .filter((o) => !denyList.includes(o.name as CompilerOptionName))
  .filter((o) => "description" in o);

const schemaCompilerOpts =
  schemaBase.definitions.compilerOptionsDefinition.properties.compilerOptions.properties;
const schemaWatchOpts =
  schemaBase.definitions.watchOptionsDefinition.properties.watchOptions.properties;
const schemaBuildOpts =
  schemaBase.definitions.buildOptionsDefinition.properties.buildOptions.properties;

const okToSkip = [
  "exclude",
  "explainFiles",
  "extends",
  "files",
  "include",
  "out",
  "references",
  "typeAcquisition",
];

filteredOptions.forEach((option) => {
  const name = option.name as CompilerOptionName;
  if (okToSkip.includes(name)) return;
  const sectionsPath = new URL(
    `../../copy/en/options/${name}.md`,
    import.meta.url
  );

  let section;
  if (schemaCompilerOpts[name]) section = schemaCompilerOpts;
  if (schemaWatchOpts[name]) section = schemaWatchOpts;
  if (schemaBuildOpts[name]) section = schemaBuildOpts;

  if (!section) {
    const title = `Issue creating JSON Schema for tsconfig`;
    const headline = `No se pudo encontrar '${name}' en schemaBase.definitions - debe estar en compilerOptions / watchOptions / buildOptions`;
    const msg = `Necesitas agregarlo al archivo: packages/tsconfig-reference/scripts/schema/vendor/base.json - algo como:

            "${name}": {
              "description": "${option.description.message}",
              "type": "boolean",
              "default": false
            },

Probablemente también necesites crear el nuevo archivo Markdown para el indicador del compilador, ejecuta:

\n    echo '---\\ndisplay: "${option.name}"\\noneline: "Hace algo"\\n---\\n${option.description.message}\\n ' > ${sectionsPath}\n\nLuego agrega algunos documentos y ejecuta: \n>  yarn workspace tsconfig-reference build\n\n
    `;

    throw new Error([title, headline, msg, ""].join("\n\n"));
  } else {
    let optionFile;

    try {
      optionFile = matter.read(fileURLToPath(sectionsPath));
    } catch (error) {
      // prettier-ignore
      throw new Error(
        `\n    echo '---\\ndisplay: "${option.name}"\\noneline: "Hace algo" \\n---\\n${option.description.message.replace("'", "`")}\\n ' > ${sectionsPath}\n\nLuego agrega algunos documentos y ejecuta: \n>  yarn workspace tsconfig-reference build\n\n`
      );
    }

    // Establece la versión simple, eliminando los enlaces del markdown interno.
    section[name].description = optionFile.data.oneline.replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, '$1');

    // Se puede eliminar una vez que se fusiona https://github.com/ExodusMovement/schemasafe/pull/146
    const isEnumOrConst = section[name]["enum"];
    if (isEnumOrConst) return;

    // Ve las extensiones de vscode aquí:
    // https://github.com/microsoft/vscode/blob/197f453aa9560872370e4b8e4b3b2f9a93c4ad68/src/vs/base/common/jsonSchema.ts#L56

    // Esto aún no pasa las comprobaciones de validación del esquema.
    // if (deprecated.includes(name)) schemaCompilerOpts[name].deprecationMessage = "Deprecated";

    // Establece una versión de markdown que se priorice en VScode, dando a las personas
    // la oportunidad de hacer clic en los enlaces.
    section[name].markdownDescription =
      section[name].description + `\n\nSee more: https://www.typescriptlang.org/tsconfig#${name}`;
  }
});

for (const [properties, options] of [
  [schemaCompilerOpts, ts.optionDeclarations],
  [schemaWatchOpts, ts.optionsForWatch],
  [
    schemaBase.definitions.typeAcquisitionDefinition.properties.typeAcquisition
      .properties,
    ts.typeAcquisitionDeclarations,
  ],
] as const) {
  for (const [name, optionSchema] of Object.entries(properties)) {
    const option = options.find(
      (option) =>
        option.name === name &&
        option.category?.key !== "Command_line_Options_6171"
    );
    if (!option) {
      properties[name] = undefined;
    } else if (option.type === "list") {
      updateItemsSchema(
        (optionSchema as Extract<typeof optionSchema, { items?: unknown }>)
          .items as never,
        option.element.type
      );
    } else {
      updateItemsSchema(optionSchema as never, option.type);
    }
  }
}

// Actualiza optionSchema u optionSchema.items, dependiendo de si
// option es un CommandLineOptionOfListType.
function updateItemsSchema(
  itemsSchema: JSONSchema7,
  type: CommandLineOption["type"]
) {
  const newEnum = typeof type !== "object" ? undefined : [...type.keys()];
  // Actualiza { enum: ... } si se encuentra en itemsSchema.anyOf, o
  // de lo contrario en itemsSchema.enum.
  const enumSchema = itemsSchema.anyOf?.find(
    (subschema): subschema is Extract<typeof subschema, { enum?: unknown }> =>
      (subschema as Extract<typeof subschema, { enum?: unknown }>).enum as never
  );
  if (!enumSchema) {
    updateEnum(itemsSchema, newEnum);
    return;
  }
  updateEnum(enumSchema, newEnum);
  // Se asegura de que los nuevos valores sean válidos: O existen en la enumeración o
  // hace coincidir un patrón y actualiza el patrón si no es así.
  const patterns = itemsSchema
    .anyOf!.map((subschema) => {
      const pattern = (
        subschema as Extract<typeof subschema, { pattern?: unknown }>
      ).pattern;
      return pattern !== undefined && new RegExp(pattern);
    })
    .filter(
      (pattern): pattern is Exclude<typeof pattern, false> => pattern as never
    );
  if (
    newEnum?.every(
      (newValue) =>
        enumSchema.enum!.includes(newValue) ||
        patterns.some((pattern) => pattern.test(newValue))
    )
  )
    return;
  itemsSchema.anyOf = itemsSchema.anyOf!.filter(
    (subschema) =>
      !(subschema as Extract<typeof subschema, { pattern?: unknown }>).pattern
  );
  if (!newEnum) return;
  // Las expresiones regulares no están implícitamente ancladas.
  const disjunction = newEnum.map((newValue) =>
    [...newValue]
      .map((character) =>
        character === "."
          ? String.raw`\.`
          : character.toUpperCase() === character
          ? character
          : `[${character.toUpperCase()}${character}]`
      )
      .join("")
  );
  const pattern =
    disjunction.length > 1 ? `(?:${disjunction.join("|")})` : disjunction[0];
  itemsSchema.anyOf.push({ pattern: `^${pattern}$` });
}

function updateEnum(schema: JSONSchema7, newEnum: string[] | undefined) {
  schema.enum = newEnum?.map(
    (newValue) =>
      schema.enum?.find(
        (oldValue) => (oldValue as string).toLowerCase() === newValue
      ) || newValue
  );
}

writeJSON("schema.json", schemaBase);
