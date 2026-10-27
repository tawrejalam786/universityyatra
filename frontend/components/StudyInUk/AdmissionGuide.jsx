
"use client";

import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Play,
  Pause,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Plane,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

/* ==========================================
   UK ADMISSION MILESTONES
   MULTICOLOR CARD BACKGROUNDS
========================================== */

const MILESTONES = [
  {
    step: "01",
    title: "Profile Assessment & Shortlisting",
    desc: "Evaluate your GPA, budget, and academic goals to curate an ambitious, target, and safe university list.",
    icon: GraduationCap,
    time: "Month 1–2",
    accent: "#7051D8",
    textColor: "#FFFFFF",
    mutedText: "rgba(255,255,255,0.88)",
    innerBg: "rgba(47,27,112,0.20)",
    iconBg: "rgba(255,255,255,0.18)",
  },
  {
    step: "02",
    title: "SOP, LOR & Test Prep",
    desc: "Craft compelling Statements of Purpose, secure faculty recommendations, and finalize test scores (GRE/GMAT/IELTS/TOEFL).",
    icon: FileCheck2,
    time: "Month 3–4",
    accent: "#E72987",
    textColor: "#FFFFFF",
    mutedText: "rgba(255,255,255,0.88)",
    innerBg: "rgba(125,10,65,0.18)",
    iconBg: "rgba(255,255,255,0.18)",
  },
  {
    step: "03",
    title: "Application Filing & I-20 Form",
    desc: "Submit applications before university deadlines, track admission offers, and receive your official Form I-20.",
    icon: CheckCircle2,
    time: "Month 5–6",
    accent: "#FFC72C",
    textColor: "#102440",
    mutedText: "rgba(16,36,64,0.83)",
    innerBg: "rgba(127,82,0,0.12)",
    iconBg: "rgba(255,255,255,0.34)",
  },
  {
    step: "04",
    title: "F-1 Visa Interview & Pre-Departure",
    desc: "Pay SEVIS fee, submit DS-160, attend 1-on-1 mock visa interviews, and organize foreign exchange and flight booking.",
    icon: Plane,
    time: "Month 7–8",
    accent: "#13B8AD",
    textColor: "#FFFFFF",
    mutedText: "rgba(255,255,255,0.9)",
    innerBg: "rgba(0,81,79,0.19)",
    iconBg: "rgba(255,255,255,0.19)",
  },
];

/* ==========================================
   MAIN ADMISSION GUIDE COMPONENT
========================================== */

export default function AdmissionGuide() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  /* =====================================
      VIDEO PLAY / PAUSE
  ===================================== */

  const handleTogglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (!video.paused) {
      video.pause();
      return;
    }

    try {
      await video.play();
    } catch (error) {
      console.error("Unable to play video:", error);
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="admission-guide"
      className="relative w-full overflow-hidden bg-[#06162F] py-8 sm:py-10 md:py-12"
    >

      {/* =====================================
          DARK NAVY BACKGROUND DECORATIONS
      ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[180px] top-[12%] h-[430px] w-[430px] rounded-full border border-[#1765F5]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[120px] top-[19%] h-[310px] w-[310px] rounded-full border border-[#1765F5]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#7051D8]/[0.06] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[20%] h-[300px] w-[300px] rounded-full bg-[#1765F5]/[0.05] blur-[100px]"
      />

      {/* =====================================
          MAIN CONTENT CONTAINER
      ===================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-3.5 sm:px-5 lg:px-6">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">

          {/* SMALL LABEL */}

          <motion.span
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 10 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#A2C1FB] sm:text-[12px]"
          >
            STEP-BY-STEP ROADMAP
          </motion.span>

          {/* MAIN HEADING */}

          <motion.h2
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 14 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-[32px] md:text-[36px]"
          >
            UK Admission{" "}
            <span className="text-[#83B3FF]">
              Guide
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 14 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-[#B8C9DF] sm:text-[14px]"
          >
            From university shortlisting to your final F-1 visa stamp,
            watch our video walkthrough and explore the complete
            application roadmap.
          </motion.p>

        </div>

        {/* =====================================
            TWO-COLUMN LAYOUT

            LEFT: VIDEO
            RIGHT: MULTICOLOR ROADMAP
        ===================================== */}

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">

          {/* =====================================
              LEFT SIDE VIDEO SHOWCASE
          ===================================== */}

          <div className="min-w-0 lg:col-span-7">

            <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-950 shadow-[0_16px_36px_rgba(0,0,0,0.25)] sm:rounded-[24px]">

              {/* VIDEO CONTAINER */}

              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">

                <video
                  ref={videoRef}
                  src="/videos/study-in-usa-hero.mp4"
                  playsInline
                  loop
                  muted
                  preload="metadata"
                  className="h-full w-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* VIDEO VIGNETTE */}

                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 transition-opacity duration-300 ${
                    isPlaying
                      ? "opacity-40"
                      : "opacity-90"
                  }`}
                />

                {/* =====================================
                    TOP VIDEO BADGES
                ===================================== */}

                <div className="absolute left-3.5 top-3.5 z-20 flex max-w-[calc(100%-28px)] flex-wrap items-center gap-2">

                  {/* VERIFIED BADGE */}

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-[#0C337B] shadow-md backdrop-blur-md">

                    <ShieldCheck
                      size={13}
                      className="shrink-0 text-[#1765F5]"
                    />

                    Verified US Admission Guide
                  </span>

                  {/* VIDEO DURATION */}

                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[9.5px] font-semibold text-white/90 backdrop-blur-md">

                    <Clock size={11} />

                    4:30 Min
                  </span>

                </div>

                {/* =====================================
                    VIDEO PLAY / PAUSE BUTTON
                ===================================== */}

                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={
                    isPlaying
                      ? "Pause video"
                      : "Play video"
                  }
                  className="absolute left-1/2 top-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#1765F5]/90 text-white shadow-[0_10px_30px_rgba(23,101,245,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#1047AC] hover:shadow-[0_14px_40px_rgba(23,101,245,0.6)] sm:h-16 sm:w-16"
                >

                  {isPlaying ? (
                    <Pause
                      size={24}
                      className="fill-current"
                    />
                  ) : (
                    <Play
                      size={24}
                      className="translate-x-0.5 fill-current"
                    />
                  )}

                </button>

                {/* =====================================
                    VIDEO BOTTOM CONTENT
                ===================================== */}

                <div className="absolute inset-x-0 bottom-0 z-20 p-3.5 text-white sm:p-5">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#93C5FD] sm:text-[11px]">
                    Official Video Briefing
                  </p>

                  <h3 className="text-[14px] font-extrabold tracking-tight text-white drop-shadow-sm sm:text-[17px]">
                    How Indian Students Secure US University Admissions
                    & Visas
                  </h3>

                  <p className="mt-1 line-clamp-1 text-[11px] text-white/75 sm:text-[12px]">
                    Step-by-step guidance on timelines, documents,
                    and interview preparation.
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT SIDE
              4 MULTICOLOR ROADMAP CARDS
          ===================================== */}

          <div className="flex min-w-0 flex-col gap-2.5 sm:gap-3 lg:col-span-5">

            {MILESTONES.map((item, index) => {
              const Icon = item.icon;

              const isSelected = activeStep === index;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-pressed={isSelected}
                  style={{
                    backgroundColor: item.accent,
                    color: item.textColor,
                  }}
                  className={`group relative w-full cursor-pointer overflow-hidden rounded-[17px] border p-3.5 text-left transition-all duration-300 sm:rounded-[20px] sm:p-4 ${
                    isSelected
                      ? "border-white/70 shadow-[0_12px_28px_rgba(0,0,0,0.20)] ring-2 ring-white/30"
                      : "border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.10)] hover:border-white/35 hover:shadow-[0_10px_25px_rgba(0,0,0,0.16)]"
                  }`}
                >

                  {/* BACKGROUND DECORATION */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-14 h-[150px] w-[150px] rounded-full border border-white/20"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-8 h-[105px] w-[105px] rounded-full bg-white/10"
                  />

                  {/* =====================================
                      CARD CONTENT
                  ===================================== */}

                  <div className="relative z-10 flex items-start gap-3">

                    {/* STEP ICON */}

                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11"
                      style={{
                        backgroundColor: item.iconBg,
                        color: item.textColor,
                      }}
                    >
                      <Icon
                        size={20}
                        strokeWidth={2.2}
                      />
                    </div>

                    {/* STEP CONTENT */}

                    <div className="min-w-0 flex-1">

                      {/* STEP NUMBER + TIME */}

                      <div className="mb-1 flex flex-wrap items-center gap-1.5">

                        <span
                          className="text-[10px] font-extrabold uppercase tracking-[0.09em]"
                          style={{
                            color: item.textColor,
                          }}
                        >
                          Step {item.step}
                        </span>

                        <span
                          className="text-[10px] font-semibold"
                          style={{
                            color: item.mutedText,
                          }}
                        >
                          • {item.time}
                        </span>

                      </div>

                      {/* CARD TITLE */}

                      <h4
                        className="text-[13px] font-extrabold leading-snug sm:text-[14px]"
                        style={{
                          color: item.textColor,
                        }}
                      >
                        {item.title}
                      </h4>

                      {/* CARD DESCRIPTION */}

                      <p
                        className="mt-1.5 text-[11.5px] leading-[1.55] sm:text-[12px]"
                        style={{
                          color: item.mutedText,
                        }}
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  {/* =====================================
                      CARD INNER COLOR STRIP
                  ===================================== */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-[4px] transition-opacity duration-300"
                    style={{
                      backgroundColor: item.innerBg,
                      opacity: isSelected ? 1 : 0.6,
                    }}
                  />

                </button>
              );
            })}

            {/* =====================================
                BOTTOM MINI CTA
            ===================================== */}

            <div className="mt-1 flex flex-col items-start justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.08] px-3.5 py-3 shadow-sm sm:flex-row sm:items-center sm:gap-2">

              {/* CTA TEXT */}

              <span className="text-[12px] font-semibold text-white">
                Need help with your 2025–26 application?
              </span>

              {/* CTA BUTTON */}

              <button
                type="button"
                onClick={() => {
                  const el =
                    document.getElementById("usa-faq") ||
                    document.querySelector("footer");

                  el?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#1765F5] px-3.5 py-2 text-[11px] font-bold text-white transition-all duration-300 hover:bg-[#397EF7]"
              >
                <span>Free Plan</span>

                <ArrowRight size={12} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
