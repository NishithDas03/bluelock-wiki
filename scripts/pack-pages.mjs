import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const dest = "site";
const candidates = [
  ".output/public",
  "dist/client",
  "dist/public",
  ".vercel/output/static",
];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

function findPublic() {
  for (const c of candidates) {
    if (!existsSync(c)) continue;
    const files = walk(c);
    const hasAssets = files.some(
      (f) => f.includes(`${c}/assets/`) || f.includes(`${c}/portraits/`),
    );
    const hasHtml = files.some((f) => f.endsWith(".html"));
    if (hasAssets || hasHtml) return c;
  }
  return null;
}

const src = findPublic();
if (!src) {
  console.error("pack-pages: no static output found. Looked in:", candidates.join(", "));
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
writeFileSync(join(dest, ".nojekyll"), "");

const shell = existsSync(join(dest, "_shell.html"))
  ? join(dest, "_shell.html")
  : null;

const indexHtml =
  shell ??
  ["index.html", "bluelock-wiki/index.html"].map((p) => join(dest, p)).find(existsSync) ??
  walk(dest).find((f) => f.endsWith("index.html") || f.endsWith("_shell.html"));

if (!indexHtml) {
  console.error("pack-pages: no index.html in", src);
  process.exit(1);
}

const html = readFileSync(indexHtml);
writeFileSync(join(dest, "404.html"), html);
if (!existsSync(join(dest, "index.html"))) {
  writeFileSync(join(dest, "index.html"), html);
}

console.log(`pack-pages: ${src} -> ${dest} (${walk(dest).length} files)`);
