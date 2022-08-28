// @ts-check
// Volcado de datos de todas las opciones de TSConfig

/** Corre con:
     node --inspect-brk ./node_modules/.bin/ts-node --project packages/tsconfig-reference/tsconfig.json packages/tsconfig-reference/scripts/msbuild/generateMarkdown.ts
     yarn ts-node --project packages/tsconfig-reference/tsconfig.json packages/tsconfig-reference/scripts/msbuild/generateMarkdown.ts 
*/

console.log("TSConfig Ref: MD for MSBuild");

import { writeFileSync, readdirSync, existsSync, readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import prettier from "prettier";

import remark from "remark";
import remarkHTML from "remark-html";

// @ts-ignore
import options from "../../data/msbuild-flags.json";
const parseMarkdown = (md: string) => remark().use(remarkHTML).processSync(md);

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

  function renderTable(title: string, options: { tscCLIName: string; configName }[]) {
    markdownChunks.push(`<h3>${title}</h3>`);

    markdownChunks.push(`
  <table class='cli-option' width="100%">
    <thead>
    <tr>
    <th>Nombre Config de MSBuild</th>
    <th>Bandera TSC</th>
    </tr>
  </thead>
  <tbody>
`);

    options.forEach((option, index) => {
      // Je, la sección usa un artículo y las categorías usan una sección
      const name = option.tscCLIName;
      // Descripción CLI
      let description = "";
      try {
        const sectionsPath = getPathInLocale(join("options", name + ".md"));
        const optionFile = matter.read(fileURLToPath(sectionsPath));
        description = optionFile.data.oneline;
      } catch (error) {
        try {
          const sectionsPath = getPathInLocale(join("msbuild", name + ".md"));
          const optionFile = matter.read(fileURLToPath(sectionsPath));
          description = optionFile.data.oneline;
        } catch (error) { }
      }

      const oddEvenClass = index % 2 === 0 ? "odd" : "even";
      markdownChunks.push(`<tr class='${oddEvenClass}' name='${name}'>`);

      const displayName = `<a href='/tsconfig/#${name}'>--${name}</a>`;
      markdownChunks.push(`<td><code>&#x3C;${option.configName.trim()}&#x3E;</code></td>`);
      markdownChunks.push(`<td><code>${displayName}</code></td>`);
      markdownChunks.push(`</tr>`);

      // Agrega una nueva fila debajo de la actual para la descripción, esto usa las clases 'odd' / 'even'
      // para fingir que parece una sola fila
      markdownChunks.push(`<tr class="option-description ${oddEvenClass}"><td colspan="3">`);
      markdownChunks.push(`${parseMarkdown(description)}`);
      markdownChunks.push(`</tr></td>`);
    });
    markdownChunks.push(`</tbody></table>`);
  }

  renderTable("CLI Mappings", options.flags);

  // Escribe el Markdown y JSON
  const markdown = prettier.format(markdownChunks.join("\n"), {
    filepath: "index.md",
  });
  const mdPath = new URL(`../../output/${lang}-msbuild.md`, import.meta.url);
  writeFileSync(mdPath, markdown);
});

languages.forEach((lang) => {
  const mdCLI = new URL(`../../output/${lang}-msbuild.md`, import.meta.url);
  // prettier-ignore
  const compOptsPath = new URL(`../../../documentation/copy/${lang}/project-config/Compiler Options in MSBuild.md`, import.meta.url);

  if (existsSync(compOptsPath)) {
    const md = readFileSync(compOptsPath, "utf8");
    const newTable = readFileSync(mdCLI, "utf8");
    const start = "<!-- Comienzo del reemplazo -->";
    const end = "<!-- Fin del reemplazo -->";
    const newMD = md.split(start)[0] + start + newTable + end + md.split(end)[1];
    writeFileSync(compOptsPath, newMD);
  }
});
