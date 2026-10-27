
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================
   CATEGORY FILTERS
========================================= */

const tabs = [
  { id: "all", label: "All Programs" },
  { id: "masters", label: "Master's" },
  { id: "bachelors", label: "Bachelor's" },
];

/* =========================================
   USA DEGREE PROGRAMS
========================================= */


const courseCards = [
  // ==========================================
  // MASTER'S DEGREE PROGRAMS
  // ==========================================

  {
    id: 1,
    course: "Computer Science (MSc / MCS)",
    category: "masters",
    stem: true,
    image: "/images/courses-canada/computer-science.webp",
    color: "#1765F5",
    description:
      "Build expertise in software development, algorithms, artificial intelligence, and advanced computing to solve complex technical problems.",
  },
  {
    id: 2,
    course: "Business Analytics (MBAN / MSc)",
    category: "masters",
    stem: true,
    image: "/images/courses-canada/business-analytics-ms.webp",
    color: "#0D9488",
    description:
      "Use statistics, data visualisation, and predictive modelling to support business decisions and identify performance trends.",
  },
  {
    id: 3,
    course: "Cybersecurity (MSc / MEng)",
    category: "masters",
    stem: true,
    image: "/images/courses-canada/cybersecurity-ms.webp",
    color: "#7C3AED",
    description:
      "Study threat detection, network defence, and digital risk management to help protect systems, information, and infrastructure.",
  },
  {
    id: 4,
    course: "Data Science (MSc)",
    category: "masters",
    stem: true,
    image: "/images/courses-canada/data-science-ms.webp",
    color: "#5D93F8",
    description:
      "Apply programming, statistics, and machine learning to interpret complex datasets and develop evidence-based solutions.",
  },
  {
    id: 5,
    course: "Business Administration (MBA)",
    category: "masters",
    stem: false,
    image: "/images/courses-canada/mba.webp",
    color: "#F59E0B",
    description:
      "Develop skills in strategic management, finance, marketing, and leadership through business cases and organisational problem-solving.",
  },
  {
    id: 6,
    course: "Finance (MFin / MSc)",
    category: "masters",
    stem: false,
    image: "/images/courses-canada/finance-ms.webp",
    color: "#EC1682",
    description:
      "Analyse investments, financial markets, valuation, and risk to understand how organisations allocate capital and manage financial decisions.",
  },
  {
    id: 7,
    course: "Engineering (MEng / MASc)",
    category: "masters",
    stem: true,
    image: "/images/courses-canada/engineering-ms.webp",
    color: "#EA580C",
    description:
      "Apply advanced technical principles to design, test, and improve systems across fields such as civil, mechanical, electrical, and computer engineering.",
  },
  {
    id: 8,
    course: "Economics (MA / MSc)",
    category: "masters",
    stem: false,
    image: "/images/courses-canada/economics-masters.webp",
    color: "#4F46E5",
    description:
      "Examine markets, public policy, and economic behaviour using quantitative analysis, economic modelling, and research methods.",
  },
  {
    id: 9,
    course: "Public Health (MPH)",
    category: "masters",
    stem: false,
    image: "/images/courses-canada/public-health.webp",
    color: "#16A34A",
    description:
      "Explore epidemiology, health policy, and disease prevention to understand population-level health challenges and design informed interventions.",
  },
  {
    id: 10,
    course: "Architecture (MArch)",
    category: "masters",
    stem: false,
    image: "/images/courses-canada/architecture.webp",
    color: "#B45309",
    description:
      "Combine spatial design, building technology, and sustainable planning to develop functional and considered architectural solutions.",
  },
  {
    id: 11,
    course: "Film and Media Production (MFA / MA)",
    category: "masters",
    stem: false,
    image: "/images/courses-canada/film-media-production.webp",
    color: "#9333EA",
    description:
      "Develop skills in directing, cinematography, editing, and production while exploring how stories are shaped for different screens and audiences.",
  },
  {
    id: 12,
    course: "Biological Sciences (MSc)",
    category: "masters",
    stem: true,
    image: "/images/courses-canada/biological-sciences-ms.webp",
    color: "#059669",
    description:
      "Investigate living systems through laboratory research, experimental methods, and areas such as genetics, cell biology, and biotechnology.",
  },

  // ==========================================
  // BACHELOR'S DEGREE PROGRAMS
  // ==========================================

  {
    id: 13,
    course: "Computer Science (BSc / BCS)",
    category: "bachelors",
    stem: true,
    image: "/images/courses-canada/computer-science-bs.webp",
    color: "#2563EB",
    description:
      "Learn programming, algorithms, databases, and computing fundamentals to develop software and understand how digital systems work.",
  },
  {
    id: 14,
    course: "Engineering (BEng / BASc)",
    category: "bachelors",
    stem: true,
    image: "/images/courses-canada/engineering-bs.webp",
    color: "#1047AC",
    description:
      "Apply mathematics and scientific principles to design, build, and test solutions across engineering disciplines.",
  },
  {
    id: 15,
    course: "Business Administration (BBA / BCom)",
    category: "bachelors",
    stem: false,
    image: "/images/courses-canada/business-administration-bs.webp",
    color: "#F59E0B",
    description:
      "Explore management, marketing, accounting, and operations to understand how businesses function, compete, and grow.",
  },
  {
    id: 16,
    course: "Finance (BCom / BBA)",
    category: "bachelors",
    stem: false,
    image: "/images/courses-canada/finance-bs.webp",
    color: "#EC1682",
    description:
      "Study financial markets, investment principles, corporate finance, and budgeting to understand how individuals and organisations manage money.",
  },
  {
    id: 17,
    course: "Economics (BA / BSc)",
    category: "bachelors",
    stem: false,
    image: "/images/courses-canada/economics-bs.webp",
    color: "#7C3AED",
    description:
      "Explore how consumers, businesses, and governments make choices through economic theory, data analysis, and the study of markets and policy.",
  },
  {
    id: 18,
    course: "Biological Sciences (BSc)",
    category: "bachelors",
    stem: true,
    image: "/images/courses-canada/biological-sciences-bs.webp",
    color: "#16A34A",
    description:
      "Study living organisms, genetics, ecology, and cell biology through scientific concepts and practical laboratory work.",
  },
  {
    id: 19,
    course: "Film and Media Studies (BA / BFA)",
    category: "bachelors",
    stem: false,
    image: "/images/courses-canada/film-media-studies.webp",
    color: "#DB2777",
    description:
      "Explore cinema, visual storytelling, media theory, and digital culture while developing critical and creative approaches to screen media.",
  },
];


/* =========================================
   COMPACT CATEGORY PILL
========================================= */

function CategoryPill({ tab, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`inline-flex h-[34px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-3 text-[10px] font-semibold transition-all duration-300 sm:h-[40px] sm:px-5 sm:text-[12px] ${
        selected
          ? "border-[#1765F5] bg-[#1765F5] text-white shadow-[0_4px_12px_rgba(23,101,245,0.15)]"
          : "border-[#DCE6F3] bg-white text-[#0C337B] hover:border-[#1765F5] hover:text-[#1765F5]"
      }`}
    >
      {tab.label}
    </button>
  );
}

/* =========================================
   MAIN COURSES SLIDER
========================================= */

export default function CoursesSlider() {
  const swiperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState("all");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  /* FILTER COURSES */
  const filteredCourses = courseCards.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  /* CATEGORY CHANGE */
  const changeTab = (tabId) => {
    setActiveTab(tabId);
    setIsBeginning(true);
    setIsEnd(false);
    swiperRef.current = null;
  };

  /* PREVIOUS SLIDE */
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  /* NEXT SLIDE */
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  /* UPDATE NAVIGATION STATE */
  const updateNavigation = (swiper) => {
    if (!swiper || swiper.destroyed) return;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  /* CATEGORY TITLE */
  const categoryTitle =
    activeTab === "masters"
      ? "Master's Degree Programs for Indian Students"
      : activeTab === "bachelors"
      ? "Bachelor's Degree Programs for Indian Students"
      : "Master's Degree Programs for Indian Students";

  return (
    <section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">

      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-[280px] w-[280px] rounded-full bg-[#1765F5]/[0.06] blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#0C337B]/[0.05] blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-3.5 sm:px-5 lg:px-6">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-5"
        >

          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] md:text-[36px]">
            Explore Programs{" "}
            <span className="text-[#1765F5]">
              in the Canada
            </span>
          </h2>

          {/* ACCENT DECORATION */}
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]/65" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]/35" />
            <span className="h-[4px] w-12 rounded-full bg-[#1765F5]" />
          </div>
        </motion.div>

        {/* =====================================
            CATEGORY FILTERS + SLIDER ARROWS

            MOBILE:
            - ALL 3 TABS IN ONE LINE
            - ARROWS BELOW, RIGHT ALIGNED

            DESKTOP:
            - TABS LEFT
            - ARROWS RIGHT
        ===================================== */}

        <div className="mb-4 flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">

          {/* CATEGORY BUTTONS - NO SCROLL */}
          <div className="flex w-full min-w-0 flex-nowrap items-center justify-start gap-1.5 sm:w-auto sm:flex-1 sm:gap-2.5">

            {tabs.map((tab) => (
              <CategoryPill
                key={tab.id}
                tab={tab}
                selected={activeTab === tab.id}
                onClick={() => changeTab(tab.id)}
              />
            ))}

          </div>

          {/* SLIDER NAVIGATION */}
          <div className="flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto sm:gap-2">

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={isBeginning}
              aria-label="Previous course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#0C337B] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#D9E4ED] disabled:hover:bg-white disabled:hover:text-[#0C337B] sm:h-10 sm:w-10"
            >
              <ChevronLeft size={17} strokeWidth={2.1} />
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={handleNext}
              disabled={isEnd}
              aria-label="Next course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#0C337B] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#D9E4ED] disabled:hover:bg-white disabled:hover:text-[#0C337B] sm:h-10 sm:w-10"
            >
              <ChevronRight size={17} strokeWidth={2.1} />
            </button>

          </div>
        </div>

        {/* =====================================
            SELECTED CATEGORY TITLE
        ===================================== */}

        <div className="mb-2">
          <h3 className="text-[16px] font-bold text-[#0C337B] sm:text-[19px]">
            {categoryTitle}
          </h3>
        </div>

        {/* =====================================
            COURSE SLIDER

            DESKTOP: 3.5 CARDS VISIBLE
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative w-full min-w-0"
        >

          <Swiper
            key={activeTab}
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            onReachBeginning={updateNavigation}
            onReachEnd={updateNavigation}
            slidesPerView={1.15}
            spaceBetween={12}
            speed={550}
            grabCursor={true}
            watchOverflow={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.4,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 18,
              },
            }}
            className="!overflow-hidden !bg-transparent !pb-12 !pt-4 [&_.swiper-pagination-bullet]:!bg-[#1765F5] [&_.swiper-pagination-bullet-active]:!opacity-100"
          >

            {filteredCourses.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!h-auto"
              >
                <CourseCard item={item} />
              </SwiperSlide>
            ))}

          </Swiper>
        </motion.div>

        {/* =====================================
            STEM DISCLAIMER
        ===================================== */}

        <p className="mt-2 text-[11px] leading-[1.6] text-[#64748B] sm:text-[12px]">
          *STEM designation and eligibility depend on the
          university, specific program, and applicable Canada
          immigration requirements.
        </p>

      </div>
    </section>
  );
}

/* =========================================
   COURSE CARD COMPONENT
========================================= */

function CourseCard({ item }) {
  return (
    <article
      className="group relative flex h-full min-h-[385px] flex-col overflow-hidden rounded-[20px] border border-[#DCE5EC] bg-white shadow-[0_8px_24px_rgba(6,59,114,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--card-color)] hover:shadow-[0_15px_32px_rgba(6,59,114,0.13)]"
      style={{
        "--card-color": item.color,
      }}
    >

      {/* COLORED TOP BORDER */}
      <div className="absolute inset-x-0 top-0 z-20 h-[5px] bg-[var(--card-color)]" />

      {/* COURSE IMAGE */}
      <div className="relative mx-3.5 mt-3.5 h-[165px] shrink-0 overflow-hidden rounded-[14px] sm:h-[175px]">

        <Image
          src={item.image}
          alt={item.course}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 28vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.055]"
        />

        {/* IMAGE GRADIENT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031A30]/15 via-transparent to-transparent"
        />

        {/* STEM BADGE */}
        {item.stem && (
          <div className="absolute right-3 top-3 z-30">

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#A2C1FB] bg-[#E8F0FE] px-2.5 py-1.5 text-[10px] font-extrabold tracking-[0.05em] text-[#1047AC] shadow-[0_4px_12px_rgba(12,51,123,0.12)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1765F5]" />
              STEM
            </span>

          </div>
        )}

      </div>

      {/* CARD BODY */}
      <div className="relative flex flex-1 flex-col px-4 pb-4 pt-4">

        {/* COURSE HEADING */}
        <h3 className="min-h-[48px] text-[18px] font-bold leading-[1.25] tracking-[-0.025em] text-[#0C337B] sm:text-[19px]">
          {item.course}
        </h3>

        {/* DYNAMIC ACCENT LINE */}
        <div className="mt-3 h-[3px] w-10 rounded-full bg-[var(--card-color)]" />

        {/* COURSE DESCRIPTION */}
        <p className="relative z-10 mt-3 flex-1 text-[12px] leading-[1.6] text-[#40556A] sm:text-[13px]">
          {item.description}
        </p>

        {/* EXPLORE COURSE → CONTACT US */}
        <Link
          href="/contact"
          aria-label={`Enquire about ${item.course}`}
          className="relative z-10 mt-4 flex min-h-[42px] w-full items-center justify-between gap-3 rounded-[10px] border border-[#E8EDF4] bg-[#F4F7FA] px-3.5 py-2.5 text-left text-[12px] font-bold text-[#0C337B] transition-all duration-300 hover:border-[var(--card-color)] hover:bg-[var(--card-color)] hover:text-white group-hover:border-[var(--card-color)] group-hover:bg-[var(--card-color)] group-hover:text-white"
        >
          <span>Explore Course</span>

          <ArrowRight
            size={17}
            strokeWidth={2}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>
    </article>
  );
}
