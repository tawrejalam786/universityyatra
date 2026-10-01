"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Keyboard, Navigation } from "swiper/modules";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";

/* ---------- University data ---------- */

const UNIVERSITIES = [
  {
    name: "University of Edinburgh",
    location: "Scotland, UK",
    href: "/universities/university-of-edinburgh",
    image: "/images/universities/edinburgh.webp",
    panel: "from-[#0a565f] to-[#12807b]",
  },
  {
    name: "University of Ottawa",
    location: "Canada",
    href: "/universities/university-of-ottawa",
    image: "/images/universities/ottawa.webp",
    panel: "from-brand-navy to-[#0b4b9c]",
  },
  {
    name: "Kazakhstan National Medical University",
    location: "Kazakhstan",
    href: "/universities/kazakhstan-national-medical-university",
    image: "/images/universities/kazakhstan.webp",
    panel: "from-[#1c4d8c] to-[#3a6cab]",
  },
  {
    name: "University of Melbourne",
    location: "Australia",
    href: "/universities/university-of-melbourne",
    image: null,
    panel: "from-[#0a565f] to-[#12807b]",
  },
  {
    name: "Technical University of Munich",
    location: "Germany",
    href: "/universities/technical-university-of-munich",
    image: null,
    panel: "from-brand-navy to-[#0b4b9c]",
  },
];

/*
  FIX: Swiper loop + slidesPerView="auto" needs about 2x more slides than
  are visible. 5 slides is not enough, so one side had no card. We repeat
  the list so the loop always has cards on both sides.
*/
const LOOP_SLIDES = [...UNIVERSITIES, ...UNIVERSITIES];
const TOTAL = UNIVERSITIES.length;

/* ---------- University card ---------- */

function UniversityCard({ uni, isActive }) {
  return (
    // No overflow-hidden here, so the student can pop out of the card (3D effect)
    <article className="relative flex h-full flex-col rounded-[22px] bg-white shadow-[0_18px_32px_-16px_rgba(0,42,85,0.4)] ring-1 ring-black/5">
      {/* Photo frame (rounded top only, does NOT clip the image) */}
      <div className="relative aspect-[4/2.65] shrink-0 rounded-t-[22px] bg-linear-to-br from-tint-sky to-tint-sky-deep">
        {uni.image ? (
          <Image
            src={uni.image}
            alt={`Students at ${uni.name}`}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 70vw"
            className="z-20 object-cover
              !h-[155%]
              !w-full
              !top-[-30%]
              sm:!top-[-28%]
              lg:!h-[140%]
              lg:!top-[-20%]"
          />
        ) : (
          <div className="grid size-full place-items-center text-brand-navy/25">
            <GraduationCap
              aria-hidden="true"
              className="size-16"
              strokeWidth={1.25}
            />
          </div>
        )}
      </div>

      {/* Colour panel: sits BELOW the image (z-10), image overlaps it (z-20) */}
      <div
        className={`relative z-10 flex flex-1 flex-col rounded-b-[22px] bg-linear-to-br px-4 pb-4 pt-8 sm:px-5 sm:pb-5 sm:pt-9 ${uni.panel}`}
      >
        {/* Location */}
        <span className="relative z-30 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-teal px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-navy-dark sm:text-[11px]">
          <MapPin aria-hidden="true" className="size-3" />
          {uni.location}
        </span>

        {/* Title */}
        <h3 className="relative z-30 mt-2 text-balance text-lg font-extrabold leading-tight tracking-tight text-white sm:text-[1.35rem]">
          {uni.name}
        </h3>

        {/* CTA */}
        <div className="relative z-30 mt-auto pt-3">
          <Link
            href={uni.href}
            tabIndex={isActive ? 0 : -1}
            className="pointer-events-none flex h-10 items-center justify-center gap-2 rounded-full border border-white/70 px-4 text-sm font-semibold text-white transition-colors group-[.swiper-slide-active]:pointer-events-auto group-[.swiper-slide-active]:border-white group-[.swiper-slide-active]:bg-white group-[.swiper-slide-active]:text-brand-navy group-[.swiper-slide-active]:hover:bg-tint-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Check eligibility
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Section ---------- */

export default function TopUniversities() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(1);

  // 0..4 index of the real university (for the dots)
  const activeDot = active % TOTAL;

  const arrowClass =
    "absolute top-1/2 z-20 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-navy shadow-[0_8px_24px_rgba(0,42,85,0.18)] transition hover:scale-105 hover:bg-tint-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal xl:grid motion-reduce:transition-none";

  return (
    <section
      aria-labelledby="top-universities-title"
      className="relative isolate overflow-hidden bg-white py-6 sm:py-8 lg:py-8"
    >
      {/* Soft blue glow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[38%] h-[62%] bg-[radial-gradient(55%_60%_at_50%_50%,var(--color-tint-sky-deep),transparent)] opacity-70"
      />

      {/* Heading */}
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-teal-ink sm:text-xs">
          Top universities
        </p>

        <h2
          id="top-universities-title"
          className="mt-1.5 text-balance text-xl font-extrabold leading-[1.1] tracking-tight text-brand-navy-dark sm:text-3xl lg:text-[2.2rem]"
        >
          <span className="sm:block">Discover global universities.</span>{" "}
          <span className="sm:block">Find where you belong.</span>
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-[0.95rem]">
          Explore universities across countries and take your next step.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-1 max-w-[90rem]">
        {/* Desktop Previous */}
        <button
          ref={setPrevEl}
          type="button"
          aria-label="Previous university"
          className={`${arrowClass} left-3 xl:left-8`}
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>

        {/* Desktop Next */}
        <button
          ref={setNextEl}
          type="button"
          aria-label="Next university"
          className={`${arrowClass} right-3 xl:right-8`}
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>

        <Swiper
          className="w-full !pb-4 !pt-14 sm:!pt-14"
          modules={[EffectCoverflow, Navigation, Keyboard, A11y]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: 120,
            modifier: 1,
            scale: 0.9,
            slideShadows: false,
          }}
          grabCursor
          centeredSlides
          loop
          watchSlidesProgress
          initialSlide={1}
          slidesPerView="auto"
          spaceBetween={16}
          speed={500}
          slideToClickedSlide
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: "Previous university",
            nextSlideMessage: "Next university",
          }}
          navigation={{
            prevEl,
            nextEl,
          }}
          onSwiper={(s) => {
            setSwiper(s);
            setActive(s.realIndex);
          }}
          onSlideChange={(s) => setActive(s.realIndex)}
        >
          {LOOP_SLIDES.map((uni, i) => (
            <SwiperSlide
              key={`${uni.name}-${i}`}
              className="
                group
                !h-auto
                !w-[70%]
                max-w-[19rem]
                opacity-0
                transition-opacity
                duration-500
                sm:!w-[20rem]
                sm:max-w-none
                lg:!w-[22rem]
                [&.swiper-slide-active]:opacity-100
                [&.swiper-slide-next]:opacity-100
                [&.swiper-slide-prev]:opacity-100
                [&:not(.swiper-slide-active,.swiper-slide-prev,.swiper-slide-next)]:pointer-events-none
                motion-reduce:transition-none
              "
            >
              <UniversityCard uni={uni} isActive={i === active} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile / Tablet controls + dots */}
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          aria-label="Previous university"
          className="grid size-9 place-items-center rounded-full border border-brand-navy/15 bg-white text-brand-navy transition-colors hover:bg-tint-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal motion-reduce:transition-none xl:hidden"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>

        {/* Custom dots: 5 dots for 5 real universities */}
        <div className="uni-pagination">
          {UNIVERSITIES.map((uni, i) => (
            <span
              key={uni.name}
              role="button"
              tabIndex={0}
              aria-label={`Go to ${uni.name}`}
              className={`swiper-pagination-bullet ${
                i === activeDot ? "swiper-pagination-bullet-active" : ""
              }`}
              onClick={() => swiper?.slideToLoop(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  swiper?.slideToLoop(i);
                }
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="Next university"
          className="grid size-9 place-items-center rounded-full border border-brand-navy/15 bg-white text-brand-navy transition-colors hover:bg-tint-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal motion-reduce:transition-none xl:hidden"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>

      {/* Explore link */}
      <div className="mt-3 text-center">
        <Link
          href="/universities"
          className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand-navy underline decoration-brand-navy/40 underline-offset-7 transition-colors hover:decoration-brand-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal sm:text-base"
        >
          Explore all universities
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}