"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section aria-labelledby="about-hero-heading" className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#EDF5FF] to-[#E8F0FE]">
      
      {/* Hero Container */}
      <div className="relative w-full h-[480px] sm:h-[520px] lg:h-[540px]">

        {/* Background Banner Image - Students at Bottom */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/about/about-university-yatra-banner.webp" alt="" fill priority sizes="100vw" className="object-cover object-bottom" />
        </div>

        {/* Content Overlay - Top Center */}
        <div className="relative z-10 flex h-full w-full flex-col items-center pt-20 sm:pt-24 lg:pt-28 px-4">
          
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-flex items-center rounded-full border border-[#1765F5]/20 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1765F5] shadow-sm backdrop-blur-sm sm:text-[11px]">
              About University Yatra™
            </span>
          </motion.div>

          {/* Main Heading with White Outline */}
          <motion.h1 id="about-hero-heading" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-center text-[23px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[26px] lg:text-[38px] [text-shadow:_1px_1px_2px_rgb(255_255_255_/_0.8),_-1px_-1px_2px_rgb(255_255_255_/_0.8),_1px_-1px_2px_rgb(255_255_255_/_0.8),_-1px_1px_2px_rgb(255_255_255_/_0.8)]">
            <span className="text-[#0C337B]">Global Education,</span>
            <br />
            <span className="text-[#1765F5]">Thoughtfully Navigated</span>
          </motion.h1>

          {/* Description with White Outline */}
          {/* <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-2.5 max-w-[580px] text-center text-[11px] leading-[1.65] text-[#526B8C] sm:text-[12px] lg:text-[13px] [text-shadow:_1px_1px_1px_rgb(255_255_255_/_0.9),_-1px_-1px_1px_rgb(255_255_255_/_0.9)]">
            Your education journey starts with the right guidance. From choosing universities to applications, finances, and visas, we help you move forward with confidence.
          </motion.p> */}

        </div>

        {/* CTA Button - Bottom Center for All Devices */}
        <div className="absolute inset-x-0 top-50 z-20 flex justify-center px-4 sm:bottom-8">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link href="/contact" className="group inline-flex min-h-[44px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#1765F5] px-6 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-[#1765F5]/25 transition-all duration-300 hover:bg-[#0C337B] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765F5] active:scale-95 sm:px-7 lg:text-[14px]">
              Book A Free Session
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Screen Reader Content */}
        <div className="sr-only">
          <p>About University Yatra™</p>
          <h2>Global Education, Thoughtfully Navigated.</h2>
          <p>Your education journey starts with the right guidance. From choosing universities to applications, finances, and visas, we help you move forward with confidence.</p>
        </div>

      </div>
    </section>
  );
}
