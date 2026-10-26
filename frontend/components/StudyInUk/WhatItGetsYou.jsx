
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
  Globe2,
  Layers3,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* =========================================
   STUDY IN UK - ORIGINAL CONTENT
   ALL TITLES, DESCRIPTIONS, ICONS & COLORS
   ARE PRESERVED
========================================= */

const benefits = [
  {
    number: "01",
    title: "Globally Ranked Universities",
    description:
      "Choose from a strong network of UK universities with established academic reputations across a wide range of disciplines.",
    icon: GraduationCap,
    accent: "#063B72",
    soft: "#EAF1F8",
  },
  {
    number: "02",
    title: "Focused Degree Pathways",
    description:
      "Many UK programs are designed with a clear academic direction, helping students concentrate on their chosen field from the outset.",
    icon: BookOpen,
    accent: "#18B8B5",
    soft: "#E8F8F7",
  },
  {
    number: "03",
    title: "Shorter Study Options",
    description:
      "Selected UK degrees, particularly at postgraduate level, can offer shorter completion timelines than comparable programs in some destinations.",
    icon: Layers3,
    accent: "#0E7490",
    soft: "#EAF7FA",
  },
  {
    number: "04",
    title: "Wide Range of Specializations",
    description:
      "Explore programs across business, technology, healthcare, engineering, finance, arts, and other growing fields.",
    icon: Globe2,
    accent: "#7C3AED",
    soft: "#F3EEFF",
  },
  {
    number: "05",
    title: "Strong Industry Connections",
    description:
      "Many universities combine academic study with projects, placements, professional networks, and industry-facing learning opportunities.",
    icon: BriefcaseBusiness,
    accent: "#047857",
    soft: "#EAF8F2",
  },
  {
    number: "06",
    title: "Post-Study Work Options",
    description:
      "Eligible international graduates can explore available post-study work routes and gain professional experience in the UK, subject to applicable requirements.",
    icon: GraduationCap,
    accent: "#B45309",
    soft: "#FFF7E8",
  },
];

/* =========================================
   MAIN COMPONENT
   CANADA COMPACT TIMELINE DESIGN
========================================= */

export default function WhatItGetsYou() {
  const [activeStep, setActiveStep] = useState(0);
  const [manualStep, setManualStep] = useState(null);

  const sectionRef = useRef(null);
  const nodeRefs = useRef([]);
  const activeRef = useRef(0);

  const reduceMotion = useReducedMotion();

  /* =========================================
     SYNC ACTIVE STEP
  ========================================= */

  useEffect(() => {
    activeRef.current = activeStep;
  }, [activeStep]);

  /* =========================================
     AUTOMATIC SCROLL-BASED ACCORDION
  ========================================= */

  useEffect(() => {
    let frame = null;

    const updateActiveStep = () => {
      frame = null;

      if (manualStep !== null) return;

      const section = sectionRef.current;

      if (!section) return;

      const bounds = section.getBoundingClientRect();

      if (bounds.bottom < 0 || bounds.top > window.innerHeight) {
        return;
      }

      const targetY = window.innerHeight * 0.48;

      let closestIndex = 0;
      let closestDistance = Infinity;

      nodeRefs.current.forEach((node, index) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - targetY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (activeRef.current !== closestIndex) {
        activeRef.current = closestIndex;
        setActiveStep(closestIndex);
      }
    };

    const onScroll = () => {
      if (frame !== null) return;

      frame = window.requestAnimationFrame(updateActiveStep);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [manualStep]);

  /* =========================================
     MANUAL CARD CLICK
  ========================================= */

  const handleCardClick = (index) => {
    activeRef.current = index;
    setActiveStep(index);
    setManualStep(index);
  };

  /* =========================================
     RESUME AUTO MODE ON SCROLL
  ========================================= */

  useEffect(() => {
    if (manualStep === null) return;

    const resumeScrollMode = () => {
      setManualStep(null);
    };

    window.addEventListener("wheel", resumeScrollMode, { passive: true });
    window.addEventListener("touchmove", resumeScrollMode, { passive: true });
    window.addEventListener("scroll", resumeScrollMode, { passive: true });

    return () => {
      window.removeEventListener("wheel", resumeScrollMode);
      window.removeEventListener("touchmove", resumeScrollMode);
      window.removeEventListener("scroll", resumeScrollMode);
    };
  }, [manualStep]);

  /* =========================================
     RENDER
  ========================================= */

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">
      <div className="mx-auto w-full max-w-[1180px] px-3.5 sm:px-5 lg:px-6">

        {/* ORIGINAL UK HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-center sm:mb-6"
        >
          <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.03em] text-[#063B72] sm:text-[30px] md:text-[34px] lg:text-[38px]">
            Inside the{" "}
            <span className="text-[#1765f5]">UK Study</span>{" "}
            Experience
          </h2>
        </motion.div>

        {/* COMPACT TIMELINE */}
        <div className="relative mx-auto w-full max-w-[1100px]">

          {/* MULTICOLOR CENTER BAR */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-3 left-1/2 z-10 flex w-[44px] -translate-x-1/2 flex-col overflow-hidden rounded-[22px] shadow-[0_8px_22px_rgba(6,59,114,0.15)] sm:w-[60px] sm:rounded-[28px] md:w-[76px] md:rounded-[34px]">
            {benefits.map((item) => (
              <div key={item.number} className="min-h-0 flex-1" style={{ backgroundColor: item.accent }} />
            ))}
          </div>

          {/* TIMELINE ROWS */}
          <div className="relative z-20">
            {benefits.map((item, index) => {
              const isLeft = index % 2 === 1;
              const isActive = activeStep === index;

              return (
                <div key={item.number} className="relative grid min-h-[90px] grid-cols-[minmax(0,1fr)_54px_minmax(0,1fr)] items-center py-2 sm:min-h-[110px] sm:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] sm:py-2.5 md:min-h-[125px] md:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)] md:py-3">

                  {/* LEFT COLUMN */}
                  <div className="flex min-w-0 items-center justify-end">
                    {isLeft ? (
                      <TimelineAccordionCard item={item} index={index} active={isActive} onClick={() => handleCardClick(index)} reduceMotion={reduceMotion} side="left" />
                    ) : (
                      <StepLabel item={item} active={isActive} side="left" />
                    )}
                  </div>

                  {/* CENTER STEP NUMBER */}
                  <div ref={(element) => { nodeRefs.current[index] = element; }} className="relative z-20 flex items-center justify-center">
                    <motion.span
                      initial={false}
                      animate={{ scale: isActive ? 1.15 : 1, opacity: isActive ? 1 : 0.92 }}
                      transition={{ duration: reduceMotion ? 0 : 0.3 }}
                      className="flex h-[44px] w-[44px] items-center justify-center text-[15px] font-black tracking-tight text-white drop-shadow-sm sm:h-[60px] sm:w-[60px] sm:text-[20px] md:h-[76px] md:w-[76px] md:text-[26px]"
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="flex min-w-0 items-center justify-start">
                    {!isLeft ? (
                      <TimelineAccordionCard item={item} index={index} active={isActive} onClick={() => handleCardClick(index)} reduceMotion={reduceMotion} side="right" />
                    ) : (
                      <StepLabel item={item} active={isActive} side="right" />
                    )}
                  </div>

                  {/* ACTIVE ACCENT GLOW */}
                  {isActive && (
                    <motion.span
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[32px] sm:h-[100px] sm:w-[100px]"
                      style={{ backgroundColor: `${item.accent}12` }}
                    />
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SIDE STEP ICON LABEL
   SAME AS CANADA

   WHITE ICON + ORIGINAL ACCENT BACKGROUND
========================================= */

function StepLabel({ item, active, side }) {
  const isLeft = side === "left";
  const Icon = item.icon;

  return (
    <div className={`flex min-w-0 items-center gap-1.5 sm:gap-2.5 ${isLeft ? "justify-end" : "justify-start"}`}>

      {/* LEFT ARROW */}
      {!isLeft && (
        <ArrowLeft className="hidden h-4 w-4 shrink-0 text-[#A5B6C9] sm:block" />
      )}

      {/* ORIGINAL UK COLORED ICON */}
      <motion.span
        initial={false}
        animate={{
          backgroundColor: item.accent,
          borderColor: active ? "#FFFFFF" : item.accent,
          boxShadow: active ? `0 5px 18px ${item.accent}45` : `0 3px 10px ${item.accent}25`,
          scale: active ? 1.04 : 1,
        }}
        transition={{ duration: reduceDuration(active) }}
        className="inline-flex h-[36px] w-[54px] items-center justify-center overflow-hidden rounded-full border sm:h-[44px] sm:w-[66px] md:h-[48px] md:w-[74px]"
      >
        <Icon aria-hidden="true" strokeWidth={2.3} className="h-[18px] w-[18px] text-white sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]" />
      </motion.span>

      {/* RIGHT ARROW */}
      {isLeft && (
        <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#A5B6C9] sm:block" />
      )}

    </div>
  );
}

/* =========================================
   ACCORDION CARD
   CANADA DESIGN + ORIGINAL UK CONTENT
========================================= */

function TimelineAccordionCard({ item, index, active, onClick, reduceMotion, side }) {
  const isLeft = side === "left";
  const contentId = `uk-benefit-${index}`;

  return (
    <motion.div
      initial={false}
      animate={{
        borderColor: active ? item.accent : "#E2E8F0",
        boxShadow: active ? "0 8px 25px rgba(6,59,114,0.11)" : "0 4px 16px rgba(6,59,114,0.035)",
      }}
      transition={{ duration: reduceMotion ? 0 : 0.3 }}
      className={`relative w-full min-w-0 max-w-[470px] overflow-hidden rounded-[15px] border bg-white sm:rounded-[19px] md:rounded-[24px] ${isLeft ? "mr-1 sm:mr-2" : "ml-1 sm:ml-2"}`}
    >

      {/* CARD HEADER */}
      <button
        type="button"
        onClick={onClick}
        aria-expanded={active}
        aria-controls={contentId}
        className="flex w-full min-w-0 items-center justify-between gap-2 px-2.5 py-2.5 text-left sm:gap-3 sm:px-5 sm:py-3 md:px-6 md:py-3.5"
      >
        <div className="flex min-w-0 flex-1 items-center">
          <h3 className="min-w-0 text-[11px] font-bold leading-[1.35] text-[#063B72] sm:text-[13px] md:text-[15px] lg:text-[16px]">
            {item.title}
          </h3>
        </div>

        {/* COLORED PLUS/MINUS BUTTON */}
        <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full sm:h-[26px] sm:w-[26px] md:h-[30px] md:w-[30px]" style={{ backgroundColor: item.accent, color: "#FFFFFF" }}>
          {active ? (
            <Minus className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
          ) : (
            <Plus className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* ORIGINAL UK DESCRIPTION */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="description"
            id={contentId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: reduceMotion ? 0 : 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#EDF1F5] px-2.5 pb-3 pt-2.5 sm:px-5 sm:pb-3.5 sm:pt-3 md:px-6 md:pb-4">
              <p className="text-[9px] leading-[1.55] text-[#526477] sm:text-[12px] sm:leading-[1.6] md:text-[13px]">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

/* =========================================
   ANIMATION DURATION
========================================= */

function reduceDuration() {
  return 0.3;
}
