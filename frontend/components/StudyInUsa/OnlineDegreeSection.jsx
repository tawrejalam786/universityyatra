"use client";

import { useState } from "react";
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
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ==========================================
   USA GUIDE TOPICS
========================================== */

const guides = [
  {
    id: "01",
    slug: "academic-pathways",
    tag: "STUDY IN USA",
    title: "Study in USA",
    shortTitle: "Education Pathways",
    icon: GraduationCap,
    description:
      "US universities offer flexible undergraduate pathways and specialised postgraduate degrees. From choosing a major to pursuing an MS or MBA, your options depend on your academic background and goals.",
    image: "/images/study-usa/3d/study-usa.png",
    points: [
      { icon: GraduationCap, label: "Bachelor's", value: "Typically 4 years" },
      { icon: BookOpen, label: "Master's", value: "Commonly 1–2 years" },
      { icon: Calendar, label: "Main intakes", value: "Fall and Spring" },
    ],
  },
  {
    id: "02",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    title: "Cost of Studying in USA",
    shortTitle: "Tuition & Study Budget",
    icon: DollarSign,
    description:
      "Tuition depends on your university, degree, and field of study. Use these annual ranges to start planning your budget before comparing specific programs.",
    image: "/images/study-usa/3d/cost-studying.png",
    points: [
      { icon: DollarSign, label: "Bachelor's", value: "US$19,000–40,000 / yr" },
      { icon: Calculator, label: "Master's", value: "US$16,000–31,000 / yr" },
      { icon: Home, label: "Additional costs", value: "Housing, food & fees" },
    ],
  },
  {
    id: "03",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    title: "Cost of Living in USA",
    shortTitle: "Living & Student Life",
    icon: Home,
    description:
      "Living costs depend on where you study and how you choose to live. A useful starting budget is US$1,000–2,500 per month, excluding tuition.",
    image: "/images/study-usa/3d/living-cost.png",
    points: [
      { icon: Building2, label: "Housing", value: "Major living expense" },
      { icon: Users, label: "Daily essentials", value: "Food, transit & utilities" },
      { icon: ShieldCheck, label: "Campus life", value: "Clubs & community" },
    ],
  },
  {
    id: "04",
    slug: "scholarships-and-aid",
    tag: "SCHOLARSHIPS & AID",
    title: "Scholarships for Indian Students",
    shortTitle: "Scholarships & Funding",
    icon: Award,
    description:
      "Indian students may qualify for merit-based scholarships, need-based financial aid, university awards, or graduate research funding. Opportunities depend on your profile.",
    image: "/images/study-usa/3d/scholarship.png",
    points: [
      { icon: Award, label: "Merit-based", value: "Academic achievement" },
      { icon: Sparkles, label: "Need-based", value: "Financial circumstances" },
      { icon: Globe2, label: "External funding", value: "Fulbright-Nehru & Inlaks" },
    ],
  },
  {
    id: "05",
    slug: "post-study-visa",
    tag: "POST-STUDY WORK VISA",
    title: "Post-Study Work Visa USA",
    shortTitle: "OPT & Work Pathways",
    icon: Plane,
    description:
      "Planning to work in the USA after graduation? Eligible F-1 students can apply for Optional Practical Training (OPT) to gain work experience related to their degree.",
    image: "/images/study-usa/3d/post-study.png",
    points: [
      { icon: Clock, label: "OPT", value: "Up to 12 months" },
      { icon: Sparkles, label: "STEM extension", value: "Up to 24 additional months" },
      { icon: Briefcase, label: "After OPT", value: "Possible H-1B sponsorship" },
    ],
  },
  {
    id: "06",
    slug: "jobs-in-usa",
    tag: "CAREERS & ROI",
    title: "Jobs & Careers in USA",
    shortTitle: "Career Opportunities",
    icon: Briefcase,
    description:
      "Explore the world's most dynamic job market for international graduates through CPT corporate internships, career fairs, and full-time career opportunities.",
    image: "/images/study-usa/3d/job-career.png",
    points: [
      { icon: Briefcase, label: "CPT", value: "Eligible internships" },
      { icon: Building2, label: "On-campus work", value: "Generally up to 20 hrs/week" },
      { icon: TrendingUp, label: "Career pathways", value: "Professional opportunities" },
    ],
  },
];

/* ==========================================
   LEFT TAB (chip on mobile, row on desktop)
========================================== */

function GuideTab({ guide, index, active, onActivate, onKeyDown }) {
  const Icon = guide.icon;

  return (
    <button
      type="button"
      role="tab"
      id={`usa-guide-tab-${index}`}
      aria-selected={active}
      aria-controls="usa-guide-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(e) => {
        // hover switching only for mouse; touch uses tap
        if (e.pointerType === "mouse") onActivate(index);
      }}
      onKeyDown={onKeyDown}
      className={`relative flex w-[210px] shrink-0 snap-start items-center justify-between gap-3 overflow-hidden rounded-xl border px-3.5 py-2.5 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 lg:w-full lg:flex-1 lg:shrink ${
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

      <div className="flex min-w-0 items-center gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 ${
            active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"
          }`}
        >
          <Icon size={18} strokeWidth={2} />
        </span>

        <div className="min-w-0">
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#7390B4]">
            Guide {guide.id}
          </span>
          <span
            className={`block truncate text-[13px] font-bold leading-[1.35] ${
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
   RIGHT ACTIVE CARD
========================================== */

function ActiveGuideCard({ activeIndex, onSelect, reduceMotion }) {
  const guide = guides[activeIndex];
  const TagIcon = guide.icon;

  return (
    <div
      id="usa-guide-panel"
      role="tabpanel"
      aria-labelledby={`usa-guide-tab-${activeIndex}`}
      className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:p-6"
    >
      {/* decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-12 select-none text-[84px] font-black leading-none text-[#1765F5]/[0.06]"
      >
        {guide.id}
      </span>

      {/* top row */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          <GraduationCap size={14} />
          USA Study Guides
        </span>
        {/* <span className="text-[11px] font-bold text-[#8199B8]">
          {guide.id} / {String(guides.length).padStart(2, "0")}
        </span> */}
      </div>

      {/* image stack: all images stay mounted so switching is instant (no flash) */}
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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

      {/* text + points + button */}
      <motion.div
        key={guide.id}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
        className="relative z-10 mt-2 flex flex-1 flex-col"
      >
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

        <Link
          href={`/study-in-usa/${guide.slug}`}
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

      {/* clickable progress bars */}
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

export default function SupportSystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // arrow keys move between tabs
  const handleKeyDown = (e) => {
    const steps = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = steps[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (activeIndex + step + guides.length) % guides.length;
    setActiveIndex(next);
    document.getElementById(`usa-guide-tab-${next}`)?.focus();
  };

  return (
    <section
      aria-labelledby="usa-guide-section-title"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 max-w-[720px] text-center"
        >
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
            What studying in the USA means
          </p>

          <h2
            id="usa-guide-section-title"
            className="text-balance text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[28px] lg:text-[32px]"
          >
            Your Next Academic Chapter:{" "}
            <span className="text-[#1765F5]">USA</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[600px] text-[12px] leading-[1.6] text-[#526B8C] sm:text-[13px]">
            Guides to US education, costs, scholarships, post-study work and
            careers, all in one place.
          </p>
        </motion.div>

        {/* TABS + CARD + CTA */}
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[1fr_auto] lg:gap-x-6">
          {/* TABS (horizontal chips on mobile, vertical list on desktop) */}
          <div
            role="tablist"
            aria-label="USA study guides"
            className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
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

          {/* CTA (sits under the tabs on desktop) */}
          <div className="relative flex flex-col items-start justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-4 text-white sm:flex-row sm:items-center lg:col-start-1 lg:row-start-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative">
              <h3 className="text-[14px] font-bold">
                Your USA Dream Starts Here!
              </h3>
              <p className="mt-0.5 text-[11px] leading-[1.5] text-white/75">
                Get Expert Guidance.
              </p>
            </div>

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