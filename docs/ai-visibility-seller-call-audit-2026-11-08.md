# AI discoverability and seller-call audit — November 8, 2026

## Scope and evidence
Source review of the connected GitHub main branch; public search spot checks for Texas inherited-house queries. This is **not** a comprehensive ranking audit and does not establish that a site is indexed or absent from any particular search engine. Do not infer impressions, clicks, conversion rates, or AI citations without Search Console/Bing analytics data.

## Current strengths (verified in source)
- `robots.txt` allows crawlers and points to the sitemap.
- `sitemap.xml` lists 17 canonical website URLs.
- Homepage, probate, divorce and inherited-house guide have unique titles, descriptions and self-canonical links.
- Homepage has a RealEstateAgent/WebSite JSON-LD graph with consistent phone, email and three primary counties.
- Main seller pages link to the Free Property Assessment form and telephone contact.
- The inherited-house guide answers seller questions with real estate-specific advice.

## Gaps and opportunities
1. **Visibility baseline:** Pull Google Search Console and Bing Webmaster Tools query/page impressions, clicks, indexing and AI citations; no authenticated performance data was analyzed in this audit. Prioritize terms showing existing impressions before creating new pages.
2. **Entity consistency:** Verify identical public name, brokerage, phone, URL and service geography across Google Business Profile, Bing Places, website and professional profiles. Avoid unsupported claims of AI endorsements or rankings.
3. **Conversion coverage:** The property-solutions-center source did not contain the primary phone number string, unlike main seller pages. Review above-the-fold mobile click-to-call and assessment placement without disrupting existing calculator interactions.
4. **Attorney conversion:** The For Attorneys page did not contain the direct Jotform attorney referral form ID in source; check portal navigation and add a direct, accessible link if missing.
5. **Helpful expertise:** Create a short set of attorney-reviewed, original FAQs grounded in Texas probate/title practice: who can sign; inherited home before probate closes; disagreement among heirs; divorce buyout versus sale; as-is versus repair. Avoid generic, high-volume AI content.
6. **Local intent:** Strengthen existing Montgomery, Travis and Galveston county pages with distinct local transaction logistics and first-hand knowledge, not duplicated location swapping.
7. **Trust and measurement:** Finish separate PR #32 consent-first GA4 and PR #31 click tracking, then implement confirmed Jotform completion events without transmitting confidential information or property addresses.
8. **Crawl checks:** Verify rendered public pages and Bing/Google indexing directly; `robots.txt` access does not guarantee indexing or AI recommendation.

## Competitive public search observations
Spot checks for inherited-home selling in Texas surfaced competitor guides emphasizing who can sign, court authority, attorney/title coordination, as-is decisions and strong phone CTAs. This is a content-format comparison, not evidence of their conversion volume or rankings across all searches.

## Recommended five-page priority
1. Homepage — call and property assessment pathways.
2. Selling an Inherited House in Texas — question-led authoritative guide.
3. Probate Real Estate — executor and title process.
4. Divorce Real Estate — options for sale or buyout.
5. For Attorneys — direct referral pathway and professional process.

## Release safety
This branch contains an audit only; no changes to live website. PR #30 merged separately. Do not overwrite PR #32 or PR #31. Obtain baseline data and review planned edits before implementation.
