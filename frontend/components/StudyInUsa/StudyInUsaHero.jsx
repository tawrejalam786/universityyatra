"use client";

import { motion } from "framer-motion";
import { ArrowRight,
  BadgeDollarSign,
  Languages,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    label: "Globally Ranked Universities",
    icon: BadgeDollarSign,
  },
  {
    label: "Flexible Academic Pathways",
    icon: Languages,
  },
  {
    label: "Career & Research Exposure",
    icon: BriefcaseBusiness,
  },
];

export default function StudyInUsaHero() {
  return (
    <section
      className="
        relative isolate
        flex min-h-screen min-h-[100dvh] w-full
        flex-col justify-center overflow-hidden
        bg-[#F8FAFC]
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
          poster="/images/study-in-usa-hero-poster.jpg"
          preload="auto"
          aria-hidden="true"
          className="
            h-full w-full
            object-cover
            object-center
            opacity-100
          "
        >
          <source
            src="/videos/study-in-usa-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* =====================================================
          VIDEO OVERLAYS (Light Mode - Balanced Transparency)
      ====================================================== */}

      {/* Balanced light overlay allowing rich building colors, river, and STUDY IN USA text to stand out vividly */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-gradient-to-b
          from-white/60
          via-white/25
          to-white/80
        "
      />

      {/* Center soft ambient glow for text contrast */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-[48%] -z-10
          h-[450px] w-[800px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white/40
          blur-[90px]
        "
      />

      {/* Subtle blue accent glow */}
      <div
        aria-hidden="true"
        className="
          absolute -left-32 top-16 -z-10
          h-[320px] w-[320px]
          rounded-full
          bg-[#5D93F8]/[0.08]
          blur-[120px]
        "
      />

      {/* Subtle light blue glow */}
      <div
        aria-hidden="true"
        className="
          absolute -right-32 bottom-16 -z-10
          h-[340px] w-[340px]
          rounded-full
          bg-[#1765F5]/[0.05]
          blur-[120px]
        "
      />

      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          opacity-[0.035]
          [background-image:radial-gradient(circle_at_center,#0C337B_1.2px,transparent_1.2px)]
          [background-size:32px_32px]
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
          pb-12 pt-28

          sm:px-8 sm:pt-32
          md:px-10 md:pb-16
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
              font-extrabold
              leading-[1.04]
              tracking-[-0.045em]
              text-[#0C337B]
              drop-shadow-[0_2px_14px_rgba(255,255,255,0.9)]

              sm:text-[54px]
              md:text-[68px]
              lg:text-[42px]
              xl:text-[52px]
            "
          >
            Learn in a Culture of{" "}
            <span
              className="
                mt-1 block
                text-[#1765F5]
                drop-shadow-[0_2px_14px_rgba(255,255,255,0.9)]
                md:mt-2
              "
            >
              Research and Discovery.
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
              font-semibold
              leading-[1.75]
              text-[#1D3557]
              drop-shadow-[0_1px_10px_rgba(255,255,255,0.95)]

              sm:text-[16px]
              md:mt-7
              md:text-[18px]
              md:leading-[1.7]

              lg:text-[19px]
            "
          >
            Explore undergraduate, postgraduate, and specialized programs across U.S. universities, with guidance to help you choose the right course, institution, and academic pathway for your goals.
          </motion.p>

          {/* STATS BELOW DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.23, duration: 0.6 }}
            className="mx-auto mt-5 flex max-w-[1050px] flex-wrap items-center justify-center gap-2 text-center sm:mt-6"
          >
            {stats.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D9E4ED] bg-white/85 px-3 py-1 shadow-sm backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#1765F5]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0C337B] sm:text-[11px]">
                  {item.label}
                </span>
              </span>
            ))}
          </motion.div>

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
                border border-[#1765F5]
                bg-[#1765F5]
                px-8 py-4
                text-[15px]
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(23,101,245,0.28)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#1047AC]
                hover:shadow-[0_15px_40px_rgba(23,101,245,0.38)]

                sm:px-9 sm:py-4
                sm:text-[16px]
              "
            >
              Book a Free Consultation

              <ArrowRight
                size={18}
                strokeWidth={2.2}
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

      {/* Bottom feather blend into next white section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-b from-transparent via-white/80 to-white"
      />

    </section>
  );
}