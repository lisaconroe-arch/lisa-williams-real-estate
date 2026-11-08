# Step 01 follow-up: schema, internal links, and conversion tracking
Date: 2026-11-07. Source: main branch of lisaconroe-arch/lisa-williams-real-estate.
Scope: all 17 sitemap-listed HTML pages. This is a static source audit, not a live crawl.

## Confirmed findings
- 17 of 17 sitemap URLs were retrievable from the GitHub repository.
- 12 JSON-LD script blocks parsed as valid JSON; types included RealEstateAgent, WebSite, Service, WebPage, BreadcrumbList, Article, CollectionPage and WebApplication. **JSON syntax validity is not the same as Schema.org semantic validity or Google rich-result eligibility.**
- 0 internal href targets outside the 17-page sitemap were found in the inspected HTML anchor tags; 0 broken fragment targets detected by the static check. External URLs, dynamically generated links, JS navigation, image/CSS links and HTTP responses were not tested.
- One missing canonical tag found on executors-property-guide.html. Added self-referencing canonical in this branch. The previous canonical fixes on seller-resources.html and for-attorneys.html are present on main.
- Several pages have no JSON-LD: for-attorneys.html, executors-property-guide.html, montgomery-county-probate-realtor.html, montgomery-county-divorce-realtor.html, seller-resources.html. This is not automatically an error; add only accurate, relevant markup after content review.

## Remaining validation tasks (do not mark complete)
1. Run Schema.org Validator on all 17 public URLs and Google Rich Results Test on applicable types; inspect warnings, entity URLs, and visible-content consistency.
2. Live crawl 17 canonical URLs and redirect variants; verify status 200, no loops, final canonical targets, robots directives, and sitemap freshness.
3. Manually test keyboard navigation, mobile menu, color contrast and links in a real browser.
4. Verify external form/Calendly destinations, especially Free Property Assessment: https://form.jotform.com/262867538347068.
5. Check that all indexable pages are in the sitemap and no intentionally excluded pages were inadvertently included.

## Conversion tracking implementation plan
Primary business outcome: completed Free Property Assessment inquiries, not mere CTA clicks.
- Event `property_assessment_click`: outbound link activation to Jotform from site; include landing_page, CTA location and UTM source where consent allows.
- Event `property_assessment_submit`: **only** upon confirmed Jotform submission, using a supported Jotform thank-you redirect, webhook or integration; do not count a button click as a lead.
- Events `phone_click`, `consultation_click`, and `consultation_booked` (last only on confirmed booking).
- Use GA4 (or equivalent) with appropriate consent/privacy configuration. Preserve attribution from original landing page to form submission. Avoid storing probate/divorce sensitive details in analytics URLs or event parameters.
- Before implementation, confirm the existing analytics tag/provider, form settings, permitted redirect/webhook mechanism and access. No analytics changes were made in this PR.
- Test with a clearly labeled test submission, check analytics DebugView and actual form inbox, then exclude test leads from business reporting.

## Release safety
Only one HTML change is included: canonical on executors-property-guide.html. No deployment, merge, tracking scripts or form changes authorized by this audit. Review draft PR before merging.
