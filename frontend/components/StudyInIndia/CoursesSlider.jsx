"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const courseCards = [
  {
    course: "BBA",
    image: "/images/courses/course-bba.webp",
    color: "#0F8B83",
    specializations: ["Data Analytics", "Business Analytics", "International Business"],
  },
  {
    course: "BCA",
    image: "/images/courses/course-bca.webp",
    color: "#2563EB",
    specializations: ["AI and Machine Learning", "AI and Data Science", "Cloud Computing and Cyber Security"],
  },
  {
    course: "MBA",
    image: "/images/courses/course-mba.webp",
    color: "#10B981",
    specializations: ["Airport and Airline Management", "Business Analytics", "Data Science + AI"],
  },
  {
    course: "MCA",
    image: "/images/courses/course-mca.webp",
    color: "#F59E0B",
    specializations: ["AI and Computing", "Cloud Computing and Cyber Security", "Data Science"],
  },
  {
    course: "B.Com",
    image: "/images/courses/course-bcom.webp",
    color: "#8B5CF6",
    specializations: ["Banking and Fin Tech", "Business Analytics", "Finance and Accounting"],
  },
  {
    course: "M.Com",
    image: "/images/courses/course-mcom.webp",
    color: "#EC4899",
    specializations: ["Accounting & Finance", "Financial Management", "Fintech"],
  },
  {
    course: "M.Sc.",
    image: "/images/courses/course-msc.webp",
    color: "#0891B2",
    specializations: ["Applied Mathematics", "Data Science", "Mathematics"],
  },
  {
    course: "MA",
    image: "/images/courses/course-ma.webp",
    color: "#7C3AED",
    specializations: ["Economics", "English", "History"],
  },
  {
    course: "BA",
    image: "/images/courses/course-ba.webp",
    color: "#EA580C",
    specializations: ["Political Science", "English", "Economics"],
  },
];

export default function CoursesSlider() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="w-full overflow-hidden bg-[#f6f9fc] py-10 sm:py-12 md:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-6">
        <div className="mb-6 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-[29px] font-bold leading-none tracking-[-0.03em] text-[#063B72] sm:text-[34px] md:text-[40px]">
            Courses
          </h2>

          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={handlePrev} aria-label="Previous course" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8E2EC] bg-white text-[#063B72] shadow-[0_6px_20px_rgba(6,59,114,0.08)] transition-all duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-11 sm:w-11">
              <ChevronLeft size={19} strokeWidth={2.1} />
            </button>

            <button type="button" onClick={handleNext} aria-label="Next course" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8E2EC] bg-white text-[#063B72] shadow-[0_6px_20px_rgba(6,59,114,0.08)] transition-all duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-11 sm:w-11">
              <ChevronRight size={19} strokeWidth={2.1} />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-[4px] bg-gradient-to-r from-[#f6f9fc] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-[4px] bg-gradient-to-l from-[#f6f9fc] to-transparent" />

          <Swiper onSwiper={(swiper) => { swiperRef.current = swiper; }} slidesPerView={1} spaceBetween={14} speed={550} grabCursor={true} watchOverflow={true} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 16 }, 1024: { slidesPerView: 3, spaceBetween: 18 } }} className="!overflow-hidden">
            {courseCards.map((item, index) => (
              <SwiperSlide key={`${item.course}-${index}`} className="h-auto">
                <CourseCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ item }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[20px] border border-[#E1E8EF] bg-white shadow-[0_10px_30px_rgba(6,59,114,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(6,59,114,0.12)]">
      <div className="absolute left-0 right-0 top-0 z-20 h-[5px]" style={{ backgroundColor: item.color }} />
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[42px] opacity-[0.14]" style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }} />

      <div className="relative h-[150px] mt-2 w-full overflow-hidden sm:h-[155px]">
        <Image src={item.image} alt={`${item.course} online course`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative px-5 pb-6 pt-4 sm:px-6">
        <h3 className="text-[26px] font-bold leading-none tracking-[-0.03em] text-[#063B72] sm:text-[28px]">
          {item.course}
        </h3>

        <div className="mt-4 h-[2px] w-11 rounded-full" style={{ backgroundColor: item.color }} />

        <div className="mt-5 space-y-3.5">
          {item.specializations.map((specialization, index) => (
            <div key={specialization} className="flex items-start gap-3">
              <span className="mt-[1px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white shadow-sm" style={{ backgroundColor: item.color }}>
                {index + 1}
              </span>

              <p className="pt-[3px] text-[14px] font-medium leading-[1.45] text-[#415873] sm:text-[15px]">
                {specialization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}