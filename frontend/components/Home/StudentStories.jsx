// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { Playfair_Display } from "next/font/google";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Keyboard } from "swiper/modules";
// import { ArrowLeft, ArrowRight, BookOpen, Quote, Star } from "lucide-react";

// import "swiper/css";

// /**
//  * "Student stories" – testimonial carousel.
//  *
//  * ⚠️ The stories below are SAMPLE TEXT so you can see the design. Replace them
//  * with real student testimonials (with the student's permission) before launch.
//  *
//  * - Laptop / desktop: three cards visible, the centre (active) one is the
//  *   highlighted navy card. Use the arrows, dots, keyboard arrows, swipe, or click
//  *   a side card to change it.
//  * - Mobile: swipe through cards, with the next card peeking in.
//  * - Photos are optional: set `image` to a square photo (e.g. 200 × 200 px) or leave
//  *   it `null` to show the student's initials.
//  *
//  * The italic serif on the heading line and closing quote uses Playfair Display
//  * (loaded right here). To drop it, delete the font lines and use `font-serif`.
//  */
// const serif = Playfair_Display({
//   subsets: ["latin"],
//   style: ["italic"],
//   weight: ["500", "600"],
//   display: "swap",
// });

// const STORIES = [
//   {
//     name: "Aarav S.",
//     detail: "MSc Data Science · Canada",
//     quote:
//       "I was torn between three countries. My counsellor mapped out my profile, budget and goals, and suddenly the right choice felt obvious.",
//     image: null,
//   },
//   {
//     name: "Priya M.",
//     detail: "MBA · United Kingdom",
//     quote:
//       "From SOP feedback to visa preparation, someone was with me at every single step. I never felt like just another application in a queue.",
//     image: null,
//   },
//   {
//     name: "Rahul K.",
//     detail: "BEng Engineering · Australia",
//     quote:
//       "Clear timelines, honest advice and zero pressure. Every document was checked twice before I hit submit, and it showed in the result.",
//     image: null,
//   },
//   {
//     name: "Sneha D.",
//     detail: "Business Studies · New Zealand",
//     quote:
//       "They explained scholarships and costs in plain language, so my family and I could plan properly and decide with confidence.",
//     image: null,
//   },
//   {
//     name: "Imran A.",
//     detail: "MS Computer Science · USA",
//     quote:
//       "The team kept me updated on every deadline. Knowing exactly what came next took away most of my stress.",
//     image: null,
//   },
// ];

// function initials(name) {
//   return name
//     .split(" ")
//     .map((p) => p[0])
//     .join("")
//     .replace(/[^A-Za-z]/g, "")
//     .slice(0, 2)
//     .toUpperCase();
// }

// function Stars({ active }) {
//   return (
//     <div role="img" aria-label="5 out of 5 stars" className="flex gap-1">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           aria-hidden="true"
//           className={`size-4 fill-current sm:size-5 ${
//             active ? "text-brand-teal" : "text-brand-teal-ink"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

// function StoryCard({ s, active }) {
//   return (
//     <figure
//       className={`relative flex w-full flex-col rounded-[28px] p-6 transition-[transform,box-shadow] duration-300 motion-reduce:transition-none sm:p-8 ${
//         active
//           ? "bg-linear-to-br from-brand-navy to-brand-navy-dark text-white shadow-[0_30px_60px_-24px_rgba(0,40,90,0.7)] lg:-translate-y-2"
//           : "border border-brand-navy/10 bg-white text-slate-700 shadow-[0_18px_40px_-26px_rgba(0,40,90,0.35)]"
//       }`}
//     >
//       <div className="flex items-start justify-between">
//         <Stars active={active} />
//         <Quote
//           aria-hidden="true"
//           className={`size-10 fill-current sm:size-12 ${
//             active ? "text-brand-teal/40" : "text-brand-navy/10"
//           }`}
//           strokeWidth={0}
//         />
//       </div>

//       <blockquote className="mt-5 flex-1 text-[1.02rem] leading-[1.7] sm:text-lg">
//         &ldquo;{s.quote}&rdquo;
//       </blockquote>

//       <figcaption
//         className={`mt-6 flex items-center gap-4 border-t pt-5 ${
//           active ? "border-white/15" : "border-brand-navy/10"
//         }`}
//       >
//         {s.image ? (
//           <Image
//             src={s.image}
//             alt=""
//             width={56}
//             height={56}
//             className={`size-14 rounded-full object-cover ring-2 ${
//               active ? "ring-brand-teal" : "ring-brand-navy/10"
//             }`}
//           />
//         ) : (
//           <span
//             aria-hidden="true"
//             className={`grid size-14 shrink-0 place-items-center rounded-full text-lg font-bold ring-2 ${
//               active
//                 ? "bg-brand-teal text-brand-navy-dark ring-white/25"
//                 : "bg-brand-navy/10 text-brand-navy ring-brand-navy/5"
//             }`}
//           >
//             {initials(s.name)}
//           </span>
//         )}
//         <div className="min-w-0">
//           <p className={`font-bold ${active ? "text-white" : "text-brand-navy-dark"}`}>
//             {s.name}
//           </p>
//           <p
//             className={`text-sm font-medium ${
//               active ? "text-brand-teal" : "text-brand-teal-ink"
//             }`}
//           >
//             {s.detail}
//           </p>
//         </div>
//       </figcaption>
//     </figure>
//   );
// }

// function NavArrow({ direction, onClick }) {
//   const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={direction === "prev" ? "Previous story" : "Next story"}
//       className="grid size-11 place-items-center rounded-full border border-brand-navy/20 bg-white text-brand-navy transition-colors hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal motion-reduce:transition-none"
//     >
//       <Icon aria-hidden="true" className="size-5" />
//     </button>
//   );
// }

// export default function StudentStories({
//   stories = STORIES,
//   storiesHref = "/success-stories", // change to your real stories page
// }) {
//   const [swiper, setSwiper] = useState(null);
//   const [active, setActive] = useState(Math.floor(stories.length / 2));

//   return (
//     <section
//       aria-labelledby="stories-title"
//       className="relative isolate overflow-hidden bg-linear-to-b from-white via-tint-sky/40 to-white py-14 sm:py-20 lg:py-10"
//     >
//       {/* Faint open-book watermark + soft glow */}
//       <BookOpen
//         aria-hidden="true"
//         strokeWidth={0.6}
//         className="pointer-events-none absolute right-[4%] top-14 -z-10 hidden size-[22rem] text-brand-navy/[0.06] md:block"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute -left-24 top-1/3 -z-10 size-80 rounded-full bg-brand-teal/10 blur-3xl"
//       />

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <header className="mx-auto max-w-3xl text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal-ink sm:text-sm">
//             Student stories
//           </p>
//           <h2
//             id="stories-title"
//             className="mt-3 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-brand-navy-dark sm:text-5xl lg:text-[3.4rem]"
//           >
//             Real stories,
//             <span
//               className={`${serif.className} mt-1 block bg-linear-to-r from-brand-navy to-brand-teal-ink bg-clip-text pb-2 font-semibold italic text-transparent`}
//             >
//               from students like you.
//             </span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
//             Behind every offer letter is a moment of clarity, a little courage and
//             the right guidance. Here&apos;s how our students found their way.
//           </p>
//         </header>

//         {/* Carousel */}
//         <div className="-mx-4 mt-10 sm:-mx-6 sm:mt-14 lg:mx-0">
//           <Swiper
//             modules={[A11y, Keyboard]}
//             centeredSlides
//             slidesPerView="auto"
//             spaceBetween={16}
//             breakpoints={{ 1024: { spaceBetween: 24 } }}
//             initialSlide={active}
//             slideToClickedSlide
//             grabCursor
//             rewind
//             speed={450}
//             keyboard={{ enabled: true }}
//             onSwiper={setSwiper}
//             onSlideChange={(s) => setActive(s.activeIndex)}
//             className="pb-14! pt-8!"
//           >
//             {stories.map((s) => (
//               <SwiperSlide
//                 key={s.name}
//                 className="flex! h-auto! w-[86%]! sm:w-[26rem]! lg:w-[calc((100%-3rem)/3)]!"
//               >
//                 {({ isActive }) => <StoryCard s={s} active={isActive} />}
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Controls */}
//         <div className="-mt-4 flex items-center justify-center gap-4">
//           <NavArrow direction="prev" onClick={() => swiper?.slidePrev()} />
//           <div role="group" aria-label="Choose a story" className="flex items-center">
//             {stories.map((s, i) => (
//               <button
//                 key={s.name}
//                 type="button"
//                 onClick={() => swiper?.slideTo(i)}
//                 aria-label={`Show story from ${s.name}`}
//                 aria-current={i === active ? "true" : undefined}
//                 className="grid h-8 place-items-center rounded-full px-1 focus-visible:outline-2 focus-visible:outline-brand-teal"
//               >
//                 <span
//                   className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
//                     i === active ? "w-8 bg-brand-teal" : "w-2.5 bg-brand-navy/25"
//                   }`}
//                 />
//               </button>
//             ))}
//           </div>
//           <NavArrow direction="next" onClick={() => swiper?.slideNext()} />
//         </div>

//         {/* Closing line + link */}
//         <div className="mt-12 text-center sm:mt-14">
//           <p
//             className={`${serif.className} mx-auto max-w-xl text-balance text-xl italic text-slate-500 sm:text-2xl`}
//           >
//             &ldquo;Your future campus is waiting for you to take the first step.&rdquo;
//           </p>
//           {/* <Link
//             href={storiesHref}
//             className="group mt-6 inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-base font-bold text-brand-navy underline decoration-brand-teal decoration-2 underline-offset-8 hover:text-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
//           >
//             Read more student stories
//             <ArrowRight
//               aria-hidden="true"
//               className="size-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
//             />
//           </Link> */}
//         </div>
//       </div>
//     </section>
//   );
// }


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
   Add more student objects here in future.
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
   PINK DECORATIVE ACCENTS
========================================== */

function PinkMarks({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 85" fill="none" className={className}>
      <path d="M14 44 L39 10" stroke="#FF7896" strokeWidth="7" strokeLinecap="round" />
      <path d="M43 54 L72 25" stroke="#FF7896" strokeWidth="7" strokeLinecap="round" />
      <path d="M54 75 L91 62" stroke="#FF7896" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function SmallPinkMarks({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 45 42" fill="none" className={className}>
      <path d="M6 19 L18 4" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" />
      <path d="M21 25 L38 14" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" />
      <path d="M22 35 L39 35" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/* ==========================================
   CURVED ARROWS
========================================== */

function CurvedArrow({ direction = "left", className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 110" fill="none" className={className}>
      {direction === "left" ? (
        <>
          <path d="M150 65 C120 102 79 96 82 65 C84 38 117 45 107 71 C93 105 28 86 22 20" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" />
          <path d="M9 36 L22 20 L38 33" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : direction === "right" ? (
        <>
          <path d="M10 65 C40 102 81 96 78 65 C76 38 43 45 53 71 C67 105 132 86 138 20" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" />
          <path d="M122 33 L138 20 L151 36" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M37 5 C20 35 40 70 72 69 C104 68 98 34 77 40 C52 48 79 93 142 88" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" />
          <path d="M126 72 L142 88 L124 103" stroke="#FF7896" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

/* ==========================================
   TESTIMONIAL CARD
========================================== */

function StoryCard({ story, className = "" }) {
  const Icon = story.icon;

  return (
    <article className={`relative flex min-w-0 flex-col rounded-[30px] bg-[#EFF9FD] px-5 py-6 sm:px-7 sm:py-7 lg:px-7 lg:py-7 ${className}`}>
      <div className="mb-3 flex items-start justify-between">
        <div className="relative">
          <span className="block text-[46px] font-extrabold leading-none tracking-[-0.075em] text-[#063B72] lg:text-[52px]">
            {story.number}.
          </span>
          <SmallPinkMarks className="absolute -right-8 -top-2 h-9 w-9" />
        </div>

        <span className="grid size-11 shrink-0 place-items-center rounded-[15px] bg-[#D7F6FA] text-[#063B72]">
          <Icon size={25} strokeWidth={1.7} />
        </span>
      </div>

      <h3 className="text-[18px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#063B72] sm:text-[21px]">
        {story.title}
      </h3>

      <p className="mt-3 text-[13px] leading-[1.75] text-[#415574] sm:text-[15px] lg:text-[15px]">
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
    <div className="relative mx-auto w-full max-w-[370px]">
      <div className="relative mx-auto h-[320px] w-[290px] sm:h-[360px] sm:w-[330px] lg:h-[370px] lg:w-[340px]">

        {/* ORGANIC NAVY SHAPE */}
        <div className="absolute inset-x-4 bottom-5 top-3 rotate-[-5deg] rounded-[47%_53%_41%_59%/52%_39%_61%_48%] bg-[#073B84]" />

        {/* STUDENT IMAGE */}
        <div className="absolute inset-x-4 bottom-5 top-3 overflow-hidden rounded-[47%_53%_41%_59%/52%_39%_61%_48%]">
          {showImage ? (
            <Image
              src={student.image}
              alt={`${student.name} - University Yatra student`}
              fill
              sizes="(min-width: 1024px) 340px, (min-width: 640px) 330px, 290px"
              className="object-cover object-center"
              onError={() => setFailedImage(student.image)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-[#073B84]">
              <span className="text-[85px] font-extrabold text-white/85">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* FLOATING GRADUATION ICON */}
        <span className="absolute left-0 top-[20%] z-10 grid size-[70px] place-items-center rounded-full bg-[#FFF5E0] text-[#063B72] shadow-[0_8px_20px_rgba(6,59,114,0.08)]">
          <GraduationCap size={35} strokeWidth={1.5} />
        </span>

        {/* FLOATING PLANE ICON */}
        <span className="absolute right-0 top-[47%] z-10 grid size-[66px] rotate-12 place-items-center rounded-[19px] bg-[#FFD1DD] text-[#063B72]">
          <Plane size={34} strokeWidth={1.5} />
        </span>

        {/* PINK MARKS */}
        <PinkMarks className="absolute -right-3 top-0 h-20 w-20 rotate-[-12deg]" />
      </div>

      {/* STUDENT NAME BRUSH STYLE */}
      <div className="relative z-20 mx-auto -mt-7 w-fit max-w-full rotate-[-3deg] rounded-[20px] bg-[#D6F4F9] px-7 py-3 sm:px-9">
        <h3 className="text-center text-[27px] font-extrabold tracking-[-0.04em] text-[#063B72] sm:text-[32px]">
          {student.name}
        </h3>
      </div>

      <div className="relative mx-auto mt-1 w-fit">
        <SmallPinkMarks className="absolute -left-10 -top-7 h-9 w-9 rotate-[-20deg]" />
        <SmallPinkMarks className="absolute -right-10 -top-8 h-9 w-9 rotate-[130deg]" />
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

      {/* DESKTOP REFERENCE LAYOUT */}
      <div className="hidden lg:block">

        <div className="relative grid grid-cols-[minmax(0,1fr)_minmax(300px,360px)_minmax(0,1fr)] items-center gap-6 xl:gap-9">

          {/* LEFT STORY */}
          <div className="relative z-10">
            <StoryCard story={admission} />
            <CurvedArrow direction="left" className="pointer-events-none absolute -right-[95px] top-[44%] z-20 h-[105px] w-[135px]" />
          </div>

          {/* CENTER PORTRAIT */}
          <div className="relative z-20">
            <StudentPortrait student={student} />
          </div>

          {/* RIGHT STORY */}
          <div className="relative z-10">
            <StoryCard story={departure} />
            <CurvedArrow direction="right" className="pointer-events-none absolute -left-[95px] top-[44%] z-20 h-[105px] w-[135px]" />
          </div>
        </div>

        {/* BOTTOM STORY */}
        <div className="relative mx-auto mt-10 max-w-[540px]">
          <CurvedArrow direction="bottom" className="pointer-events-none absolute -top-[90px] left-[42%] z-20 h-[100px] w-[140px]" />
          <StoryCard story={loan} />
        </div>

      </div>

      {/* MOBILE / TABLET */}
      <div className="lg:hidden">

        <StudentPortrait student={student} />

        <div className="mx-auto mt-8 grid max-w-[780px] gap-4 sm:grid-cols-2">
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

export default function StudentTestimonials({ testimonials = TESTIMONIALS }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = testimonials.length > 1;

  if (!testimonials.length) return null;

  return (
    <section aria-labelledby="student-testimonials-title" className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <header className="mb-6 max-w-[750px] lg:mb-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E3F7FA] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#00A6BA]">
            <MessageSquare size={16} />
            Student Story
          </p>

          <h2 id="student-testimonials-title" className="text-balance text-[33px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#063B72] sm:text-[43px] lg:text-[51px]">
            A Journey of Support,
            <span className="block text-[#18B8B5]">
              In His Own Words.
            </span>
          </h2>

          <div aria-hidden="true" className="ml-36 mt-2 h-[5px] w-24 -rotate-3 rounded-full bg-[#FF7896] sm:ml-48" />
        </header>

        {/* TESTIMONIAL SWIPER */}
        <Swiper
          modules={[A11y, Keyboard]}
          slidesPerView={1}
          spaceBetween={24}
          speed={650}
          keyboard={{ enabled: hasMultiple }}
          allowTouchMove={hasMultiple}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
          className="w-full"
        >
          {testimonials.map((student) => (
            <SwiperSlide key={student.id}>
              <TestimonialSlide student={student} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* SHOW ONLY WHEN MULTIPLE STUDENTS */}
        {hasMultiple && (
          <div className="mt-8 flex items-center justify-center gap-5">

            <button type="button" onClick={() => swiper?.slidePrev()} disabled={activeIndex === 0} aria-label="Previous student" className="grid size-11 place-items-center rounded-full border border-[#063B72]/20 bg-white text-[#063B72] transition-colors hover:bg-[#063B72] hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((student, index) => (
                <button key={student.id} type="button" onClick={() => swiper?.slideTo(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "w-7 bg-[#063B72]" : "w-2 bg-[#063B72]/20"}`} />
              ))}
            </div>

            <button type="button" onClick={() => swiper?.slideNext()} disabled={activeIndex === testimonials.length - 1} aria-label="Next student" className="grid size-11 place-items-center rounded-full border border-[#063B72]/20 bg-white text-[#063B72] transition-colors hover:bg-[#063B72] hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowRight size={20} />
            </button>

          </div>
        )}

      </div>
    </section>
  );
}
