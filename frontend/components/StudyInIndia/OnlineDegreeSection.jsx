
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  GraduationCap,
  IndianRupee,
  BadgeCheck,
} from "lucide-react";

/* ==========================================
   STUDY IN INDIA - GUIDES
========================================== */

const guides = [
  {
    id: "01",
    title: "Online Degree Programs in India",
    shortTitle: "Online Degree",
    tag: "ONLINE DEGREE PROGRAMS",
    icon: GraduationCap,
    image: "/images/study-usa/3d/study-usa.png",
    href: "/study-in-india/online-degree-program",
    description:
      "Online degree programs allow students to complete eligible undergraduate or postgraduate studies through a digital learning platform. Depending on the university and course, learning may include recorded lectures, live sessions, study materials, assignments and online assessments.",
    points: [
      { text: "Recorded Lectures" },
      { text: "Digital Classrooms" },
      { text: "Online Exams" },
    ],
  },
  {
    id: "02",
    title: "Recognition and Validity",
    shortTitle: "Degree Recognition",
    tag: "RECOGNITION AND VALIDITY",
    icon: BadgeCheck,
    image: "/images/study-usa/3d/job-career.png",
    href: "/study-in-india/recognition-and-validity",
    description:
      "Pursue online degrees from NAAC A++ and A+ accredited universities, with relevant UGC-DEB recognition and applicable AICTE approvals. Explore programs from institutions featured in NIRF rankings, with WES-friendly options for eligible international credential evaluations, subject to university and program requirements.",
    points: [
      { text: "NAAC Accreditation" },
      { text: "UGC-DEB Recognition" },
      { text: "Global Credentials" },
    ],
  },
  {
    id: "03",
    title: "Cost of Studying Online in India",
    shortTitle: "Study Costs",
    tag: "ONLINE DEGREE FEES",
    icon: IndianRupee,
    image: "/images/study-usa/3d/cost-studying.png",
    href: "/study-in-india/cost-of-studying",
    description:
      "Online degree fees vary by qualification and university. Diploma and certificate programs typically cost ₹50,000–₹2,00,000 annually, bachelor's programs range from ₹1,00,000–₹4,00,000, and master's programs from ₹1,50,000–₹6,00,000 per annum.",
    points: [
      { text: "Diploma: ₹25,000 /semester" },
      { text: "Bachelor's: ₹50,000 /semester" },
      { text: "Master's: ₹75,000 /semester" },
    ],
  },
  {
    id: "04",
    title: "Learning & Examinations",
    shortTitle: "Learning & Exams",
    tag: "LEARNING AND EXAMINATIONS",
    icon: BookOpen,
    image: "/images/study-usa/3d/scholarship.png",
    href: "/study-in-india/learning-and-examinations",
    description:
      "Online degree programs combine live virtual classes with recorded lectures, allowing students to attend sessions in real time and revisit lessons for revision. Students receive digital study materials and complete assignments throughout the semester. Examinations are conducted online, with assessment schedules and formats determined by the university.",
    points: [
      { text: "Live Classes" },
      { text: "Recorded Lectures" },
      { text: "Online Examinations" },
    ],
  },
];

/* ==========================================
   GUIDE TAB
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
      id={`india-guide-tab-${index}`}
      aria-label={guide.title}
      aria-selected={active}
      aria-controls="india-guide-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          onActivate(index);
        }
      }}
      onKeyDown={onKeyDown}
      className={`group relative flex h-full w-full min-w-0 items-center gap-2 overflow-hidden rounded-xl border px-2.5 py-3 text-left transition-[background-color,border-color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 lg:gap-3 lg:px-3.5 ${active ? "border-[#B4CFFA] bg-[#EDF5FF] shadow-[0_5px_20px_rgba(23,101,245,0.07)]" : "border-[#E5EDF9] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"}`}
    >
      {/* ACTIVE INDICATOR */}
      {active && (
        <span aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block" />
      )}

      {/* ICON */}
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors lg:h-9 lg:w-9 ${active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}>
        <Icon size={17} strokeWidth={2} />
      </span>

      {/* TITLE */}
      <span className="min-w-0 flex-1">
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
      </span>

      <ChevronRight size={16} aria-hidden="true" className={`hidden shrink-0 transition-transform lg:block ${active ? "translate-x-0.5 text-[#1765F5]" : "text-[#9AAEC6]"}`} />
    </button>
  );
}

/* ==========================================
   GUIDE VISUAL - FIXED SIZE
========================================== */

function GuideVisual({ guide }) {
  const Icon = guide.icon;

  return (
    <div className="relative mx-auto flex h-[115px] w-full max-w-[340px] shrink-0 items-center justify-center sm:h-[130px] lg:h-[140px]">
      {guide.image ? (
        <div className="relative h-full w-full">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 639px) 280px, (max-width: 1023px) 340px, 340px"
            className="object-contain object-center"
          />
        </div>
      ) : (
        <div className="flex h-[110px] w-[110px] items-center justify-center">
          <Icon size={56} strokeWidth={1.35} className="text-[#1765F5]" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

/* ==========================================
   HIGHLIGHT POINTS
   SAME HEIGHT + 3 COLUMNS
========================================== */

function GuidePoints({ guide }) {
  return (
    <div className="grid w-full shrink-0 grid-cols-3 gap-1.5 sm:gap-2">
      {guide.points.map((point, index) => (
        <div
          key={`${guide.id}-${index}`}
          className="flex min-h-[76px] min-w-0 flex-col items-center justify-center gap-1.5 rounded-[11px] border border-[#DAE7FA] bg-white/85 px-1.5 py-2 text-center sm:min-h-[62px] sm:flex-row sm:gap-2 sm:px-2.5"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
            <Check size={14} strokeWidth={2.6} />
          </span>

          <div className="min-w-0">
            {point.label && (
              <span className="block text-[10px] font-bold leading-[1.3] text-[#0C337B] sm:text-[11px]">
                {point.label}
              </span>
            )}

            <p className="break-words text-[10px] font-semibold leading-[1.4] text-[#526B8C] sm:text-[11px]">
              {point.text}
            </p>
          </div>
        </div>
      ))}
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
  const Icon = guide.icon;

  return (
    <div
      id="india-guide-panel"
      role="tabpanel"
      aria-labelledby={`india-guide-tab-${activeIndex}`}
      className="relative order-2 flex h-[620px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-3.5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] min-[380px]:h-[590px] sm:h-[550px] sm:p-4 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[525px] lg:p-5"
    >
      {/* BACKGROUND DECORATIONS */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]" />

      {/* GUIDE NUMBER */}
      <span aria-hidden="true" className="pointer-events-none absolute right-4 top-10 select-none text-[78px] font-black leading-none text-[#1765F5]/[0.06]">
        {guide.id}
      </span>

      {/* TOP BADGE - FIXED */}
      <div className="relative z-10 shrink-0">
        <span className="inline-flex rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          India Study Guides
        </span>
      </div>

      {/* IMAGE - RESERVED HEIGHT */}
      <motion.div
        key={`visual-${guide.id}`}
        initial={reduceMotion ? false : { opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.3 }}
        className="relative z-10 mt-2 shrink-0"
      >
        <GuideVisual guide={guide} />
      </motion.div>

      {/* CONTENT AREA WITH STABLE HEIGHT */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">

        {/* DYNAMIC CONTENT - FIXED AVAILABLE SPACE */}
        <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:thin]">
          <motion.div
            key={`content-${guide.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="text-center"
          >
            {/* TAG */}
            <span className="inline-flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#1765F5]">
              <Icon size={13} className="shrink-0" />
              {guide.tag}
            </span>

            {/* HEADING */}
            <h3 className="mt-1 text-[19px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[22px]">
              {guide.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-2 max-w-[570px] text-[12px] leading-[1.65] text-[#526B8C]">
              {guide.description}
            </p>
          </motion.div>
        </div>

        {/* FIXED BOTTOM CONTENT */}
        <div className="mt-3 shrink-0">
          {/* 3 POINTS IN SAME ROW */}
          <GuidePoints guide={guide} />

          {/* READ MORE */}
          <Link
            href={guide.href}
            className="group mt-3 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#1765F5] px-5 py-2 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.2)] transition-all duration-300 hover:bg-[#0C337B] hover:shadow-[0_10px_25px_rgba(12,51,123,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5]"
          >
            Read More
            <ArrowUpRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* PROGRESS BARS - ALWAYS AT BOTTOM */}
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
            <span className={`block h-[3px] rounded-full transition-colors ${index === activeIndex ? "bg-[#1765F5]" : "bg-[#B8CEEE] group-hover:bg-[#8FB2EC]"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function StudyIndiaGuides() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  /* KEYBOARD NAVIGATION */
  const handleKeyDown = (event) => {
    const direction = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    }[event.key];

    if (!direction) return;

    event.preventDefault();

    const next =
      (activeIndex + direction + guides.length) %
      guides.length;

    setActiveIndex(next);

    document
      .getElementById(`india-guide-tab-${next}`)
      ?.focus();
  };

  return (
    <section
      aria-labelledby="india-guide-section-title"
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
            YOUR ONLINE DEGREE GUIDE
          </p>

          <h2
            id="india-guide-section-title"
            className="text-balance text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[27px] lg:text-[31px]"
          >
            Your Next Academic Chapter:{" "}
            <span className="text-[#1765F5]">
              India
            </span>
          </h2>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-5 lg:gap-y-3">

          {/* LEFT TABS */}
          <div
            role="tablist"
            aria-label="India online degree guides"
            className="order-1 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:order-none lg:col-start-1 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-4"
          >
            {guides.map((guide, index) => (
              <div key={guide.id} className="min-h-0 min-w-0">
                <GuideTab
                  guide={guide}
                  index={index}
                  active={index === activeIndex}
                  onActivate={setActiveIndex}
                  onKeyDown={handleKeyDown}
                />
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT CARD */}
          <ActiveGuideCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />

          {/* COUNSELLING CTA */}
          <div className="relative order-3 flex min-w-0 flex-col items-start justify-between gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-3.5 text-white sm:flex-row sm:items-center lg:order-none lg:col-start-1 lg:row-start-2">

            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            <div className="relative min-w-0">
              <h3 className="text-[14px] font-bold">
                Your India Study Journey Starts Here!
              </h3>

              <p className="mt-0.5 text-[11px] leading-[1.5] text-white/75">
                Get expert guidance on online degree options.
              </p>
            </div>

            <Link
              href="/career-counselling"
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
