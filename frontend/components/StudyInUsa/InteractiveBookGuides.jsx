
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  DollarSign,
  Calculator,
  Home,
  Building2,
  Users,
  ShieldCheck,
  Award,
  Sparkles,
  Globe2,
  Plane,
  Clock,
  Briefcase,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

/* ==========================================
   ORIGINAL 6 GUIDES
   CONCISE DESCRIPTIONS
========================================== */

export const GUIDES_DATA = [
  {
    id: "academic-pathways",
    slug: "academic-pathways",
    tag: "STUDY IN USA",
    tagIcon: GraduationCap,
    title: "Study in USA",
    description:
      "Explore flexible US degrees, from bachelor's programmes to specialised MS and MBA pathways.",
    image: "/images/study-usa/3d/study-usa.png",
    bullets: [
      { label: "Bachelor's: Typically 4 years", icon: GraduationCap },
      { label: "Master's: Commonly 1–2 years", icon: BookOpen },
      { label: "Main intakes: Fall and Spring", icon: Calendar },
    ],
  },
  {
    id: "cost-of-studying",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    tagIcon: DollarSign,
    title: "Cost of Studying in USA",
    description:
      "Compare indicative university tuition and plan your study budget with more clarity.",
    image: "/images/study-usa/3d/cost-studying.png",
    bullets: [
      { label: "Bachelor's: US$19,000–40,000 / yr (₹18–38 L)", icon: DollarSign },
      { label: "Master's: US$16,000–31,000 / yr (₹15.2–29.5 L)", icon: Calculator },
      { label: "Additional: Housing, food, fees & visa", icon: Home },
    ],
  },
  {
    id: "living-and-culture",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    tagIcon: Home,
    title: "Cost of Living in USA",
    description:
      "Plan approximately US$1,000–2,500 monthly for living expenses, excluding tuition.",
    image: "/images/study-usa/3d/living-cost.png",
    bullets: [
      { label: "Housing: Often your biggest expense", icon: Building2 },
      { label: "Daily essentials: Food, transit & utilities", icon: Users },
      { label: "Campus life: Diverse clubs & community", icon: ShieldCheck },
    ],
  },
  {
    id: "scholarships-and-aid",
    slug: "scholarships-and-aid",
    tag: "SCHOLARSHIPS & AID",
    tagIcon: Award,
    title: "Scholarships for Indian Students",
    description:
      "Explore merit-based awards, need-based aid and external funding opportunities.",
    image: "/images/study-usa/3d/scholarship.png",
    bullets: [
      { label: "Merit-based: Rewards academic achievement", icon: Award },
      { label: "Need-based: Assesses financial circumstances", icon: Sparkles },
      { label: "External: Fulbright-Nehru & Inlaks funding", icon: Globe2 },
    ],
  },
  {
    id: "post-study-visa",
    slug: "post-study-visa",
    tag: "POST-STUDY WORK VISA",
    tagIcon: Plane,
    title: "Post-Study Work Visa USA",
    description:
      "Eligible F-1 graduates can explore OPT and STEM-related work opportunities.",
    image: "/images/study-usa/3d/post-study.png",
    bullets: [
      { label: "12 months of OPT: Eligible graduates", icon: Clock },
      { label: "Up to 36 months: Qualifying STEM extension", icon: Sparkles },
      { label: "After OPT: Employer-sponsored H-1B status", icon: Briefcase },
    ],
  },
  {
    id: "jobs-in-usa",
    slug: "jobs-in-usa",
    tag: "CAREERS & ROI",
    tagIcon: Briefcase,
    title: "Jobs & Careers in USA",
    description:
      "Explore internships, campus work and post-graduation career pathways in the USA.",
    image: "/images/study-usa/3d/job-career.png",
    bullets: [
      { label: "Paid CPT Summer Internships", icon: Briefcase },
      { label: "On-Campus: Up to 20 hrs/week student work", icon: Building2 },
      { label: "High ROI Career Placements", icon: TrendingUp },
    ],
  },
];

/* ==========================================
   BENTO COLOR PALETTE
========================================== */

const THEMES = [
  {
    bg: "#DDEAFF",
    fg: "#0C337B",
    muted: "#315584",
    chip: "#FFFFFF",
    line: "#B5CCEB",
    circle: "rgba(255,255,255,.28)",
  },
  {
    bg: "#245BC4",
    fg: "#FFFFFF",
    muted: "#E9F1FF",
    chip: "rgba(255,255,255,.93)",
    line: "rgba(255,255,255,.26)",
    circle: "rgba(255,255,255,.08)",
  },
  {
    bg: "#B4CFF2",
    fg: "#0C337B",
    muted: "#315584",
    chip: "#FFFFFF",
    line: "#91B4E5",
    circle: "rgba(255,255,255,.22)",
  },
  {
    bg: "#BDD4F5",
    fg: "#0C337B",
    muted: "#315584",
    chip: "#FFFFFF",
    line: "#9EBFE9",
    circle: "rgba(255,255,255,.25)",
  },
  {
    bg: "#244779",
    fg: "#FFFFFF",
    muted: "#E9F1FF",
    chip: "rgba(255,255,255,.94)",
    line: "rgba(255,255,255,.26)",
    circle: "rgba(255,255,255,.07)",
  },
  {
    bg: "#DDEAFF",
    fg: "#0C337B",
    muted: "#315584",
    chip: "#FFFFFF",
    line: "#B5CCEB",
    circle: "rgba(255,255,255,.24)",
  },
];

/* ==========================================
   INDIVIDUAL BENTO CARD
========================================== */

function GuideCard({ card, index, onSelectGuide, reducedMotion }) {
  const theme = THEMES[index];
  const isCenter = index % 3 === 1;
  const TagIcon = card.tagIcon;
  const href = `/study-in-usa/${card.slug}`;

  const content = (
    <>
      {/* BACKGROUND DECORATION */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full"
        style={{ backgroundColor: theme.circle }}
      />

      {/* CATEGORY TAG + ARROW */}
      <div className="relative z-20 flex items-start justify-between gap-2">
        <span
          className="inline-flex max-w-[calc(100%-42px)] items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[.05em] shadow-sm sm:text-[10px]"
          style={{
            backgroundColor: theme.chip,
            color: "#0C337B",
          }}
        >
          <TagIcon
            aria-hidden="true"
            size={13}
            strokeWidth={2.2}
            className="shrink-0"
          />
          <span>{card.tag}</span>
        </span>

        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-45"
          style={{
            borderColor: theme.line,
            backgroundColor: "rgba(255,255,255,.15)",
          }}
        >
          <ArrowUpRight size={17} strokeWidth={2} />
        </span>
      </div>

      {/* CARD CONTENT */}
      <div className="relative z-10 flex min-h-0 flex-1 items-center gap-1">

        {/* TITLE + DESCRIPTION */}
        <div className="relative z-10 w-[62%] min-w-0 py-2">
          <h3
            className={`font-extrabold leading-[1.13] tracking-[-.03em] ${
              isCenter
                ? "text-[19px] sm:text-[21px] lg:text-[22px]"
                : "text-[17px] sm:text-[18px] lg:text-[19px]"
            }`}
          >
            {card.title}
          </h3>

          <p
            className={`mt-2 text-[10px] leading-[1.45] sm:text-[11px] ${
              isCenter ? "lg:text-[12px]" : ""
            }`}
            style={{ color: theme.muted }}
          >
            {card.description}
          </p>
        </div>

        {/* 3D CLAY IMAGE */}
        <div
          className={`pointer-events-none relative w-[38%] min-w-0 shrink-0 self-center ${
            isCenter
              ? "h-[125px] sm:h-[142px] lg:h-[155px]"
              : "h-[95px] sm:h-[105px] lg:h-[112px]"
          }`}
        >
          <Image
            src={card.image}
            alt=""
            fill
            sizes={
              isCenter
                ? "(min-width: 1024px) 245px, (min-width: 640px) 180px, 36vw"
                : "(min-width: 1024px) 115px, (min-width: 640px) 150px, 35vw"
            }
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      {/* ORIGINAL BULLET ICONS */}
      <div
        className={`relative z-20 border-t pt-2.5 ${
          isCenter
            ? "grid grid-cols-3 gap-2"
            : "flex flex-col gap-1.5"
        }`}
        style={{ borderColor: theme.line }}
      >
        {card.bullets.map((bullet, bulletIndex) => {
          const Icon = bullet.icon;

          return (
            <div
              key={bulletIndex}
              className="flex min-w-0 items-start gap-1.5"
            >
              <Icon
                aria-hidden="true"
                size={13}
                strokeWidth={2}
                className="mt-[1px] shrink-0"
              />

              <span className="min-w-0 text-[9px] font-semibold leading-[1.35] sm:text-[10px]">
                {bullet.label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );

  const cardClasses =
    "group relative isolate flex h-full min-h-[260px] w-full min-w-0 flex-col overflow-hidden rounded-[19px] p-4 text-left shadow-[0_5px_22px_rgba(12,51,123,.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_13px_28px_rgba(12,51,123,.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5] sm:min-h-[265px] sm:p-[17px] lg:min-h-[270px]";

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.35,
        delay: reducedMotion ? 0 : index * 0.04,
      }}
      className="h-full min-w-0"
    >
      {onSelectGuide ? (
        <button
          type="button"
          onClick={() => onSelectGuide(card)}
          aria-label={`Explore ${card.title}`}
          className={cardClasses}
          style={{
            backgroundColor: theme.bg,
            color: theme.fg,
          }}
        >
          {content}
        </button>
      ) : (
        <Link
          href={href}
          aria-label={`Explore ${card.title}`}
          className={cardClasses}
          style={{
            backgroundColor: theme.bg,
            color: theme.fg,
          }}
        >
          {content}
        </Link>
      )}
    </motion.article>
  );
}

/* ==========================================
   MAIN RESPONSIVE BENTO GRID
========================================== */

export default function InteractiveBookGuides({ onSelectGuide }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-[1180px] py-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.85fr)_minmax(0,1fr)] lg:gap-3.5">
        {GUIDES_DATA.map((card, index) => (
          <GuideCard
            key={card.id}
            card={card}
            index={index}
            onSelectGuide={onSelectGuide}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </div>
  );
}
