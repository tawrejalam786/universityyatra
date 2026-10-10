
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Riya Mehta",
    role: "Online MBA Student",
    text: "I was confused between several universities and programs. University Yatra helped me compare my options clearly and choose a program that actually fit my career plans.",
    color: "blue",
    image: "/images/testimonials/riya.webp",
  },
  {
    name: "Arjun Malhotra",
    role: "MS Applicant, USA",
    text: "The university selection process felt overwhelming at first. The team helped me shortlist programs based on my profile and made the application process much easier to manage.",
    color: "green",
    image: "/images/testimonials/arjun.webp",
  },
  {
    name: "Simran Kaur",
    role: "Postgraduate Applicant, Canada",
    text: "I had a lot of questions about courses, applications and the study permit process. Having everything explained step by step made the whole process feel much more manageable.",
    color: "teal",
    image: "/images/testimonials/simran.webp",
  },
  {
    name: "Aditya Sharma",
    role: "Master's Applicant, Europe",
    text: "I was looking at multiple European countries and had no idea where to start. The counselling helped me compare universities, courses and requirements before making a decision.",
    color: "purple",
    image: "/images/testimonials/aditya.webp",
  },
  {
    name: "Ananya Kapoor",
    role: "Master's Applicant, UK",
    text: "What helped me most was the clarity. I understood which universities suited my profile, what documents I needed and what the next steps would be.",
    color: "orange",
    image: "/images/testimonials/ananya.webp",
  },
  {
    name: "Kabir Singh",
    role: "Master's Applicant, Ireland",
    text: "I initially considered only a few popular destinations. The team introduced me to options in Ireland that matched my course and career interests much better.",
    color: "blue",
    image: "/images/testimonials/kabir.webp",
  },
  {
    name: "Noor Khan",
    role: "Study Abroad Applicant",
    text: "I knew my academic story but struggled to put it into an SOP. The guidance helped me structure my experiences and make my goals much clearer.",
    color: "green",
    image: "/images/testimonials/noor.webp",
  },
  {
    name: "Rahul Verma",
    role: "International Student",
    text: "There were so many documents and requirements to keep track of. The documentation support helped me understand what was needed and avoid unnecessary confusion.",
    color: "teal",
    image: "/images/testimonials/rahul.webp",
  },
  {
    name: "Ishita Jain",
    role: "Study Abroad Aspirant",
    text: "The counselling session gave me clarity that I was missing. Instead of pushing me towards one destination, they helped me understand which options actually made sense for me.",
    color: "purple",
    image: "/images/testimonials/ishita.webp",
  },
  {
    name: "Yash Gupta",
    role: "International Education Applicant",
    text: "From choosing the right course to working through the application process, having one team to guide me at each stage made the journey much less stressful.",
    color: "orange",
    image: "/images/testimonials/yash.webp",
  },
];

const colors = {
  blue: "#0797D1",
  green: "#12B985",
  teal: "#13A69A",
  purple: "#7254D8",
  orange: "#F59E0B",
};

const rotations = {
  blue: "-3deg",
  green: "2deg",
  teal: "-2deg",
  purple: "2deg",
  orange: "-3deg",
};

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-9">
          <h2 className="max-w-[850px] text-[27px] font-bold leading-[1.15] tracking-[-0.035em] text-[#102C4A] sm:text-[34px] md:text-[38px]">
            What Students Like About{" "}
            <span className="text-[#008080]">
              University Yatra™
            </span>
          </h2>

          {/* DESKTOP ARROWS */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button type="button" onClick={handlePrev} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5EC] bg-white text-[#617486] shadow-sm transition-all duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white">
              <ChevronLeft size={18} />
            </button>

            <button type="button" onClick={handleNext} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5EC] bg-white text-[#617486] shadow-sm transition-all duration-300 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SLIDER VIEWPORT */}
        <div className="relative w-full min-w-0 overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            slidesPerView={1}
            spaceBetween={16}
            speed={600}
            grabCursor={true}
            watchOverflow={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".testimonial-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!w-full !overflow-hidden !px-1 !pb-5 !pt-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`} className="!h-auto">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MOBILE ARROWS */}
        <div className="mt-3 flex items-center justify-center gap-3 sm:hidden">
          <button type="button" onClick={handlePrev} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5EC] bg-white text-[#52687A] shadow-sm transition hover:bg-[#18B8B5] hover:text-white">
            <ChevronLeft size={18} />
          </button>

          <button type="button" onClick={handleNext} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5EC] bg-white text-[#52687A] shadow-sm transition hover:bg-[#18B8B5] hover:text-white">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* PAGINATION */}
        <div className="testimonial-pagination !relative mt-5 flex min-h-[10px] items-center justify-center gap-2 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!h-[8px] [&_.swiper-pagination-bullet]:!w-[8px] [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#C9D6E1] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet-active]:!w-[28px] [&_.swiper-pagination-bullet-active]:!bg-[#18B8B5]" />

      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({ item }) {
  const backgroundColor = colors[item.color];
  const rotation = rotations[item.color];

  return (
    <article className="relative mx-auto flex h-full w-full min-w-0 flex-col px-2 pb-4 pt-1">

      {/* COLORED BACK CARD */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-2 bottom-4 top-5 rounded-[23px] transition-transform duration-300" style={{ backgroundColor: backgroundColor, transform: `rotate(${rotation})` }} />

      {/* MAIN CARD */}
      <div className="group relative z-10 flex min-h-[310px] flex-1 flex-col rounded-[22px] border border-[#EDF1F4] bg-white px-4 pb-6 pt-[58px] shadow-[0_10px_28px_rgba(15,45,70,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,45,70,0.15)] sm:min-h-[300px] sm:px-5">

        {/* PROFILE IMAGE */}
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full border-[4px] border-white bg-[#E8EEF3] shadow-[0_5px_15px_rgba(0,0,0,0.12)] sm:h-[76px] sm:w-[76px]">
            <Image src={item.image} alt={item.name} fill sizes="76px" className="object-cover object-center" />
          </div>
        </div>

        {/* STUDENT NAME */}
        <div className="text-center">
          <h3 className="text-[15px] font-bold leading-tight text-[#263A4D] sm:text-[16px]">
            {item.name}
          </h3>

          <p className="mt-1 text-[11px] italic text-[#6E8291]">
            {item.role}
          </p>
        </div>

        {/* BADGES */}
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          <span className="rounded-full bg-[#E8FAF2] px-2.5 py-1 text-[8px] font-semibold text-[#159B63] sm:text-[9px]">
            Verified Student
          </span>

          <span className="rounded-full bg-[#F1F5F8] px-2.5 py-1 text-[8px] font-medium text-[#738492] sm:text-[9px]">
            University Yatra
          </span>
        </div>

        {/* REVIEW TEXT */}
        <div className="mt-4 flex flex-1 items-center justify-center">
          <p className="text-center text-[11px] leading-[1.6] text-[#6B7D8B] sm:text-[12px]">
            <span className="text-[17px] text-[#A9B7C1]">“</span>
            {item.text}
            <span className="text-[17px] text-[#A9B7C1]">”</span>
          </p>
        </div>

      </div>

      {/* BOTTOM STAR */}
      <div className="absolute bottom-0 left-1/2 z-30 flex h-[27px] w-[27px] -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#FFC72C] shadow-[0_3px_8px_rgba(0,0,0,0.12)]">
        <Star size={11} fill="white" className="text-white" />
      </div>

    </article>
  );
}
