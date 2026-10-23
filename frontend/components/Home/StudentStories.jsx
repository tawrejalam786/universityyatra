
"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Plane,
  Wallet,
  MessageSquare,
} from "lucide-react";

import "swiper/css";

/* ==========================================
   TESTIMONIAL DATA
========================================== */

const TESTIMONIALS = [
  {
    id: 1,
    name: "Tauheed Khan",
    university: "Algoma University",
    image: "/images/testimonials/tauheed-khan.png",
    stories: [
      {
        number: "01",
        title: "Getting Into Algoma University",
        quote:
          "I wasn't sure if my 3-year degree would be enough, but the UY team helped me figure things out and get into Algoma University.",
        icon: GraduationCap,
      },
      {
        number: "02",
        title: "Securing Loan",
        quote:
          "Coming from a middle-class family, arranging the funds felt overwhelming. With UY’s guidance, I secured a ₹40 lakh education loan.",
        icon: Wallet,
      },
      {
        number: "03",
        title: "Post Departure",
        quote:
          "Even after my admission, UY has continued to support me with French classes and guidance on planning my life after moving abroad.",
        icon: Plane,
      },
    ],
  },
];

/* ==========================================
   DECORATIVE MARKS
========================================== */

function PinkMarks({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 85" fill="none" className={className}>
      <path d="M14 44 L39 10" stroke="#5D93F8" strokeWidth="6" strokeLinecap="round" />
      <path d="M43 54 L72 25" stroke="#5D93F8" strokeWidth="6" strokeLinecap="round" />
      <path d="M54 75 L91 62" stroke="#5D93F8" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function SmallPinkMarks({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 45 42" fill="none" className={className}>
      <path d="M6 19 L18 4" stroke="#5D93F8" strokeWidth="4" strokeLinecap="round" />
      <path d="M21 25 L38 14" stroke="#5D93F8" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 35 L39 35" stroke="#5D93F8" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/* ==========================================
   CURVED ARROWS
   LEFT   = AMBER
   RIGHT  = GREEN
   BOTTOM = RED
========================================== */

function CurvedArrow({ direction = "left", className = "" }) {
  const arrowColors = {
    left: "#B45309",
    right: "#15803D",
    bottom: "#B91C1C",
  };

  const color = arrowColors[direction] || "#1765F5";

  return (
    <svg aria-hidden="true" viewBox="0 0 160 110" fill="none" className={className}>
      {direction === "left" ? (
        <>
          <path d="M150 65 C120 102 79 96 82 65 C84 38 117 45 107 71 C93 105 28 86 22 20" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <path d="M9 36 L22 20 L38 33" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : direction === "right" ? (
        <>
          <path d="M10 65 C40 102 81 96 78 65 C76 38 43 45 53 71 C67 105 132 86 138 20" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <path d="M122 33 L138 20 L151 36" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M37 5 C20 35 40 70 72 69 C104 68 98 34 77 40 C52 48 79 93 142 88" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <path d="M126 72 L142 88 L124 103" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

/* ==========================================
   TESTIMONIAL STORY CARD
========================================== */

function StoryCard({ story, className = "" }) {
  const Icon = story.icon;

  return (
    <article className={`relative flex min-w-0 flex-col rounded-[18px] border border-[#DCE7FC] bg-[#E8F0FE] px-4 py-4 sm:px-5 sm:py-4 ${className}`}>
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="relative">
          <span className="block text-[30px] font-extrabold leading-none tracking-[-0.06em] text-[#0C337B] lg:text-[34px]">
            {story.number}.
          </span>
          <SmallPinkMarks className="absolute -right-5 -top-2 h-6 w-6" />
        </div>

        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-white text-[#1765F5] sm:h-10 sm:w-10">
          <Icon size={20} strokeWidth={1.8} />
        </span>
      </div>

      <h3 className="text-[15px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#0C337B] sm:text-[16px]">
        {story.title}
      </h3>

      <p className="mt-1.5 text-[12px] leading-[1.55] text-[#415574] sm:text-[12.5px]">
        “{story.quote}”
      </p>
    </article>
  );
}

/* ==========================================
   STUDENT PORTRAIT
========================================== */

function StudentPortrait({ student }) {
  const [failedImage, setFailedImage] = useState(null);

  const initials = student.name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("");

  const showImage = Boolean(student.image) && failedImage !== student.image;

  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      <div className="relative mx-auto h-[245px] w-[220px] sm:h-[275px] sm:w-[245px] lg:h-[255px] lg:w-[230px]">

        {/* ORGANIC BLUE SHAPE */}
        <div className="absolute inset-x-4 bottom-5 top-3 rotate-[-5deg] rounded-[47%_53%_41%_59%/52%_39%_61%_48%] bg-[#6D28D9]" />

        {/* STUDENT IMAGE */}
        <div className="absolute inset-x-4 bottom-5 top-3 overflow-hidden rounded-[47%_53%_41%_59%/52%_39%_61%_48%]">
          {showImage ? (
            <Image
              src={student.image}
              alt={`${student.name} - University Yatra student`}
              fill
              sizes="(min-width: 1024px) 230px, (min-width: 640px) 245px, 220px"
              className="object-cover object-center"
              onError={() => setFailedImage(student.image)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-[#1047AC]">
              <span className="text-[60px] font-extrabold text-white/90">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* PLANE ICON */}
        <span className="absolute right-0 top-[47%] z-10 grid h-11 w-11 rotate-12 place-items-center rounded-[13px] bg-[#E8F0FE] text-[#1765F5]">
          <Plane size={23} strokeWidth={1.6} />
        </span>

        {/* DECORATIVE MARKS */}
        <PinkMarks className="absolute -right-1 top-0 h-[50px] w-[50px] rotate-[-12deg]" />
      </div>

      {/* STUDENT NAME */}
      <div className="relative z-20 mx-auto -mt-5 w-fit max-w-full rotate-[-3deg] rounded-[13px] bg-[#E8F0FE] px-5 py-2">
        <h3 className="text-center text-[20px] font-extrabold tracking-[-0.035em] text-[#0C337B] sm:text-[22px]">
          {student.name}
        </h3>
      </div>

      <div className="relative mx-auto mt-1 w-fit">
        <SmallPinkMarks className="absolute -left-7 -top-10 h-7 w-7 rotate-[-20deg]" />
        <SmallPinkMarks className="absolute -right-7 -top-7 h-7 w-7 rotate-[130deg]" />
      </div>
    </div>
  );
}

/* ==========================================
   SINGLE TESTIMONIAL SLIDE
========================================== */

function TestimonialSlide({ student }) {
  const [admission, loan, departure] = student.stories;

  return (
    <div className="w-full">

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block">
        <div className="relative mx-auto grid w-full max-w-[940px] grid-cols-[minmax(0,1fr)_minmax(220px,260px)_minmax(0,1fr)] items-center gap-3 xl:gap-5">

          {/* LEFT STORY */}
          <div className="relative z-10 min-w-0">
            <StoryCard story={admission} />
            <CurvedArrow direction="left" className="pointer-events-none absolute -right-[42px] top-[45%] z-20 h-[60px] w-[75px]" />
          </div>

          {/* CENTER STUDENT */}
          <div className="relative z-20 min-w-0">
            <StudentPortrait student={student} />
          </div>

          {/* RIGHT STORY */}
          <div className="relative z-10 min-w-0">
            <StoryCard story={departure} />
            <CurvedArrow direction="right" className="pointer-events-none absolute -left-[42px] top-[45%] z-20 h-[60px] w-[75px]" />
          </div>
        </div>

        {/* BOTTOM LOAN STORY */}
        <div className="relative mx-auto mt-3 max-w-[400px]">
          <CurvedArrow direction="bottom" className="pointer-events-none absolute -top-[52px] left-[42%] z-20 h-[60px] w-[85px]" />
          <StoryCard story={loan} />
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT */}
      <div className="lg:hidden">
        <StudentPortrait student={student} />

        <div className="mx-auto mt-5 grid max-w-[720px] gap-3 sm:grid-cols-2">
          <StoryCard story={admission} />
          <StoryCard story={loan} />

          <div className="sm:col-span-2">
            <StoryCard story={departure} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function StudentTestimonials({
  testimonials = TESTIMONIALS,
}) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = testimonials.length > 1;

  if (!testimonials.length) return null;

  return (
    <section aria-labelledby="student-testimonials-title" className="relative w-full overflow-hidden bg-[#E8F2F8] py-8 sm:py-10 lg:py-11">

      {/* ORIGINAL 1120px CONTAINER FOR HEADING ALIGNMENT */}
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
      <header className="mb-6 flex flex-col items-center text-center lg:mb-4">
        {/* BADGE */}
        <p className="mb-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#E8F0FE] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1765F5]">
          <MessageSquare size={14} />
          Student Story
        </p>

        {/* HEADING */}
        <h2
          id="student-testimonials-title"
          className="text-balance text-center text-[27px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0C337B] sm:text-[34px] lg:text-[39px]"
        >
          A Journey of Support,
          <span className="block text-[#1765F5]">
            In His Own Words.
          </span>
        </h2>

        {/* DECORATIVE UNDERLINE */}
        <div
          aria-hidden="true"
          className="mt-3 h-[4px] w-20 -rotate-3 rounded-full bg-[#5D93F8]"
        />
      </header>


        {/* TESTIMONIAL SWIPER */}
        <Swiper
          modules={[A11y, Keyboard]}
          slidesPerView={1}
          spaceBetween={20}
          speed={600}
          keyboard={{ enabled: hasMultiple }}
          allowTouchMove={hasMultiple}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
          className="!w-full"
        >
          {testimonials.map((student) => (
            <SwiperSlide key={student.id}>
              <TestimonialSlide student={student} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION - ONLY FOR MULTIPLE STUDENTS */}
        {hasMultiple && (
          <div className="mt-5 flex items-center justify-center gap-4">
            <button type="button" onClick={() => swiper?.slidePrev()} disabled={activeIndex === 0} aria-label="Previous student" className="grid h-10 w-10 place-items-center rounded-full border border-[#A2C1FB] bg-white text-[#0C337B] transition-colors hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((student, index) => (
                <button key={student.id} type="button" onClick={() => swiper?.slideTo(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "w-7 bg-[#1765F5]" : "w-2 bg-[#A2C1FB]"}`} />
              ))}
            </div>

            <button type="button" onClick={() => swiper?.slideNext()} disabled={activeIndex === testimonials.length - 1} aria-label="Next student" className="grid h-10 w-10 place-items-center rounded-full border border-[#A2C1FB] bg-white text-[#0C337B] transition-colors hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
