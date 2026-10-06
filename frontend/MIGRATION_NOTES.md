# Blog implementation notes

Scope: blog listing, blog detail pages, SEO and subtle 3D card hover effects. The broader website migration in the supplied reference document was not part of this request.

- The live WordPress posts endpoint returned an empty array on 6 October 2026. The three initial guides are adaptations of https://universityyatra.com/study-in-india/, not migrated historical blog posts. Each guide discloses its source. No publication dates, individual authors, new statistics or testimonials were invented.
- Edit articles in `lib/blog.js`. Slugs drive static article routes, canonical URLs, related guides and sitemap entries.
- Existing local WebP assets were reused. No new dependencies were installed.
- Home and Study in India page implementations are unchanged. Shared navigation now includes Blog.
- Calls to action use the existing production contact page because the local contact page is a placeholder. Existing unrelated navigation destinations and footer links were not migrated.
- Production build passed with `node node_modules/next/dist/bin/next build --webpack`. The default Turbopack build failed in the existing Home StudentStories Google Font processing (`next/font/google queries have exactly one entry`). The default build script was not changed.
- The system npm launcher points to a missing npm-cli.js. Direct Node CLI invocation was used for validation.
- ESLint passes for all changed JavaScript/JSX files. Full-project lint reports existing errors in `components/StudyInIndia/GlobalEducationCTA.jsx` (unescaped apostrophe) and `components/shared/Counter.jsx` (synchronous setState in effect), plus three existing warnings.
- Browser checks: search no-results/reset works; listing and article have no horizontal document overflow at 320, 375, 390, 430, 768, 1024 and 1366px; observed browser error log was empty. Card tilt is limited to fine pointers and disabled for reduced motion. CSS scroll reveals progressively enhance supporting browsers; content remains visible otherwise.
- Canonicals and sitemap use https://universityyatra.com. The sitemap lists completed home, Study in India and blog routes, excluding existing placeholder pages.
