"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const chooseRightStudyPathway = [
  "Undergraduate, postgraduate & professional programs",
  "Country, university & course selection based on your profile",
  "English-taught programs across European destinations",
  "Programs aligned with your academic & career goals",
];

const planJourneyToEurope = [
  "Application & documentation guidance",
  "SOP guidance",
  "Country-specific visa guidance",
  "Pre-departure support",
];

function CheckItem({ children, teal = false }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] leading-[1.45] text-[#3f5268] sm:text-[14px]">
      <span
        className={`mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${
          teal ? "bg-[#18B8B5]" : "bg-[#063B72]"
        }`}
      >
        <Check size={12} strokeWidth={2.7} />
      </span>

      <span>{children}</span>
    </li>
  );
}

export default function OnlineDegreeSection() {
  return (
    <section className="w-full overflow-hidden bg-[#f6f8fb] py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-6">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.45,
          }}
          className="mb-6 text-center md:mb-7"
        >
          <h2 className="mx-auto max-w-[780px] text-[27px] font-bold leading-[1.15] tracking-[-0.03em] text-[#063B72] sm:text-[32px] md:text-[38px] lg:text-[41px]">
            Designed for{" "}
            <span className="text-[#18B8B5]">Your Future</span>
          </h2>
        </motion.div>

        {/* =====================================================
            CARDS
        ====================================================== */}

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">

          {/* ===================================================
              MAIN / TOP CARD
          ==================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative overflow-hidden rounded-[22px] border border-[#d7e7e7] bg-[#edf8f7] md:col-span-2"
          >

            {/* Decorative shape */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-44 w-44 rounded-full bg-[#18B8B5]/10"
            />

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">

              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="relative z-10 px-5 py-6 sm:px-6 md:px-8 md:py-7 lg:px-9 lg:py-8">

                {/* Heading */}
              <h3 className="hidden text-[25px] font-bold leading-[1.12] tracking-[-0.025em] text-[#063B72] sm:text-[28px] md:block md:text-[31px] lg:text-[34px]">
                Your Next Academic Chapter:{" "}
                <span className="text-[#18B8B5]">Europe.</span>
              </h3>

                {/* =============================================
                    DESKTOP CONTENT
                ============================================== */}

                <div className="mt-4 hidden max-w-[690px] space-y-3 text-[14px] leading-[1.6] text-[#43556b] md:block lg:text-[15px]">
                  <p>
                    Europe offers international students a broad mix of{" "}
                    <strong className="font-semibold text-[#063B72]">
                      universities, academic systems, and study destinations
                    </strong>
                    . With{" "}
                    <strong className="font-semibold text-[#063B72]">
                      affordable options
                    </strong>
                    ,{" "}
                    <strong className="font-semibold text-[#063B72]">
                      English-taught programs
                    </strong>
                    , and varied course structures across countries, students can explore
                    pathways that fit their{" "}
                    <strong className="font-semibold text-[#063B72]">
                      academic and career plans
                    </strong>
                    .
                  </p>
                </div>

                {/* =============================================
                    MOBILE CONTENT
                ============================================== */}

                <div className="mt-4 space-y-3 text-[14px] leading-[1.55] text-[#43556b] md:hidden">

                  {/* Mobile Heading */}
                  <h4 className="text-[22px] font-bold leading-[1.15] text-[#063B72]">
                    Your Next Chapter:{" "}
                    <span className="text-[#18B8B5]">Europe.</span>
                  </h4>

                 <p>
  Explore{" "}
  <strong className="font-semibold text-[#063B72]">
    diverse universities
  </strong>
  ,{" "}
  <strong className="font-semibold text-[#063B72]">
    English-taught programs
  </strong>
  , and{" "}
  <strong className="font-semibold text-[#063B72]">
    affordable study options
  </strong>{" "}
  across Europe, with guidance to help you choose the{" "}
  <strong className="font-semibold text-[#063B72]">
    right country, course, and university
  </strong>
  .
</p>
                </div>

              </div>

              {/* =================================================
                  TOP STUDENT IMAGE
              ================================================== */}

              <div className="relative h-[205px] w-full overflow-hidden sm:h-[225px] md:h-auto md:min-h-[285px]">

                <Image
                  src="/images/study-india/online-degree-student.webp"
                  alt="Student studying in Europe with a laptop"
                  fill
                  sizes="(max-width: 767px) 100vw, 38vw"
                  className="object-cover object-center md:object-right"
                />

                {/* Image blending */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden bg-gradient-to-r from-[#edf8f7] via-[#edf8f7]/15 to-transparent md:block"
                />

              </div>

            </div>
          </motion.article>

          {/* ===================================================
              CHOOSE THE RIGHT STUDY PATHWAY
          ==================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 0.5,
              delay: 0.04,
            }}
            className="relative overflow-hidden rounded-[22px] border border-[#cfe8e7] bg-[#eaf8f7]"
          >

            <div className="grid h-full grid-cols-1 sm:grid-cols-[1.06fr_0.94fr] md:grid-cols-1 lg:grid-cols-[1.06fr_0.94fr]">

              {/* CONTENT */}
              <div className="relative z-10 p-5 sm:p-6 md:p-6 lg:pr-2">

                <h3 className="text-[23px] font-bold leading-[1.12] tracking-[-0.02em] text-[#063B72] sm:text-[25px] lg:text-[27px]">
                  Choose the Right{" "}
                  <span className="text-[#18B8B5]">
                    Study Pathway
                  </span>
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {chooseRightStudyPathway.map((item) => (
                    <CheckItem key={item}>
                      {item}
                    </CheckItem>
                  ))}
                </ul>

              </div>

              {/* IMAGE */}
              <div className="relative h-[180px] overflow-hidden sm:h-full md:h-[185px] lg:h-full lg:min-h-[260px]">

                <Image
                  src="/images/study-india/program-fit-student.webp"
                  alt="Student exploring study pathways in Europe"
                  fill
                  sizes="(max-width: 767px) 100vw, 26vw"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#eaf8f7] via-transparent to-transparent"
                />

              </div>

            </div>
          </motion.article>

          {/* ===================================================
              PLAN YOUR JOURNEY TO Europe
          ==================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
            }}
            className="relative overflow-hidden rounded-[22px] border border-[#d9e3ef] bg-[#eef3f8]"
          >

            <div className="grid h-full grid-cols-1 sm:grid-cols-[1.06fr_0.94fr] md:grid-cols-1 lg:grid-cols-[1.06fr_0.94fr]">

              {/* CONTENT */}
              <div className="relative z-10 p-5 sm:p-6 md:p-6 lg:pr-2">

                <h3 className="text-[23px] font-bold leading-[1.12] tracking-[-0.02em] text-[#063B72] sm:text-[25px] lg:text-[27px]">
                  Plan Your Journey{" "}
                  <span className="text-[#18B8B5]">
                    to Europe
                  </span>
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {planJourneyToEurope.map((item) => (
                    <CheckItem key={item} teal>
                      {item}
                    </CheckItem>
                  ))}
                </ul>

              </div>

              {/* IMAGE */}
              <div className="relative h-[180px] overflow-hidden sm:h-full md:h-[185px] lg:h-full lg:min-h-[260px]">

                <Image
                  src="/images/study-india/guidance-student.webp"
                  alt="Student receiving guidance for studying in Europe"
                  fill
                  sizes="(max-width: 767px) 100vw, 26vw"
                  className="object-cover object-top"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#eef3f8] via-transparent to-transparent"
                />

              </div>

            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}