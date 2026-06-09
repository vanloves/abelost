# Abelost

Abelost is a static, SEO-focused calculator website for home projects, yard
materials, energy use, vehicle costs, and small-business planning.

## Product structure

```text
Home Improvement  5 calculators
Yard & Garden     5 calculators
Home Energy       5 calculators
Auto & Travel     5 calculators
Small Business    5 calculators
```

Every calculator has a dedicated static URL, interactive browser-side
calculation, formula, worked example, assumptions, FAQs, related links, and
structured data.

## Technology

- Astro 6 static site generation
- TypeScript calculation engine
- Vitest
- Cloudflare Workers Static Assets
- GitHub Actions

No database or server-side application is required.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run check
npm test
npm run build
```

## Add a calculator

1. Add the calculator definition to `src/data/calculators.ts`.
2. Add its calculation case to `src/lib/calculations.ts`.
3. Add normal and boundary tests to `tests/calculations.test.ts`.
4. Run the full quality checks.

The route `src/pages/calculators/[slug].astro` generates the page
automatically.

## Deploy to Cloudflare Workers

The Worker name is `abelost`, and the static output is `dist`.

### GitHub integration

1. Push this repository to GitHub with `main` as the default branch.
2. In Cloudflare, open **Workers & Pages** and choose **Create application**.
3. Choose **Import a repository** and select the repository.
4. Set the Worker name to `abelost`.
5. Set the production branch to `main`.
6. Set the build command to `npm ci && npm run build`.
7. Set the deploy command to `npx wrangler deploy`.
8. Deploy and verify the generated `workers.dev` URL.
9. Add `abelost.com` under **Settings > Domains & Routes > Custom Domains**.
10. Redirect `www.abelost.com` to `https://abelost.com`.

The dashboard Worker name must match `name` in `wrangler.jsonc`.

### Manual deployment

```bash
npx wrangler login
npm run deploy
```

## Launch checklist

- Replace placeholder contact email routing if needed.
- Verify `abelost.com` in Google Search Console.
- Submit `https://abelost.com/sitemap-index.xml`.
- Add production analytics and consent controls.
- Apply to AdSense only after reviewing all content.
- Replace `public/ads.txt` with the exact authorized seller record supplied by
  AdSense.
- Add AdSense code only after approval.
- Test canonical redirects for HTTP and `www`.

Do not commit API tokens, Cloudflare credentials, or AdSense credentials.
