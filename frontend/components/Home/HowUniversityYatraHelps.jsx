
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Plane, ChevronRight } from "lucide-react";

/* ==========================================
   DATA
========================================== */

const helpItems = [
  {
    number: "01",
    title: "Personalised Counselling",
    description: "One-on-one guidance to understand your academic goals and preferences.",
    image: "/images/study-canada/customer-support.png",
    accent: "#1765F5",
    soft: "#E8F0FE",
  },
  {
    number: "02",
    title: "Profile & Eligibility Assessment",
    description: "We assess your profile and shortlist universities suited to your qualifications.",
    image: "/images/study-canada/verification-check.png",
    accent: "#5D93F8",
    soft: "#E8F0FE",
  },
  {
    number: "03",
    title: "Tuition Fees, Living Costs & Intakes",
    description: "Understand tuition fees, living expenses and available admission intakes.",
    image: "/images/study-canada/gold-coins.png",
    accent: "#FF6958",
    soft: "#FFF0E9",
  },
  {
    number: "04",
    title: "Admission & Application Guidance",
    description: "Get support with university applications and admission requirements.",
    image: "/images/study-canada/education-graduation.png",
    accent: "#F9B600",
    soft: "#FFF6D9",
  },
  {
    number: "05",
    title: "SOP, LOR & Documentation",
    description: "Guidance on statements of purpose, recommendation letters and documents.",
    image: "/images/study-canada/documentation-approval.png",
    accent: "#8358F5",
    soft: "#F1EAFF",
  },
  {
    number: "06",
    title: "Visa Application Guidance",
    description: "Understand the visa application process, documentation and preparation.",
    image: "/images/study-canada/visa-guidance.png",
    accent: "#1047AC",
    soft: "#E8F0FE",
  },
  {
    number: "07",
    title: "Pre-Departure Support",
    description: "Prepare for your journey with travel, accommodation and arrival guidance.",
    image: "/images/study-canada/pre-departure.png",
    accent: "#EC4899",
    soft: "#FFF0F6",
  },
  {
    number: "08",
    title: "Landing",
    description: "Assistance after you arrive on campus, so you can settle in smoothly.",
    image: "/images/study-canada/landing.png",
    accent: "#1765F5",
    soft: "#E8F0FE",
  },
];

/* ==========================================
   COMPACT WORLD GLOBE DECORATION
========================================== */

function WorldGlobe() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -left-10 top-2 z-0 hidden h-[170px] w-[170px] opacity-30 lg:block xl:left-[2%] xl:h-[190px] xl:w-[190px]">
      <svg viewBox="0 0 300 300" fill="none" className="h-full w-full">
        <defs>
          <radialGradient id="uy-globe-gradient" cx="40%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#C4EFFF" />
            <stop offset="100%" stopColor="#83CFF3" />
          </radialGradient>
          <linearGradient id="uy-continent-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E7FAFF" />
          </linearGradient>
        </defs>

        <circle cx="150" cy="150" r="118" fill="url(#uy-globe-gradient)" opacity="0.85" />
        <ellipse cx="150" cy="150" rx="118" ry="43" stroke="#61BDF2" strokeWidth="1.3" opacity="0.5" />
        <ellipse cx="150" cy="150" rx="118" ry="82" stroke="#61BDF2" strokeWidth="1.2" opacity="0.35" />
        <ellipse cx="150" cy="150" rx="50" ry="118" stroke="#61BDF2" strokeWidth="1.3" opacity="0.4" />
        <ellipse cx="150" cy="150" rx="88" ry="118" stroke="#61BDF2" strokeWidth="1.2" opacity="0.3" />

        <path d="M55 91 L77 70 L103 67 L117 81 L139 83 L145 98 L126 107 L120 127 L101 135 L94 156 L81 146 L70 124 L54 117 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />
        <path d="M106 153 L126 148 L142 160 L151 184 L140 208 L132 230 L119 244 L113 221 L104 201 L110 181 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />
        <path d="M154 76 L177 62 L202 72 L224 83 L247 105 L258 127 L238 138 L217 131 L202 144 L183 128 L165 132 L149 112 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />
        <path d="M165 140 L190 136 L210 153 L212 179 L197 205 L183 220 L168 197 L160 173 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />
        <path d="M224 209 L246 202 L261 214 L253 231 L232 234 L220 223 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />

        <ellipse cx="150" cy="150" rx="145" ry="60" transform="rotate(-23 150 150)" stroke="#45B6FA" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.8" />
        <ellipse cx="150" cy="150" rx="147" ry="97" transform="rotate(30 150 150)" stroke="#45B6FA" strokeWidth="1.2" strokeDasharray="5 7" opacity="0.5" />

        <circle cx="215" cy="166" r="15" fill="#168DF5" />
        <circle cx="215" cy="163" r="5" fill="white" />
        <path d="M203 174 L215 190 L227 174" fill="#168DF5" />
      </svg>
    </div>
  );
}

/* ==========================================
   COMPACT AIRPLANE DECORATION
========================================== */

function AirplaneFlightPath({ reduceMotion }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[140px] w-[310px] lg:block xl:right-[3%] xl:w-[370px]">
      <svg viewBox="0 0 590 230" fill="none" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M8 168 C80 195 110 165 105 126 C101 92 151 83 166 121 C189 186 264 153 324 125 C401 89 470 70 555 29" stroke="#52B8FF" strokeWidth="2" strokeDasharray="8 9" strokeLinecap="round" />
        <circle cx="8" cy="168" r="3" fill="#52B8FF" />
      </svg>

      <motion.div initial={reduceMotion ? false : { opacity: 0, x: -10, y: 8 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="absolute right-[3%] top-[4%] rotate-[-27deg]">
        <Plane size={36} strokeWidth={1.8} className="fill-[#4BA9F6] text-[#168DF5]" />
      </motion.div>
    </div>
  );
}

/* ==========================================
   COMPACT STEP ICON
========================================== */

function StepIcon({ item, index, isActive, compact = false }) {
  return (
    <div className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border border-[#D0EAF6] bg-white shadow-[0_5px_18px_rgba(26,125,184,0.10)] transition-all duration-300 ${compact ? "h-[64px] w-[64px] lg:h-[72px] lg:w-[72px] xl:h-[78px] xl:w-[78px]" : "h-[76px] w-[76px] sm:h-[84px] sm:w-[84px]"} ${isActive ? "scale-[1.06] shadow-[0_8px_24px_rgba(23,101,245,0.18)]" : "scale-100"}`}>

      <div className="absolute inset-[5px] rounded-full border-2 border-white" style={{ backgroundColor: item.soft }} />

      <Image
        src={item.image}
        alt=""
        width={110}
        height={110}
        sizes="90px"
        className={`relative z-10 h-[48px] w-[48px] object-contain transition-transform duration-300 sm:h-[54px] sm:w-[54px] lg:h-[56px] lg:w-[56px] ${isActive ? "scale-105" : ""}`}
      />

      <span className="absolute -right-1 -top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#F0F9FD] text-[10px] font-extrabold text-white shadow-sm" style={{ backgroundColor: item.accent }}>
        {index + 1}
      </span>

    </div>
  );
}

/* ==========================================
   DESKTOP WAVE TIMELINE
========================================== */

const waveHeights = [72, 10, 72, 10, 72, 10, 72, 10];

function DesktopJourney({ reduceMotion }) {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="relative hidden min-h-[310px] md:block lg:min-h-[320px]">

      {/* COMPACT WAVE CONNECTOR */}
      <svg aria-hidden="true" viewBox="0 0 1600 160" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 z-0 h-[160px] w-full">
        <path d="M100 107 C200 107 200 45 300 45 S400 107 500 107 S600 45 700 45 S800 107 900 107 S1000 45 1100 45 S1200 107 1300 107 S1400 45 1500 45" fill="none" stroke="#C9EAFB" strokeWidth="12" strokeLinecap="round" />
        <path d="M100 107 C200 107 200 45 300 45 S400 107 500 107 S600 45 700 45 S800 107 900 107 S1000 45 1100 45 S1200 107 1300 107 S1400 45 1500 45" fill="none" stroke="#65C7FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      </svg>

      {/* 8 STEP GRID */}
      <div className="relative z-10 grid grid-cols-8 gap-1 lg:gap-2 xl:gap-2.5">

        {helpItems.map((item, index) => {
          const isActive = activeStep === index;

          return (
            <motion.article
              key={item.number}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.04 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              onFocusCapture={() => setActiveStep(index)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setActiveStep(null);
                }
              }}
              tabIndex={0}
              className={`relative flex min-w-0 flex-col items-center text-center outline-none focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-[#1765F5] ${isActive ? "z-30" : "z-10"}`}
              style={{ paddingTop: `${waveHeights[index]}px` }}
            >

              <StepIcon item={item} index={index} isActive={isActive} compact />

              <h3 className={`mt-3 max-w-[140px] text-[10px] font-extrabold leading-[1.35] tracking-[-0.01em] transition-colors duration-300 lg:text-[11px] xl:text-[12px] ${isActive ? "text-[#1765F5]" : "text-[#0C337B]"}`}>
                {item.title}
              </h3>

              {/* HOVER DESCRIPTION */}
              <div className={`mt-1.5 w-full overflow-hidden transition-[opacity,transform] duration-300 ease-out ${isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}>
                <p className="mx-auto max-w-[145px] pb-2 text-[10px] leading-[1.5] text-[#526B8C] lg:text-[11px]">
                  {item.description}
                </p>
              </div>

            </motion.article>
          );
        })}

      </div>
    </div>
  );
}

/* ==========================================
   MOBILE SWIPEABLE TIMELINE
========================================== */

function MobileJourney({ reduceMotion }) {
  return (
    <div className="relative md:hidden">

      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-[58px] border-t-2 border-dashed border-[#A2C1FB]" />

      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        {helpItems.map((item, index) => (
          <motion.article
            key={item.number}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.03 }}
            className="relative flex w-[160px] shrink-0 snap-start flex-col items-center px-2 text-center sm:w-[180px]"
          >

            <StepIcon item={item} index={index} isActive={false} />

            <h3 className="mt-3 text-[12px] font-extrabold leading-[1.3] text-[#0C337B]">
              {item.title}
            </h3>

            <p className="mt-1.5 text-[10px] leading-[1.5] text-[#526B8C] sm:text-[11px]">
              {item.description}
            </p>

            {index !== helpItems.length - 1 && (
              <span aria-hidden="true" className="absolute -right-3 top-[46px] z-20 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#1765F5] text-white">
                <ChevronRight size={12} strokeWidth={3} />
              </span>
            )}

          </motion.article>
        ))}

      </div>

      <p className="mt-1 text-center text-[10px] font-semibold tracking-[0.06em] text-[#7890A8]">
        Swipe to explore your journey →
      </p>

    </div>
  );
}

/* ==========================================
   MAIN SECTION
========================================== */

export default function HowUniversityYatraHelps() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="how-university-yatra-helps-title" className="relative w-full overflow-hidden bg-[#F0F9FD] py-8 sm:py-10 lg:py-11">

      {/* BACKGROUND DECORATION */}
      <WorldGlobe />
      <AirplaneFlightPath reduceMotion={reduceMotion} />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-5 lg:px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto mb-7 max-w-[760px] text-center sm:mb-8 lg:mb-9"
        >

          <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[11px]">
            YOUR JOURNEY, OUR SUPPORT
          </span>

          <h2 id="how-university-yatra-helps-title" className="text-[25px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[30px] lg:text-[34px]">
            How{" "}
            <span className="text-[#1765F5]">
              University Yatra
              <sup className="relative -top-2 ml-[2px] align-baseline text-[9px] font-bold tracking-normal sm:text-[11px]">
                ™
              </sup>
            </span>{" "}
            Helps You
          </h2>

          <div aria-hidden="true" className="mx-auto mt-2.5 h-[3px] w-[65px] -rotate-2 rounded-full bg-[#1765F5]" />

          <p className="mx-auto mt-3 max-w-[560px] text-[12px] leading-[1.6] text-[#526B8C] sm:text-[13px]">
            From your first question to your study abroad journey,
            we guide you every step.
          </p>

        </motion.div>

        {/* DESKTOP TIMELINE */}
        <DesktopJourney reduceMotion={reduceMotion} />

        {/* MOBILE TIMELINE */}
        <MobileJourney reduceMotion={reduceMotion} />

      </div>
    </section>
  );
}
