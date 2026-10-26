
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* =========================================
   ORIGINAL UK CONTENT
   TITLES AND IMAGES UNCHANGED
   COLORS UPDATED TO BLUE THEME
========================================= */

const helpItems = [
  {
    number: "01",
    title: "Providing one-on-one personalised counselling",
    image: "/images/study-canada/customer-support.png",
    accent: "#1765F5",
    soft: "#EAF2FF",
  },
  {
    number: "02",
    title: "Profile and eligibility assessment",
    image: "/images/study-canada/verification-check.png",
    accent: "#0C337B",
    soft: "#E9F0FB",
  },
  {
    number: "03",
    title: "Explaining tuition fees, living costs, and intakes",
    image: "/images/study-canada/gold-coins.png",
    accent: "#397DDC",
    soft: "#EDF4FF",
  },
  {
    number: "04",
    title: "Guiding through admission and documentation",
    image: "/images/study-canada/education-graduation.png",
    accent: "#2459A7",
    soft: "#EAF1FB",
  },
  {
    number: "05",
    title: "SOP, LOR & documentation guidance",
    image: "/images/study-canada/documentation-approval.png",
    accent: "#5D93F8",
    soft: "#F0F5FF",
  },
];

/* =========================================
   CIRCULAR RING CONFIGURATION
========================================= */

const RADIUS = 38;

const ringNodes = helpItems.map((item, index) => {
  const angle = ((-90 + index * (360 / helpItems.length)) * Math.PI) / 180;

  return {
    ...item,
    left: (50 + RADIUS * Math.cos(angle)).toFixed(4),
    top: (50 + RADIUS * Math.sin(angle)).toFixed(4),
  };
});

/* =========================================
   MAIN COMPONENT
========================================= */

export default function HowUniversityYatraHelps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const total = helpItems.length;
  const item = helpItems[active];

  /* =====================================
     AUTOPLAY
  ===================================== */

  useEffect(() => {
    if (paused || reduceMotion || total <= 1) return;

    const timer = setInterval(() => {
      if (document.hidden) return;
      setActive((current) => (current + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [paused, reduceMotion, total]);

  /* =====================================
     PREVIOUS / NEXT
  ===================================== */

  const go = (step) => {
    setActive((current) => (current + step + total) % total);
  };

  return (
    <section aria-labelledby="uk-help-title" className="relative w-full overflow-hidden bg-[#F0F5FC] py-7 sm:py-9 lg:py-10">

      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">

        <div className="grid min-w-0 items-center gap-5 lg:grid-cols-[1fr_1fr] lg:gap-10">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="min-w-0">

            {/* ORIGINAL SECTION HEADING */}
            <h2 id="uk-help-title" className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[30px] lg:text-[34px]">
              How <span className="text-[#1765F5]">University Yatra™</span>{" "}
              Helps You
            </h2>

            {/* HEADING DECORATION */}
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[#1765F5]" />
              <span className="h-1 w-1 rounded-full bg-[#1765F5]/70" />
              <span className="h-1 w-1 rounded-full bg-[#1765F5]/40" />
              <span className="h-1 w-14 rounded-full bg-[#0C337B]" />
            </div>

            {/* =====================================
                ACTIVE HELP CARD
            ===================================== */}

            <div className="relative mt-5 overflow-hidden rounded-2xl border p-4 shadow-[0_8px_24px_rgba(12,51,123,0.08)] transition-colors duration-500 sm:p-5" style={{ backgroundColor: item.soft, borderColor: `${item.accent}33` }} aria-live="off">

              {/* DECORATIVE ARC */}
              <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-[210px] w-[210px] rounded-full border" style={{ borderColor: `${item.accent}26` }} />

              {/* BACKGROUND STEP NUMBER */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`number-${item.number}`}
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                  className="pointer-events-none absolute right-3 top-[24%] -translate-y-1/2 select-none text-[52px] font-black leading-none tracking-[-0.04em] sm:text-[62px]"
                  style={{ color: `${item.accent}26` }}
                >
                  {item.number}
                </motion.span>
              </AnimatePresence>

              {/* ACTIVE STEP TITLE AND IMAGE */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                  className="relative z-10 flex min-h-[95px] items-center gap-3 pr-8 sm:pr-14"
                >

                  {/* ORIGINAL IMAGE */}
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 bg-white shadow-[0_6px_14px_rgba(12,51,123,0.12)] sm:h-16 sm:w-16" style={{ borderColor: item.accent }}>
                    <span className="relative block h-10 w-10 sm:h-11 sm:w-11">
                      <Image src={item.image} alt="" fill sizes="44px" className="object-contain" />
                    </span>
                  </span>

                  {/* ORIGINAL UK TITLE */}
                  <div className="min-w-0">
                    <h3 className="text-[14px] font-bold leading-[1.45] sm:text-[16px]" style={{ color: item.accent }}>
                      {item.title}
                    </h3>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* =====================================
                  PROGRESS AND NAVIGATION
              ===================================== */}

              <div className="relative z-10 mt-4 flex items-center justify-between gap-3">

                {/* PROGRESS BARS */}
                <div className="flex flex-wrap gap-1.5" aria-label={`Step ${active + 1} of ${total}`}>
                  {helpItems.map((help, index) => (
                    <span
                      key={help.number}
                      aria-hidden="true"
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: index === active ? 20 : 6,
                        backgroundColor: index === active ? item.accent : `${item.accent}40`,
                      }}
                    />
                  ))}
                </div>

                {/* ARROW BUTTONS */}
                <div className="flex shrink-0 gap-2">

                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous step"
                    className="flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-[0_4px_10px_rgba(12,51,123,0.1)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5]"
                    style={{ borderColor: `${item.accent}55`, color: item.accent }}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next step"
                    className="flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-[0_4px_10px_rgba(12,51,123,0.1)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5]"
                    style={{ borderColor: `${item.accent}55`, color: item.accent }}
                  >
                    <ChevronRight size={16} />
                  </button>

                </div>
              </div>

            </div>
          </div>

          {/* =====================================
              RIGHT CIRCULAR RING
          ===================================== */}

          <div
            className="relative mx-auto aspect-square w-full max-w-[380px] lg:max-w-[420px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            onTouchCancel={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
            }}
          >

            {/* DASHED CIRCULAR ORBIT */}
            <svg viewBox="0 0 100 100" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
              <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="#A2C1FB" strokeWidth="0.5" strokeDasharray="1.6 1.6" />
            </svg>

            {/* =====================================
                CENTER ACTIVE STEP
            ===================================== */}

            <div className="absolute inset-[27%] flex flex-col items-center justify-center rounded-full border border-[#CFDEF5] bg-white p-2 text-center shadow-[0_10px_30px_rgba(12,51,123,0.12)]">

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.number}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                  className="flex w-full flex-col items-center"
                >

                  {/* ACTIVE IMAGE */}
                  <div className="relative h-[48px] w-[48px] sm:h-[72px] sm:w-[72px]">
                    <Image src={item.image} alt="" fill sizes="72px" className="object-contain" />
                  </div>

                  {/* STEP NUMBER */}
                  <span className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.1em] sm:text-[10px]" style={{ color: item.accent }}>
                    Step {item.number}
                  </span>

                  {/* ACTIVE TITLE */}
                  <span className="mt-0.5 line-clamp-3 text-[9px] font-bold leading-[1.25] text-[#0C337B] sm:text-[12px]">
                    {item.title}
                  </span>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* =====================================
                CLICKABLE RING NODES
            ===================================== */}

            {ringNodes.map((help, index) => {
              const isActive = index === active;

              return (
                <button
                  key={help.number}
                  type="button"
                  onClick={() => setActive(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setActive(index);
                  }}
                  aria-label={`Step ${help.number}: ${help.title}`}
                  aria-pressed={isActive}
                  style={{
                    left: `${help.left}%`,
                    top: `${help.top}%`,
                    backgroundColor: help.soft,
                    borderColor: isActive ? help.accent : "#FFFFFF",
                  }}
                  className={isActive
                    ? "absolute z-20 aspect-square w-[17%] -translate-x-1/2 -translate-y-1/2 scale-[1.18] rounded-full border-[3px] shadow-[0_10px_24px_rgba(12,51,123,0.22)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50"
                    : "absolute z-10 aspect-square w-[17%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] shadow-[0_6px_16px_rgba(12,51,123,0.12)] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50"
                  }
                >

                  {/* ORIGINAL STEP IMAGE */}
                  <span className="absolute inset-[16%]">
                    <Image src={help.image} alt="" fill sizes="64px" className="object-contain" />
                  </span>

                  {/* STEP NUMBER BADGE */}
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#F0F5FC] text-[10px] font-extrabold text-white" style={{ backgroundColor: help.accent }}>
                    {help.number}
                  </span>

                </button>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
