
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";

const helpItems = [
  {
    number: "01",
    title: "Personalised Counselling",
    description: "One-on-one guidance to understand your academic goals and preferences.",
    image: "/images/study-canada/customer-support.png",
    accent: "#168DF5",
    soft: "#E4F4FF",
  },
  {
    number: "02",
    title: "Profile & Eligibility Assessment",
    description: "We assess your profile and shortlist universities suited to your qualifications.",
    image: "/images/study-canada/verification-check.png",
    accent: "#00B9B4",
    soft: "#E0FAF7",
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
    accent: "#36A7F4",
    soft: "#E8F5FF",
  },
  {
    number: "07",
    title: "Pre-Departure Support",
    description: "Prepare for your journey with travel, accommodation and arrival guidance.",
    image: "/images/study-canada/pre-departure.png",
    accent: "#EC4899",
    soft: "#FFF0F6",
  },
];

export default function HowUniversityYatraHelps() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-white py-9 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1500px] px-3 sm:px-5 lg:px-7">

        {/* MAIN ROUNDED BACKGROUND */}
        <div className="relative isolate overflow-hidden rounded-[26px] bg-[#F0F9FD] px-3 pb-8 pt-9 shadow-[0_10px_35px_rgba(6,59,114,0.04)] sm:rounded-[34px] sm:px-6 md:px-7 md:pb-11 md:pt-11 lg:px-9">

          {/* BACKGROUND DECORATION */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-20 -z-10 h-[360px] w-[360px] rounded-full border-[40px] border-[#DDF0FA]/70" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-40 -z-10 h-[350px] w-[350px] rounded-full bg-[#E1F5FA]/50 blur-[65px]" />

          <Plane aria-hidden="true" className="pointer-events-none absolute right-[5%] top-[35px] hidden h-8 w-8 rotate-[18deg] text-[#3FA6F4] opacity-80 md:block" strokeWidth={2.2} />

          {/* SECTION HEADER */}
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="relative z-10 mx-auto mb-10 max-w-[850px] text-center sm:mb-12 md:mb-14">

            <span className="mb-2 block text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#00AFAE] sm:text-[10px] md:text-[11px]">
              YOUR JOURNEY, OUR SUPPORT
            </span>

            <h2 className="text-[27px] font-extrabold leading-[1.13] tracking-[-0.045em] text-[#063B72] sm:text-[33px] md:text-[39px] lg:text-[43px]">
              How <span className="text-[#18B8B5]">University Yatra™</span> Helps You
            </h2>

            <p className="mx-auto mt-3 max-w-[640px] text-[12px] leading-[1.65] text-[#526B8C] sm:text-[13px] md:text-[14px]">
              From your first question to your study abroad journey, we guide you every step.
            </p>

          </motion.div>

          {/* MOBILE - HORIZONTAL SWIPE */}
          <div className="relative md:hidden">
            <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {helpItems.map((item, index) => (
                <div key={item.number} className="relative w-[185px] shrink-0 snap-start px-2 sm:w-[205px]">

                  <JourneyStep item={item} index={index} reduceMotion={reduceMotion} />

                  {index !== helpItems.length - 1 && (
                    <div aria-hidden="true" className="pointer-events-none absolute right-[-10px] top-[48px] z-20 flex h-[21px] w-[21px] items-center justify-center rounded-full border-2 border-[#F0F9FD] bg-[#00B9B4] text-white">
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

          {/* DESKTOP - 7 STEP TIMELINE */}
          <div className="relative hidden md:block">

            {/* DOTTED CONNECTING LINE */}
            <div aria-hidden="true" className="pointer-events-none absolute left-[7%] right-[7%] top-[47px] z-0 border-t-2 border-dashed border-[#54C8D5]" />

            <div className="relative z-10 grid grid-cols-7 gap-1 lg:gap-2 xl:gap-3">

              {helpItems.map((item, index) => (
                <div key={item.number} className="relative min-w-0">

                  <JourneyStep item={item} index={index} reduceMotion={reduceMotion} compact />

                  {index !== helpItems.length - 1 && (
                    <div aria-hidden="true" className="pointer-events-none absolute right-[-12px] top-[38px] z-20 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[3px] border-[#F0F9FD] bg-[#00B9B4] text-white lg:right-[-14px]">
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

function JourneyStep({ item, index, reduceMotion, compact = false }) {
  return (
    <motion.article initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.06 }} className="group relative flex h-full min-w-0 flex-col items-center text-center">

      {/* CIRCULAR ICON */}
      <div className={`relative flex shrink-0 items-center justify-center ${compact ? "h-[96px] w-[96px] lg:h-[108px] lg:w-[108px] xl:h-[118px] xl:w-[118px]" : "h-[114px] w-[114px] sm:h-[122px] sm:w-[122px]"}`}>

        <div className="absolute inset-0 rounded-full border border-[#D0EAF6] bg-white/60 shadow-[0_7px_24px_rgba(26,125,184,0.09)]" />

        <div className="absolute inset-[7px] rounded-full border-[3px] border-white" style={{ backgroundColor: item.soft }} />

        <div className={`relative z-10 flex items-center justify-center ${compact ? "h-[68px] w-[68px] lg:h-[76px] lg:w-[76px] xl:h-[85px] xl:w-[85px]" : "h-[76px] w-[76px] sm:h-[84px] sm:w-[84px]"}`}>
          <Image src={item.image} alt="" width={180} height={180} sizes="(max-width: 767px) 84px, 85px" className="h-full w-full object-contain drop-shadow-[0_8px_8px_rgba(6,59,114,0.14)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
        </div>

        {/* NUMBER BADGE */}
        <span className="absolute right-[2px] top-[-5px] z-20 flex h-[27px] w-[27px] items-center justify-center rounded-full border-[3px] border-[#F0F9FD] text-[11px] font-extrabold text-white shadow-[0_4px_12px_rgba(6,59,114,0.16)]" style={{ backgroundColor: item.accent }}>
          {Number(item.number)}
        </span>
      </div>

      {/* STEP HEADING */}
      <h3 className={`mt-4 font-extrabold leading-[1.35] tracking-[-0.02em] text-[#063B72] ${compact ? "text-[11px] lg:text-[12px] xl:text-[13px]" : "text-[13px] sm:text-[14px]"}`}>
        {item.title}
      </h3>

      {/* STEP DESCRIPTION */}
      <p className={`mt-2 leading-[1.5] text-[#526B8C] ${compact ? "text-[10px] lg:text-[11px] xl:text-[12px]" : "text-[11px] sm:text-[12px]"}`}>
        {item.description}
      </p>

    </motion.article>
  );
}
