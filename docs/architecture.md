# Abelost Architecture

## Product model

Abelost is one canonical website on `abelost.com`. Categories are directories,
not subdomains, so authority, navigation, analytics, and monetization remain
consolidated.

```text
/
|-- calculators/
|   |-- paint/
|   |-- electricity-cost/
|   `-- ...
|-- home/
|-- yard/
|-- energy/
|-- auto/
|-- business/
|-- methodology/
|-- about/
`-- legal and contact pages
```

## Code ownership

- `src/data/calculators.ts`: product copy, inputs, assumptions, examples, FAQs
- `src/lib/calculations.ts`: calculation behavior
- `src/pages/calculators/[slug].astro`: generated calculator page template
- `src/components/CalculatorWidget.astro`: shared browser interaction
- `tests/calculations.test.ts`: formula verification
- `wrangler.jsonc`: Cloudflare Workers Static Assets deployment

This separation makes formula changes reviewable without mixing them with
layout or marketing copy.

## Runtime

Astro pre-renders all pages. Cloudflare serves the generated files from its
static asset network. A small JavaScript bundle performs calculations in the
visitor's browser. Calculator inputs are not submitted to a server.

## SEO and trust

- One stable URL per calculator
- Canonical metadata
- XML sitemap
- `WebApplication`, `FAQPage`, and breadcrumb structured data
- Formula, example, assumptions, and review date on each calculator
- About, methodology, privacy, terms, disclaimer, and contact pages
- Related links within each category

## Monetization boundary

Advertising is intentionally not active in source control. After AdSense
approval, add a consent-aware site tag and restrained ad components. Ads must
remain visually separate from form controls and results, and content must
remain usable when ads are unavailable.
