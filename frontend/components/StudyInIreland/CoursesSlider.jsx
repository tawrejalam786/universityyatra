
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
  // MASTER'S DEGREE PROGRAMS (01–10)
  // ==========================================

  {
    id: 1,
    course: "MSc Computer Science",
    category: "masters",
    image: "/images/courses/ireland/computer-science-ms.webp",
    color: "#2563EB",
    description:
      "Explore advanced computing, software engineering and algorithms for careers in technology and software development.",
  },
  {
    id: 2,
    course: "MSc Data Science and Artificial Intelligence",
    category: "masters",
    image: "/images/courses/ireland/data-science-ai.webp",
    color: "#0DAA9A",
    description:
      "Develop skills in machine learning, statistical modelling and AI-driven problem-solving across industries.",
  },
  {
    id: 3,
    course: "MSc Mechanical Engineering",
    category: "masters",
    image: "/images/courses/ireland/mechanical-engineering-ms.webp",
    color: "#F59E0B",
    description:
      "Study advanced design, manufacturing, materials and engineering systems for technical and industrial careers.",
  },
  {
    id: 4,
    course: "MSc Automotive Engineering",
    category: "masters",
    image: "/images/courses/ireland/automotive-engineering-ms.webp",
    color: "#7C3AED",
    description:
      "Explore vehicle design, automotive technologies and sustainable mobility through advanced engineering concepts.",
  },
  {
    id: 5,
    course: "MSc Robotics and Automation",
    category: "masters",
    image: "/images/courses/ireland/robotics-automation-ms.webp",
    color: "#EC1682",
    description:
      "Learn about intelligent machines, control systems, robotics and automated industrial processes.",
  },
  {
    id: 6,
    course: "MSc Engineering Management",
    category: "masters",
    image: "/images/courses/ireland/engineering-management-ms.webp",
    color: "#4F46E5",
    description:
      "Combine technical knowledge with project management, operations and strategic decision-making.",
  },
  {
    id: 7,
    course: "MSc International Business and Management",
    category: "masters",
    image: "/images/courses/ireland/international-business-management.webp",
    color: "#16A34A",
    description:
      "Understand global markets, business strategy and cross-cultural management in an international business environment.",
  },
  {
    id: 8,
    course: "MSc Renewable Energy Engineering",
    category: "masters",
    image: "/images/courses/ireland/renewable-energy-engineering.webp",
    color: "#EF4444",
    description:
      "Explore clean energy technologies, sustainable power systems and renewable energy project development.",
  },
  {
    id: 9,
    course: "MSc Biotechnology",
    category: "masters",
    image: "/images/courses/ireland/biotechnology-ms.webp",
    color: "#06B6D4",
    description:
      "Study molecular biology, bioprocessing and biotechnology applications in healthcare, pharmaceuticals and industry.",
  },
  {
    id: 10,
    course: "MSc Supply Chain Management",
    category: "masters",
    image: "/images/courses/ireland/supply-chain-management-ms.webp",
    color: "#B45309",
    description:
      "Build expertise in logistics, procurement, operations and global supply chain planning.",
  },

  // ==========================================
  // BACHELOR'S DEGREE PROGRAMS (11–20)
  // ==========================================

  {
    id: 11,
    course: "BSc Computer Science",
    category: "bachelors",
    image: "/images/courses/ireland/computer-science-bs.webp",
    color: "#2563EB",
    description:
      "Build foundations in programming, algorithms, software development and computer systems.",
  },
  {
    id: 12,
    course: "BEng Mechanical Engineering",
    category: "bachelors",
    image: "/images/courses/ireland/mechanical-engineering-bs.webp",
    color: "#EA580C",
    description:
      "Learn engineering design, materials, thermodynamics and mechanical systems through theory and practical work.",
  },
  {
    id: 13,
    course: "BEng Automotive Engineering",
    category: "bachelors",
    image: "/images/courses/ireland/automotive-engineering-bs.webp",
    color: "#7C3AED",
    description:
      "Explore vehicle engineering, automotive systems, manufacturing and emerging mobility technologies.",
  },
  {
    id: 14,
    course: "BSc Data Science",
    category: "bachelors",
    image: "/images/courses/ireland/data-science-bs.webp",
    color: "#0DAA9A",
    description:
      "Learn statistics, programming, data visualisation and analytical techniques for evidence-based decisions.",
  },
  {
    id: 15,
    course: "BEng Electrical Engineering",
    category: "bachelors",
    image: "/images/courses/ireland/electrical-engineering-bs.webp",
    color: "#F59E0B",
    description:
      "Study electrical circuits, power systems, electronics and the technologies behind modern infrastructure.",
  },
  {
    id: 16,
    course: "Bachelor’s in Business Administration",
    category: "bachelors",
    image: "/images/courses/ireland/business-administration-bs.webp",
    color: "#EC1682",
    description:
      "Explore marketing, finance, management and entrepreneurship to build a broad business foundation.",
  },
  {
    id: 17,
    course: "BSc Biotechnology",
    category: "bachelors",
    image: "/images/courses/ireland/biotechnology-bs.webp",
    color: "#16A34A",
    description:
      "Discover biology, genetics and laboratory methods used in healthcare, research and biotechnology industries.",
  },
  {
    id: 18,
    course: "BA Economics",
    category: "bachelors",
    image: "/images/courses/ireland/economics-bs.webp",
    color: "#4F46E5",
    description:
      "Understand markets, economic policy, data analysis and the decisions that shape economies.",
  },
  {
    id: 19,
    course: "BSc Environmental Science",
    category: "bachelors",
    image: "/images/courses/ireland/environmental-science-bs.webp",
    color: "#059669",
    description:
      "Study ecosystems, climate challenges, conservation and sustainable approaches to environmental management.",
  },
  {
    id: 20,
    course: "BA International Relations",
    category: "bachelors",
    image: "/images/courses/ireland/international-relations-ba.webp",
    color: "#0C337B",
    description:
      "Explore global politics, diplomacy, international institutions and the forces shaping world affairs.",
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
      ? "Bachelor's Degree Programs for Indian Students"
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
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-[#063B72] sm:text-[32px] md:text-[36px]">
            Explore Courses in Ireland
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
