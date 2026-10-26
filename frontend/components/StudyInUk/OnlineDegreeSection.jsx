
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Check,
  ChevronRight,
  ClipboardCheck,
} from "lucide-react";

/* ==========================================
   ORIGINAL STUDY IN UK CONTENT
   DESKTOP CONTENT UNCHANGED
========================================== */

const chooseYourStudyPathwayDesktop = [
  "Undergraduate, postgraduate & professional programs",
  "University & course selection based on your profile",
  "Specialized programs aligned with your career goals",
  "Guidance on eligibility & admission requirements",
];

const planJourneyToUKDesktop = [
  "University application & documentation support",
  "SOP & LOR guidance",
  "Student visa guidance",
  "Pre-departure support",
];

/* ==========================================
   ORIGINAL STUDY IN UK CONTENT
   MOBILE CONTENT UNCHANGED
========================================== */

const chooseYourStudyPathwayMobile = [
  "Undergraduate & postgraduate programs",
  "University & course shortlisting",
  "Career-focused specializations",
  "Eligibility & admission guidance",
];

const planJourneyToUKMobile = [
  "Application & documentation support",
  "SOP & LOR guidance",
  "Student visa guidance",
  "Pre-departure support",
];

/* ==========================================
   UK SECTION TABS
   CANADA DESIGN AND BLUE COLOR THEME
========================================== */

const sections = [
  {
    id: "01",
    title: "Your Next Academic Chapter: UK",
    icon: GraduationCap,
    image: "/images/study-india/online-degree-student.webp",
    imageAlt: "Student exploring academic opportunities in the UK",
    imageColor: "#1765F5",
    imagePosition: "object-center",
  },
  {
    id: "02",
    title: "Choose Your Study Pathway",
    icon: BookOpen,
    image: "/images/study-india/program-fit-student.webp",
    imageAlt: "Student exploring university and study pathway options in the UK",
    imageColor: "#0C337B",
    imagePosition: "object-center",
  },
  {
    id: "03",
    title: "Plan Your Journey to the UK",
    icon: ClipboardCheck,
    image: "/images/study-india/guidance-student.webp",
    imageAlt: "Student receiving guidance for studying in the UK",
    imageColor: "#5B9BFF",
    imagePosition: "object-top",
  },
];

/* ==========================================
   TAB COMPONENT

   MOBILE: ICON + NUMBER
   DESKTOP: ICON + NUMBER + TITLE
========================================== */

function SectionTab({ item, index, active, onActivate, onKeyDown }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      role="tab"
      id={`uk-degree-tab-${index}`}
      aria-label={item.title}
      aria-controls="uk-degree-panel"
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          onActivate(index);
        }
      }}
      onKeyDown={onKeyDown}
      className={`group relative flex w-full min-w-0 flex-col items-center justify-center gap-1 overflow-hidden rounded-xl border px-2 py-2.5 text-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 sm:flex-row sm:justify-between sm:gap-2 sm:px-3 sm:text-left lg:flex-1 lg:gap-3 lg:px-4 lg:py-3 ${active ? "border-[#1765F5] bg-[#1765F5] shadow-[0_10px_26px_rgba(23,101,245,0.28)]" : "border-[#E4ECF7] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"}`}
    >
      <div className="flex min-w-0 flex-col items-center gap-1 sm:flex-row sm:gap-2.5 lg:gap-3">

        {/* ICON */}
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 lg:h-10 lg:w-10 ${active ? "bg-white/20 text-white" : "bg-[#EDF5FF] text-[#1765F5]"}`}>
          <Icon size={18} strokeWidth={2} />
        </span>

        {/* NUMBER + TITLE */}
        <div className="min-w-0">

          <span className={`block text-[10px] font-extrabold uppercase tracking-[0.09em] ${active ? "text-white/80" : "text-[#7390B4]"}`}>
            {item.id}
          </span>

          <span className={`mt-0.5 hidden text-[11px] font-bold leading-[1.3] sm:block sm:text-[12px] lg:text-[14px] ${active ? "text-white" : "text-[#0C337B]"}`}>
            {item.title}
          </span>

        </div>
      </div>

      {/* DESKTOP ARROW */}
      <ChevronRight
        size={17}
        aria-hidden="true"
        className={`hidden shrink-0 transition-transform duration-300 lg:block ${active ? "translate-x-0.5 text-white" : "text-[#9AAEC6]"}`}
      />
    </button>
  );
}

/* ==========================================
   STUDENT IMAGE
   SAME ARCH DESIGN AS CANADA
========================================== */

function StudentVisual({ item }) {
  return (
    <div className="relative mx-auto h-[118px] w-[88px] lg:h-[190px] lg:w-[150px]">

      {/* DOT GRID */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #9CC0F5 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(circle at center, black 25%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 25%, transparent 72%)",
        }}
      />

      {/* SOFT CIRCLE */}
      <div
        aria-hidden="true"
        className="absolute -bottom-1 -left-3 h-[48%] w-[58%] rounded-full opacity-20"
        style={{ backgroundColor: item.imageColor }}
      />

      {/* OFFSET ARCH OUTLINE */}
      <div
        aria-hidden="true"
        className="absolute inset-y-[3%] left-[8%] right-[8%] translate-x-1.5 rounded-t-[999px] rounded-b-[16px] border-2 lg:translate-x-2.5"
        style={{ borderColor: `${item.imageColor}55` }}
      />

      {/* ORIGINAL UK IMAGE */}
      <div className="absolute inset-y-[5%] left-[8%] right-[8%] overflow-hidden rounded-t-[999px] rounded-b-[16px] border-[3px] border-white shadow-[0_12px_26px_rgba(12,51,123,0.18)] lg:border-4">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 1023px) 88px, 150px"
          className={`object-cover ${item.imagePosition}`}
        />
      </div>

      {/* ACCENT DOTS */}
      <span
        aria-hidden="true"
        className="absolute -right-1 top-[10%] h-3 w-3 rounded-full opacity-40"
        style={{ backgroundColor: item.imageColor }}
      />

      <span
        aria-hidden="true"
        className="absolute -left-1 top-[22%] h-2 w-2 rounded-full bg-[#1765F5] opacity-60"
      />
    </div>
  );
}

/* ==========================================
   ORIGINAL UK HEADINGS
   TEXT UNCHANGED
========================================== */

function ContentHeading({ index }) {
  if (index === 0) {
    return (
      <>
        Your Next Academic Chapter:{" "}
        <span className="text-[#1765F5]">
          UK
        </span>
      </>
    );
  }

  if (index === 1) {
    return (
      <>
        Choose Your{" "}
        <span className="text-[#1765F5]">
          Study Pathway
        </span>
      </>
    );
  }

  return (
    <>
      Plan Your Journey{" "}
      <span className="text-[#1765F5]">
        to the UK
      </span>
    </>
  );
}

/* ==========================================
   CHECKLIST ITEM
   SAME CANADA DESIGN
========================================== */

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-[12px] leading-[1.45] text-[#526B8C] sm:text-[13px]">

      <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1765F5] text-white">
        <Check size={12} strokeWidth={2.7} />
      </span>

      <span className="min-w-0 flex-1">
        {children}
      </span>

    </li>
  );
}

/* ==========================================
   ORIGINAL UK CONTENT
   BOTH DESKTOP AND MOBILE PRESERVED
========================================== */

function UKSectionContent({ index }) {
  /* SECTION 01 */
  if (index === 0) {
    return (
      <>
        {/* ORIGINAL DESKTOP DESCRIPTION */}
        <div className="hidden text-[13px] leading-[1.6] text-[#526B8C] md:block">
          <p>
            The UK offers a focused approach to higher education, with a wide range of universities, specialized programs, and internationally oriented learning environments. With many postgraduate programs designed around shorter study durations, students can choose pathways that fit both their academic interests and long-term plans.
          </p>
        </div>

        {/* ORIGINAL MOBILE DESCRIPTION */}
        <div className="text-[12.5px] leading-[1.55] text-[#526B8C] md:hidden">
          <p>
            Explore focused degree options, specialized courses, and internationally oriented universities across the UK, with guidance to help you find the right fit.
          </p>
        </div>
      </>
    );
  }

  /* SECTION 02 */
  if (index === 1) {
    return (
      <>
        {/* ORIGINAL DESKTOP LIST */}
        <ul className="hidden space-y-2 md:block">
          {chooseYourStudyPathwayDesktop.map((item) => (
            <CheckItem key={item}>
              {item}
            </CheckItem>
          ))}
        </ul>

        {/* ORIGINAL MOBILE LIST */}
        <ul className="space-y-2 md:hidden">
          {chooseYourStudyPathwayMobile.map((item) => (
            <CheckItem key={item}>
              {item}
            </CheckItem>
          ))}
        </ul>
      </>
    );
  }

  /* SECTION 03 */
  return (
    <>
      {/* ORIGINAL DESKTOP LIST */}
      <ul className="hidden space-y-2 md:block">
        {planJourneyToUKDesktop.map((item) => (
          <CheckItem key={item}>
            {item}
          </CheckItem>
        ))}
      </ul>

      {/* ORIGINAL MOBILE LIST */}
      <ul className="space-y-2 md:hidden">
        {planJourneyToUKMobile.map((item) => (
          <CheckItem key={item}>
            {item}
          </CheckItem>
        ))}
      </ul>
    </>
  );
}

/* ==========================================
   RIGHT ACTIVE CARD
   EXACT CANADA DESIGN STRUCTURE
========================================== */

function ActiveContentCard({ activeIndex, onSelect, reduceMotion }) {
  const item = sections[activeIndex];

  return (
    <div
      id="uk-degree-panel"
      role="tabpanel"
      aria-labelledby={`uk-degree-tab-${activeIndex}`}
      className="relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-4 shadow-[0_12px_35px_rgba(12,51,123,0.07)] sm:p-5"
    >

      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-[220px] w-[220px] rounded-full border border-[#1765F5]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-[200px] w-[200px] rounded-full bg-[#A2C1FB]/20 blur-[50px]"
      />

      {/* LARGE BACKGROUND NUMBER */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-3 select-none text-[64px] font-black leading-none text-[#1765F5]/[0.07] sm:text-[76px]"
      >
        {item.id}
      </span>

      {/* ANIMATED ACTIVE CONTENT */}
      <motion.div
        key={item.id}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25 }}
        className="relative z-10 grid grid-cols-[88px_1fr] items-center gap-x-3 gap-y-3 lg:min-h-[250px] lg:grid-cols-[150px_1fr] lg:gap-x-6"
      >

        {/* ORIGINAL UK IMAGE */}
        <div className="lg:row-span-2 lg:self-center">
          <StudentVisual item={item} />
        </div>

        {/* ORIGINAL UK HEADING */}
        <h3 className="min-w-0 text-[19px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[22px] lg:self-end lg:text-[24px]">
          <ContentHeading index={activeIndex} />
        </h3>

        {/* ORIGINAL UK PARAGRAPH / CHECKLIST */}
        <div className="col-span-2 min-w-0 rounded-[13px] border border-[#DAE7FA] bg-white/90 p-3 sm:p-3.5 lg:col-span-1 lg:self-start">
          <UKSectionContent index={activeIndex} />
        </div>

      </motion.div>

      {/* CLICKABLE PROGRESS BARS */}
      <div className="relative z-10 mt-3 flex items-center gap-1.5">
        {sections.map((section, index) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to section ${section.id}: ${section.title}`}
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
   MAIN STUDY IN UK SECTION
   SAME LAYOUT AND COLORS AS CANADA
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

    const next = (activeIndex + step + sections.length) % sections.length;

    setActiveIndex(next);

    document.getElementById(`uk-degree-tab-${next}`)?.focus();
  };

  return (
    <section
      aria-labelledby="uk-degree-section-title"
      className="relative w-full overflow-hidden bg-white py-6 sm:py-8"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">

        {/* ORIGINAL UK SECTION HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-4 max-w-[760px] text-center sm:mb-5"
        >

          <span className="mb-1.5 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
            WHAT DOES STUDYING IN THE UK MEAN?
          </span>

          <h2
            id="uk-degree-section-title"
            className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[27px] md:text-[32px]"
          >
            Designed for{" "}
            <span className="text-[#1765F5]">
              Your Future
            </span>
          </h2>

        </motion.div>

        {/* TABS + ACTIVE CARD */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:items-stretch lg:gap-5">

          {/* NAVIGATION TABS */}
          <div
            role="tablist"
            aria-label="Study in UK academic guidance"
            className="grid min-w-0 grid-cols-3 gap-2 lg:flex lg:flex-col"
          >
            {sections.map((item, index) => (
              <SectionTab
                key={item.id}
                item={item}
                index={index}
                active={activeIndex === index}
                onActivate={setActiveIndex}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>

          {/* ACTIVE CARD */}
          <ActiveContentCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />

        </div>

      </div>
    </section>
  );
}
