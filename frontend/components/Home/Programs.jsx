
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
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Laptop,
  Settings,
  Scale,
  FlaskConical,
  Plane,
  Star,
  Target,
  Sparkles,
} from "lucide-react";

import "swiper/css";

/* =========================================
   CATEGORY FILTERS
========================================= */

const FILTERS = [
  { id: "all", label: "All Categories" },
  { id: "medical-health", label: "Medical & Health" },
  { id: "it-computer-science", label: "IT & Computer Science" },
  { id: "engineering", label: "Engineering" },
  { id: "business-commerce", label: "Business & Commerce" },
  { id: "arts-law-humanities", label: "Arts, Law & Humanities" },
  { id: "science-research", label: "Science & Research" },
  { id: "education", label: "Education" },
  { id: "hospitality-tourism", label: "Hospitality & Tourism" },
];

/* =========================================
   STUDY CATEGORIES
========================================= */

const PROGRAMS = [
  {
    slug: "medical-health",
    category: "medical-health",
    name: "Medical & Health",
    description:
      "Explore medicine, nursing, public health, healthcare management and allied health fields.",
    icon: HeartPulse,
    featured: true,
    image: "/images/programs/medical-health.webp",
  },
  {
    slug: "it-computer-science",
    category: "it-computer-science",
    name: "IT & Computer Science",
    description:
      "Discover software development, artificial intelligence, cybersecurity and computing.",
    icon: Laptop,
    featured: false,
    image: "/images/programs/computer-science.png",
  },
  {
    slug: "engineering",
    category: "engineering",
    name: "Engineering",
    description:
      "Explore engineering disciplines, emerging technologies and practical innovation.",
    icon: Settings,
    featured: false,
    image: "/images/programs/engineering.png",
  },
  {
    slug: "business-commerce",
    category: "business-commerce",
    name: "Business & Commerce",
    description:
      "Explore business management, finance, accounting, marketing and international commerce.",
    icon: BriefcaseBusiness,
    featured: false,
    image: "/images/programs/business-commerce.webp",
  },
  {
    slug: "arts-law-humanities",
    category: "arts-law-humanities",
    name: "Arts, Law & Humanities",
    description:
      "Discover law, creative arts, communication, social sciences and humanities.",
    icon: Scale,
    featured: false,
    image: "/images/programs/arts-law-humanities.webp",
  },
  {
    slug: "science-research",
    category: "science-research",
    name: "Science & Research",
    description:
      "Explore natural sciences, laboratory studies, scientific discovery and research pathways.",
    icon: FlaskConical,
    featured: false,
    image: "/images/programs/science-research.webp",
  },
  {
    slug: "education",
    category: "education",
    name: "Education",
    description:
      "Explore teaching, educational leadership, curriculum development and learning sciences.",
    icon: GraduationCap,
    featured: false,
    image: "/images/programs/education.webp",
  },
  {
    slug: "hospitality-tourism",
    category: "hospitality-tourism",
    name: "Hospitality & Tourism",
    description:
      "Discover hospitality management, tourism, travel services and event management.",
    icon: Plane,
    featured: false,
    image: "/images/programs/hospitality-tourism.webp",
  },
];

/* =========================================
   CATEGORY IMAGE
========================================= */

function CategoryImage({ category, dark }) {
  const [failedSrc, setFailedSrc] = useState(null);

  const Icon = category.icon;
  const hasImage = category.image && failedSrc !== category.image;

  return (
    <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-40">
      {hasImage ? (
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(min-width: 1280px) 290px, (min-width: 640px) 45vw, 80vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailedSrc(category.image)}
        />
      ) : (
        <div className={`absolute inset-0 grid place-items-center ${dark ? "bg-[#0A4A99] text-white" : "bg-[#E8F3FA] text-[#063B72]"}`}>
          <Icon aria-hidden="true" className="size-16" strokeWidth={1.3} />
        </div>
      )}

      {dark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#063B72]/80 to-transparent" />
      )}

      <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold shadow-sm ${dark ? "bg-[#18B8B5] text-[#063B72]" : "bg-white text-[#063B72]"}`}>
        <Star aria-hidden="true" className="size-3.5" />
        Explore Category
      </span>
    </div>
  );
}

/* =========================================
   CATEGORY CARD
========================================= */

function ProgramCard({ p }) {
  const Icon = p.icon;
  const dark = Boolean(p.featured);

  return (
    <article className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border shadow-[0_14px_34px_-18px_rgba(0,40,90,0.4)] transition-transform duration-300 hover:-translate-y-1 ${dark ? "border-[#063B72] bg-[#063B72] text-white" : "border-[#063B72]/10 bg-white text-[#063B72]"}`}>
      <CategoryImage category={p} dark={dark} />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${dark ? "bg-white/15 text-white" : "bg-[#EAF4FA] text-[#063B72]"}`}>
            <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
          </span>

          <div className="min-w-0">
            <p className={`mb-1 text-[10px] font-bold uppercase tracking-[0.1em] ${dark ? "text-white/70" : "text-[#18A6A3]"}`}>
              Study Category
            </p>

            <h3 className={`text-[17px] font-extrabold leading-[1.2] tracking-tight sm:text-[19px] ${dark ? "text-white" : "text-[#063B72]"}`}>
              {p.name}
            </h3>
          </div>
        </div>

        <p className={`mt-3 text-[13px] leading-[1.65] ${dark ? "text-white/85" : "text-slate-600"}`}>
          {p.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className={`text-[12px] font-bold ${dark ? "text-white" : "text-[#063B72]"}`}>
            Explore Category
          </span>

          <Link href={`/programs/${p.slug}`} aria-label={`Explore ${p.name}`} className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors after:absolute after:inset-0 after:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18B8B5] ${dark ? "bg-white text-[#063B72] group-hover:bg-[#18B8B5]" : "bg-[#EAF4FA] text-[#063B72] group-hover:bg-[#063B72] group-hover:text-white"}`}>
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================
   CAROUSEL NAVIGATION
========================================= */

function NavArrow({ direction, onClick, disabled }) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous categories" : "Next categories"}
      className="grid size-10 place-items-center rounded-full border border-[#063B72]/20 bg-white text-[#063B72] transition-colors hover:bg-[#063B72] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18B8B5] disabled:pointer-events-none disabled:opacity-40"
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  );
}

/* =========================================
   MAIN SECTION
========================================= */

export default function Programs({ programs = PROGRAMS }) {
  const [filter, setFilter] = useState("all");
  const [swiper, setSwiper] = useState(null);

  const [state, setState] = useState({
    begin: true,
    end: false,
    pages: 1,
    index: 0,
  });

  const visible =
    filter === "all"
      ? programs
      : programs.filter((p) => p.category === filter);

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
        : next
    );
  };

  const handleFilter = (id) => {
    setFilter(id);

    setState({
      begin: true,
      end: false,
      pages: 1,
      index: 0,
    });
  };

  return (
    <section aria-labelledby="programs-title" className="relative isolate w-full overflow-hidden bg-linear-to-b from-white to-[#EAF4FA]/60 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <header className="max-w-[780px]">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#18B8B5]/15 px-4 py-2 text-[12px] font-semibold text-[#087E83]">
            <BookOpen aria-hidden="true" className="size-4" />
            Explore Study Categories
          </p>

          <h2 id="programs-title" className="mt-4 text-balance text-[30px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#063B72] sm:text-[39px] lg:text-[46px]">
            Find the Right Field for{" "}
            <span className="text-[#18B8B5]">Your Future.</span>
          </h2>

          <p className="mt-3 max-w-[680px] text-[13px] leading-[1.7] text-slate-600 sm:text-[15px]">
            Explore a wide range of study fields, from healthcare and
            engineering to business, science and creative disciplines.
            Discover the right academic direction for your goals.
          </p>
        </header>

        {/* CATEGORY FILTERS - WRAP INTO MULTIPLE ROWS */}
        <div className="mt-7 flex flex-col gap-4">
          <div role="group" aria-label="Filter study categories" className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
            {FILTERS.map((f) => {
              const active = filter === f.id;

              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => handleFilter(f.id)}
                  aria-pressed={active}
                  className={`min-h-10 max-w-full rounded-full px-4 py-2 text-center text-[12px] font-semibold leading-snug transition-colors sm:min-h-11 sm:px-5 sm:text-[13px] ${active ? "bg-[#063B72] text-white shadow-[0_8px_20px_-8px_rgba(0,56,112,0.7)]" : "border border-[#063B72]/15 bg-white text-[#063B72] hover:border-[#063B72]/40"}`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="hidden items-center justify-end gap-2 sm:flex">
            <NavArrow direction="prev" onClick={() => swiper?.slidePrev()} disabled={state.begin} />
            <NavArrow direction="next" onClick={() => swiper?.slideNext()} disabled={state.end} />
          </div>
        </div>

        {/* CATEGORY CAROUSEL */}
        <div className="-mx-4 mt-4 sm:-mx-6 lg:mx-0">
          <Swiper
            key={filter}
            modules={[A11y, Keyboard]}
            slidesPerView={1.15}
            spaceBetween={14}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              640: {
                slidesPerView: 2.1,
                spaceBetween: 16,
                slidesOffsetBefore: 24,
                slidesOffsetAfter: 24,
              },
              1024: {
                slidesPerView: 3.15,
                spaceBetween: 18,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
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

        {/* PAGINATION DOTS */}
        {state.pages > 1 && (
          <div aria-hidden="true" className="flex items-center justify-center gap-2">
            {Array.from({ length: state.pages }).map((_, i) => (
              <span key={i} className={`block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${i === state.index ? "w-6 bg-[#063B72]" : "w-2 bg-[#063B72]/25"}`} />
            ))}
          </div>
        )}

        {/* CLOSING CTA BANNER */}
        <div className="mt-8 flex flex-col gap-5 overflow-hidden rounded-2xl border border-[#063B72]/10 bg-[#EAF4FA] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="relative grid size-16 shrink-0 place-items-center rounded-full bg-[#D4EAF6] text-[#063B72]">
              <Target aria-hidden="true" className="size-8" strokeWidth={1.75} />
              <Sparkles aria-hidden="true" className="absolute -left-2 -top-1 size-5 text-[#18B8B5]" />
            </span>

            <div>
              <h3 className="text-xl font-extrabold text-[#063B72] sm:text-2xl">
                Your Future, Our Focus
              </h3>

              <p className="mt-1 text-[13px] leading-[1.65] text-slate-600 sm:text-[14px]">
                Not sure which field to choose? Explore your options
                and find a study category that matches your interests
                and career ambitions.
              </p>
            </div>
          </div>

          <Link href="/programs" className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#063B72] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#075094] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18B8B5]">
            Explore All Categories
            <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </div>

      </div>
    </section>
  );
}
