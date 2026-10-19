
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    name: "Medical & Health",
    href: "/courses/medical-health",
    style: "solid",
  },
  {
    name: "IT & Computer Science",
    href: "/courses/it-computer-science",
    style: "outline",
  },
  {
    name: "Engineering",
    href: "/courses/engineering",
    style: "soft",
  },
  {
    name: "Business & Commerce",
    href: "/courses/business-commerce",
    style: "outline",
  },
  {
    name: "Arts, Law & Humanities",
    href: "/courses/arts-law-humanities",
    style: "dark",
  },
  {
    name: "Science & Research",
    href: "/courses/science-research",
    style: "soft",
  },
  {
    name: "Education",
    href: "/courses/education",
    style: "outline",
  },
  {
    name: "Hospitality & Tourism",
    href: "/courses/hospitality-tourism",
    style: "solid",
  },
];

const pillStyles = {
  solid: "border-[#1765F5] bg-[#1765F5] text-white hover:border-[#1047AC] hover:bg-[#1047AC]",
  outline: "border-[#A2C1FB] bg-white text-[#0C337B] hover:border-[#1765F5] hover:bg-[#E8F0FE]",
  soft: "border-[#D3E2FF] bg-[#E8F0FE] text-[#1047AC] hover:border-[#A2C1FB] hover:bg-[#D5E5FF]",
  dark: "border-[#0C337B] bg-[#0C337B] text-white hover:border-[#1765F5] hover:bg-[#1765F5]",
};

export default function CoursesSection() {
  return (
    <section aria-labelledby="courses-section-title" className="relative w-full overflow-hidden bg-[#F8FAFF] py-12 sm:py-16 lg:py-20">

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: "easeOut" }} className="mx-auto mb-8 max-w-[760px] text-center sm:mb-10 lg:mb-12">

          <h2 id="courses-section-title" className="text-[29px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#0C337B] sm:text-[38px] md:text-[44px] lg:text-[50px]">
            Find Your Course.{" "}
            <span className="text-[#1765F5]">
             Find Your World.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[590px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[15px]">
            From bachelor's to master's programmes, explore 20+ courses across 40+ countries and discover opportunities at universities around the world. Find a programme that fits your interests, ambitions and career goals.
          </p>
        </motion.div>

        {/* ORGANIC PILL LAYOUT */}
        <div className="mx-auto max-w-[1120px]">

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-4 lg:gap-x-4 lg:gap-y-5">

            {courses.map((course, index) => (
              <motion.div key={course.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.055, ease: "easeOut" }} whileHover={{ y: -3 }} className="max-w-full">

                <Link href={course.href} className={`inline-flex max-w-full items-center justify-center rounded-full border-[1.5px] px-3.5 py-3 text-center text-[clamp(11px,3vw,14px)] font-semibold leading-[1.2] tracking-[-0.025em] shadow-[0_3px_10px_rgba(12,51,123,0.025)] transition-[background-color,border-color,color,box-shadow] duration-300 hover:shadow-[0_8px_20px_rgba(23,101,245,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1765F5] sm:px-6 sm:py-3.5 sm:text-[18px] md:px-8 md:py-4 md:text-[21px] lg:px-9 lg:py-[18px] lg:text-[23px] ${pillStyles[course.style]}`}>
                  {course.name}
                </Link>

              </motion.div>
            ))}

          </div>
        </div>

        {/* BOTTOM SUPPORTING TEXT */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-9 text-center text-[11px] font-medium text-[#7184A3] sm:mt-12 sm:text-[13px]">
          Your interests. Your direction. Your next chapter.
        </motion.p>

      </div>
    </section>
  );
}
