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
  Award,
  Sparkles,
  Plane,
  Clock,
  BriefcaseBusiness,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe2,
  Wallet,
} from "lucide-react";

/* ==========================================
   STUDY IN IRELAND - 5 GUIDES
========================================== */


const guides = [
  {
    id: "01",
    slug: "study-in-ireland",
    tag: "STUDY IN IRELAND",
    title: "Study in Ireland",
    shortTitle: "Education Pathways",
    icon: GraduationCap,
    image: "/images/study-usa/3d/study-usa.png",

    description:
      "Explore English-medium education in an EU country with international industry connections and diverse academic pathways.",

    points: [
      {
        icon: BookOpen,
        label: "Language",
        value: "Study in an English-speaking environment.",
      },
      {
        icon: BriefcaseBusiness,
        label: "Industry",
        value: "Explore technology, pharmaceuticals and financial services.",
      },
      {
        icon: GraduationCap,
        label: "Post-study",
        value: "Eligible graduates may qualify for up to 24 months under Stamp 1G.",
      },
    ],
  },

  {
    id: "02",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    title: "Cost of Studying in Ireland",
    shortTitle: "Tuition & Study Budget",
    icon: DollarSign,
    image: "/images/study-usa/3d/cost-studying.png",

    description:
      "Plan for tuition, accommodation and immigration costs before choosing your Irish university.",

    points: [
      {
        icon: Calculator,
        label: "Financial proof",
        value: "€10,000 for a course lasting over eight months.",
      },
      {
        icon: DollarSign,
        label: "Visa",
        value: "€60 single-entry or €100 multiple-entry, where applicable.",
      },
      {
        icon: Wallet,
        label: "Registration",
        value: "€300 for an Irish Residence Permit, subject to applicable rules.",
      },
    ],
  },

  {
    id: "03",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    title: "Cost of Living & Culture in Ireland",
    shortTitle: "Living & Culture",
    icon: Home,
    image: "/images/study-usa/3d/living-cost.png",

    description:
      "Prepare for student life in Ireland by understanding housing costs, everyday expenses and cultural differences.",

    points: [
      {
        icon: Wallet,
        label: "Living costs",
        value: "€10,000 is the annual immigration financial-evidence benchmark.",
      },
      {
        icon: Home,
        label: "Accommodation",
        value: "Dublin can be expensive, so compare housing early.",
      },
      {
        icon: Globe2,
        label: "Culture",
        value: "Expect independent learning, social clubs and a diverse student community.",
      },
    ],
  },

  {
    id: "04",
    slug: "scholarships",
    tag: "SCHOLARSHIPS & FUNDING",
    title: "Scholarships in Ireland",
    shortTitle: "Scholarships & Funding",
    icon: Award,
    image: "/images/study-usa/3d/scholarship.png",

    description:
      "Explore government, university and research funding options that may help reduce the cost of studying in Ireland.",

    points: [
      {
        icon: Award,
        label: "Government scholarship",
        value: "The 2026 GOI-IES offered €10,000 plus a one-year fee waiver.",
      },
      {
        icon: Sparkles,
        label: "University awards",
        value: "Many are programme-specific or merit-based.",
      },
      {
        icon: GraduationCap,
        label: "Funding strategy",
        value: "Check eligibility, deadlines and living-cost coverage early.",
      },
    ],
  },

  {
    id: "05",
    slug: "post-study-work-visa",
    tag: "POST-STUDY WORK VISA",
    title: "Post-Study Work Visa in Ireland",
    shortTitle: "Work Pathways",
    icon: Plane,
    image: "/images/study-usa/3d/post-study.png",

    description:
      "Ireland offers eligible graduates a route from university into professional employment through its Third Level Graduate Programme.",

    points: [
      {
        icon: Clock,
        label: "Stamp 1G",
        value: "Up to 12 months for eligible Level 8 graduates.",
      },
      {
        icon: GraduationCap,
        label: "Master's graduates",
        value: "Eligible Level 9+ graduates may receive up to 24 months.",
      },
      {
        icon: BriefcaseBusiness,
        label: "Next step",
        value: "A qualifying job and employment permit may be needed to stay longer.",
      },
    ],
  },
];


/* ==========================================
   STABLE TABS - NO HEIGHT SHIFT
========================================== */

function GuideTab({ guide, index, active, onActivate, onKeyDown }) {
  const Icon = guide.icon;
  return (
    <button
      type="button"
      role="tab"
      id={`ireland-guide-tab-${index}`}
      aria-label={guide.title}
      aria-selected={active}
      aria-controls="ireland-guide-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") onActivate(index); }}
      onKeyDown={onKeyDown}
      className={`group relative flex h-full w-full min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border px-2.5 py-2.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 lg:gap-3 lg:px-3.5 ${active ? "border-[#B4CFFA] bg-[#EDF5FF]" : "border-[#E5EDF9] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"}`}
    >
      {active && <span aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block" />}
      <div className="flex min-w-0 items-center gap-2 lg:gap-3">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] lg:h-9 lg:w-9 ${active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}>
          <Icon size={17} strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#7390B4]">Guide {guide.id}</span>
          <span className={`block text-[11px] font-bold leading-[1.3] sm:text-[12px] lg:text-[13px] ${active ? "text-[#1765F5]" : "text-[#0C337B]"}`}>
            <span className="lg:hidden">{guide.shortTitle}</span>
            <span className="hidden lg:inline">{guide.title}</span>
          </span>
        </div>
      </div>
      <ChevronRight size={16} aria-hidden="true" className={`hidden shrink-0 lg:block ${active ? "text-[#1765F5]" : "text-[#9AAEC6]"}`} />
    </button>
  );
}

/* ==========================================
   FIXED CARD - IMAGE/TEXT/POINTS STAY IN PLACE
========================================== */

function ActiveGuideCard({ activeIndex, onSelect, reduceMotion }) {
  const guide = guides[activeIndex];
  const TagIcon = guide.icon;
  return (
    <div
      id="ireland-guide-panel"
      role="tabpanel"
      aria-labelledby={`ireland-guide-tab-${activeIndex}`}
      className="relative order-2 flex h-[610px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-3.5 shadow-[0_12px_35px_rgba(12,51,123,0.07)] sm:h-[540px] sm:p-4 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[520px] lg:p-5"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#1765F5]/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#A2C1FB]/20 blur-[55px]" />
      <span aria-hidden="true" className="pointer-events-none absolute right-4 top-10 select-none text-[78px] font-black leading-none text-[#1765F5]/[0.06]">{guide.id}</span>

      <div className="relative z-10 shrink-0">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
          <GraduationCap size={14} /> Ireland Study Guides
        </span>
      </div>

      {/* Every image stays mounted; the image box never changes height. */}
      <div className="relative z-10 mx-auto mt-2 h-[110px] w-full max-w-[320px] shrink-0 sm:h-[125px] lg:h-[135px]">
        {guides.map((item, index) => {
          const visible = index === activeIndex;
          return (
            <Image key={item.id} src={item.image} alt={visible ? item.title : ""} aria-hidden={!visible} fill priority={index === 0} sizes="(max-width: 1023px) 80vw, 320px" className={`object-contain object-center transition-opacity duration-200 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`} />
          );
        })}
      </div>

      {/* Scroll only the text region when needed; never resize the card. */}
      <div className="relative z-10 mt-2 min-h-0 flex-1 overflow-y-auto overscroll-contain text-center [scrollbar-width:thin]">
        <motion.div key={guide.id} initial={reduceMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
          <span className="inline-flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#1765F5]">
            <TagIcon size={13} />{guide.tag}
          </span>
          <h3 className="mt-1 text-[19px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[22px]">{guide.title}</h3>
          <p className="mx-auto mt-2 max-w-[560px] text-[12px] leading-[1.6] text-[#526B8C]">{guide.description}</p>
          {guide.note && <p className="mt-2 rounded-lg border border-[#DAE7FA] bg-white/75 px-3 py-1.5 text-[11px] leading-[1.5] text-[#526B8C]">{guide.note}</p>}
        </motion.div>
      </div>

      {/* Fixed 3-column row, independent of description length. */}
      <div className="relative z-10 mt-3 grid h-[126px] shrink-0 grid-cols-3 gap-1.5 sm:h-[114px] sm:gap-2 lg:h-[112px]">
        {guide.points.map((point) => {
          const PointIcon = point.icon;
          return (
            <div key={point.label} className="flex h-full min-h-0 min-w-0 flex-col items-center gap-1 overflow-y-auto rounded-[11px] border border-[#DAE7FA] bg-white/85 px-1 py-2 text-center [scrollbar-width:thin] sm:px-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]"><PointIcon size={14} strokeWidth={2} /></span>
              <span className="w-full break-words text-[10px] font-bold leading-[1.3] text-[#0C337B]">{point.label}</span>
              <span className="w-full break-words text-[10px] leading-[1.35] text-[#526B8C]">{point.value}</span>
            </div>
          );
        })}
      </div>

      <Link href={`/study-in-ireland/${guide.slug}`} className="group relative z-10 mt-3 inline-flex min-h-[40px] w-full shrink-0 items-center justify-center gap-2 rounded-[11px] bg-[#1765F5] px-5 py-2 text-[12px] font-bold text-white transition-colors duration-200 hover:bg-[#0C337B]">
        Read More <ArrowUpRight size={16} strokeWidth={2.2} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>

      <div className="relative z-10 mt-2 flex shrink-0 items-center gap-1.5">
        {guides.map((item, index) => (
          <button key={item.id} type="button" onClick={() => onSelect(index)} aria-label={`Go to guide ${item.id}: ${item.title}`} aria-current={index === activeIndex ? "step" : undefined} className="group flex-1 py-1">
            <span className={`block h-[3px] rounded-full transition-colors ${index === activeIndex ? "bg-[#1765F5]" : "bg-[#B8CEEE] group-hover:bg-[#8FB2EC]"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function OnlineDegreeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const handleKeyDown = (event) => {
    const steps = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = steps[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (activeIndex + step + guides.length) % guides.length;
    setActiveIndex(next);
    document.getElementById(`ireland-guide-tab-${next}`)?.focus();
  };

  return (
    <section aria-labelledby="ireland-guide-section-title" className="relative w-full overflow-hidden bg-white py-5 sm:py-7">
      <div className="mx-auto w-full max-w-[1320px] px-3 sm:px-5 lg:px-6">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }} className="mx-auto mb-4 max-w-[720px] text-center">
          <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">WHAT STUDYING IN IRELAND MEANS</p>
          <h2 id="ireland-guide-section-title" className="text-balance text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[27px] lg:text-[31px]">Your Next Academic Chapter: <span className="text-[#1765F5]">Ireland</span></h2>
        </motion.div>

        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-5 lg:gap-y-3">
          <div role="tablist" aria-label="Ireland study guides" className="order-1 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:order-none lg:col-start-1 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-5">
            {guides.map((guide, index) => (
              <div key={guide.id} className="min-h-0 min-w-0">
                <GuideTab guide={guide} index={index} active={activeIndex === index} onActivate={setActiveIndex} onKeyDown={handleKeyDown} />
              </div>
            ))}
          </div>
          <ActiveGuideCard activeIndex={activeIndex} onSelect={setActiveIndex} reduceMotion={reduceMotion} />

          <div className="relative order-3 flex min-w-0 flex-col items-start justify-between gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-3.5 text-white sm:flex-row sm:items-center lg:order-none lg:col-start-1 lg:row-start-2">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="relative min-w-0">
              <h3 className="text-[14px] font-bold">Your Ireland Dream Starts Here!</h3>
              <p className="mt-0.5 text-[11px] leading-[1.5] text-white/75">Get Expert Guidance.</p>
            </div>
            <Link href="/counselling" className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12px] font-bold text-[#0C337B] transition-colors duration-200 hover:bg-[#EDF5FF]">
              Book Free Counselling <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
