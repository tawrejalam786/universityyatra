"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { UserRound } from "lucide-react";

/* ------------------------------------------------------------------
   TEAM DATA  ->  naam, role aur photo yahan badlo.
   image: "/images/team/member-1.webp"  (null = silhouette dikhega)
------------------------------------------------------------------- */
const team = [
  { name: "Team Member 01", role: "Role / Designation", image: null },
  { name: "Team Member 02", role: "Role / Designation", image: null },
  { name: "Team Member 03", role: "Role / Designation", image: null },
  { name: "Team Member 04", role: "Role / Designation", image: null },
];

/* Brand blue shades for the 4 capsules */
const themes = [
  { card: "bg-[#DCE8FE]", name: "text-[#0C337B]", role: "text-[#0C337B]/70", sil: "text-[#1765F5]/35" },
  { card: "bg-[#1765F5]", name: "text-white", role: "text-white/80", sil: "text-white/35" },
  { card: "bg-[#EEF4FF]", name: "text-[#0C337B]", role: "text-[#0C337B]/70", sil: "text-[#0C337B]/25" },
  { card: "bg-[#8FB5FF]", name: "text-[#0C337B]", role: "text-[#0C337B]/75", sil: "text-white/60" },
];

function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

/* ---------- One capsule ---------- */
function TeamCapsule({ member, theme, index, reduce }) {
  return (
    /* 1) entrance: rises from the bottom */
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 90, damping: 16, delay: index * 0.12 }}
      className="w-full"
    >
      {/* 2) idle floating */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{
          duration: 5 + index * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        {/* 3) card + hover */}
        <div
          className={`group relative aspect-[10/15.5] w-full overflow-hidden rounded-full ${theme.card} shadow-[0_20px_44px_rgba(2,12,40,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(23,101,245,0.45)]`}
        >
          {/* Name + role */}
          <div className="relative z-10 px-3 pt-[20%] text-center">
            <h3
              className={`text-[11px] font-extrabold uppercase leading-tight tracking-[0.05em] sm:text-[12px] lg:text-[13px] ${theme.name}`}
            >
              {member.name}
            </h3>
            <p className={`mt-1 text-[10px] leading-snug sm:text-[11px] lg:text-[12px] ${theme.role}`}>
              {member.role}
            </p>
          </div>

          {/* Portrait (clipped by the capsule's bottom curve) */}
          <div className="absolute inset-x-0 bottom-0 h-[62%] overflow-hidden">
            {member.image ? (
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                fill
                sizes="(max-width: 768px) 54vw, 260px"
                className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            ) : (
              <UserRound
                aria-hidden="true"
                strokeWidth={1.2}
                fill="currentColor"
                className={`absolute bottom-[-8%] left-1/2 h-[96%] w-auto -translate-x-1/2 transition-transform duration-700 group-hover:scale-105 ${theme.sil}`}
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Section ---------- */
export default function TeamSection() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="team-title"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0C337B] to-[#071F52] py-10 sm:py-12"
    >
      {/* ---------- animated background ---------- */}
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-[58%] h-[380px] w-[min(90%,820px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#1765F5]/40 blur-[110px]"
      />
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-[58%] hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 md:block"
      />
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[6%] top-[12%] text-[#8FB5FF]/60"
      >
        <Sparkle className="h-6 w-6" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: [0, -90, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[8%] right-[7%] text-white/40"
      >
        <Sparkle className="h-5 w-5" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* ---------- HEADING (compact) ---------- */}
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <motion.h2
            id="team-title"
            {...fadeUp(0)}
            className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-[34px] lg:text-[40px]"
          >
            The People Behind Your Global Journey.
          </motion.h2>

          <motion.h3
            {...fadeUp(0.08)}
            className="mt-2 text-[15px] font-bold leading-[1.35] text-[#8FB5FF] sm:text-[17px] lg:text-[19px]"
          >
            A Team That Turns Guidance into Direction.
          </motion.h3>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-3 max-w-[680px] text-[13px] leading-[1.7] text-white/70 sm:text-[14px]"
          >
            Meet the people bringing together expertise, thoughtful guidance and a student-first
            approach to help you navigate your study abroad journey.
          </motion.p>
        </div>

        {/* ---------- CAPSULES ----------
            mobile : swipeable single row (snap carousel)
            md+    : 4 columns, staggered; height capped by screen height (vh) */}
        <ul
          className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-4 px-4 pb-8 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 sm:scroll-pl-6 md:mx-auto md:mt-8 md:grid md:max-w-[1080px] md:grid-cols-4 md:gap-x-5 md:overflow-visible md:px-0 md:pb-8 md:pt-2 lg:gap-x-7 lg:pb-10 [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member, i) => (
            <li
              key={member.name}
              className={`w-[54vw] max-w-[210px] shrink-0 snap-start md:mx-auto md:w-full md:max-w-[calc(clamp(220px,44vh,380px)*0.645)] md:shrink md:snap-align-none ${
                i % 2 === 1 ? "translate-y-6 md:translate-y-8 lg:translate-y-10" : ""
              }`}
            >
              <TeamCapsule
                member={member}
                theme={themes[i % themes.length]}
                index={i}
                reduce={reduce}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}