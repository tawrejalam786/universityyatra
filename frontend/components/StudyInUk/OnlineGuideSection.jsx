"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  DollarSign,
  Calculator,
  Home,
  Building2,
  Users,
  Award,
  Sparkles,
  Globe2,
  Plane,
  Clock,
  Briefcase,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Calendar,
} from "lucide-react";

/* ==========================================
   UK GUIDE TOPICS - 5 GUIDES
========================================== */

const guides = [
  {
    id: "01",
    slug: "study-in-the-uk",
    tag: "STUDY IN UK",
    title: "Study in the UK",
    shortTitle: "Education Pathways",
    icon: GraduationCap,
    description:
      "UK universities offer bachelor's degrees (3-4 years) and specialised postgraduate degrees (1-2 years). From understanding degree structures to choosing the right course, your pathway depends on your background and goals.",
    image: "/images/study-usa/3d/study-usa.png",
    points: [
      { icon: GraduationCap, label: "Bachelor's", value: "3-4 years" },
      { icon: BookOpen, label: "Master's", value: "Typically 1 year" },
      { icon: Calendar, label: "Main intakes", value: "September & January" },
    ],
  },
  {
    id: "02",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    title: "Cost of Studying in UK",
    shortTitle: "Tuition & Study Budget",
    icon: DollarSign,
    description:
      "Tuition depends on your university, degree, and field of study. International students should plan for tuition, living costs, visa fees, and accommodation across the full duration of study.",
    image: "/images/study-usa/3d/cost-studying.png",
    points: [
      { icon: DollarSign, label: "Bachelor's", value: "£11,400–£38,000 / yr" },
      { icon: Calculator, label: "Master's", value: "£11,000–£35,000 / yr" },
      { icon: Home, label: "Additional costs", value: "Visa, IHS & fees" },
    ],
  },
  {
    id: "03",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    title: "Cost of Living & Culture",
    shortTitle: "Living & Student Life",
    icon: Home,
    description:
      "Living costs depend on your location and accommodation choices. Budget around £830–£2,300+ per month for living expenses, with London generally more expensive than regional cities.",
    image: "/images/study-usa/3d/living-cost.png",
    points: [
      { icon: Building2, label: "Accommodation", value: "£450–£1,500+ / mo" },
      { icon: Users, label: "Daily essentials", value: "Food, transit & utilities" },
      { icon: Home, label: "Student life", value: "Culture & communities" },
    ],
  },
  {
    id: "04",
    slug: "scholarships-and-funding",
    tag: "SCHOLARSHIPS & FUNDING",
    title: "Scholarships in the UK",
    shortTitle: "Scholarships & Funding",
    icon: Award,
    description:
      "Indian students may qualify for Chevening, GREAT Scholarships, Commonwealth schemes, university awards, or merit-based funding. Opportunities depend on your course, profile, and eligibility.",
    image: "/images/study-usa/3d/scholarship.png",
    points: [
      { icon: Award, label: "Chevening", value: "Government-funded" },
      { icon: Sparkles, label: "University awards", value: "Merit & merit-based" },
      { icon: Globe2, label: "External funding", value: "GREAT & Commonwealth" },
    ],
  },
  {
    id: "05",
    slug: "post-study-work-visa",
    tag: "POST-STUDY WORK VISA",
    title: "Post-Study Work Visa",
    shortTitle: "Graduate Visa & Work",
    icon: Plane,
    description:
      "Eligible graduates can apply for a Graduate visa to work in the UK after completing their degree. Visa duration depends on your qualification level and application date.",
    image: "/images/study-usa/3d/post-study.png",
    points: [
      { icon: Clock, label: "Graduate Visa", value: "2 years / 18 months" },
      { icon: Sparkles, label: "PhD graduates", value: "3 years available" },
      { icon: Briefcase, label: "Work flexibility", value: "Most jobs welcome" },
    ],
  },
];

/* ==========================================
   TAB (2-col grid on mobile, list on desktop)
========================================== */

function GuideTab({ guide, index, active, onActivate, onKeyDown }) {
  const Icon = guide.icon;

  return (
    <button
      type="button"
      role="tab"
      id={`uk-guide-tab-${index}`}
      aria-selected={active}
      aria-controls="uk-guide-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") onActivate(index);
      }}
      onKeyDown={onKeyDown}
      className={`relative flex w-full min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border px-2.5 py-2 text-left transition-colors duration-300 last:col-span-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 sm:last:col-span-1 lg:flex-1 lg:gap-3 lg:px-3.5 lg:py-2.5 ${
        active
          ? "border-[#B4CFFA] bg-[#EDF5FF] shadow-[0_5px_20px_rgba(23,101,245,0.07)]"
          : "border-[#E5EDF9] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"
      }`}
    >
      {active && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block"
        />
      )}

      <div className="flex min-w-0 items-center gap-2 lg:gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 lg:h-9 lg:w-9 ${
            active
              ? "bg-[#1765F5] text-white"
              : "bg-[#EAF2FF] text-[#1765F5]"
          }`}
        >
          <Icon size={17} strokeWidth={2} />
        </span>

        <div className="min-w-0">
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#7390B4]">
            Guide {guide.id}
          </span>

          <span
            className={`block text-[12px] font-bold leading-[1.25] lg:truncate lg:text-[13px] lg:leading-[1.35] ${
              active ? "text-[#1765F5]" : "text-[#0C337B]"
            }`}
          >
            <span className="lg:hidden">{guide.shortTitle}</span>
            <span className="hidden lg:inline">{guide.title}</span>
          </span>
        </div>
      </div>

      <ChevronRight
        size={16}
        aria-hidden="true"
        className={`hidden shrink-0 transition-transform duration-300 lg:block ${
          active ? "translate-x-0.5 text-[#1765F5]" : "text-[#9AAEC6]"
        }`}
      />
    </button>
  );
}

/* ==========================================
   RIGHT ACTIVE GUIDE CARD
========================================== */

function ActiveGuideCard({ activeIndex, onSelect, reduceMotion }) {
  const guide = guides[activeIndex];
  const TagIcon = guide.icon;

  return (
    <div
      id="uk-guide-panel"
      role="tabpanel"
      aria-labelledby={`uk-guide-tab-${activeIndex}`}
      className="order-2 relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:p-6"
    >
      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]"
      />

      {/* BACKGROUND GUIDE NUMBER */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-12 select-none text-[84px] font-black leading-none text-[#1765F5]/[0.06]"
      >
        {guide.id}
      </span>

      {/* TOP BADGE */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          <GraduationCap size={14} />
          UK Study Guides
        </span>
      </div>

      {/* IMAGE STACK: all images stay mounted so switching is instant */}
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 mx-auto mt-2 h-[135px] w-full max-w-[320px] sm:h-[155px] lg:h-[150px]"
      >
        {guides.map((g, i) => {
          const isActive = i === activeIndex;

          return (
            <Image
              key={g.id}
              src={g.image}
              alt={isActive ? g.title : ""}
              aria-hidden={!isActive}
              fill
              priority={i === 0}
              sizes="(max-width: 1023px) 80vw, 320px"
              className={`object-contain object-center transition-all duration-300 ${
                isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            />
          );
        })}
      </motion.div>

      {/* ACTIVE GUIDE CONTENT */}
      <motion.div
        key={guide.id}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.25,
          ease: "easeOut",
        }}
        className="relative z-10 mt-2 flex flex-1 flex-col"
      >
        {/* TAG + TITLE + DESCRIPTION */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#1765F5]">
            <TagIcon size={13} />
            {guide.tag}
          </span>

          <h3 className="mt-1 text-[21px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[23px]">
            {guide.title}
          </h3>

          <p className="mx-auto mt-1.5 min-h-[4.9rem] max-w-[440px] text-[12px] leading-[1.65] text-[#526B8C]">
            {guide.description}
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {guide.points.map((point) => {
            const PointIcon = point.icon;

            return (
              <div
                key={point.label}
                className="flex items-center gap-2 rounded-[11px] border border-[#DAE7FA] bg-white/85 p-2.5 sm:flex-col sm:items-start sm:gap-1.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
                  <PointIcon size={15} strokeWidth={2} />
                </span>

                <div>
                  <span className="block text-[10px] font-bold text-[#0C337B]">
                    {point.label}
                  </span>

                  <span className="mt-0.5 block text-[10px] leading-[1.4] text-[#526B8C]">
                    {point.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* READ MORE BUTTON */}
        <Link
          href={`/study-in-uk/${guide.slug}`}
          className="group mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#1765F5] px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.2)] transition-all duration-300 hover:bg-[#0C337B] hover:shadow-[0_10px_25px_rgba(12,51,123,0.2)]"
        >
          Read More About {guide.shortTitle}

          <ArrowUpRight
            size={16}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>

      {/* CLICKABLE PROGRESS BARS */}
      <div className="relative z-10 mt-3 flex items-center gap-1.5">
        {guides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to guide ${item.id}: ${item.title}`}
            className="group flex-1 py-1.5"
          >
            <span
              className={`block h-[3px] rounded-full transition-colors duration-300 ${
                index === activeIndex
                  ? "bg-[#1765F5]"
                  : "bg-[#B8CEEE] group-hover:bg-[#8FB2EC]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function OnlineGuideSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  /* KEYBOARD NAVIGATION */
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

    const next = (activeIndex + step + guides.length) % guides.length;

    setActiveIndex(next);

    document.getElementById(`uk-guide-tab-${next}`)?.focus();
  };

  return (
    <section
      aria-labelledby="uk-guide-section-title"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 max-w-[720px] text-center"
        >
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
            What studying in the UK means
          </p>

          <h2
            id="uk-guide-section-title"
            className="text-balance text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[28px] lg:text-[32px]"
          >
            Your Next Academic Chapter:{" "}
            <span className="text-[#1765F5]">UK</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[600px] text-[12px] leading-[1.6] text-[#526B8C] sm:text-[13px]">
            Guides to UK education, costs, scholarships and post-study work,
            all in one place.
          </p>
        </motion.div>

        {/* TABS + CARD + CTA */}
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[1fr_auto] lg:gap-x-6">
          {/* TABS */}
          <div
            role="tablist"
            aria-label="UK study guides"
            className="order-1 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:order-none lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col"
          >
            {guides.map((guide, index) => (
              <GuideTab
                key={guide.id}
                guide={guide}
                index={index}
                active={activeIndex === index}
                onActivate={setActiveIndex}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>

          {/* ACTIVE CARD */}
          <ActiveGuideCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />

          {/* COUNSELLING CTA */}
          <div className="order-3 relative flex flex-col items-start justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-4 text-white sm:flex-row sm:items-center lg:order-none lg:col-start-1 lg:row-start-2">
            {/* DECORATION */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
            />

            {/* CTA TEXT */}
            <div className="relative">
              <h3 className="text-[14px] font-bold">
                Your UK Dream Starts Here!
              </h3>

              <p className="mt-0.5 text-[11px] leading-[1.5] text-white/75">
                Get Expert Guidance.
              </p>
            </div>

            {/* CTA BUTTON */}
            <Link
              href="/counselling"
              className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12px] font-bold text-[#0C337B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EDF5FF]"
            >
              Book Free Counselling

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
