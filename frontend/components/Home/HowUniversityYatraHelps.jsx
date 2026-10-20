
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
   WORLD GLOBE DECORATION
========================================== */

function WorldGlobe() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -left-12 top-3 z-0 hidden h-[240px] w-[240px] opacity-45 lg:block xl:left-[2%] xl:top-4 xl:h-[260px] xl:w-[260px]">
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
   AIRPLANE DECORATION
========================================== */

function AirplaneFlightPath({ reduceMotion }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[200px] w-[430px] md:block lg:right-[2%] lg:w-[540px]">
      <svg viewBox="0 0 590 230" fill="none" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M8 168 C80 195 110 165 105 126 C101 92 151 83 166 121 C189 186 264 153 324 125 C401 89 470 70 555 29" stroke="#52B8FF" strokeWidth="2" strokeDasharray="8 9" strokeLinecap="round" />
        <circle cx="8" cy="168" r="3" fill="#52B8FF" />
      </svg>

      <motion.div initial={reduceMotion ? false : { opacity: 0, x: -15, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="absolute right-[3%] top-[4%] rotate-[-27deg]">
        <Plane size={55} strokeWidth={1.8} className="fill-[#4BA9F6] text-[#168DF5] drop-shadow-[0_5px_10px_rgba(22,141,245,0.15)]" />
      </motion.div>
    </div>
  );
}

/* ==========================================
   REUSABLE STEP ICON
========================================== */

function StepIcon({ item, index, isActive, compact = false }) {
  return (
    <div className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border border-[#D0EAF6] bg-white shadow-[0_8px_28px_rgba(26,125,184,0.12)] transition-all duration-500 ${compact ? "h-[112px] w-[112px] lg:h-[124px] lg:w-[124px] xl:h-[132px] xl:w-[132px]" : "h-[112px] w-[112px] sm:h-[122px] sm:w-[122px]"} ${isActive ? "scale-[1.12] shadow-[0_14px_38px_rgba(23,101,245,0.20)]" : "scale-100"}`}>
      <div className="absolute inset-[7px] rounded-full border-[3px] border-white" style={{ backgroundColor: item.soft }} />

      <Image src={item.image} alt="" width={180} height={180} sizes="132px" className={`relative z-10 h-[83px] w-[83px] object-contain drop-shadow-[0_8px_8px_rgba(6,59,114,0.14)] transition-transform duration-500 lg:h-[92px] lg:w-[92px] ${isActive ? "scale-110 -translate-y-1" : "scale-100"}`} />

      <span className="absolute -right-1 -top-1 z-20 flex h-[32px] w-[32px] items-center justify-center rounded-full border-[3px] border-[#F0F9FD] text-[13px] font-extrabold text-white shadow-[0_4px_12px_rgba(6,59,114,0.16)]" style={{ backgroundColor: item.accent }}>
        {index + 1}
      </span>
    </div>
  );
}

/* ==========================================
   DESKTOP WAVE TIMELINE
   FIXED HEIGHT - NO HOVER EXPANSION
========================================== */

const waveHeights = [100, 28, 100, 28, 100, 28, 100, 28];

function DesktopJourney({ reduceMotion }) {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="relative hidden h-[410px] md:block lg:h-[420px] xl:h-[430px]">
      {/* WAVE CONNECTOR */}
      <svg aria-hidden="true" viewBox="0 0 1600 210" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 z-0 h-[210px] w-full">
        <path d="M100 145 C200 145 200 35 300 35 S400 145 500 145 S600 35 700 35 S800 145 900 145 S1000 35 1100 35 S1200 145 1300 145 S1400 35 1500 35" fill="none" stroke="#C9EAFB" strokeWidth="16" strokeLinecap="round" />
        <path d="M100 145 C200 145 200 35 300 35 S400 145 500 145 S600 35 700 35 S800 145 900 145 S1000 35 1100 35 S1200 145 1300 145 S1400 35 1500 35" fill="none" stroke="#65C7FF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      </svg>

      <div className="relative z-10 grid grid-cols-8 gap-1 lg:gap-2 xl:gap-3">
        {helpItems.map((item, index) => {
          const isActive = activeStep === index;

          return (
            <motion.article
              key={item.number}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
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

              <h3 className={`mt-5 max-w-[180px] text-[11px] font-extrabold leading-[1.35] tracking-[-0.02em] transition-colors duration-300 lg:text-[12px] xl:text-[13px] ${isActive ? "text-[#1765F5]" : "text-[#0C337B]"}`}>
                {item.title}
              </h3>

              {/* DESCRIPTION: RESERVED SPACE, NO LAYOUT SHIFT */}
              <div className={`mt-2 w-full overflow-hidden transition-[opacity,transform] duration-300 ease-out ${isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
                <p className="mx-auto max-w-[180px] pb-2 text-[11px] leading-[1.55] text-[#526B8C] xl:text-[12px]">
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
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-[71px] border-t-2 border-dashed border-[#A2C1FB]" />

      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {helpItems.map((item, index) => (
          <motion.article key={item.number} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.04 }} className="relative flex w-[190px] shrink-0 snap-start flex-col items-center px-2 text-center sm:w-[215px]">
            <StepIcon item={item} index={index} isActive={false} />

            <h3 className="mt-4 text-[13px] font-extrabold leading-[1.35] text-[#0C337B]">
              {item.title}
            </h3>

            <p className="mt-2 text-[11px] leading-[1.55] text-[#526B8C]">
              {item.description}
            </p>

            {index !== helpItems.length - 1 && (
              <span aria-hidden="true" className="absolute -right-3 top-[61px] z-20 flex h-5 w-5 items-center justify-center rounded-full bg-[#1765F5] text-white">
                <ChevronRight size={13} strokeWidth={3} />
              </span>
            )}
          </motion.article>
        ))}
      </div>

      <p className="mt-2 text-center text-[10px] font-semibold tracking-[0.08em] text-[#7890A8]">
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
    <section aria-labelledby="how-university-yatra-helps-title" className="relative w-full overflow-hidden lg:h-[620px] h-[610px] bg-[#F0F9FD] py-12 sm:py-14 lg:pt-8">
      {/* DECORATIONS */}
      <WorldGlobe />
      <AirplaneFlightPath reduceMotion={reduceMotion} />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="relative mx-auto mb-12 max-w-[900px] text-center sm:mb-14 lg:mb-16">
          <span className="mb-3 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#1765F5] sm:text-[11px]">
            YOUR JOURNEY, OUR SUPPORT
          </span>

          <h2 id="how-university-yatra-helps-title" className="text-[27px] font-extrabold leading-[1.13] tracking-[-0.045em] text-[#0C337B] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            How{" "}
            <span className="text-[#1765F5]">
              University Yatra
              <sup className="relative -top-5 ml-[2px] align-baseline text-[11px] font-bold tracking-normal sm:text-[13px] lg:text-[15px]">
                ™
              </sup>
            </span>{" "}
            Helps You
          </h2>

          <div aria-hidden="true" className="mx-auto mt-3 h-[4px] w-24 -rotate-2 rounded-full bg-[#1765F5]" />

          <p className="mx-auto mt-5 max-w-[640px] text-[12px] leading-[1.65] text-[#526B8C] sm:text-[13px] md:text-[14px]">
            From your first question to your study abroad journey, we guide you every step.
          </p>
        </motion.div>

        {/* DESKTOP */}
        <DesktopJourney reduceMotion={reduceMotion} />

        {/* MOBILE */}
        <MobileJourney reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}
