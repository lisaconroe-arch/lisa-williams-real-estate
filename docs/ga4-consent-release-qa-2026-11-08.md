# GA4 consent-first release QA — November 8, 2026

## Verified from repository source
- All 17 HTML pages currently listed in sitemap.xml reference `/assets/analytics-consent.js` exactly once.
- No sitemap-listed page contains an unconditional Google Analytics loader.
- The consent manager loads the Google Analytics script only after a stored `accepted` preference or an Accept click.
- Reject does not call the analytics loader; the privacy notice and preference controls are present.
- The measurement ID is `G-XZMNVJH2XX`.
- The existing homepage lead-intent events are not completed-form conversions.

## Pending real-browser tests (not yet verified)
- First visit with fresh browser storage: banner appears; no `gtag/js` or GA4 `collect` request before Accept.
- Reject: banner closes; no GA4 requests on subsequent navigation/reload.
- Accept: one Google Analytics script loads and one initial page_view is recorded; no duplicates.
- Revisit after Accept: preference persists; navigation records expected page views.
- Change Accept to Reject: page reloads; future GA4 requests stop; explain pre-existing analytics cookies may remain until cleared.
- Keyboard-only and mobile: tab order, focus visibility, buttons, banner layout, and accessibility.
- Confirm `www` and apex domain redirects and canonical behavior.
- Embedded Jotform may set third-party cookies independently; audit Jotform settings and disclosure separately.
- Review privacy notice for business-specific completeness and applicable privacy/legal requirements before release.
- Confirm whether other public HTML pages are missing from the sitemap and consent installation.
- Verify GA4 Realtime and Tag Assistant after approved publication; only then implement confirmed Jotform submission conversions.

## Release order
1. PR #30 canonical and audit (separate approval).
2. PR #32 GA4 and privacy, after tests.
3. PR #31 click events, after duplicate-event checks.
