# Implementation Plan: Russia & Australia Country Pages Update

This plan updates StudyInRussia and StudyInAustralia to match the StudyInCanada design system, following the completed Ireland and UAE examples.

## Design Pattern Reference

- **Template**: StudyInCanada components (Canada design system)
- **Completed Examples**: StudyInIreland, StudyInUae (already updated to Canada design)
- **Targets**: StudyInRussia, StudyInAustralia (need updates)

Key Changes:
1. Hero: Video background → Image background with gradient overlay, two CTAs
2. UniversityCarousel: Swiper.js → Custom 3D arc carousel
3. All components: Update colors to #1765F5 (blue), #0C337B (navy), #18B8B5 (teal)
4. Guide pages: Create 5 guide pages per country following Ireland structure

---

## RUSSIA UPDATES

### - [ ] 1. Update StudyInRussiaHero component

Replace video-based hero with image-based design matching StudyInIrelandHero.jsx.

**What to do:**
- Remove video element and video overlays
- Add Image component from next/image with src="/images/hero/study-in-russia.webp"
- Use gradient overlay: bg-gradient-to-t from-black/40 via-transparent to-black/10
- Move heading to top section (pt-[105px] positioning)
- Replace single CTA with two buttons at bottom: "Book Free Consultation" (blue) + "Chat On WhatsApp" (green with Russian WhatsApp number)
- Remove stats array section
- Keep framer-motion animations, adjust to match Ireland timing

**Files:** 
- components/StudyInRussia/StudyInRussiaHero.jsx

**Verify:** 
Run `npm run build` from frontend directory. Build succeeds with no import errors. Start dev server `npm run dev` and visit http://localhost:3000/study-in-russia - hero displays image background with two buttons at bottom.

---

### - [ ] 2. Update StudyInRussia UniversityCarousel to 3D arc

Replace Swiper.js implementation with Canada's custom 3D arc carousel.

**What to do:**
- Copy the entire 3D arc carousel logic from components/StudyInCanada/UniversityCarousel.jsx
- Replace UNIVERSITIES array data with existing Russia universities (Lomonosov Moscow State, Saint Petersburg State, Kazan Federal, etc. - keep all 14 universities)
- Keep university image paths and location names unchanged
- Apply same 3D transform calculations (getWrappedDelta, getScale, getRotY functions)
- Include touch/mouse drag handlers, autoplay logic, and keyboard navigation
- Match color scheme: #1765F5 for accent, #063B72 for text

**Files:**
- components/StudyInRussia/UniversityCarousel.jsx

**Verify:**
Run `npm run build`. Visit /study-in-russia and verify carousel displays universities in 3D arc, draggable, with arrow navigation.

---

### - [ ] 3. Update StudyInRussia OnlineDegreeSection with guide links

Update to match Ireland's OnlineDegreeSection with links to 5 guide pages.

**What to do:**
- Follow components/StudyInIreland/OnlineDegreeSection.jsx structure
- Create section with 5 guide cards linking to /study-in-russia/[guide-slug]
- Guide slugs: study-in-russia, cost-of-studying, living-and-culture, scholarships, post-study-work-visa
- Each card: vol label (VOL. I-V), title, tagline, and link
- Use color scheme: #1765F5 blue, #EDF5FF light blue backgrounds
- Include proper hover states and animations

**Files:**
- components/StudyInRussia/OnlineDegreeSection.jsx

**Verify:**
Build succeeds. Guide links section visible on /study-in-russia with 5 cards.

---

### - [ ] 4. Update remaining Russia components (batch)

Update WhatItGetsYou, CoursesSlider, HowUniversityYatraHelps, CostOfStudyingRussia, Testimonials, GlobalEducationCTA to match Ireland patterns.

**What to do:**
- **WhatItGetsYou.jsx**: Match components/StudyInIreland/WhatItGetsYou.jsx layout, colors (#1765F5, #0C337B), and structure. Keep Russia-specific benefit content.
- **CoursesSlider.jsx**: Verify matches components/StudyInIreland/CoursesSlider.jsx (likely similar, update colors if needed).
- **HowUniversityYatraHelps.jsx**: Match components/StudyInIreland/HowUniversityYatraHelps.jsx with Russia-specific services, same visual design.
- **CostOfStudyingRussia.jsx**: Follow components/StudyInIreland/CostOfStudyingIreland.jsx structure with Russia tuition data, matching color scheme.
- **Testimonials.jsx**: Ensure matches components/StudyInIreland/Testimonials.jsx pattern.
- **GlobalEducationCTA.jsx**: Match components/StudyInIreland/GlobalEducationCTA.jsx design.

**Files:**
- components/StudyInRussia/WhatItGetsYou.jsx
- components/StudyInRussia/CoursesSlider.jsx
- components/StudyInRussia/HowUniversityYatraHelps.jsx
- components/StudyInRussia/CostOfStudyingRussia.jsx
- components/StudyInRussia/Testimonials.jsx
- components/StudyInRussia/GlobalEducationCTA.jsx

**Verify:**
Run `npm run build`. Visit /study-in-russia and scroll through all sections - verify consistent design and colors.

---

### - [ ] 5. Create Russia guide pages

Create app/study-in-russia/[guide]/page.js with 5 guide pages following Ireland structure.

**What to do:**
- Create app/study-in-russia/[guide]/page.js (new file)
- Follow exact structure of app/study-in-ireland/[guide]/page.js
- Define RUSSIA_GUIDES object with 5 guides:
  - study-in-russia: Overview of Russian education system, degrees, intakes
  - cost-of-studying: Tuition fees, living costs, budget planning
  - living-and-culture: Accommodation, daily life, Russian culture
  - scholarships: Funding opportunities for Indian students
  - post-study-work-visa: Work options after graduation
- Each guide needs: id, vol, slug, title, shortTitle, badge, tagline, heroImage (use Russian university images), pillColors array, markdown content
- Markdown content: Russia-specific information (programs like MBBS, Russian cities, cost in RUB/INR, visa requirements)
- Include generateStaticParams, generateMetadata, page component with hero, article, CTA block, other guides section
- Use Navbar and UniversityFooter imports

**Files:**
- app/study-in-russia/[guide]/page.js (create new)

**Verify:**
Run `npm run build`. Visit http://localhost:3000/study-in-russia/study-in-russia, test all 5 guide routes, verify navigation and content rendering.

---

## AUSTRALIA UPDATES

### - [ ] 6. Update StudyInAustraliaHero component

Replace video-based hero with image-based design matching StudyInIrelandHero.jsx.

**What to do:**
- Remove video element and video overlays
- Add Image component from next/image with src="/images/hero/study-in-australia.webp"
- Use gradient overlay: bg-gradient-to-t from-black/40 via-transparent to-black/10
- Move heading to top section (pt-[105px] positioning), update text to Australia context
- Replace single CTA with two buttons at bottom: "Book Free Consultation" (blue) + "Chat On WhatsApp" (green with Australian WhatsApp number)
- Remove stats array section
- Keep framer-motion animations

**Files:**
- components/StudyInAustralia/StudyInAustraliaHero.jsx

**Verify:**
Run `npm run build`. Visit http://localhost:3000/study-in-australia - hero displays image background with two buttons at bottom.

---

### - [ ] 7. Update StudyInAustralia UniversityCarousel to 3D arc

Replace current implementation with Canada's custom 3D arc carousel.

**What to do:**
- Copy the entire 3D arc carousel logic from components/StudyInCanada/UniversityCarousel.jsx
- Keep existing Australia university data (images and city names unchanged)
- Apply same 3D transform calculations and interaction handlers
- Match color scheme: #1765F5 for accent, #063B72 for text

**Files:**
- components/StudyInAustralia/UniversityCarousel.jsx

**Verify:**
Run `npm run build`. Visit /study-in-australia and verify carousel displays universities in 3D arc with interactions.

---

### - [ ] 8. Update StudyInAustralia OnlineDegreeSection with guide links

Update to match Ireland's OnlineDegreeSection with links to 5 guide pages.

**What to do:**
- Follow components/StudyInIreland/OnlineDegreeSection.jsx structure
- Create section with 5 guide cards linking to /study-in-australia/[guide-slug]
- Guide slugs: study-in-australia, cost-of-studying, living-and-culture, scholarships, post-study-work-visa
- Match color scheme and layout

**Files:**
- components/StudyInAustralia/OnlineDegreeSection.jsx

**Verify:**
Build succeeds. Guide links section visible on /study-in-australia with 5 cards.

---

### - [ ] 9. Update remaining Australia components (batch)

Update WhatItGetsYou, CoursesSlider, HowUniversityYatraHelps, CostOfStudyingAustralia, Testimonials, GlobalEducationCTA to match Ireland patterns.

**What to do:**
- **WhatItGetsYou.jsx**: Match components/StudyInIreland/WhatItGetsYou.jsx layout with Australia-specific benefits.
- **CoursesSlider.jsx**: Verify matches Ireland pattern.
- **HowUniversityYatraHelps.jsx**: Match Ireland design with Australia-specific services.
- **CostOfStudyingAustralia.jsx**: Follow Ireland structure with Australia tuition data (AUD).
- **Testimonials.jsx**: Ensure matches Ireland pattern.
- **GlobalEducationCTA.jsx**: Match Ireland design.

**Files:**
- components/StudyInAustralia/WhatItGetsYou.jsx
- components/StudyInAustralia/CoursesSlider.jsx
- components/StudyInAustralia/HowUniversityYatraHelps.jsx
- components/StudyInAustralia/CostOfStudyingAustralia.jsx
- components/StudyInAustralia/Testimonials.jsx
- components/StudyInAustralia/GlobalEducationCTA.jsx

**Verify:**
Run `npm run build`. Visit /study-in-australia and verify all sections match design system.

---

### - [ ] 10. Create Australia guide pages

Create app/study-in-australia/[guide]/page.js with 5 guide pages.

**What to do:**
- Create app/study-in-australia/[guide]/page.js (new file)
- Follow exact structure of app/study-in-ireland/[guide]/page.js
- Define AUSTRALIA_GUIDES object with 5 guides: study-in-australia, cost-of-studying, living-and-culture, scholarships, post-study-work-visa
- Each guide needs: id, vol, slug, title, shortTitle, badge, tagline, heroImage (use Australian university images), pillColors, markdown content
- Markdown content: Australia-specific information (cities like Sydney/Melbourne/Brisbane, cost in AUD/INR, visa requirements, study programs)
- Include generateStaticParams, generateMetadata, page component

**Files:**
- app/study-in-australia/[guide]/page.js (create new)

**Verify:**
Run `npm run build`. Visit http://localhost:3000/study-in-australia/study-in-australia and test all 5 guide routes.

---

## FINAL VERIFICATION

### - [ ] 11. Full build and verification

Run complete build and verify all pages.

**What to do:**
- Run `npm run build` from c:\Users\Tawrej\OneDrive\Desktop\universityyatra\frontend
- Verify build completes successfully with no errors
- Start dev server `npm run dev`
- Test all routes:
  - /study-in-russia (main page)
  - /study-in-russia/study-in-russia through /study-in-russia/post-study-work-visa (5 guides)
  - /study-in-australia (main page)
  - /study-in-australia/study-in-australia through /study-in-australia/post-study-work-visa (5 guides)
- Verify design consistency across all pages
- Check responsive behavior on different screen sizes
- Test all interactive elements (carousels, CTAs, navigation)

**Files:**
All updated files across both countries

**Verify:**
All pages load correctly, design matches Canada/Ireland system, no console errors, navigation works, content displays properly.
