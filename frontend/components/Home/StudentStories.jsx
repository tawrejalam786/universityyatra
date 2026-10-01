"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight, BookOpen, Quote, Star } from "lucide-react";

import "swiper/css";

/**
 * "Student stories" – testimonial carousel.
 *
 * ⚠️ The stories below are SAMPLE TEXT so you can see the design. Replace them
 * with real student testimonials (with the student's permission) before launch.
 *
 * - Laptop / desktop: three cards visible, the centre (active) one is the
 *   highlighted navy card. Use the arrows, dots, keyboard arrows, swipe, or click
 *   a side card to change it.
 * - Mobile: swipe through cards, with the next card peeking in.
 * - Photos are optional: set `image` to a square photo (e.g. 200 × 200 px) or leave
 *   it `null` to show the student's initials.
 *
 * The italic serif on the heading line and closing quote uses Playfair Display
 * (loaded right here). To drop it, delete the font lines and use `font-serif`.
 */
const serif = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  display: "swap",
});

const STORIES = [
  {
    name: "Aarav S.",
    detail: "MSc Data Science · Canada",
    quote:
      "I was torn between three countries. My counsellor mapped out my profile, budget and goals, and suddenly the right choice felt obvious.",
    image: null,
  },
  {
    name: "Priya M.",
    detail: "MBA · United Kingdom",
    quote:
      "From SOP feedback to visa preparation, someone was with me at every single step. I never felt like just another application in a queue.",
    image: null,
  },
  {
    name: "Rahul K.",
    detail: "BEng Engineering · Australia",
    quote:
      "Clear timelines, honest advice and zero pressure. Every document was checked twice before I hit submit, and it showed in the result.",
    image: null,
  },
  {
    name: "Sneha D.",
    detail: "Business Studies · New Zealand",
    quote:
      "They explained scholarships and costs in plain language, so my family and I could plan properly and decide with confidence.",
    image: null,
  },
  {
    name: "Imran A.",
    detail: "MS Computer Science · USA",
    quote:
      "The team kept me updated on every deadline. Knowing exactly what came next took away most of my stress.",
    image: null,
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .replace(/[^A-Za-z]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ active }) {
  return (
    <div role="img" aria-label="5 out of 5 stars" className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`size-4 fill-current sm:size-5 ${
            active ? "text-brand-teal" : "text-brand-teal-ink"
          }`}
        />
      ))}
    </div>
  );
}

function StoryCard({ s, active }) {
  return (
    <figure
      className={`relative flex w-full flex-col rounded-[28px] p-6 transition-[transform,box-shadow] duration-300 motion-reduce:transition-none sm:p-8 ${
        active
          ? "bg-linear-to-br from-brand-navy to-brand-navy-dark text-white shadow-[0_30px_60px_-24px_rgba(0,40,90,0.7)] lg:-translate-y-2"
          : "border border-brand-navy/10 bg-white text-slate-700 shadow-[0_18px_40px_-26px_rgba(0,40,90,0.35)]"
      }`}
    >
      <div className="flex items-start justify-between">
        <Stars active={active} />
        <Quote
          aria-hidden="true"
          className={`size-10 fill-current sm:size-12 ${
            active ? "text-brand-teal/40" : "text-brand-navy/10"
          }`}
          strokeWidth={0}
        />
      </div>

      <blockquote className="mt-5 flex-1 text-[1.02rem] leading-[1.7] sm:text-lg">
        &ldquo;{s.quote}&rdquo;
      </blockquote>

      <figcaption
        className={`mt-6 flex items-center gap-4 border-t pt-5 ${
          active ? "border-white/15" : "border-brand-navy/10"
        }`}
      >
        {s.image ? (
          <Image
            src={s.image}
            alt=""
            width={56}
            height={56}
            className={`size-14 rounded-full object-cover ring-2 ${
              active ? "ring-brand-teal" : "ring-brand-navy/10"
            }`}
          />
        ) : (
          <span
            aria-hidden="true"
            className={`grid size-14 shrink-0 place-items-center rounded-full text-lg font-bold ring-2 ${
              active
                ? "bg-brand-teal text-brand-navy-dark ring-white/25"
                : "bg-brand-navy/10 text-brand-navy ring-brand-navy/5"
            }`}
          >
            {initials(s.name)}
          </span>
        )}
        <div className="min-w-0">
          <p className={`font-bold ${active ? "text-white" : "text-brand-navy-dark"}`}>
            {s.name}
          </p>
          <p
            className={`text-sm font-medium ${
              active ? "text-brand-teal" : "text-brand-teal-ink"
            }`}
          >
            {s.detail}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

function NavArrow({ direction, onClick }) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous story" : "Next story"}
      className="grid size-11 place-items-center rounded-full border border-brand-navy/20 bg-white text-brand-navy transition-colors hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal motion-reduce:transition-none"
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  );
}

export default function StudentStories({
  stories = STORIES,
  storiesHref = "/success-stories", // change to your real stories page
}) {
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(Math.floor(stories.length / 2));

  return (
    <section
      aria-labelledby="stories-title"
      className="relative isolate overflow-hidden bg-linear-to-b from-white via-tint-sky/40 to-white py-14 sm:py-20 lg:py-10"
    >
      {/* Faint open-book watermark + soft glow */}
      <BookOpen
        aria-hidden="true"
        strokeWidth={0.6}
        className="pointer-events-none absolute right-[4%] top-14 -z-10 hidden size-[22rem] text-brand-navy/[0.06] md:block"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/3 -z-10 size-80 rounded-full bg-brand-teal/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal-ink sm:text-sm">
            Student stories
          </p>
          <h2
            id="stories-title"
            className="mt-3 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-brand-navy-dark sm:text-5xl lg:text-[3.4rem]"
          >
            Real stories,
            <span
              className={`${serif.className} mt-1 block bg-linear-to-r from-brand-navy to-brand-teal-ink bg-clip-text pb-2 font-semibold italic text-transparent`}
            >
              from students like you.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Behind every offer letter is a moment of clarity, a little courage and
            the right guidance. Here&apos;s how our students found their way.
          </p>
        </header>

        {/* Carousel */}
        <div className="-mx-4 mt-10 sm:-mx-6 sm:mt-14 lg:mx-0">
          <Swiper
            modules={[A11y, Keyboard]}
            centeredSlides
            slidesPerView="auto"
            spaceBetween={16}
            breakpoints={{ 1024: { spaceBetween: 24 } }}
            initialSlide={active}
            slideToClickedSlide
            grabCursor
            rewind
            speed={450}
            keyboard={{ enabled: true }}
            onSwiper={setSwiper}
            onSlideChange={(s) => setActive(s.activeIndex)}
            className="pb-14! pt-8!"
          >
            {stories.map((s) => (
              <SwiperSlide
                key={s.name}
                className="flex! h-auto! w-[86%]! sm:w-[26rem]! lg:w-[calc((100%-3rem)/3)]!"
              >
                {({ isActive }) => <StoryCard s={s} active={isActive} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controls */}
        <div className="-mt-4 flex items-center justify-center gap-4">
          <NavArrow direction="prev" onClick={() => swiper?.slidePrev()} />
          <div role="group" aria-label="Choose a story" className="flex items-center">
            {stories.map((s, i) => (
              <button
                key={s.name}
                type="button"
                onClick={() => swiper?.slideTo(i)}
                aria-label={`Show story from ${s.name}`}
                aria-current={i === active ? "true" : undefined}
                className="grid h-8 place-items-center rounded-full px-1 focus-visible:outline-2 focus-visible:outline-brand-teal"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    i === active ? "w-8 bg-brand-teal" : "w-2.5 bg-brand-navy/25"
                  }`}
                />
              </button>
            ))}
          </div>
          <NavArrow direction="next" onClick={() => swiper?.slideNext()} />
        </div>

        {/* Closing line + link */}
        <div className="mt-12 text-center sm:mt-14">
          <p
            className={`${serif.className} mx-auto max-w-xl text-balance text-xl italic text-slate-500 sm:text-2xl`}
          >
            &ldquo;Your future campus is waiting for you to take the first step.&rdquo;
          </p>
          <Link
            href={storiesHref}
            className="group mt-6 inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-base font-bold text-brand-navy underline decoration-brand-teal decoration-2 underline-offset-8 hover:text-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
          >
            Read more student stories
            <ArrowRight
              aria-hidden="true"
              className="size-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
