"use client";

import { useRef } from "react";
import Image from "next/image";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const courseCards = [
  {
    course: "BBA",
    image: "/images/courses/course-bba.webp",
    specializations: [
      "Data Analytics",
      "Business Analytics",
      "International Business",
    ],
  },
  {
    course: "BCA",
    image: "/images/courses/course-bca.webp",
    specializations: [
      "AI and Machine Learning",
      "AI and Data Science",
      "Cloud Computing and Cyber Security",
    ],
  },
  {
    course: "MBA",
    image: "/images/courses/course-mba.webp",
    specializations: [
      "Airport and Airline Management",
      "Business Analytics",
      "Data Science + AI",
    ],
  },
  {
    course: "MCA",
    image: "/images/courses/course-mca.webp",
    specializations: [
      "AI and Computing",
      "Cloud Computing and Cyber Security",
      "Data Science",
    ],
  },
  {
    course: "B.Com",
    image: "/images/courses/course-bcom.webp",
    specializations: [
      "Banking and Fin Tech",
      "Business Analytics",
      "Finance and Accounting",
    ],
  },
  {
    course: "M.Com",
    image: "/images/courses/course-mcom.webp",
    specializations: [
      "Accounting & Finance",
      "Financial Management",
      "Fintech",
    ],
  },
  {
    course: "M.Sc.",
    image: "/images/courses/course-msc.webp",
    specializations: [
      "Applied Mathematics",
      "Data Science",
      "Mathematics",
    ],
  },
  {
    course: "MA",
    image: "/images/courses/course-ma.webp",
    specializations: [
      "Economics",
      "English",
      "History",
    ],
  },
  {
    course: "BA",
    image: "/images/courses/course-ba.webp",
    specializations: [
      "Political Science",
      "English",
      "Economics",
    ],
  },
];

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
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 h-[280px] w-[280px] rounded-full bg-[#18B8B5]/[0.05] blur-[90px]" />
<div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#063B72]/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-5 lg:px-6">

        {/* HEADER */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-7 flex items-end justify-between gap-4 md:mb-9">
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

          {/* ARROWS */}
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={handlePrev} aria-label="Previous course" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_6px_18px_rgba(6,59,114,0.08)] transition-colors duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-11 sm:w-11">
              <ChevronLeft size={19} strokeWidth={2.1} />
            </button>

            <button type="button" onClick={handleNext} aria-label="Next course" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_6px_18px_rgba(6,59,114,0.08)] transition-colors duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-11 sm:w-11">
              <ChevronRight size={19} strokeWidth={2.1} />
            </button>
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative w-full overflow-hidden">
          <Swiper modules={[Pagination]} onSwiper={(swiper) => { swiperRef.current = swiper; }} slidesPerView={1} spaceBetween={16} speed={600} grabCursor={true} watchOverflow={true} pagination={{ clickable: true, el: ".course-pagination" }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 18 }, 1024: { slidesPerView: 3, spaceBetween: 20 } }} className="!overflow-hidden !bg-white !px-4 !pb-8 !pt-4">
            {courseCards.map((item, index) => (
              <SwiperSlide key={item.course} className="h-auto">
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

function CourseCard({ item, index }) {
  return (
    <article className="group relative flex h-full min-h-[410px] flex-col overflow-hidden rounded-[22px] border border-[#DCE5EC] bg-white shadow-[0_14px_38px_rgba(6,59,114,0.11)] transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(6,59,114,0.16)]">

      {/* TOP ACCENT */}
      <div className="absolute left-0 right-0 top-0 z-20 h-[4px] bg-[navy]" />

      {/* IMAGE */}
      <div className="relative mx-4 mt-4 h-[165px] overflow-hidden rounded-[16px] sm:h-[170px]">
        <Image src={item.image} alt={`${item.course} degree`} fill sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) 50vw, 33vw" className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.055]" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031A30]/10 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-1 flex-col px-5 pb-4 pt-4 sm:px-5">

        {/* TOP LABEL */}
        <div className="mb-2.5 flex min-w-0 items-center gap-2 text-[#60748A]">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-[#EAF8F7] text-[#0F8F8C]">
            <BookOpen size={14} strokeWidth={2} />
          </span>

          <p className="truncate text-[10px] font-bold uppercase tracking-[0.045em] sm:text-[11px]">
            {item.specializations.join(" • ")}
          </p>
        </div>

        {/* COURSE */}
        <h3 className="text-[25px] font-bold leading-none tracking-[-0.03em] text-[#063B72] sm:text-[27px]">
          {item.course}
        </h3>

        {/* TEAL LINE */}
        <div className="mt-3 h-[2px] w-9 rounded-full bg-[#18B8B5]" />

        {/* SPECIALIZATIONS */}
        <div className="relative z-10 mt-3 divide-y divide-[#E8EEF3]">
          {item.specializations.map((specialization, specializationIndex) => (
            <div key={specialization} className="flex min-h-[44px] items-center gap-2.5 py-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F8F7] text-[10px] font-bold text-[#0F8F8C]">
                {specializationIndex + 1}
              </span>

              <p className="min-w-0 flex-1 text-[13px] font-medium leading-[1.35] text-[#40556A] sm:text-[14px]">
                {specialization}
              </p>
            </div>
          ))}
        </div>

        {/* LARGE BACKGROUND NUMBER */}
        <span aria-hidden="true" className="pointer-events-none absolute bottom-[-13px] right-1 select-none text-[68px] font-bold leading-none text-[#F0F4F7]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}