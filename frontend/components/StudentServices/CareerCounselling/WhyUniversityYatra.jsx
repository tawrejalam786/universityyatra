
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FileSearch,
  Globe2,
  Wallet,
  MessageSquareText,
} from "lucide-react";

const guidanceSteps = [
  {
    id: "01",
    tag: "UNDERSTAND",
    title: "It starts with your profile",
    description:
      "We understand your academics, experience, study gaps and goals before recommending options.",
    icon: FileSearch,
    cardColor: "bg-[#1765F5]",
    iconColor: "bg-white/20 text-white",
    numberColor: "bg-[#1765F5]",
  },
  {
    id: "02",
    tag: "EXPLORE",
    title: "Country & course clarity",
    description:
      "Explore study destinations and courses that genuinely align with your background.",
    icon: Globe2,
    cardColor: "bg-[#194184]",
    iconColor: "bg-[#1765F5]/30 text-[#A2C1FB]",
    numberColor: "bg-[#256FF5]",
  },
  {
    id: "03",
    tag: "PREPARE",
    title: "Budget-aware planning",
    description:
      "Consider financial feasibility and preparation requirements before making decisions.",
    icon: Wallet,
    cardColor: "bg-[#194184]",
    iconColor: "bg-[#1765F5]/30 text-[#A2C1FB]",
    numberColor: "bg-[#5D93F8]",
  },
  {
    id: "04",
    tag: "DECIDE",
    title: "Honest, practical advice",
    description:
      "Clear expectations, long-term career thinking and no misleading outcomes.",
    icon: MessageSquareText,
    cardColor: "bg-[#194184]",
    iconColor: "bg-[#1765F5]/30 text-[#A2C1FB]",
    numberColor: "bg-[#83B1FF]",
  },
];

function GuidanceStep({ step, index, reduceMotion }) {
  const Icon = step.icon;

  // Alternate timeline numbers on mobile.
  const isRight = index % 2 !== 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : index * 0.1,
        ease: "easeOut",
      }}
      className={`group relative z-10 grid w-full min-w-0 items-start gap-3 lg:flex lg:flex-col lg:items-center lg:gap-5 ${isRight ? "grid-cols-[minmax(0,1fr)_56px]" : "grid-cols-[56px_minmax(0,1fr)]"}`}
    >
      {/* NUMBER CIRCLE - ALTERNATE LEFT / RIGHT */}

      <motion.div
        whileHover={reduceMotion ? undefined : { scale: 1.09 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative z-20 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[5px] border-[#0C337B] text-[14px] font-extrabold shadow-[0_0_0_2px_#5D93F8] lg:order-none ${step.numberColor} ${isRight ? "order-2" : "order-1"} ${index === 3 ? "text-[#0C337B]" : "text-white"}`}
      >
        {step.id}
      </motion.div>

      {/* STEP CONTENT CARD */}

      <motion.div
        whileHover={reduceMotion ? undefined : { y: -5 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`relative flex min-h-[138px] w-full min-w-0 flex-col overflow-hidden rounded-[18px] border border-white/15 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-300 group-hover:border-[#A2C1FB]/50 group-hover:shadow-[0_18px_38px_rgba(0,0,0,0.18)] sm:p-5 lg:order-none lg:min-h-[220px] lg:rounded-[20px] lg:p-6 ${step.cardColor} ${isRight ? "order-1" : "order-2"}`}
      >
        {/* DECORATIVE BACKGROUND */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-[24px] border-white/[0.035]" />

        {/* ICON + TAG */}

        <div className="relative z-10 mb-4 flex items-center justify-between gap-2 lg:mb-6">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${step.iconColor}`}>
            <Icon size={21} strokeWidth={1.8} />
          </div>

          <span className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#A2C1FB] sm:text-[10px]">
            {step.tag}
          </span>
        </div>

        {/* TITLE + DESCRIPTION */}

        <div className="relative z-10">
          <h3 className="mb-2 text-[16px] font-bold leading-[1.3] tracking-[-0.025em] text-white sm:text-[17px] lg:text-[19px]">
            {step.title}
          </h3>

          <p className="text-[12px] leading-[1.7] text-[#D7E5FC] sm:text-[13px]">
            {step.description}
          </p>
        </div>

        {/* DESKTOP ACCENT LINE */}

        <div className="relative z-10 mt-auto hidden pt-5 lg:block">
          <div className="h-[2px] w-10 rounded-full bg-[#5D93F8] transition-[width] duration-300 group-hover:w-20" />
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function WhyUniversityYatra() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-university-yatra"
      aria-labelledby="why-university-yatra-heading"
      className="relative isolate w-full overflow-hidden bg-[#0C337B] py-12 sm:py-16 lg:py-[75px]"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full border border-white/[0.045]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full border border-[#5D93F8]/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: "easeOut",
          }}
          className="mx-auto mb-9 max-w-[950px] text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 rounded-full bg-[#5D93F8]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#5D93F8] sm:text-[12px]">
              Why University Yatra
            </span>

            <span className="h-[2px] w-6 rounded-full bg-[#5D93F8]" />
          </div>

          <h2
            id="why-university-yatra-heading"
            className="mx-auto max-w-[1000px] text-[29px] font-extrabold leading-[1.17] tracking-[-0.04em] text-white sm:text-[37px] md:text-[43px] lg:text-[48px]"
          >
            Better decisions start with{" "}
            <span className="text-[#5D93F8]">
              better guidance.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-[1.8] text-[#D4E3FB] sm:text-[16px] lg:text-[17px]">
            We help you understand what is realistic for your profile,
            so you can plan your education with confidence.
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div className="relative">
          {/* DESKTOP HORIZONTAL LINE */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[27px] z-0 hidden h-[2px] bg-[#5D93F8]/65 lg:block"
          />

          {/* MOBILE CENTER CONNECTING LINE */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-7 left-1/2 top-7 z-0 w-[2px] -translate-x-1/2 bg-[#5D93F8]/40 lg:hidden"
          />

          {/* STEPS - ZIG ZAG MOBILE */}

          <div className="relative grid min-w-0 grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-4 lg:items-stretch lg:gap-5">
            {guidanceSteps.map((step, index) => (
              <GuidanceStep
                key={step.id}
                step={step}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
