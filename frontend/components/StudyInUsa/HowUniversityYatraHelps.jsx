
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plane, MapPin } from "lucide-react";

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
    <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-8 z-0 hidden h-[240px] w-[240px] opacity-60 lg:block xl:-left-5 xl:-top-5 xl:h-[280px] xl:w-[280px]">

      {/* Globe */}
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

        {/* Outer globe */}
        <circle cx="150" cy="150" r="118" fill="url(#uy-globe-gradient)" opacity="0.85" />

        {/* Globe latitude lines */}
        <ellipse cx="150" cy="150" rx="118" ry="43" stroke="#61BDF2" strokeWidth="1.3" opacity="0.5" />
        <ellipse cx="150" cy="150" rx="118" ry="82" stroke="#61BDF2" strokeWidth="1.2" opacity="0.35" />

        {/* Globe longitude lines */}
        <ellipse cx="150" cy="150" rx="50" ry="118" stroke="#61BDF2" strokeWidth="1.3" opacity="0.4" />
        <ellipse cx="150" cy="150" rx="88" ry="118" stroke="#61BDF2" strokeWidth="1.2" opacity="0.3" />

        {/* North America */}
        <path d="M55 91 L77 70 L103 67 L117 81 L139 83 L145 98 L126 107 L120 127 L101 135 L94 156 L81 146 L70 124 L54 117 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />

        {/* South America */}
        <path d="M106 153 L126 148 L142 160 L151 184 L140 208 L132 230 L119 244 L113 221 L104 201 L110 181 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />

        {/* Europe / Asia */}
        <path d="M154 76 L177 62 L202 72 L224 83 L247 105 L258 127 L238 138 L217 131 L202 144 L183 128 L165 132 L149 112 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />

        {/* Africa */}
        <path d="M165 140 L190 136 L210 153 L212 179 L197 205 L183 220 L168 197 L160 173 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />

        {/* Australia */}
        <path d="M224 209 L246 202 L261 214 L253 231 L232 234 L220 223 Z" fill="url(#uy-continent-gradient)" opacity="0.95" />

        {/* Orbit rings */}
        <ellipse cx="150" cy="150" rx="145" ry="60" transform="rotate(-23 150 150)" stroke="#45B6FA" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.8" />

        <ellipse cx="150" cy="150" rx="147" ry="97" transform="rotate(30 150 150)" stroke="#45B6FA" strokeWidth="1.2" strokeDasharray="5 7" opacity="0.5" />

        {/* Location marker */}
        <circle cx="215" cy="166" r="15" fill="#168DF5" />
        <circle cx="215" cy="163" r="5" fill="white" />
        <path d="M203 174 L215 190 L227 174" fill="#168DF5" />
      </svg>

    </div>
  );
}

/* ==========================================
   AIRPLANE + CURVED DOTTED FLIGHT PATH
========================================== */

function AirplaneFlightPath() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[230px] w-[430px] md:block lg:right-3 lg:w-[500px] xl:w-[590px]">

      {/* Curved dashed route */}
      <svg viewBox="0 0 590 230" fill="none" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">

        <path
          d="M8 168 C80 195 110 165 105 126 C101 92 151 83 166 121 C189 186 264 153 324 125 C401 89 470 70 555 29"
          stroke="#52B8FF"
          strokeWidth="2"
          strokeDasharray="8 9"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small route dot */}
        <circle cx="8" cy="168" r="3" fill="#52B8FF" />

      </svg>

      {/* Airplane */}
      <motion.div initial={{ opacity: 0, x: -15, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="absolute right-[3%] top-[4%] rotate-[-27deg]">

        <Plane size={55} strokeWidth={1.8} className="fill-[#4BA9F6] text-[#168DF5] drop-shadow-[0_5px_10px_rgba(22,141,245,0.15)]" />

      </motion.div>

    </div>
  );
}

/* ==========================================
   INDIVIDUAL JOURNEY STEP
========================================== */

function JourneyStep({ item, index, reduceMotion, compact = false }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
      className="group relative flex h-full min-w-0 flex-col items-center text-center"
    >

      {/* CIRCULAR ICON */}
      <div className={`relative flex shrink-0 items-center justify-center ${compact ? "h-[86px] w-[86px] lg:h-[96px] lg:w-[96px] xl:h-[106px] xl:w-[106px]" : "h-[114px] w-[114px] sm:h-[122px] sm:w-[122px]"}`}>

        {/* Outer circle */}
        <div className="absolute inset-0 rounded-full border border-[#D0EAF6] bg-white/70 shadow-[0_7px_24px_rgba(26,125,184,0.09)]" />

        {/* Soft colored background */}
        <div className="absolute inset-[7px] rounded-full border-[3px] border-white" style={{ backgroundColor: item.soft }} />

        {/* Image */}
        <div className={`relative z-10 flex items-center justify-center ${compact ? "h-[62px] w-[62px] lg:h-[68px] lg:w-[68px] xl:h-[76px] xl:w-[76px]" : "h-[76px] w-[76px] sm:h-[84px] sm:w-[84px]"}`}>
          <Image
            src={item.image}
            alt=""
            width={180}
            height={180}
            sizes="(max-width: 767px) 84px, 76px"
            className="h-full w-full object-contain drop-shadow-[0_8px_8px_rgba(6,59,114,0.14)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
          />
        </div>

        {/* Step number */}
        <span className="absolute right-[2px] top-[-5px] z-20 flex h-[27px] w-[27px] items-center justify-center rounded-full border-[3px] border-[#F0F9FD] text-[11px] font-extrabold text-white shadow-[0_4px_12px_rgba(6,59,114,0.16)]" style={{ backgroundColor: item.accent }}>
          {Number(item.number)}
        </span>

      </div>

      {/* Title */}
      <h3 className={`mt-2.5 sm:mt-3 font-extrabold leading-[1.3] tracking-[-0.02em] text-[#0C337B] ${compact ? "text-[10px] lg:text-[11px] xl:text-[12px]" : "text-[13px] sm:text-[14px]"}`}>
        {item.title}
      </h3>

      {/* Description */}
      <p className={`mt-1 leading-[1.45] text-[#526B8C] ${compact ? "text-[9px] lg:text-[10px] xl:text-[11px]" : "text-[11px] sm:text-[12px]"}`}>
        {item.description}
      </p>

    </motion.article>
  );
}

/* ==========================================
   MAIN SECTION
========================================== */

export default function HowUniversityYatraHelps() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">

      <div className="mx-auto w-full max-w-[1360px] px-3.5 sm:px-5 lg:px-6">

        {/* FULL WIDTH ROUNDED SECTION */}
        <div className="relative isolate overflow-hidden rounded-[24px] bg-[#F0F9FD] px-3.5 py-6 sm:rounded-[32px] sm:px-6 sm:py-8 md:px-8 md:py-9 shadow-[0_10px_35px_rgba(6,59,114,0.04)]">

          {/* BACKGROUND DECORATIONS */}
          <WorldGlobe />
          <AirplaneFlightPath />

          {/* Soft clouds */}
          <div aria-hidden="true" className="pointer-events-none absolute left-[25%] top-[45px] hidden h-12 w-28 rounded-full bg-white/65 blur-xl lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[18%] top-[75px] hidden h-10 w-32 rounded-full bg-white/70 blur-xl lg:block" />

          {/* HEADER */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="relative z-10 mx-auto mb-6 max-w-[850px] text-center sm:mb-7 md:mb-8"
          >

            <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#1765F5] sm:text-[11px]">
              YOUR JOURNEY, OUR SUPPORT
            </span>

            <h2 className="text-[25px] font-extrabold leading-[1.13] tracking-[-0.045em] text-[#0C337B] sm:text-[32px] md:text-[36px] lg:text-[40px]">
              How <span className="text-[#1765F5]">University Yatra™</span> Helps You
            </h2>

            {/* Small underline accent */}
            <div aria-hidden="true" className="mx-auto mt-2 h-[3.5px] w-20 -rotate-2 rounded-full bg-[#1765F5]" />

            <p className="mx-auto mt-2.5 max-w-[640px] text-[12px] leading-[1.6] text-[#526B8C] sm:text-[13px] md:text-[14px]">
              From your first question to your study abroad journey, we guide you every step.
            </p>

          </motion.div>

          {/* MOBILE - SWIPE TIMELINE */}
          <div className="relative z-10 md:hidden">

            {/* Dashed connector */}
            <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-[57px] border-t-2 border-dashed border-[#A2C1FB]" />

            <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {helpItems.map((item, index) => (
                <div key={item.number} className="relative w-[185px] shrink-0 snap-start px-2 sm:w-[205px]">

                  <JourneyStep item={item} index={index} reduceMotion={reduceMotion} />

                  {index !== helpItems.length - 1 && (
                    <div aria-hidden="true" className="pointer-events-none absolute right-[-10px] top-[48px] z-20 flex h-[21px] w-[21px] items-center justify-center rounded-full border-2 border-[#F0F9FD] bg-[#1765F5] text-white">
                      <ArrowRight size={12} strokeWidth={3} />
                    </div>
                  )}

                </div>
              ))}

            </div>

            <p className="mt-1 text-center text-[10px] font-semibold tracking-[0.08em] text-[#7890A8]">
              Swipe to explore your journey →
            </p>

          </div>

          {/* DESKTOP - 8 CONNECTED STEPS */}
          <div className="relative z-10 hidden md:block">

            {/* Dashed timeline */}
            <div aria-hidden="true" className="pointer-events-none absolute left-[6%] right-[6%] top-[43px] z-0 border-t-2 border-dashed border-[#A2C1FB] lg:top-[47px] xl:top-[52px]" />

            <div className="relative z-10 grid grid-cols-8 gap-1 lg:gap-2 xl:gap-3">

              {helpItems.map((item, index) => (
                <div key={item.number} className="relative min-w-0">

                  <JourneyStep item={item} index={index} reduceMotion={reduceMotion} compact />

                  {index !== helpItems.length - 1 && (
                    <div aria-hidden="true" className="pointer-events-none absolute right-[-10px] top-[34px] z-20 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[3px] border-[#F0F9FD] bg-[#1765F5] text-white lg:right-[-12px] lg:top-[38px] xl:top-[43px]">
                      <ArrowRight size={11} strokeWidth={3} />
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
