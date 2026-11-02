
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ClipboardCheck,
  Landmark,
  FileCheck2,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

// Animation variants

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EducationLoanProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education-loan-process"
      aria-labelledby="education-loan-process-title"
      className="relative isolate w-full overflow-hidden bg-[#F6F9FF] py-12 sm:py-14 lg:py-10"
    >
      {/* BACKGROUND DECORATION */}

      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-[280px] w-[280px] rounded-full border-[45px] border-[#1765F5]/[0.025]" />

      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 h-[260px] w-[260px] rounded-full border-[45px] border-[#1765F5]/[0.025]" />

      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between md:gap-8"
        >
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 rounded-full bg-[#1765F5]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[11px]">
                The Process, Simplified
              </span>
            </div>

            <h2
              id="education-loan-process-title"
              className="max-w-[750px] text-[27px] font-extrabold leading-[1.18] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] lg:text-[40px]"
            >
              How Our Education{" "}
              <span className="text-[#1765F5]">
                Loans Work
              </span>
            </h2>
          </div>

          <p className="max-w-[310px] text-[13px] leading-[1.75] text-[#667995] sm:text-[14px]">
            From your first application to understanding repayment,
            every step made clearer.
          </p>
        </motion.div>

        {/* BENTO GRID */}

        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full min-w-0 grid-cols-1 gap-3 lg:grid-cols-[1fr_1.15fr] lg:items-stretch lg:gap-4"
        >
          {/* ======================================== */}
          {/* STEP 01 — LARGE FEATURED CARD */}
          {/* ======================================== */}

          <motion.article
            variants={cardVariants}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="group relative isolate flex min-h-[235px] min-w-0 flex-col justify-between overflow-hidden rounded-[20px] bg-[#0C337B] p-6 shadow-[0_15px_35px_rgba(12,51,123,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(12,51,123,0.20)] sm:p-7 lg:min-h-[310px] lg:rounded-[22px] lg:p-8"
          >
            {/* DECORATIVE CIRCLES */}

            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-[230px] w-[230px] rounded-full border-[40px] border-white/[0.045]" />

            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-[220px] w-[220px] rounded-full border-[35px] border-white/[0.025]" />

            {/* TOP */}

            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="text-[65px] font-extrabold leading-none tracking-[-0.08em] text-white/20 sm:text-[75px] lg:text-[85px]">
                01.
              </span>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-transform duration-300 group-hover:rotate-[-8deg] sm:h-12 sm:w-12">
                <ClipboardCheck size={24} strokeWidth={1.8} />
              </div>
            </div>

            {/* BOTTOM CONTENT */}

            <div className="relative z-10 mt-5">
              <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#A2C1FB]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5D93F8]" />
                Start Your Journey
              </span>

              <h3 className="mb-3 text-[23px] font-extrabold leading-[1.2] tracking-[-0.03em] text-white sm:text-[27px] lg:text-[30px]">
                Apply with Confidence
              </h3>

              <p className="max-w-[385px] text-[13px] leading-[1.75] text-[#D2E2FA] sm:text-[14px]">
                Begin your education loan journey with clarity,
                preparation and expert guidance throughout the
                application process.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/90">
                  <CheckCircle2 size={13} />
                  Application Guidance
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/90">
                  <ShieldCheck size={13} />
                  Expert Support
                </span>
              </div>
            </div>
          </motion.article>

          {/* ======================================== */}
          {/* RIGHT SIDE CARDS */}
          {/* ======================================== */}

          <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-rows-[1fr_1fr] lg:gap-4">
            {/* STEP 02 — WIDE CARD */}

            <motion.article
              variants={cardVariants}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative isolate flex min-h-[155px] min-w-0 flex-col justify-between overflow-hidden rounded-[18px] border border-[#C8DBFC] bg-[#DCE9FF] p-5 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(23,101,245,0.10)] sm:p-6 lg:min-h-0 lg:rounded-[20px]"
            >
              {/* BACKGROUND DECORATION */}

              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full border-[27px] border-[#1765F5]/[0.055]" />

              {/* TOP */}

              <div className="relative z-10 mb-4 flex items-start justify-between gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#1765F5]">
                  Step 02 / Lender Options
                </span>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1765F5] text-white shadow-[0_5px_14px_rgba(23,101,245,0.15)] transition-transform duration-300 group-hover:rotate-[-8deg]">
                  <Landmark size={19} strokeWidth={1.8} />
                </div>
              </div>

              {/* CONTENT */}

              <div className="relative z-10">
                <h3 className="mb-2 text-[18px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#0C337B] sm:text-[20px]">
                  Smart Lender Matching
                </h3>

                <p className="max-w-[480px] text-[12px] leading-[1.65] text-[#5D7398] sm:text-[13px]">
                  Explore suitable education loan options from banks
                  and lenders based on your requirements.
                </p>
              </div>
            </motion.article>

            {/* BOTTOM TWO CARDS */}

            <div className="grid min-w-0 grid-cols-1 gap-3 min-[390px]:grid-cols-2 lg:gap-4">
              {/* STEP 03 */}

              <motion.article
                variants={cardVariants}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative isolate flex min-h-[170px] min-w-0 flex-col justify-between overflow-hidden rounded-[18px] border border-[#D5E4FC] bg-[#EAF2FF] p-5 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(23,101,245,0.10)] sm:p-6 lg:min-h-0 lg:rounded-[20px]"
              >
                {/* TOP */}

                <div className="relative z-10 mb-4 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#1765F5]">
                    Step 03
                  </span>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#1765F5] transition-transform duration-300 group-hover:rotate-[-8deg]">
                    <FileCheck2 size={19} strokeWidth={1.8} />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3 className="mb-2 text-[16px] font-extrabold leading-[1.3] tracking-[-0.025em] text-[#0C337B] sm:text-[17px]">
                    Approval &amp; Documentation
                  </h3>

                  <p className="text-[11px] leading-[1.65] text-[#647A9C] sm:text-[12px]">
                    Guidance with required documents, applications
                    and the lender approval process.
                  </p>
                </div>
              </motion.article>

              {/* STEP 04 */}

              <motion.article
                variants={cardVariants}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative isolate flex min-h-[170px] min-w-0 flex-col justify-between overflow-hidden rounded-[18px] bg-[#1765F5] p-5 shadow-[0_8px_22px_rgba(23,101,245,0.10)] transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(23,101,245,0.20)] sm:p-6 lg:min-h-0 lg:rounded-[20px]"
              >
                {/* BACKGROUND CIRCLE */}

                <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full border-[27px] border-white/[0.07]" />

                {/* TOP */}

                <div className="relative z-10 mb-4 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#DCE9FF]">
                    Step 04
                  </span>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
                    <GraduationCap size={20} strokeWidth={1.8} />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3 className="mb-2 text-[16px] font-extrabold leading-[1.3] tracking-[-0.025em] text-white sm:text-[17px]">
                    Repay After You Graduate
                  </h3>

                  <p className="text-[11px] leading-[1.65] text-[#E1EBFF] sm:text-[12px]">
                    Understand repayment schedules, applicable
                    moratoriums and lender-specific terms.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </motion.div>

        {/* OPTIONAL FOOTNOTE */}

        <div className="mt-5 flex items-start gap-2 text-[11px] leading-[1.6] text-[#7889A4] sm:text-[12px]">
          <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#1765F5]" />

          <p>
            Loan approval, eligibility and repayment conditions
            depend on the respective bank or lender.
          </p>
        </div>
      </div>
    </section>
  );
}
