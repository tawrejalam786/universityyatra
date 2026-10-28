
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  IndianRupee,
  Scale,
} from "lucide-react";

/* ==========================================
   STUDY IN INDIA - 5 GUIDES
   01-03: ORIGINAL INDIA CONTENT
   04-05: NEW ADDITIONAL GUIDES
========================================== */

const guides = [
  {
    id: "01",
    title: "Making Your Next Move Count.",
    shortTitle: "Online Degree",
    tag: "ONLINE DEGREE EXPLAINED",
    icon: GraduationCap,
    image: "/images/study-india/online-degree-student.webp",
    href: "/study-in-india/online-degree-program",

    description:
      "An online regular degree program lets you earn a university degree through a structured online learning format, without attending campus every day.",

    points: [
      {
        label: "Program Structure",
        text: "You follow a defined curriculum with online classes, study material, assignments, assessments, and examinations, just like a regular academic program—delivered digitally.",
      },
      {
        label: "Learning Flexibility",
        text: "It gives you the flexibility to pursue your degree and specialization while managing work, other studies, or personal commitments.",
      },
    ],
  },

  {
    id: "02",
    title: "A Program That Fits You",
    shortTitle: "Find Your Program",
    tag: "CHOOSE THE RIGHT PROGRAM",
    icon: BookOpen,
    image: "/images/study-india/program-fit-student.webp",
    href: "/study-in-india/find-the-right-online-degree",

    description:
      "Explore flexible online degree options and compare programs based on your goals.",

    points: [
      {
        text: "Compare 30+ universities and 5+ specializations",
      },
      {
        text: "Explore UGC-recognized online degree programs",
      },
      {
        text: "Choose from flexible online formats",
      },
      {
        text: "Shortlist programs based on your goals and profile",
      },
    ],
  },

  {
    id: "03",
    title: "Guidance Beyond Admission",
    shortTitle: "Admission Guidance",
    tag: "EXPERT ADMISSION GUIDANCE",
    icon: ClipboardCheck,
    image: "/images/study-india/guidance-student.webp",
    href: "/career-counselling",

    description:
      "Make informed choices with guidance before, during, and beyond the application process.",

    points: [
      {
        text: "Understand eligibility, fees & program structure",
      },
      {
        text: "Get support with applications and documentation",
      },
      {
        text: "Guidance on career-relevant specializations",
      },
      {
        text: "Make an informed decision with expert guidance",
      },
    ],
  },

  {
    id: "04",
    title: "Online Degree vs Regular Degree",
    shortTitle: "Compare Degrees",
    tag: "COMPARE YOUR STUDY OPTIONS",
    icon: Scale,
    href: "/study-in-india/online-vs-regular-degree",

    description:
      "Understand the difference in learning format, flexibility, and student experience before selecting your pathway.",

    points: [
      {
        label: "Class Mode",
        text: "Compare online learning with campus-based teaching.",
      },
      {
        label: "Your Schedule",
        text: "Understand how each format fits around your commitments.",
      },
      {
        label: "Recognition",
        text: "Check the university and program's current recognition status.",
      },
      {
        label: "Career Preparation",
        text: "Compare the practical learning and career support offered.",
      },
    ],
  },

  {
    id: "05",
    title: "Cost of Studying in India",
    shortTitle: "Study Costs",
    tag: "FEES & FINANCIAL PLANNING",
    icon: IndianRupee,
    href: "/study-in-india/cost-of-studying",

    description:
      "Plan your education budget by reviewing tuition, course-related expenses, and available payment options.",

    points: [
      {
        label: "Tuition Fees",
        text: "Compare fees by university, degree, and specialization.",
      },
      {
        label: "Other Expenses",
        text: "Check exam fees, materials, internet, and any other charges.",
      },
      {
        label: "Payment Options",
        text: "Ask about scholarships, instalments, and eligibility.",
      },
      {
        label: "Overall Value",
        text: "Review the curriculum, support, and outcomes along with cost.",
      },
    ],
  },
];

/* ==========================================
   LEFT GUIDE TAB
   MOBILE  : 2-COLUMN GRID
   TABLET  : 3-COLUMN GRID
   DESKTOP : VERTICAL TABS
========================================== */

function GuideTab({
  guide,
  index,
  active,
  onActivate,
  onKeyDown,
}) {
  const Icon = guide.icon;

  return (
    <button
      type="button"
      role="tab"
      id={`india-guide-tab-${index}`}
      aria-label={guide.title}
      aria-selected={active}
      aria-controls="india-guide-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onActivate(index)}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          onActivate(index);
        }
      }}
      onKeyDown={onKeyDown}
      className={`group relative flex min-w-0 items-center gap-2 overflow-hidden rounded-xl border px-2.5 py-2.5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1765F5]/50 lg:flex-1 lg:gap-3 lg:px-3.5 ${active ? "border-[#B4CFFA] bg-[#EDF5FF] shadow-[0_5px_20px_rgba(23,101,245,0.07)]" : "border-[#E5EDF9] bg-white hover:border-[#C5D9F9] hover:bg-[#F8FAFF]"}`}
    >
      {/* ACTIVE LEFT INDICATOR */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1 bg-[#1765F5] lg:block"
        />
      )}

      {/* GUIDE ICON */}
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors lg:h-9 lg:w-9 ${active ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}
      >
        <Icon size={17} strokeWidth={2} />
      </span>

      {/* NUMBER AND TITLE */}
      <span className="min-w-0 flex-1">
        <span className="block text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#7390B4]">
          Guide {guide.id}
        </span>

        <span
          className={`block text-[11px] font-bold leading-[1.3] sm:text-[12px] lg:truncate lg:text-[13px] ${active ? "text-[#1765F5]" : "text-[#0C337B]"}`}
        >
          <span className="lg:hidden">
            {guide.shortTitle}
          </span>

          <span className="hidden lg:inline">
            {guide.title}
          </span>
        </span>
      </span>

      {/* DESKTOP ARROW */}
      <ChevronRight
        size={16}
        aria-hidden="true"
        className={`hidden shrink-0 transition-transform lg:block ${active ? "translate-x-0.5 text-[#1765F5]" : "text-[#9AAEC6]"}`}
      />
    </button>
  );
}

/* ==========================================
   GUIDE VISUAL
   ORIGINAL INDIA STUDENT IMAGES
   FALLBACK ICONS FOR NEW GUIDES
========================================== */

function GuideVisual({ guide }) {
  const Icon = guide.icon;

  return (
    <div className="relative mx-auto flex h-[132px] w-full max-w-[340px] items-center justify-center sm:h-[145px] lg:h-[150px]">
      {/* BACKGROUND CIRCLE */}
      <span
        aria-hidden="true"
        className="absolute h-[110px] w-[110px] rounded-full bg-[#DDEAFF] sm:h-[125px] sm:w-[125px]"
      />

      {/* DECORATIVE DOTS */}
      <span
        aria-hidden="true"
        className="absolute left-[22%] top-[12%] h-2.5 w-2.5 rounded-full bg-[#A2C1FB]"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-[16%] right-[21%] h-3 w-3 rounded-full bg-[#1765F5]/20"
      />

      {/* IMAGE OR ICON */}
      {guide.image ? (
        <div className="relative h-[124px] w-[118px] overflow-hidden rounded-t-[65px] rounded-b-[18px] border-[3px] border-white bg-[#EAF2FF] shadow-[0_10px_25px_rgba(12,51,123,0.12)] sm:h-[136px] sm:w-[125px] lg:h-[144px] lg:w-[134px]">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 639px) 118px, 134px"
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="relative flex h-[116px] w-[116px] items-center justify-center rounded-[30px] border border-[#C9DCFA] bg-white shadow-[0_12px_28px_rgba(12,51,123,0.10)] sm:h-[126px] sm:w-[126px]">
          <Icon
            size={56}
            strokeWidth={1.35}
            className="text-[#1765F5]"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}

/* ==========================================
   ACTIVE GUIDE CONTENT CARD
========================================== */

function ActiveGuideCard({
  activeIndex,
  onSelect,
  reduceMotion,
}) {
  const guide = guides[activeIndex];
  const Icon = guide.icon;

  return (
    <div
      id="india-guide-panel"
      role="tabpanel"
      aria-labelledby={`india-guide-tab-${activeIndex}`}
      className="relative order-2 flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#CDDEFA] bg-gradient-to-br from-[#EDF5FF] via-white to-[#DDEAFF] p-4 shadow-[0_12px_35px_rgba(12,51,123,0.07)] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:p-5"
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
        className="pointer-events-none absolute right-4 top-10 select-none text-[78px] font-black leading-none text-[#1765F5]/[0.06]"
      >
        {guide.id}
      </span>

      {/* TOP BADGE */}
      <span className="relative z-10 self-start rounded-full border border-[#C9DCFA] bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1765F5]">
        India Study Guides
      </span>

      {/* ACTIVE GUIDE IMAGE */}
      <motion.div
        key={`visual-${guide.id}`}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 5 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.3,
        }}
        className="relative z-10 mt-1"
      >
        <GuideVisual guide={guide} />
      </motion.div>

      {/* ACTIVE GUIDE CONTENT */}
      <motion.div
        key={`content-${guide.id}`}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 8 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.25,
        }}
        className="relative z-10 mt-1 flex min-w-0 flex-1 flex-col"
      >
        {/* TAG / HEADING / DESCRIPTION */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#1765F5]">
            <Icon size={13} />

            {guide.tag}
          </span>

          <h3 className="mt-1 text-[20px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[23px]">
            {guide.title}
          </h3>

          <p className="mx-auto mt-1.5 max-w-[570px] text-[12px] leading-[1.6] text-[#526B8C]">
            {guide.description}
          </p>
        </div>

        {/* HIGHLIGHT POINTS */}
        <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {guide.points.map((point, index) => (
            <div
              key={`${guide.id}-${index}`}
              className="flex min-w-0 items-start gap-2 rounded-[11px] border border-[#DAE7FA] bg-white/85 p-2.5"
            >
              {/* POINT ICON */}
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
                <Check
                  size={14}
                  strokeWidth={2.6}
                />
              </span>

              {/* POINT CONTENT */}
              <div className="min-w-0">
                {point.label && (
                  <span className="block text-[11px] font-bold text-[#0C337B]">
                    {point.label}
                  </span>
                )}

                <p className="text-[11px] leading-[1.5] text-[#526B8C]">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* READ MORE BUTTON */}
        <Link
          href={guide.href}
          className="group mt-3 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#1765F5] px-5 py-2 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.2)] transition-all duration-300 hover:bg-[#0C337B] hover:shadow-[0_10px_25px_rgba(12,51,123,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5]"
        >
          Read More

          <ArrowUpRight
            size={16}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>

      {/* CLICKABLE PROGRESS BARS */}
      <div className="relative z-10 mt-2 flex items-center gap-1.5">
        {guides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to guide ${item.id}: ${item.title}`}
            aria-current={
              index === activeIndex
                ? "step"
                : undefined
            }
            className="group flex-1 py-1"
          >
            <span
              className={`block h-[3px] rounded-full transition-colors ${index === activeIndex ? "bg-[#1765F5]" : "bg-[#B8CEEE] group-hover:bg-[#8FB2EC]"}`}
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

export default function StudyIndiaGuides() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reduceMotion = useReducedMotion();

  /* KEYBOARD NAVIGATION */
  const handleKeyDown = (event) => {
    const direction = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    }[event.key];

    if (!direction) return;

    event.preventDefault();

    const next =
      (activeIndex + direction + guides.length) %
      guides.length;

    setActiveIndex(next);

    document
      .getElementById(`india-guide-tab-${next}`)
      ?.focus();
  };

  return (
    <section
      aria-labelledby="india-guide-section-title"
      className="relative w-full overflow-hidden bg-white py-5 sm:py-7"
    >
      {/* MAIN CONTAINER */}
      <div className="mx-auto w-full max-w-[1250px] px-3 sm:px-5 lg:px-6">

        {/* SECTION HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 12 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-4 max-w-[720px] text-center"
        >
          <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
            YOUR ONLINE DEGREE GUIDE
          </p>

          <h2
            id="india-guide-section-title"
            className="text-balance text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[27px] lg:text-[31px]"
          >
            Your Next Academic Chapter:{" "}

            <span className="text-[#1765F5]">
              India
            </span>
          </h2>
        </motion.div>

        {/* TABS + ACTIVE CARD + CTA */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[1fr_auto] lg:gap-x-5 lg:gap-y-3">

          {/* LEFT GUIDE TABS */}
          <div
            role="tablist"
            aria-label="India online degree guides"
            className="order-1 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:order-none lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col"
          >
            {guides.map((guide, index) => (
              <div
                key={guide.id}
                className={index === guides.length - 1 ? "col-span-2 sm:col-span-1 lg:flex lg:flex-1" : "min-w-0 lg:flex lg:flex-1"}
              >
                <GuideTab
                  guide={guide}
                  index={index}
                  active={index === activeIndex}
                  onActivate={setActiveIndex}
                  onKeyDown={handleKeyDown}
                />
              </div>
            ))}
          </div>

          {/* RIGHT ACTIVE GUIDE CARD */}
          <ActiveGuideCard
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            reduceMotion={reduceMotion}
          />

          {/* COUNSELLING CTA */}
          <div className="relative order-3 flex min-w-0 flex-col items-start justify-between gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-3.5 text-white sm:flex-row sm:items-center lg:order-none lg:col-start-1 lg:row-start-2">

            {/* DECORATIVE SHAPE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
            />

            {/* CTA TEXT */}
            <div className="relative min-w-0">
              <h3 className="text-[14px] font-bold">
                Your India Study Journey Starts Here!
              </h3>

              <p className="mt-0.5 text-[11px] leading-[1.5] text-white/75">
                Get expert guidance on online degree options.
              </p>
            </div>

            {/* CTA BUTTON */}
            <Link
              href="/career-counselling"
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
