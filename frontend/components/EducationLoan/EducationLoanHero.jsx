
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronRight,
  GraduationCap,
  Landmark,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

// Update these links to your actual pages or form.
const ELIGIBILITY_URL = "/education-loans#eligibility";
const EXPERT_URL = "/contact";

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export default function EducationLoanHero() {
  const reduceMotion = useReducedMotion();

  const animationProps = (variants, delay = 0) => ({
    initial: reduceMotion ? false : "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants,
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="education-loan-hero"
      aria-labelledby="education-loan-title"
      className="relative isolate w-full overflow-hidden bg-[#F1F6FF]"
    >
      {/* BACKGROUND ELEMENTS */}

      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-48 h-[420px] w-[420px] rounded-full border-[65px] border-[#1765F5]/[0.035]" />

      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-24 h-[300px] w-[300px] rounded-full border-[45px] border-[#1765F5]/[0.035]" />

      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1340px] flex-col justify-center px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:min-h-[500px] lg:px-8 lg:py-12 xl:px-10">
        {/* BREADCRUMB */}

        <nav aria-label="Breadcrumb" className="mb-7 flex min-w-0 items-center gap-2 text-[12px] font-medium sm:mb-8">
          <Link href="/" className="text-[#7184A3] transition-colors hover:text-[#1765F5]">
            Home
          </Link>

          <ChevronRight size={14} className="shrink-0 text-[#9AACCA]" />

          <span aria-current="page" className="font-semibold text-[#1765F5]">
            Education Loans
          </span>
        </nav>

        {/* HERO GRID */}

        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 xl:gap-12">
          {/* LEFT CONTENT */}

          <motion.div {...animationProps(fadeLeft)} className="relative z-20 min-w-0">
            {/* EYEBROW */}

            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/15 bg-white px-3 py-2 shadow-[0_4px_15px_rgba(23,101,245,0.04)]">
              <Sparkles size={15} className="shrink-0 text-[#1765F5]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#1765F5] sm:text-[11px]">
                Fund Your Global Ambitions
              </span>
            </div>

            {/* HEADING */}

            <h1 id="education-loan-title" className="max-w-[730px] text-[32px] font-extrabold leading-[1.13] tracking-[-0.045em] text-[#0C337B] sm:text-[39px] md:text-[45px] lg:text-[43px] xl:text-[52px]">
              Global Education Loans Backed by{" "}
              <span className="text-[#1765F5]">
                30+ Trusted Banks &amp; Lenders
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[620px] text-[14px] leading-[1.8] text-[#607393] sm:text-[15px] lg:text-[16px]">
              Get tailored education loan solutions up to{" "}
              <strong className="font-extrabold text-[#0C337B]">
                ₹1.5 Crore+
              </strong>{" "}
              for top universities worldwide — with expert support from
              approval to disbursal.
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={ELIGIBILITY_URL}
                className="group inline-flex min-h-[49px] w-full items-center justify-center gap-2 rounded-xl bg-[#1765F5] px-5 py-3 text-center text-[13px] font-bold leading-snug text-white shadow-[0_10px_25px_rgba(23,101,245,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C52D6] hover:shadow-[0_15px_30px_rgba(23,101,245,0.25)] sm:w-auto sm:text-[14px]"
              >
                Check Your Loan Eligibility (2 mins)

                <ArrowUpRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href={EXPERT_URL}
                className="group inline-flex min-h-[49px] w-full items-center justify-center gap-2 rounded-xl border border-[#C7D9F8] bg-white px-5 py-3 text-center text-[13px] font-bold text-[#0C337B] shadow-[0_5px_18px_rgba(12,51,123,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1765F5] hover:text-[#1765F5] sm:w-auto sm:text-[14px]"
              >
                <MessageCircle size={17} className="shrink-0 text-[#1765F5]" />

                Talk to a Loan Expert

                <ArrowRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* BOTTOM TRUST INFO */}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-semibold text-[#647997] sm:text-[12px]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-[#1765F5]" />
                <span>30+ Lending Partners</span>
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-[#1765F5]" />
                <span>Expert Loan Support</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            {...animationProps(fadeRight, 0.12)}
            className="relative mx-auto flex h-[300px] w-full max-w-[510px] min-w-0 items-center justify-center sm:h-[355px] lg:h-[380px]"
          >
            {/* DECORATIVE CIRCLES */}

            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCE9FF] sm:h-[305px] sm:w-[305px] lg:h-[330px] lg:w-[330px]" />

            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#1765F5]/30 sm:h-[260px] sm:w-[260px] lg:h-[285px] lg:w-[285px]" />

            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1765F5]/10 sm:h-[200px] sm:w-[200px] lg:h-[230px] lg:w-[230px]" />

            {/* SMALL DECORATIVE DOTS */}

            <div aria-hidden="true" className="pointer-events-none absolute left-[12%] top-[17%] h-3 w-3 rounded-full bg-[#1765F5]/30" />

            <div aria-hidden="true" className="pointer-events-none absolute bottom-[15%] right-[10%] h-2.5 w-2.5 rounded-full bg-[#5D93F8]/50" />

            {/* MAIN LOAN CARD */}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4 }}
              viewport={{ once: true }}
              whileHover={reduceMotion ? undefined : { y: -7, rotate: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
              className="relative z-10 w-[77%] max-w-[365px] rounded-[22px] border border-[#E1E9F7] bg-white p-5 shadow-[0_22px_60px_rgba(12,51,123,0.18)] sm:p-7"
              style={{ transformOrigin: "center center" }}
            >
              {/* CARD TOP */}

              <div className="flex items-center justify-between gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1765F5] shadow-[0_6px_15px_rgba(23,101,245,0.20)]">
                  <GraduationCap size={24} strokeWidth={1.8} className="text-white" />
                </div>

                <span className="rounded-full bg-[#EAF2FF] px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.05em] text-[#1765F5] sm:text-[10px]">
                  Education Loan
                </span>
              </div>

              {/* CARD VALUE */}

              <div className="mt-7 sm:mt-9">
                <p className="text-[11px] font-semibold text-[#7385A3] sm:text-[12px]">
                  Loan solutions up to
                </p>

                <div className="mt-2 text-[30px] font-extrabold leading-none tracking-[-0.045em] text-[#0C337B] sm:text-[39px]">
                  ₹1.5 Crore+
                </div>
              </div>

              {/* SEPARATOR */}

              <div className="my-5 h-px w-full bg-[#E8EEF9]" />

              {/* CARD BENEFITS */}

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF]">
                    <Check size={15} strokeWidth={2.5} className="text-[#1765F5]" />
                  </span>

                  <span className="text-[11px] font-semibold text-[#5D7091] sm:text-[12px]">
                    Universities worldwide
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF]">
                    <Check size={15} strokeWidth={2.5} className="text-[#1765F5]" />
                  </span>

                  <span className="text-[11px] font-semibold text-[#5D7091] sm:text-[12px]">
                    Expert application support
                  </span>
                </div>
              </div>

              {/* CARD FOOTER */}

              <div className="mt-6 flex items-center justify-between rounded-xl bg-[#F0F5FF] px-3 py-3">
                <div className="flex items-center gap-2">
                  <BookOpenCheck size={17} className="text-[#1765F5]" />

                  <span className="text-[10px] font-bold text-[#0C337B] sm:text-[11px]">
                    University Yatra
                  </span>
                </div>

                <ArrowUpRight size={17} className="text-[#1765F5]" />
              </div>
            </motion.div>

            {/* FLOATING TOP RIGHT CARD */}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: -12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={reduceMotion ? { duration: 0 } : { opacity: { duration: 0.5, delay: 0.45 }, scale: { duration: 0.5, delay: 0.45 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute right-0 top-[5%] z-20 flex items-center gap-2 rounded-xl border border-[#E3EBFA] bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(12,51,123,0.14)] sm:right-[2%] sm:top-[8%] sm:gap-3 sm:px-4 sm:py-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF]">
                <Landmark size={19} className="text-[#1765F5]" />
              </div>

              <div>
                <p className="text-[14px] font-extrabold leading-tight text-[#0C337B] sm:text-[17px]">
                  30+
                </p>

                <p className="text-[9px] font-semibold text-[#7385A1] sm:text-[10px]">
                  Trusted Partners
                </p>
              </div>
            </motion.div>

            {/* FLOATING BOTTOM LEFT CARD */}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
              transition={reduceMotion ? { duration: 0 } : { opacity: { duration: 0.5, delay: 0.6 }, scale: { duration: 0.5, delay: 0.6 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute bottom-[3%] left-0 z-20 flex items-center gap-2.5 rounded-xl border border-[#E3EBFA] bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(12,51,123,0.14)] sm:bottom-[6%] sm:left-[1%] sm:px-4 sm:py-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF]">
                <WalletCards size={19} className="text-[#1765F5]" />
              </div>

              <div>
                <p className="text-[11px] font-extrabold text-[#0C337B] sm:text-[12px]">
                  Expert Guidance
                </p>

                <p className="mt-0.5 text-[9px] font-medium text-[#7385A1] sm:text-[10px]">
                  Approval to disbursal
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
