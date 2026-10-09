
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
  Globe2,
  Microscope,
  Layers3,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* =========================================
   USA CONTENT - EXACTLY AS PROVIDED
========================================= */

const benefits = [
  {
    number: "01",
    title: "Post-Study Work Opportunities",
    description:
      "Explore eligible OPT and STEM OPT pathways for gaining professional experience after graduation.",
    icon: BriefcaseBusiness,
    accent: "#063B72",
    soft: "#EAF1F8",
  },
  {
    number: "02",
    title: "Globally Ranked Universities",
    description:
      "Choose from a wide range of highly ranked U.S. universities across diverse academic disciplines.",
    icon: GraduationCap,
    accent: "#18B8B5",
    soft: "#E8F8F7",
  },
  {
    number: "03",
    title: "Flexible Education System",
    description:
      "Explore majors, minors, electives, and academic pathways based on your university and program.",
    icon: BookOpen,
    accent: "#0E7490",
    soft: "#EAF7FA",
  },
  {
    number: "04",
    title: "Global Career Advantage",
    description:
      "Gain international academic and professional exposure relevant to globally connected careers.",
    icon: Globe2,
    accent: "#7C3AED",
    soft: "#F3EEFF",
  },
  {
    number: "05",
    title: "Strong Industry & Research Exposure",
    description:
      "Engage with research, innovation, projects, and industry-linked learning beyond the classroom.",
    icon: Microscope,
    accent: "#047857",
    soft: "#EAF8F2",
  },
  {
    number: "06",
    title: "Wide Range of Courses",
    description:
      "Choose from diverse programs and specializations across business, technology, healthcare, engineering, and more.",
    icon: Layers3,
    accent: "#B45309",
    soft: "#FFF7E8",
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function WhatItGetsYou() {
  const [activeStep, setActiveStep] = useState(0);
  const [manualStep, setManualStep] = useState(null);

  const sectionRef = useRef(null);
  const nodeRefs = useRef([]);
  const activeRef = useRef(0);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    activeRef.current = activeStep;
  }, [activeStep]);

  /* SCROLL-BASED ACTIVE ACCORDION */

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

  /* MANUAL CARD SELECTION */

  const handleCardClick = (index) => {
    activeRef.current = index;
    setActiveStep(index);
    setManualStep(index);
  };

  /* RETURN TO SCROLL MODE */

  useEffect(() => {
    if (manualStep === null) return;

    const resumeScrollMode = () => {
      setManualStep(null);
    };

    window.addEventListener("wheel", resumeScrollMode, { passive: true });
    window.addEventListener("touchmove", resumeScrollMode, { passive: true });

    return () => {
      window.removeEventListener("wheel", resumeScrollMode);
      window.removeEventListener("touchmove", resumeScrollMode);
    };
  }, [manualStep]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-3 sm:px-5 lg:px-6">

        {/* HEADING */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }} className="mb-9 text-center sm:mb-10 md:mb-12">
          <h2 className="text-[27px] font-bold leading-[1.15] tracking-[-0.03em] text-[#063B72] sm:text-[33px] md:text-[38px] lg:text-[42px]">
            Inside the <span className="text-[#18B8B5]">American Study</span> Experience
          </h2>
        </motion.div>

        {/* CANADA STYLE TIMELINE */}
        <div className="relative mx-auto w-full max-w-[1100px]">

          {/* MULTICOLOR CENTER BAR */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-5 left-1/2 z-10 flex w-[44px] -translate-x-1/2 flex-col overflow-hidden rounded-[22px] shadow-[0_8px_22px_rgba(6,59,114,0.15)] sm:w-[60px] sm:rounded-[28px] md:w-[76px] md:rounded-[34px]">
            {benefits.map((item) => (
              <div key={item.number} className="min-h-0 flex-1" style={{ backgroundColor: item.accent }} />
            ))}
          </div>

          {/* TIMELINE ITEMS */}
          <div className="relative z-20">
            {benefits.map((item, index) => {
              const isLeft = index % 2 === 1;
              const isActive = activeStep === index;

              return (
                <div key={item.number} className="relative grid min-h-[135px] grid-cols-[minmax(0,1fr)_54px_minmax(0,1fr)] items-center py-5 sm:min-h-[155px] sm:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] md:min-h-[175px] md:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)]">

                  {/* LEFT COLUMN */}
                  <div className="flex min-w-0 items-center justify-end">
                    {isLeft ? (
                      <TimelineAccordionCard
                        item={item}
                        index={index}
                        active={isActive}
                        onClick={() => handleCardClick(index)}
                        reduceMotion={reduceMotion}
                        side="left"
                      />
                    ) : (
                      <StepLabel item={item} active={isActive} side="left" />
                    )}
                  </div>

                  {/* CENTER STEP NUMBER */}
                  <div ref={(element) => { nodeRefs.current[index] = element; }} className="relative z-20 flex items-center justify-center">
                    <motion.span initial={false} animate={{ scale: isActive ? 1.12 : 1, opacity: isActive ? 1 : 0.9 }} transition={{ duration: 0.3 }} className="flex h-[44px] w-[44px] items-center justify-center text-[14px] font-extrabold text-white sm:h-[60px] sm:w-[60px] sm:text-[19px] md:h-[76px] md:w-[76px] md:text-[24px]">
                      {item.number}
                    </motion.span>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="flex min-w-0 items-center justify-start">
                    {!isLeft ? (
                      <TimelineAccordionCard
                        item={item}
                        index={index}
                        active={isActive}
                        onClick={() => handleCardClick(index)}
                        reduceMotion={reduceMotion}
                        side="right"
                      />
                    ) : (
                      <StepLabel item={item} active={isActive} side="right" />
                    )}
                  </div>

                  {/* CONNECTOR LINE */}
                  <span aria-hidden="true" className={`pointer-events-none absolute top-1/2 z-0 h-[2px] w-[10px] -translate-y-1/2 bg-[#CBD5E1] sm:w-[17px] md:w-[25px] ${isLeft ? "left-[calc(50%-37px)] -translate-x-full sm:left-[calc(50%-45px)] md:left-[calc(50%-61px)]" : "right-[calc(50%-37px)] translate-x-full sm:right-[calc(50%-45px)] md:right-[calc(50%-61px)]"}`} />

                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <motion.span initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[32px] sm:h-[100px] sm:w-[100px]" style={{ backgroundColor: `${item.accent}12` }} />
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
   SIDE STEP LABEL
========================================= */

function StepLabel({ item, active, side }) {
  const isLeft = side === "left";

  return (
    <div className={`flex min-w-0 items-center gap-1 sm:gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>

      {!isLeft && (
        <ArrowLeft className="hidden h-4 w-4 shrink-0 text-[#A5B6C9] sm:block" />
      )}

      <motion.span initial={false} animate={{ backgroundColor: active ? item.accent : item.soft, color: active ? "#FFFFFF" : item.accent, borderColor: active ? item.accent : `${item.accent}40` }} transition={{ duration: 0.3 }} className="inline-flex h-[30px] min-w-[37px] items-center justify-center rounded-full border px-2 text-[11px] font-bold shadow-sm sm:h-[36px] sm:min-w-[55px] sm:text-[13px] md:min-w-[62px] md:text-[15px]">
        {item.number}
      </motion.span>

      {isLeft && (
        <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#A5B6C9] sm:block" />
      )}

    </div>
  );
}

/* =========================================
   ACCORDION CARD
========================================= */

function TimelineAccordionCard({
  item,
  index,
  active,
  onClick,
  reduceMotion,
  side,
}) {
  const isLeft = side === "left";
  const contentId = `usa-benefit-${index}`;

  return (
    <motion.div initial={false} animate={{ borderColor: active ? item.accent : "#E2E8F0", boxShadow: active ? "0 8px 25px rgba(6,59,114,0.11)" : "0 4px 16px rgba(6,59,114,0.035)" }} transition={{ duration: 0.3 }} className={`relative w-full min-w-0 max-w-[470px] overflow-hidden rounded-[15px] border bg-white sm:rounded-[19px] md:rounded-[24px] ${isLeft ? "mr-1 sm:mr-2" : "ml-1 sm:ml-2"}`}>

      {/* CARD HEADER */}
      <button type="button" onClick={onClick} aria-expanded={active} aria-controls={contentId} className="flex w-full min-w-0 items-center justify-between gap-1.5 px-2.5 py-3 text-left sm:gap-3 sm:px-4 sm:py-4 md:px-5 md:py-5">

        <div className="flex min-w-0 flex-1 items-start gap-1.5 sm:gap-2.5">

          <span className="shrink-0 text-[11px] font-extrabold sm:text-[14px] md:text-[18px]" style={{ color: item.accent }}>
            {item.number}
          </span>

          <h3 className="min-w-0 text-[10px] font-bold leading-[1.35] text-[#063B72] sm:text-[13px] md:text-[17px] lg:text-[18px]">
            {item.title}
          </h3>

        </div>

        {/* PLUS / MINUS */}
        <span className="flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full sm:h-[29px] sm:w-[29px] md:h-[34px] md:w-[34px]" style={{ backgroundColor: active ? item.accent : item.soft, color: active ? "#FFFFFF" : item.accent }}>
          {active ? (
            <Minus className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={2.5} />
          ) : (
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={2.5} />
          )}
        </span>

      </button>

      {/* ACCORDION DESCRIPTION */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div key="description" id={contentId} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ height: { duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: reduceMotion ? 0 : 0.2 } }} className="overflow-hidden">

            <div className="border-t border-[#EDF1F5] px-2.5 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4 md:px-5">

              <p className="text-[9px] leading-[1.55] text-[#526477] sm:text-[12px] sm:leading-[1.6] md:text-[14px] md:leading-[1.7]">
                {item.description}
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
