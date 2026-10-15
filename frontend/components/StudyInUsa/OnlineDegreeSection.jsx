
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

/* =========================================
   USA CONTENT
========================================= */

const sections = [
  {
    id: "01",
    eyebrow: "STUDYING IN THE USA",
    title: "Your Next Academic Chapter: USA",
    mobileTitle: "Study in USA",
    description: "US universities offer flexible undergraduate pathways and specialised postgraduate degrees. From choosing a major to pursuing an MS or MBA, your options depend on your academic background and goals.",
    points: [
      { label: "Bachelor's", text: "Typically 4 years" },
      { label: "Master's", text: "Commonly 1–2 years" },
      { label: "Main intakes", text: "Fall and Spring" },
    ],
    image: "/images/study-india/online-degree-student.webp",
    color: "#2563EB",
    href: "/study-abroad/usa/academic-pathways",
  },
  {
    id: "02",
    eyebrow: "EDUCATION BUDGET",
    title: "Cost of Studying in USA",
    mobileTitle: "Cost of Studying in USA",
    description: "Tuition depends on your university, degree, and field of study. Use these annual ranges to start planning your budget before comparing specific programs.",
    points: [
      { label: "Bachelor's tuition", text: "Approximately US$19,000–40,000 per year (₹18–38 lakh)." },
      { label: "Master's tuition", text: "Approximately US$16,000–31,000 per year (₹15.2–29.5 lakh)." },
      { label: "Additional expenses", text: "Budget separately for accommodation, food, health insurance, university fees, books, and visa-related charges." },
    ],
    image: "/images/study-usa/stacking/tuition-fees.webp",
    color: "#18B8B5",
    href: "/study-abroad/usa/cost-of-studying",
  },
  {
    id: "03",
    eyebrow: "LIVING & CAMPUS LIFE",
    title: "Cost of Living in USA",
    mobileTitle: "Cost of Living & Culture in USA",
    description: "Living costs depend on where you study and how you choose to live. A useful starting budget is US$1,000–2,500 per month, excluding tuition.",
    points: [
      { label: "Housing", text: "Often your biggest expense" },
      { label: "Daily essentials", text: "Food, transport, utilities, and personal spending" },
      { label: "Campus life", text: "Student clubs, cultural events, and diverse communities" },
    ],
    note: "Your budget will look different in New York City than in a smaller college town.",
    image: "/images/study-usa/stacking/living-costs.webp",
    color: "#7C3AED",
    href: "/study-abroad/usa/cost-of-living",
  },
  {
    id: "04",
    eyebrow: "SCHOLARSHIPS & FUNDING",
    title: "Scholarships in USA for Indian Students",
    mobileTitle: "Scholarships in USA for Indian Students",
    description: "Indian students may qualify for merit-based scholarships, need-based financial aid, university awards, or graduate research funding. Opportunities depend on your degree, academic profile, financial circumstances, and eligibility.",
    points: [
      { label: "Merit-based", text: "Rewards academic achievement." },
      { label: "Need-based", text: "Assesses financial circumstances." },
      { label: "External funding", text: "Includes eligible Fulbright-Nehru and Inlaks opportunities." },
    ],
    note: "Check eligibility, coverage, and deadlines before applying.",
    image: "/images/study-usa/stacking/scholarships.webp",
    color: "#DE4D7B",
    href: "/study-abroad/usa/scholarships",
  },
  {
    id: "05",
    eyebrow: "POST-STUDY OPPORTUNITIES",
    title: "Post-Study Work Visa USA",
    mobileTitle: "Post-Study Work Visa USA",
    description: "Planning to work in the USA after graduation? Eligible F-1 students can apply for Optional Practical Training (OPT) to gain work experience related to their degree.",
    points: [
      { label: "12 months of OPT", text: "Available to eligible graduates who meet the requirements." },
      { label: "Up to 36 months", text: "Qualifying STEM graduates may apply for a 24-month extension." },
      { label: "After OPT", text: "Some graduates pursue employer-sponsored H-1B status, subject to eligibility and selection requirements." },
    ],
    note: "STEM extensions require a qualifying degree and an eligible employment arrangement. Work authorisation and long-term employment are not guaranteed.",
    image: "/images/study-usa/stacking/post-study-work.webp",
    color: "#28599F",
    href: "/study-abroad/usa/post-study-work",
  },
];

/* =========================================
   ANIMATION
========================================= */

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const animationTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

/* =========================================
   CHECK ITEM
========================================= */

function CheckItem({ label, text, color }) {
  return (
    <li className="flex items-start gap-2 text-[12px] leading-[1.45] text-[#405268] sm:text-[13px]">
      <span className="mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: color }}>
        <Check size={11} strokeWidth={2.7} />
      </span>
      <span>
        <strong className="font-semibold text-[#063B72]">{label}:</strong>{" "}
        {text}
      </span>
    </li>
  );
}

/* =========================================
   COMPACT STUDENT VISUAL
========================================= */

function StudentVisual({ src, alt, color }) {
  return (
    <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[290px] md:max-w-[300px] lg:max-w-[310px]">
      <div className="relative aspect-[1.12/1] w-full">
        <div className="absolute left-[4%] top-[5%] h-[88%] w-[88%] rotate-[-5deg] rounded-[38%_62%_58%_42%/45%_38%_62%_55%]" style={{ backgroundColor: color }} />
        <div className="absolute bottom-[2%] right-[2%] h-[34%] w-[34%] rounded-full border-[14px] opacity-20" style={{ borderColor: color }} />
        <div className="absolute left-[1%] top-[13%] h-2.5 w-2.5 rounded-full opacity-60" style={{ backgroundColor: color }} />
        <div className="absolute right-[7%] top-[7%] h-4 w-4 rounded-full opacity-30" style={{ backgroundColor: color }} />

        <div className="absolute inset-[6%] overflow-hidden rounded-[36%_64%_58%_42%/44%_38%_62%_56%]">
          <Image src={src} alt={alt} fill sizes="(max-width: 767px) 90vw, 310px" className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
}

/* =========================================
   CONTENT
========================================= */

function SectionContent({ section }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={animationTransition} className="w-full">

      <span className="mb-1 block text-[10px] font-bold tracking-[0.12em] sm:text-[11px]" style={{ color: section.color }}>
        {section.id} / {section.eyebrow}
      </span>

      <h3 className="hidden text-[25px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] md:block lg:text-[29px]">
        {section.title}
      </h3>

      <h3 className="text-[23px] font-bold leading-[1.15] tracking-[-0.025em] text-[#063B72] md:hidden">
        {section.mobileTitle}
      </h3>

      <p className="mt-2 text-[12px] leading-[1.5] text-[#43556b] sm:text-[13px]">
        {section.description}
      </p>

      <ul className="mt-2.5 space-y-1.5">
        {section.points.map((point) => (
          <CheckItem key={point.label} label={point.label} text={point.text} color={section.color} />
        ))}
      </ul>

      {section.note && (
        <p className="mt-2 text-[11px] leading-[1.5] text-[#43556b] sm:text-[12px]">
          {section.note}
        </p>
      )}

      <Link href={section.href} className="group mt-2.5 inline-flex items-center gap-2 text-[12px] font-bold transition-opacity hover:opacity-75" style={{ color: section.color }}>
        Read More
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>

      <div className="mt-2 h-[3px] w-12 rounded-full" style={{ backgroundColor: section.color }} />

    </motion.div>
  );
}

/* =========================================
   MAIN SECTION
========================================= */

export default function OnlineDegreeSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-5 sm:py-6 lg:py-7">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-5 lg:px-4">

        {/* HEADING */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="mx-auto mb-4 max-w-[760px] text-center md:mb-5">

          <span className="mb-1 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-[#18B8B5] sm:text-[11px]">
            WHAT DOES STUDYING IN THE USA MEAN?
          </span>

          <h2 className="text-[27px] font-bold leading-[1.12] tracking-[-0.035em] text-[#063B72] sm:text-[32px] md:text-[36px] lg:text-[38px]">
            Designed for <span className="text-[#18B8B5]">Your Future</span>
          </h2>

        </motion.div>

        {/* ROWS */}
        {sections.map((section, index) => {
          const imageOnLeft = index % 2 === 0;

          return (
            <div key={section.id}>

              <div className="grid items-center gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">

                {/* IMAGE LEFT */}
                {imageOnLeft && (
                  <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={animationTransition}>
                    <StudentVisual src={section.image} alt={section.title} color={section.color} />
                  </motion.div>
                )}

                {/* CONTENT */}
                <div className={imageOnLeft ? "relative" : "order-2 relative md:order-1"}>
                  <SectionContent section={section} />
                </div>

                {/* IMAGE RIGHT */}
                {!imageOnLeft && (
                  <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={animationTransition} className="order-1 md:order-2">
                    <StudentVisual src={section.image} alt={section.title} color={section.color} />
                  </motion.div>
                )}

              </div>

              {/* COMPACT DIVIDER */}
              {index !== sections.length - 1 && (
                <div className="mx-auto my-4 h-px w-full bg-[#E7EDF4] md:my-5" />
              )}

            </div>
          );
        })}

      </div>
    </section>
  );
}
