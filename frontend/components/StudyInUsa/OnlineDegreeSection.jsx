
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Wallet,
  House,
  Award,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

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
    color: "#3158A5",
    href: "/study-abroad/usa/academic-pathways",
    image: "/images/academic-pathways.png",
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
    color: "#DE4D7B",
    href: "/study-abroad/usa/study-options",
    image: "/images/study-usa/stacking/study-options.webp",
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
    color: "#12AFA1",
    href: "/study-abroad/usa/cost-of-studying",
    image: "/images/study-usa/stacking/tuition-fees.webp",
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
    color: "#A34BA8",
    href: "/study-abroad/usa/cost-of-living",
    image: "/images/study-usa/stacking/living-costs.webp",
    icon: House,
  },
  {
    id: "05",
    eyebrow: "FUND YOUR EDUCATION",
    title: "Scholarships in USA for Indian Students",
    mobileTitle: "Scholarships in USA for Indian Students",
    description:
      "Indian students may qualify for merit-based scholarships, need-based financial aid, university awards, or graduate research funding.",
    points: [
      "Merit-based: Rewards academic achievement.",
      "Need-based: Assesses financial circumstances.",
      "External funding: Includes eligible Fulbright-Nehru and Inlaks opportunities.",
    ],
    note: "Check eligibility, coverage, and deadlines before applying.",
    color: "#8D65CE",
    href: "/study-abroad/usa/scholarships",
    image: "/images/study-usa/stacking/scholarships.webp",
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
    color: "#B795E6",
    href: "/study-abroad/usa/post-study-work",
    image: "/images/study-usa/stacking/post-study-work.webp",
    icon: BriefcaseBusiness,
  },
];

const TOTAL = cards.length;

/*
  Desktop navbar height:
  Change this value to match your website header.

  Example:
  96px = navbar occupies 96px of viewport.
*/
const DESKTOP_HEADER_HEIGHT = 96;

function CardVisual({ card, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = card.icon;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

      <div aria-hidden="true" className="pointer-events-none absolute aspect-square w-[90%] max-w-[620px] rounded-full border border-white/20" />
      <div aria-hidden="true" className="pointer-events-none absolute aspect-square w-[68%] max-w-[470px] rounded-full border border-white/15" />
      <div aria-hidden="true" className="pointer-events-none absolute aspect-square w-[46%] max-w-[320px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative h-[86%] w-[96%] max-w-[780px]">
        {!imageFailed ? (
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(min-width: 1024px) 48vw, 1px"
            className="object-contain object-center drop-shadow-[0_22px_35px_rgba(0,0,0,0.13)]"
            priority={index === 0}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex aspect-square w-[55%] max-w-[300px] items-center justify-center rounded-[32%] border border-white/30 bg-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.1)] backdrop-blur-sm">
              <Icon className="h-[40%] w-[40%] text-white" strokeWidth={1.15} />
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

function StackingCard({ card, index, progress, reduceMotion }) {
  const Icon = card.icon;

  const start = index / TOTAL;
  const end = (index + 1) / TOTAL;

  const translateY = useTransform(
    progress,
    [start, end],
    index === 0 ? ["0%", "0%"] : ["115%", "0%"],
    { clamp: true }
  );

  const topOffset = index * 12;

  return (
    <motion.article
      style={{
        backgroundColor: card.color,
        y: reduceMotion ? 0 : translateY,
        zIndex: index + 1,
        "--stack-top": `${topOffset}px`,
      }}
      className="absolute inset-x-0 top-[var(--stack-top)] mx-auto flex h-[min(76svh,650px)] w-full flex-col overflow-hidden rounded-[22px] border border-white/15 text-white shadow-[0_22px_60px_rgba(6,59,114,0.16)] sm:rounded-[28px] lg:!top-0 lg:h-full lg:rounded-none lg:border-0 lg:shadow-none"
    >

      {/* TOP STRIP */}
      <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/20 px-5 py-3 sm:px-8 sm:py-4 lg:px-[4vw] lg:py-4">

        <div className="flex min-w-0 items-center gap-3">
          <span className="text-[13px] font-extrabold tracking-[0.14em] lg:text-[16px]">
            {card.id}
          </span>
          <span className="truncate text-[9px] font-bold uppercase tracking-[0.14em] text-white/85 sm:text-[11px]">
            {card.eyebrow}
          </span>
        </div>

        <Icon className="h-5 w-5 shrink-0 lg:h-6 lg:w-6" strokeWidth={1.8} />

      </div>

      {/* MAIN PANEL */}
      <div className="relative min-h-0 flex-1">

        <div className="relative grid h-full min-h-0 grid-cols-1 lg:grid-cols-[52%_48%]">

          {/* LEFT TEXT */}
          <div className="flex min-h-0 flex-col overflow-y-auto px-5 py-5 sm:px-8 sm:py-7 lg:justify-center lg:px-[4vw] lg:py-5">

            <div className="flex min-h-full flex-col justify-between gap-5 lg:min-h-0 lg:gap-6">

              <div className="w-full">

                <div className="mb-5 hidden items-center gap-3 lg:flex">
                  <span className="h-[2px] w-10 bg-white/80" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
                    EXPLORE USA / {card.id}
                  </span>
                </div>

                <h3 className="hidden text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] md:block lg:text-[clamp(32px,3.2vw,56px)]">
                  {card.title}
                </h3>

                <h3 className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-[31px] md:hidden">
                  {card.mobileTitle}
                </h3>

                <p className="mt-4 max-w-[800px] text-[13px] leading-[1.75] text-white/90 sm:text-[15px] lg:mt-5 lg:text-[clamp(14px,1.12vw,17px)] lg:leading-[1.75]">
                  {card.description}
                </p>

                {card.points.length > 0 && (
                  <ul className="mt-5 grid gap-2.5 lg:mt-5 lg:gap-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 rounded-xl bg-white/15 px-3.5 py-2.5 text-[12px] font-medium leading-[1.5] sm:px-4 sm:text-[14px] lg:px-4 lg:py-2.5 lg:text-[clamp(12px,0.95vw,14px)]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.note && (
                  <p className="mt-4 text-[11px] leading-[1.65] text-white/85 sm:text-[13px] lg:mt-4">
                    {card.note}
                  </p>
                )}

              </div>

              <div className="shrink-0 pb-1">
                <Link href={card.href} className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-[13px] font-bold text-[#063B72] shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 sm:px-6 sm:text-[14px] lg:px-7 lg:py-3.5">
                  Read More
                  <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE: DESKTOP ONLY */}
          <div className="relative hidden min-h-0 lg:block">
            <CardVisual card={card} index={index} />
          </div>

        </div>

      </div>

      {/* DESKTOP FOOTER */}
      <div className="relative z-10 hidden shrink-0 items-center justify-between border-t border-white/20 px-[4vw] py-4 lg:flex">

        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
          UNIVERSITY YATRA™
        </span>

        <div className="flex items-center gap-2">
          {cards.map((item, dotIndex) => (
            <span key={item.id} className={`h-[5px] rounded-full ${dotIndex === index ? "w-9 bg-white" : "w-2 bg-white/40"}`} />
          ))}
        </div>

        <span className="text-[12px] font-bold tracking-[0.12em] text-white/90">
          {card.id} / {String(TOTAL).padStart(2, "0")}
        </span>

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
    <section
      ref={sectionRef}
      className="relative w-full overflow-clip bg-[#F7FAFC]"
      style={{
        height: `${(TOTAL + 1) * 100}svh`,
        "--desktop-header-height": `${DESKTOP_HEADER_HEIGHT}px`,
      }}
    >

      <div className="sticky top-0 flex h-svh w-full flex-col items-center justify-center overflow-hidden px-3 py-8 sm:px-6 lg:items-stretch lg:justify-start lg:px-0 lg:pb-0 lg:pt-[var(--desktop-header-height)]">

        <div className="relative h-[min(80svh,720px)] w-full max-w-[1160px] lg:h-[calc(100svh-var(--desktop-header-height))] lg:max-w-none">

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

        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64748B] sm:bottom-4 sm:text-[11px] lg:hidden">
          Scroll to Explore
        </div>

      </div>

    </section>
  );
}
