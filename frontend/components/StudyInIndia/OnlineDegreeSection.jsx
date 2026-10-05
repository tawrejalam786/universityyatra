"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const programFitsYou = [
  "Compare 30+ universities and 5+ specializations",
  "Explore UGC-recognized online degree programs",
  "Choose from flexible online formats",
  "Shortlist programs based on your goals and profile",
];

const guidanceBeyondAdmission = [
  "Understand eligibility, fees & program structure",
  "Get support with applications and documentation",
  "Guidance on career-relevant specializations",
  "Make an informed decision with expert guidance",
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
            What Is an Online Regular{" "}
            <span className="text-[#18B8B5]">Degree Program?</span>
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
            {/* decorative shape */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-44 w-44 rounded-full bg-[#18B8B5]/10"
            />

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
              {/* LEFT CONTENT */}
              <div className="relative z-10 px-5 py-6 sm:px-6 md:px-8 md:py-7 lg:px-9 lg:py-8">
                <h3 className="text-[25px] font-bold leading-[1.12] tracking-[-0.025em] text-[#063B72] sm:text-[28px] md:text-[31px] lg:text-[34px]">
                  Making Your Next Move{" "}
                  <span className="text-[#18B8B5]">Count.</span>
                </h3>

                {/* =============================================
                    DESKTOP CONTENT
                ============================================== */}

                <div
                  className=" mt-4 hidden max-w-[690px] space-y-3 text-[14px] leading-[1.6] text-[#43556b] md:block lg:text-[15px]">
                  <p>
                    An online regular degree program lets you earn a university
                    degree through a{" "}
                    <strong className="font-semibold text-[#063B72]">
                      structured online learning format
                    </strong>
                    , without attending campus every day.
                  </p>

                  <p>
                    You follow a defined curriculum with{" "}
                    <strong className="font-semibold text-[#063B72]">
                      online classes, study material, assignments, assessments,
                      and examinations
                    </strong>
                    , just like a regular academic program—delivered digitally.
                  </p>

                  <p>
                    It gives you the flexibility to pursue your{" "}
                    <strong className="font-semibold text-[#063B72]">
                      degree and specialization
                    </strong>{" "}
                    while managing work, other studies, or personal commitments.
                  </p>
                </div>

                {/* =============================================
                    MOBILE CONTENT
                ============================================== */}

                <div
                  className="mt-4 space-y-3 text-[14px] leading-[1.55] text-[#43556b] md:hidden">
                  <p>
                    An online regular degree lets you earn a university degree
                    through{" "}
                    <strong className="font-semibold text-[#063B72]">
                      online classes, study material, assignments, and
                      examinations
                    </strong>
                    —without attending campus every day.
                  </p>

                  <p>
                    It offers the flexibility to pursue your{" "}
                    <strong className="font-semibold text-[#063B72]">
                      degree and specialization
                    </strong>{" "}
                    while managing your other commitments.
                  </p>
                </div>
              </div>

              {/* =============================================
                  TOP STUDENT IMAGE
              ============================================== */}

              <div
                className="relative h-[205px] w-full overflow-hidden sm:h-[225px] md:h-auto md:min-h-[285px]">
                <Image
                  src="/images/study-india/online-degree-student.webp"
                  alt="Student learning online with a laptop"
                  fill
                  sizes="(max-width: 767px) 100vw, 38vw"
                  className="object-cover object-center md:object-right "/>

                {/* image blending */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden bg-gradient-to-r from-[#edf8f7] via-[#edf8f7]/15 to-transparent md:block" />
              </div>
            </div>
          </motion.article>

          {/* ===================================================
              A PROGRAM THAT FITS YOU
          ==================================================== */}

   <motion.article
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.18 }}
  transition={{ duration: 0.5, delay: 0.04 }}
  className="relative overflow-hidden rounded-[22px] border border-[#cfe8e7] bg-[#eaf8f7]"
>
            <div
              className="grid h-full grid-cols-1 sm:grid-cols-[1.06fr_0.94fr] md:grid-cols-1 lg:grid-cols-[1.06fr_0.94fr]">
              {/* CONTENT */}
              <div
                className="relative z-10 p-5 sm:p-6 md:p-6 lg:pr-2">
                <h3
                  className="text-[23px] font-bold leading-[1.12] tracking-[-0.02em] text-[#063B72] sm:text-[25px] lg:text-[27px]">
                  A Program That{" "}
                  <span className="text-[#18B8B5]">Fits You</span>
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {programFitsYou.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div
                className="relative h-[180px] overflow-hidden sm:h-full md:h-[185px] lg:h-full lg:min-h-[260px] ">
                <Image
                  src="/images/study-india/program-fit-student.webp"
                  alt="Student comparing online degree programs"
                  fill
                  sizes="(max-width: 767px) 100vw, 26vw"
                  className="object-cover object-center "/>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#eaf8f7] via-transparent to-transparent "/>
              </div>
            </div>
          </motion.article>

          {/* ===================================================
              GUIDANCE BEYOND ADMISSION
          ==================================================== */}

 <motion.article
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.18 }}
  transition={{ duration: 0.5, delay: 0.08 }}
  className="relative overflow-hidden rounded-[22px] border border-[#d9e3ef] bg-[#eef3f8]"
>
            <div
              className="grid h-full grid-cols-1 sm:grid-cols-[1.06fr_0.94fr]  md:grid-cols-1 lg:grid-cols-[1.06fr_0.94fr]" >
              {/* CONTENT */}
              <div className="relative z-10 p-5 sm:p-6 md:p-6 lg:pr-2">
                <h3 className="text-[23px] font-bold leading-[1.12] tracking-[-0.02em] text-[#063B72] sm:text-[25px] lg:text-[27px]">
                  Guidance Beyond{" "}
                  <span className="text-[#18B8B5]">Admission</span>
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {guidanceBeyondAdmission.map((item) => (
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
                  alt="Student receiving guidance for university admission"
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
