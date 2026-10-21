"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Landmark,
  BookOpen,
  FileText,
  DollarSign,
  Home,
  Calculator,
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
  ArrowRight,
  Plane,
  Calendar,
  Globe2,
} from "lucide-react";

/* =====================================================================
   6 CARDS (EXACT MATCH TO THE USER'S PROVIDED CARD DESIGN & CLIENT CONTENT)
   Light Claymorphic Theme + Brand Color Chart Palettes
===================================================================== */
export const GUIDES_DATA = [
  {
    id: "academic-pathways",
    slug: "academic-pathways",
    tag: "STUDY IN USA",
    tagIcon: GraduationCap,
    title: "Study in USA",
    description:
      "US universities offer flexible undergraduate pathways and specialised postgraduate degrees. From choosing a major to pursuing an MS or MBA, your options depend on your academic background and goals.",
    image: "/images/study-usa/3d/light_academic.png",
    cardBg: "from-[#F0F5FA] to-[#E8F0FE]",
    borderColor: "border-white",
    primaryColor: "#1765F5",
    hoverColor: "#1047AC",
    tagBg: "#E8F0FE",
    tagColor: "#1765F5",
    tagBorder: "#A2C1FB",
    bulletIconBg: "#E8F0FE",
    bullets: [
      { label: "Bachelor's: Typically 4 years", icon: GraduationCap },
      { label: "Master's: Commonly 1–2 years", icon: BookOpen },
      { label: "Main intakes: Fall and Spring", icon: Calendar },
    ],
  },
  {
    id: "cost-of-studying",
    slug: "cost-of-studying",
    tag: "TUITION & EXPENSES",
    tagIcon: DollarSign,
    title: "Cost of Studying in USA",
    description:
      "Tuition depends on your university, degree, and field of study. Use these annual ranges to start planning your budget before comparing specific programs.",
    image: "/images/study-usa/3d/light_cost.png",
    cardBg: "from-[#F2FAF5] to-[#E8F6ED]",
    borderColor: "border-white",
    primaryColor: "#16A34A",
    hoverColor: "#0F7234",
    tagBg: "#E8F6ED",
    tagColor: "#16A34A",
    tagBorder: "#A2DAB7",
    bulletIconBg: "#E8F6ED",
    bullets: [
      { label: "Bachelor's: US$19,000–40,000 / yr (₹18–38 L)", icon: DollarSign },
      { label: "Master's: US$16,000–31,000 / yr (₹15.2–29.5 L)", icon: Calculator },
      { label: "Additional: Housing, food, fees & visa", icon: Home },
    ],
  },
  {
    id: "living-and-culture",
    slug: "living-and-culture",
    tag: "COST OF LIVING & CULTURE",
    tagIcon: Home,
    title: "Cost of Living in USA",
    description:
      "Living costs depend on where you study and how you choose to live. A useful starting budget is US$1,000–2,500 per month, excluding tuition.",
    image: "/images/study-usa/3d/light_living.png",
    cardBg: "from-[#FCF8F0] to-[#FEF5E7]",
    borderColor: "border-white",
    primaryColor: "#F59E0B",
    hoverColor: "#AC6F08",
    tagBg: "#FEF5E7",
    tagColor: "#AC6F08",
    tagBorder: "#FBD89D",
    bulletIconBg: "#FEF5E7",
    bullets: [
      { label: "Housing: Often your biggest expense", icon: Building2 },
      { label: "Daily essentials: Food, transit & utilities", icon: Users },
      { label: "Campus life: Diverse clubs & community", icon: ShieldCheck },
    ],
  },
  {
    id: "scholarships-and-aid",
    slug: "scholarships-and-aid",
    tag: "SCHOLARSHIPS & AID",
    tagIcon: Award,
    title: "Scholarships for Indian Students",
    description:
      "Indian students may qualify for merit-based scholarships, need-based financial aid, university awards, or graduate research funding. Opportunities depend on your profile.",
    image: "/images/study-usa/3d/light_scholarships.png",
    cardBg: "from-[#FAF4FC] to-[#F4ECF8]",
    borderColor: "border-white",
    primaryColor: "#9140BA",
    hoverColor: "#662D82",
    tagBg: "#F4ECF8",
    tagColor: "#9140BA",
    tagBorder: "#D3B3E3",
    bulletIconBg: "#F4ECF8",
    bullets: [
      { label: "Merit-based: Rewards academic achievement", icon: Award },
      { label: "Need-based: Assesses financial circumstances", icon: Sparkles },
      { label: "External: Fulbright-Nehru & Inlaks funding", icon: Globe2 },
    ],
  },
  {
    id: "post-study-visa",
    slug: "post-study-visa",
    tag: "POST-STUDY WORK VISA",
    tagIcon: Plane,
    title: "Post-Study Work Visa USA",
    description:
      "Planning to work in the USA after graduation? Eligible F-1 students can apply for Optional Practical Training (OPT) to gain work experience related to their degree.",
    image: "/images/study-usa/3d/light_visa.png",
    cardBg: "from-[#F0F7F7] to-[#E7F1F1]",
    borderColor: "border-white",
    primaryColor: "#0F766E",
    hoverColor: "#0B534D",
    tagBg: "#E7F1F1",
    tagColor: "#0F766E",
    tagBorder: "#9FC8C5",
    bulletIconBg: "#E7F1F1",
    bullets: [
      { label: "12 months of OPT: Eligible graduates", icon: Clock },
      { label: "Up to 36 months: Qualifying STEM extension", icon: Sparkles },
      { label: "After OPT: Employer-sponsored H-1B status", icon: Briefcase },
    ],
  },
  {
    id: "jobs-in-usa",
    slug: "jobs-in-usa",
    tag: "CAREERS & ROI",
    tagIcon: Briefcase,
    title: "Jobs & Careers in USA",
    description:
      "Explore the world's most dynamic job market for international graduates through CPT corporate internships, career fairs, and high-ROI full-time placements.",
    image: "/images/study-usa/3d/light_jobs.png",
    cardBg: "from-[#EFF5FD] to-[#E8F0FE]",
    borderColor: "border-white",
    primaryColor: "#1047AC",
    hoverColor: "#0C337B",
    tagBg: "#E8F0FE",
    tagColor: "#1047AC",
    tagBorder: "#A2C1FB",
    bulletIconBg: "#E8F0FE",
    bullets: [
      { label: "Paid CPT Summer Internships", icon: Briefcase },
      { label: "On-Campus: Up to 20 hrs/week student work", icon: Building2 },
      { label: "High ROI Career Placements", icon: TrendingUp },
    ],
  },
];

export default function InteractiveBookGuides({ onSelectGuide }) {
  const handleRedirect = (card) => {
    if (onSelectGuide) {
      onSelectGuide(card);
    } else {
      window.location.href = `/study-in-usa/${card.slug}`;
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[1400px] px-3 sm:px-5 lg:px-6 py-4">
      {/* 2-Column Responsive Grid (Matching exact wide card aspect ratio of Image 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 justify-items-center">
        {GUIDES_DATA.map((card, idx) => {
          const TagIcon = card.tagIcon;

          return (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              onClick={() => handleRedirect(card)}
              className={`
                group relative
                w-full
                rounded-[32px] sm:rounded-[36px]
                border-2 ${card.borderColor}
                bg-gradient-to-br ${card.cardBg}
                p-5 sm:p-7 md:p-8
                shadow-[0_16px_36px_rgba(12,51,123,0.06),0_2px_8px_rgba(12,51,123,0.04)]
                hover:shadow-[0_24px_52px_rgba(12,51,123,0.12)]
                hover:-translate-y-1.5
                transition-all duration-300 ease-out
                cursor-pointer select-none
                overflow-hidden
                flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6
              `}
            >
              {/* Playful Floating Accents (Matching Image 2) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-6 h-8 w-8 text-[#F59E0B]/80 opacity-70 group-hover:rotate-12 transition-transform duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                  <path d="M12 0L14 9L23 11L15 14L16 23L11 16L2 17L8 12L4 3L12 7Z" opacity="0.3" />
                </svg>
              </div>

              {/* LEFT COLUMN: Content & Bullet Points */}
              <div className="relative z-10 flex flex-col justify-between w-full sm:w-[58%] text-left">
                {/* Category Pill Tag */}
                <div className="flex items-center">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider border shadow-xs"
                    style={{
                      backgroundColor: card.tagBg,
                      color: card.tagColor,
                      borderColor: card.tagBorder,
                    }}
                  >
                    <TagIcon size={14} strokeWidth={2.4} />
                    {card.tag}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="mt-3.5 text-[24px] sm:text-[27px] md:text-[30px] font-extrabold text-[#0C337B] tracking-[-0.03em] leading-[1.12]">
                  {card.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-[#526B8C]">
                  {card.description}
                </p>

                {/* 3 Bullet Points with Soft Square Icon Tiles */}
                <div className="mt-4 flex flex-col gap-2">
                  {card.bullets.map((bullet, bIdx) => {
                    const BulletIcon = bullet.icon;
                    return (
                      <div key={bIdx} className="flex items-center gap-2.5">
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-xs border border-white"
                          style={{
                            backgroundColor: card.bulletIconBg,
                            color: card.primaryColor,
                          }}
                        >
                          <BulletIcon size={14} strokeWidth={2.4} />
                        </span>
                        <span className="text-[12.5px] sm:text-[13px] font-bold text-[#1E293B]">
                          {bullet.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="mt-5">
                  <div
                    className="
                      inline-flex items-center gap-2.5
                      rounded-full px-6 py-2.5 sm:py-3
                      text-[13px] sm:text-[13.5px] font-extrabold text-white
                      shadow-[0_8px_20px_rgba(23,101,245,0.25)]
                      transition-all duration-300
                      group-hover:gap-3.5 group-hover:shadow-[0_12px_28px_rgba(23,101,245,0.35)]
                      w-fit
                    "
                    style={{ backgroundColor: card.primaryColor }}
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={15} strokeWidth={2.6} />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Large 3D Clay Illustration */}
              <div className="relative z-10 w-full sm:w-[42%] flex items-center justify-center h-[200px] sm:h-[240px] md:h-[260px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-108"
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
