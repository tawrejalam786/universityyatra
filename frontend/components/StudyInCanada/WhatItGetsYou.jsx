
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  GraduationCap,
  GitCompareArrows,
  Globe2,
  BrainCircuit,
  ShieldCheck,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  UsersRound,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";

/* =========================================
   STUDY IN CANADA - ORIGINAL CONTENT
   ALL TITLES, DESCRIPTIONS & COLORS KEPT
========================================= */


const benefits = [
  {
    number: "01",
    title: "Globally Recognised Institutions",
    description:
      "Canada offers universities and colleges known for academic quality, specialised programs, and research opportunities. Students can compare institutions based on curriculum, faculty expertise, campus facilities, location, and long-term academic goals.",
    mobileDescription:
      "Explore Canadian universities and colleges offering diverse programs, research opportunities, and learning environments suited to different academic goals.",
    icon: GraduationCap,
    accent: "#1646A0",
    soft: "#EEF4FF",
  },
  {
    number: "02",
    title: "A Blend of Theory and Practical Learning",
    description:
      "Canadian education combines classroom learning with assignments, presentations, group projects, laboratory work, and independent research. The balance varies by institution and program, helping students understand how knowledge is applied in their chosen field.",
    mobileDescription:
      "Build knowledge through assignments, presentations, group projects, laboratory sessions, and independent research, depending on your program.",
    icon: BookOpen,
    accent: "#E83E8C",
    soft: "#FFF0F6",
  },
  {
    number: "03",
    title: "Multicultural Campus Experience",
    description:
      "Students learn alongside peers from different countries, cultures, and academic backgrounds. Campus clubs, student societies, cultural events, and collaborative projects create opportunities to exchange perspectives and build meaningful connections.",
    mobileDescription:
      "Learn alongside students from different backgrounds and engage through campus clubs, cultural events, student societies, and collaborative activities.",
    icon: UsersRound,
    accent: "#1765F5",
    soft: "#EAF2FF",
  },
  {
    number: "04",
    title: "Co-op and Industry Exposure",
    description:
      "Many Canadian institutions offer co-op programs, internships, applied projects, and industry-linked learning. These opportunities depend on the course and institution, and placements may have separate eligibility requirements or competitive selection.",
    mobileDescription:
      "Explore co-op programs, internships, and applied projects offered by Canadian institutions. Availability and eligibility vary by course and institution.",
    icon: BriefcaseBusiness,
    accent: "#7C3AED",
    soft: "#F4EFFF",
  },
  {
    number: "05",
    title: "Post-Graduation Work Opportunities",
    description:
      "Eligible graduates of qualifying Canadian institutions and programs may apply for a Post-Graduation Work Permit (PGWP). Its duration and eligibility depend on factors such as the qualification, program, institution, and applicable immigration rules.",
    mobileDescription:
      "Eligible graduates may apply for a PGWP after completing a qualifying program. Permit duration and eligibility depend on current IRCC requirements.",
    icon: Globe2,
    accent: "#A93BBE",
    soft: "#FAEEFC",
  },
  {
    number: "06",
    title: "Diverse Courses and Career Pathways",
    description:
      "From Computer Science, Engineering, and Business Analytics to Public Health, Finance, Environmental Studies, and Film Production, Canadian institutions offer programs across academic and professional disciplines.",
    mobileDescription:
      "Choose from Computer Science, Engineering, Business Analytics, Public Health, Finance, Environmental Studies, and many other fields.",
    icon: Layers3,
    accent: "#0C337B",
    soft: "#E8F0FE",
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

  /* =========================================
     SYNC ACTIVE STEP
  ========================================= */

  useEffect(() => {
    activeRef.current = activeStep;
  }, [activeStep]);

  /* =========================================
     SCROLL-BASED ACTIVE ACCORDION
     SAME AS STUDY IN INDIA
  ========================================= */

  useEffect(() => {
    let frame = null;

    const updateActiveStep = () => {
      frame = null;

      if (manualStep !== null) return;

      const section = sectionRef.current;

      if (!section) return;

      const bounds = section.getBoundingClientRect();

      if (
        bounds.bottom < 0 ||
        bounds.top > window.innerHeight
      ) {
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

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

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
     RESUME AUTO MODE ON SCROLL
  ========================================= */

  useEffect(() => {
    if (manualStep === null) return;

    const resumeScrollMode = () => {
      setManualStep(null);
    };

    window.addEventListener("wheel", resumeScrollMode, {
      passive: true,
    });

    window.addEventListener("touchmove", resumeScrollMode, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", resumeScrollMode);
      window.removeEventListener("touchmove", resumeScrollMode);
    };
  }, [manualStep]);

  /* =========================================
     SECTION LAYOUT
  ========================================= */

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9"
    >
      <div className="mx-auto w-full max-w-[1180px] px-3.5 sm:px-5 lg:px-6">

        {/* =====================================
            ORIGINAL CANADA HEADING
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-center sm:mb-6"
        >
          
          <span className="mb-1.5 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
            WHY STUDY IN THE CANADA?
          </span>

          <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.03em] text-[#063B72] sm:text-[30px] md:text-[34px] lg:text-[38px]">
            Inside the{" "}
            <span className="text-[#1765f5]">
              Canadian Study
            </span>{" "}
            Experience
          </h2>
        </motion.div>

        {/* =====================================
            INDIA-STYLE COMPACT TIMELINE
        ===================================== */}

        <div className="relative mx-auto w-full max-w-[1100px]">

          {/* CENTER MULTICOLOR BAR */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-3 left-1/2 z-10 flex w-[44px] -translate-x-1/2 flex-col overflow-hidden rounded-[22px] shadow-[0_8px_22px_rgba(6,59,114,0.15)] sm:w-[60px] sm:rounded-[28px] md:w-[76px] md:rounded-[34px]"
          >
            {benefits.map((item) => (
              <div
                key={item.number}
                className="min-h-0 flex-1"
                style={{ backgroundColor: item.accent }}
              />
            ))}
          </div>

          {/* TIMELINE ROWS */}
          <div className="relative z-20">

            {benefits.map((item, index) => {
              const isLeft = index % 2 === 1;
              const isActive = activeStep === index;

              return (
                <div
                  key={item.number}
                  className="relative grid min-h-[90px] grid-cols-[minmax(0,1fr)_54px_minmax(0,1fr)] items-center py-2 sm:min-h-[110px] sm:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] sm:py-2.5 md:min-h-[125px] md:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)] md:py-3"
                >

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
                      <StepLabel
                        item={item}
                        active={isActive}
                        side="left"
                      />
                    )}

                  </div>

                  {/* CENTER STEP NUMBER */}
                  <div
                    ref={(element) => {
                      nodeRefs.current[index] = element;
                    }}
                    className="relative z-20 flex items-center justify-center"
                  >
                    <motion.span
                      initial={false}
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        opacity: isActive ? 1 : 0.92,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-[44px] w-[44px] items-center justify-center text-[15px] font-black tracking-tight text-white drop-shadow-sm sm:h-[60px] sm:w-[60px] sm:text-[20px] md:h-[76px] md:w-[76px] md:text-[26px]"
                    >
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
                      <StepLabel
                        item={item}
                        active={isActive}
                        side="right"
                      />
                    )}

                  </div>

                  {/* ACTIVE ACCENT GLOW */}
                  {isActive && (
                    <motion.span
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[32px] sm:h-[100px] sm:w-[100px]"
                      style={{
                        backgroundColor: `${item.accent}12`,
                      }}
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
   SIDE ICON LABEL

   WHITE ICON + MATCHING COLOR BACKGROUND
   SAME AS STUDY IN INDIA
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

      {/* COLORED ICON BADGE */}
      <motion.span
        initial={false}
        animate={{
          backgroundColor: item.accent,
          borderColor: active ? "#FFFFFF" : item.accent,
          boxShadow: active
            ? `0 5px 18px ${item.accent}45`
            : `0 3px 10px ${item.accent}25`,
          scale: active ? 1.04 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="inline-flex h-[36px] w-[54px] items-center justify-center overflow-hidden rounded-full border sm:h-[44px] sm:w-[66px] md:h-[48px] md:w-[74px]"
      >
        <Icon
          aria-hidden="true"
          strokeWidth={2.3}
          className="h-[18px] w-[18px] text-white sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]"
        />
      </motion.span>

      {/* RIGHT ARROW */}
      {isLeft && (
        <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#A5B6C9] sm:block" />
      )}

    </div>
  );
}

/* =========================================
   TIMELINE ACCORDION CARD

   INDIA DESIGN + ORIGINAL CANADA CONTENT
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
  const contentId = `canada-benefit-${index}`;

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

      {/* CARD HEADING */}
      <button
        type="button"
        onClick={onClick}
        aria-expanded={active}
        aria-controls={contentId}
        className="flex w-full min-w-0 items-center justify-between gap-2.5 px-4 py-2.5 text-left sm:gap-3.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5"
      >
        <div className="flex min-w-0 flex-1 items-center">

          <h3 className="min-w-0 text-[11px] font-bold leading-[1.35] text-[#063B72] sm:text-[13px] md:text-[15px] lg:text-[16px]">
            {item.title}
          </h3>

        </div>

        {/* WHITE PLUS / MINUS ICON */}
        <span
          className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full sm:h-[26px] sm:w-[26px] md:h-[30px] md:w-[30px]"
          style={{
            backgroundColor: item.accent,
            color: "#FFFFFF",
          }}
        >
          {active ? (
            <Minus
              className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5"
              strokeWidth={2.5}
            />
          ) : (
            <Plus
              className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5"
              strokeWidth={2.5}
            />
          )}
        </span>
      </button>

      {/* ORIGINAL CANADA DESCRIPTION */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="description"
            id={contentId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
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

              {/* ORIGINAL CANADA DESCRIPTION */}
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
