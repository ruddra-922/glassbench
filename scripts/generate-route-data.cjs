const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "app.js"), "utf8");

function extractArray(variableName) {
  const marker = `const ${variableName} = [`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) throw new Error(`Missing ${variableName}`);

  const start = source.indexOf("[", markerIndex);
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') inString = true;
    else if (char === "[") depth += 1;
    else if (char === "]") {
      depth -= 1;
      if (depth === 0) return JSON.parse(source.slice(start, index + 1));
    }
  }

  throw new Error(`Unterminated ${variableName}`);
}

function slugify(value, keepParenthetical = false) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(keepParenthetical ? /[()]/g : /\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const devices = extractArray("smartGlassesData");
const usedGlossarySlugs = new Set();
const glossary = extractArray("glossaryData").map((item) => {
  let slug = slugify(item.term);
  if (usedGlossarySlugs.has(slug)) slug = slugify(item.term, true);
  if (usedGlossarySlugs.has(slug)) throw new Error(`Duplicate glossary slug: ${slug}`);
  usedGlossarySlugs.add(slug);
  return { ...item, slug };
});

const output = {
  generatedAt: new Date().toISOString(),
  devices,
  glossary,
};

fs.writeFileSync(path.join(root, "route-data.json"), `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${devices.length} devices and ${glossary.length} glossary terms.`);
