"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ============================================================
   CONTENT
   image   : 3D clay PNG/WebP (transparent bg) from /public
   bg      : card gradient
   text    : heading + tag colour (same hue family, dark)
   dot     : small dot colour in the tag
   shadow  : card shadow colour
   ============================================================ */
const cards = [
  {
    tag: "CAREER DIRECTION",
    title: "You Know You Want to Study Further, But Not What to Choose.",
    image: "/images/career-direction.webp",
    bg: "from-[#9DC3FF] to-[#5F9AFF]",
    text: "#0C2A66",
    dot: "#1765F5",
    shadow: "rgba(23,101,245,0.30)",
  },
  {
    tag: "COURSE & UNIVERSITY",
    title: "You Have a Course in Mind, But Need the Right University or Perhaps Both.",
    image: "/images/course-university.webp",
    bg: "from-[#FFD6AB] to-[#FFA95E]",
    text: "#5C2A06",
    dot: "#F57C00",
    shadow: "rgba(245,124,0,0.30)",
  },
  {
    tag: "STUDY ABROAD",
    title: "You Want to Study Abroad, But Don’t Know Where to Start.",
    image: "/images/study-abroad.webp",
    bg: "from-[#BDEEDC] to-[#74D6B6]",
    text: "#0B4A3C",
    dot: "#12A47F",
    shadow: "rgba(18,164,127,0.30)",
  },
  {
    tag: "PROFILE & ELIGIBILITY",
    title: "Not Sure What’s Possible With Your Profile?",
    image: "/images/profile-eligibility.webp",
    bg: "from-[#FFC0B8] to-[#F5806F]",
    text: "#6B1C14",
    dot: "#E5483A",
    shadow: "rgba(229,72,58,0.30)",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

/* Clay image: agar file missing ho to chupchap hide ho jaati hai */
function ClayImage({ src }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="(max-width: 768px) 45vw, 240px"
      className="object-contain object-bottom"
      onError={() => setFailed(true)}
    />
  );
}

/* ============================================================
   SECTION
   Desktop (lg+): sab sizes screen height (vh) ke hisaab se scale
   hote hain, taaki poora section ek screen ke andar aaye.
   ============================================================ */
export default function NotSureSection() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="not-sure-title"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F1F6FF] py-12 sm:py-14 lg:py-[3.5vh]"
    >
      {/* soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-[280px] w-[280px] rounded-full bg-[#1765F5]/[0.08] blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-24 h-[280px] w-[280px] rounded-full bg-[#FFA95E]/[0.14] blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto mb-10 flex max-w-[900px] flex-col items-center text-center lg:mb-[4.6vh]">
          <motion.h2
            id="not-sure-title"
            {...fadeUp(0)}
            className="text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[clamp(28px,4.4vh,40px)]"
          >
            Not Sure <span className="text-[#1765F5]">Where to Begin?</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.08)}
            className="mt-3 text-[14px] leading-[1.7] text-[#53647C] sm:text-[15px] lg:mt-[1vh] lg:text-[clamp(13px,1.9vh,15px)]"
          >
            Whether you’re choosing a course, exploring universities or planning to study abroad,
            we help you find clarity on what comes next.
          </motion.p>
        </div>

        {/* CARDS */}
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:gap-y-[4.6vh]">
          {cards.map(({ tag, title, image, bg, text, dot, shadow }, i) => (
            <li key={tag}>
              <motion.article
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: (i % 2) * 0.1, ease: "easeOut" }}
                style={{ "--sh": shadow }}
                className={`group relative flex min-h-[160px] items-center rounded-[28px] bg-gradient-to-br ${bg} py-5 pl-5 pr-[44%] shadow-[0_16px_36px_var(--sh)] ring-1 ring-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_var(--sh)] sm:min-h-[172px] sm:pl-7 lg:h-[clamp(130px,21vh,200px)] lg:min-h-0 lg:py-3`}
              >
                {/* decorative bits (clipped inside the card) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]"
                >
                  <span className="absolute -bottom-16 -right-6 h-[220px] w-[220px] rounded-full bg-white/25" />
                  <span className="absolute -bottom-20 right-24 h-[120px] w-[120px] rounded-full bg-white/15" />
                  <span className="absolute -left-10 -top-10 h-[110px] w-[110px] rounded-full bg-white/20" />
                  <span className="absolute right-[40%] top-4 h-2.5 w-2.5 rounded-full bg-white/70" />
                </div>

                {/* TEXT */}
                <div className="relative z-10">
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-sm sm:text-[11px] lg:py-0.5"
                    style={{ color: text }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dot }} />
                    {tag}
                  </span>

                  <h3
                    className="mt-3 text-[16px] font-extrabold leading-[1.3] tracking-[-0.02em] sm:text-[18px] lg:mt-[1.2vh] lg:text-[clamp(15px,2.4vh,20px)]"
                    style={{ color: text }}
                  >
                    {title}
                  </h3>
                </div>

                {/* 3D CLAY IMAGE (pops out of the card) */}
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 14,
                    delay: 0.15 + i * 0.1,
                  }}
                  className="pointer-events-none absolute bottom-0 right-1 z-20 aspect-[200/240] h-[118%] sm:right-3"
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -6, 0] }}
                    transition={{
                      duration: 4 + i * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-full w-full"
                  >
                    <div className="relative h-full w-full origin-bottom drop-shadow-[0_12px_12px_rgba(12,51,123,0.25)] transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105">
                      <ClayImage src={image} />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.article>
            </li>
          ))}
        </ul>

        {/* CTA (colourful) */}
        <motion.div {...fadeUp(0.1)} className="mt-12 flex justify-center lg:mt-[4.5vh]">
          <span className="relative inline-flex overflow-hidden rounded-full p-[3px] shadow-[0_14px_34px_rgba(23,101,245,0.35)]">
            {/* rotating ring in the 4 card colours */}
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[320%]"
              style={{
                x: "-50%",
                y: "-50%",
                background:
                  "conic-gradient(from 0deg, #1765F5, #FFA95E, #74D6B6, #F5806F, #1765F5)",
              }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <Link
              href="/career-counselling"
              className="group/cta relative inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1765F5] to-[#0C337B] py-2 pl-7 pr-2 text-[14px] font-semibold text-white transition-all duration-300 hover:from-[#2B74FF] hover:to-[#1765F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765F5] sm:text-[15px]"
            >
              Book a Free Counselling Session
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFA95E] text-[#5C2A06] transition-transform duration-300 group-hover/cta:translate-x-1">
                <ArrowRight size={18} strokeWidth={2.4} />
              </span>
            </Link>
          </span>
        </motion.div>
      </div>
    </section>
  );
}