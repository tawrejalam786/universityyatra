"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          1. STRETCHED USA MONUMENTS HERO BACKGROUND IMAGE
          (Statue of Liberty & Manhattan Skyline in Foreground,
           Giant 3D Typography "USA" Rising in Depth Behind City)
      ====================================================== */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Image
          src="/images/hero/study-in-usa-hero-latest.jpg"
          alt="Study in USA - 3D Depth Typography with Campus, River, Bridge and Skyline"
          fill
          priority
          unoptimized
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* =====================================================
          2. CRISP ATMOSPHERIC OVERLAYS
          (Clean transparent center to showcase full 3D artwork)
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-gradient-to-t
          from-black/35
          via-transparent
          to-black/10
        "
      />

      {/* =====================================================
          SINGLE-ROW HEADLINE
          (Positioned in sky equidistant between navbar and 3D USA letters)
      ====================================================== */}
      <div className="relative z-10 w-full px-4 pt-24 sm:pt-26 md:pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="
            mx-auto inline-block
            whitespace-nowrap
            text-[13px] sm:text-[17px] md:text-[21px] lg:text-[24px]
            font-extrabold
            tracking-[-0.03em]
            text-[#0C337B]
            drop-shadow-[0_2px_14px_rgba(255,255,255,0.95)]
          "
        >
          Learn in a Culture of{" "}
          <span className="text-[#1765F5] drop-shadow-[0_2px_14px_rgba(255,255,255,0.95)]">
            Research and Discovery.
          </span>
        </motion.h1>
      </div>

      {/* =====================================================
          3. BOTTOM CORNER CTAs
          (Bottom-Left: Book Consultation | Bottom-Right: Chat On Whatsapp)
          Leaving the entire center 100% unobstructed for the 3D USA artwork
      ====================================================== */}
      <div
        className="
          relative z-10
          mt-auto
          w-full
          px-5 pb-8
          sm:px-8 sm:pb-10
          md:px-12 md:pb-12
          lg:px-16
        "
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Bottom Left: Book a Free Consultation */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("faq-section") || document.querySelector("footer");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                group
                inline-flex w-full sm:w-auto items-center justify-center
                gap-3
                rounded-full
                border border-[#1765F5]
                bg-[#1765F5]
                px-7 py-3.5
                text-[14px]
                font-bold
                text-white
                shadow-[0_12px_32px_rgba(23,101,245,0.45)]
                backdrop-blur-md
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#0C337B]
                hover:border-[#0C337B]
                hover:shadow-[0_16px_40px_rgba(12,51,123,0.55)]

                sm:px-8 sm:py-4
                sm:text-[15px]
              "
            >
              <span>Book a Free Consultation</span>
              <ArrowRight
                size={17}
                strokeWidth={2.4}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.div>

          {/* Bottom Right: Chat On Whatsapp */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20my%20study%20options%20in%20USA."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex w-full sm:w-auto items-center justify-center
                gap-3
                rounded-full
                border border-[#25D366]
                bg-white/95
                px-7 py-3.5
                text-[14px]
                font-bold
                text-[#0C337B]
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                backdrop-blur-md
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#25D366]
                hover:text-white
                hover:shadow-[0_14px_36px_rgba(37,211,102,0.45)]

                sm:px-8 sm:py-4
                sm:text-[15px]
              "
            >
              <svg className="h-5 w-5 fill-[#25D366] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
              </svg>
              <span>Chat On Whatsapp</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle feather blend into next white section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}