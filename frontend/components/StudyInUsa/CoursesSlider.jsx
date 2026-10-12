
"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================
   COURSE DATA
========================================= */

const courseCards = [
  {
    course: "BBA",
    image: "/images/courses/bba.png",
    color: "#2563EB",
    stem: false,
    description:
      "Build a strong foundation in business and management with specializations in Data Analytics, Business Analytics, and International Business.",
  },
  {
    course: "BCA",
    image: "/images/courses/bca.png",
    color: "#0DAA9A",
    stem: true,
    description:
      "Explore computer applications and emerging technologies, including AI and Machine Learning, AI and Data Science, and Cloud Computing and Cyber Security.",
  },
  {
    course: "MBA",
    image: "/images/courses/mba.png",
    color: "#F59E0B",
    stem: false,
    description:
      "Develop advanced management and leadership skills with specializations in Airport and Airline Management, Business Analytics, and Data Science with AI.",
  },
  {
    course: "MCA",
    image: "/images/courses/mca.png",
    color: "#7C3AED",
    stem: true,
    description:
      "Advance your computing knowledge through AI and Computing, Cloud Computing and Cyber Security, and Data Science specializations.",
  },
  {
    course: "B.Com",
    image: "/images/courses/bcom.png",
    color: "#EC1682",
    stem: false,
    description:
      "Strengthen your understanding of commerce, accounting, and financial systems with Banking and FinTech, Business Analytics, and Finance and Accounting.",
  },
  {
    course: "M.Com",
    image: "/images/courses/mcom.png",
    color: "#4F46E5",
    stem: false,
    description:
      "Build advanced expertise in commerce and financial management with Accounting and Finance, Financial Management, and Fintech.",
  },
  {
    course: "M.Sc.",
    image: "/images/courses/msc.png",
    color: "#16A34A",
    stem: true,
    description:
      "Explore advanced scientific and analytical studies with specializations in Applied Mathematics, Data Science, and Mathematics.",
  },
  {
    course: "MA",
    image: "/images/courses/ma.png",
    color: "#EF4444",
    stem: false,
    description:
      "Develop subject expertise and critical thinking through postgraduate study in Economics, English, and History.",
  },
  {
    course: "BA",
    image: "/images/courses/ba.png",
    color: "#06B6D4",
    stem: false,
    description:
      "Explore humanities and social sciences through Political Science, English, and Economics while developing analytical and communication skills.",
  },
];

/* =========================================
   MAIN COURSE SLIDER
========================================= */

export default function CoursesSlider() {
  const swiperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">

      {/* BACKGROUND GLOWS */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 h-[280px] w-[280px] rounded-full bg-[#18B8B5]/[0.05] blur-[90px]" />

      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#063B72]/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-5 lg:px-6">

        {/* SECTION HEADER */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-7 flex items-end justify-between gap-4 md:mb-9">

          <div>
            <h2 className="text-[30px] font-bold leading-none tracking-[-0.035em] text-[#063B72] sm:text-[35px] md:text-[40px]">
              Courses
            </h2>

            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]" />
              <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/65" />
              <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/35" />
              <span className="h-[4px] w-14 rounded-full bg-[#18B8B5]" />
            </div>
          </div>

          {/* SLIDER ARROWS */}
          <div className="flex shrink-0 items-center gap-2">

            <button type="button" onClick={handlePrev} aria-label="Previous course" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_6px_18px_rgba(6,59,114,0.08)] transition-colors duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-11 sm:w-11">
              <ChevronLeft size={19} strokeWidth={2.1} />
            </button>

            <button type="button" onClick={handleNext} aria-label="Next course" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_6px_18px_rgba(6,59,114,0.08)] transition-colors duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-11 sm:w-11">
              <ChevronRight size={19} strokeWidth={2.1} />
            </button>

          </div>
        </motion.div>

        {/* COURSE CAROUSEL */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative w-full overflow-hidden">

          <Swiper modules={[Pagination]} onSwiper={(swiper) => { swiperRef.current = swiper; }} slidesPerView={1} spaceBetween={16} speed={600} grabCursor={true} watchOverflow={true} pagination={{ clickable: true, el: ".course-pagination" }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 18 }, 1024: { slidesPerView: 3, spaceBetween: 20 } }} className="!overflow-hidden !bg-white !px-4 !pb-8 !pt-4">

            {courseCards.map((item, index) => (
              <SwiperSlide key={item.course} className="!h-auto">
                <CourseCard item={item} index={index} />
              </SwiperSlide>
            ))}

          </Swiper>

          {/* PAGINATION */}
          <div className="course-pagination mt-7 flex min-h-[12px] items-center justify-center gap-2 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!h-2 [&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#CBD8E3] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!bg-[#18B8B5]" />

        </motion.div>

      </div>
    </section>
  );
}

/* =========================================
   COURSE CARD
   IMAGE → HEADING → PARAGRAPH → BUTTON
========================================= */

function CourseCard({ item, index }) {
  return (
    <article className="group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-[22px] border border-[#DCE5EC] bg-white shadow-[0_14px_38px_rgba(6,59,114,0.11)] transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(6,59,114,0.16)]" style={{ "--card-color": item.color }}>

      {/* UNIQUE COLOR TOP BORDER */}
      <div className="absolute inset-x-0 top-0 z-20 h-[5px] bg-[var(--card-color)]" />

      {/* COURSE IMAGE */}
      <div className="relative mx-4 mt-4 h-[170px] shrink-0 overflow-hidden rounded-[16px] sm:h-[180px]">

        <Image src={item.image} alt={`${item.course} degree`} fill sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) 50vw, 33vw" className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.055]" />

        {/* SUBTLE IMAGE OVERLAY */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031A30]/10 via-transparent to-transparent" />

        {/* STEM BADGE */}
        {item.stem && (
          <div className="absolute right-3 top-3 z-30">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B8E7E3] bg-[#E8F8F7] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.06em] text-[#087F7B] shadow-[0_4px_12px_rgba(6,59,114,0.12)] sm:text-[12px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#18B8B5]" />
              STEM*
            </span>
          </div>
        )}

      </div>

      {/* CONTENT */}
      <div className="relative flex flex-1 flex-col px-5 pb-5 pt-5">

        {/* COURSE HEADING */}
        <h3 className="text-[27px] font-bold leading-none tracking-[-0.03em] text-[#063B72] sm:text-[29px]">
          {item.course}
        </h3>

        {/* ACCENT LINE */}
        <div className="mt-3 h-[2px] w-10 rounded-full bg-[#18B8B5]" />

        {/* COURSE DESCRIPTION */}
        <p className="relative z-10 mt-4 flex-1 text-[13px] leading-[1.7] text-[#40556A] sm:text-[14px]">
          {item.description}
        </p>

        {/* BACKGROUND NUMBER */}
        <span aria-hidden="true" className="pointer-events-none absolute bottom-[-13px] right-1 select-none text-[68px] font-bold leading-none text-[#F0F4F7]">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* EXPLORE COURSE BUTTON */}
        <button type="button" className="relative z-10 mt-5 flex min-h-[42px] w-full items-center justify-between gap-3 rounded-[10px] bg-[#F4F7FA] px-4 py-2.5 text-left text-[13px] font-bold text-[#063B72] transition-[background-color,color] duration-300 ease-out group-hover:bg-[var(--card-color)] group-hover:text-white">
          <span>Explore Course</span>
          <ArrowRight size={17} strokeWidth={2} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>

    </article>
  );
}
