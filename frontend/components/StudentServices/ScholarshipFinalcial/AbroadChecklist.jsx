
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ==========================================
   SCHOLARSHIP CHECKLIST CONTENT
   Images: /public/images/abroad-checklist/
========================================== */

const QUESTIONS = [
  {
    text: "Not Sure Which Scholarships You Qualify For?",
    image: "/images/abroad-checklist/01-apply-f.jpg",
    alt: "Student exploring scholarship opportunities on a laptop",
  },
  {
    text: "Confused About Scholarship Eligibility?",
    image: "/images/abroad-checklist/02-requirements-f.jpg",
    alt: "Student reviewing scholarship eligibility requirements",
  },
  {
    text: "Finding Scholarships That Cover All Your Expenses?",
    image: "/images/abroad-checklist/03-sop.jpg",
    alt: "Student researching scholarship funding and financial aid",
  },
  {
    text: "Unsure How to Write Scholarship Essays?",
    image: "/images/abroad-checklist/04-documents.jpg",
    alt: "Student preparing a scholarship essay",
  },
  {
    text: "Struggling With Scholarship Documentation?",
    image: "/images/abroad-checklist/05-visa.jpg",
    alt: "Student organizing scholarship application documents",
  },
  {
    text: "Missing Deadlines or Application Requirements?",
    image: "/images/abroad-checklist/06-next-steps.jpg",
    alt: "Student checking scholarship deadlines and requirements",
  },
  {
    text: "Don't Know How to Apply for Scholarships?",
    image: "/images/abroad-checklist/07-pr.jpg",
    alt: "Student applying for scholarships online",
  },
];

const TOTAL = QUESTIONS.length;
const AUTOPLAY_MS = 2800;

const pad = (n) => String(n + 1).padStart(2, "0");

/* Shortest distance from the active item, wrapped to -3 ... 3 */

const wrapDistance = (i, active) => {
  let d = (((i - active) % TOTAL) + TOTAL) % TOTAL;
  if (d > 3) d -= TOTAL;
  return d;
};

/* ==========================================
   WHEEL SETTINGS
========================================== */

const WHEEL_DESKTOP = {
  h: 260,
  cx: -200,
  R: 270,
  step: 0.22,
};

const WHEEL_MOBILE = {
  h: 260,
  cx: -175,
  R: 235,
  step: 0.3,
};

/* ==========================================
   ARC WHEEL
========================================== */

function Wheel({
  cfg,
  idp,
  active,
  onSelect,
  className = "",
}) {
  const handleKeyDown = (e) => {
    const steps = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };

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
      aria-label="Scholarship support questions"
      onKeyDown={handleKeyDown}
      className={`relative overflow-hidden ${className}`}
      style={{ height: cfg.h }}
    >
      {/* Dashed Arc */}

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

        const x = (
          cfg.cx + cfg.R * Math.cos(angle) - 4
        ).toFixed(2);

        const y = (
          cfg.h / 2 + cfg.R * Math.sin(angle)
        ).toFixed(2);

        const rotate = (angle * 28).toFixed(2);

        const scale = d === 0 ? 1 : 0.72;

        const opacity =
          d === 0
            ? 1
            : Math.abs(d) === 1
            ? 0.5
            : Math.abs(d) === 2
            ? 0.2
            : 0;

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
            {/* Arc Dot */}

            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full bg-[#1765F5] transition-shadow duration-500 ${
                isActive
                  ? "shadow-[0_0_0_4px_rgba(23,101,245,0.2)]"
                  : ""
              }`}
            />

            {/* Number */}

            <span
              aria-hidden="true"
              className={`min-w-[1.6em] text-[26px] font-extrabold leading-none tracking-[-0.04em] tabular-nums transition-colors duration-500 lg:text-[38px] ${
                isActive
                  ? "text-[#1765F5]"
                  : "text-[#0C337B]"
              }`}
            >
              {pad(i)}
            </span>

            {/* Question */}

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

  const inView = useInView(sectionRef, {
    amount: 0.3,
  });

  const reduceMotion = useReducedMotion();

  /* Auto Slide */

  useEffect(() => {
    if (paused || reduceMotion || !inView) return;

    const timer = setInterval(() => {
      setActive((i) => (i + 1) % TOTAL);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused, reduceMotion, inView]);

  const resumeLater = () => {
    setTimeout(() => setPaused(false), 2500);
  };

  return (
    <section
      ref={sectionRef}
      id="abroad-checklist"
      aria-labelledby="abroad-checklist-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-white to-[#EEF4FF] py-10 lg:py-12"
    >
      {/* Background Shapes */}

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
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
          className="mx-auto mb-3 max-w-[900px] text-center sm:mb-4"
        >
          {/* Eyebrow */}

          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
            LOOKING FOR SCHOLARSHIP SUPPORT?
          </p>

          {/* H1 */}

          <h2
            id="abroad-checklist-heading"
            className="text-balance text-[26px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] lg:text-[38px]"
          >
            Scholarships Are Available.{" "}
            <span className="text-[#1765F5]">
              Finding the Right One Is the Challenge.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-2.5 max-w-[820px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
            Applying for scholarships requires more than
            finding an opportunity. You need to understand
            eligibility, funding criteria, deadlines and
            application requirements.
          </p>
        </motion.div>

        {/* =====================================
            WHEEL + IMAGE
            Mobile: Wheel first, image below
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

          {/* IMAGE */}

          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">

            {/* Background Offset Shape */}

            <span
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 -z-10 h-[88%] w-[88%] rounded-[26px] bg-[#DCEAFF]"
            />

            <div className="relative h-[190px] overflow-hidden rounded-[24px] bg-[#A2C1FB] shadow-[0_18px_40px_-14px_rgba(23,101,245,0.4)] sm:h-[240px] lg:h-[250px]">

              {/* Active Question Image */}

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
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                );
              })}

              {/* Bottom Shade */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0C337B]/45 to-transparent"
              />

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
