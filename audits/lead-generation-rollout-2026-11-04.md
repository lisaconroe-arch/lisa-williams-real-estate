# Lead generation and measurement rollout

## Implemented on this branch
- Prominent property-assessment invitations on the homepage, probate/divorce pages, Montgomery County pages, seller resources, and both calculators.
- Assessment links point to the existing homepage Jotform section; calculator existing direct-form links remain available.
- Lightweight optional event hooks for assessment-link clicks, Calendly-link clicks, and phone-link clicks, only when gtag or dataLayer already exists.

## Not yet configured or verified
- Google Analytics 4 / Google Tag Manager property and consent/privacy setup. No measurement ID was invented or added.
- Actual Jotform completed-submission conversion. Configure a verified thank-you redirect or Jotform integration and test before marking submissions as conversions.
- Confirmed Calendly bookings. Use a Calendly integration or verified thank-you/booking event; a link click is not a booking.
- End-to-end mobile, accessibility, browser, and visual testing.
- Public profile consistency: compare the current Google Business Profile, Bing Places, brokerage and social profiles against website's actual business name, brokerage, phone, URL, and service areas. No external accounts were changed.

## Local profile consistency reference
- Business: Lisa Williams, REALTOR® — eXp Realty
- Website: https://texasprobatedivorce.com/
- Phone: (832) 948-9581
- Email: Lisa.D.Williams@ExpRealty.com
- Core counties: Montgomery, Travis and Galveston, Texas
- Only publish actual eligible business locations; do not invent offices or keyword-stuff business names.

## Recommended validation
1. Test all eight CTAs on a narrow phone viewport and desktop.
2. Test a real form submission with a clearly labeled test inquiry; verify receipt and privacy notice.
3. Configure analytics and test event delivery in debug mode; distinguish clicks from conversions.
4. Test Calendly booking independently.
5. Review Google Business Profile and Bing Places details manually or via authorized account access.
