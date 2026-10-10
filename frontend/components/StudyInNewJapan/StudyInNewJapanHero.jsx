
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/* =========================================
   JAPAN HERO STATS
========================================= */

const stats = [
  { label: "Technology & Innovation" },
  { label: "Research Opportunities" },
  { label: "Specialized Programs" },
];

/* =========================================
   JAPAN HERO SECTION
========================================= */

export default function StudyIndiaHero() {
  return (
    <section className="relative isolate flex min-h-[650px] w-full flex-col overflow-hidden bg-[#041a3a] md:min-h-[720px] lg:min-h-[760px]">

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="h-full w-full scale-[1.03] object-cover object-center">
          <source src="/videos/study-in-india.mp4" type="video/mp4" />
        </video>
      </div>

      {/* VIDEO OVERLAYS */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-b from-[#02132e]/80 via-[#052452]/30 to-[#02132e]/90" />

      {/* CENTER GLOW */}
      <div aria-hidden="true" className="absolute left-1/2 top-[48%] -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.08] blur-[110px]" />

      {/* LEFT GLOW */}
      <div aria-hidden="true" className="absolute -left-32 top-16 -z-10 h-[320px] w-[320px] rounded-full bg-orange-500/[0.09] blur-[120px]" />

      {/* RIGHT GLOW */}
      <div aria-hidden="true" className="absolute -right-32 bottom-16 -z-10 h-[340px] w-[340px] rounded-full bg-emerald-400/[0.11] blur-[120px]" />

      {/* DECORATIVE DOT PATTERN */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:34px_34px]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] flex-1 items-center justify-center px-5 pb-14 pt-20 sm:px-8 md:px-10 md:pb-20 md:pt-24 lg:px-16">
        <div className="mx-auto max-w-[1050px] text-center">

          {/* JAPAN FLAG LABEL */}
          <motion.div initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="relative mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-[#0B2538]/75 py-1.5 pl-1.5 pr-4 shadow-[0_8px_25px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl sm:gap-3 sm:pr-5">

            <span aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* JAPAN FLAG IMAGE */}
            <span className="relative flex h-[34px] w-[34px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/85 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.25)]">
              <Image src="/images/countrylogo/japan.png" alt="Japan flag" width={34} height={34} className="h-full w-full object-cover" />
            </span>

            <span className="whitespace-nowrap text-[13px] font-extrabold uppercase leading-tight tracking-[0.08em] text-white sm:text-[14px]">
              Study In Japan
            </span>

          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-[43px] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-[54px] md:text-[68px] lg:text-[40px] xl:text-[50px]">
            Explore Education at the
            <span className="mt-1 block text-[#2DD4BF] md:mt-2">
              Forefront of Technology
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mt-6 max-w-[790px] text-[15px] font-normal leading-[1.75] text-white/80 sm:text-[16px] md:mt-7 md:text-[18px] md:leading-[1.7] lg:text-[19px]">
            Discover undergraduate, postgraduate, and specialized programs across Japanese universities, with guidance to help you navigate course options, language requirements, and admission pathways.
          </motion.p>

          {/* JAPAN HIGHLIGHTS */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.23, duration: 0.6 }} className="mx-auto mt-4 flex max-w-[1050px] flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center sm:mt-5">
            {stats.map((item, index) => (
              <span key={item.label} className="inline-flex items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase leading-[1.6] tracking-[0.015em] text-[#5EEAD4] sm:text-[11px] md:text-[12px] lg:font-extrabold lg:text-[11px]">
                  {item.label}
                </span>

                {index !== stats.length - 1 && (
                  <span aria-hidden="true" className="text-[10px] font-bold text-white/75">
                    •
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mt-8 flex justify-center md:mt-9">
            <button type="button" className="group inline-flex items-center justify-center gap-3 rounded-full border border-emerald-300/30 bg-[#2DD4BF] px-7 py-[15px] text-[14px] font-semibold text-brand-navy-dark shadow-[0_10px_40px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0ab985] hover:shadow-[0_15px_45px_rgba(16,185,129,0.38)] sm:px-9 sm:py-4 sm:text-[15px] md:text-[16px]">
              Book a Free Consultation
              <ArrowRight size={18} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
