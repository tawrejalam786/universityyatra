"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Rocket,
  SlidersHorizontal,
  MapPin,
  Flag,
} from "lucide-react";

const values = [
  {
    title: "Advice Before Assumptions",
    description:
      "We begin by understanding the student, not selling a destination. Every recommendation should reflect individual goals, academic realities, and informed judgement.",
    Icon: Lightbulb,
  },
  {
    title: "Clarity Over Promises",
    description:
      "We communicate requirements, costs, processes, and possible outcomes honestly, helping students make decisions with a realistic understanding of what lies ahead.",
    Icon: ShieldCheck,
  },
  {
    title: "Ambition with Direction",
    description:
      "We help students connect global aspirations with suitable academic pathways, ensuring their choices are guided by purpose rather than destination alone.",
    Icon: Rocket,
  },
  {
    title: "No One-Size-Fits-All",
    description:
      "We recognise that every student has a different starting point. Our guidance adapts to individual profiles, priorities, circumstances, and long-term goals.",
    Icon: SlidersHorizontal,
  },
];

/* Road shapes (viewBox width = 1000, height = `height`).
   Nodes sit exactly on the path at column centres. */
const DESKTOP_ROAD = {
  height: 120,
  d: "M0 80 L125 80 C250 80 250 30 375 30 C500 30 500 80 625 80 C750 80 750 30 875 30 L1000 30",
  pts: [
    { x: 12.5, y: 80 },
    { x: 37.5, y: 30 },
    { x: 62.5, y: 80 },
    { x: 87.5, y: 30 },
  ],
  startY: 80,
  endY: 30,
};

const TABLET_ROAD = {
  height: 100,
  d: "M0 70 L250 70 C500 70 500 30 750 30 L1000 30",
  pts: [
    { x: 25, y: 70 },
    { x: 75, y: 30 },
  ],
  startY: 70,
  endY: 30,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

/* ---------- Card ---------- */
function ValueCard({ item, number }) {
  const { title, description, Icon } = item;

  return (
    <div className="group relative w-full overflow-hidden rounded-[22px] border border-[#DCE7FB] bg-white p-4 shadow-[0_12px_30px_rgba(12,51,123,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1765F5]/40 hover:shadow-[0_18px_40px_rgba(23,101,245,0.16)] sm:p-5">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1 text-[46px] font-black leading-none text-[#1765F5]/[0.07]"
      >
        0{number}
      </span>

      <div className="relative flex items-center gap-3 lg:block">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF1FE] text-[#1765F5] transition-colors duration-300 group-hover:bg-[#1765F5] group-hover:text-white">
          <Icon size={20} strokeWidth={1.9} />
        </div>
        <h3 className="text-[16px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#0C337B] sm:text-[17px] lg:mt-3">
          {title}
        </h3>
      </div>

      <p className="relative mt-2.5 text-[13px] leading-[1.65] text-[#53647C]">
        {description}
      </p>
    </div>
  );
}

/* ---------- One road + its cards (used for desktop and tablet) ---------- */
function RouteRow({ items, offset = 0, cols, road, showStart, showEnd }) {
  const reduce = useReducedMotion();
  const { height, d, pts, startY, endY } = road;

  return (
    <div>
      <div className="relative" style={{ height }}>
        {/* Road */}
        <svg
          viewBox={`0 0 1000 ${height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <path
            d={d}
            fill="none"
            stroke="#E3EDFF"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d={d}
            fill="none"
            stroke="#1765F5"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeDasharray="7 9"
            vectorEffect="non-scaling-stroke"
            animate={reduce ? undefined : { strokeDashoffset: [0, -16] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Start pin / End flag */}
        {showStart && (
          <span
            aria-hidden="true"
            className="absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1765F5] shadow-[0_6px_16px_rgba(23,101,245,0.25)] ring-2 ring-[#1765F5]/20"
            style={{ left: 0, top: `${(startY / height) * 100}%` }}
          >
            <MapPin size={17} strokeWidth={2} />
          </span>
        )}
        {showEnd && (
          <span
            aria-hidden="true"
            className="absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1765F5] text-white shadow-[0_6px_16px_rgba(23,101,245,0.35)]"
            style={{ left: "100%", top: `${(endY / height) * 100}%` }}
          >
            <Flag size={16} strokeWidth={2} />
          </span>
        )}

        {/* Stems (node -> card) */}
        {pts.map((p, i) => (
          <span
            key={`stem-${i}`}
            aria-hidden="true"
            className="absolute -translate-x-1/2 border-l-2 border-dashed border-[#1765F5]/40"
            style={{
              left: `${p.x}%`,
              top: `${(p.y / height) * 100}%`,
              bottom: "-12px",
            }}
          />
        ))}

        {/* Nodes */}
        {pts.map((p, i) => (
          <span
            key={`node-${i}`}
            aria-hidden="true"
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${(p.y / height) * 100}%` }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                delay: 0.15 + i * 0.1,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1765F5] text-[14px] font-bold text-white ring-4 ring-white shadow-[0_8px_20px_rgba(23,101,245,0.4)]"
            >
              0{offset + i + 1}
            </motion.span>
          </span>
        ))}
      </div>

      {/* Cards */}
      <ol className={`mt-3 grid ${cols}`}>
        {items.map((item, i) => (
          <motion.li
            key={item.title}
            {...fadeUp(0.1 + i * 0.08)}
            className="flex px-2 xl:px-2.5"
          >
            <ValueCard item={item} number={offset + i + 1} />
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Section ---------- */
export default function CoreValuesSection() {
  return (
    <section
      aria-labelledby="core-values-title"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-10"
    >
      {/* soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-[260px] w-[260px] rounded-full bg-[#1765F5]/[0.07] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-[260px] w-[260px] rounded-full bg-[#1765F5]/[0.07] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-10">
        {/* HEADING */}
        <motion.div
          {...fadeUp(0)}
          className="mb-8 flex flex-col items-center text-center lg:mb-10"
        >
          <h2
            id="core-values-title"
            className="text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] lg:text-[42px]"
          >
            Our <span className="text-[#1765F5]">Core Values</span>
          </h2>

          <div aria-hidden="true" className="mt-3 flex items-center gap-2">
            <span className="h-[3px] w-10 rounded-full bg-[#1765F5]" />
            <span className="h-2 w-2 rounded-full bg-[#1765F5]" />
            <span className="h-[3px] w-10 rounded-full bg-[#1765F5]/30" />
          </div>
        </motion.div>

        {/* DESKTOP: one wave road, 4 stops, 4 cards in one row */}
        <div className="hidden lg:block">
          <RouteRow
            items={values}
            offset={0}
            cols="grid-cols-4"
            road={DESKTOP_ROAD}
            showStart
            showEnd
          />
        </div>

        {/* TABLET: two road segments, 2 cards each */}
        <div className="hidden space-y-7 md:block lg:hidden">
          <RouteRow
            items={values.slice(0, 2)}
            offset={0}
            cols="grid-cols-2"
            road={TABLET_ROAD}
            showStart
          />
          <RouteRow
            items={values.slice(2, 4)}
            offset={2}
            cols="grid-cols-2"
            road={TABLET_ROAD}
            showEnd
          />
        </div>

        {/* MOBILE: vertical road on the left, compact cards on the right */}
        <ol className="relative md:hidden">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[13px] top-0 w-[14px] rounded-full bg-[#E3EDFF]"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[19px] top-3 border-l-2 border-dashed border-[#1765F5]/50"
          />

          {values.map((item, i) => (
            <motion.li
              key={item.title}
              {...fadeUp(i * 0.06)}
              className="relative pb-3 pl-12 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0.5 top-[18px] z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#1765F5] text-[12px] font-bold text-white ring-4 ring-white shadow-[0_6px_16px_rgba(23,101,245,0.4)]"
              >
                0{i + 1}
              </span>
              <ValueCard item={item} number={i + 1} />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}