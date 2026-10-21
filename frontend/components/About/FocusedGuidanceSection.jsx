"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const guidancePoints = [
  {
    title: "Profile-First, Not Product-First",
    description: "We evaluate academic background, experience, gaps, budget, and goals before suggesting any course or country.",
    icon: "/images/about/icons/profile-3d.webp",
  },
  {
    title: "Career & Outcome Focused",
    description: "Our guidance considers long-term relevance, employability, and realistic pathways — not just admission letters.",
    icon: "/images/about/icons/career-3d.webp",
  },
  {
    title: "Transparency at Every Step",
    description: "We clearly explain eligibility, risks, timelines, and requirements so families can take informed decisions.",
    icon: "/images/about/icons/transparency-3d.webp",
  },
  {
    title: "Fraud-Aware Guidance",
    description: "We educate students about study abroad frauds and help them avoid risky shortcuts.",
    icon: "/images/about/icons/fraud-aware-3d.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function GuidanceCard({ point, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative flex h-full flex-col items-center rounded-[24px] border border-[#DFEAFB] bg-white p-6 text-center shadow-[0_8px_28px_rgba(12,51,123,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6D0FF] hover:shadow-[0_14px_36px_rgba(23,101,245,0.09)]"
    >
      {/* 3D CLAY ICON */}
      <div className="relative mb-5 flex h-[90px] items-center justify-center">
        <div className="absolute h-[85px] w-[85px] rounded-full bg-[#EDF5FF] opacity-60" />
        <div className="relative h-[85px] w-[85px] transition-transform duration-500 group-hover:scale-110">
          <Image
            src={point.icon}
            alt={`${point.title} illustration`}
            fill
            sizes="85px"
            className="object-contain"
          />
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-[16px] font-bold leading-[1.35] text-[#0C337B] sm:text-[17px]">
        {point.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-[13px] leading-[1.75] text-[#66758B] sm:text-[14px]">
        {point.description}
      </p>

      {/* DECORATIVE ACCENT */}
      <div className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#1765F5] transition-all duration-300 group-hover:w-16" />
    </motion.article>
  );
}

export default function FocusedGuidanceSection() {
  return (
    <section
      aria-labelledby="focused-guidance-title"
      className="relative w-full overflow-hidden bg-[#FAFCFF] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
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
            Focused Guidance
          </div>

          <h2
            id="focused-guidance-title"
            className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
          >
            How We{" "}
            <span className="text-[#1765F5]">Guide You</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[13px] leading-[1.8] text-[#66758B] sm:text-[15px]">
            Our approach is built on honesty, transparency, and student success — not quick wins or false promises.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {guidancePoints.map((point, index) => (
            <GuidanceCard key={point.title} point={point} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
