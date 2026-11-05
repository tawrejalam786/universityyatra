"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ==========================================
   6 CARDS
   dark  = colour at the outer end of the card
   light = lighter colour near the number circle
   dot   = number circle colour
========================================== */

const cards = [
  { id: "1", title: "Guidance Tailored to Your Profile", dark: "#1765F5", light: "#6FA3FF", dot: "#1765F5" },
  { id: "2", title: "Honest & Transparent Advice", dark: "#F58A1F", light: "#FFC27A", dot: "#FF9A3C" },
  { id: "3", title: "Course Selection with Job Market Focus", dark: "#10A89D", light: "#5BE3D2", dot: "#14B8AA" },
  { id: "4", title: "Planning Around Your Budget", dark: "#8654E6", light: "#C9A6FF", dot: "#9B6BF0" },
  { id: "5", title: "Indian & International Education Options", dark: "#F2704F", light: "#FFBFA8", dot: "#FF9068" },
  { id: "6", title: "Support Beyond Just Admissions", dark: "#1047AC", light: "#6FA3FF", dot: "#1765F5" },
];

/*
  SIZES (CSS variables, set on the <ol>)
  --h   : full height of one column
  --r   : radius of the round notch (= ring circle radius)
  --off : how far the circle centre sits inside the card edge
*/

function Card({ card, index, reduceMotion }) {
  // cards 1, 3, 5 are "up", cards 2, 4, 6 are "down"
  const isDown = index % 2 === 1;

  // real circular cut-out in the card edge facing the centre line
  const notch = isDown
    ? "radial-gradient(circle var(--r) at 50% var(--off), transparent calc(var(--r) - 0.5px), #000 var(--r))"
    : "radial-gradient(circle var(--r) at 50% calc(100% - var(--off)), transparent calc(var(--r) - 0.5px), #000 var(--r))";

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: "easeOut",
      }}
      className="group relative min-w-0"
      style={{ height: "var(--h)" }}
    >
      {/* CARD (with the round notch cut out) */}
      <div
        className={`absolute inset-x-0 flex flex-col items-center rounded-[18px] px-1.5 text-center text-white lg:rounded-[24px] lg:px-3 ${
          isDown
            ? "bottom-0 justify-end pb-3.5 lg:pb-5"
            : "top-0 justify-start pt-3.5 lg:pt-5"
        }`}
        style={{
          height: "calc(var(--h) * 0.606)",
          background: isDown
            ? `linear-gradient(0deg, ${card.dark} 0%, ${card.light} 100%)`
            : `linear-gradient(180deg, ${card.dark} 0%, ${card.light} 100%)`,
          WebkitMaskImage: notch,
          maskImage: notch,
        }}
      >
        <h3 className="max-w-[170px] text-[12px] font-bold leading-[1.25] tracking-[-0.01em] sm:text-[13px] lg:text-[15px] lg:leading-[1.3]">
          {card.title}
        </h3>
      </div>

      {/* NUMBER CIRCLE on the centre line: white ring + gradient circle */}
      <span
        className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(12,51,123,0.16)] transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "calc(var(--r) * 2)",
          height: "calc(var(--r) * 2)",
        }}
      >
        <span
          className="relative flex items-center justify-center rounded-full text-[22px] font-extrabold text-white lg:text-[30px]"
          style={{
            width: "calc(var(--r) * 2 - 26px)",
            height: "calc(var(--r) * 2 - 26px)",
            background: `radial-gradient(circle at 30% 22%, ${card.light} 0%, ${card.dot} 72%)`,
            boxShadow: `0 6px 14px ${card.dot}59`,
          }}
        >
          {/* glossy highlight */}
          <span
            aria-hidden="true"
            className="absolute left-[18%] top-[10%] h-[26%] w-[46%] -rotate-[28deg] rounded-full bg-white/35 blur-[1px]"
          />
          <span className="relative">{card.id}</span>
        </span>
      </span>
    </motion.li>
  );
}

export default function WhyUniversityYatra() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-university-yatra"
      aria-labelledby="why-university-yatra-heading"
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

      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="mx-auto mb-5 max-w-[860px] text-center sm:mb-6"
        >
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
            Why University Yatra?
          </p>

          <h2
            id="why-university-yatra-heading"
            className="text-balance text-[26px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] lg:text-[38px]"
          >
            More Than Guidance.{" "}
            <span className="text-[#1765F5]">An Informed Way Forward.</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[760px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
            Your academic journey comes with its own questions and
            possibilities. By bringing the right guidance, relevant options and
            practical insights we help you make sense of your options and move
            forward with greater clarity.
          </p>
        </motion.div>

        {/* 6 COLUMNS
            mobile / tablet : 3 per row (two mini zig-zag rows)
            desktop         : 6 in one row, exactly like the reference */}
        <ol className="m-0 mx-auto grid max-w-[1000px] list-none grid-cols-3 gap-x-1.5 gap-y-4 p-0 [--h:240px] [--off:24px] [--r:36px] lg:grid-cols-6 lg:gap-x-2 lg:gap-y-0 lg:[--h:320px] lg:[--off:34px] lg:[--r:52px]">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}