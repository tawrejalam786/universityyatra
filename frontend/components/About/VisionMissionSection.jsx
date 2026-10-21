
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/* ======================================
   UNIVERSITY YATRA - BRAND COLORS
====================================== */

const BRAND = {
  blue: "#1765F5",
  navy: "#0C337B",
  light: "#EDF5FF",
};

/* ======================================
   VISION & MISSION CONTENT
====================================== */

const cards = [
  {
    title: "Our Vision",
    description:
      "To make education guidance trustworthy, accessible and focused on student success.",
    mainIcon: "/images/about/icons/vision-3d.webp",
    features: [
      {
        title: "Trustworthy Education",
        description: "Reliable guidance for confident education decisions.",
        icon: "/images/about/icons/shield-3d.webp",
      },
      {
        title: "Global Success",
        description: "Helping students move towards global opportunities.",
        icon: "/images/about/icons/globe-3d.webp",
      },
    ],
  },
  {
    title: "Our Mission",
    description:
      "To support students with transparent guidance and flexible education choices.",
    mainIcon: "/images/about/icons/mission-3d.webp",
    features: [
      {
        title: "Transparent Guidance",
        description: "Clear information at every step of the journey.",
        icon: "/images/about/icons/guidance-3d.webp",
      },
      {
        title: "Flexible Learning",
        description: "Education options that fit different student goals.",
        icon: "/images/about/icons/book-3d.webp",
      },
    ],
  },
];

/* ======================================
   ANIMATION SETTINGS
====================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/* ======================================
   FEATURE ROW
====================================== */

function FeatureRow({ feature }) {
  return (
    <div className="group flex min-w-0 items-center gap-3 rounded-[16px] bg-[#F0F6FF] px-3 py-3 transition-all duration-300 hover:bg-[#E7F0FF]">
      <div className="relative h-[48px] w-[48px] shrink-0">
        <Image
          src={feature.icon}
          alt={feature.title}
          fill
          sizes="48px"
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="min-w-0">
        <h4 className="text-[13px] font-bold leading-snug text-[#0C337B] sm:text-[14px]">
          {feature.title}
        </h4>

        <p className="mt-1 text-[11px] leading-[1.6] text-[#66758B] sm:text-[12px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

/* ======================================
   VISION / MISSION CARD
====================================== */

function VisionMissionCard({ card, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      className="group flex h-full min-w-0 flex-col rounded-[24px] border border-[#DFEAFB] bg-white p-5 shadow-[0_10px_35px_rgba(12,51,123,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6D0FF] hover:shadow-[0_16px_40px_rgba(23,101,245,0.1)] sm:p-6"
    >
      {/* MAIN 3D CLAY ICON */}
      <div className="relative mb-4 flex h-[105px] items-center justify-center">
        <div className="absolute h-[100px] w-[100px] rounded-full bg-[#EDF5FF]" />

        <div className="relative h-[100px] w-[100px] transition-transform duration-500 group-hover:scale-105">
          <Image
            src={card.mainIcon}
            alt={`${card.title} 3D clay illustration`}
            fill
            sizes="100px"
            className="object-contain"
          />
        </div>
      </div>

      {/* CARD TITLE */}
      <h3 className="text-[23px] font-extrabold tracking-[-0.035em] text-[#0C337B] sm:text-[25px]">
        Our{" "}
        <span className="text-[#1765F5]">
          {card.title.replace("Our ", "")}
        </span>
      </h3>

      <div className="mt-2 h-[3px] w-10 rounded-full bg-[#1765F5]" />

      {/* DESCRIPTION */}
      <p className="mt-4 min-h-[72px] text-[13px] leading-[1.8] text-[#64758F] sm:text-[14px]">
        {card.description}
      </p>

      {/* FEATURE ROWS */}
      <div className="mt-auto space-y-3 pt-5">
        {card.features.map((feature) => (
          <FeatureRow key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.article>
  );
}

/* ======================================
   MAIN SECTION
====================================== */

export default function VisionMissionSection({
  imageSrc = "/images/about/vision-mission-students.webp",
}) {
  return (
    <section
      aria-labelledby="vision-mission-title"
      className="relative w-full overflow-hidden bg-[#F5F9FF] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#1765F5]" />
            What Drives Us
          </div>

          <h2
            id="vision-mission-title"
            className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
          >
            Our Vision{" "}
            <span className="text-[#1765F5]">&</span>{" "}
            Mission
          </h2>

          <p className="mx-auto mt-3 max-w-[580px] text-[13px] leading-[1.8] text-[#66758B] sm:text-[15px]">
            Helping students make informed education decisions with
            clarity, confidence and the right guidance.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">

          

          {/* RIGHT VISION & MISSION CARDS */}
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {cards.map((card, index) => (
              <VisionMissionCard
                key={card.title}
                card={card}
                index={index}
              />
            ))}
          </div>

          {/* LEFT STUDENT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative min-h-[360px] overflow-hidden rounded-[26px] border border-[#DFEAFB] bg-[#EDF5FF] sm:min-h-[460px] lg:min-h-[540px]"
          >
            <Image
              src={imageSrc}
              alt="University students working together on a laptop"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-contain object-center"
            />

            {/* TOP FLOATING BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute left-4 top-5 flex items-center gap-2.5 rounded-[16px] border border-white/80 bg-white/95 px-3 py-3 shadow-[0_10px_25px_rgba(12,51,123,0.13)] backdrop-blur-sm sm:left-6 sm:top-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#1765F5]">
                <GraduationCap size={23} />
              </div>

              <div className="text-[11px] font-bold leading-[1.45] text-[#0C337B] sm:text-[12px]">
                Learn 
                <br />
                Explore
                <br />
                Grow
              </div>
            </motion.div>

            {/* BOTTOM FLOATING BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="absolute bottom-5 right-4 flex items-center gap-3 rounded-[16px] border border-white/80 bg-white/95 px-4 py-3 shadow-[0_10px_25px_rgba(12,51,123,0.14)] backdrop-blur-sm sm:bottom-7 sm:right-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#1765F5]">
                <BookOpen size={23} />
              </div>

              <div className="text-[12px] font-bold leading-[1.45] text-[#0C337B]">
                Building
                <br />
                Brighter Futures
              </div>

              {/* <Sparkles size={16} className="self-start text-[#1765F5]" /> */}
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
