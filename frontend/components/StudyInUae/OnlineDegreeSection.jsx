
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
   STUDY IN UAE - 5 GUIDES
   ORIGINAL CONTENT PRESERVED
========================================== */

const guides = [
  {
    id: "01",
    slug: "study-in-uae",
    tag: "STUDY IN UAE",
    title: "Study in the UAE",
    shortTitle: "Education Pathways",
    icon: GraduationCap,
    image: "/images/study-usa/3d/study-usa.png",
    description:
      "The UAE offers undergraduate and postgraduate programs through international branch campuses and local universities. Choose a bachelor's degree, master's program, or specialized qualification based on your academic background and career goals.",
    points: [
      {
        icon: GraduationCap,
        label: "Bachelor's",
        value: "Usually 3–4 years",
      },
      {
        icon: BookOpen,
        label: "Master's",
        value: "Usually 1–2 years",
      },
      {
        icon: Calendar,
        label: "Main intakes",
        value: "September, January, and selected May programs",
      },
    ],
  },
  {
    id: "02",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    title: "Cost of Studying in the UAE",
    shortTitle: "Tuition & Study Budget",
    icon: DollarSign,
    image: "/images/study-usa/3d/cost-studying.png",
    description:
      "Your budget depends on the university, program type, and emirate. Tuition fees vary between local institutions and international branch campuses, with living costs influenced by your choice of accommodation and lifestyle.",
    points: [
      {
        icon: Calculator,
        label: "Undergraduate tuition",
        value: "AED 40,000–90,000/year",
      },
      {
        icon: DollarSign,
        label: "Postgraduate tuition",
        value: "AED 50,000–120,000/year",
      },
      {
        icon: Home,
        label: "Living expenses",
        value: "AED 3,000–5,000/month depending on emirate and housing",
      },
    ],
    note:
      "Tuition and living costs are separate. Plan for both before applying.",
  },
  {
    id: "03",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    title: "Cost of Living & Culture in the UAE",
    shortTitle: "Living & Culture",
    icon: Home,
    image: "/images/study-usa/3d/living-cost.png",
    description:
      "Your living costs depend on the emirate, accommodation type, transport, and daily routine. Dubai and Abu Dhabi tend to be more expensive, while Sharjah offers more affordable options. The UAE offers a multicultural environment with modern amenities.",
    points: [
      {
        icon: Home,
        label: "Biggest variable",
        value: "Accommodation and emirate choice",
      },
      {
        icon: Wallet,
        label: "Plan for",
        value: "Food, transport, utilities, and visa renewals",
      },
      {
        icon: Globe2,
        label: "Culture",
        value: "Multicultural environment, modern lifestyle, and international community",
      },
    ],
  },
  {
    id: "04",
    slug: "scholarships",
    tag: "SCHOLARSHIPS & FUNDING",
    title: "Scholarships in the UAE",
    shortTitle: "Scholarships & Funding",
    icon: Award,
    image: "/images/study-usa/3d/scholarship.png",
    description:
      "UAE scholarships may be offered by universities based on academic merit, leadership, or specific program criteria. Availability varies by institution and nationality, so check eligibility requirements before applying.",
    points: [
      {
        icon: Award,
        label: "Undergraduate",
        value: "Merit-based and need-based awards",
      },
      {
        icon: Sparkles,
        label: "Master's",
        value: "University and program-specific funding",
      },
      {
        icon: GraduationCap,
        label: "PhD",
        value: "Research funding and assistantships",
      },
    ],
  },
  {
    id: "05",
    slug: "post-study-work-visa",
    tag: "POST-STUDY WORK VISA",
    title: "Post-Study Work Visa in the UAE",
    shortTitle: "Work Pathways",
    icon: Plane,
    image: "/images/study-usa/3d/post-study.png",
    description:
      "The UAE offers various visa options for graduates seeking employment. Employment visas are typically sponsored by employers, and graduates should explore opportunities during or after completing their studies.",
    points: [
      {
        icon: Clock,
        label: "Duration",
        value: "Depends on employer sponsorship",
      },
      {
        icon: FileCheck2,
        label: "Requirements",
        value: "Job offer and employer sponsorship",
      },
      {
        icon: BriefcaseBusiness,
        label: "Opportunities",
        value: "Tax-free income and growing job market",
      },
    ],
  },
];

/* ==========================================
   GUIDE TAB
   FIXED HEIGHT + STABLE HOVER
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
      id={`uae-guide-tab-${index}`}
      aria-label={guide.title}
      aria-selected={active}
      aria-controls="uae-guide-panel"
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
      {/* ACTIVE LEFT INDICATOR */}
      {active && (
        <span aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block" />
      )}

      {/* ICON + TITLE */}
      <div className="flex min-w-0 items-center gap-2 lg:gap-3">

        {/* ICON */}
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 lg:h-9 lg:w-9 ${active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}>
          <Icon size={17} strokeWidth={2} />
        </span>

        {/* NUMBER + TITLE */}
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
   GUIDE VISUAL
   FIXED IMAGE AREA
========================================== */

function GuideVisual({ activeIndex, reduceMotion }) {
  return (
    <div className="relative z-10 mx-auto mt-2 h-[110px] w-full max-w-[320px] shrink-0 sm:h-[125px] lg:h-[135px]">

      {/* ALL IMAGES REMAIN IN SAME POSITION */}
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
   GUIDE POINTS
   3 CARDS IN ONE ROW
   SAME HEIGHT ON EVERY TAB
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
            {/* POINT ICON */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
              <PointIcon size={15} strokeWidth={2} />
            </span>

            {/* POINT LABEL */}
            <span className="block w-full text-[10px] font-bold leading-[1.35] text-[#0C337B] [overflow-wrap:anywhere]">
              {point.label}
            </span>

            {/* POINT VALUE */}
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
      id="uae-guide-panel"
      role="tabpanel"
      aria-labelledby={`uae-guide-tab-${activeIndex}`}
      className="relative order-2 flex h-[640px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-3.5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] min-[380px]:h-[600px] sm:h-[565px] sm:p-4 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[530px] lg:p-5"
    >
      {/* BACKGROUND DECORATIONS */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10" />

      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]" />

      {/* BACKGROUND GUIDE NUMBER */}
      <span aria-hidden="true" className="pointer-events-none absolute right-4 top-10 select-none text-[78px] font-black leading-none text-[#1765F5]/[0.06]">
        {guide.id}
      </span>

      {/* TOP BADGE - FIXED POSITION */}
      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          <GraduationCap size={14} />
          UAE Study Guides
        </span>
      </div>

      {/* FIXED IMAGE HEIGHT */}
      <GuideVisual
        activeIndex={activeIndex}
        reduceMotion={reduceMotion}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col">

        {/* DESCRIPTION + OPTIONAL NOTE */}
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

            {/* HEADING */}
            <h3 className="mt-1 text-[20px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[23px]">
              {guide.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-2 max-w-[560px] text-[12px] leading-[1.65] text-[#526B8C]">
              {guide.description}
            </p>

            {/* UAE COST NOTE */}
            {guide.note && (
              <p className="mt-2.5 rounded-lg border border-[#DAE7FA] bg-white/75 px-3 py-1.5 text-center text-[11px] leading-[1.5] text-[#526B8C]">
                {guide.note}
              </p>
            )}
          </div>
        </div>

        {/* FIXED BOTTOM SECTION */}
        <div className="mt-3 shrink-0">

          {/* HIGHLIGHT POINTS */}
          <GuidePoints guide={guide} />

          {/* READ MORE BUTTON */}
          <Link
            href={`/study-in-uae/${guide.slug}`}
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

      {/* CLICKABLE PROGRESS BARS */}
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
      .getElementById(`uae-guide-tab-${next}`)
      ?.focus();
  };

  return (
    <section
      aria-labelledby="uae-guide-section-title"
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
            WHAT STUDYING IN THE UAE MEANS
          </p>

          <h2
            id="uae-guide-section-title"
            className="text-balance text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[27px] lg:text-[31px]"
          >
            Your Next Academic Chapter:{" "}
            <span className="text-[#1765F5]">
              UAE
            </span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-5 lg:gap-y-3">

          {/* LEFT GUIDE TABS */}
          <div
            role="tablist"
            aria-label="UAE study guides"
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

          {/* RIGHT ACTIVE CARD */}
          <ActiveGuideCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />

          {/* COUNSELLING CTA */}
          <div className="relative order-3 flex min-w-0 flex-col items-start justify-between gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-3.5 text-white sm:flex-row sm:items-center lg:order-none lg:col-start-1 lg:row-start-2">

            {/* DECORATIVE SHAPE */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            {/* CTA TEXT */}
            <div className="relative min-w-0">
              <h3 className="text-[14px] font-bold">
                Your UAE Dream Starts Here!
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
