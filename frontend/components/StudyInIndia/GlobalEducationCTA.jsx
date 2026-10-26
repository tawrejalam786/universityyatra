
"use client";

import Image from "next/image";
import { ArrowRight, Globe2, CheckCircle2 } from "lucide-react";

export default function GlobalEducationCTA() {
  const handleCounsellingClick = () => {
    const el =
      document.getElementById("faq-section") ||
      document.querySelector("footer");

    el?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative w-full overflow-visible bg-white px-0 pb-7 pt-12 sm:pb-9 sm:pt-14 lg:pb-9 lg:pt-16">
      <div className="mx-auto w-full max-w-[1240px] px-3.5 sm:px-5 lg:px-6">

        {/* MAIN CTA CONTAINER */}
        <div className="group relative isolate w-full rounded-[22px] shadow-[0_16px_42px_rgba(12,51,123,0.18)] sm:rounded-[26px]">

          {/* BACKGROUND LAYER - CLIPPED SEPARATELY */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[22px] border border-[#5D93F8]/25 bg-[#0C337B] sm:rounded-[26px]">

            {/* SUBTLE BLUE CIRCLES */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-6 -top-10 h-[210px] w-[210px] rounded-full border border-[#5D93F8]/20"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[-90px] right-[5%] h-[240px] w-[240px] rounded-full bg-[#1765F5]/20 blur-[65px]"
            />

            {/* GRID PATTERN */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:38px_38px]"
            />

            {/* BOTTOM LEFT ACCENT */}
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 h-[210px] w-[210px] rounded-full bg-[#5D93F8]/10 blur-[60px]"
            />
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="relative z-10 grid w-full grid-cols-1 items-center lg:min-h-[315px] lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)]">

            {/* LEFT CONTENT */}
            <div className="relative z-20 min-w-0 px-5 pb-5 pt-7 sm:px-8 sm:pb-7 sm:pt-8 lg:py-8 lg:pl-10 lg:pr-0">

              {/* TOP ICON */}
              {/* <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/15 bg-white/10 text-[#A2C1FB] backdrop-blur-sm">
                <Globe2 size={19} strokeWidth={1.9} />
              </div> */}

              {/* HEADING */}
              <h2 className="max-w-[650px] text-[25px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-[30px] md:text-[34px] lg:text-[35px]">
                Taking Your Education{" "}
                <span className="text-[#78ACFF]">
                  Global
                </span>
              </h2>

              {/* DECORATIVE LINE */}
              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-[4px] w-[4px] rounded-full bg-[#5D93F8]" />
                <span className="h-[4px] w-[4px] rounded-full bg-[#5D93F8]/70" />
                <span className="h-[4px] w-[4px] rounded-full bg-[#5D93F8]/40" />
                <span className="h-[4px] w-12 rounded-full bg-[#5D93F8]" />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-3.5 max-w-[630px] text-[12px] leading-[1.7] text-white/85 sm:text-[13px] lg:text-[13px]">
                Whether you&apos;re exploring a university, degree, or new
                study destination, having the right information makes the
                decision easier. Get clarity on your options, understand
                what fits your goals, and take your next step with{" "}
                <strong className="font-semibold text-white">
                  University Yatra
                </strong>.
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/90 sm:text-[12px]">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#78ACFF]"
                  />
                  Expert Guidance
                </span>

                <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/90 sm:text-[12px]">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#78ACFF]"
                  />
                  Personalised Support
                </span>
              </div>

              {/* CTA BUTTON */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleCounsellingClick}
                  className="group/btn inline-flex min-h-[43px] w-full items-center justify-center gap-2.5 rounded-full bg-[#1765F5] px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_6px_20px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1047AC] hover:shadow-[0_10px_24px_rgba(23,101,245,0.35)] sm:w-auto sm:px-6 sm:text-[13px]"
                >
                  <span>Book Free Counselling</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>

            
            {/* RIGHT STUDENT IMAGE */}
            <div className="pointer-events-none relative z-30 flex h-[235px] w-full items-end justify-center sm:h-[285px] lg:h-full lg:min-h-[315px]">

              {/* BACKGROUND GLOW */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#1765F5]/15 blur-[55px] sm:h-[270px] sm:w-[270px] lg:left-[55%] lg:h-[300px] lg:w-[300px]"
              />

              {/* STUDENT IMAGE - 200PX TALLER, NO HOVER SCALE */}
              <div className="relative z-30 h-[460px] w-[350px] shrink-0 sm:h-[520px] sm:w-[340px] lg:absolute lg:bottom-0 lg:right-[-8px] lg:h-[585px] lg:w-[385px] xl:right-[-8px] xl:h-[610px] xl:w-[610px]">
                <Image
                  src="/images/global-education-students.webp"
                  alt="Confident university student holding notebooks and showing a thumbs-up"
                  fill
                  sizes="(max-width: 639px) 280px, (max-width: 1023px) 340px, 410px"
                  className="select-none object-contain object-bottom drop-shadow-[0_16px_18px_rgba(0,0,0,0.18)]"
                  draggable={false}
                />
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}
