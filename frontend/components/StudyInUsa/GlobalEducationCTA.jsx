
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
    <section className="w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">
      <div className="mx-auto w-full max-w-[1240px] px-3.5 sm:px-5 lg:px-6">

        {/* MAIN CTA CONTAINER */}
        <div className="relative isolate overflow-hidden rounded-[22px] border border-[#5D93F8]/25 bg-[#0C337B] shadow-[0_18px_50px_rgba(12,51,123,0.22)] sm:rounded-[26px]">

          {/* BACKGROUND DECORATION */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 z-0 h-[300px] w-[300px] rounded-full border border-white/10" />

          <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-10 z-0 h-[210px] w-[210px] rounded-full border border-[#5D93F8]/20" />

          <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-1/2 z-0 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#1765F5]/20 blur-[70px]" />

          <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-[-120px] z-0 h-[250px] w-[250px] rounded-full bg-[#5D93F8]/15 blur-[70px]" />

          {/* GRID BACKGROUND */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:38px_38px]" />

          {/* CONTENT GRID */}
          <div className="relative z-10 grid grid-cols-1 items-center lg:min-h-[340px] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] lg:gap-4">

            {/* LEFT CONTENT */}
            <div className="relative z-20 px-5 pb-2 pt-7 sm:px-8 sm:pb-4 sm:pt-9 lg:py-11 lg:pl-11 lg:pr-0">

              {/* TOP ICON */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/15 bg-white/10 text-[#A2C1FB] backdrop-blur-md">
                <Globe2 size={20} strokeWidth={1.9} />
              </div>

              {/* HEADING */}
              <h2 className="max-w-[650px] text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-white sm:text-[32px] md:text-[36px] lg:text-[38px]">
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
                <span className="h-[4px] w-14 rounded-full bg-[#5D93F8]" />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-[610px] text-[13px] leading-[1.75] text-white/85 sm:text-[14px] md:text-[15px]">
                Whether you&apos;re exploring a university, degree, or new
                study destination, having the right information makes the
                decision easier. Get clarity on your options, understand
                what fits your goals, and take your next step with{" "}
                <strong className="font-semibold text-white">
                  University Yatra
                </strong>.
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5">
                <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/90 sm:text-[12px]">
                  <CheckCircle2 size={15} className="text-[#78ACFF]" />
                  Expert Guidance
                </span>

                <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/90 sm:text-[12px]">
                  <CheckCircle2 size={15} className="text-[#78ACFF]" />
                  Personalised Support
                </span>
              </div>

              {/* CTA BUTTON */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleCounsellingClick}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1765F5] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(23,101,245,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1047AC] hover:shadow-[0_12px_32px_rgba(23,101,245,0.4)] sm:w-auto sm:px-7 sm:text-[14px]"
                >
                  <span>Book Free Counselling</span>

                  <ArrowRight
                    size={17}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* RIGHT STUDENT IMAGE */}
            <div className="relative flex min-h-[260px] items-end justify-center overflow-hidden sm:min-h-[340px] lg:h-full lg:min-h-[340px] lg:items-end lg:justify-end">

              {/* IMAGE BACKGROUND GLOW */}
              <div aria-hidden="true" className="pointer-events-none absolute bottom-[-90px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#1765F5]/25 blur-[65px] lg:h-[360px] lg:w-[360px]" />

              {/* STUDENT IMAGE */}
              <div className="relative z-10 h-[285px] w-[285px] sm:h-[360px] sm:w-[360px] lg:absolute lg:bottom-0 lg:right-[-10px] lg:h-[390px] lg:w-[390px] xl:right-0 xl:h-[420px] xl:w-[420px]">
                <Image
                  src="/images/global-education-student.webp"
                  alt="Confident university student holding notebooks and showing a thumbs-up"
                  fill
                  sizes="(max-width: 640px) 285px, (max-width: 1023px) 360px, 420px"
                  className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
