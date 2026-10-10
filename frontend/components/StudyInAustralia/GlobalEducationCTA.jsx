"use client";

import { ArrowRight, Globe2 } from "lucide-react";

export default function GlobalEducationCTA() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-5 lg:px-6">
        <div className="relative overflow-hidden rounded-[26px] border border-[#0F766E]/15 bg-[#063B72] px-5 py-8 shadow-[0_18px_50px_rgba(6,59,114,0.16)] sm:px-7 sm:py-10 md:px-10 md:py-11 lg:px-12 lg:py-12">

          {/* BACKGROUND DECORATION */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full border border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-10 h-[210px] w-[210px] rounded-full border border-[#2DD4BF]/15" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#14B8A6]/10 blur-[60px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-[-120px] h-[250px] w-[250px] rounded-full bg-[#2DD4BF]/10 blur-[70px]" />

          {/* GRID */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:38px_38px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">

            {/* LEFT CONTENT */}
            <div className="max-w-[840px]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/15 bg-white/10 text-[#2DD4BF] backdrop-blur-md sm:h-12 sm:w-12">
                <Globe2 size={23} strokeWidth={1.9} />
              </div>

              <h2 className="text-[28px] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[34px] md:text-[40px] lg:text-[44px]">
                Taking Your Education <span className="text-[#2DD4BF]">Global</span>
              </h2>

              <div className="mt-4 flex items-center gap-1.5">
                <span className="h-[4px] w-[4px] rounded-full bg-[#2DD4BF]" />
                <span className="h-[4px] w-[4px] rounded-full bg-[#2DD4BF]/70" />
                <span className="h-[4px] w-[4px] rounded-full bg-[#2DD4BF]/40" />
                <span className="h-[4px] w-16 rounded-full bg-[#2DD4BF]" />
              </div>

              <p className="mt-6 max-w-[820px] text-[14px] leading-[1.75] text-white/80 sm:text-[15px] md:text-[16px]">
                Whether you're exploring a university , degree , or new study destination, having the right information makes the decision easier. Get clarity on your options, understand what fits your goals, and take your next step with 
               <strong className="font-semibold text-white"> University Yatra</strong>.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:flex lg:items-center lg:justify-end">
              <button type="button" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#14B8A6] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(20,184,166,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F9F91] hover:shadow-[0_14px_36px_rgba(20,184,166,0.34)] sm:w-auto sm:px-7 sm:py-4 sm:text-[15px]">
                Book Free Counselling
                <ArrowRight size={18} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}