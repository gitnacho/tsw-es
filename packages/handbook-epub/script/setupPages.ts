#!/usr/bin/env ts-node

/* Con twoslash
   env CI=213 yarn workspace handbook-epub build
*/
const toHAST = require(`mdast-util-to-hast`);
const hastToHTML = require(`hast-util-to-html`);
const {
  recursiveReadDirSync,
} = require("../../typescriptlang-org/lib/utils/recursiveReadDirSync");

import { readFileSync, lstatSync } from "fs";
import remarkShikiTwoslash from "remark-shiki-twoslash";
const remark = require("remark");
import { join } from "path";
import { read as readMarkdownFile } from "gray-matter";

// Reference: https://github.com/AABoyles/LessWrong-Portable/blob/master/build.js

export const generateV2Markdowns = () => {
  const markdowns = new Map<string, ReturnType<typeof readMarkdownFile>>();

  // Agarra todos los md + información de los archivos yml del manual en el disco
  // y los añáde a ^
  // prettier-ignore
  const handbookPath = join( __dirname, "..", "..", "documentation", "copy", "en", "handbook-v2");

  recursiveReadDirSync(handbookPath).forEach((path) => {
    const filePath = join(__dirname, "..", "..", path);
    if (lstatSync(filePath).isDirectory() || !filePath.endsWith("md")) {
      return;
    }

    const md = readMarkdownFile(filePath);
    // prettier-ignore
    if (!md.data.permalink) {
      throw new Error(
        `${filePath} en el manual no había un enlace permanente en el encabezado yml`,
      );
    }
    const id = md.data.permalink;
    markdowns.set(id, md);
  });

  return markdowns;
};

export const getHTML = async (code: string, settings?: any) => {
  const markdownAST: Node = remark().parse(code);
  const runShiki = remarkShikiTwoslash({
    theme: require("../../typescriptlang-org/lib/themes/typescript-beta-light.json"),
  });

  await runShiki(markdownAST);

  const hAST = toHAST(markdownAST, { allowDangerousHtml: true });
  return hastToHTML(hAST, { allowDangerousHtml: true });
};

export function replaceAllInString(_str: string, obj: any) {
  let str = _str;

  Object.keys(obj).forEach((before) => {
    str = str.replace(new RegExp(before, "g"), obj[before]);
  });
  return str;
}

export const getGitSHA = () => {
  const gitRoot = join(__dirname, "..", "..", "..", ".git");
  const rev = readFileSync(join(gitRoot, "HEAD"), "utf8").trim();
  if (rev.indexOf(":") === -1) {
    return rev;
  } else {
    return readFileSync(join(gitRoot, rev.substring(5)), "utf8");
  }
};

export const getReleaseInfo = () => {
  // prettier-ignore
  const releaseInfo = join(__dirname, "..", "..", "typescriptlang-org", "src", "lib", "release-info.json");
  const info = JSON.parse(readFileSync(releaseInfo, "utf8"));
  return info;
};
