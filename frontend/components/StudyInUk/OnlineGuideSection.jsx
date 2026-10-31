
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  DollarSign,
  Calculator,
  Home,
  Building2,
  Users,
  Award,
  Sparkles,
  Plane,
  Clock,
  Briefcase,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Calendar,
} from "lucide-react";

/* ==========================================
   UK GUIDE TOPICS - ORIGINAL 5 GUIDES
========================================== */

const guides = [
  {
    id: "01",
    slug: "study-in-the-uk",
    tag: "STUDY IN UK",
    title: "Study in the UK",
    shortTitle: "Education Pathways",
    icon: GraduationCap,
    image: "/images/study-usa/3d/study-usa.png",
    description:
      "Understand UK degree options, course requirements, and university applications before choosing your study pathway.",
    points: [
      {
        icon: GraduationCap,
        label: "Bachelor's",
        value: "Usually 3 years, or 4 in Scotland.",
      },
      {
        icon: BookOpen,
        label: "Master's",
        value: "Many full-time taught programmes take 1 year.",
      },
      {
        icon: Calendar,
        label: "Admissions",
        value: "Requirements vary by course and university.",
      },
    ],
  },
  {
    id: "02",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    title: "Cost of Studying in the UK",
    shortTitle: "Tuition & Study Budget",
    icon: DollarSign,
    image: "/images/study-usa/3d/cost-studying.png",
    description:
      "Your total study budget depends on tuition, course duration, accommodation, and location. Plan for living expenses and immigration costs alongside your university fees.",
    points: [
      {
        icon: DollarSign,
        label: "Tuition",
        value: "Varies by course and institution.",
      },
      {
        icon: Calculator,
        label: "Visa maintenance funds",
        value:
          "£13,761 in London or £10,539 outside London for the standard nine-month calculation.",
      },
      {
        icon: Home,
        label: "Additional costs",
        value:
          "Visa fee, IHS, travel, deposits, and study materials.",
      },
    ],
  },
  {
    id: "03",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    title: "Cost of Living & Culture in the UK",
    shortTitle: "Living & Student Life",
    icon: Home,
    image: "/images/study-usa/3d/living-cost.png",
    description:
      "Plan for everyday expenses while preparing for life in a diverse, multicultural student community.",
    points: [
      {
        icon: Calculator,
        label: "Monthly budget",
        value:
          "Around £900–£1,400 outside London; London can cost more.",
      },
      {
        icon: Building2,
        label: "Accommodation",
        value:
          "Halls, shared housing, and private studios offer different cost and privacy trade-offs.",
      },
      {
        icon: Users,
        label: "Student life",
        value:
          "Discover international food, cultural events, music, sport, and university societies.",
      },
    ],
  },
  {
    id: "04",
    slug: "scholarships-and-funding",
    tag: "SCHOLARSHIPS & FUNDING",
    title: "Scholarships in the UK for Indian Students",
    shortTitle: "Scholarships & Funding",
    icon: Award,
    image: "/images/study-usa/3d/scholarship.png",
    description:
      "Explore funding options that can help reduce the cost of a UK degree. Eligibility depends on your course, academic profile, and the scholarship provider.",
    points: [
      {
        icon: Award,
        label: "Major awards",
        value:
          "Chevening, GREAT, and eligible Commonwealth schemes.",
      },
      {
        icon: Sparkles,
        label: "University funding",
        value:
          "Merit-based and course-specific scholarships.",
      },
      {
        icon: BookOpen,
        label: "Application essentials",
        value:
          "Check eligibility, documents, coverage, and deadlines.",
      },
    ],
  },
  {
    id: "05",
    slug: "post-study-work-visa",
    tag: "POST-STUDY WORK VISA",
    title: "Post-Study Work Visa in the UK",
    shortTitle: "Graduate Visa & Work",
    icon: Plane,
    image: "/images/study-usa/3d/post-study.png",
    description:
      "Understand your options for working in the UK after graduation, from the Graduate visa to employer-sponsored employment.",
    points: [
      {
        icon: Clock,
        label: "Graduate visa",
        value:
          "2 years for applications by 31 December 2026; 18 months from 1 January 2027.",
      },
      {
        icon: GraduationCap,
        label: "Doctoral graduates",
        value:
          "Eligible PhD graduates can receive 3 years.",
      },
      {
        icon: Briefcase,
        label: "Long-term work",
        value:
          "A qualifying job and sponsorship may enable a Skilled Worker visa application.",
      },
    ],
  },
];

/* ==========================================
   LEFT GUIDE TAB
   EQUAL HEIGHT ON DESKTOP
========================================== */

function GuideTab({
  guide,
  index,
  active,
  onActivate,
  onKeyDown,
}) {
  const Icon = guide.icon;

  return (
    <button
      type="button"
      role="tab"
      id={`uk-guide-tab-${index}`}
      aria-label={guide.title}
      aria-selected={active}
      aria-controls="uk-guide-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          onActivate(index);
        }
      }}
      onKeyDown={onKeyDown}
      className={`group relative flex h-full min-h-[65px] w-full min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border px-2.5 py-2.5 text-left transition-[background-color,border-color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 lg:min-h-0 lg:gap-3 lg:px-3.5 lg:py-2.5 ${active ? "border-[#B4CFFA] bg-[#EDF5FF] shadow-[0_5px_20px_rgba(23,101,245,0.07)]" : "border-[#E5EDF9] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"}`}
    >
      {/* ACTIVE LEFT BORDER */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block"
        />
      )}

      {/* ICON AND TEXT */}
      <div className="flex min-w-0 items-center gap-2 lg:gap-3">

        {/* ICON */}
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 lg:h-9 lg:w-9 ${active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}>
          <Icon size={17} strokeWidth={2} />
        </span>

        {/* NUMBER AND TITLE */}
        <div className="min-w-0">

          <span className="block text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#7390B4]">
            Guide {guide.id}
          </span>

          <span className={`block text-[11px] font-bold leading-[1.3] sm:text-[12px] lg:text-[13px] lg:leading-[1.35] ${active ? "text-[#1765F5]" : "text-[#0C337B]"}`}>
            <span className="lg:hidden">
              {guide.shortTitle}
            </span>

            <span className="hidden lg:block">
              {guide.title}
            </span>
          </span>
        </div>
      </div>

      {/* ARROW */}
      <ChevronRight
        size={16}
        aria-hidden="true"
        className={`hidden shrink-0 transition-transform duration-300 lg:block ${active ? "translate-x-0.5 text-[#1765F5]" : "text-[#9AAEC6]"}`}
      />
    </button>
  );
}

/* ==========================================
   GUIDE VISUAL
   FIXED IMAGE AREA
   NO VERTICAL FLOATING
========================================== */

function GuideVisual({
  activeIndex,
  reduceMotion,
}) {
  return (
    <div className="relative z-10 mx-auto mt-2 h-[115px] w-full max-w-[320px] shrink-0 sm:h-[130px] lg:h-[140px]">

      {guides.map((guide, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={guide.id}
            src={guide.image}
            alt={isActive ? guide.title : ""}
            aria-hidden={!isActive}
            fill
            priority={index === 0}
            sizes="(max-width: 1023px) 80vw, 320px"
            className={`pointer-events-none object-contain object-center ${reduceMotion ? "" : "transition-opacity duration-300"} ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        );
      })}
    </div>
  );
}

/* ==========================================
   HIGHLIGHT POINTS
   ALWAYS 3 CARDS IN ONE ROW
   FIXED HEIGHT
========================================== */

function GuidePoints({ guide }) {
  return (
    <div className="grid h-[155px] w-full shrink-0 grid-cols-3 gap-1.5 min-[380px]:h-[145px] sm:h-[135px] sm:gap-2 lg:h-[140px]">
      {guide.points.map((point, index) => {
        const PointIcon = point.icon;

        return (
          <div
            key={`${guide.id}-${index}`}
            className="flex h-full min-h-0 min-w-0 flex-col items-center gap-1.5 overflow-x-hidden overflow-y-auto overscroll-contain rounded-[11px] border border-[#DAE7FA] bg-white/85 px-1.5 py-2.5 text-center [scrollbar-width:thin] sm:items-start sm:px-2.5 sm:text-left"
          >

            {/* POINT ICON */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
              <PointIcon size={15} strokeWidth={2} />
            </span>

            {/* LABEL */}
            <span className="block w-full text-[10px] font-bold leading-[1.35] text-[#0C337B] [overflow-wrap:anywhere]">
              {point.label}
            </span>

            {/* VALUE */}
            <span className="block w-full text-[10px] leading-[1.45] text-[#526B8C] [overflow-wrap:anywhere] sm:text-[11px]">
              {point.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ==========================================
   ACTIVE GUIDE CARD
   FIXED HEIGHT + STABLE FOOTER
========================================== */

function ActiveGuideCard({
  activeIndex,
  onSelect,
  reduceMotion,
}) {
  const guide = guides[activeIndex];
  const TagIcon = guide.icon;

  return (
    <div
      id="uk-guide-panel"
      role="tabpanel"
      aria-labelledby={`uk-guide-tab-${activeIndex}`}
      className="relative order-2 flex h-[630px] min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-3.5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] min-[380px]:h-[605px] sm:h-[550px] sm:p-4 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[560px] lg:p-5"
    >

      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]"
      />

      {/* LARGE GUIDE NUMBER */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-12 select-none text-[84px] font-black leading-none text-[#1765F5]/[0.06]"
      >
        {guide.id}
      </span>

      {/* TOP BADGE - FIXED */}
      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          <GraduationCap size={14} />
          UK Study Guides
        </span>
      </div>

      {/* IMAGE - FIXED */}
      <GuideVisual
        activeIndex={activeIndex}
        reduceMotion={reduceMotion}
      />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col">

        {/* TAG + HEADING + DESCRIPTION */}
        <div
          key={guide.id}
          className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain [scrollbar-width:thin]"
        >
          <div className="text-center">

            {/* TAG */}
            <span className="inline-flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#1765F5]">
              <TagIcon size={13} className="shrink-0" />
              {guide.tag}
            </span>

            {/* TITLE */}
            <h3 className="mt-1 text-[20px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[23px]">
              {guide.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-2 max-w-[440px] text-[12px] leading-[1.65] text-[#526B8C]">
              {guide.description}
            </p>
          </div>
        </div>

        {/* FIXED BOTTOM AREA */}
        <div className="mt-3 shrink-0">

          {/* 3 HIGHLIGHT CARDS */}
          <GuidePoints guide={guide} />

          {/* READ MORE */}
          <Link
            href={`/study-in-uk/${guide.slug}`}
            className="group mt-3 inline-flex h-[42px] w-full shrink-0 items-center justify-center gap-2 rounded-[11px] bg-[#1765F5] px-3 text-center text-[11px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.2)] transition-[background-color,box-shadow] duration-300 hover:bg-[#0C337B] hover:shadow-[0_10px_25px_rgba(12,51,123,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5] sm:text-[12px]"
          >
            Read More About {guide.shortTitle}

            <ArrowUpRight
              size={16}
              strokeWidth={2.2}
              className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      {/* PROGRESS BARS - FIXED BOTTOM */}
      <div className="relative z-10 mt-3 flex shrink-0 items-center gap-1.5">
        {guides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to guide ${item.id}: ${item.title}`}
            aria-current={index === activeIndex ? "step" : undefined}
            className="group flex-1 py-1.5"
          >
            <span className={`block h-[3px] rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-[#1765F5]" : "bg-[#B8CEEE] group-hover:bg-[#8FB2EC]"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function OnlineGuideSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  /* KEYBOARD NAVIGATION */
  const handleKeyDown = (event) => {
    const steps = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };

    const step = steps[event.key];

    if (!step) return;

    event.preventDefault();

    const next =
      (activeIndex + step + guides.length) %
      guides.length;

    setActiveIndex(next);

    document
      .getElementById(`uk-guide-tab-${next}`)
      ?.focus();
  };

  return (
    <section
      aria-labelledby="uk-guide-section-title"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 max-w-[720px] text-center"
        >
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
            What studying in the UK means
          </p>

          <h2
            id="uk-guide-section-title"
            className="text-balance text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[28px] lg:text-[32px]"
          >
            Your Next Academic Chapter:{" "}
            <span className="text-[#1765F5]">
              UK
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-[600px] text-[12px] leading-[1.6] text-[#526B8C] sm:text-[13px]">
            Guides to UK education, costs, scholarships and post-study work,
            all in one place.
          </p>
        </motion.div>

        {/* TABS + CARD + CTA */}
        <div className="grid min-w-0 gap-4 lg:h-[560px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-6">

          {/* LEFT TABS */}
          <div
            role="tablist"
            aria-label="UK study guides"
            className="order-1 grid min-w-0 grid-cols-2 auto-rows-fr gap-2 sm:grid-cols-3 lg:order-none lg:col-start-1 lg:row-start-1 lg:min-h-0 lg:grid-cols-1 lg:grid-rows-5 lg:auto-rows-auto"
          >
            {guides.map((guide, index) => (
              <div
                key={guide.id}
                className={index === guides.length - 1 ? "col-span-2 min-h-0 min-w-0 sm:col-span-1 lg:col-span-1" : "min-h-0 min-w-0"}
              >
                <GuideTab
                  guide={guide}
                  index={index}
                  active={activeIndex === index}
                  onActivate={setActiveIndex}
                  onKeyDown={handleKeyDown}
                />
              </div>
            ))}
          </div>

          {/* RIGHT ACTIVE CARD */}
          <ActiveGuideCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />

          {/* COUNSELLING CTA */}
          <div className="relative order-3 flex min-w-0 flex-col items-start justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-4 text-white sm:flex-row sm:items-center lg:order-none lg:col-start-1 lg:row-start-2">

            {/* DECORATION */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
            />

            {/* CTA CONTENT */}
            <div className="relative min-w-0">
              <h3 className="text-[14px] font-bold">
                Your UK Dream Starts Here!
              </h3>

              <p className="mt-0.5 text-[11px] leading-[1.5] text-white/75">
                Get Expert Guidance.
              </p>
            </div>

            {/* CTA BUTTON */}
            <Link
              href="/counselling"
              className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12px] font-bold text-[#0C337B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EDF5FF]"
            >
              Book Free Counselling

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
