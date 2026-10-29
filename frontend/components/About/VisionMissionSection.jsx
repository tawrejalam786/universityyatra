"use client";

import { motion } from "framer-motion";
import { Eye, Target, Compass } from "lucide-react";

const cardMotion = (delay = 0, x = 0) => ({
  initial: { opacity: 0, y: 28, x },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

/* Binding holes: white capsules jo card ke edge ko cross karte hain.
   Mobile: card ke bottom/top edge par (horizontal row, vertical capsules)
   md+: card ke side edge par (vertical column, horizontal capsules) */
function BindingHoles({ side = "end" }) {
  const position =
    side === "end"
      ? // Vision card: mobile = bottom edge, md+ = right edge
        "left-0 right-0 bottom-0 translate-y-1/2 px-8 md:left-auto md:right-0 md:top-0 md:h-auto md:w-9 md:translate-x-1/2 md:translate-y-0 md:px-0 md:py-10"
      : // Mission card: mobile = top edge, md+ = left edge
        "left-0 right-0 top-0 -translate-y-1/2 px-8 md:right-auto md:left-0 md:bottom-0 md:h-auto md:w-9 md:-translate-x-1/2 md:translate-y-0 md:px-0 md:py-10";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 flex h-9 flex-row justify-evenly md:flex-col ${position}`}
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="h-9 w-2.5 rounded-full bg-white md:h-2.5 md:w-9" />
      ))}
    </div>
  );
}

export default function MissionVisionSection() {
  return (
    <section
      aria-labelledby="mission-vision-title"
      className="relative w-full overflow-hidden bg-[#F4F8FF] py-14 sm:py-16 lg:py-10"
    >
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[min(90%,900px)] -translate-x-1/2 rounded-[50%] bg-[#1765F5]/10 blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* EYEBROW / HEADING */}
        <div className="mb-8 flex justify-center sm:mb-10">
          <h2
            id="mission-vision-title"
            className="inline-flex items-center gap-2 rounded-full border border-[#1765F5]/20 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5] shadow-[0_4px_14px_rgba(23,101,245,0.08)] sm:text-[12px]"
          >
            <span className="h-[7px] w-[7px] rounded-full bg-[#1765F5]" />
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_72px_1fr] lg:grid-cols-[1fr_88px_1fr]">
          {/* ---------- VISION ---------- */}
          <motion.article
            {...cardMotion(0, -24)}
            className="group relative rounded-[28px] bg-[#1765F5] p-7 pb-9 text-white shadow-[0_24px_50px_rgba(23,101,245,0.25)] transition-transform duration-300 hover:-translate-y-1 sm:p-9 md:pr-10"
          >
            <BindingHoles side="end" />

            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <Eye size={24} strokeWidth={1.9} />
              </div>
              <span className="text-[13px] font-bold tracking-[0.2em] text-white/55">
                01
              </span>
            </div>

            <h3 className="mt-6 text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[30px]">
              Our Vision
            </h3>

            <div className="mt-3 h-[3px] w-12 rounded-full bg-white/60 transition-all duration-300 group-hover:w-20" />

            <p className="mt-5 text-[14px] leading-[1.85] text-white/90 sm:text-[15px]">
              We envision a study abroad landscape where students are not defined by the
              destinations they aspire to, but by the choices they make to reach them. University
              Yatra aims to make global education a more informed, accessible, and considered
              pursuit, where the right academic pathway matters more than the appeal of a foreign
              degree.
            </p>
          </motion.article>

          {/* ---------- SPINE (mobile: horizontal strip, md+: vertical) ---------- */}
          <motion.div
            {...cardMotion(0.1)}
            aria-hidden="true"
            className="flex flex-row items-center justify-center gap-3 rounded-[24px] bg-[#D9E6FE] px-6 py-4 md:flex-col md:gap-5 md:rounded-[28px] md:px-0 md:py-8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1765F5] shadow-[0_6px_16px_rgba(23,101,245,0.2)]">
              <Compass size={22} strokeWidth={1.9} />
            </div>
            <span className="h-0 w-10 border-t-2 border-dashed border-[#1765F5]/40 md:h-14 md:w-0 md:border-l-2 md:border-t-0" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#1765F5]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#1765F5]/60" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#1765F5]/30" />
            <span className="h-3.5 w-3.5 rounded-full border-2 border-[#1765F5]/40" />
          </motion.div>

          {/* ---------- MISSION ---------- */}
          <motion.article
            {...cardMotion(0.15, 24)}
            className="group relative rounded-[28px] bg-[#0C337B] p-7 pt-9 text-white shadow-[0_24px_50px_rgba(12,51,123,0.28)] transition-transform duration-300 hover:-translate-y-1 sm:p-9 md:pl-10"
          >
            <BindingHoles side="start" />

            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <Target size={24} strokeWidth={1.9} />
              </div>
              <span className="text-[13px] font-bold tracking-[0.2em] text-white/45">
                02
              </span>
            </div>

            <h3 className="mt-6 text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[30px]">
              Our Mission
            </h3>

            <div className="mt-3 h-[3px] w-12 rounded-full bg-[#1765F5] transition-all duration-300 group-hover:w-20" />

            <p className="mt-5 text-[14px] leading-[1.85] text-[#D6E3FB] sm:text-[15px]">
              We turn study abroad ambitions into actionable plans by helping students assess their
              profiles, shortlist suitable universities, navigate applications, prepare
              documentation, and understand their financial options. At every stage, we focus on
              clear next steps, informed decisions, and guidance tailored to the student&apos;s
              academic goals and practical circumstances.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}