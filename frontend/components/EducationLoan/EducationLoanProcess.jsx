"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ==========================================
   CONTENT (6 services)
   Put the images in /public/images/admission-support/
========================================== */

const SERVICES = [
  {
    id: "01",
    title: "Understand Your Loan Eligibility",
    description:
      "Assess your academic plans, estimated education expenses and financial background to understand potential loan eligibility and funding requirements.",
    image: "/images/abroad-checklist/05-funding.webp",
    alt: "Student reviewing education expenses and loan eligibility",
  },
  {
    id: "02",
    title: "Find Suitable Lenders & Loan Options",
    description:
      "Explore loan options from relevant banks and financial institutions based on interest rates, loan amounts, collateral requirements and repayment terms.",
    image: "/images/abroad-checklist/05-funding.webp",
    alt: "Education loan options and financial planning",
  },
  {
    id: "03",
    title: "Loan Application & Documentation Support",
    description:
      "Get assistance with completing loan applications, preparing academic and financial documents, organising co-applicant details and submitting the required paperwork.",
    image: "/images/abroad-checklist/03-documents.webp",
    alt: "Education loan application and organised documents",
  },
  {
    id: "04",
    title: "Understand Approval & Repayment Terms",
    description:
      "Understand the loan approval process, interest rates, moratorium period, repayment schedule and other terms before proceeding with the loan.",
    image: "/images/abroad-checklist/05-funding.webp",
    alt: "Education loan repayment and financial planning",
  },
];

const TOTAL = SERVICES.length;
const AUTOPLAY_MS = 3800;
const CTA_HREF = "#assessment"; // where the arrow button goes

/* ==========================================
   ONE CARD
   mobile : vertical accordion (bars that grow taller)
   desktop: horizontal accordion (strips that grow wider)
========================================== */

function ServiceCard({ service, index, active, onOpen, autoplay, paused }) {
  const isActive = index === active;

  return (
    <li
      onPointerEnter={(e) => {
        // hover opens the card (mouse only, touch uses tap)
        if (e.pointerType === "mouse") onOpen(index);
      }}
      className={`relative min-w-0 overflow-hidden rounded-[22px] transition-[flex,height,background-color,box-shadow] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:h-auto ${
        isActive
          ? "h-[290px] bg-[#0C337B] shadow-[0_18px_40px_-14px_rgba(12,51,123,0.55)] lg:[flex:1_1_0px]"
          : "h-[62px] bg-[#EAF2FF] hover:bg-[#DCE9FF] lg:[flex:0_0_82px]"
      }`}
    >
      {/* click / focus target (sits above the collapsed card) */}
      <button
        type="button"
        onClick={() => onOpen(index)}
        onFocus={() => onOpen(index)}
        aria-expanded={isActive}
        aria-label={`${service.id}. ${service.title}`}
        className={`absolute inset-0 z-10 h-full w-full rounded-[22px] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1765F5] ${
          isActive ? "pointer-events-none" : ""
        }`}
      />

      {/* =====================================
          COLLAPSED LAYER
          mobile : number + title in a row
          desktop: vertical title on top, number at the bottom
      ===================================== */}
      <div
        aria-hidden={isActive}
        className={`absolute inset-0 flex items-center gap-3 px-3.5 transition-opacity duration-300 lg:flex-col lg:justify-between lg:px-0 lg:py-5 ${
          isActive ? "opacity-0" : "opacity-100 delay-300"
        }`}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-extrabold text-[#0C337B] lg:order-last lg:h-11 lg:w-11">
          {service.id}
        </span>

        <span className="line-clamp-2 min-w-0 text-[13px] font-bold leading-[1.3] text-[#0C337B] sm:text-[14px] lg:line-clamp-none lg:max-h-[240px] lg:rotate-180 lg:text-center lg:[writing-mode:vertical-rl]">
          {service.title}
        </span>
      </div>

      {/* =====================================
          EXPANDED LAYER
      ===================================== */}
      <div
        aria-hidden={!isActive}
        className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
          isActive ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
        }`}
      >
        {/* background image */}
        <Image
          src={service.image}
          alt={isActive ? service.alt : ""}
          fill
          priority={index === 0}
          sizes="(max-width: 1023px) 92vw, 780px"
          className={`object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none ${
            isActive ? "scale-100" : "scale-110"
          }`}
        />

        {/* dark blue shade so the text is always readable */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C337B]/95 via-[#0C337B]/55 to-[#0C337B]/10"
        />

        {/* content (fixed width, so the text does not reflow while the card grows) */}
        <div className="relative flex h-full flex-col justify-end p-4 sm:p-5 lg:w-[clamp(400px,44vw,640px)] lg:p-7">
          <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[26px] lg:text-[32px]">
            {service.title}
          </h3>

          <p className="mt-2 max-w-[520px] text-[12px] leading-[1.6] text-white/85 sm:text-[13px]">
            {service.description}
          </p>

          <div className="mt-4 flex items-center justify-between lg:mr-0">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[14px] font-extrabold text-[#0C337B]">
              {service.id}
            </span>

            <Link
              href={CTA_HREF}
              tabIndex={isActive ? 0 : -1}
              aria-label={`Get free guidance: ${service.title}`}
              className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#1765F5] text-white shadow-[0_10px_22px_rgba(23,101,245,0.45)] transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#1765F5]"
            >
              <ArrowUpRight size={20} strokeWidth={2.4} />
            </Link>
          </div>
        </div>

        {/* auto-open progress line */}
        {autoplay && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[3px] bg-white/20"
          >
            <motion.span
              key={`${active}-${paused}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: paused ? 0 : 1 }}
              transition={{
                duration: paused ? 0 : AUTOPLAY_MS / 1000,
                ease: "linear",
              }}
              className="block h-full origin-left bg-white"
            />
          </div>
        )}
      </div>
    </li>
  );
}

/* ==========================================
   MAIN SECTION
========================================== */

export default function AdmissionSupport() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const autoplay = !reduceMotion && inView;

  // auto-open the next card: only while visible, not hovered / touched
  useEffect(() => {
    if (paused || !autoplay) return;

    const timer = setInterval(() => {
      setActive((i) => (i + 1) % TOTAL);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused, autoplay, active]);

  const resumeLater = () => setTimeout(() => setPaused(false), 4000);

  return (
    <section
      ref={sectionRef}
      id="admission-support"
      aria-labelledby="admission-support-heading"
      className="relative isolate w-full overflow-hidden bg-white py-10 lg:py-12"
    >
      {/* soft background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-[#EAF2FF]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#EAF2FF]"
      />

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================
        {/* HEADER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
          className="mb-5 grid items-end gap-3 lg:mb-6 lg:grid-cols-[1fr_1fr] lg:gap-10"
        >
          <div>
            {/* Eyebrow */}
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
              HOW WE CAN HELP
            </p>

            {/* Heading */}
            <h2
              id="admission-support-heading"
              className="text-balance text-[26px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] lg:text-[38px]"
            >
              How Our{" "}
              <span className="text-[#1765F5]">
                Education Loan Assistance
              </span>{" "}
              Works
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-[600px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px] lg:justify-self-end">
            Getting an education loan involves understanding your
            eligibility, comparing lenders, preparing documents and
            completing the application. We assist you at each stage,
            helping you make informed financing decisions for your
            education.
          </p>
        </motion.div>

        {/* =====================================
            ACCORDION
        ===================================== */}
        <ul
          className="m-0 flex list-none flex-col gap-2 p-0 lg:h-[360px] lg:flex-row lg:gap-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={resumeLater}
          onTouchCancel={resumeLater}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              active={active}
              onOpen={setActive}
              autoplay={autoplay}
              paused={paused}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}