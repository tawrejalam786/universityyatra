"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2,
  Layers3,
  BadgeCheck,
  ShieldCheck,
  Trophy, } from "lucide-react";

const stats = [
  {
    label: "30+ Universities",
    icon: Building2,
  },
  {
    label: "5+ Specializations",
    icon: Layers3,
  },
  {
    label: "UGC Recognized",
    icon: BadgeCheck,
  },
  {
    label: "NAAC Accredited",
    icon: ShieldCheck,
  },
  {
    label: "NIRF Ranked",
    icon: Trophy,
  },
];

export default function StudyIndiaHero() {
  return (
    <section
      className="
        relative isolate
        flex min-h-[650px] w-full
        flex-col overflow-hidden
        bg-[#041a3a]

        md:min-h-[720px]
        lg:min-h-[760px]
      "
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="
            h-full w-full
            scale-[1.03]
            object-cover
            object-center
          "
        >
          <source
            src="/videos/study-in-india.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* =====================================================
          VIDEO OVERLAYS
      ====================================================== */}

      {/* Main navy overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[#031b3f]/75
        "
      />

      {/* Top dark layer */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-gradient-to-b
          from-[#02132e]/80
          via-[#052452]/30
          to-[#02132e]/90
        "
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-[48%] -z-10
          h-[400px] w-[700px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-emerald-400/[0.08]
          blur-[110px]
        "
      />

      {/* Saffron subtle glow */}
      <div
        aria-hidden="true"
        className="
          absolute -left-32 top-16 -z-10
          h-[320px] w-[320px]
          rounded-full
          bg-orange-500/[0.09]
          blur-[120px]
        "
      />

      {/* India green glow */}
      <div
        aria-hidden="true"
        className="
          absolute -right-32 bottom-16 -z-10
          h-[340px] w-[340px]
          rounded-full
          bg-emerald-400/[0.11]
          blur-[120px]
        "
      />

      {/* Noise / dot feeling */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          opacity-[0.08]
          [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto flex w-full
          max-w-[1450px]
          flex-1 items-center justify-center
          px-5
          pb-14 pt-20

          sm:px-8
          md:px-10 md:pb-20 md:pt-24
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          {/* Study In India label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-5
              inline-flex items-center
              rounded-full
              border border-white/15
              bg-white/[0.08]
              px-5 py-2
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
              backdrop-blur-md

              sm:text-[13px]
            "
          >
            Study In India
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.08,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[43px]
              font-bold
              leading-[1.02]
              tracking-[-0.045em]
              text-white

              sm:text-[54px]
              md:text-[68px]
              lg:text-[80px]
              xl:text-[88px]
            "
          >
            A Degree That
            <span
              className="
                mt-1 block
               text-[#2DD4BF]
                md:mt-2
              "
            >
              Moves With You.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.16,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-[790px]
              text-[15px]
              font-normal
              leading-[1.75]
              text-white/80

              sm:text-[16px]
              md:mt-7
              md:text-[18px]
              md:leading-[1.7]

              lg:text-[19px]
            "
          >
            Pursue recognized online degrees with the flexibility to balance
            education, work, and personal commitments, while building toward
            your long-term career goals.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.24,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              flex justify-center

              md:mt-9
            "
          >
            <button
              type="button"
              className="
                group
                inline-flex items-center justify-center
                gap-3
                rounded-full
                border border-emerald-300/30
                bg-[#2DD4BF]
                px-7 py-[15px]
                text-[14px]
                font-semibold
                text-brand-navy-dark
                shadow-[0_10px_40px_rgba(16,185,129,0.28)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#0ab985]
                hover:shadow-[0_15px_45px_rgba(16,185,129,0.38)]

                sm:px-9 sm:py-4
                sm:text-[15px]

                md:text-[16px]
              "
            >
              Book Free Counselling

              <ArrowRight
                size={18}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.div>
        </div>
      </div>

{/* =====================================================
    BOTTOM STATS STRIP
====================================================== */}

<div
  className="
    relative z-20
    border-t border-white/10
    bg-[#021631]/85
    backdrop-blur-xl
  "
>
  {/* top line */}
  <div
    aria-hidden="true"
    className="
      absolute left-1/2 top-0
      h-px w-[70%]
      -translate-x-1/2
      bg-[#2DD4BF]/40
    "
  />

  {/* ================= MOBILE MARQUEE ================= */}
  <div className="overflow-hidden md:hidden">
    <div className="stats-marquee flex w-max">
      {[...stats, ...stats].map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={`${item.label}-${index}`}
            className="
              relative
              flex min-w-max
              items-center
              gap-3
              px-6 py-[18px]
            "
          >
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-[#2DD4BF]/20
                bg-[#2DD4BF]/10
                text-[#2DD4BF]
              "
            >
              <Icon size={18} strokeWidth={1.8} />
            </div>

            <span
              className="
                whitespace-nowrap
                text-[13px]
                font-semibold
                text-white/90
              "
            >
              {item.label}
            </span>

            <span
              aria-hidden="true"
              className="
                ml-3
                h-5 w-px
                bg-white/15
              "
            />
          </div>
        );
      })}
    </div>
  </div>

  {/* ================= DESKTOP STATIC ================= */}
  <div
    className="
      mx-auto
      hidden max-w-[1500px]
      md:flex
      md:justify-center
      md:px-8
    "
  >
    {stats.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.label}
          className="
            relative
            flex flex-1
            items-center justify-center
            px-5 py-[22px]
            lg:px-8
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-[#2DD4BF]/20
                bg-[#2DD4BF]/10
                text-[#2DD4BF]

                lg:h-10 lg:w-10
              "
            >
              <Icon
                size={18}
                strokeWidth={1.8}
                className="lg:h-5 lg:w-5"
              />
            </div>

            <span
              className="
                whitespace-nowrap
                text-[13px]
                font-semibold
                tracking-[0.01em]
                text-white/90

                lg:text-[15px]
              "
            >
              {item.label}
            </span>
          </div>

          {index !== stats.length - 1 && (
            <span
              aria-hidden="true"
              className="
                absolute right-0
                h-6 w-px
                bg-white/15
              "
            />
          )}
        </div>
      );
    })}
  </div>
</div>
    </section>
  );
}