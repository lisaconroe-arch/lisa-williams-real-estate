# Step 01 — Technical SEO audit (initial repository review)
Date: 2026-11-07
Repository: lisaconroe-arch/lisa-williams-real-estate
Branch: audit/technical-seo-2026-11-07
Status: DRAFT — no production deployment authorized

## Scope and evidence
Source-code inspection of robots.txt, sitemap.xml, and 10 representative HTML pages on main, plus connected Google Search Console data. This is **not** a complete site crawl or live browser audit. No live HTTP status, redirect, PageSpeed/Lighthouse, Rich Results Test, screen-reader, keyboard, or device test has been performed. Findings below distinguish source-confirmed facts from unverified risks.

## Priority findings
| Priority | Area | Evidence | Recommended action | Validation |
|---|---|---|---|---|
| P1 | Search intent / conversion measurement | Search Console returned 18 page-query-date records, 20 impressions, 0 clicks (2026-10-20 through 2026-11-07), all for homepage; queries predominantly brand/brokerage. No form conversion data in this report. | Configure analytics events for property assessment submission, call clicks, appointment bookings; distinguish actual leads from clicks. Improve non-branded seller content only after technical foundation. | GA4 DebugView and test form submissions, with consent/privacy review; weekly source-to-lead report. |
| P1 | Live crawl and redirects | No independently verified HTTP status or redirect chain for www/non-www, http/https, /index.html, trailing slash, removed URLs. | Crawl all canonical URLs and variants, detect 404/5xx, redirect loops/chains, duplicate pages, noindex, mixed content. | Recorded URL-by-URL HTTP status and canonical/redirect matrix. |
| P1 | Core Web Vitals/mobile | HTML inspection only; no measured LCP/INP/CLS or device screenshots. | Run PageSpeed Insights/Lighthouse on home, probate, divorce, guide, calculator and attorney portal, mobile and desktop; prioritize real bottlenecks. | PSI field/lab metrics and before/after screenshots. |
| P1 | Accessibility | Ten sampled pages each have one H1, viewport and image alt attributes where images appear; no keyboard, contrast, labels or screen-reader test. | Audit keyboard focus, semantic landmarks, link names, color contrast, tap targets, form errors, zoom and reduced motion. | axe/Lighthouse + manual keyboard/mobile tests. |
| P2 | Canonicals | Homepage and inherited guide have self-canonicals; seller-resources.html and for-attorneys.html lacked them on main. | Add explicit self-referencing canonicals on these two pages; audit all remaining pages for canonical consistency. | Inspect branch source and live rendered head after approval/deploy. |
| P2 | Sitemap | Source sitemap.xml is well-formed by inspection and lists 17 URLs, including inherited guide; robots.txt references it. No live sitemap response check. | Crawl and compare sitemap URLs to actual indexable canonical 200 pages; check for missing indexable pages and stale entries. | XML parse, HTTP 200 and GSC/Bing sitemap status. |
| P2 | Schema | JSON-LD present on sampled home, probate, divorce, guide, calculators and attorney portal; absent on sampled seller-resources, for-attorneys and Montgomery probate page. | Validate each JSON-LD block, match claims to visible content; add only appropriate, accurate schema (no invented ratings/reviews). | Schema.org Validator and Google Rich Results Test where eligible. |
| P2 | Internal links | Homepage links to inherited guide; sampled pages contain links, but sitewide graph, broken links and anchor text not crawled. | Crawl internal link graph, fix broken targets, link guide from related county/service/resources pages where useful. | Automated internal-link report and manual journey test. |
| P2 | On-page metadata | Ten sampled pages have titles, descriptions, viewport and one H1; description quality, duplicates and truncation not assessed sitewide. | Inventory all indexable pages for unique, intent-aligned titles/descriptions and heading hierarchy. | Sitewide metadata export. |
| P3 | Image/performance optimization | HTML pages use images and scripts; byte weights, dimensions, cache headers, lazy loading and layout shift not measured. | Inspect image formats/sizes, dimensions, lazy loading, critical CSS and third-party scripts before changing. | Lighthouse trace, image inventory, regression test. |

## Source-confirmed positives
- robots.txt contains User-agent: *, Allow: / and a sitemap directive.
- sitemap.xml contains 17 loc elements, including /selling-inherited-house-texas.html.
- In the 10 sampled pages, all have a viewport tag, description and exactly one H1; image tags found in the sample have alt attributes (quality of alt text not evaluated).
- Canonical present on sampled homepage, probate, divorce, inherited guide, calculators, attorney portal, and Montgomery probate page.
- Inherited guide has a canonical URL and JSON-LD.
- Google/Bing indexing submission acceptance was reported by the site owner; not independently verified in this audit. Submission acceptance is not proof of indexing.

## Safe changes in this branch
1. Add self-referencing canonical URL to seller-resources.html.
2. Add self-referencing canonical URL to for-attorneys.html.
3. Add this audit report.

## Release gate
Do not merge or publish without owner's explicit approval. Before merging: inspect branch diff, check both canonical tags occur exactly once, verify canonical host and paths, run live tests when available, and review any automated CI. Following deployment, inspect page source, Search Console and Bing status; do not equate indexing requests with indexed status.

## Conversion goal
Optimize for qualified seller calls and Free Property Assessment submissions, not just impressions. Track source/landing page, clicks on call/assessment CTAs, completed form submissions, booked appointments, and resulting listings where lawful and consented.
