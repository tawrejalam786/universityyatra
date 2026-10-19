"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Play,
  Pause,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Plane,
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

const MILESTONES = [
  {
    step: "01",
    title: "Profile Assessment & Shortlisting",
    desc: "Evaluate your GPA, budget, and academic goals to curate an ambitious, target, and safe university list.",
    icon: GraduationCap,
    time: "Month 1–2",
    accent: "#1765F5",
  },
  {
    step: "02",
    title: "SOP, LOR & Test Prep",
    desc: "Craft compelling Statements of Purpose, secure faculty recommendations, and finalize test scores (GRE/GMAT/IELTS/TOEFL).",
    icon: FileCheck2,
    time: "Month 3–4",
    accent: "#5D93F8",
  },
  {
    step: "03",
    title: "Application Filing & I-20 Form",
    desc: "Submit applications before university deadlines, track admission offers, and receive your official Form I-20.",
    icon: CheckCircle2,
    time: "Month 5–6",
    accent: "#047857",
  },
  {
    step: "04",
    title: "F-1 Visa Interview & Pre-Departure",
    desc: "Pay SEVIS fee, submit DS-160, attend 1-on-1 mock visa interviews, and organize foreign exchange and flight booking.",
    icon: Plane,
    time: "Month 7–8",
    accent: "#7C3AED",
  },
];

export default function AdmissionGuide() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="admission-guide" className="relative w-full overflow-hidden bg-[#FAF8F5] py-6 sm:py-8 md:py-9">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-[350px] w-[350px] rounded-full bg-[#1765F5]/[0.03] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[#5D93F8]/[0.03] blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-3.5 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-5 max-w-2xl text-center sm:mb-7">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-1.5 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1765F5] sm:text-[12px]"
          >
            STEP-BY-STEP ROADMAP
          </motion.span>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] md:text-[36px]"
          >
            USA Admission <span className="text-[#1765F5]">Guide</span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-[#526B8C] sm:text-[14px]"
          >
            From university shortlisting to your final F-1 visa stamp, watch our video walkthrough and explore the complete application roadmap.
          </motion.p>
        </div>

        {/* 2-Column Layout: Video on Left, Roadmap Steps on Right */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left: Video Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-black/10 bg-slate-950 shadow-[0_16px_36px_rgba(12,51,123,0.15)]">
              {/* Actual Video Element */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <video
                  ref={videoRef}
                  src="/videos/study-in-usa-hero.mp4"
                  playsInline
                  loop
                  muted
                  className="h-full w-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Video Overlay Vignette */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 transition-opacity duration-300 ${
                    isPlaying ? "opacity-40 hover:opacity-80" : "opacity-90"
                  }`}
                />

                {/* Top Badge: Walkthrough duration & verified guide */}
                <div className="absolute left-3.5 top-3.5 z-20 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-[#0C337B] shadow-md backdrop-blur-md">
                    <ShieldCheck size={13} className="text-[#1765F5]" />
                    Verified US Admission Guide
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[9.5px] font-semibold text-white/90 backdrop-blur-md">
                    <Clock size={11} />
                    4:30 Min
                  </span>
                </div>

                {/* Center Play / Pause Floating Trigger */}
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="absolute left-1/2 top-1/2 z-30 flex h-14 w-14 sm:h-16 sm:w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#1765F5]/90 text-white shadow-[0_10px_30px_rgba(23,101,245,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#1047AC] hover:shadow-[0_14px_40px_rgba(23,101,245,0.6)]"
                >
                  {isPlaying ? (
                    <Pause size={24} className="fill-current" />
                  ) : (
                    <Play size={24} className="translate-x-0.5 fill-current" />
                  )}
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-3.5 sm:p-5 text-white">
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#93C5FD]">
                    Official Video Briefing
                  </p>
                  <h3 className="text-[14px] sm:text-[17px] font-extrabold tracking-tight text-white drop-shadow-sm">
                    How Indian Students Secure US University Admissions & Visas
                  </h3>
                  <p className="mt-1 line-clamp-1 text-[11px] text-white/75 sm:text-[12px]">
                    Step-by-step guidance on timelines, documents, and interview preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Interactive Roadmap Milestones (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3">
            {MILESTONES.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeStep === index;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[15px] sm:rounded-[18px] border p-3 sm:p-3.5 transition-all duration-200 ${
                    isSelected
                      ? "border-[#1765F5] bg-white shadow-[0_8px_24px_rgba(23,101,245,0.1)]"
                      : "border-black/[0.08] bg-white/70 hover:border-[#1765F5]/50 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Step Icon / Number */}
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-[12px] font-extrabold transition-colors duration-200"
                      style={{
                        backgroundColor: isSelected ? `${item.accent}15` : "#F1F5F9",
                        color: isSelected ? item.accent : "#64748B",
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Step Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1765F5]">
                          Step {item.step} • {item.time}
                        </span>
                      </div>
                      <h4 className="mt-0.5 text-[13px] sm:text-[14px] font-bold text-[#0C337B] leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[11.5px] sm:text-[12px] leading-relaxed text-[#526B8C]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Mini CTA */}
            <div className="mt-1 flex items-center justify-between rounded-xl bg-white/80 border border-[#1765F5]/20 px-3.5 py-2.5 shadow-sm">
              <span className="text-[12px] font-semibold text-[#0C337B]">
                Need help with your 2025–26 application?
              </span>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("usa-faq") || document.querySelector("footer");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#0C337B] px-3.5 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#1765F5]"
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
