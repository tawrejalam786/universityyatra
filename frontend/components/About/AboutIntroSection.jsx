"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutIntroSection() {
  return (
    <section
      aria-labelledby="about-intro-title"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-10"
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-14 lg:px-8">
        {/* LEFT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0"
        >
          {/* HEADING */}
          <h2
            id="about-intro-title"
            className="max-w-[620px] text-[29px] font-extrabold leading-[1.14] tracking-[-0.035em] text-[#063B72] sm:text-[35px] md:text-[33px] lg:text-[44px]"
          >
            Clarity for the{" "}
            <span className="text-[#1765f5]">Journey Ahead.</span>
          </h2>

          {/* SUB HEADING */}
          <p className="mt-4 max-w-[580px] text-[15px] font-semibold leading-[1.6] text-[#063B72] sm:text-[16px]">
            Study abroad guidance built around your profile, priorities, and long-term goals.
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-[580px] text-[14px] leading-[1.85] text-[#53647C] sm:text-[15px]">
            University Yatra, a brand of Future Yatra Private Limited, helps students navigate
            international education with a clearer understanding of their options. From university
            selection and applications to documentation and pre-departure planning, we bring
            structure to a process that can often feel overwhelming.
          </p>

          <p className="mt-3 max-w-[580px] text-[14px] leading-[1.85] text-[#53647C] sm:text-[15px]">
            Our approach is straightforward: understand the student before recommending the
            pathway. Every decision should be informed by academic fit, realistic opportunities,
            and transparent guidance, not assumptions or promises.
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/career-counselling"
              className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-[#063B72] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(6,59,114,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1765f5] hover:shadow-[0_10px_24px_rgba(104,24,184,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765f5] sm:text-[14px]"
            >
              Book A Free Session
              <ArrowRight
                size={17}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT - SINGLE COLLAGE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[550px]"
        >
          <Image
            src="/images/about/about-collage.webp"
            alt="University Yatra students exploring education opportunities, collaborating and studying online"
            width={1536}
            height={1024}
            sizes="(max-width: 767px) 100vw, 45vw"
            className="block h-auto w-full object-contain"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}