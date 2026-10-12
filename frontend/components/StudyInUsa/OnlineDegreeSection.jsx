
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Wallet, House, Award, BriefcaseBusiness, BookOpen } from "lucide-react";

const cards = [
  {
    id: "01",
    eyebrow: "WHAT STUDYING IN THE USA MEANS",
    title: "Your Next Academic Chapter: USA",
    mobileTitle: "Study in USA",
    description:
      "US universities offer flexible undergraduate pathways and specialised postgraduate degrees. From choosing a major to pursuing an MS or MBA, your options depend on your academic background and goals.",
    points: [
      "Bachelor's: Typically 4 years",
      "Master's: Commonly 1–2 years",
      "Main intakes: Fall and Spring",
    ],
    color: "#2563EB",
    textColor: "#FFFFFF",
    mutedColor: "rgba(255,255,255,0.85)",
    chipColor: "rgba(255,255,255,0.15)",
    href: "/study-abroad/usa/academic-pathways",
    icon: GraduationCap,
  },
  {
    id: "02",
    eyebrow: "EXPLORE YOUR OPTIONS",
    title: "Study in USA",
    mobileTitle: "Study in USA",
    description:
      "The US education system offers students multiple ways to build their academic pathway. Undergraduate students can often study subjects outside their major, while postgraduate programs allow for deeper specialisation in a chosen field. For Indian students, understanding these differences helps when deciding which degree, university, and course structure best fits their goals.",
    points: [],
    color: "#E7C77D",
    textColor: "#17233C",
    mutedColor: "#344158",
    chipColor: "rgba(255,255,255,0.42)",
    href: "/study-abroad/usa/study-options",
    icon: BookOpen,
  },
  {
    id: "03",
    eyebrow: "PLAN YOUR EDUCATION BUDGET",
    title: "Cost of Studying in USA",
    mobileTitle: "Cost of Studying in USA",
    description:
      "Tuition depends on your university, degree, and field of study. Use these annual ranges to start planning your budget before comparing specific programs.",
    points: [
      "Bachelor's tuition: Approximately US$19,000–40,000 per year (₹18–38 lakh).",
      "Master's tuition: Approximately US$16,000–31,000 per year (₹15.2–29.5 lakh).",
      "Additional expenses: Budget separately for accommodation, food, health insurance, university fees, books, and visa-related charges.",
    ],
    color: "#EAA49C",
    textColor: "#17233C",
    mutedColor: "#344158",
    chipColor: "rgba(255,255,255,0.4)",
    href: "/study-abroad/usa/cost-of-studying",
    icon: Wallet,
  },
  {
    id: "04",
    eyebrow: "LIVING & CAMPUS LIFE",
    title: "Cost of Living in USA",
    mobileTitle: "Cost of Living & Culture in USA",
    description:
      "Living costs depend on where you study and how you choose to live. A useful starting budget is US$1,000–2,500 per month, excluding tuition.",
    points: [
      "Housing: Often your biggest expense",
      "Daily essentials: Food, transport, utilities, and personal spending",
      "Campus life: Student clubs, cultural events, and diverse communities",
    ],
    note:
      "Your budget will look different in New York City than in a smaller college town.",
    color: "#79C9B5",
    textColor: "#17233C",
    mutedColor: "#344158",
    chipColor: "rgba(255,255,255,0.35)",
    href: "/study-abroad/usa/cost-of-living",
    icon: House,
  },
  {
    id: "05",
    eyebrow: "FUND YOUR EDUCATION",
    title: "Scholarships in USA for Indian Students",
    mobileTitle: "Scholarships in USA for Indian Students",
    description:
      "Indian students may qualify for merit-based scholarships, need-based financial aid, university awards, or graduate research funding. Opportunities depend on your degree, academic profile, financial circumstances, and eligibility.",
    points: [
      "Merit-based: Rewards academic achievement.",
      "Need-based: Assesses financial circumstances.",
      "External funding: Includes eligible Fulbright-Nehru and Inlaks opportunities.",
    ],
    note: "Check eligibility, coverage, and deadlines before applying.",
    color: "#B6A2E8",
    textColor: "#17233C",
    mutedColor: "#344158",
    chipColor: "rgba(255,255,255,0.35)",
    href: "/study-abroad/usa/scholarships",
    icon: Award,
  },
  {
    id: "06",
    eyebrow: "AFTER GRADUATION",
    title: "Post-Study Work Visa USA",
    mobileTitle: "Post-Study Work Visa USA",
    description:
      "Planning to work in the USA after graduation? Eligible F-1 students can apply for Optional Practical Training (OPT) to gain work experience related to their degree.",
    points: [
      "12 months of OPT: Available to eligible graduates who meet the requirements.",
      "Up to 36 months: Qualifying STEM graduates may apply for a 24-month extension.",
      "After OPT: Some graduates pursue employer-sponsored H-1B status, subject to eligibility and selection requirements.",
    ],
    note:
      "STEM extensions require a qualifying degree and an eligible employment arrangement. Work authorisation and long-term employment are not guaranteed.",
    color: "#EDA878",
    textColor: "#17233C",
    mutedColor: "#344158",
    chipColor: "rgba(255,255,255,0.35)",
    href: "/study-abroad/usa/post-study-work",
    icon: BriefcaseBusiness,
  },
];

const TOTAL = cards.length;

function StackingCard({ card, index, progress, reduceMotion }) {
  const Icon = card.icon;

  // Each card enters from below, then remains in its stack position.
  const start = index / TOTAL;
  const end = (index + 1) / TOTAL;

  const translateY = useTransform(
    progress,
    [start, end],
    index === 0 ? ["0%", "0%"] : ["115%", "0%"],
    { clamp: true }
  );

  const scale = useTransform(
    progress,
    [0, 1],
    [1, 1 - (TOTAL - 1 - index) * 0.012]
  );

  const topOffset = index * 13;

  return (
    <motion.article
      style={{
        backgroundColor: card.color,
        color: card.textColor,
        y: reduceMotion ? 0 : translateY,
        scale: reduceMotion ? 1 : scale,
        zIndex: index + 1,
        top: `${topOffset}px`,
      }}
      className="absolute inset-x-0 mx-auto flex h-[min(76svh,650px)] w-full max-w-[1160px] flex-col overflow-hidden rounded-[22px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:rounded-[30px] lg:rounded-[34px]"
    >
      {/* CARD TOP BAR */}
      <div className="flex shrink-0 items-center justify-between border-b border-black/10 px-5 py-3 sm:px-8 sm:py-4 lg:px-11">
        <div className="flex min-w-0 items-center gap-3">
          <span className="text-[12px] font-extrabold tracking-[0.12em] sm:text-[14px]">
            {card.id}
          </span>
          <span className="truncate text-[9px] font-bold uppercase tracking-[0.12em] opacity-80 sm:text-[11px]">
            {card.eyebrow}
          </span>
        </div>

        <Icon size={21} strokeWidth={1.8} className="shrink-0" />
      </div>

      {/* CARD BODY */}
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-5 sm:px-8 sm:py-7 lg:px-11 lg:py-9">
        <div className="flex min-h-full flex-col justify-between gap-5">
          <div className="max-w-[850px]">
            {/* DESKTOP TITLE */}
            <h3 className="hidden text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] md:block lg:text-[46px]">
              {card.title}
            </h3>

            {/* MOBILE TITLE */}
            <h3 className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-[31px] md:hidden">
              {card.mobileTitle}
            </h3>

            <p style={{ color: card.mutedColor }} className="mt-4 max-w-[800px] text-[13px] leading-[1.7] sm:text-[15px] lg:text-[17px]">
              {card.description}
            </p>

            {card.points.length > 0 && (
              <ul className="mt-5 grid gap-2.5">
                {card.points.map((point) => (
                  <li key={point} style={{ backgroundColor: card.chipColor }} className="flex items-start gap-3 rounded-xl px-3.5 py-2.5 text-[12px] font-medium leading-[1.5] sm:px-4 sm:text-[14px]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.note && (
              <p style={{ color: card.mutedColor }} className="mt-4 text-[11px] leading-[1.65] sm:text-[13px]">
                {card.note}
              </p>
            )}
          </div>

          {/* READ MORE LINK */}
          <div className="shrink-0 pb-1">
            <Link href={card.href} className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-[13px] font-bold text-[#063B72] shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:px-6 sm:text-[14px]">
              Read More
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function USAStackingCards() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative w-full bg-[#08090D]" style={{ height: `${(TOTAL + 1) * 100}svh` }}>
      <div className="sticky top-0 flex h-svh w-full flex-col items-center justify-center overflow-hidden px-3 py-8 sm:px-6 lg:px-10">

        {/* BACKGROUND DECORATION */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.055),transparent_55%)]" />

        {/* CARD STACK */}
        <div className="relative h-[min(80svh,720px)] w-full max-w-[1160px]">
          {cards.map((card, index) => (
            <StackingCard
              key={card.id}
              card={card}
              index={index}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* SCROLL HINT */}
        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:bottom-4 sm:text-[11px]">
          Scroll to Explore
        </div>

      </div>
    </section>
  );
}
