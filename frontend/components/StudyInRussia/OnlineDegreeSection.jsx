
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  DollarSign,
  Calculator,
  Home,
  Award,
  Sparkles,
  Plane,
  Clock,
  BriefcaseBusiness,
  FileCheck2,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe2,
  Wallet,
} from "lucide-react";

/* ==========================================
   STUDY IN RUSSIA - ORIGINAL CONTENT
========================================== */

const guides = [
  {
    id: "01",
    slug: "study-in-russia",
    tag: "STUDY IN RUSSIA",
    title: "Study in Russia",
    shortTitle: "Education Pathways",
    icon: GraduationCap,
    image: "/images/study-usa/3d/study-usa.png",
    description:
      "Russia offers medical, engineering, and technical programs at universities across major cities. Explore degree options, program structures, and admission pathways based on your academic background and career interests.",
    points: [
      {
        icon: GraduationCap,
        label: "Bachelor's",
        value: "Usually 4 years",
      },
      {
        icon: BookOpen,
        label: "Master's",
        value: "Usually 2 years",
      },
      {
        icon: Calendar,
        label: "Main intakes",
        value: "September and February",
      },
    ],
  },
  {
    id: "02",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    title: "Cost of Studying in Russia",
    shortTitle: "Tuition & Study Budget",
    icon: DollarSign,
    image: "/images/study-usa/3d/cost-studying.png",
    description:
      "Your study budget covers tuition fees, accommodation, living expenses, and additional costs like health insurance and visa fees. Costs vary by city, university, and program.",
    points: [
      {
        icon: Calculator,
        label: "Undergraduate tuition",
        value: "RUB 120,000–350,000/year",
      },
      {
        icon: DollarSign,
        label: "Postgraduate tuition",
        value: "RUB 150,000–400,000/year",
      },
      {
        icon: Home,
        label: "Living costs",
        value: "RUB 15,000–30,000/month",
      },
    ],
    note:
      "Tuition and living costs are estimates. Plan your budget carefully before applying.",
  },
  {
    id: "03",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    title: "Cost of Living & Culture in Russia",
    shortTitle: "Living & Culture",
    icon: Home,
    image: "/images/study-usa/3d/living-cost.png",
    description:
      "Living costs depend on your city, accommodation type, and lifestyle. Major cities like Moscow and St. Petersburg have higher costs compared to smaller cities.",
    points: [
      {
        icon: Home,
        label: "Biggest variable",
        value: "Accommodation",
      },
      {
        icon: Wallet,
        label: "Plan for",
        value: "Food, transport, utilities, and entertainment",
      },
      {
        icon: Globe2,
        label: "Culture",
        value: "Rich history, diverse student communities",
      },
    ],
  },
  {
    id: "04",
    slug: "scholarships",
    tag: "SCHOLARSHIPS & FUNDING",
    title: "Scholarships in Russia for Indian Students",
    shortTitle: "Scholarships & Funding",
    icon: Award,
    image: "/images/study-usa/3d/scholarship.png",
    description:
      "Explore Russian government scholarships and university-specific funding opportunities. Eligibility criteria and application processes vary by program and scholarship type.",
    points: [
      {
        icon: Award,
        label: "Government scholarships",
        value: "Russian Government Scholarship Program",
      },
      {
        icon: Sparkles,
        label: "University awards",
        value: "Merit-based and need-based funding",
      },
      {
        icon: GraduationCap,
        label: "Application timing",
        value: "Check deadlines early",
      },
    ],
  },
  {
    id: "05",
    slug: "post-study-work-visa",
    tag: "POST-STUDY WORK",
    title: "Post-Study Work Options in Russia",
    shortTitle: "Work Pathways",
    icon: Plane,
    image: "/images/study-usa/3d/post-study.png",
    description:
      "International graduates can explore work opportunities in Russia through work permits and employment routes. Requirements and processes depend on visa type and employer sponsorship.",
    points: [
      {
        icon: Clock,
        label: "Work permit",
        value: "Employer-sponsored visa required",
      },
      {
        icon: FileCheck2,
        label: "Application",
        value: "Through employer and immigration",
      },
      {
        icon: BriefcaseBusiness,
        label: "Opportunities",
        value: "Tech, engineering, and medical sectors",
      },
    ],
  },
];

/* ==========================================
   GUIDE TAB - EQUAL HEIGHT
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
      id={`russia-guide-tab-${index}`}
      aria-label={guide.title}
      aria-selected={active}
      aria-controls="russia-guide-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          onActivate(index);
        }
      }}
      onKeyDown={onKeyDown}
      className={`group relative flex h-full w-full min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border px-2.5 py-3 text-left transition-[background-color,border-color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 lg:gap-3 lg:px-3.5 ${active ? "border-[#B4CFFA] bg-[#EDF5FF] shadow-[0_5px_20px_rgba(23,101,245,0.07)]" : "border-[#E5EDF9] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"}`}
    >
      {/* ACTIVE INDICATOR */}
      {active && (
        <span aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block" />
      )}

      {/* ICON + TITLE */}
      <div className="flex min-w-0 items-center gap-2 lg:gap-3">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 lg:h-9 lg:w-9 ${active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}>
          <Icon size={17} strokeWidth={2} />
        </span>

        <div className="min-w-0">
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#7390B4]">
            Guide {guide.id}
          </span>

          <span className={`block text-[11px] font-bold leading-[1.3] sm:text-[12px] lg:text-[13px] ${active ? "text-[#1765F5]" : "text-[#0C337B]"}`}>
            <span className="lg:hidden">
              {guide.shortTitle}
            </span>

            <span className="hidden lg:block">
              {guide.title}
            </span>
          </span>
        </div>
      </div>

      {/* DESKTOP ARROW */}
      <ChevronRight
        size={16}
        aria-hidden="true"
        className={`hidden shrink-0 transition-transform duration-300 lg:block ${active ? "translate-x-0.5 text-[#1765F5]" : "text-[#9AAEC6]"}`}
      />
    </button>
  );
}

/* ==========================================
   FIXED IMAGE CONTAINER
========================================== */

function GuideVisual({ activeIndex, reduceMotion }) {
  return (
    <div className="relative z-10 mx-auto mt-2 h-[115px] w-full max-w-[320px] shrink-0 sm:h-[130px] lg:h-[135px]">
      {guides.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={item.id}
            src={item.image}
            alt={isActive ? item.title : ""}
            aria-hidden={!isActive}
            fill
            priority={index === 0}
            sizes="(max-width: 1023px) 80vw, 320px"
            className={`object-contain object-center ${reduceMotion ? "" : "transition-[opacity,transform] duration-300"} ${isActive ? "scale-100 opacity-100" : "pointer-events-none scale-[0.98] opacity-0"}`}
          />
        );
      })}
    </div>
  );
}

/* ==========================================
   HIGHLIGHT POINTS
   ALWAYS THREE IN ONE ROW
========================================== */

function GuidePoints({ guide }) {
  return (
    <div className="grid h-[145px] w-full shrink-0 grid-cols-3 gap-1.5 min-[380px]:h-[135px] sm:h-[120px] sm:gap-2 lg:h-[125px]">
      {guide.points.map((point, index) => {
        const PointIcon = point.icon;

        return (
          <div
            key={`${guide.id}-${index}`}
            className="flex h-full min-h-0 min-w-0 flex-col items-center gap-1.5 overflow-x-hidden overflow-y-auto rounded-[11px] border border-[#DAE7FA] bg-white/85 px-1.5 py-2.5 text-center [scrollbar-width:thin] sm:px-2.5"
          >
            {/* ICON */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
              <PointIcon size={15} strokeWidth={2} />
            </span>

            {/* LABEL */}
            <span className="block w-full text-[10px] font-bold leading-[1.35] text-[#0C337B] [overflow-wrap:anywhere]">
              {point.label}
            </span>

            {/* VALUE */}
            <span className="block w-full text-[10px] leading-[1.4] text-[#526B8C] [overflow-wrap:anywhere] sm:text-[11px]">
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
   FIXED HEIGHT - NO LAYOUT SHIFT
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
      id="russia-guide-panel"
      role="tabpanel"
      aria-labelledby={`russia-guide-tab-${activeIndex}`}
      className="relative order-2 flex h-[640px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-3.5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] min-[380px]:h-[600px] sm:h-[565px] sm:p-4 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[550px] lg:p-5"
    >
      {/* DECORATIVE BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10" />

      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]" />

      {/* GUIDE NUMBER */}
      <span aria-hidden="true" className="pointer-events-none absolute right-4 top-10 select-none text-[78px] font-black leading-none text-[#1765F5]/[0.06]">
        {guide.id}
      </span>

      {/* TOP BADGE */}
      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          <GraduationCap size={14} />
          Russia Study Guides
        </span>
      </div>

      {/* IMAGE - SAME HEIGHT FOR EVERY TAB */}
      <GuideVisual
        activeIndex={activeIndex}
        reduceMotion={reduceMotion}
      />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col">

        {/* SCROLLABLE DESCRIPTION AREA */}
        <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain [scrollbar-width:thin]">
          <div className="text-center">

            {/* TAG */}
            <span className="inline-flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#1765F5]">
              <TagIcon size={13} className="shrink-0" />
              {guide.tag}
            </span>

            {/* HEADING */}
            <h3 className="mt-1 text-[20px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[23px]">
              {guide.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-2 max-w-[560px] text-[12px] leading-[1.65] text-[#526B8C]">
              {guide.description}
            </p>

            {/* OPTIONAL NOTE */}
            {guide.note && (
              <p className="mt-2.5 rounded-lg border border-[#DAE7FA] bg-white/75 px-3 py-1.5 text-[11px] leading-[1.5] text-[#526B8C]">
                {guide.note}
              </p>
            )}
          </div>
        </div>

        {/* FIXED BOTTOM CONTENT */}
        <div className="mt-3 shrink-0">

          {/* HIGHLIGHT CARDS */}
          <GuidePoints guide={guide} />

          {/* READ MORE BUTTON */}
          <Link
            href={`/study-in-russia/${guide.slug}`}
            className="group mt-3 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#1765F5] px-5 py-2 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.2)] transition-all duration-300 hover:bg-[#0C337B] hover:shadow-[0_10px_25px_rgba(12,51,123,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5]"
          >
            Read More

            <ArrowUpRight
              size={16}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
            className="group flex-1 py-1"
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

export default function OnlineDegreeSection() {
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
      .getElementById(`russia-guide-tab-${next}`)
      ?.focus();
  };

  return (
    <section
      aria-labelledby="russia-guide-section-title"
      className="relative w-full overflow-hidden bg-white py-5 sm:py-7"
    >
      <div className="mx-auto w-full max-w-[1250px] px-3 sm:px-5 lg:px-6">

        {/* SECTION HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-4 max-w-[720px] text-center"
        >
          <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
            WHAT STUDYING IN RUSSIA MEANS
          </p>

          <h2
            id="russia-guide-section-title"
            className="text-balance text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[27px] lg:text-[31px]"
          >
            Your Next Academic Chapter:{" "}
            <span className="text-[#1765F5]">
              Russia
            </span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-5 lg:gap-y-3">

          {/* LEFT GUIDE TABS */}
          <div
            role="tablist"
            aria-label="Russia study guides"
            className="order-1 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:order-none lg:col-start-1 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-5"
          >
            {guides.map((guide, index) => (
              <div key={guide.id} className="min-h-0 min-w-0">
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

          {/* FIXED HEIGHT RIGHT CARD */}
          <ActiveGuideCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />

          {/* COUNSELLING CTA */}
          <div className="relative order-3 flex min-w-0 flex-col items-start justify-between gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-3.5 text-white sm:flex-row sm:items-center lg:order-none lg:col-start-1 lg:row-start-2">

            {/* DECORATIVE SHAPE */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            {/* TEXT */}
            <div className="relative min-w-0">
              <h3 className="text-[14px] font-bold">
                Your Russia Dream Starts Here!
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
