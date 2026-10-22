
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StudyInUsaHero() {
  const reduceMotion = useReducedMotion();

  const handleConsultationClick = () => {
    const el =
      document.getElementById("faq-section") ||
      document.querySelector("footer");

    el?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative isolate flex h-[600px] w-full flex-col overflow-hidden bg-[#F8FAFC]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Image
          src="/images/hero/study-in-usa-hero-latest.jpg"
          alt="USA landmarks including the Statue of Liberty and New York skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* BACKGROUND OVERLAY */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* TOP HEADING */}
      <div className="relative z-10 w-full px-4 pt-8 text-center sm:px-6 sm:pt-10 md:pt-12 lg:pt-22">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1100px] text-[22px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0C337B] sm:text-[26px] md:text-[30px] lg:text-[34px]"
        >
          Learn in a Culture of{" "}
          <span className="text-[#1765F5]">
            Research and Discovery.
          </span>
        </motion.h1>
      </div>

      {/* BOTTOM CTA BUTTONS */}
      <div className="relative z-10 mt-auto w-full px-4 pb-8 sm:px-8 sm:pb-9 md:px-12 md:pb-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-5">

          {/* FREE CONSULTATION */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={handleConsultationClick}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[12px] font-bold text-white shadow-[0_8px_24px_rgba(23,101,245,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0C337B] hover:bg-[#0C337B] sm:w-auto sm:px-6 sm:py-3.5 sm:text-[13px] md:text-[14px]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={16} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* WHATSAPP BUTTON */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20my%20study%20options%20in%20USA."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#25D366] bg-white/95 px-5 py-3 text-[12px] font-bold text-[#0C337B] shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white sm:w-auto sm:px-6 sm:py-3.5 sm:text-[13px] md:text-[14px]"
            >
              <svg
                aria-hidden="true"
                className="h-[18px] w-[18px] fill-[#25D366] transition-colors group-hover:fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
              </svg>
              <span>Chat On WhatsApp</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM BLEND */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-8 bg-gradient-to-b from-transparent to-white" />

    </section>
  );
}
