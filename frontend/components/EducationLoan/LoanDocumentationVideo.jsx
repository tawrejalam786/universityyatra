"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ==========================================
   CONFIG: change video, poster and links here
========================================== */

const VIDEO = {
  src: "/videos/education-loan-guide.mp4",
  poster: "/images/loan/documentation-poster.webp",
  label: "Education loan documentation & eligibility guide",
};

// Four topics taken from the paragraph.
// "start" = second of the video where that topic begins (null = just play from the start).
const STAGES = [
  { label: "Documents required", start: null },
  { label: "Eligibility criteria", start: null },
  { label: "Loan amount & repayment", start: null },
  { label: "Interest & conditions", start: null },
];

const PRIMARY_HREF = "#assessment";
const WHATSAPP_HREF =
  "https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20to%20know%20more%20about%20the%20documents%20and%20eligibility%20for%20an%20education%20loan.";

/* ==========================================
   MAIN SECTION
========================================== */

export default function LoanDocumentationVideo() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = (startAt = null) => {
    const video = videoRef.current;

    if (!video) return;

    setPlaying(true);

    if (typeof startAt === "number") {
      video.currentTime = startAt;
    }

    video.play().catch(() => {
      // browser blocked playback: the native controls are shown, so the user can press play
    });
  };

  const fade = (delay = 0, y = 16) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: reduceMotion ? 0 : 0.5, delay, ease: "easeOut" },
  });

  return (
    <section
      id="loan-documentation-eligibility"
      aria-labelledby="loan-documentation-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-white to-[#EEF4FF] py-10 lg:py-12"
    >
      {/* soft background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-[#DCEAFF]/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#DCEAFF]/70"
      />

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* mobile : heading, video, CTAs
            desktop: text + CTAs on the left, video on the right */}
        <div className="grid items-center gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-0">
          {/* ===== HEADING ===== */}
          <motion.div
            {...fade(0)}
            className="order-1 text-center lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left"
          >
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
              Education Loan Documentation &amp; Eligibility
            </p>

            <h2
              id="loan-documentation-heading"
              className="text-balance text-[26px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] lg:text-[36px]"
            >
              Understand the Documents &amp; Requirements for{" "}
              <span className="text-[#1765F5]">Your Education Loan.</span>
            </h2>

            <p className="mx-auto mt-2.5 max-w-[620px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px] lg:mx-0">
              Watch our guide to understand the documents required, eligibility
              criteria, loan amounts, repayment terms, interest options and
              important conditions involved in applying for an education loan.
            </p>
          </motion.div>

          {/* ===== VIDEO ===== */}
          <motion.div
            {...fade(0.1, 22)}
            className="relative order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            {/* offset shape behind the video */}
            <span
              aria-hidden="true"
              className="absolute -bottom-2.5 -right-2.5 -z-10 h-[92%] w-[92%] rounded-[28px] bg-[#C9DCFA]"
            />

            <div className="relative aspect-video w-full overflow-hidden rounded-[24px] bg-[#0C337B] shadow-[0_22px_50px_-18px_rgba(12,51,123,0.6)] lg:rounded-[28px]">
              <video
                ref={videoRef}
                poster={VIDEO.poster}
                preload="metadata"
                playsInline
                controls={playing}
                onPlay={() => setPlaying(true)}
                onEnded={() => setPlaying(false)}
                aria-label={VIDEO.label}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={VIDEO.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* PLAY OVERLAY (hidden once the video starts) */}
              {!playing && (
                <button
                  type="button"
                  onClick={() => handlePlay()}
                  aria-label={`Play video: ${VIDEO.label}`}
                  className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#0C337B]/60 via-[#0C337B]/10 to-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/70"
                >
                  <span className="relative flex h-[68px] w-[68px] items-center justify-center sm:h-[78px] sm:w-[78px]">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-white/60 motion-safe:animate-ping"
                    />
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white text-[#1765F5] shadow-[0_14px_34px_rgba(12,51,123,0.45)] transition-transform duration-300 group-hover:scale-110">
                      <Play size={28} strokeWidth={2.4} className="ml-1 fill-current" />
                    </span>
                  </span>

                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.04em] text-[#0C337B] shadow-sm sm:bottom-4 sm:left-4 sm:text-[12px]">
                    {VIDEO.label}
                  </span>
                </button>
              )}
            </div>
          </motion.div>

          {/* ===== TOPICS + CTAs ===== */}
          <motion.div
            {...fade(0.2)}
            className="order-3 flex flex-col items-center gap-4 lg:col-start-1 lg:row-start-2 lg:items-start lg:self-start lg:pt-5"
          >
            {/* topic chips: click to jump to that part of the video */}
            <ol className="m-0 flex list-none flex-wrap justify-center gap-1.5 p-0 lg:justify-start">
              {STAGES.map((stage, i) => (
                <li key={stage.label}>
                  <button
                    type="button"
                    onClick={() => handlePlay(stage.start)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#C9DCFA] bg-white px-2.5 py-1.5 text-[11px] font-bold text-[#0C337B] transition-colors hover:border-[#1765F5] hover:bg-[#EDF5FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 sm:text-[12px]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1765F5] text-[10px] font-extrabold text-white">
                      {i + 1}
                    </span>
                    {stage.label}
                  </button>
                </li>
              ))}
            </ol>

            {/* CTAs */}
            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
              <Link
                href={PRIMARY_HREF}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(23,101,245,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0C337B] hover:bg-[#0C337B]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.4}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] bg-white px-5 py-3 text-[13px] font-bold text-[#0C337B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px] fill-[#25D366] transition-colors group-hover:fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
                </svg>
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
