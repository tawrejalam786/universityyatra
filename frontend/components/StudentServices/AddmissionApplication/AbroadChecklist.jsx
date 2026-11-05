"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ==========================================
   CONTENT (7 questions, one image for each)
   Put the images in /public/images/abroad-checklist/
========================================== */

const QUESTIONS = [
  {
    text: "Not Sure How To Apply To Universities Abroad ?",
    image: "/images/abroad-checklist/01-apply-f.jpg",
    alt: "Student exploring university applications on a laptop",
  },
  {
    text: "Confused About Admission & Scholarship Requirements?",
    image: "/images/abroad-checklist/02-requirements-f.jpg",
    alt: "Student reading admission and scholarship requirements",
  },
  {
    text: "Struggling With SOPs, LORs & Application Essays?",
    image: "/images/abroad-checklist/03-sop.jpg",
    alt: "Student writing a statement of purpose at a desk",
  },
  {
    text: "Documentation Is Getting Complicated?",
    image: "/images/abroad-checklist/04-documents.jpg",
    alt: "Passport, transcripts and a documents checklist",
  },
  {
    text: "Worried About Your Student Visa Application?",
    image: "/images/abroad-checklist/05-visa.jpg",
    alt: "Student preparing a student visa application",
  },
  {
    text: "Got Your Admission, But Stuck on the Next Steps?",
    image: "/images/abroad-checklist/06-next-steps.jpg",
    alt: "Student holding an admission letter",
  },
  {
    text: "Don't Know Where to Start With PR or Migration?",
    image: "/images/abroad-checklist/07-pr.jpg",
    alt: "Globe and passport representing migration pathways",
  },
];

const TOTAL = QUESTIONS.length;
const AUTOPLAY_MS = 2800;

const pad = (n) => String(n + 1).padStart(2, "0");

// shortest distance from the active item, wrapped to -3 ... 3 (7 items)
const wrapDistance = (i, active) => {
  let d = (((i - active) % TOTAL) + TOTAL) % TOTAL;
  if (d > 3) d -= TOTAL;
  return d;
};

/* ==========================================
   WHEEL SETTINGS
   h    : height of the wheel area (px)
   cx   : x of the circle centre (negative = off screen, left)
   R    : radius of the arc
   step : angle between two questions (radians)
========================================== */

const WHEEL_DESKTOP = { h: 260, cx: -200, R: 270, step: 0.22 };
const WHEEL_MOBILE = { h: 260, cx: -175, R: 235, step: 0.3 };

/* ==========================================
   ARC WHEEL
========================================== */

function Wheel({ cfg, idp, active, onSelect, className = "" }) {
  const handleKeyDown = (e) => {
    const steps = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = steps[e.key];

    if (!step) return;

    e.preventDefault();

    const next = (active + step + TOTAL) % TOTAL;

    onSelect(next);
    document.getElementById(`${idp}-q-${next}`)?.focus();
  };

  return (
    <div
      role="group"
      aria-label="Abroad checklist questions"
      onKeyDown={handleKeyDown}
      className={`relative overflow-hidden ${className}`}
      style={{ height: cfg.h }}
    >
      {/* dashed arc */}
      <svg
        aria-hidden="true"
        width="100%"
        height={cfg.h}
        className="pointer-events-none absolute inset-0"
      >
        <circle
          cx={cfg.cx}
          cy={cfg.h / 2}
          r={cfg.R}
          fill="none"
          stroke="#A2C1FB"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>

      {QUESTIONS.map((q, i) => {
        const d = wrapDistance(i, active);
        const angle = d * cfg.step;
        const x = (cfg.cx + cfg.R * Math.cos(angle) - 4).toFixed(2);
        const y = (cfg.h / 2 + cfg.R * Math.sin(angle)).toFixed(2);
        const rotate = (angle * 28).toFixed(2);
        const scale = d === 0 ? 1 : 0.72;
        const opacity =
          d === 0 ? 1 : Math.abs(d) === 1 ? 0.5 : Math.abs(d) === 2 ? 0.2 : 0;
        const isActive = d === 0;

        return (
          <button
            key={q.text}
            id={`${idp}-q-${i}`}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Question ${i + 1}: ${q.text}`}
            aria-current={isActive ? "true" : undefined}
            tabIndex={isActive ? 0 : -1}
            className={`absolute left-0 top-0 flex origin-left items-center gap-2 text-left transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 motion-reduce:transition-none lg:gap-3 ${
              Math.abs(d) >= 3 ? "pointer-events-none" : ""
            }`}
            style={{
              transform: `translate(${x}px, calc(${y}px - 50%)) rotate(${rotate}deg) scale(${scale})`,
              opacity,
            }}
          >
            {/* dot on the arc */}
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full bg-[#1765F5] transition-shadow duration-500 ${
                isActive ? "shadow-[0_0_0_4px_rgba(23,101,245,0.2)]" : ""
              }`}
            />

            {/* number */}
            <span
              aria-hidden="true"
              className={`min-w-[1.6em] text-[26px] font-extrabold leading-none tracking-[-0.04em] tabular-nums transition-colors duration-500 lg:text-[38px] ${
                isActive ? "text-[#1765F5]" : "text-[#0C337B]"
              }`}
            >
              {pad(i)}
            </span>

            {/* question */}
            <span
              className={`max-w-[170px] text-[12.5px] leading-[1.3] transition-colors duration-500 sm:max-w-[300px] lg:max-w-[320px] lg:text-[15px] ${
                isActive
                  ? "font-bold text-[#0C337B]"
                  : "font-semibold text-[#526B8C]"
              }`}
            >
              {q.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ==========================================
   MAIN SECTION
========================================== */

export default function AbroadChecklist() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  // auto slide: only while visible, not hovered / touched, and motion is allowed
  useEffect(() => {
    if (paused || reduceMotion || !inView) return;

    const timer = setInterval(() => {
      setActive((i) => (i + 1) % TOTAL);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused, reduceMotion, inView]);

  const resumeLater = () => setTimeout(() => setPaused(false), 2500);

  return (
    <section
      ref={sectionRef}
      id="abroad-checklist"
      aria-labelledby="abroad-checklist-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-white to-[#EEF4FF] py-10 lg:py-12"
    >
      {/* soft background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-64 w-64 rounded-full bg-[#DCEAFF]/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#DCEAFF]/70"
      />

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================
            HEADING
        ===================================== */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="mx-auto mb-3 max-w-[900px] text-center sm:mb-4"
        >
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
            Planning to move abroad?
          </p>

          <h2
            id="abroad-checklist-heading"
            className="text-balance text-[26px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] lg:text-[38px]"
          >
            The Abroad Checklist Is{" "}
            <span className="text-[#1765F5]">Getting Out of Hand?</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[820px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
            Moving abroad requires more than securing admission. From selecting
            the right university and preparing applications to arranging
            documentation, meeting visa requirements and understanding
            immigration pathways, every stage needs careful planning.
          </p>
        </motion.div>

        {/* =====================================
            WHEEL (left) + IMAGE (right)
            mobile: wheel first, image below
        ===================================== */}
        <div
          className="grid items-center gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={resumeLater}
          onTouchCancel={resumeLater}
        >
          {/* DESKTOP WHEEL */}
          <Wheel
            cfg={WHEEL_DESKTOP}
            idp="d"
            active={active}
            onSelect={setActive}
            className="hidden lg:block"
          />

          {/* MOBILE / TABLET WHEEL */}
          <Wheel
            cfg={WHEEL_MOBILE}
            idp="m"
            active={active}
            onSelect={setActive}
            className="lg:hidden"
          />

          {/* IMAGE: all 7 stay mounted, the active one fades in */}
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            {/* offset shape behind the photo */}
            <span
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 -z-10 h-[88%] w-[88%] rounded-[26px] bg-[#DCEAFF]"
            />

            <div className="relative h-[190px] overflow-hidden rounded-[24px] bg-[#A2C1FB] shadow-[0_18px_40px_-14px_rgba(23,101,245,0.4)] sm:h-[240px] lg:h-[250px]">
            {QUESTIONS.map((q, i) => {
                const isActive = i === active;

                return (
                  <Image
                    key={q.image}
                    src={q.image}
                    alt={isActive ? q.alt : ""}
                    aria-hidden={!isActive}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1023px) 92vw, 460px"
                    className={`object-cover object-top transition-all duration-700 ease-out motion-reduce:transition-none ${
                      isActive ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                );
              })}

              {/* soft bottom shade so the chip is always readable */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0C337B]/45 to-transparent"
              />

              {/* counter chip */}
              {/* <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold tracking-[0.06em] text-[#1765F5] shadow-sm">
                {pad(active)} / {pad(TOTAL - 1)}
              </span> */}
            </div>
          </div>
        </div>

        {/* =====================================
            CLICKABLE PROGRESS BARS
        ===================================== */}
        <div className="mx-auto mt-3 flex max-w-[360px] items-center gap-1.5">
          {QUESTIONS.map((q, i) => (
            <button
              key={q.text}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to question ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className="group flex-1 py-1.5"
            >
              <span
                className={`block h-[3px] rounded-full transition-colors duration-300 ${
                  i === active
                    ? "bg-[#1765F5]"
                    : "bg-[#B8CEEE] group-hover:bg-[#8FB2EC]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}