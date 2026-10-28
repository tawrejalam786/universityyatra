
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
   STUDY IN INDIA DEGREE PROGRAMS

   Original 9 courses, images and colors kept.
   Specializations replaced with descriptions.
========================================= */


const courseCards = [
  // ==========================================
  // MASTER'S DEGREE PROGRAMS (01–08)
  // ==========================================

  {
    id: 1,
    course: "MSc Data Science",
    category: "masters",
    image: "/images/courses/uk/data-science-ms.webp",
    color: "#2563EB",
    description:
      "Use statistics, programming, and machine learning to analyse data and support evidence-based decisions.",
  },
  {
    id: 2,
    course: "MSc Computer Science",
    category: "masters",
    image: "/images/courses/uk/computer-science-ms.webp",
    color: "#0DAA9A",
    description:
      "Develop advanced knowledge of computing, algorithms, software systems, and emerging technologies.",
  },
  {
    id: 3,
    course: "Master of Business Administration (MBA)",
    category: "masters",
    image: "/images/courses/uk/mba.webp",
    color: "#F59E0B",
    description:
      "Build skills in business strategy, leadership, finance, and organisational decision-making.",
  },
  {
    id: 4,
    course: "MSc Finance",
    category: "masters",
    image: "/images/courses/uk/finance-ms.webp",
    color: "#7C3AED",
    description:
      "Analyse financial markets, investment decisions, risk, and corporate financial performance.",
  },
  {
    id: 5,
    course: "MSc Cyber Security",
    category: "masters",
    image: "/images/courses/uk/cybersecurity-ms.webp",
    color: "#EC1682",
    description:
      "Study network protection, digital threats, security testing, and information risk management.",
  },
  {
    id: 6,
    course: "MSc Mechanical Engineering",
    category: "masters",
    image: "/images/courses/uk/mechanical-engineering-ms.webp",
    color: "#4F46E5",
    description:
      "Apply engineering principles to design, test, and improve mechanical systems and technologies.",
  },
  {
    id: 7,
    course: "MSc Marketing",
    category: "masters",
    image: "/images/courses/uk/marketing-ms.webp",
    color: "#16A34A",
    description:
      "Explore consumer behaviour, brand strategy, digital campaigns, and marketing performance analytics.",
  },
  {
    id: 8,
    course: "MSc Public Health",
    category: "masters",
    image: "/images/courses/uk/public-health.webp",
    color: "#EF4444",
    description:
      "Study disease prevention, health policy, epidemiology, and strategies for improving population health.",
  },

  // ==========================================
  // BACHELOR'S DEGREE PROGRAMS (09–16)
  // ==========================================

  {
    id: 9,
    course: "BSc Computer Science",
    category: "bachelors",
    image: "/images/courses/uk/computer-science-bs.webp",
    color: "#06B6D4",
    description:
      "Learn programming, algorithms, databases, and software development through practical computing projects.",
  },
  {
    id: 10,
    course: "BSc Artificial Intelligence",
    category: "bachelors",
    image: "/images/courses/uk/artificial-intelligence-bs.webp",
    color: "#2563EB",
    description:
      "Explore machine learning, intelligent systems, data-driven models, and AI applications.",
  },
  {
    id: 11,
    course: "BEng Mechanical Engineering",
    category: "bachelors",
    image: "/images/courses/uk/mechanical-engineering-bs.webp",
    color: "#EA580C",
    description:
      "Apply mathematics and physics to mechanical design, manufacturing, materials, and engineering systems.",
  },
  {
    id: 12,
    course: "BSc Economics",
    category: "bachelors",
    image: "/images/courses/uk/economics-bs.webp",
    color: "#4F46E5",
    description:
      "Analyse markets, economic policy, consumer behaviour, and the forces shaping financial decisions.",
  },
  {
    id: 13,
    course: "BSc Accounting and Finance",
    category: "bachelors",
    image: "/images/courses/uk/accounting-finance-bs.webp",
    color: "#EC1682",
    description:
      "Develop skills in financial reporting, auditing, taxation, and business financial analysis.",
  },
  {
    id: 14,
    course: "BSc Business Management",
    category: "bachelors",
    image: "/images/courses/uk/business-management-bs.webp",
    color: "#F59E0B",
    description:
      "Understand business operations, organisational behaviour, strategy, and management principles.",
  },
  {
    id: 15,
    course: "BSc Psychology",
    category: "bachelors",
    image: "/images/courses/uk/psychology-bs.webp",
    color: "#9333EA",
    description:
      "Examine human behaviour, cognition, research methods, and the psychological factors influencing decisions.",
  },
  {
    id: 16,
    course: "BA International Relations",
    category: "bachelors",
    image: "/images/courses/uk/international-relations-ba.webp",
    color: "#0C337B",
    description:
      "Study global politics, diplomacy, international security, and relations between countries.",
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
    if (activeTab === tabId) return;

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
      ? "Bachelor's Degree Programs"
      : "All Degree Programs";

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

      {/* MAIN CONTAINER */}
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
          {/* <p class="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">What studying in the UK means</p> */}
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-[#063B72] sm:text-[32px] md:text-[36px]">
            Explore Courses in the UK
          </h2>

          {/* ACCENT DECORATION */}
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/65" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/35" />
            <span className="h-[4px] w-12 rounded-full bg-[#18B8B5]" />
          </div>
        </motion.div>

        {/* =====================================
            CATEGORY FILTERS + SLIDER ARROWS

            MOBILE:
            3 TABS IN ONE ROW
            ARROWS BELOW ON RIGHT

            DESKTOP:
            TABS LEFT
            ARROWS RIGHT
        ===================================== */}

        <div className="mb-4 flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">

          {/* CATEGORY BUTTONS */}
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
          <div className="flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto">

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={isBeginning}
              aria-label="Previous course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:h-10 sm:w-10"
            >
              <ChevronLeft size={17} strokeWidth={2.1} />
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={handleNext}
              disabled={isEnd}
              aria-label="Next course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:h-10 sm:w-10"
            >
              <ChevronRight size={17} strokeWidth={2.1} />
            </button>

          </div>
        </div>

        {/* =====================================
            SELECTED CATEGORY TITLE
        ===================================== */}

        <div className="mb-2">
          <h3 className="text-[16px] font-bold text-[#063B72] sm:text-[19px]">
            {categoryTitle}
          </h3>
        </div>

        {/* =====================================
            COURSES SWIPER

            DESKTOP: 3.5 CARDS
            TABLET: 2.1 / 2.5 CARDS
            MOBILE: 1.15 CARDS
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

      </div>
    </section>
  );
}

/* =========================================
   INDIVIDUAL COURSE CARD

   SAME LAYOUT AS STUDY IN USA
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
          alt={`${item.course} degree`}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 28vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.055]"
        />

        {/* IMAGE OVERLAY */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031A30]/15 via-transparent to-transparent"
        />

      </div>

      {/* CARD BODY */}
      <div className="relative flex flex-1 flex-col px-4 pb-4 pt-4">

        {/* COURSE HEADING */}
        <h3 className="min-h-[48px] text-[18px] font-bold leading-[1.25] tracking-[-0.025em] text-[#063B72] sm:text-[19px]">
          {item.course}
        </h3>

        {/* DYNAMIC ACCENT LINE */}
        <div className="mt-3 h-[3px] w-10 rounded-full bg-[var(--card-color)]" />

        {/* COURSE DESCRIPTION - REPLACES SPECIALIZATIONS */}
        <p className="relative z-10 mt-3 flex-1 text-[12px] leading-[1.6] text-[#40556A] sm:text-[13px]">
          {item.description}
        </p>

        {/* EXPLORE COURSE BUTTON */}
        <Link
          href="/contact"
          aria-label={`Enquire about ${item.course}`}
          className="relative z-10 mt-4 flex min-h-[42px] w-full items-center justify-between gap-3 rounded-[10px] border border-[#E8EDF4] bg-[#F4F7FA] px-3.5 py-2.5 text-left text-[12px] font-bold text-[#063B72] transition-all duration-300 hover:border-[var(--card-color)] hover:bg-[var(--card-color)] hover:text-white group-hover:border-[var(--card-color)] group-hover:bg-[var(--card-color)] group-hover:text-white"
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
