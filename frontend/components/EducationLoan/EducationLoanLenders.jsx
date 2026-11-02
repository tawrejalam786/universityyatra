
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Globe2, Landmark } from "lucide-react";

const LENDERS = [
  {
    id: 1,
    name: "State Bank of India",
    logo: "/images/education-loan/lenders/sbi.webp",
  },
  {
    id: 2,
    name: "Axis Bank",
    logo: "/images/education-loan/lenders/axis-bank.webp",
  },
  {
    id: 3,
    name: "Union Bank of India",
    logo: "/images/education-loan/lenders/union-bank.webp",
  },
  {
    id: 4,
    name: "Bank of Baroda",
    logo: "/images/education-loan/lenders/bank-of-baroda.webp",
  },
  {
    id: 5,
    name: "IDFC FIRST Bank",
    logo: "/images/education-loan/lenders/idfc-first.webp",
  },
  {
    id: 6,
    name: "InCred",
    logo: "/images/education-loan/lenders/incred.webp",
  },
  {
    id: 7,
    name: "Credila",
    logo: "/images/education-loan/lenders/credila.webp",
  },
  {
    id: 8,
    name: "MPOWER Financing",
    logo: "/images/education-loan/lenders/mpower.webp",
  },
  {
    id: 9,
    name: "Prodigy Finance",
    logo: "/images/education-loan/lenders/prodigy-finance.webp",
  },
  {
    id: 10,
    name: "IDBI Bank",
    logo: "/images/education-loan/lenders/idbi-bank-logo.webp",
  },
];

const FIRST_ROW = LENDERS.slice(0, 5);
const SECOND_ROW = LENDERS.slice(5, 10);

// LENDER LOGO CARD
function LenderCard({ lender, duplicate = false }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex h-[62px] w-[138px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E1EAF8] bg-white px-3 py-2.5 shadow-[0_3px_12px_rgba(12,51,123,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#A2C1FB] hover:shadow-[0_8px_20px_rgba(23,101,245,0.1)] sm:h-[72px] sm:w-[172px] sm:px-4 lg:h-[76px] lg:w-[190px]">
      {imageError ? (
        <span className="text-center text-[11px] font-bold text-[#0C337B] sm:text-[12px]">
          {lender.name}
        </span>
      ) : (
        <img
          src={lender.logo}
          alt={duplicate ? "" : `${lender.name} logo`}
          loading="eager"
          decoding="async"
          draggable={false}
          onError={() => setImageError(true)}
          className="block h-full max-h-[42px] w-full max-w-[155px] select-none object-contain object-center sm:max-h-[48px]"
        />
      )}
    </div>
  );
}

// SMOOTH INFINITE MARQUEE
function MarqueeRow({ lenders, reverse = false, duration = 32 }) {
  const firstGroupRef = useRef(null);
  const widthRef = useRef(0);
  const pausedRef = useRef(false);
  const x = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const group = firstGroupRef.current;
    if (!group) return;

    const measure = () => {
      const width = group.getBoundingClientRect().width;
      widthRef.current = width;

      // Reset position when the viewport changes size.
      x.set(reverse && !reduceMotion ? -width : 0);
    };

    measure();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(measure);
      observer.observe(group);

      return () => observer.disconnect();
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [reverse, reduceMotion, x]);

  useAnimationFrame((time, delta) => {
    if (reduceMotion || pausedRef.current) return;

    const width = widthRef.current;
    if (!width) return;

    const speed = width / duration;
    const movement = (Math.min(delta, 64) / 1000) * speed;
    const current = x.get();

    if (reverse) {
      let next = current + movement;
      if (next >= 0) next -= width;
      x.set(next);
    } else {
      let next = current - movement;
      if (next <= -width) next += width;
      x.set(next);
    }
  });

  return (
    <div
      className="relative w-full min-w-0 overflow-hidden py-1 motion-reduce:overflow-x-auto"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <motion.div style={{ x }} className="flex w-max min-w-max items-center">

        {/* FIRST LOGO GROUP */}
        <div ref={firstGroupRef} className="flex shrink-0 items-center gap-2 pr-2 sm:gap-3 sm:pr-3">
          {lenders.map((lender) => (
            <LenderCard key={lender.id} lender={lender} />
          ))}
        </div>

        {/* DUPLICATE GROUP FOR SEAMLESS LOOP */}
        <div aria-hidden="true" className="flex shrink-0 items-center gap-2 pr-2 sm:gap-3 sm:pr-3">
          {lenders.map((lender) => (
            <LenderCard key={`duplicate-${lender.id}`} lender={lender} duplicate />
          ))}
        </div>

      </motion.div>
    </div>
  );
}

// MAIN COMPONENT
export default function EducationLoanLenders() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="lenders-title" className="relative isolate w-full min-w-0 overflow-hidden bg-white py-9 sm:py-11 lg:py-12">

      <div className="relative mx-auto w-full max-w-[1340px] min-w-0 px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: "easeOut" }} className="mb-6 flex w-full flex-col gap-4 sm:mb-7 sm:flex-row sm:items-center sm:justify-between lg:mb-8">

          {/* LEFT CONTENT */}
          <div className="min-w-0 flex-1">

            <div className="mb-2 inline-flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#EDF4FF] text-[#1765F5]">
                <Landmark size={14} strokeWidth={2} />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#1765F5] sm:text-[11px]">
                Our Lending Network
              </span>
            </div>

            <h2 id="lenders-title" className="text-[25px] font-extrabold leading-[1.16] tracking-[-0.035em] text-[#0C337B] sm:text-[31px] lg:text-[36px]">
              A World of Lenders.
              <span className="block text-[#1765F5] sm:inline">
                {" "}One Place to Explore.
              </span>
            </h2>

            <p className="mt-2 max-w-[620px] text-[12px] leading-[1.7] text-[#62758F] sm:text-[13px]">
              Explore education loan opportunities across Indian banks and global financing providers.
            </p>

          </div>

          {/* 30+ LENDERS BADGE */}
          <div className="flex w-fit shrink-0 items-center gap-3 rounded-[14px] border border-[#DCE8FC] bg-[#F3F7FF] px-4 py-2.5 sm:px-5 sm:py-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1765F5] shadow-[0_4px_12px_rgba(23,101,245,0.08)]">
              <Globe2 size={21} strokeWidth={1.8} />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[30px] font-extrabold leading-none tracking-[-0.055em] text-[#1765F5] sm:text-[34px]">
                30+
              </span>

              <span className="text-[10px] font-semibold leading-[1.45] text-[#516A8B] sm:text-[11px]">
                Indian &amp; Global
                <br />
                Lenders
              </span>
            </div>

          </div>

        </motion.div>

        {/* ANIMATED LOGO SHOWCASE */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full min-w-0 overflow-hidden rounded-[18px] border border-[#E7EFFB] bg-[#F7FAFF] py-4 sm:rounded-[22px] sm:py-5">

          {/* SUBTLE BACKGROUND DECORATION */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full border border-[#D8E7FF]/70" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-20 h-52 w-52 rounded-full border border-[#D8E7FF]/70" />

          {/* ROW 1 - LEFT DIRECTION */}
          <MarqueeRow lenders={FIRST_ROW} reverse={false} duration={32} />

          <div className="h-3 sm:h-4" />

          {/* ROW 2 - RIGHT DIRECTION */}
          <MarqueeRow lenders={SECOND_ROW} reverse={true} duration={36} />

          {/* LEFT EDGE FADE */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-[#F7FAFF] to-transparent sm:w-14" />

          {/* RIGHT EDGE FADE */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-[#F7FAFF] to-transparent sm:w-14" />

        </motion.div>

        {/* FOOTNOTE */}
        <p className="mt-3 text-center text-[10px] font-medium leading-relaxed text-[#8191A7] sm:text-[11px]">
          Featured lenders from our education finance network. Loan options are subject to lender eligibility and approval.
        </p>

      </div>
    </section>
  );
}
