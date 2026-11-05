"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

/* =====================================================================
   RIGHT SIDE COLLAGE (all in this file)
   Swap photos / numbers in the CONFIG block below.
===================================================================== */

const COLLAGE = {
  photoA: {
    src: "/images/career-counselling.webp",
    alt: "Student in a career counselling session",
  },
  photoB: {
    src: "/images/study-abroad-student.webp",
    alt: "Student planning to study abroad",
  },
  statValue: "5,000+",
  statCaption: "Students guided to top universities with a 4.9 star rating",
  avatars: [], // optional: up to 5 image urls, e.g. ["/images/a1.jpg", ...]
};

/* ---------- clay gradients (defined once, used by every icon) ---------- */

const CLAY = {
  blue: ["#8FB8FF", "#1765F5", "#1047AC"],
  coral: ["#FFB3A3", "#FF6F59", "#D9482F"],
  yellow: ["#FFE68A", "#FFC531", "#E8A010"],
  green: ["#9BE7B0", "#3CC275", "#1F9A55"],
  navy: ["#5D7BC9", "#1B3F8F", "#0C337B"],
};

function ClayDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute h-0 w-0"
    >
      <defs>
        {Object.entries(CLAY).map(([name, [a, b, c]]) => (
          <radialGradient key={name} id={`clay-${name}`} cx="35%" cy="28%" r="78%">
            <stop offset="0%" stopColor={a} />
            <stop offset="55%" stopColor={b} />
            <stop offset="100%" stopColor={c} />
          </radialGradient>
        ))}
      </defs>
    </svg>
  );
}

/* ---------- clay emojis (inline SVG, always sharp) ---------- */

function ClayIcon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={`drop-shadow-[0_5px_5px_rgba(12,51,123,0.28)] ${className}`}
    >
      {name === "backpack" && (
        <>
          <rect x="9" y="13" width="30" height="29" rx="13" fill="url(#clay-blue)" />
          <rect x="18" y="6" width="12" height="10" rx="5" fill="url(#clay-navy)" />
          <rect x="14" y="27" width="20" height="11" rx="5.5" fill="url(#clay-yellow)" />
          <rect x="19" y="31" width="10" height="3" rx="1.5" fill="#E8A010" opacity=".6" />
          <ellipse cx="17" cy="20" rx="5" ry="3" fill="#fff" opacity=".55" transform="rotate(-30 17 20)" />
        </>
      )}

      {name === "book" && (
        <>
          <rect x="7" y="10" width="34" height="30" rx="8" fill="url(#clay-coral)" />
          <rect x="12" y="14" width="24" height="22" rx="4" fill="#FFF3E8" />
          <rect x="16" y="20" width="16" height="3" rx="1.5" fill="#FF6F59" opacity=".55" />
          <rect x="16" y="27" width="11" height="3" rx="1.5" fill="#FF6F59" opacity=".35" />
          <path d="M30 10h6v14l-3-3-3 3z" fill="url(#clay-yellow)" />
          <ellipse cx="14" cy="14" rx="4" ry="2.4" fill="#fff" opacity=".55" transform="rotate(-30 14 14)" />
        </>
      )}

      {name === "cap" && (
        <>
          <path d="M13 24v8c0 3.5 5 6.5 11 6.5s11-3 11-6.5v-8l-11 5.5z" fill="url(#clay-blue)" />
          <path
            d="M24 9L43 18.5 24 28 5 18.5Z"
            fill="url(#clay-navy)"
            stroke="url(#clay-navy)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M40 20v12" stroke="#FFC531" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="34" r="3.5" fill="url(#clay-yellow)" />
          <ellipse cx="17" cy="16" rx="6" ry="2.6" fill="#fff" opacity=".5" transform="rotate(-20 17 16)" />
        </>
      )}

      {name === "pencil" && (
        <g transform="rotate(40 24 24)">
          <rect x="18" y="4" width="12" height="30" rx="5" fill="url(#clay-yellow)" />
          <rect x="18" y="4" width="12" height="8" rx="4" fill="url(#clay-coral)" />
          <path d="M18 34h12l-6 10z" fill="#F6D3A8" stroke="#F6D3A8" strokeWidth="2" strokeLinejoin="round" />
          <path d="M22 40.5h4l-2 3.5z" fill="#1B3F8F" />
          <ellipse cx="22" cy="19" rx="2" ry="6" fill="#fff" opacity=".5" />
        </g>
      )}

      {name === "star" && (
        <>
          <polygon
            points="24,6 29.5,18 42,19.5 32.5,28 35.5,41 24,34.5 12.5,41 15.5,28 6,19.5 18.5,18"
            fill="url(#clay-green)"
            stroke="url(#clay-green)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <ellipse cx="19" cy="17" rx="4" ry="2.2" fill="#fff" opacity=".6" transform="rotate(-30 19 17)" />
        </>
      )}

      {name === "plane" && (
        <>
          <path
            d="M5 22L43 7 33 41 23 29Z"
            fill="url(#clay-blue)"
            stroke="url(#clay-blue)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M23 29L43 7" stroke="#E8F0FE" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M23 29l2 10 5-6z" fill="url(#clay-navy)" />
          <ellipse cx="17" cy="19" rx="5" ry="2" fill="#fff" opacity=".55" transform="rotate(-22 17 19)" />
        </>
      )}

      {name === "globe" && (
        <>
          <circle cx="24" cy="24" r="18" fill="url(#clay-blue)" />
          <path d="M14 16c4-3 8-2 9 1s-3 5-5 7-5 1-6-2 0-4 2-6z" fill="url(#clay-green)" />
          <path d="M27 26c3-1 7 0 8 3s-2 8-5 9-5-3-5-6 0-5 2-6z" fill="url(#clay-green)" />
          <path d="M28 12c2-1 5 0 5 2s-3 3-5 2-1-3 0-4z" fill="url(#clay-green)" />
          <ellipse cx="17" cy="14" rx="6" ry="3" fill="#fff" opacity=".5" transform="rotate(-35 17 14)" />
        </>
      )}
    </svg>
  );
}

/* ---------- small pieces ---------- */

const AVATAR_BG = ["#A2C1FB", "#5D93F8", "#1765F5", "#1047AC", "#0C337B"];

function Avatars({ avatars }) {
  return (
    <div className="flex -space-x-2">
      {AVATAR_BG.map((bg, i) => {
        const src = avatars?.[i];

        return (
          <span
            key={i}
            className="relative h-5 w-5 overflow-hidden rounded-full ring-2 ring-white sm:h-6 sm:w-6"
            style={{ backgroundColor: bg }}
          >
            {src ? (
              <Image src={src} alt="" fill sizes="24px" className="object-cover" />
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
                <circle cx="12" cy="9" r="4" fill="#fff" opacity=".9" />
                <path d="M4 22c0-4.4 3.6-7 8-7s8 2.6 8 7z" fill="#fff" opacity=".9" />
              </svg>
            )}
          </span>
        );
      })}
    </div>
  );
}

/* floating chip: the outer div positions it, the inner motion div floats */
function FloatChip({ icon, className, duration = 3.6, delay = 0, reduceMotion }) {
  return (
    <div className={`absolute z-30 ${className}`}>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-[0_14px_30px_-10px_rgba(23,101,245,0.45)] sm:h-[52px] sm:w-[52px]"
      >
        <ClayIcon name={icon} className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.div>
    </div>
  );
}

const CARD_SHADOW = "shadow-[0_18px_40px_-14px_rgba(23,101,245,0.38)]";

/* ---------- the collage ---------- */

function HeroCollage() {
  const reduceMotion = useReducedMotion();
  const { photoA, photoB, statValue, statCaption, avatars } = COLLAGE;

  const enter = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[560px] lg:ml-auto lg:mr-0 lg:h-[440px]">
      <ClayDefs />

      {/* PHOTO A: top-left */}
      <motion.div
        {...enter(0.05)}
        className={`absolute left-0 top-0 h-[62%] w-[47%] overflow-hidden rounded-[22px] sm:rounded-[24px] ${CARD_SHADOW}`}
      >
        <Image
          src={photoA.src}
          alt={photoA.alt}
          fill
          priority
          sizes="(max-width: 1023px) 45vw, 260px"
          className="object-cover"
        />
      </motion.div>

      {/* PHOTO B: bottom-right, staggered lower than A */}
      <motion.div
        {...enter(0.2)}
        className={`absolute bottom-0 right-0 h-[68%] w-[46%] overflow-hidden rounded-[22px] sm:rounded-[24px] ${CARD_SHADOW}`}
      >
        <Image
          src={photoB.src}
          alt={photoB.alt}
          fill
          sizes="(max-width: 1023px) 45vw, 260px"
          className="object-cover"
        />
      </motion.div>

      {/* STAT CARD: top-right */}
      <motion.div
        {...enter(0.3)}
        className={`absolute right-0 top-0 z-20 w-[50%] rounded-[20px] bg-white p-3 sm:rounded-[22px] sm:p-4 ${CARD_SHADOW}`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[22px] font-extrabold leading-none tracking-[-0.04em] text-[#0C337B] sm:text-[28px]">
            {statValue}
          </span>

          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6F9F0] text-[#22A559] sm:h-7 sm:w-7">
            <TrendingUp size={15} strokeWidth={2.6} />
          </span>
        </div>

        <p className="mt-1.5 text-[10px] font-semibold leading-[1.4] text-[#526B8C] sm:text-[11px]">
          {statCaption}
        </p>

        <div className="mt-2">
          <Avatars avatars={avatars} />
        </div>
      </motion.div>

      {/* BEST RATINGS CARD: bottom-left, overlaps the bottom edge of photo A */}
      <motion.div
        {...enter(0.4)}
        className={`absolute left-0 top-[54%] z-20 w-[52%] rounded-[20px] bg-white p-3 sm:rounded-[22px] sm:p-4 ${CARD_SHADOW}`}
      >
        <h3 className="text-[14px] font-extrabold leading-none tracking-[-0.02em] text-[#0C337B] sm:text-[16px]">
          Best ratings
        </h3>

        <p className="mt-1 text-[10px] font-semibold text-[#526B8C] sm:text-[11px]">
          Loved by students &amp; parents
        </p>

        <div className="mt-2 flex items-center gap-1 sm:gap-1.5">
          {["backpack", "book", "cap", "pencil", "star"].map((name) => (
            <ClayIcon key={name} name={name} className="h-6 w-6 sm:h-7 sm:w-7" />
          ))}
        </div>
      </motion.div>

      {/* FLOATING CLAY CHIPS in the gaps between the cards */}
      <FloatChip
        icon="plane"
        reduceMotion={reduceMotion}
        duration={3.6}
        className="left-[49%] top-[36%] -translate-x-1/2 -translate-y-1/2"
      />
      <FloatChip
        icon="globe"
        reduceMotion={reduceMotion}
        duration={4.2}
        delay={0.6}
        className="left-[51%] top-[91%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

/* =====================================================================
   HERO (left side unchanged)
===================================================================== */

export default function CounsellingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EFF6FF] to-[#E0EFFE] py-16 sm:py-20 lg:py-10">
      
      {/* Background decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#1765F5]/5 blur-3xl" />
        <div className="absolute -left-[5%] bottom-[20%] h-[300px] w-[300px] rounded-full bg-[#1765F5]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 mt-12 sm:mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px]">
            <li>
              <Link href="/" className="text-[#526B8C] transition hover:text-[#1765F5]">
                Home
              </Link>
            </li>
            <li className="text-[#CBD5E1]">/</li>
            <li>
              <Link href="/services" className="text-[#526B8C] transition hover:text-[#1765F5]">
                Student Services
              </Link>
            </li>
            <li className="text-[#CBD5E1]">/</li>
            <li className="font-semibold text-[#0C337B]">Career Counselling</li>
          </ol>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1765F5]/20 bg-white px-4 py-2 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1765F5]">
                100% Free Career Counselling & Profile Assessment
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0C337B] sm:text-[42px] lg:text-[52px]">
              Big dreams need the{" "}
              <span className="text-[#1765F5]">right direction.</span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.7] text-[#526B8C] sm:text-[16px]">
              Confused about which course, country or university to choose? Get honest, personalised study abroad guidance built around your academics, budget and long-term career goals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#assessment"
                className="inline-flex items-center gap-2 rounded-xl bg-[#5D93F8] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#1765F5]/25 transition-all hover:bg-[#0C337B] hover:shadow-xl"
              >
                <span>Get My Free Assessment</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1765F5] bg-white px-6 py-3.5 text-[14px] font-bold text-[#1765F5] transition-all hover:bg-[#1765F5] hover:text-white"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  No cost, no obligation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  Profile-first advice
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  Parents welcome
                </span>
              </div>
            </div>
          </div>

          {/* Right: photo collage (replaces the single photo) */}
          <HeroCollage />

        </div>
      </div>
    </section>
  );
}