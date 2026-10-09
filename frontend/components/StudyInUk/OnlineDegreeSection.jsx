
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/* =========================================
   DESKTOP CONTENT
========================================= */

const chooseYourStudyPathwayDesktop = [
  "Undergraduate, postgraduate & professional programs",
  "University & course selection based on your profile",
  "Specialized programs aligned with your career goals",
  "Guidance on eligibility & admission requirements",
];

const planJourneyToUKDesktop = [
  "University application & documentation support",
  "SOP & LOR guidance",
  "Student visa guidance",
  "Pre-departure support",
];

/* =========================================
   MOBILE CONTENT
========================================= */

const chooseYourStudyPathwayMobile = [
  "Undergraduate & postgraduate programs",
  "University & course shortlisting",
  "Career-focused specializations",
  "Eligibility & admission guidance",
];

const planJourneyToUKMobile = [
  "Application & documentation support",
  "SOP & LOR guidance",
  "Student visa guidance",
  "Pre-departure support",
];

/* =========================================
   ANIMATION
========================================= */

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

/* =========================================
   CHECK ITEM
========================================= */

function CheckItem({ children, color = "#063B72" }) {
  return (
    <li className="flex items-start gap-3 text-[13px] leading-[1.5] text-[#405268] sm:text-[14px]">
      <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: color }}>
        <Check size={12} strokeWidth={2.7} />
      </span>

      <span>{children}</span>
    </li>
  );
}

/* =========================================
   STUDENT VISUAL - ORIGINAL DESIGN
========================================= */

function StudentVisual({ src, alt, color, position = "object-center" }) {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="relative aspect-[1.12/1] w-full">

        {/* ORGANIC BACKGROUND */}
        <div className="absolute left-[4%] top-[5%] h-[88%] w-[88%] rotate-[-5deg] rounded-[38%_62%_58%_42%/45%_38%_62%_55%]" style={{ backgroundColor: color }} />

        {/* DECORATIVE CIRCLE */}
        <div className="absolute bottom-[2%] right-[2%] h-[34%] w-[34%] rounded-full border-[18px] opacity-20" style={{ borderColor: color }} />

        {/* DOTS */}
        <div className="absolute left-[1%] top-[13%] h-3 w-3 rounded-full opacity-60" style={{ backgroundColor: color }} />
        <div className="absolute right-[7%] top-[7%] h-5 w-5 rounded-full opacity-30" style={{ backgroundColor: color }} />

        {/* STUDENT IMAGE */}
        <div className="absolute inset-[6%] overflow-hidden rounded-[36%_64%_58%_42%/44%_38%_62%_56%]">
          <Image src={src} alt={alt} fill sizes="(max-width: 767px) 92vw, 430px" className={`object-cover ${position}`} />
        </div>

      </div>
    </div>
  );
}

/* =========================================
   MAIN UK SECTION
========================================= */

export default function OnlineDegreeSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-6">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="mx-auto mb-8 max-w-[760px] text-center md:mb-10 lg:mb-12">

          <span className="mb-2 inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-[#18B8B5] sm:text-[13px]">
            WHAT DOES STUDYING IN THE UK MEAN?
          </span>

          <h2 className="text-[29px] font-bold leading-[1.12] tracking-[-0.035em] text-[#063B72] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Designed for <span className="text-[#18B8B5]">Your Future</span>
          </h2>

        </motion.div>

        {/* =====================================
            ROW 01 - IMAGE LEFT, CONTENT RIGHT
        ===================================== */}

        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">

          {/* STUDENT IMAGE */}
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <StudentVisual src="/images/study-india/online-degree-student.webp" alt="Student exploring academic opportunities in the UK" color="#2563EB" position="object-center" />
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="relative">

            <span className="mb-2 block text-[12px] font-bold tracking-[0.16em] text-[#2563EB]">
              01
            </span>

            <h3 className="max-w-[520px] text-[25px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] sm:text-[29px] lg:text-[34px]">
              Your Next Academic Chapter: <span className="text-[#2563EB]">UK</span>
            </h3>

            {/* DESKTOP DESCRIPTION */}
            <div className="mt-3 hidden max-w-[570px] text-[14px] leading-[1.65] text-[#43556b] md:block lg:text-[15px]">
              <p>
                The UK offers a focused approach to higher education, with a wide range of universities, specialized programs, and internationally oriented learning environments. With many postgraduate programs designed around shorter study durations, students can choose pathways that fit both their academic interests and long-term plans.
              </p>
            </div>

            {/* MOBILE DESCRIPTION */}
            <div className="mt-3 max-w-[570px] text-[14px] leading-[1.65] text-[#43556b] md:hidden">
              <p>
                Explore focused degree options, specialized courses, and internationally oriented universities across the UK, with guidance to help you find the right fit.
              </p>
            </div>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#2563EB]" />

          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-8 h-px w-full max-w-[1050px] bg-[#E7EDF4] md:my-10 lg:my-12" />

        {/* =====================================
            ROW 02 - CONTENT LEFT, IMAGE RIGHT
        ===================================== */}

        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">

          {/* CONTENT */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="order-2 relative md:order-1">

            <span className="mb-2 block text-[12px] font-bold tracking-[0.16em] text-[#18B8B5]">
              02
            </span>

            <h3 className="max-w-[500px] text-[25px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] sm:text-[29px] lg:text-[34px]">
              Choose Your <span className="text-[#18B8B5]">Study Pathway</span>
            </h3>

            {/* DESKTOP LIST */}
            <ul className="mt-4 hidden max-w-[520px] space-y-2 md:block">
              {chooseYourStudyPathwayDesktop.map((item) => (
                <CheckItem key={item} color="#18B8B5">
                  {item}
                </CheckItem>
              ))}
            </ul>

            {/* MOBILE LIST */}
            <ul className="mt-4 max-w-[520px] space-y-2 md:hidden">
              {chooseYourStudyPathwayMobile.map((item) => (
                <CheckItem key={item} color="#18B8B5">
                  {item}
                </CheckItem>
              ))}
            </ul>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#18B8B5]" />

          </motion.div>

          {/* STUDENT IMAGE */}
          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="order-1 md:order-2">
            <StudentVisual src="/images/study-india/program-fit-student.webp" alt="Student exploring university and study pathway options in the UK" color="#28599f" position="object-center" />
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-8 h-px w-full max-w-[1050px] bg-[#E7EDF4] md:my-10 lg:my-12" />

        {/* =====================================
            ROW 03 - IMAGE LEFT, CONTENT RIGHT
        ===================================== */}

        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">

          {/* STUDENT IMAGE */}
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <StudentVisual src="/images/study-india/guidance-student.webp" alt="Student receiving guidance for studying in the UK" color="#7C3AED" position="object-top" />
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="relative">

            <span className="mb-2 block text-[12px] font-bold tracking-[0.16em] text-[#7C3AED]">
              03
            </span>

            <h3 className="max-w-[500px] text-[25px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] sm:text-[29px] lg:text-[34px]">
              Plan Your Journey <span className="text-[#7C3AED]">to the UK</span>
            </h3>

            {/* DESKTOP LIST */}
            <ul className="mt-4 hidden max-w-[520px] space-y-2 md:block">
              {planJourneyToUKDesktop.map((item) => (
                <CheckItem key={item} color="#7C3AED">
                  {item}
                </CheckItem>
              ))}
            </ul>

            {/* MOBILE LIST */}
            <ul className="mt-4 max-w-[520px] space-y-2 md:hidden">
              {planJourneyToUKMobile.map((item) => (
                <CheckItem key={item} color="#7C3AED">
                  {item}
                </CheckItem>
              ))}
            </ul>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#7C3AED]" />

          </motion.div>

        </div>

      </div>
    </section>
  );
}
