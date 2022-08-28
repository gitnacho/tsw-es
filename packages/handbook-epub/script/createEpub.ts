#!/usr/bin/env ts-node

/* Con twoslash
   env CI=213 yarn workspace handbook-epub build
*/

const jetpack = require("fs-jetpack");
const { createReadStream } = jetpack;
const Streampub = require("@orta/streampub");

import { copyFileSync, mkdirSync } from "fs";
import { join } from "path";
import { exists } from "fs-jetpack";
import {
  generateV2Markdowns,
  getGitSHA,
  getHTML,
  getReleaseInfo,
  replaceAllInString,
} from "./setupPages";
import { getDocumentationNavForLanguage } from "../../typescriptlang-org/src/lib/documentationNavigation";

// Reference: https://github.com/AABoyles/LessWrong-Portable/blob/master/build.js

const markdowns = generateV2Markdowns();

// Tome el manual de navegación y utilícelo para sacar el pedido.

const bookMetadata = {
  title: "Manual de TypeScript",
  author: "El equipo de TypeScript y colaboradores de código abierto",
  authorUrl: "https://www.typescriptlang.org/",
  modified: new Date(),
  source: "https://www.typescriptlang.org",
  description: "Una guía fuera de línea para aprender TypeScript.",
  publisher: "Microsoft",
  subject: "Non-fiction",
  includeTOC: true,
  ibooksSpecifiedFonts: true,
};

const dist = join(__dirname, "..", "dist");
if (!exists(dist)) mkdirSync(dist);

const epubPath = join(dist, "handbook.epub");

const startEpub = async () => {
  const handbookNavigation = getDocumentationNavForLanguage("en");

  const handbook = handbookNavigation.find((i) => i.title === "Handbook");
  const epub = new Streampub(bookMetadata);

  epub.pipe(jetpack.createWriteStream(epubPath));

  // Add the cover
  epub.write(Streampub.newCoverImage(createReadStream("./assets/cover.jpg")));
  epub.write(Streampub.newFile("ts.png", createReadStream("./assets/ts.png")));

  // Import CSS
  epub.write(
    Streampub.newFile("style.css", createReadStream("./assets/ebook-style.css"))
  );

  const releaseInfo = getReleaseInfo();
  const intro = jetpack.read("./assets/intro.xhtml");
  const date = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const editedIntro = replaceAllInString(intro, {
    "%%DATE%%": date,
    "%%COMMIT_SHA%%": getGitSHA().slice(0, 6),
    "%%TS_VERSION%%": releaseInfo.tags.stableMajMin,
    "%%RELEASE_DOCS%%": releaseInfo.releaseNotesURL,
  });
  epub.write(Streampub.newChapter(bookMetadata.title, editedIntro, 0));

  let counter = 0;
  for (const item of handbook!.items!) {
    if (item.permalink) {
      await addHandbookPage(epub, item.permalink, counter);
      counter++;
    }
    if (item.items) {
      for (const subitem of item.items) {
        await addHandbookPage(epub, subitem.permalink!, counter);
        counter++;
      }
    }
  }

  epub.end();
};

const addHandbookPage = async (epub: any, id: string, index: number) => {
  const md = markdowns.get(id);
  if (!md)
    // prettier-ignore
    throw new Error("No puedo conseguir el markdown para " + id + `\n\nTodos losl MDs: ${Array.from(markdowns.keys())}`);

  const title = md.data.title;
  const prefix = `<link href="style.css" type="text/css" rel="stylesheet" /><h1>${title}</h1><div class='section'>`;
  const suffix = "</div>";
  const html = await getHTML(md.content, {});
  const edited = replaceAllInString(html, {
    'a href="/': 'a href="https://www.typescriptlang.org/',
  });

  epub.write(Streampub.newChapter(title, prefix + edited + suffix, index));
};

startEpub();

// La generación de epub es asíncrona, así que espera hasta que todo esté
// hecho para pasar el archivo a los activos estáticos del sitio web.
process.once("exit", () => {
  copyFileSync(
    epubPath,
    // prettier-ignore
    join(__dirname, "../../typescriptlang-org/static/assets/typescript-handbook.epub")
  );
});
