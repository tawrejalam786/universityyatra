
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

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

function StudentVisual({ src, alt, color, position = "object-center" }) {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="relative aspect-[1.12/1] w-full">

        {/* ORGANIC BACKGROUND SHAPE */}
        <div className="absolute left-[4%] top-[5%] h-[88%] w-[88%] rotate-[-5deg] rounded-[38%_62%_58%_42%/45%_38%_62%_55%]" style={{ backgroundColor: color }} />

        {/* DECORATIVE ELEMENTS */}
        <div className="absolute bottom-[2%] right-[2%] h-[34%] w-[34%] rounded-full border-[18px] opacity-20" style={{ borderColor: color }} />

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

export default function OnlineDegreeSection() {
  const reduceMotion = useReducedMotion();

  const imageMotionLeft = reduceMotion ? false : { opacity: 0, x: -35 };
  const imageMotionRight = reduceMotion ? false : { opacity: 0, x: 35 };
  const imageVisible = { opacity: 1, x: 0 };

  const contentInitial = reduceMotion ? false : "hidden";

  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-6">

        {/* ================= HEADING ================= */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="mx-auto mb-8 max-w-[760px] text-center md:mb-10 lg:mb-12">

          <span className="mb-2 inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-[#18B8B5] sm:text-[13px]">
            Study in India
          </span>

          <h2 className="text-[29px] font-bold leading-[1.12] tracking-[-0.035em] text-[#063B72] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            What Is an Online Regular{" "}
            <span className="text-[#18B8B5]">Degree Program?</span>
          </h2>

        </motion.div>

        {/* ================= ROW 01 ================= */}
        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">

          {/* IMAGE LEFT */}
          <motion.div initial={imageMotionLeft} whileInView={imageVisible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <StudentVisual src="/images/study-india/online-degree-student.webp" alt="Student learning through an online degree program" color="#2563EB" position="object-center" />
          </motion.div>

          {/* CONTENT RIGHT */}
          <motion.div variants={reveal} initial={contentInitial} whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="relative">

            <span className="mb-2 block text-[12px] font-bold tracking-[0.16em] text-[#2563EB]">
              01
            </span>

            <h3 className="max-w-[520px] text-[25px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] sm:text-[29px] lg:text-[34px]">
              Making Your Next Move{" "}
              <span className="text-[#2563EB]">Count.</span>
            </h3>

            {/* DESKTOP CONTENT */}
            <div className="mt-3 hidden max-w-[570px] space-y-3 text-[14px] leading-[1.65] text-[#43556b] md:block lg:text-[15px]">

              <p>
                An online regular degree program lets you earn a university degree through a{" "}
                <strong className="font-semibold text-[#063B72]">structured online learning format</strong>, without attending campus every day.
              </p>

              <p>
                You follow a defined curriculum with{" "}
                <strong className="font-semibold text-[#063B72]">online classes, study material, assignments, assessments, and examinations</strong>, just like a regular academic program—delivered digitally.
              </p>

              <p>
                It gives you the flexibility to pursue your{" "}
                <strong className="font-semibold text-[#063B72]">degree and specialization</strong>{" "}
                while managing work, other studies, or personal commitments.
              </p>

            </div>

            {/* MOBILE CONTENT */}
            <div className="mt-3 space-y-3 text-[14px] leading-[1.55] text-[#43556b] md:hidden">

              <p>
                An online regular degree lets you earn a university degree through{" "}
                <strong className="font-semibold text-[#063B72]">online classes, study material, assignments, and examinations</strong>—without attending campus every day.
              </p>

              <p>
                It offers the flexibility to pursue your{" "}
                <strong className="font-semibold text-[#063B72]">degree and specialization</strong>{" "}
                while managing your other commitments.
              </p>

            </div>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#2563EB]" />

          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-8 h-px w-full max-w-[1050px] bg-[#E7EDF4] md:my-10 lg:my-12" />

        {/* ================= ROW 02 ================= */}
        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">

          {/* CONTENT LEFT */}
          <motion.div variants={reveal} initial={contentInitial} whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="relative order-2 md:order-1">

            <span className="mb-2 block text-[12px] font-bold tracking-[0.16em] text-[#18B8B5]">
              02
            </span>

            <h3 className="max-w-[500px] text-[25px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] sm:text-[29px] lg:text-[34px]">
              A Program That{" "}
              <span className="text-[#18B8B5]">Fits You</span>
            </h3>

            <ul className="mt-4 max-w-[520px] space-y-2">
              {programFitsYou.map((item) => (
                <CheckItem key={item} color="#18B8B5">
                  {item}
                </CheckItem>
              ))}
            </ul>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#18B8B5]" />

          </motion.div>

          {/* IMAGE RIGHT */}
          <motion.div initial={imageMotionRight} whileInView={imageVisible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="order-1 md:order-2">

            <StudentVisual src="/images/study-india/program-fit-student.webp" alt="Student comparing online degree programs and specializations" color="#28599F" position="object-center" />

          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-8 h-px w-full max-w-[1050px] bg-[#E7EDF4] md:my-10 lg:my-12" />

        {/* ================= ROW 03 ================= */}
        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">

          {/* IMAGE LEFT */}
          <motion.div initial={imageMotionLeft} whileInView={imageVisible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>

            <StudentVisual src="/images/study-india/guidance-student.webp" alt="Student receiving guidance for online university admission" color="#7C3AED" position="object-top" />

          </motion.div>

          {/* CONTENT RIGHT */}
          <motion.div variants={reveal} initial={contentInitial} whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="relative">

            <span className="mb-2 block text-[12px] font-bold tracking-[0.16em] text-[#7C3AED]">
              03
            </span>

            <h3 className="max-w-[500px] text-[25px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] sm:text-[29px] lg:text-[34px]">
              Guidance Beyond{" "}
              <span className="text-[#7C3AED]">Admission</span>
            </h3>

            <ul className="mt-4 max-w-[520px] space-y-2">
              {guidanceBeyondAdmission.map((item) => (
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
