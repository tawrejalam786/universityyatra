# Full website migration status

## Current specification

UNIVERSITY_YATRA_CODEX_MASTER_PROMPT.md supersedes the earlier full-site brief. Existing Home, Study in India and Study in Canada must remain intact. JavaScript/JSX only; remaining page copy must be captured from the exact University Yatra source URL before implementation.

## Preserved

- `/`
- `/study-in-india`
- `/study-in-canada` (found during the updated audit)
- Existing blog implementation
- User changes in StudyInIndia/CoursesSlider, Navbar, UniversityFooter and Canada assets/components

## Foundation and routes completed

- Inspected stack, layout, brand tokens, Home/India/Canada, navigation, footer and motion setup.
- Added reusable ScrollReveal with directional motion, once-only viewport entry, reduced-motion support and visible server-rendered content.
- Added server-rendered SectionHeading, BreadcrumbHero and native FAQAccordion primitives.
- Added root `.gitattributes` for LF normalization. Existing completed-page files have not been reformatted.
- Captured live homepage HTML under `migration/source/home.html` before the approval-review blocker.
- Prepared `scripts/crawl-source.py` to capture public pages linked from that homepage. The crawl has **not run**.
- Added a reusable SEO-aware route renderer at `app/[slug]/page.js`, backed by source page data in `lib/sourcePages.js`.
- Added Study Abroad, UK & Ireland, Europe, USA, Australia & New Zealand, UAE/Singapore/Russia/Cyprus, MBBS, PhD, counselling, application support, test preparation, SOP/LOR, travel/forex, education loan, referral, About, FAQs and legal routes.
- Replaced placeholder About, Contact, Services, Destinations and Programs screens with source-backed pages. Added Contact to navigation and expanded the sitemap.
- Source-backed pages include one H1, breadcrumbs, responsive cards, FAQ accordions, captured costs where available, local imagery, metadata, canonical URLs and reduced-motion scroll reveals.

## Remaining review items

Exact full legal wording, detailed package tables and every source-page image still need a second content-parity pass. Current pages preserve the captured source headings, lists, universities, costs and FAQ answers surfaced during the source audit.

`/study-in-uae` is aliased to the source site's combined UAE/Singapore/Russia/Cyprus page. `/loan-and-scholarship-assistance` is aliased to Education Loan. The captured homepage links to `/terms-conditions`; that route is preserved.

## Blocker

Direct source reading is available for the page content surfaced during this turn. A separate bulk crawl remains blocked by approval-review usage limits; no alternate network path was used to bypass that review.

## Validation

- `node node_modules/eslint/bin/eslint.js components/common` passed.
- Production build passed using `node node_modules/next/dist/bin/next build --webpack` (38 static routes generated). Webpack avoids the previously observed existing Turbopack Google Font error; package scripts and versions are unchanged.
- `git diff --check` passed. Existing CRLF files are noted by Git for future normalization but were not rewritten.
- Browser smoke checks returned HTTP 200 and one H1 for every source-backed route. The UK & Ireland page was checked at 320, 375, 390, 430, 768, 1024 and 1366px with no document overflow and no browser console errors observed.
