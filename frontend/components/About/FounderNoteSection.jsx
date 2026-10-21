"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FounderNoteSection() {
  return (
    <section
      aria-labelledby="founder-note-title"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-[#FAFCFF] to-[#EDF5FF] py-12 sm:py-14 lg:py-16"
    >
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-[#1765F5]/5 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-[#2DD4BF]/5 blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#1765F5]" />
            Founder's Note
          </div>

          <h2
            id="founder-note-title"
            className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
          >
            Where Strategy Meets{" "}
            <span className="text-[#1765F5]">Real Outcomes</span>
          </h2>
        </motion.div>

        {/* QUOTE CARD */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] border border-[#DFEAFB] bg-white p-8 shadow-[0_12px_40px_rgba(12,51,123,0.06)] sm:p-10 lg:p-12"
        >
          {/* QUOTE ICON */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1765F5] to-[#0C337B] text-white shadow-[0_8px_20px_rgba(23,101,245,0.2)]">
            <Quote size={28} strokeWidth={2} />
          </div>

          {/* QUOTE TEXT */}
          <blockquote className="relative">
            <p className="text-[15px] font-medium leading-[1.85] text-[#53647C] sm:text-[16px] lg:text-[17px]">
              University Yatra™ is led by experienced education professionals who believe that awareness and right information are the strongest tools against fraud. The focus has always been on guiding students with facts, realistic expectations, and ethical practices — not quick wins.
            </p>

            <p className="mt-5 text-[15px] font-medium leading-[1.85] text-[#53647C] sm:text-[16px] lg:text-[17px]">
              At University Yatra™, every profile is evaluated beyond surface-level eligibility. We apply a strategic lens to ensure academic fit, financial stability, safety, and long-term career sustainability.
            </p>
          </blockquote>

          {/* DECORATIVE 3D ELEMENT */}
          <div className="absolute -bottom-8 -right-8 h-[160px] w-[160px] opacity-40 sm:h-[200px] sm:w-[200px]">
            <Image
              src="/images/about/icons/strategy-3d.webp"
              alt="Strategic planning illustration"
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>

          {/* ACCENT LINE */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1765F5] via-[#2DD4BF] to-transparent" />
        </motion.article>
      </div>
    </section>
  );
}
