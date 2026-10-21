"use client";

import { ArrowRight, Globe2 } from "lucide-react";

export default function GlobalEducationCTA() {
  return (
    <section className="w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">
      <div className="mx-auto w-full max-w-[1240px] px-3.5 sm:px-5 lg:px-6">
        <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] border border-[#5D93F8]/25 bg-[#0C337B] px-4 py-6 sm:px-7 sm:py-8 md:px-9 md:py-9 shadow-[0_18px_50px_rgba(12,51,123,0.22)]">

          {/* BACKGROUND DECORATION */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full border border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-10 h-[210px] w-[210px] rounded-full border border-[#5D93F8]/20" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#1765F5]/20 blur-[60px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-[-120px] h-[250px] w-[250px] rounded-full bg-[#5D93F8]/15 blur-[70px]" />

          {/* GRID */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:38px_38px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-8">

            {/* LEFT CONTENT */}
            <div className="max-w-[840px]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/15 bg-white/10 text-[#A2C1FB] backdrop-blur-md">
                <Globe2 size={20} strokeWidth={1.9} />
              </div>

              <h2 className="text-[24px] font-bold leading-[1.15] tracking-[-0.035em] text-white sm:text-[30px] md:text-[34px] lg:text-[38px]">
                Taking Your Education <span className="text-[#5D93F8]">Global</span>
              </h2>

              <div className="mt-2.5 flex items-center gap-1.5">
                <span className="h-[3.5px] w-[3.5px] rounded-full bg-[#5D93F8]" />
                <span className="h-[3.5px] w-[3.5px] rounded-full bg-[#5D93F8]/70" />
                <span className="h-[3.5px] w-[3.5px] rounded-full bg-[#5D93F8]/40" />
                <span className="h-[3.5px] w-14 rounded-full bg-[#5D93F8]" />
              </div>

              <p className="mt-3.5 max-w-[820px] text-[13px] leading-[1.7] text-white/85 sm:text-[14px] md:text-[15px]">
                Whether you&apos;re exploring a university , degree , or new study destination, having the right information makes the decision easier. Get clarity on your options, understand what fits your goals, and take your next step with 
                <strong className="font-semibold text-white"> University Yatra</strong>.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:flex lg:items-center lg:justify-end">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("faq-section") || document.querySelector("footer");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1765F5] px-6 py-3 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(23,101,245,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1047AC] hover:shadow-[0_12px_32px_rgba(23,101,245,0.4)] sm:w-auto sm:px-7 sm:py-3.5 sm:text-[14px]"
              >
                <span>Book Free Counselling</span>
                <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}