# Career Counselling Page Components

This directory contains all components for the Career Counselling & Profile Assessment page.

## Components List

### 1. **CounsellingHero.jsx**
- Hero section with headline, description, and CTA buttons
- Breadcrumb navigation
- Trust badges (No cost, Profile-first advice, Parents welcome)
- Placeholder for hero illustration

### 2. **GuidanceTrust.jsx**
- "Guidance you can trust" section
- 4-step personalised pathway (Profile → Options → Plan → Next steps)
- 4 trust pillars grid (100% Free, Profile-Based, Honest Expectations, Career-First)

### 3. **WhyUniversityYatra.jsx**
- Dark navy blue background section
- 4 reasons in grid layout:
  - Profile-first approach
  - Country & course clarity
  - Budget-aware planning
  - Honest, practical advice

### 4. **ProfileReview.jsx** ⭐ Interactive
- Tab-based profile review section
- 6 categories: Academics, Experience, Study gaps, Budget, Language, Goals
- Click to explore each category with detailed description

### 5. **HowItWorks.jsx**
- 3-step process timeline
- Steps: Share profile → Speak with counsellor → Get next-step plan
- Desktop: timeline with center icons
- Mobile: stacked vertical layout

### 6. **WhatYouGet.jsx**
- 4 benefits grid
- Study destinations, Course direction, Admission outlook, Preparation roadmap
- CTA button: "Start Free Assessment"

### 7. **WhoItsFor.jsx**
- 4 audience types in grid
- Undecided students, Parents & families, Students with gaps, Working professionals
- Color-coded gradient icons

### 8. **PopularDestinations.jsx**
- Quick links to study destinations
- Flag emoji + country name buttons
- Canada, UK & Ireland, USA, Australia & NZ, Europe

### 9. **CounsellingFAQ.jsx** ⭐ Interactive
- Accordion-style FAQ section
- 7 common questions with expand/collapse
- CTA: "Get in touch" link

### 10. **AssessmentForm.jsx** ⭐ Form Component
- Lead capture form with 4 fields:
  - Full name
  - Phone number (with "We don't spam" badge)
  - Email address
  - Interested destination (dropdown)
- Submit button: "Request My Free Consultation"
- Form validation included

## Page Route

**URL:** `/career-counselling`

**File:** `app/career-counselling/page.js`

## Design System

### Colors Used
- Primary Blue: `#1765F5`
- Navy: `#0C337B`
- Teal: `#2DD4BF`
- Light backgrounds: `#F8FAFF`, `#EFF6FF`, `#E0EFFE`
- Text: `#0C337B` (headings), `#526B8C` (body)

### Typography
- Headings: Extrabold, tight tracking
- Body: 14-16px, medium weight
- Uppercase labels: 11px, bold, wide tracking

### Components
- Rounded corners: `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- Shadows: Subtle on cards, prominent on CTAs
- Hover states: Border color change, shadow increase, slight scale

## Usage

```jsx
import CounsellingHero from "@/components/StudentServices/CareerCounselling/CounsellingHero";
// ... import other components

export default function Page() {
  return (
    <main>
      <CounsellingHero />
      <GuidanceTrust />
      {/* ... other sections */}
    </main>
  );
}
```

## Notes

- All components are responsive (mobile-first)
- Interactive components use "use client" directive
- Forms include validation and prototype disclaimers
- Icons from `lucide-react`
- Smooth transitions and hover effects throughout
