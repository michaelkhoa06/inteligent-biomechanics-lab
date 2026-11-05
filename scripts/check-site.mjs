import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
if (!existsSync(dist)) {
  console.error("Run npm run build before checking the generated site.");
  process.exit(1);
}

function filesIn(directory) {
  return readdirSync(directory).flatMap((name) => {
    const file = path.join(directory, name);
    return statSync(file).isDirectory() ? filesIn(file) : [file];
  });
}

const pages = filesIn(dist).filter((file) => file.endsWith(".html"));
const broken = new Set();
for (const file of pages) {
  const route = `/${path.relative(dist, file).replaceAll(path.sep, "/")}`;
  const html = readFileSync(file, "utf8");
  for (const tag of html.matchAll(/<(?:a|img|source|video|script|link)\b[^>]*>/g)) {
    for (const attribute of tag[0].matchAll(/\b(?:href|src|poster|srcset)="([^"]+)"/g)) {
      const values = attribute[0].startsWith("srcset=")
        ? attribute[1].split(",").map((entry) => entry.trim().split(/\s+/)[0])
        : [attribute[1]];
      for (const value of values) {
        if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) continue;
        const url = new URL(value, `https://local.invalid${route}`);
        const target = path.join(dist, decodeURIComponent(url.pathname));
        if (!existsSync(target) || (statSync(target).isDirectory() && !existsSync(path.join(target, "index.html")))) {
          broken.add(`${route}: ${value}`);
        }
      }
    }
  }
}

if (broken.size) {
  console.error(`Found ${broken.size} broken local references:\n${[...broken].join("\n")}`);
  process.exit(1);
}
console.log(`Checked ${pages.length} pages: all local links and media references resolve.`);
