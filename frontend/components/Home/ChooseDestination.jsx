"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import {
  ArrowRight,
  Award,
  Briefcase,
  FileCheck2,
  Globe,
  GraduationCap,
  Landmark,
  Plane,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import "swiper/css";

/**
 * "Choose your destination"
 *  - Laptop / desktop (lg+): one large featured country + a stack of smaller ones.
 *  - Mobile / tablet: every country becomes a slide in a Swiper carousel.
 *
 * The FIRST country in the list is the featured one on desktop.
 * Photos: skyline/landmark photos, landscape ~ 1600 × 1000 px, in /public/images/countries/.
 * Flags: circular-crop-ready SVGs already in /public/images/flags/.
 * With no photo, a navy placeholder panel is shown.
 */
const COUNTRIES = [
  {
    slug: "canada",
    name: "Canada",
    flag: "/images/flags/ca.svg",
    image: "/images/countries/toronto.webp", // "/images/countries/canada.jpg"
    popular: true,
    tagline: "Quality. Diversity. Opportunity.",
    description: "World-class education, multicultural cities, endless opportunities.",
    highlights: [
      { icon: GraduationCap, label: "Top Universities" },
      { icon: Users, label: "Post Study Work" },
      { icon: FileCheck2, label: "PR Opportunities" },
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "/images/flags/ae.svg",
    image: "/images/countries/UAE_Dubai_Banner.webp", // "/images/countries/UAE_Dubai_Banner.webp"
    tagline: "Innovation. Diversity. Growth.",
    description: "A fast-growing global hub with modern universities and diverse careers.",
    highlights: [
      { icon: GraduationCap, label: "Top Universities" },
      { icon: Briefcase, label: "Career Opportunities" },
      { icon: Globe, label: "Multicultural Life" },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "/images/flags/gb.svg",
    image: "/images/countries/united_kingdom.png", // "/images/countries/united_kingdom.jpg"
    tagline: "Tradition. Excellence. Global Reach.",
    description: "Historic universities, shorter degrees and globally recognised qualifications.",
    highlights: [
      { icon: GraduationCap, label: "Top Universities" },
      { icon: Users, label: "Post Study Work" },
      { icon: Award, label: "Global Recognition" },
    ],
  },
  {
    slug: "usa",
    name: "USA",
    flag: "/images/flags/us.svg",
    image: "/images/countries/usa.png", // "/images/countries/usa.png"
    tagline: "Dream. Learn. Build.",
    description: "Leading research universities, flexible programmes and a huge choice of courses.",
    highlights: [
      { icon: GraduationCap, label: "Top Universities" },
      { icon: Briefcase, label: "Work Options" },
      { icon: Award, label: "Research Excellence" },
    ],
  },
];

const HEADER_POINTS = [
  { icon: GraduationCap, label: "Top Universities" },
  { icon: ShieldCheck, label: "Visa Guidance" },
  { icon: Briefcase, label: "Career Opportunities" },
];

/* ---------- small building blocks ---------- */
function Photo({ src, sizes }) {
  if (src) {
    return <Image src={src} alt="" fill sizes={sizes} className="object-cover" />;
  }
  return (
    <div className="absolute inset-0 grid place-items-center bg-linear-to-br from-[#0a4a99] to-brand-navy text-white/15">
      <Landmark aria-hidden="true" className="size-32" strokeWidth={1} />
    </div>
  );
}

function Flag({ src, className = "" }) {
  return (
    <Image
      src={src}
      alt=""
      width={64}
      height={64}
      className={`rounded-full object-cover shadow-lg ring-2 ring-white ${className}`}
    />
  );
}

/* ---------- Large card (desktop featured + every mobile slide) ---------- */
function FeaturedCard({ c, sizes }) {
  return (
    <article className="relative isolate h-full overflow-hidden rounded-3xl border border-brand-teal/40 bg-brand-navy lg:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]">
      <Photo src={c.image} sizes={sizes} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-brand-navy-dark/95 via-brand-navy-dark/35 to-transparent"
      />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-center gap-3">
          <Flag src={c.flag} className="size-12 sm:size-14" />
          {c.popular && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal px-3 py-1.5 text-xs font-bold text-brand-navy-dark">
              <Star aria-hidden="true" className="size-3.5 fill-current" />
              Most Popular
            </span>
          )}
        </div>

        <div>
          <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {c.name}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            {c.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/90 sm:text-sm">
            {c.highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon aria-hidden="true" className="size-4 text-brand-teal sm:size-5" />
                {label}
              </li>
            ))}
          </ul>

          {/* after:* makes the whole card tappable */}
          <Link
            href={`/study-abroad/${c.slug}`}
            className="group mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand-navy transition-colors after:absolute after:inset-0 after:z-10 hover:bg-tint-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:h-12 sm:text-base"
          >
            Explore Programs
            <ArrowRight
              aria-hidden="true"
              className="size-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Small card (desktop side stack) ---------- */
function CompactCard({ c }) {
  return (
    <Link
      href={`/study-abroad/${c.slug}`}
      className="group relative isolate block h-full overflow-hidden rounded-3xl border border-white/15 bg-brand-navy shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
    >
      <Photo src={c.image} sizes="(min-width: 1024px) 32vw, 90vw" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-brand-navy-dark/90 via-brand-navy-dark/35 to-brand-navy-dark/10"
      />

      <div className="relative flex h-full flex-col justify-between p-4 xl:p-5">
        <Flag src={c.flag} className="size-10 xl:size-11" />

        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white xl:text-2xl">{c.name}</h3>
            <p className="mt-0.5 text-sm text-white/85">{c.tagline}</p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-white/80 text-white transition-colors group-hover:bg-white group-hover:text-brand-navy xl:size-11">
            <ArrowRight aria-hidden="true" className="size-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ---------- Section ---------- */
export default function ChooseDestination({ countries = COUNTRIES }) {
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);
  const [featured, ...others] = countries;

  return (
    <section
      aria-labelledby="destinations-title"
      className="relative isolate overflow-hidden bg-linear-to-b from-brand-navy-dark to-[#003463] py-12 text-white sm:py-16 lg:py-20"
    >
      {/* Background: faint dotted "map", teal glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-[28rem] w-[75%] bg-[radial-gradient(circle,white_1.2px,transparent_1.2px)] bg-size-[14px_14px] opacity-[0.08] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 -z-10 size-[30rem] rounded-full bg-brand-teal/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dashed flight path (desktop only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-10 hidden text-brand-teal lg:block"
        >
          <svg viewBox="0 0 300 110" fill="none" className="h-28 w-72">
            <path
              d="M4 100C60 40 170 18 262 44"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <Plane className="absolute -right-1 top-3 size-9 fill-current" strokeWidth={1.5} />
        </div>

        {/* Header */}
        <header>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="hidden h-px w-8 bg-brand-teal/50 sm:block" />
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-teal/50 bg-brand-teal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-teal sm:text-sm">
              <Plane aria-hidden="true" className="size-4" />
              Choose your destination
            </p>
            <span aria-hidden="true" className="hidden h-px w-8 bg-brand-teal/50 sm:block" />
          </div>

          <h2
            id="destinations-title"
            className="mt-5 text-balance text-[1.75rem] font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]"
          >
            Find the Right Country for{" "}
            <span className="block text-brand-teal">Your Global Education Journey</span>
          </h2>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            Explore top countries, world-class universities and unlimited
            opportunities for your future.
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
            {HEADER_POINTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 sm:border-r sm:border-white/20 sm:pr-6 sm:last:border-r-0 sm:last:pr-0"
              >
                <Icon aria-hidden="true" className="size-6 text-brand-teal" strokeWidth={1.5} />
                {label}
              </li>
            ))}
          </ul>
        </header>

        {/* Mobile + tablet: swipeable carousel of ALL countries */}
        <div className="-mx-4 mt-8 sm:-mx-6 lg:hidden">
          <Swiper
            modules={[A11y, Keyboard]}
            centeredSlides
            slidesPerView="auto"
            spaceBetween={14}
            grabCursor
            keyboard={{ enabled: true }}
            onSwiper={setSwiper}
            onSlideChange={(s) => setActive(s.activeIndex)}
            className="py-3!"
          >
            {countries.map((c) => (
              <SwiperSlide key={c.slug} className="h-auto w-[86%]! sm:w-[26rem]!">
                <div className="h-[28rem] sm:h-[30rem]">
                  <FeaturedCard c={c} sizes="(min-width: 640px) 26rem, 86vw" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            role="group"
            aria-label="Choose a country"
            className="mt-3 flex items-center justify-center"
          >
            {countries.map((c, i) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => swiper?.slideTo(i)}
                aria-label={`Show ${c.name}`}
                aria-current={i === active ? "true" : undefined}
                className="grid h-8 place-items-center rounded-full px-1 focus-visible:outline-2 focus-visible:outline-brand-teal"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    i === active ? "w-8 bg-brand-teal" : "w-2.5 bg-white/35"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Laptop + desktop: featured card + side stack */}
        <div className="mt-10 hidden gap-5 lg:grid lg:h-[30rem] lg:grid-cols-[1.75fr_1fr] xl:h-[32rem] xl:gap-6">
          <FeaturedCard c={featured} sizes="(min-width: 1280px) 780px, 58vw" />
          <div className="grid min-h-0 grid-rows-3 gap-4">
            {others.slice(0, 3).map((c) => (
              <CompactCard key={c.slug} c={c} />
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <Link
            href="/study-abroad"
            className="group inline-flex items-center gap-2 rounded-md text-base font-semibold text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
          >
            Explore all destinations
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
