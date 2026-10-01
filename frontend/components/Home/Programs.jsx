"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarDays,
  Clapperboard,
  Database,
  MapPin,
  Monitor,
  PenTool,
  Settings,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";

import "swiper/css";

/**
 * "Programs" – filter tabs + swipeable program cards + closing banner.
 *
 * Add / edit programs in the list below. `level` must match a filter id
 * ("diploma" | "bachelor" | "master"). Photos: landscape, about 800 × 480 px,
 * saved in /public/images/programs/. With no photo a navy placeholder is shown.
 * `featured: true` makes a card the dark navy highlight card.
 */
const FILTERS = [
  { id: "all", label: "All Programs" },
  { id: "diploma", label: "Diploma" },
  { id: "bachelor", label: "Bachelor's" },
  { id: "master", label: "Master's / PhD" },
];

const PROGRAMS = [
  {
    slug: "graphic-design",
    level: "diploma",
    degree: "Diploma",
    name: "Graphic Design",
    description: "Learn design fundamentals, creative tools and build a professional portfolio.",
    duration: "1 Year",
    mode: "On Campus / Online",
    icon: PenTool,
    badge: { icon: Star, label: "Featured" },
    featured: true,
    image: "/images/programs/graphic-design.png", // "/images/programs/graphic-design.jpg"
  },
  {
    slug: "computer-science",
    level: "bachelor",
    degree: "BSc",
    name: "Computer Science",
    description: "Build a strong foundation in technology and solve real-world problems.",
    duration: "3 Years",
    mode: "On Campus / Online",
    icon: Monitor,
    badge: { icon: ThumbsUp, label: "Popular" },
    image: "/images/programs/computer-science.png", // "/images/programs/computer-science.png"
  },
  {
    slug: "engineering",
    level: "master",
    degree: "MSc",
    name: "Engineering",
    description: "Gain advanced knowledge and work on innovative research projects.",
    duration: "2 Years",
    mode: "On Campus / Online",
    icon: Settings,
    badge: { icon: TrendingUp, label: "In Demand" },
    image: "/images/programs/engineering.png", // "/images/programs/engineering.jpg"
  },
  {
    slug: "multimedia-design",
    level: "diploma",
    degree: "Diploma",
    name: "Multimedia Design",
    description: "Master creative tools and bring your ideas to life with stunning visuals.",
    duration: "1 Year",
    mode: "On Campus / Online",
    icon: Clapperboard,
    badge: { icon: Briefcase, label: "Career Focus" },
    image: "/images/programs/multimedia-design.png", // "/images/programs/multimedia-design.jpg"
  },
  {
    slug: "business-administration",
    level: "bachelor",
    degree: "BBA",
    name: "Business Administration",
    description: "Develop leadership and management skills for a global business career.",
    duration: "3 Years",
    mode: "On Campus / Online",
    icon: Briefcase,
    badge: { icon: ThumbsUp, label: "Popular" },
    image: "/images/programs/business-administration.png", // "/images/programs/business-administration.jpg"
  },
  {
    slug: "data-science",
    level: "master",
    degree: "MSc",
    name: "Data Science",
    description: "Turn data into decisions with advanced analytics and machine learning.",
    duration: "2 Years",
    mode: "On Campus / Online",
    icon: Database,
    badge: { icon: TrendingUp, label: "In Demand" },
    image: "/images/programs/data-science.png", // "/images/programs/data-science.jpg"
  },
];

/* ---------- Program card ---------- */
function ProgramCard({ p }) {
  const Icon = p.icon;
  const Badge = p.badge.icon;
  const dark = p.featured;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border shadow-[0_14px_34px_-18px_rgba(0,40,90,0.4)] ${
        dark
          ? "border-brand-navy bg-linear-to-b from-brand-navy to-brand-navy-dark text-white"
          : "border-brand-navy/10 bg-white"
      }`}
    >
      {/* Photo */}
      <div className="relative h-36 shrink-0 sm:h-40">
        {p.image ? (
          <Image
            src={p.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 290px, (min-width: 640px) 45vw, 80vw"
            className="object-cover"
          />
        ) : (
          <div
            className={`absolute inset-0 grid place-items-center text-white/20 ${
              dark ? "bg-linear-to-br from-[#0a4a99] to-brand-navy" : "bg-linear-to-br from-[#3f6da8] to-[#2a5590]"
            }`}
          >
            <Icon aria-hidden="true" className="size-16" strokeWidth={1.25} />
          </div>
        )}
        {dark && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-brand-navy to-transparent"
          />
        )}
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
            dark ? "bg-brand-teal text-brand-navy-dark" : "bg-white text-brand-navy"
          }`}
        >
          <Badge
            aria-hidden="true"
            className={`size-3.5 ${dark ? "fill-current" : "text-brand-teal-ink"}`}
          />
          {p.badge.label}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span
            className={`grid size-12 shrink-0 place-items-center rounded-xl ${
              dark ? "bg-white/15 text-white" : "bg-tint-sky text-brand-navy"
            }`}
          >
            <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <p className={`text-xs font-medium ${dark ? "text-white/75" : "text-slate-500"}`}>
              {p.degree} in
            </p>
            <h3
              className={`text-lg font-bold leading-tight sm:text-xl ${
                dark ? "text-white" : "text-brand-navy-dark"
              }`}
            >
              {p.name}
            </h3>
          </div>
        </div>

        <p
          className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/85" : "text-slate-600"}`}
        >
          {p.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <ul
            className={`flex min-w-0 flex-wrap gap-x-3 gap-y-1.5 text-xs ${
              dark ? "text-white/80" : "text-slate-600"
            }`}
          >
            <li className="flex items-center gap-1.5">
              <CalendarDays aria-hidden="true" className="size-4 shrink-0" />
              {p.duration}
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              {p.mode}
            </li>
          </ul>

          {/* after:* makes the whole card tappable */}
          <Link
            href={`/programs/${p.slug}`}
            aria-label={`Explore ${p.degree} in ${p.name}`}
            className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors after:absolute after:inset-0 after:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal ${
              dark
                ? "bg-white text-brand-navy group-hover:bg-brand-teal"
                : "bg-tint-sky text-brand-navy group-hover:bg-brand-navy group-hover:text-white"
            }`}
          >
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Small round arrow ---------- */
function NavArrow({ direction, onClick, disabled }) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous programs" : "Next programs"}
      className="grid size-10 place-items-center rounded-full border border-brand-navy/20 bg-white text-brand-navy transition-colors hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal disabled:pointer-events-none disabled:opacity-40"
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  );
}

/* ---------- Section ---------- */
export default function Programs({ programs = PROGRAMS }) {
  const [filter, setFilter] = useState("all");
  const [swiper, setSwiper] = useState(null);
  const [state, setState] = useState({ begin: true, end: false, pages: 1, index: 0 });

  const visible = filter === "all" ? programs : programs.filter((p) => p.level === filter);

  // Read the values from Swiper right away (React may run the setState callback
  // later, after Swiper has been destroyed – e.g. in dev Strict Mode or when the
  // filter changes) and skip instances that no longer exist.
  const sync = (s) => {
    if (!s || s.destroyed || !s.snapGrid) return;
    const next = {
      begin: s.isBeginning,
      end: s.isEnd,
      pages: s.snapGrid.length,
      index: s.snapIndex,
    };
    setState((prev) =>
      prev.begin === next.begin &&
      prev.end === next.end &&
      prev.pages === next.pages &&
      prev.index === next.index
        ? prev
        : next,
    );
  };

  return (
    <section
      aria-labelledby="programs-title"
      className="relative isolate overflow-hidden bg-linear-to-b from-white to-tint-sky/60 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + paragraph */}
        <header className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-teal/15 px-4 py-2 text-sm font-semibold text-brand-teal-ink">
            <BookOpen aria-hidden="true" className="size-5" />
            Explore programs
          </p>
          <h2
            id="programs-title"
            className="mt-4 text-balance text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-brand-navy-dark sm:text-5xl"
          >
            Find the program that fits{" "}
            <span className="text-brand-teal-ink">your goals.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            From diplomas to doctorates, explore programs across top destinations
            and choose the path that matches your ambitions.
          </p>
        </header>

        {/* Filters + arrows */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter programs by level"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {FILTERS.map((f) => {
              const on = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={on}
                  className={`h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal ${
                    on
                      ? "bg-brand-navy text-white shadow-[0_8px_20px_-8px_rgba(0,56,112,0.7)]"
                      : "border border-brand-navy/15 bg-white text-slate-700 hover:border-brand-navy/40 hover:text-brand-navy"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <NavArrow direction="prev" onClick={() => swiper?.slidePrev()} disabled={state.begin} />
            <NavArrow direction="next" onClick={() => swiper?.slideNext()} disabled={state.end} />
          </div>
        </div>

        {/* Cards */}
        <div className="-mx-4 mt-5 sm:-mx-6 lg:mx-0">
          <Swiper
            key={filter}
            modules={[A11y, Keyboard]}
            slidesPerView={1.15}
            spaceBetween={14}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 16, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
              1024: { slidesPerView: 3.15, spaceBetween: 18, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
              1280: { slidesPerView: 4, spaceBetween: 20, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
            }}
            grabCursor
            keyboard={{ enabled: true }}
            onSwiper={setSwiper}
            onInit={sync}
            onSlideChange={sync}
            onResize={sync}
            onBreakpoint={sync}
            onUpdate={sync}
            onSnapGridLengthChange={sync}
            onReachBeginning={sync}
            onReachEnd={sync}
            onFromEdge={sync}
            className="pb-6! pt-2!"
          >
            {visible.map((p) => (
              <SwiperSlide key={p.slug} className="h-auto!">
                <ProgramCard p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Progress dots */}
        {state.pages > 1 && (
          <div aria-hidden="true" className="flex items-center justify-center gap-2">
            {Array.from({ length: state.pages }).map((_, i) => (
              <span
                key={i}
                className={`block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  i === state.index ? "w-6 bg-brand-navy" : "w-2 bg-brand-navy/25"
                }`}
              />
            ))}
          </div>
        )}

        {/* Closing banner */}
        <div className="mt-8 flex flex-col gap-5 overflow-hidden rounded-2xl border border-brand-navy/10 bg-tint-sky p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="relative grid size-16 shrink-0 place-items-center rounded-full bg-tint-sky-deep text-brand-navy">
              <Target aria-hidden="true" className="size-8" strokeWidth={1.75} />
              <Sparkles
                aria-hidden="true"
                className="absolute -left-2 -top-1 size-5 text-brand-teal-ink"
              />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-brand-navy sm:text-2xl">
                Your Future, Our Focus
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you want to specialize, upskill or start fresh — we have the
                right program for you.
              </p>
            </div>
          </div>

          <Link
            href="/programs"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-navy px-7 text-base font-semibold text-white transition-colors hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          >
            Explore All Programs
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
