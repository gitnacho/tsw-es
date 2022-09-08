// @ts-check
// Volcado de datos de todas las opciones de TSConfig

/** Corre con:
     node --inspect-brk ./node_modules/.bin/ts-node --project packages/tsconfig-reference/tsconfig.json packages/tsconfig-reference/scripts/generateMarkdown.ts
     yarn ts-node --project packages/tsconfig-reference/tsconfig.json packages/tsconfig-reference/scripts/generateMarkdown.ts 
*/
console.log("TSConfig Ref: MD para CLI Opts");

import { writeFileSync, readdirSync, existsSync, readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import prettier from "prettier";
import { CompilerOptionJSON } from "./generateJSON.js";
import { parseMarkdown } from "../tsconfigRules.js";

// @ts-ignore
import cliOpts from "../../data/cliOpts.json";

const knownTypes: Record<string, string> = {};

const languages = readdirSync(new URL("../../copy", import.meta.url)).filter(
  (f) => !f.startsWith(".")
);

languages.forEach((lang) => {
  const locale = new URL(`../../copy/${lang}/`, import.meta.url);
  const fallbackLocale = new URL("../../copy/en/", import.meta.url);

  const markdownChunks: string[] = [];

  const getPathInLocale = (path: string, optionalExampleContent?: string) => {
    if (existsSync(new URL(path, locale))) return new URL(path, locale);
    if (existsSync(new URL(path, fallbackLocale)))
      return new URL(path, fallbackLocale);
    const en = new URL(path, fallbackLocale);

    const localeDesc = lang === "en" ? lang : `either ${lang} or English`;
    // prettier-ignore
    throw new Error(
      "Could not find a path for " + path + " in " + localeDesc + (optionalExampleContent || "") + `\n\nLooked at ${en}}`
    );
  };

  function renderTable(
    title: string,
    options: typeof cliOpts[keyof typeof cliOpts],
    opts?: { noDefaults: true }
  ) {
    markdownChunks.push(`<h3>${title}</h3>`);

    // Recorta los espacios en blanco iniciales para que no se rendericen como un bloque de código markdown
    const tableHeader = `
<table class="cli-option" width="100%">
  <thead>
    <tr>
      <th>Bandera</th>
      <th>Tipo</th>${opts?.noDefaults ? "" : "\n      <th>Predefinido</th>"}
    </tr>
  </thead>
  <tbody>
`.trim()

    markdownChunks.push(tableHeader);

    options.forEach((option, index) => {
      // Je, la sección usa un artículo y las categorías usan una sección

      // Descripción CLI
      let description = option.description?.message;
      try {
        const sectionsPath = getPathInLocale(
          join("options", option.name + ".md")
        );
        const optionFile = matter.read(fileURLToPath(sectionsPath));
        description = optionFile.data.oneline;
      } catch (error) {
        try {
          const sectionsPath = getPathInLocale(
            join("cli", option.name + ".md")
          );
          const optionFile = matter.read(fileURLToPath(sectionsPath));
          description = optionFile.data.oneline;
        } catch (error) { }
      }

      const oddEvenClass = index % 2 === 0 ? "odd" : "even";
      markdownChunks.push(`<tr class='${oddEvenClass}' name='${option.name}'>`);

      let name = "--" + option.name;
      if (option.isTSConfigOnly) name = `<a href='/tsconfig/#${option.name}'>--${option.name}</a>`;
      markdownChunks.push(`  <td><code>${name}</code></td>`);

      let optType: string;
      if (typeof option.type === "string") {
        optType = `\`${option.type}\``;
      } else if (option.allowedValues) {
        if ("ListFormat" in Intl) {
          // @ts-ignore
          const or = new Intl.ListFormat(lang, { type: "disjunction" });
          optType = or.format(
            option.allowedValues.map((v) =>
              v.replace(/^[-.0-9_a-z]+$/i, "`$&`")
            )
          );
        } else {
          optType = option.allowedValues
            .map((v) => v.replace(/^[-.0-9_a-z]+$/i, "`$&`"))
            .join(", ");
        }
      } else {
        optType = "";
      }
      markdownChunks.push(`  <td>${parseMarkdown(optType)}</td>`);

      if (!opts?.noDefaults) {
        markdownChunks.push(`  <td>${parseMarkdown(option.defaultValue)}</td>`);
      }
      markdownChunks.push(`</tr>`);

      // Agrega una nueva fila debajo de la actual para la descripción, esto usa las clases 'odd' / 'even'
      // para fingir que parece una sola fila
      markdownChunks.push(`<tr class="option-description ${oddEvenClass}"><td colspan="3">`);
      markdownChunks.push(`${parseMarkdown(description)}`.trim());
      markdownChunks.push(`</td></tr>\n`);
    });
    markdownChunks.push(`</tbody></table>\n`);
  }

  renderTable("CLI Commands", cliOpts.cli, { noDefaults: true });
  renderTable("Build Options", cliOpts.build, { noDefaults: true });
  renderTable("Watch Options", cliOpts.watch, { noDefaults: true });
  renderTable("Compiler Flags", cliOpts.options);

  // Escribe el Markdown y JSON
  const markdown = prettier.format(markdownChunks.join("\n"), {
    filepath: "index.md",
  });
  const mdPath = new URL(`../../output/${lang}-cli.md`, import.meta.url);
  writeFileSync(mdPath, markdown);
});

languages.forEach((lang) => {
  const mdCLI = new URL(`../../output/${lang}-cli.md`, import.meta.url);
  // prettier-ignore
  const compOptsPath = new URL(`../../../documentation/copy/${lang}/project-config/Compiler Options.md`, import.meta.url);

  if (existsSync(compOptsPath)) {
    const md = readFileSync(compOptsPath, "utf8");
    const newTable = readFileSync(mdCLI, "utf8");
    const start = "<!-- Comienzo del reemplazo -->";
    const end = "<!-- Fin del reemplazo -->";
    const newMD = md.split(start)[0] + start + newTable + end + md.split(end)[1];
    writeFileSync(compOptsPath, newMD);
  }
});
