
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
   STUDY IN CANADA - 5 GUIDES
========================================== */

const guides = [
  {
    id: "01",
    slug: "study-in-canada",
    tag: "STUDY IN CANADA",
    title: "Study in Canada",
    shortTitle: "Education Pathways",
    icon: GraduationCap,
    image: "/images/study-usa/3d/study-usa.png",
    description:
      "Canada offers university degrees and career-focused college programs for international students. Choose a bachelor's degree, master's program, or specialised postgraduate qualification based on your previous education and goals.",
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
    title: "Cost of Studying in Canada",
    shortTitle: "Tuition & Study Budget",
    icon: DollarSign,
    image: "/images/study-canada/gold-coins.png",
    description:
      "Your budget depends on your qualification, program, and institution. The latest national averages put international tuition at CAD 24,028/year for graduate students and CAD 41,746/year for undergraduates.",
    points: [
      {
        icon: Home,
        label: "Living-funds threshold",
        value:
          "CAD 23,448 for a single applicant outside Quebec applying from September 1, 2026.",
      },
      {
        icon: Wallet,
        label: "Other costs",
        value:
          "Insurance, books, deposits, travel, and study-permit fees.",
      },
    ],
  },
  {
    id: "03",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    title: "Cost of Living & Culture in Canada",
    shortTitle: "Living & Culture",
    icon: Home,
    image: "/images/3d/living-cost.webp",
    description:
      "Your living costs depend on your city, accommodation, commute, and daily routine. Beyond budgeting, prepare for Canada's diverse communities, independent student life, and regional weather differences.",
    points: [
      {
        icon: Home,
        label: "Biggest variable",
        value: "Accommodation",
      },
      {
        icon: Wallet,
        label: "Plan for",
        value: "Food, transport, utilities, and winter clothing",
      },
      {
        icon: Globe2,
        label: "Culture",
        value:
          "Campus life, multicultural communities, and regional differences",
      },
    ],
  },
  {
    id: "04",
    slug: "scholarships",
    tag: "SCHOLARSHIPS & FUNDING",
    title: "Scholarships in Canada for Indian Students",
    shortTitle: "Scholarships & Funding",
    icon: Award,
    image: "/images/study-canada/education-graduation.png",
    description:
      "Canadian scholarships can reward academic performance, leadership, financial need, or research potential. Opportunities differ by degree level, so check eligibility and funding terms before applying.",
    points: [
      {
        icon: Award,
        label: "Undergraduate",
        value: "Entrance and leadership awards",
      },
      {
        icon: Sparkles,
        label: "Master's",
        value: "University and program-specific funding",
      },
      {
        icon: GraduationCap,
        label: "PhD",
        value: "Research scholarships and fellowships",
      },
    ],
  },
  {
    id: "05",
    slug: "post-study-work-visa",
    tag: "POST-STUDY WORK VISA",
    title: "Post-Study Work Visa in Canada",
    shortTitle: "PGWP & Work Pathways",
    icon: Plane,
    image: "/images/study-canada/documentation-approval.png",
    description:
      "Canada's Post-Graduation Work Permit (PGWP) lets eligible international graduates gain Canadian work experience after completing their studies. Eligibility depends on your institution, program, and applicable rules.",
    points: [
      {
        icon: Clock,
        label: "Master's",
        value: "Potentially up to 3 years",
      },
      {
        icon: FileCheck2,
        label: "Application window",
        value: "Up to 180 days after completion",
      },
      {
        icon: BriefcaseBusiness,
        label: "PR pathway",
        value: "Possible, not guaranteed",
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
      id={`canada-guide-tab-${index}`}
      aria-label={guide.title}
      aria-selected={active}
      aria-controls="canada-guide-panel"
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

      {/* TAB CONTENT */}
      <div className="flex min-w-0 items-center gap-2 lg:gap-3">

        {/* ICON */}
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 lg:h-9 lg:w-9 ${active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}>
          <Icon size={17} strokeWidth={2} />
        </span>

        {/* TITLE */}
        <div className="min-w-0">
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
      <ChevronRight size={16} aria-hidden="true" className={`hidden shrink-0 transition-transform duration-300 lg:block ${active ? "translate-x-0.5 text-[#1765F5]" : "text-[#9AAEC6]"}`} />
    </button>
  );
}

/* ==========================================
   GUIDE VISUAL - FIXED IMAGE HEIGHT
========================================== */

function GuideVisual({ activeIndex, reduceMotion }) {
  return (
    <div className="relative mx-auto h-[115px] w-full max-w-[340px] shrink-0 sm:h-[130px] lg:h-[140px]">

      {/* ALL IMAGES KEEP SAME CONTAINER */}
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
            sizes="(max-width: 639px) 280px, (max-width: 1023px) 340px, 340px"
            className={`object-contain object-center transition-[opacity,transform] duration-300 ${isActive ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
          />
        );
      })}
    </div>
  );
}

/* ==========================================
   GUIDE POINTS - STABLE HEIGHT
========================================== */

function GuidePoints({ guide }) {
  return (
    <div className={`grid h-[130px] w-full shrink-0 gap-1.5 sm:h-[115px] sm:gap-2 lg:h-[125px] ${guide.points.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {guide.points.map((point) => {
        const PointIcon = point.icon;

        return (
          <div
            key={point.label}
            className="flex h-full min-h-0 min-w-0 flex-col items-center gap-1.5 overflow-y-auto rounded-[11px] border border-[#DAE7FA] bg-white/85 px-1.5 py-2.5 text-center [scrollbar-width:thin] sm:px-2.5"
          >
            {/* POINT ICON */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
              <PointIcon size={15} strokeWidth={2} />
            </span>

            {/* POINT LABEL */}
            <span className="block w-full break-words text-[10px] font-bold leading-[1.35] text-[#0C337B]">
              {point.label}
            </span>

            {/* POINT VALUE */}
            <span className="block w-full break-words text-[10px] leading-[1.45] text-[#526B8C] sm:text-[11px]">
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
      id="canada-guide-panel"
      role="tabpanel"
      aria-labelledby={`canada-guide-tab-${activeIndex}`}
      className="relative order-2 flex h-[650px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-3.5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] sm:h-[570px] sm:p-4 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[540px] lg:p-5"
    >
      {/* BACKGROUND DECORATIONS */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10" />

      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]" />

      {/* BACKGROUND GUIDE NUMBER */}
      <span aria-hidden="true" className="pointer-events-none absolute right-4 top-10 select-none text-[78px] font-black leading-none text-[#1765F5]/[0.06]">
        {guide.id}
      </span>

      {/* TOP BADGE - FIXED */}
      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          <GraduationCap size={14} />
          Canada Study Guides
        </span>
      </div>

      {/* FIXED IMAGE AREA */}
      <div className="relative z-10 mt-2 shrink-0">
        <GuideVisual
          activeIndex={activeIndex}
          reduceMotion={reduceMotion}
        />
      </div>

      {/* CONTENT AREA */}
      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col">

        {/* HEADING + DESCRIPTION AREA */}
        <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:thin]">

          <motion.div
            key={`content-${guide.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
            className="text-center"
          >

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
              <p className="mt-2.5 rounded-lg border border-[#DAE7FA] bg-white/75 px-3 py-1.5 text-center text-[11px] leading-[1.5] text-[#526B8C]">
                {guide.note}
              </p>
            )}
          </motion.div>
        </div>

        {/* FIXED BOTTOM CONTENT */}
        <div className="mt-3 shrink-0">

          {/* HIGHLIGHT POINTS */}
          <GuidePoints guide={guide} />

          {/* READ MORE BUTTON */}
          <Link
            href={`/study-in-canada/${guide.slug}`}
            className="group mt-3 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#1765F5] px-5 py-2 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.2)] transition-all duration-300 hover:bg-[#0C337B] hover:shadow-[0_10px_25px_rgba(12,51,123,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5]"
          >
            Read More

            <ArrowUpRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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

export default function SupportSystem() {
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
      .getElementById(`canada-guide-tab-${next}`)
      ?.focus();
  };

  return (
    <section
      aria-labelledby="canada-guide-section-title"
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
            WHAT STUDYING IN CANADA MEANS
          </p>

          <h2
            id="canada-guide-section-title"
            className="text-balance text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[27px] lg:text-[31px]"
          >
            Your Next Academic Chapter:{" "}
            <span className="text-[#1765F5]">
              Canada
            </span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-5 lg:gap-y-3">

          {/* LEFT TABS */}
          <div
            role="tablist"
            aria-label="Canada study guides"
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
                Your Canada Dream Starts Here!
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

              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
