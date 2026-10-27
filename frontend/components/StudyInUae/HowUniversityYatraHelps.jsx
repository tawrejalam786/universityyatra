
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { helpItems } from "../StudyInUsa/helpItems";

const RADIUS = 38;

// Precalculate positions with fixed precision.
// This prevents server/client hydration mismatches.
const ringNodes = helpItems.map((h, i) => {
  const angle = ((-90 + i * (360 / helpItems.length)) * Math.PI) / 180;

  return {
    ...h,
    left: (50 + RADIUS * Math.cos(angle)).toFixed(4),
    top: (50 + RADIUS * Math.sin(angle)).toFixed(4),
  };
});

export default function HowItWorksRing() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const reduceMotion = useReducedMotion();

  const total = helpItems.length;
  const item = helpItems[active];

  // Autoplay
  useEffect(() => {
    if (paused || reduceMotion || total <= 1) return;

    const timer = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [paused, reduceMotion, total]);

  // Previous / Next
  const go = (step) => {
    setActive((i) => (i + step + total) % total);
  };

  return (
    <section aria-labelledby="ring-title" className="relative w-full overflow-hidden bg-[#F0F9FD] py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <span className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1765F5]">
              Your journey, our support
            </span>

            
<h2 id="ireland-help-title" className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#063B72] sm:text-[30px] lg:text-[34px]">
  How{" "}
  <span className="text-[#1765f5]">
    University Yatra<sup className="relative -top-2 ml-[1px] text-[10px] font-semibold sm:text-[15px]">™</sup>
  </span>{" "}
  Helps You
</h2>


            <p className="mt-2 max-w-[460px] text-[13px] leading-[1.65] text-[#526B8C]">
              From your first question to your study abroad journey, we guide
              you every step.
            </p>

            {/* ACTIVE STEP CARD */}
                        {/* ACTIVE STEP CARD */}
            <div
              className="relative mt-5 overflow-hidden rounded-2xl border p-4 shadow-[0_8px_24px_rgba(26,125,184,0.08)] transition-colors duration-500 sm:p-5"
              style={{
                backgroundColor: item.soft,
                borderColor: `${item.accent}33`,
              }}
              aria-live="polite"
            >
              {/* DECORATIVE ARC */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-[210px] w-[210px] rounded-full border transition-colors duration-500"
                style={{ borderColor: `${item.accent}26` }}
              />

              {/* BIG WATERMARK NUMBER (right corner) */}
              <AnimatePresence mode="wait" initial={false}>
=                <motion.span
                  key={`num-${item.number}`}
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="pointer-events-none absolute right-3 top-[28%] -translate-y-1/2 select-none text-[52px] font-black leading-none tracking-[-0.04em] sm:text-[62px]"
                  style={{
                    color: `${item.accent}26`,
                    textShadow: `0 6px 14px ${item.accent}1F`,
                  }}
                >
                  {String(item.number).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="relative z-10 flex items-start gap-3 pr-14 sm:pr-20"
                >
                  {/* ICON (same image as the ring step) */}
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 bg-white shadow-[0_6px_14px_rgba(6,59,114,0.14)]"
                    style={{ borderColor: item.accent }}
                  >
                    <span className="relative block h-8 w-8">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </span>
                  </span>

                  <div className="min-w-0">
                    <h3
                      className="text-[15px] font-bold"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.65] text-[#526B8C]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* PROGRESS AND NAVIGATION */}
              <div className="relative z-10 mt-4 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {helpItems.map((h, i) => (
                    <span
                      key={h.number}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === active ? 20 : 6,
                        backgroundColor:
                          i === active ? item.accent : `${item.accent}40`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous step"
                    className="flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-[0_4px_10px_rgba(6,59,114,0.1)] transition-transform hover:scale-105"
                    style={{ borderColor: `${item.accent}55`, color: item.accent }}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next step"
                    className="flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-[0_4px_10px_rgba(6,59,114,0.1)] transition-transform hover:scale-105"
                    style={{ borderColor: `${item.accent}55`, color: item.accent }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT RING */}
          <div
            className="relative mx-auto aspect-square w-full max-w-[380px] lg:max-w-[420px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            onTouchCancel={() => setPaused(false)}
          >
            {/* DASHED ORBIT */}
            <svg viewBox="0 0 100 100" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
              <circle
                cx="50"
                cy="50"
                r={RADIUS}
                fill="none"
                stroke="#A2C1FB"
                strokeWidth="0.5"
                strokeDasharray="1.6 1.6"
              />
            </svg>

            {/* CENTER ACTIVE STEP */}
            <div className="absolute inset-[27%] flex flex-col items-center justify-center rounded-full border border-[#D0EAF6] bg-white p-2 text-center shadow-[0_10px_30px_rgba(26,125,184,0.12)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.number}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative h-[56px] w-[56px] sm:h-[72px] sm:w-[72px]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="72px"
                      className="object-contain"
                    />
                  </div>

                  <span
                    className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.12em]"
                    style={{ color: item.accent }}
                  >
                    Step {item.number}
                  </span>

                  <span className="mt-0.5 text-[11px] font-bold leading-[1.25] text-[#0C337B] sm:text-[13px]">
                    {item.title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RING NODES */}
            {ringNodes.map((h, i) => {
              const isActive = i === active;

              return (
                <button
                  key={h.number}
                  type="button"
                  onClick={() => setActive(i)}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") {
                      setActive(i);
                    }
                  }}
                  aria-label={`Step ${h.number}: ${h.title}`}
                  aria-pressed={isActive}
                  style={{
                    left: `${h.left}%`,
                    top: `${h.top}%`,
                    backgroundColor: h.soft,
                    borderColor: isActive ? h.accent : "#FFFFFF",
                  }}
                  className={isActive ? "absolute z-20 aspect-square w-[17%] -translate-x-1/2 -translate-y-1/2 scale-[1.18] rounded-full border-[3px] shadow-[0_10px_24px_rgba(26,125,184,0.25)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50" : "absolute z-10 aspect-square w-[17%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] shadow-[0_6px_16px_rgba(26,125,184,0.12)] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50"}
                >
                  <span className="absolute inset-[16%]">
                    <Image
                      src={h.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </span>

                  <span
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#F0F9FD] text-[10px] font-extrabold text-white"
                    style={{ backgroundColor: h.accent }}
                  >
                    {h.number}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
