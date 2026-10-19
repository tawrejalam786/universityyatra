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
        flex min-h-[82vh] sm:min-h-[86vh] w-full
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
          max-w-[1320px]
          flex-1 items-center justify-center
          px-4
          pb-8 pt-20

          sm:px-6 sm:pt-24 sm:pb-10
          md:pb-12
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
              text-[36px]
              font-extrabold
              leading-[1.06]
              tracking-[-0.045em]
              text-[#0C337B]
              drop-shadow-[0_2px_14px_rgba(255,255,255,0.9)]

              sm:text-[48px]
              md:text-[56px]
              lg:text-[58px]
            "
          >
            Learn in a Culture of{" "}
            <span
              className="
                mt-1 block
                text-[#1765F5]
                drop-shadow-[0_2px_14px_rgba(255,255,255,0.9)]
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
              mt-3.5
              max-w-[760px]
              text-[14px]
              font-semibold
              leading-[1.65]
              text-[#1D3557]
              drop-shadow-[0_1px_10px_rgba(255,255,255,0.95)]

              sm:text-[16px]
              md:mt-4
              md:text-[17px]
            "
          >
            Explore undergraduate, postgraduate, and specialized programs across U.S. universities, with guidance to help you choose the right course, institution, and academic pathway for your goals.
          </motion.p>

          {/* STATS BELOW DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.23, duration: 0.6 }}
            className="mx-auto mt-4 flex max-w-[1050px] flex-wrap items-center justify-center gap-2 text-center"
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

          {/* CTAs */}
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
              mt-5 sm:mt-6
              flex flex-wrap items-center justify-center gap-3 sm:gap-4
            "
          >
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("faq-section") || document.querySelector("footer");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                group
                inline-flex items-center justify-center
                gap-2.5
                rounded-full
                border border-[#1765F5]
                bg-[#1765F5]
                px-6 py-3
                text-[13px]
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(23,101,245,0.28)]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#1047AC]
                hover:shadow-[0_15px_40px_rgba(23,101,245,0.38)]

                sm:px-7 sm:py-3.5
                sm:text-[14px]
              "
            >
              <span>Book a Free Consultation</span>
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            <a
              href="https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20my%20study%20options%20in%20USA."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center justify-center
                gap-2.5
                rounded-full
                border border-[#25D366]
                bg-[#25D366]/10
                px-6 py-3
                text-[13px]
                font-bold
                text-[#0C337B]
                shadow-[0_4px_16px_rgba(37,211,102,0.15)]
                backdrop-blur-md
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#25D366]
                hover:text-white
                hover:shadow-[0_10px_28px_rgba(37,211,102,0.35)]

                sm:px-7 sm:py-3.5
                sm:text-[14px]
              "
            >
              <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24">
                <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
              </svg>
              <span>Chat On Whatsapp</span>
            </a>
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