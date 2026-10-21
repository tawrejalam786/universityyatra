"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "Students Planning Study Abroad",
    description: "High school and undergraduate students exploring international education opportunities.",
    icon: "/images/about/icons/student-3d.webp",
  },
  {
    title: "Parents Seeking Honest Guidance",
    description: "Families looking for transparent, fraud-free education counselling and support.",
    icon: "/images/about/icons/parents-3d.webp",
  },
  {
    title: "Working Professionals",
    description: "Professionals returning to education for career advancement and skill development.",
    icon: "/images/about/icons/professional-3d.webp",
  },
  {
    title: "Students with Study Gaps",
    description: "Applicants with career changes or academic gaps seeking honest pathway guidance.",
    icon: "/images/about/icons/gap-student-3d.webp",
  },
  {
    title: "Confused by Conflicting Advice",
    description: "Students overwhelmed by misinformation and looking for clear, reliable direction.",
    icon: "/images/about/icons/confused-3d.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function AudienceCard({ audience, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group flex items-start gap-4 rounded-[20px] border border-[#DFEAFB] bg-white p-5 shadow-[0_6px_24px_rgba(12,51,123,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6D0FF] hover:shadow-[0_10px_30px_rgba(23,101,245,0.08)] sm:p-6"
    >
      {/* 3D CLAY ICON */}
      <div className="relative h-[70px] w-[70px] shrink-0">
        <div className="absolute inset-0 rounded-2xl bg-[#EDF5FF] opacity-60" />
        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
          <Image
            src={audience.icon}
            alt={`${audience.title} illustration`}
            fill
            sizes="70px"
            className="object-contain p-2"
          />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="min-w-0 flex-1 pt-1">
        <h3 className="text-[15px] font-bold leading-[1.35] text-[#0C337B] sm:text-[16px]">
          {audience.title}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.7] text-[#66758B] sm:text-[14px]">
          {audience.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function WhoWeWorkWithSection() {
  return (
    <section
      aria-labelledby="who-we-work-with-title"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
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
            Who We Work With
          </div>

          <h2
            id="who-we-work-with-title"
            className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
          >
            We're Here For{" "}
            <span className="text-[#1765F5]">Every Student</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-[1.8] text-[#66758B] sm:text-[15px]">
            From traditional students to professionals and those with unique circumstances — we provide honest guidance tailored to your profile.
          </p>
        </motion.div>

        {/* AUDIENCE CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.slice(0, 3).map((audience, index) => (
            <AudienceCard key={audience.title} audience={audience} index={index} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:px-[16.666%]">
          {audiences.slice(3).map((audience, index) => (
            <AudienceCard key={audience.title} audience={audience} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
