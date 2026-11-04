# Property Solutions Center — SEO, AI discoverability & conversion audit
Date: 2026-11-04
Scope: repository-source audit only. No live browser, Search Console performance, Lighthouse, or analytics data was used.

## Scope
- property-solutions-center.html
- seller-net-proceeds-calculator.html
- sell-as-is-vs-renovate-calculator.html
- attorney-referral-portal.html
- robots.txt and sitemap.xml

## Confirmed findings
1. All four HTML pages have a unique title, meta description and self-referencing canonical URL.
2. All four pages are present in sitemap.xml. robots.txt contains `User-agent: *`, `Allow: /`, and the sitemap URL.
3. Each page has visible H1/H2 content. The attorney page links to the provided Jotform URL (`https://form.jotform.com/263069151145050`).
4. None of the four pages contains `application/ld+json` structured data. This is an enhancement opportunity, not an indexing blocker.
5. Existing calculator formulas should retain their expense assumptions and financial disclaimers. Five arithmetic scenarios passed previously; browser accessibility, print rendering, and live form submission have not been verified.

## Recommendations, in priority order
### P0 — QA before more promotion
- Verify production HTTP 200, mobile usability, keyboard navigation, form submission, print layout, and calculator input edge cases. Do not infer these from indexing.
- Verify actual Jotform fields, consent and notification behavior; do not solicit privileged legal communications.

### P1 — Search presentation and content
- Add concise explanatory sections answering common Texas seller questions, with clear assumptions and limits; avoid promising a specific net return.
- Add relevant, descriptive contextual links from probate, divorce and county pages to the tools; avoid repetitive exact-match anchor stuffing.
- Add a visible consultation/valuation CTA after each calculator result, preserving a no-obligation educational experience.
- Audit title/description pixel truncation in actual SERPs and refine based on Search Console queries and CTR rather than guesses.

### P1 — Structured data
- Consider `WebPage` / `BreadcrumbList` schema on the four pages, using canonical URLs and accurate visible breadcrumbs.
- Consider `WebApplication` only for calculators if descriptions accurately match the tool. Avoid unsupported review, rating, attorney, legal-service or FAQ rich-result claims.
- Validate with Schema Markup Validator; Google Rich Results Test only supports Google's eligible rich-result types.

### P2 — Measurement
- Use Search Console and Bing Webmaster Tools to track impressions, queries, CTR, canonical/indexing, and clicks for each page.
- Configure privacy-conscious conversion measurement for valuation CTA and referral clicks if appropriate; do not record sensitive case details in analytics.
- Review after 28 days and prioritize changes supported by actual query and conversion data.

## Publication safety
This is an audit document only, committed to a separate branch. No production HTML, robots.txt, sitemap.xml, or main-branch content is modified.
