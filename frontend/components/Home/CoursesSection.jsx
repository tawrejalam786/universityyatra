
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const courses = [
  {
    name: "Healthcare",
    href: "/courses/healthcare",
    color: "#16845B",
    hover: "#106B49",
  },
  {
    name: "Medical Sciences",
    href: "/courses/medical-sciences",
    color: "#287B83",
    hover: "#1E6269",
  },
  {
    name: "Computer Science",
    href: "/courses/computer-science",
    color: "#1765F5",
    hover: "#1047AC",
  },
  {
    name: "Information Technology",
    href: "/courses/information-technology",
    color: "#4268B2",
    hover: "#315393",
  },
  {
    name: "Engineering",
    href: "/courses/engineering",
    color: "#6854B8",
    hover: "#51409B",
  },
  {
    name: "Technology",
    href: "/courses/technology",
    color: "#4569A0",
    hover: "#345482",
  },
  {
    name: "Business",
    href: "/courses/business",
    color: "#087F8C",
    hover: "#086673",
  },
  {
    name: "Management",
    href: "/courses/management",
    color: "#8B589F",
    hover: "#714383",
  },
  {
    name: "Commerce",
    href: "/courses/commerce",
    color: "#397D65",
    hover: "#28664F",
  },
  {
    name: "Arts",
    href: "/courses/arts",
    color: "#B84F70",
    hover: "#963A59",
  },
  {
    name: "Humanities",
    href: "/courses/humanities",
    color: "#79619E",
    hover: "#614C83",
  },
  {
    name: "Law",
    href: "/courses/law",
    color: "#173B78",
    hover: "#0C2C60",
  },
  {
    name: "Social Sciences",
    href: "/courses/social-sciences",
    color: "#A05B75",
    hover: "#83445E",
  },
  {
    name: "Creative Arts",
    href: "/courses/creative-arts",
    color: "#B56639",
    hover: "#96502B",
  },
  {
    name: "Science",
    href: "/courses/science",
    color: "#537D3C",
    hover: "#41642F",
  },
  {
    name: "Mathematics",
    href: "/courses/mathematics",
    color: "#5262A5",
    hover: "#3E4D88",
  },
  {
    name: "Research",
    href: "/courses/research",
    color: "#88613E",
    hover: "#6D4C31",
  },
  {
    name: "Education",
    href: "/courses/education",
    color: "#C05258",
    hover: "#9E3E45",
  },
  {
    name: "Teaching",
    href: "/courses/teaching",
    color: "#577D91",
    hover: "#416477",
  },
];

export default function CoursesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="courses-section-title" className="relative w-full overflow-hidden bg-[#EDF5FF] py-12 sm:py-16 lg:py-10">
      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-8 max-w-[760px] text-center sm:mb-10 lg:mb-12"
        >
          <h2 id="courses-section-title" className="text-[29px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#0C337B] sm:text-[38px] md:text-[44px] lg:text-[45px]">
            Find Your Course.{" "}
            <span className="text-[#1765F5]">
              Find Your World.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[590px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[15px]">
            From bachelor's to master's programmes, explore 20+ courses across 40+ countries and discover opportunities at universities around the world. Find a programme that fits your interests, ambitions and career goals.
          </p>
        </motion.div>

        {/* 19 SOLID COLOR COURSE PILLS */}
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-4 lg:gap-x-4 lg:gap-y-5">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.35), ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.025 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="max-w-full"
              >
                <Link
                  href={course.href}
                  style={{
                    "--pill-color": course.color,
                    "--pill-hover": course.hover,
                  }}
                  className="inline-flex max-w-full items-center justify-center rounded-full border-[1.5px] border-[var(--pill-color)] bg-[var(--pill-color)] px-3.5 py-3 text-center text-[clamp(11px,3vw,14px)] font-semibold leading-[1.2] tracking-[-0.025em] text-white shadow-[0_4px_12px_rgba(12,51,123,0.08)] transition-[background-color,border-color,color,box-shadow] duration-300 hover:border-[var(--pill-hover)] hover:bg-[var(--pill-hover)] hover:shadow-[0_12px_24px_rgba(12,51,123,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1765F5] sm:px-6 sm:py-3.5 sm:text-[18px] md:px-8 md:py-4 md:text-[21px] lg:px-9 lg:py-[18px] lg:text-[23px]"
                >
                  {course.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM SUPPORTING TEXT */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 text-center text-[11px] font-medium text-[#7184A3] sm:mt-12 sm:text-[13px]"
        >
          Your interests. Your direction. Your next chapter.
        </motion.p>

      </div>
    </section>
  );
}
