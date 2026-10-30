"use client";

import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  DollarSign,
  Languages,
  Target,
  ChevronRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const categories = [
  {
    id: "academics",
    label: "Academics",
    icon: GraduationCap,
    title: "Academic background",
    desc: "We review your grades, qualifications and subjects to understand which courses and admission requirements align with your academic record.",
    highlight: "A strong application starts with a realistic academic match.",
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    title: "Work & practical experience",
    desc: "Your professional background, internships, and relevant work experience help us identify programmes that value your real-world skills.",
    highlight: "Experience can strengthen your profile and open new pathways.",
  },
  {
    id: "gaps",
    label: "Study gaps",
    icon: Calendar,
    title: "Study gaps & career breaks",
    desc: "We address any gaps in your education or career timeline and help position them honestly within your application narrative.",
    highlight: "Gaps don't disqualify you — context and planning matter.",
  },
  {
    id: "budget",
    label: "Budget",
    icon: DollarSign,
    title: "Financial feasibility",
    desc: "Understanding your budget helps us recommend destinations and programmes where costs align with your financial capacity and scholarship options.",
    highlight: "Affordability should guide your shortlist from the start.",
  },
  {
    id: "language",
    label: "Language",
    icon: Languages,
    title: "Language proficiency",
    desc: "We assess your English language skills and recommend test preparation or alternative pathways if needed to meet admission standards.",
    highlight: "Language readiness is essential for academic success abroad.",
  },
  {
    id: "goals",
    label: "Goals",
    icon: Target,
    title: "Career & migration goals",
    desc: "Your long-term career plans and immigration preferences help shape which countries and courses offer the best post-study opportunities.",
    highlight: "Think beyond admission — plan for what comes after.",
  },
];

const pad = (n) => String(n + 1).padStart(2, "0");

/* ==========================================
   TAB (2-col on mobile, 3-col tablet, list on desktop)
========================================== */

function CategoryTab({ category, index, active, onActivate, onKeyDown }) {
  const Icon = category.icon;

  return (
    <button
      type="button"
      role="tab"
      id={`profile-tab-${index}`}
      aria-selected={active}
      aria-controls="profile-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(e) => {
        // hover switching only for mouse; touch uses tap
        if (e.pointerType === "mouse") onActivate(index);
      }}
      onKeyDown={onKeyDown}
      className={`relative flex w-full min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border px-2.5 py-2 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 lg:flex-1 lg:gap-3 lg:px-4 lg:py-2.5 ${
        active
          ? "border-[#B4CFFA] bg-[#EDF5FF] shadow-[0_5px_20px_rgba(23,101,245,0.07)]"
          : "border-[#E5EDF9] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"
      }`}
    >
      {active && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block"
        />
      )}

      <div className="flex min-w-0 items-center gap-2 lg:gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 lg:h-9 lg:w-9 ${
            active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"
          }`}
        >
          <Icon size={17} strokeWidth={2} />
        </span>

        <div className="min-w-0">
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#7390B4]">
            Factor {pad(index)}
          </span>

          <span
            className={`block truncate text-[12px] font-bold leading-[1.3] lg:text-[13px] ${
              active ? "text-[#1765F5]" : "text-[#0C337B]"
            }`}
          >
            {category.label}
          </span>
        </div>
      </div>

      <ChevronRight
        size={16}
        aria-hidden="true"
        className={`hidden shrink-0 transition-transform duration-300 lg:block ${
          active ? "translate-x-0.5 text-[#1765F5]" : "text-[#9AAEC6]"
        }`}
      />
    </button>
  );
}

/* ==========================================
   ACTIVE CARD
========================================== */

function ActiveCard({ activeIndex, onSelect, reduceMotion }) {
  const category = categories[activeIndex];
  const Icon = category.icon;

  return (
    <div
      id="profile-panel"
      role="tabpanel"
      aria-labelledby={`profile-tab-${activeIndex}`}
      className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-4 shadow-[0_12px_35px_rgba(12,51,123,0.07)] sm:p-5 lg:p-6"
    >
      {/* decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-[240px] w-[240px] rounded-full border border-[#1765F5]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-[220px] w-[220px] rounded-full bg-[#A2C1FB]/20 blur-[55px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-4 select-none text-[76px] font-black leading-none text-[#1765F5]/[0.07] sm:text-[92px]"
      >
        {pad(activeIndex)}
      </span>

      {/* animated content */}
      <motion.div
        key={category.id}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
        className="relative z-10 flex flex-1 flex-col"
      >
        {/* icon + label + title */}
        <div className="flex items-start gap-3 pr-14 sm:gap-4 sm:pr-20">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1765F5] text-white shadow-[0_10px_22px_rgba(23,101,245,0.3)] sm:h-14 sm:w-14">
            <Icon size={26} strokeWidth={2} />
          </span>

          <div className="min-w-0">
            <p className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#1765F5]">
              What we look at
            </p>

            <h3 className="text-[20px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[24px]">
              {category.title}
            </h3>
          </div>
        </div>

        {/* description */}
        <p className="mt-3 max-w-[640px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
          {category.desc}
        </p>

        {/* highlight */}
        <div className="mt-4 rounded-xl border border-[#C9DCFA] border-l-4 border-l-[#1765F5] bg-white/90 p-3.5 sm:p-4">
          <p className="text-[13px] font-semibold italic leading-[1.6] text-[#0C337B] sm:text-[14px]">
            {category.highlight}
          </p>
        </div>
      </motion.div>

      {/* clickable progress bars */}
      <div className="relative z-10 mt-4 flex items-center gap-1.5">
        {categories.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to ${item.label}`}
            aria-current={index === activeIndex ? "step" : undefined}
            className="group flex-1 py-1.5"
          >
            <span
              className={`block h-[3px] rounded-full transition-colors duration-300 ${
                index === activeIndex
                  ? "bg-[#1765F5]"
                  : "bg-[#B8CEEE] group-hover:bg-[#8FB2EC]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function ProfileReview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  /* keyboard navigation */
  const handleKeyDown = (e) => {
    const steps = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = steps[e.key];

    if (!step) return;

    e.preventDefault();

    const next = (activeIndex + step + categories.length) % categories.length;

    setActiveIndex(next);
    document.getElementById(`profile-tab-${next}`)?.focus();
  };

  return (
    <section
      aria-labelledby="profile-review-title"
      className="relative overflow-hidden bg-[#F8FAFF] py-7 sm:py-9"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* section header */}
        <div className="mx-auto mb-5 max-w-[760px] text-center sm:mb-6">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
            Personalised profile review
          </p>

          <h2
            id="profile-review-title"
            className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[30px] lg:text-[34px]"
          >
            One assessment.{" "}
            <span className="text-[#1765F5]">Your complete picture.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[700px] text-[12px] leading-[1.65] text-[#526B8C] sm:text-[14px]">
            Every student has a different starting point. We evaluate six
            important factors to identify what fits, what needs improvement and
            which pathways are worth exploring.
          </p>
        </div>

        {/* tabs + card
            mobile : tabs on top (2 columns), card below
            desktop: tabs left, card right */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-6">
          <div
            role="tablist"
            aria-label="Profile review factors"
            className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-col"
          >
            {categories.map((category, index) => (
              <CategoryTab
                key={category.id}
                category={category}
                index={index}
                active={activeIndex === index}
                onActivate={setActiveIndex}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>

          <ActiveCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />
        </div>
      </div>
    </section>
  );
}