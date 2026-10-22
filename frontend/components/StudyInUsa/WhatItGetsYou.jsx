
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Globe2,
  GraduationCap,
  BookOpen,
  Award,
  BriefcaseBusiness,
  UserRoundCheck,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* =========================================
   USA CONTENT - DESKTOP & MOBILE
========================================= */

const benefits = [
  {
    number: "01",
    title: "Globally Ranked Universities",
    icon: Globe2,
    desktopDescription:
      "The USA is home to universities recognised for academic excellence, specialised programs, and research. Students can compare institutions based on course offerings, faculty, facilities, location, and career goals.",
    mobileDescription:
      "Study at US universities recognised worldwide for their academic programs, research contributions, and achievements across diverse fields.",
    accent: "#0C337B",
    soft: "#E8F0FE",
  },
  {
    number: "02",
    title: "Flexible Education System",
    icon: GraduationCap,
    desktopDescription:
      "Many US undergraduate programs allow students to combine a major with minors, electives, and courses from other disciplines. This gives students greater flexibility to shape their academic pathway.",
    mobileDescription:
      "Combine majors, minors, and electives at many universities to shape a degree around your interests.",
    accent: "#1765F5",
    soft: "#E8F0FE",
  },
  {
    number: "03",
    title: "Global Career Advantage",
    icon: BookOpen,
    desktopDescription:
      "Studying in the USA brings students into an internationally diverse academic environment. Classroom collaboration, presentations, internships where eligible, and practical projects can help develop skills valued across industries.",
    mobileDescription:
      "Build practical skills through presentations, group projects, and classroom discussions in a diverse academic environment.",
    accent: "#5D93F8",
    soft: "#E8F0FE",
  },
  {
    number: "04",
    title: "Strong Industry & Research Exposure",
    icon: Award,
    desktopDescription:
      "US universities offer opportunities to participate in faculty-led research, laboratory work, innovation projects, and industry collaborations. Availability depends on the university, department, and program.",
    mobileDescription:
      "Work on research projects, use specialised laboratories, or engage with industry through opportunities offered by your university.",
    accent: "#7C3AED",
    soft: "#F3EEFF",
  },
  {
    number: "05",
    title: "Post-Study Work Opportunities",
    icon: BriefcaseBusiness,
    desktopDescription:
      "The USA offers eligible international graduates up to 12 months of Optional Practical Training (OPT), with a possible 24-month STEM extension for qualifying degrees and students.",
    mobileDescription:
      "Eligible graduates can work in their field through OPT, with an additional 24-month extension possible for qualifying STEM degrees.",
    accent: "#047857",
    soft: "#EAF8F2",
  },
  {
    number: "06",
    title: "Wide Range of Courses",
    icon: UserRoundCheck,
    desktopDescription:
      "From Computer Science, Engineering, and Business Administration to Public Health, Economics, and Film Studies, US universities offer undergraduate and graduate programs across a broad range of disciplines.",
    mobileDescription:
      "From Computer Science and Business Administration to Public Health and Film Studies, US universities offer diverse degree options.",
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

  /* =========================================
     SCROLL-BASED ACTIVE ACCORDION
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
     MANUAL CARD SELECTION
  ========================================= */

  const handleCardClick = (index) => {
    activeRef.current = index;
    setActiveStep(index);
    setManualStep(index);
  };

  /* =========================================
     RETURN TO SCROLL MODE
  ========================================= */

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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">
      <div className="mx-auto w-full max-w-[1180px] px-3.5 sm:px-5 lg:px-6">

        {/* SECTION HEADING */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }} className="mb-4 text-center sm:mb-6">

          <span className="mb-1.5 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
            WHY STUDY IN USA?
          </span>

          <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.03em] text-[#0C337B] sm:text-[30px] md:text-[34px] lg:text-[38px]">
            Inside the{" "}
            <span className="text-[#1765F5]">
              American Study
            </span>{" "}
            Experience
          </h2>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative mx-auto w-full max-w-[1100px]">

          {/* MULTICOLOR CENTER BAR */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-3 left-1/2 z-10 flex w-[44px] -translate-x-1/2 flex-col overflow-hidden rounded-[22px] shadow-[0_8px_22px_rgba(6,59,114,0.15)] sm:w-[60px] sm:rounded-[28px] md:w-[76px] md:rounded-[34px]">
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
                <div key={item.number} className="relative grid min-h-[90px] grid-cols-[minmax(0,1fr)_54px_minmax(0,1fr)] items-center py-2 sm:min-h-[110px] sm:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] sm:py-2.5 md:min-h-[125px] md:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)] md:py-3">

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
                    <motion.span initial={false} animate={{ scale: isActive ? 1.15 : 1, opacity: isActive ? 1 : 0.92 }} transition={{ duration: 0.3 }} className="flex h-[44px] w-[44px] items-center justify-center text-[15px] font-black tracking-tight text-white drop-shadow-sm sm:h-[60px] sm:w-[60px] sm:text-[20px] md:h-[76px] md:w-[76px] md:text-[26px]">
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
   SIDE STEP LABEL - LUCIDE ICON BADGE
========================================= */

function StepLabel({ item, active, side }) {
  const isLeft = side === "left";
  const Icon = item.icon;

  return (
    <div className={`flex min-w-0 items-center gap-1.5 sm:gap-2.5 ${isLeft ? "justify-end" : "justify-start"}`}>

      {!isLeft && (
        <ArrowLeft className="hidden h-4 w-4 shrink-0 text-[#A5B6C9] sm:block" />
      )}

      {/* ICON BADGE */}
      <motion.span
        initial={false}
        animate={{
          backgroundColor: active ? item.soft : "#FFFFFF",
          borderColor: active ? item.accent : `${item.accent}35`,
          boxShadow: active
            ? `0 4px 14px ${item.accent}25`
            : "0 2px 8px rgba(6,59,114,0.06)",
        }}
        transition={{ duration: 0.3 }}
        className="inline-flex h-[36px] w-[54px] items-center justify-center overflow-hidden rounded-full border sm:h-[44px] sm:w-[66px] md:h-[48px] md:w-[74px]"
      >
        <Icon
          aria-hidden="true"
          strokeWidth={2.3}
          style={{ color: item.accent }}
          className="h-[18px] w-[18px] transition-transform duration-300 hover:scale-110 sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]"
        />
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
    <motion.div
      initial={false}
      animate={{
        borderColor: active ? item.accent : "#E2E8F0",
        boxShadow: active
          ? "0 8px 25px rgba(6,59,114,0.11)"
          : "0 4px 16px rgba(6,59,114,0.035)",
      }}
      transition={{ duration: 0.3 }}
      className={`relative w-full min-w-0 max-w-[470px] overflow-hidden rounded-[15px] border bg-white sm:rounded-[19px] md:rounded-[24px] ${isLeft ? "mr-1 sm:mr-2" : "ml-1 sm:ml-2"}`}
    >

      {/* CARD HEADER */}
      <button
        type="button"
        onClick={onClick}
        aria-expanded={active}
        aria-controls={contentId}
        className="flex w-full min-w-0 items-center justify-between gap-2.5 px-4 py-2.5 text-left sm:gap-3.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5"
      >
        <div className="flex min-w-0 flex-1 items-center">
          <h3 className="min-w-0 text-[11px] font-bold leading-[1.35] text-[#0C337B] sm:text-[13px] md:text-[15px] lg:text-[16px]">
            {item.title}
          </h3>
        </div>

        {/* PLUS / MINUS */}
        <span
          className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full sm:h-[26px] sm:w-[26px] md:h-[30px] md:w-[30px]"
          style={{
            backgroundColor: active ? item.accent : item.soft,
            color: active ? "#FFFFFF" : item.accent,
          }}
        >
          {active ? (
            <Minus className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
          ) : (
            <Plus className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* ACCORDION DESCRIPTION */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="description"
            id={contentId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: reduceMotion ? 0 : 0.2,
              },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#EDF1F5] px-4 pb-3 pt-2.5 sm:px-5 sm:pb-3.5 sm:pt-3 md:px-6 md:pb-4">

              {/* DESKTOP DESCRIPTION */}
              <p className="hidden text-[13px] leading-[1.6] text-[#526477] md:block">
                {item.desktopDescription}
              </p>

              {/* MOBILE DESCRIPTION */}
              <p className="text-[9px] leading-[1.55] text-[#526477] sm:text-[12px] sm:leading-[1.6] md:hidden">
                {item.mobileDescription}
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
