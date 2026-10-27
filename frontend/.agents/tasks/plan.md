# Implementation Plan: Country Pages Redesign

This task has been decomposed into 7 features for structured execution. See `.agents/tasks/country-pages-redesign/` for FEAT artifacts.

## Overview

Redesign 5 country study pages (Ireland, UAE, Russia, Australia, Germany) to match the StudyInCanada design system. Each country page requires:
- 10 components matching Canada's design pattern
- Dynamic [guide] route with 5 guide slugs
- Country-specific content (currency, cities, universities, benefits)

## Feature Sequence

### FEAT-001: Fix Critical Bugs (PRIORITY)
**Files**: `app/study-in-russia/page.js`, `app/study-in-australia/page.js`

Fix import bugs where Russia page imports Australia components and vice versa.

- [ ] Fix study-in-russia/page.js imports (change from StudyInAustralia to StudyInRussia)
- [ ] Fix study-in-australia/page.js imports (change from StudyInRussia to StudyInAustralia)
- [ ] Verify: Run `npm run dev` and check both pages load without errors

---

### FEAT-002: Create Germany Infrastructure
**New directory**: `components/StudyInGermany/`
**New files**: `app/study-in-germany/page.js`, `app/study-in-germany/[guide]/page.js`

Create complete Germany page from scratch using Canada as template.

- [ ] Create 10 components: StudyInGermanyHero.jsx, OnlineDegreeSection.jsx, WhatItGetsYou.jsx, CoursesSlider.jsx, HowUniversityYatraHelps.jsx, UniversityCarousel.jsx, CostOfStudyingGermany.jsx, Testimonials.jsx, GlobalEducationCTA.jsx
- [ ] Create app/study-in-germany/page.js with metadata and component imports
- [ ] Create app/study-in-germany/[guide]/page.js with 5 guide slugs
- [ ] Verify: Navigate to http://localhost:3000/study-in-germany

**Germany-specific content**:
- Currency: EUR
- Cities: Munich, Berlin, Heidelberg, Hamburg
- Universities: TU Munich, Heidelberg University, LMU Munich, Humboldt University Berlin, RWTH Aachen, Free University of Berlin, University of Freiburg, University of Bonn, TU Dresden, University of Mannheim, KIT, University of Göttingen
- Benefits: Strong engineering focus, Tuition-free/low-cost public universities, EU work opportunities, Research excellence, High quality of life
- Guide slugs: study-in-germany, cost-of-studying, living-and-culture, scholarships, post-study-work-visa

---

### FEAT-003: Update Ireland to Canada Design
**Directory**: `components/StudyInIreland/`
**Files**: Update all 10 .jsx files, create `app/study-in-ireland/[guide]/page.js`

Replace Ireland components with Canada design system.

- [ ] Replace StudyInIrelandHero.jsx (hero image: /images/hero/study-in-ireland.webp)
- [ ] Replace OnlineDegreeSection.jsx (5 guides, EUR currency, Dublin/Cork/Galway)
- [ ] Replace WhatItGetsYou.jsx (5 Ireland benefits)
- [ ] Replace CoursesSlider.jsx (same 9 courses)
- [ ] Replace HowUniversityYatraHelps.jsx (5-item circular design)
- [ ] Replace UniversityCarousel.jsx (8 Irish universities)
- [ ] Replace CostOfStudyingIreland.jsx (EUR: €10,000-€25,000/year undergrad, €10,000-€30,000/year postgrad)
- [ ] Replace Testimonials.jsx (Canada slider design)
- [ ] Replace GlobalEducationCTA.jsx (Ireland context)
- [ ] Create app/study-in-ireland/[guide]/page.js
- [ ] Verify: Compare http://localhost:3000/study-in-ireland with study-in-canada

**Ireland-specific content**:
- Currency: EUR
- Cities: Dublin, Cork, Galway
- Universities: Trinity College Dublin, UCD, UCC, NUI Galway, DCU, Maynooth University, University of Limerick, TU Dublin
- Benefits: EU member advantages, Post-study work visa, English-speaking, Growing tech hub, Quality education

---

### FEAT-004: Update UAE to Canada Design
**Directory**: `components/StudyInUae/`
**Files**: Update all 10 .jsx files, create `app/study-in-uae/[guide]/page.js`

Replace UAE components with Canada design system.

- [ ] Replace StudyInUaeHero.jsx (hero image: /images/hero/study-in-uae.webp)
- [ ] Replace OnlineDegreeSection.jsx (5 guides, AED currency, Dubai/Abu Dhabi/Sharjah)
- [ ] Replace WhatItGetsYou.jsx (5 UAE benefits)
- [ ] Replace CoursesSlider.jsx (same 9 courses)
- [ ] Replace HowUniversityYatraHelps.jsx (5-item circular design)
- [ ] Replace UniversityCarousel.jsx (8 UAE universities)
- [ ] Replace CostOfStudyingUae.jsx (AED: AED 40,000-90,000/year undergrad, AED 50,000-120,000/year postgrad)
- [ ] Replace Testimonials.jsx (Canada slider design)
- [ ] Replace GlobalEducationCTA.jsx (UAE context)
- [ ] Create app/study-in-uae/[guide]/page.js
- [ ] Verify: Compare http://localhost:3000/study-in-uae with study-in-canada

**UAE-specific content**:
- Currency: AED
- Cities: Dubai, Abu Dhabi, Sharjah
- Universities: American University of Sharjah, UAE University, Khalifa University, American University in Dubai, University of Sharjah, Abu Dhabi University, Zayed University, Heriot-Watt Dubai
- Benefits: Strategic Middle East location, Modern infrastructure, Tax-free income, Growing education hub, Multicultural environment

---

### FEAT-005: Update Russia to Canada Design
**Directory**: `components/StudyInRussia/`
**Files**: Update all 10 .jsx files, create `app/study-in-russia/[guide]/page.js`

Replace Russia components with Canada design system.

- [ ] Replace StudyInRussiaHero.jsx (hero image: /images/hero/study-in-russia.webp)
- [ ] Replace OnlineDegreeSection.jsx (5 guides, RUB currency, Moscow/Saint Petersburg/Kazan)
- [ ] Replace WhatItGetsYou.jsx (5 Russia benefits)
- [ ] Replace CoursesSlider.jsx (same 9 courses)
- [ ] Replace HowUniversityYatraHelps.jsx (5-item circular design)
- [ ] Replace UniversityCarousel.jsx (8 Russian universities)
- [ ] Replace CostOfStudyingRussia.jsx (RUB: MBBS RUB 250,000-450,000/year, Engineering RUB 150,000-300,000/year)
- [ ] Replace Testimonials.jsx (Canada slider design)
- [ ] Replace GlobalEducationCTA.jsx (Russia context)
- [ ] Create app/study-in-russia/[guide]/page.js
- [ ] Verify: Compare http://localhost:3000/study-in-russia with study-in-canada

**Russia-specific content**:
- Currency: RUB
- Cities: Moscow, Saint Petersburg, Kazan
- Universities: Lomonosov MSU, Saint Petersburg State, Kazan Federal, MIPT, Novosibirsk State, Higher School of Economics, RUDN, Sechenov First Moscow State Medical
- Benefits: Affordable tuition, Strong MBBS programs, Rich cultural heritage, No IELTS requirement, Quality technical education

---

### FEAT-006: Update Australia to Canada Design
**Directory**: `components/StudyInAustralia/`
**Files**: Update all 10 .jsx files, create `app/study-in-australia/[guide]/page.js`

Replace Australia components with Canada design system.

- [ ] Replace StudyInAustraliaHero.jsx (hero image: /images/hero/study-in-australia.webp)
- [ ] Replace OnlineDegreeSection.jsx (5 guides, AUD currency, Sydney/Melbourne/Brisbane/Perth)
- [ ] Replace WhatItGetsYou.jsx (5 Australia benefits)
- [ ] Replace CoursesSlider.jsx (same 9 courses)
- [ ] Replace HowUniversityYatraHelps.jsx (5-item circular design)
- [ ] Replace UniversityCarousel.jsx (10 Australian universities)
- [ ] Replace CostOfStudyingAustralia.jsx (AUD: AUD 20,000-45,000/year undergrad, AUD 22,000-50,000/year postgrad)
- [ ] Replace Testimonials.jsx (Canada slider design)
- [ ] Replace GlobalEducationCTA.jsx (Australia context)
- [ ] Create app/study-in-australia/[guide]/page.js
- [ ] Verify: Compare http://localhost:3000/study-in-australia with study-in-canada

**Australia-specific content**:
- Currency: AUD
- Cities: Sydney, Melbourne, Brisbane, Perth
- Universities: University of Sydney, University of Melbourne, ANU, University of Queensland, UNSW Sydney, Monash, UWA, University of Adelaide, UTS, Macquarie
- Benefits: World-class universities, Post-study work opportunities, Safe and welcoming environment, Research excellence, High standard of living

---

### FEAT-007: Cross-FEAT Integration Verification
**Full system test**

Verify all 6 countries work together correctly.

- [ ] Run `npm run build` and confirm success
- [ ] Test all 6 main country pages render correctly
- [ ] Test all 30 guide pages (6 countries × 5 guides each)
- [ ] Verify design consistency across all countries
- [ ] Test responsive behavior (mobile, tablet, desktop)
- [ ] Check browser console for errors
- [ ] Verify navigation between countries works
- [ ] Test WhatsApp links, guide navigation, internal links
- [ ] Document any issues in FEAT-007 findings field

---

## Verification Commands

```bash
# Start dev server
npm run dev

# Production build
npm run build

# Test URLs
http://localhost:3000/study-in-canada
http://localhost:3000/study-in-ireland
http://localhost:3000/study-in-uae
http://localhost:3000/study-in-russia
http://localhost:3000/study-in-australia
http://localhost:3000/study-in-germany

# Test guide pages (example for Canada)
http://localhost:3000/study-in-canada/study-in-canada
http://localhost:3000/study-in-canada/cost-of-studying
http://localhost:3000/study-in-canada/living-and-culture
http://localhost:3000/study-in-canada/scholarships
http://localhost:3000/study-in-canada/post-study-work-visa
```

## Component Structure (10 per country)

1. **{Country}Hero.jsx** - Hero banner with CTA buttons
2. **OnlineDegreeSection.jsx** - 5 guide cards with tabbed navigation
3. **WhatItGetsYou.jsx** - Timeline accordion with 5 benefits
4. **CoursesSlider.jsx** - Course category filter + Swiper slider
5. **HowUniversityYatraHelps.jsx** - Circular ring with 5 help items
6. **UniversityCarousel.jsx** - 3D arc carousel of universities
7. **CostOfStudying{Country}.jsx** - Stacked cards with tuition/living costs
8. **Testimonials.jsx** - Student testimonial slider
9. **GlobalEducationCTA.jsx** - Bottom CTA section
10. Main page.js + [guide]/page.js routes

## Design System Reference

**Base**: components/StudyInCanada/
**Colors**: Primary #1765F5, Secondary #0C337B, Accent #18B8B5
**Animations**: Framer Motion with reduced motion support
**Layout**: Responsive breakpoints sm:640px, md:768px, lg:1024px, xl:1280px
**Typography**: Font weights 400-800, tracking -0.03em to -0.035em

## Notes

- All components use "use client" directive
- Image paths: /images/hero/, /images/universities/, /images/courses/
- WhatsApp URLs: Update for each country
- Guide slugs: Must match OnlineDegreeSection guide definitions
- Currency formatting: Keep country-specific (CAD, EUR, AED, RUB, AUD)
- This plan serves as fallback if FEAT decomposition is not used
