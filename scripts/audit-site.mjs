const origin = process.env.AUDIT_ORIGIN || "https://abelost.com";
const sitemapUrl = new URL("/sitemap-0.xml", origin).href;

const decode = (value = "") =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#039;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const text = (html = "") => decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const match = (html, pattern) => html.match(pattern)?.[1]?.trim() || "";

async function fetchText(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "Abelost site audit/1.0" }
  });
  return { response, body: await response.text() };
}

const { response: sitemapResponse, body: sitemap } = await fetchText(sitemapUrl);
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((item) => decode(item[1]));
const pages = [];
const internalLinks = new Set();
const issues = [];

for (const url of urls) {
  const { response, body } = await fetchText(url);
  const title = text(match(body, /<title>([\s\S]*?)<\/title>/i));
  const description = decode(match(body, /<meta\s+name="description"\s+content="([^"]*)"/i));
  const canonical = decode(match(body, /<link\s+rel="canonical"\s+href="([^"]+)"/i));
  const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((item) => text(item[1]));
  const schemas = [...body.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];

  pages.push({ url, status: response.status, title, description, canonical, h1s, schemas: schemas.length });

  if (response.status !== 200) issues.push(`${url}: status ${response.status}`);
  if (!title) issues.push(`${url}: missing title`);
  if (title.length > 65) issues.push(`${url}: title is ${title.length} characters`);
  if (!description) issues.push(`${url}: missing description`);
  if (description.length > 165) issues.push(`${url}: description is ${description.length} characters`);
  if (canonical !== url) issues.push(`${url}: canonical is ${canonical || "missing"}`);
  if (h1s.length !== 1) issues.push(`${url}: expected 1 H1, found ${h1s.length}`);

  for (const schema of schemas) {
    try {
      JSON.parse(schema[1]);
    } catch {
      issues.push(`${url}: invalid JSON-LD`);
    }
  }

  for (const link of body.matchAll(/<a[^>]+href="([^"]+)"/gi)) {
    const href = decode(link[1]);
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;
    const resolved = new URL(href, url);
    if (resolved.origin === new URL(origin).origin) {
      resolved.hash = "";
      internalLinks.add(resolved.href);
    }
  }
}

const linkIssues = [];
for (const url of internalLinks) {
  const response = await fetch(url, { redirect: "manual", headers: { "user-agent": "Abelost site audit/1.0" } });
  if (![200, 301, 302, 307, 308].includes(response.status)) linkIssues.push(`${url}: status ${response.status}`);
}

const duplicateTitles = Object.entries(Object.groupBy(pages, (page) => page.title))
  .filter(([title, group]) => title && group.length > 1)
  .map(([title, group]) => `${title}: ${group.length} pages`);

const duplicateDescriptions = Object.entries(Object.groupBy(pages, (page) => page.description))
  .filter(([description, group]) => description && group.length > 1)
  .map(([description, group]) => `${description.slice(0, 80)}: ${group.length} pages`);

console.log(`Pages checked: ${pages.length}`);
console.log(`Internal links checked: ${internalLinks.size}`);
console.log(`Page issues: ${issues.length}`);
console.log(`Broken internal links: ${linkIssues.length}`);
console.log(`Duplicate titles: ${duplicateTitles.length}`);
console.log(`Duplicate descriptions: ${duplicateDescriptions.length}`);

for (const [heading, list] of [
  ["PAGE ISSUES", issues],
  ["BROKEN LINKS", linkIssues],
  ["DUPLICATE TITLES", duplicateTitles],
  ["DUPLICATE DESCRIPTIONS", duplicateDescriptions]
]) {
  if (list.length) {
    console.log(`\n${heading}`);
    list.forEach((item) => console.log(`- ${item}`));
  }
}

if (issues.length || linkIssues.length || duplicateTitles.length || duplicateDescriptions.length) {
  process.exitCode = 1;
}
