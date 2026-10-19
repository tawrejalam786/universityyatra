"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* =====================================================================
   6 STUDY ABROAD CARDS (EXACT BRAND COLORS FROM PALETTE CHART)
   - Academic Pathways: Blue (#1047AC -> #0C337B)
   - Cost of Studying: Green (#0F7234 -> #0B5225)
   - Living & Culture: Amber/Yellow (#AC6F08 -> #7B4F06)
   - Scholarships & Aid: Purple (#662D82 -> #49205D)
   - Post-Study Visa: Teal (#0B534D -> #083B37)
   - Jobs in USA: Deep Tech Blue (#1765F5 -> #0C337B)
===================================================================== */
export const GUIDES_3D_DATA = [
  {
    id: "academic-pathways",
    slug: "academic-pathways",
    tag: "ACADEMICS",
    title: "Academic Pathways",
    description:
      "Flexible 4-year US Bachelor's degrees, specialized 1–2 year STEM Master's (MS & MBA), doctoral fellowships, and intake cycles.",
    image: "/images/study-usa/3d/academic.png",
    bgGradient: "from-[#1047AC] to-[#0C337B]",
    tagColor: "text-[#A2C1FB]",
    accentSquiggle: "text-[#5D93F8]/50",
    glassBg: "bg-[#0C337B]/80 border-[#A2C1FB]/20",
    hoverButtonBg: "group-hover:bg-[#1765F5]",
  },
  {
    id: "cost-of-studying",
    slug: "cost-of-studying",
    tag: "FINANCE & BUDGET",
    title: "Cost of Studying",
    description:
      "Comprehensive tuition fee breakdown across public vs private US universities, mandatory campus fees, and budgeting strategies.",
    image: "/images/study-usa/3d/cost.png",
    bgGradient: "from-[#0F7234] to-[#0B5225]",
    tagColor: "text-[#A2DAB7]",
    accentSquiggle: "text-[#5CBF80]/50",
    glassBg: "bg-[#0B5225]/80 border-[#A2DAB7]/20",
    hoverButtonBg: "group-hover:bg-[#16A34A]",
  },
  {
    id: "living-and-culture",
    slug: "living-and-culture",
    tag: "STUDENT LIFE",
    title: "Living & Culture",
    description:
      "Student housing, dorms vs off-campus apartments, dining plans, local culture, public transit, and 24/7 campus safety guidance.",
    image: "/images/study-usa/3d/living.png",
    bgGradient: "from-[#AC6F08] to-[#7B4F06]",
    tagColor: "text-[#FBD89D]",
    accentSquiggle: "text-[#F8BB54]/50",
    glassBg: "bg-[#7B4F06]/80 border-[#FBD89D]/20",
    hoverButtonBg: "group-hover:bg-[#F59E0B]",
  },
  {
    id: "scholarships-and-aid",
    slug: "scholarships-and-aid",
    tag: "SCHOLARSHIPS & AID",
    title: "Scholarships & Aid",
    description:
      "Unlock merit-based grants, institutional need-based financial aid, fellowships, and Graduate Assistantships (TA/RA).",
    image: "/images/study-usa/3d/scholarships.png",
    bgGradient: "from-[#662D82] to-[#49205D]",
    tagColor: "text-[#D3B3E3]",
    accentSquiggle: "text-[#B279CF]/50",
    glassBg: "bg-[#49205D]/80 border-[#D3B3E3]/20",
    hoverButtonBg: "group-hover:bg-[#9140BA]",
  },
  {
    id: "post-study-visa",
    slug: "post-study-visa",
    tag: "VISA & WORK PERMITS",
    title: "Post-Study Visa",
    description:
      "Navigate legal employment in the US — from the 12-month F-1 OPT to the 24-month STEM OPT extension and corporate H-1B paths.",
    image: "/images/study-usa/3d/visa.png",
    bgGradient: "from-[#0B534D] to-[#083B37]",
    tagColor: "text-[#9FC8C5]",
    accentSquiggle: "text-[#579F9A]/50",
    glassBg: "bg-[#083B37]/80 border-[#9FC8C5]/20",
    hoverButtonBg: "group-hover:bg-[#0F766E]",
  },
  {
    id: "jobs-in-usa",
    slug: "jobs-in-usa",
    tag: "CAREERS & PLACEMENT",
    title: "Jobs in USA",
    description:
      "Explore high-demand tech & business job markets, paid CPT corporate summer internships, career fairs, and graduate salary packages.",
    image: "/images/study-usa/3d/jobs.png",
    bgGradient: "from-[#1765F5] to-[#0C337B]",
    tagColor: "text-[#E8F0FE]",
    accentSquiggle: "text-[#5D93F8]/50",
    glassBg: "bg-[#0C337B]/85 border-[#5D93F8]/25",
    hoverButtonBg: "group-hover:bg-[#1047AC]",
  },
];

export default function InteractiveBookGuides({ onSelectGuide }) {
  const handleRedirect = (item) => {
    if (onSelectGuide) {
      onSelectGuide(item);
    } else {
      window.location.href = `/study-in-usa/${item.slug}`;
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[1360px] px-2 sm:px-4 py-2">
      {/* 3x2 Grid: Compact & Balanced to fit in 1 desktop viewport */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 justify-items-center">
        {GUIDES_3D_DATA.map((item, idx) => {
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleRedirect(item)}
              className={`
                group relative
                w-full max-w-[390px]
                h-[295px] sm:h-[305px] md:h-[310px]
                rounded-[22px]
                overflow-hidden
                flex flex-col justify-between
                bg-gradient-to-b ${item.bgGradient}
                p-3 sm:p-3.5
                shadow-[0_12px_28px_-8px_rgba(0,0,0,0.32)]
                hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.42)]
                hover:-translate-y-1.5
                transition-all duration-300 ease-out
                cursor-pointer select-none
                border border-white/10
              `}
            >
              {/* TOP HEADER: Category Tag + Arrow Icon */}
              <div className="relative z-20 flex items-center justify-between px-1.5 pt-0.5">
                <span
                  className={`text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.16em] ${item.tagColor}`}
                >
                  {item.tag}
                </span>

                <span
                  className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 ${item.hoverButtonBg} group-hover:rotate-45`}
                >
                  <ArrowUpRight size={14} strokeWidth={2.4} />
                </span>
              </div>

              {/* CENTER 3D CLAY ILLUSTRATION (Seamlessly blended, zero square box edges) */}
              <div
                className="
                  relative z-10 mx-auto my-auto
                  h-[110px] sm:h-[120px] md:h-[125px]
                  w-full max-w-[200px]
                  overflow-hidden
                  [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]
                  [-webkit-mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-108"
                />
              </div>

              {/* BOTTOM FLOATING FROSTED GLASS CARD */}
              <div
                className={`
                  relative z-20
                  w-full
                  rounded-[16px]
                  backdrop-blur-md
                  p-3 sm:p-3.5
                  shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  ${item.glassBg}
                `}
              >
                {/* Title */}
                <h3 className="text-[16px] sm:text-[17px] font-extrabold text-white tracking-tight leading-tight">
                  {item.title}
                </h3>

                {/* Decorative Wavy Squiggle Line Divider */}
                <div
                  aria-hidden="true"
                  className={`my-1.5 h-[4px] w-full ${item.accentSquiggle}`}
                >
                  <svg
                    viewBox="0 0 240 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full stroke-current"
                  >
                    <path
                      d="M0 4 Q 15 0, 30 4 T 60 4 T 90 4 T 120 4 T 150 4 T 180 4 T 210 4 T 240 4"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Description */}
                <p className="text-[11px] sm:text-[11.5px] leading-relaxed text-white/80 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
