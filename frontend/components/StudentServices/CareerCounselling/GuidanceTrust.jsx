"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// NOTE: put your photos in /public/images/counselling/ (or change the paths below).
const career = {
  titleDark: "Career",
  titleBlue: "Counseling",
  description:
    "Get clear, honest guidance on courses, countries, and pathways, based on your profile, not sales targets.",
  image: "/images/counselling/career-counseling.jpg",
  imageAlt: "Graduation cap on a stack of books",
  href: "/counselling",
  cta: "Book free counselling",
};

const academic = {
  titleDark: "Academic",
  titleBlue: "Pathway Planning",
  description:
    "Choosing the right course and country is a career decision, not just an admissions step. Our free counselling and profile assessment help students and parents find the most suitable study pathways based on background, budget and long-term goals.",
  image: "/images/counselling/academic-pathway.jpg",
  imageAlt: "Globe, books and graduation cap on a desk",
  href: "/contact",
  cta: "Get a profile assessment",
};

/* shared pieces */
const cardMotion = (reduceMotion, index) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, delay: index * 0.1 },
});

function Title({ data }) {
  return (
    <h3 className="text-[26px] font-extrabold leading-[1.1] tracking-[-0.035em] sm:text-[30px] lg:text-[28px] xl:text-[30px]">
      <span className="block text-[#0A1F4D]">{data.titleDark}</span>
      <span className="block text-[#1765F5]">{data.titleBlue}</span>
    </h3>
  );
}

/* ==========================================
   CARD 1 - text left, DIAMOND photo right
========================================== */

function CareerCard({ data, reduceMotion }) {
  return (
    <motion.article
      {...cardMotion(reduceMotion, 0)}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E4ECF7] bg-gradient-to-br from-white via-[#FAFCFF] to-[#EEF5FF] shadow-[0_10px_34px_rgba(12,51,123,0.07)] lg:min-h-[300px] lg:flex-row lg:items-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-14 -top-16 -z-10 h-44 w-44 rounded-full bg-[#DCEAFF]/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-12 -z-10 hidden h-40 w-56 rounded-[50px] bg-[#E6F0FF]/70 lg:block"
      />

      {/* text */}
      <div className="relative z-10 flex-1 px-6 py-6 sm:px-8 lg:max-w-[62%] lg:px-7 lg:py-7 lg:pl-8">
        <span
          aria-hidden="true"
          className="mb-3 block h-[3px] w-10 rounded-full bg-[#1765F5]"
        />
        <Title data={data} />
        <p className="mt-3 text-[12.5px] leading-[1.65] text-[#4B5F7A] sm:text-[13px]">
          {data.description}
        </p>
        <Link
          href={data.href}
          className="group/cta mt-4 inline-flex items-center gap-2 rounded-full bg-[#1765F5] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B]"
        >
          {data.cta}
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </Link>
      </div>

      {/* mobile photo */}
      <div className="relative mx-4 mb-4 h-[170px] overflow-hidden rounded-2xl sm:mx-6 sm:h-[200px] lg:hidden">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          sizes="(max-width: 1023px) 92vw, 0px"
          className="object-cover"
        />
      </div>

      {/* desktop diamond photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block"
      >
        <div className="absolute left-[4%] top-1/2 h-[240px] w-[240px] -translate-y-1/2 rotate-45 rounded-[44px] bg-[#D6E6FF]/80" />
        <div className="absolute left-[10%] top-1/2 h-[215px] w-[215px] -translate-y-1/2 rotate-45 overflow-hidden rounded-[40px] shadow-[0_14px_34px_rgba(12,51,123,0.12)]">
          <div className="absolute inset-0 -rotate-45 scale-[1.5]">
            <Image
              src={data.image}
              alt=""
              fill
              sizes="320px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="absolute -bottom-20 -right-14 h-40 w-40 rotate-45 rounded-[36px] bg-gradient-to-br from-[#4D8DFF] to-[#1765F5]" />
      </div>
    </motion.article>
  );
}

/* ==========================================
   CARD 2 - ARCH photo left, text right
   (different background, shapes and CTA style)
========================================== */

function AcademicCard({ data, reduceMotion }) {
  return (
    <motion.article
      {...cardMotion(reduceMotion, 1)}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[26px] border border-[#D3E3FB] bg-gradient-to-bl from-[#EAF2FF] via-[#F6FAFF] to-white shadow-[0_10px_34px_rgba(12,51,123,0.07)] lg:min-h-[300px] lg:flex-row lg:items-center"
    >
      {/* dot grid + soft circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #9CC0F5 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "linear-gradient(to left, black 0%, transparent 60%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-[#CFE1FF]/60"
      />

      {/* desktop arch photo (LEFT) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] lg:block"
      >
        {/* offset outline arch */}
        <div className="absolute left-[16%] top-1/2 h-[250px] w-[190px] -translate-y-[46%] rounded-t-[999px] rounded-b-[24px] border-2 border-[#1765F5]/25" />

        {/* photo arch */}
        <div className="absolute left-[11%] top-1/2 h-[250px] w-[190px] -translate-y-1/2 overflow-hidden rounded-t-[999px] rounded-b-[24px] shadow-[0_14px_34px_rgba(12,51,123,0.14)]">
          <Image
            src={data.image}
            alt=""
            fill
            sizes="260px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* blue triangle at the bottom-left */}
        <div className="absolute -bottom-16 -left-12 h-36 w-36 rotate-45 rounded-[28px] bg-gradient-to-tr from-[#1765F5] to-[#6BA2FF]" />
      </div>

      {/* mobile photo (top) */}
      <div className="relative mx-4 mt-4 h-[170px] overflow-hidden rounded-t-[999px] rounded-b-2xl sm:mx-auto sm:h-[200px] sm:w-[240px] lg:hidden">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          sizes="(max-width: 1023px) 92vw, 0px"
          className="object-cover"
        />
      </div>

      {/* text (RIGHT) */}
      <div className="relative z-10 flex-1 px-6 py-6 sm:px-8 lg:ml-[42%] lg:px-7 lg:py-7 lg:pl-3">
        <span
          aria-hidden="true"
          className="mb-3 flex items-center gap-1.5"
        >
          <span className="h-[3px] w-10 rounded-full bg-[#1765F5]" />
          <span className="h-[3px] w-3 rounded-full bg-[#1765F5]/40" />
        </span>
        <Title data={data} />
        <p className="mt-3 text-[12.5px] leading-[1.65] text-[#4B5F7A] sm:text-[13px]">
          {data.description}
        </p>
        <Link
          href={data.href}
          className="group/cta mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#1765F5] bg-white/80 px-4 py-2 text-[12px] font-bold text-[#1765F5] transition-all duration-300 hover:bg-[#1765F5] hover:text-white"
        >
          {data.cta}
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

/* ==========================================
   SECTION
========================================== */

export default function ServiceBanners() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-banners-title"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* heading (optional, remove if you don't need it) */}
        <div className="mb-6 text-center">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5]">
            How we help
          </p>
          <h2
            id="service-banners-title"
            className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[30px]"
          >
            Guidance built around{" "}
            <span className="text-[#1765F5]">your profile</span>
          </h2>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          <CareerCard data={career} reduceMotion={reduceMotion} />
          <AcademicCard data={academic} reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  );
}