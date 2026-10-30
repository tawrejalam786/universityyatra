
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const career = {
  titleDark: "Career",
  titleBlue: "Counseling",
  description:
    "Get clear, honest guidance on courses, countries, and pathways, based on your profile, not sales targets.",
  image: "/images/counselling/career-counselings.webp",
  imageAlt: "Student receiving career guidance from an education counselor",
  href: "/counselling",
  cta: "Book free counselling",
};

const academic = {
  titleDark: "Academic",
  titleBlue: "Pathway Planning",
  description:
    "Choosing the right course and country is a career decision, not just an admissions step. Our free counselling and profile assessment help students and parents find the most suitable study pathways based on background, budget and long-term goals.",
  image: "/images/counselling/academic-pathway-planning.webp",
  imageAlt: "Student progressing through academic milestones toward career goals",
  href: "/contact",
  cta: "Get a profile assessment",
};

const cardMotion = (reduceMotion, index) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.6,
    delay: index * 0.12,
    ease: [0.22, 1, 0.36, 1],
  },
});

function Title({ data }) {
  return (
    <h3 className="text-[27px] font-extrabold leading-[1.1] tracking-[-0.035em] sm:text-[30px] lg:text-[27px] xl:text-[31px]">
      <span className="block text-[#0C337B]">
        {data.titleDark}
      </span>
      <span className="block text-[#1765F5]">
        {data.titleBlue}
      </span>
    </h3>
  );
}

function CTA({ data, outlined = false }) {
  return (
    <Link
      href={data.href}
      className={`group/cta mt-5 inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5 sm:text-[13px] ${outlined ? "border border-[#1765F5] bg-white text-[#1765F5] hover:bg-[#1765F5] hover:text-white" : "border border-[#1765F5] bg-[#1765F5] text-white shadow-[0_8px_22px_rgba(23,101,245,0.18)] hover:bg-[#0C337B]"}`}
    >
      <span>{data.cta}</span>
      <ArrowRight size={16} className="shrink-0 transition-transform duration-300 group-hover/cta:translate-x-1" />
    </Link>
  );
}

/* ==========================================
   CAREER COUNSELING CARD
========================================== */

function CareerCard({ data, reduceMotion }) {
  return (
    <motion.article
      {...cardMotion(reduceMotion, 0)}
      className="group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#DCE8FA] bg-[#F8FBFF] shadow-[0_12px_36px_rgba(12,51,123,0.055)] lg:min-h-[340px] lg:flex-row lg:items-center"
    >
      {/* BACKGROUND DECORATION */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 -z-10 h-56 w-56 rounded-full bg-[#E3EEFF]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 right-0 -z-10 h-40 w-40 rounded-full bg-[#DFEAFF]/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-w-0 flex-col items-start px-5 pb-2 pt-7 sm:px-7 lg:w-[54%] lg:shrink-0 lg:px-7 lg:py-8 xl:px-8">
        <span aria-hidden="true" className="mb-4 h-[3px] w-12 rounded-full bg-[#1765F5]" />

        <Title data={data} />

        <p className="mt-4 max-w-[360px] text-[13px] leading-[1.7] text-[#49617F] sm:text-[14px] lg:text-[13px] xl:text-[14px]">
          {data.description}
        </p>

        <CTA data={data} />
      </div>

      {/* IMAGE AREA */}
      <div className="relative flex min-h-[230px] w-full min-w-0 items-center justify-center overflow-hidden px-3 pb-4 pt-2 sm:min-h-[280px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[49%] lg:px-2 lg:py-5">

        {/* SOFT DIAMOND BACKGROUND */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[42px] bg-[#E0ECFF] sm:h-[220px] sm:w-[220px] lg:h-[205px] lg:w-[205px] xl:h-[225px] xl:w-[225px]" />

        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[35px] border border-[#B7D0FF]/70 sm:h-[190px] sm:w-[190px] lg:h-[175px] lg:w-[175px] xl:h-[195px] xl:w-[195px]" />

        {/* COMPLETE CLAY IMAGE - NO CROPPING */}
        <div className="relative left-4 z-10 h-[225px] w-full max-w-[360px] sm:h-[275px] lg:h-[300px] lg:max-w-none xl:h-[320px]">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 60px, 25vw"
            className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.035]"
          />
        </div>

        {/* CORNER ACCENT */}
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rotate-45 rounded-[30px] bg-[#1765F5]/80" />
      </div>
    </motion.article>
  );
}

/* ==========================================
   ACADEMIC PATHWAY PLANNING CARD
========================================== */

function AcademicCard({ data, reduceMotion }) {
  return (
    <motion.article
      {...cardMotion(reduceMotion, 1)}
      className="group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#D4E3FA] bg-[#F2F7FF] shadow-[0_12px_36px_rgba(12,51,123,0.055)] lg:min-h-[340px] lg:flex-row lg:items-center"
    >

      {/* BACKGROUND DECORATION */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-[#DDEAFF]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] [background-image:radial-gradient(#1765F5_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* IMAGE AREA */}
      <div className="relative flex min-h-[240px] w-full min-w-0 items-center justify-center overflow-hidden px-4 pt-5 sm:min-h-[290px] lg:absolute lg:inset-y-0 lg:left-0 lg:w-[44%] lg:py-5">

        {/* ARCH BACKGROUND */}
        <div aria-hidden="true" className="pointer-events-none absolute bottom-3 left-1/2 h-[215px] w-[205px] -translate-x-1/2 rounded-t-[999px] rounded-b-[24px] border border-[#B9D3FF] bg-[#E4EFFF] sm:h-[250px] sm:w-[245px] lg:bottom-auto lg:top-1/2 lg:h-[270px] lg:w-[220px] lg:-translate-y-1/2 xl:w-[240px]" />

        {/* COMPLETE CLAY IMAGE */}
        <div className="relative lg:top-16 z-10 h-[225px] w-full max-w-[380px] sm:h-[275px] lg:h-[305px] lg:max-w-none xl:h-[325px]">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 380px, 25vw"
            className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.035]"
          />
        </div>

        {/* CORNER ACCENT */}
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rotate-45 rounded-[30px] bg-[#1765F5]/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-w-0 flex-col items-start px-5 pb-7 pt-3 sm:px-7 lg:ml-[44%] lg:w-[56%] lg:py-8 lg:pl-2 lg:pr-6 xl:pr-8">
        <span aria-hidden="true" className="mb-4 flex items-center gap-2">
          <span className="h-[3px] w-12 rounded-full bg-[#1765F5]" />
          <span className="h-[3px] w-4 rounded-full bg-[#A2C1FB]" />
        </span>

        <Title data={data} />

        <p className="mt-4 max-w-[380px] text-[13px] leading-[1.65] text-[#49617F] sm:text-[14px] lg:text-[12.5px] xl:text-[13.5px]">
          {data.description}
        </p>

        <CTA data={data} outlined />
      </div>
    </motion.article>
  );
}

/* ==========================================
   MAIN SECTION
========================================== */

export default function ServiceBanners() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-banners-title"
      className="relative w-full overflow-hidden bg-white py-9 sm:py-11 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mb-7 text-center sm:mb-9">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5]">
            How we help
          </p>

          <h2
            id="service-banners-title"
            className="text-[25px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[31px] lg:text-[35px]"
          >
            Guidance built around{" "}
            <span className="text-[#1765F5]">
              your profile
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <CareerCard
            data={career}
            reduceMotion={reduceMotion}
          />

          <AcademicCard
            data={academic}
            reduceMotion={reduceMotion}
          />
        </div>

      </div>
    </section>
  );
}
