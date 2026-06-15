const data = require("../route-data.json");

const SITE_URL = "https://glassbench.vercel.app";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function titleCase(value) {
  return value.replace(/(^|[-\s])\w/g, (match) => match.toUpperCase()).replace(/-/g, " ");
}

function pageShell({ title, description, canonicalPath, eyebrow, heading, body }) {
  const canonical = `${SITE_URL}${canonicalPath}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="GlassBench">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <style>
    :root{color-scheme:light;--ink:#15171a;--muted:#5f6670;--line:#d9dde3;--panel:#f4f7fa;--accent:#177f78;--paper:#fff}
    *{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.65}
    a{color:inherit}.site-header{border-bottom:1px solid var(--line);background:rgba(255,255,255,.96)}.nav{max-width:1120px;margin:auto;padding:18px 24px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{font-size:22px;font-weight:800;text-decoration:none}.nav-links{display:flex;gap:18px;flex-wrap:wrap}.nav-links a{font-size:14px;color:var(--muted)}
    main{max-width:960px;margin:auto;padding:64px 24px 88px}.eyebrow{margin:0 0 8px;color:var(--accent);font-size:13px;font-weight:800;text-transform:uppercase}.hero{padding-bottom:32px;border-bottom:1px solid var(--line)}h1{font-size:clamp(2rem,6vw,3.8rem);line-height:1.08;margin:0 0 18px;letter-spacing:0}.lead{max-width:760px;color:var(--muted);font-size:18px;margin:0}.section{padding-top:32px}.section h2{font-size:22px;margin:0 0 14px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.fact{border:1px solid var(--line);background:var(--panel);padding:16px}.fact dt{font-size:12px;color:var(--muted);font-weight:800;text-transform:uppercase}.fact dd{margin:5px 0 0;font-weight:650}.links{display:flex;flex-wrap:wrap;gap:10px}.button{display:inline-flex;padding:9px 13px;border:1px solid var(--ink);text-decoration:none;font-size:14px;font-weight:700}.button.primary{background:var(--ink);color:#fff}.table-wrap{overflow-x:auto;border:1px solid var(--line)}table{width:100%;border-collapse:collapse;min-width:680px}th,td{padding:13px 15px;border-bottom:1px solid var(--line);text-align:left}th{background:var(--panel);font-size:12px;text-transform:uppercase}tr:last-child td{border-bottom:0}.footer-note{margin-top:48px;padding-top:22px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
    @media(max-width:640px){.nav{align-items:flex-start;flex-direction:column}.nav-links{gap:12px}main{padding-top:42px}.grid{grid-template-columns:1fr}}
  </style>
</head>
<body>
  <header class="site-header"><nav class="nav" aria-label="Primary"><a class="brand" href="/">GlassBench</a><div class="nav-links"><a href="/">Catalog</a><a href="/knowledge/waveguide">Knowledge</a></div></nav></header>
  <main>
    <section class="hero"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(heading)}</h1><p class="lead">${escapeHtml(description)}</p></section>
    ${body}
    <p class="footer-note">GlassBench is a community-maintained reference. Specifications and availability may change; verify purchasing details with the manufacturer.</p>
  </main>
</body>
</html>`;
}

function notFound(res, message = "The requested GlassBench page was not found.") {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(pageShell({
    title: "Page Not Found | GlassBench",
    description: message,
    canonicalPath: "/404",
    eyebrow: "404",
    heading: "Page not found",
    body: '<section class="section"><a class="button primary" href="/">Return to GlassBench</a></section>',
  }));
}

function renderKnowledge(slug) {
  const item = data.glossary.find((entry) => entry.slug === slug);
  if (!item) return null;
  const related = data.glossary.filter((entry) => entry.category === item.category && entry.slug !== slug).slice(0, 6);
  const body = `
    <section class="section"><h2>Definition</h2><p>${escapeHtml(item.definition)}</p></section>
    <section class="section"><h2>Category</h2><dl class="grid"><div class="fact"><dt>Technology area</dt><dd>${escapeHtml(item.category)}</dd></div><div class="fact"><dt>Reference type</dt><dd>Technical glossary</dd></div></dl></section>
    ${related.length ? `<section class="section"><h2>Related terms</h2><div class="links">${related.map((entry) => `<a class="button" href="/knowledge/${entry.slug}">${escapeHtml(entry.term)}</a>`).join("")}</div></section>` : ""}`;
  return pageShell({
    title: `${item.term}: Definition and Explanation | GlassBench`,
    description: item.definition,
    canonicalPath: `/knowledge/${item.slug}`,
    eyebrow: `${item.category} knowledge guide`,
    heading: item.term,
    body,
  });
}

const deviceFacts = [
  ["Brand", "brand"], ["Device type", "deviceType"], ["Price", "price"], ["Weight", "weight"],
  ["Field of view", "fov"], ["Display type", "displayType"], ["Display technology", "displayTech"],
  ["Camera", "hasCamera"], ["Audio", "hasAudio"], ["Battery", "battery"], ["AI integration", "aiAssistant"], ["Availability", "availability"],
];

function formatFact(key, value) {
  if (key === "weight") return value ? `${value} g` : "Not published";
  if (key === "hasCamera" || key === "hasAudio") return value ? "Yes" : "No";
  return value || "Not published";
}

function renderDevice(slug) {
  const device = data.devices.find((entry) => entry.id === slug);
  if (!device) return null;
  const related = data.devices.filter((entry) => entry.id !== slug && entry.deviceType === device.deviceType).slice(0, 4);
  const body = `
    <section class="section"><h2>Specifications</h2><dl class="grid">${deviceFacts.map(([label, key]) => `<div class="fact"><dt>${label}</dt><dd>${escapeHtml(formatFact(key, device[key]))}</dd></div>`).join("")}</dl></section>
    <section class="section"><h2>Links</h2><div class="links">${device.link ? `<a class="button primary" href="${escapeHtml(device.link)}" rel="noopener noreferrer">Official or reference website</a>` : ""}<a class="button" href="/">View full catalog</a></div></section>
    ${related.length ? `<section class="section"><h2>Related devices and comparisons</h2><div class="links">${related.map((entry) => `<a class="button" href="/devices/${entry.id}">${escapeHtml(entry.name)}</a><a class="button" href="/compare/${device.id}-vs-${entry.id}">Compare with ${escapeHtml(entry.name)}</a>`).join("")}</div></section>` : ""}`;
  const description = `${device.name} specifications: ${formatFact("weight", device.weight)}, ${formatFact("fov", device.fov)} field of view, ${formatFact("displayTech", device.displayTech)} display technology, and ${formatFact("availability", device.availability)} availability.`;
  return pageShell({
    title: `${device.name} Specifications | GlassBench`,
    description,
    canonicalPath: `/devices/${device.id}`,
    eyebrow: `${device.brand} ${device.deviceType || "wearable device"}`,
    heading: device.name,
    body,
  });
}

function resolveComparison(slug) {
  for (const left of data.devices) {
    const marker = `${left.id}-vs-`;
    if (!slug.startsWith(marker)) continue;
    const right = data.devices.find((entry) => entry.id === slug.slice(marker.length));
    if (right && right.id !== left.id) return [left, right];
  }
  return null;
}

function renderComparison(slug) {
  const pair = resolveComparison(slug);
  if (!pair) return null;
  const [left, right] = pair;
  const rows = deviceFacts.map(([label, key]) => `<tr><th scope="row">${label}</th><td>${escapeHtml(formatFact(key, left[key]))}</td><td>${escapeHtml(formatFact(key, right[key]))}</td></tr>`).join("");
  const body = `
    <section class="section"><h2>Specification comparison</h2><div class="table-wrap"><table><thead><tr><th>Feature</th><th>${escapeHtml(left.name)}</th><th>${escapeHtml(right.name)}</th></tr></thead><tbody>${rows}</tbody></table></div></section>
    <section class="section"><h2>Device pages</h2><div class="links"><a class="button" href="/devices/${left.id}">${escapeHtml(left.name)}</a><a class="button" href="/devices/${right.id}">${escapeHtml(right.name)}</a></div></section>`;
  const heading = `${left.name} vs ${right.name}`;
  return pageShell({
    title: `${heading}: Specifications Compared | GlassBench`,
    description: `Compare ${left.name} and ${right.name} across price, weight, field of view, display technology, camera, audio, battery, AI integration, and availability.`,
    canonicalPath: `/compare/${left.id}-vs-${right.id}`,
    eyebrow: "Device comparison",
    heading,
    body,
  });
}

module.exports = (req, res) => {
  const type = Array.isArray(req.query.type) ? req.query.type[0] : req.query.type;
  const slug = Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug;
  if (!type || !slug) return notFound(res);

  let html = null;
  if (type === "knowledge") html = renderKnowledge(slug);
  else if (type === "device") html = renderDevice(slug);
  else if (type === "compare") html = renderComparison(slug);
  if (!html) return notFound(res);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.end(html);
};
