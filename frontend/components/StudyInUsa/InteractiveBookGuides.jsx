"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  DollarSign,
  Globe2,
  Award,
  Briefcase,
  ArrowRight,
  BookMarked,
  Landmark,
  BadgeCheck,
} from "lucide-react";

export const BOOKSHELF_DATA = [
  {
    id: "academic-pathways",
    slug: "academic-pathways",
    title: "ACADEMIC PATHWAYS",
    spineTitle: "ACADEMIC PATHWAYS",
    theme: {
      bg: "from-[#112746] via-[#1A3863] to-[#0E1F38]",
      solidBg: "#163156",
      foil: "#E6C98A",
      foilDim: "#C5A358",
      ribbon: "#C5A358",
    },
    topIcon: GraduationCap,
    bottomIcon: Landmark,
    overviewTitle: "ACADEMIC PATHWAYS OVERVIEW",
    intro:
      "Explore flexible 4-year US Bachelor's degrees, specialized 1–2 year STEM Master's (MS & MBA), funded PhD research fellowships, and the Fall/Spring intake admission cycles.",
  },
  {
    id: "cost-of-studying",
    slug: "cost-of-studying",
    title: "COST OF STUDYING",
    spineTitle: "COST OF STUDYING",
    theme: {
      bg: "from-[#103D30] via-[#195644] to-[#0C2D23]",
      solidBg: "#154B3B",
      foil: "#EAD498",
      foilDim: "#CDB067",
      ribbon: "#CDB067",
    },
    topIcon: DollarSign,
    bottomIcon: Landmark,
    overviewTitle: "COST OF STUDYING OVERVIEW",
    intro:
      "Understand annual tuition fee ranges across public vs private US universities, mandatory campus health/lab fees, living expenses, and comprehensive student budgeting strategies.",
  },
  {
    id: "living-and-culture",
    slug: "living-and-culture",
    title: "LIVING & CULTURE",
    spineTitle: "LIVING & CULTURE",
    theme: {
      bg: "from-[#8B3E21] via-[#AA502D] to-[#6E2F17]",
      solidBg: "#9C4726",
      foil: "#F3DC9B",
      foilDim: "#D5BA6B",
      ribbon: "#D5BA6B",
    },
    topIcon: Globe2,
    bottomIcon: Landmark,
    overviewTitle: "LIVING & CULTURE OVERVIEW",
    intro:
      "Embrace diversity, explore traditions, and thrive in your new environment. Discover cultural nuances, accommodation tips, local life, and practical guidance for your study abroad journey.",
  },
  {
    id: "scholarships-and-aid",
    slug: "scholarships-and-aid",
    title: "SCHOLARSHIPS & AID",
    spineTitle: "SCHOLARSHIPS & AID",
    theme: {
      bg: "from-[#571420] via-[#751E2E] to-[#400E17]",
      solidBg: "#661826",
      foil: "#F5DDA2",
      foilDim: "#D6B86C",
      ribbon: "#D6B86C",
    },
    topIcon: Award,
    bottomIcon: GraduationCap,
    overviewTitle: "SCHOLARSHIPS & AID OVERVIEW",
    intro:
      "Unlock merit-based grants, institutional need-based financial aid, prestigious external fellowships like Fulbright, and Graduate Assistantships (TA/RA) with tuition waivers.",
  },
  {
    id: "post-study-visa",
    slug: "post-study-visa",
    title: "POST-STUDY VISA",
    spineTitle: "POST-STUDY VISA",
    theme: {
      bg: "from-[#131E2D] via-[#1E2E44] to-[#0D1520]",
      solidBg: "#19273A",
      foil: "#D9E3ED",
      foilDim: "#A5B8CC",
      ribbon: "#A5B8CC",
    },
    topIcon: Briefcase,
    bottomIcon: BadgeCheck,
    overviewTitle: "POST-STUDY VISA OVERVIEW",
    intro:
      "Navigate legal employment pathways in the US — from the standard 12-month F-1 OPT to the 24-month STEM OPT extension (up to 3 years total) and corporate H-1B sponsorship.",
  },
];

export default function InteractiveBookGuides({ onSelectGuide }) {
  // Default active book is 'living-and-culture' exactly as in the user's reference image!
  const [activeBookId, setActiveBookId] = useState("living-and-culture");

  const handleRedirect = (book) => {
    if (onSelectGuide) {
      onSelectGuide(book);
    } else {
      window.location.href = `/study-in-usa/${book.slug}`;
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[1360px] px-3 sm:px-6">
      {/* =====================================================================
          THE BOOKSHELF CONTAINER
          (Books stand side-by-side; hovered book turns front with top draped card)
      ====================================================================== */}
      <div className="relative flex flex-col items-center">
        
        {/* Books Row */}
        <div className="relative flex w-full items-end justify-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto no-scrollbar pt-6 pb-0">
          {BOOKSHELF_DATA.map((book) => {
            const isActive = activeBookId === book.id;
            const TopIcon = book.topIcon;
            const BottomIcon = book.bottomIcon;

            return (
              <div
                key={book.id}
                onMouseEnter={() => setActiveBookId(book.id)}
                className="relative flex items-end cursor-pointer transition-all duration-300"
              >
                {isActive ? (
                  /* =====================================================
                      ACTIVE FRONT-FACING BOOK (WITH DRAPED INTRO CARD)
                  ====================================================== */
                  <motion.div
                    layout
                    initial={{ opacity: 0.9, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="
                      relative
                      h-[380px] sm:h-[410px] md:h-[430px]
                      w-[240px] sm:w-[270px] md:w-[290px]
                      rounded-r-2xl rounded-l-sm
                      border-t border-r border-b border-white/20
                      shadow-[0_25px_60px_rgba(0,0,0,0.32)]
                      flex flex-col justify-between
                      overflow-visible
                      select-none
                    "
                    style={{ backgroundColor: book.theme.solidBg }}
                  >
                    {/* Left spine crease */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 via-black/15 to-transparent border-r border-white/10"
                    />

                    {/* ===================================================
                        THE DRAPED INTRODUCTORY CARD
                        (Curves out from inside top edge down over front cover)
                    =================================================== */}
                    <motion.div
                      initial={{ y: -15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRedirect(book);
                      }}
                      className="
                        absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2
                        w-[90%] sm:w-[88%]
                        h-[310px] sm:h-[330px] md:h-[345px]
                        rounded-t-3xl rounded-b-md
                        bg-[#FCF9F2]
                        border border-[#E7DECA]
                        shadow-[0_16px_40px_rgba(0,0,0,0.28)]
                        p-4 sm:p-5
                        flex flex-col justify-between
                        z-30
                        cursor-pointer
                        transition-transform hover:-translate-y-1
                      "
                    >
                      {/* Top Curving Arch Fold Silhouette */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-3 inset-x-0 h-4 bg-gradient-to-b from-[#EFE5D2] to-[#FCF9F2] rounded-t-3xl border-t border-[#DFD3BB]"
                      />

                      {/* Gold Silk Bookmark Ribbon Pinned on Top */}
                      <div
                        aria-hidden="true"
                        className="absolute -top-3.5 right-6 h-9 w-4 rounded-b-sm shadow-md"
                        style={{ backgroundColor: book.theme.ribbon }}
                      />

                      {/* Header Row: INTRODUCTION */}
                      <div>
                        <div className="text-center border-b border-[#E8DFC8] pb-2">
                          <span className="font-serif text-[11px] font-bold uppercase tracking-[0.25em] text-[#1E252D]">
                            INTRODUCTION
                          </span>
                        </div>

                        {/* Title Overview */}
                        <h4 className="mt-4 font-serif text-[15px] sm:text-[17px] font-extrabold uppercase leading-snug tracking-tight text-[#162E52]">
                          {book.overviewTitle}
                        </h4>

                        {/* Description */}
                        <p className="mt-2.5 text-[11.5px] sm:text-[12px] leading-relaxed text-[#4A5568] line-clamp-5">
                          {book.intro}
                        </p>
                      </div>

                      {/* Bottom Link: Read Full Guide → */}
                      <div className="pt-3 border-t border-[#E8DFC8]/80 flex items-center justify-between">
                        <span className="text-[12px] sm:text-[13px] font-bold text-[#162E52] hover:text-[#1765F5] transition-colors">
                          Read Full Guide →
                        </span>
                      </div>
                    </motion.div>

                    {/* Bottom Embossed Title on Book Cover (Revealed under card) */}
                    <div className="relative z-10 mt-auto pb-4 sm:pb-5 px-5 text-center">
                      <h3
                        className="font-serif font-black text-[15px] sm:text-[17px] md:text-[18px] tracking-wider uppercase drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
                        style={{ color: book.theme.foil }}
                      >
                        {book.title}
                      </h3>
                    </div>
                  </motion.div>
                ) : (
                  /* =====================================================
                      INACTIVE STANDING BOOK SPINE (MATCHING IMAGE 1)
                  ====================================================== */
                  <motion.div
                    layout
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="
                      relative
                      h-[380px] sm:h-[410px] md:h-[430px]
                      w-[62px] sm:w-[70px] md:w-[78px] lg:w-[86px]
                      rounded-sm
                      shadow-[0_15px_35px_rgba(0,0,0,0.22)]
                      flex flex-col justify-between items-center
                      py-5 px-1.5
                      overflow-hidden
                      select-none
                    "
                    style={{ backgroundColor: book.theme.solidBg }}
                  >
                    {/* Spine 3D Cylindrical Highlight & Shadow Overlay */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-white/12 to-black/35"
                    />

                    {/* Top Rib & Top Icon */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div
                        className="h-0.5 w-6 opacity-60"
                        style={{ backgroundColor: book.theme.foilDim }}
                      />
                      <TopIcon size={18} strokeWidth={2} style={{ color: book.theme.foil }} />
                    </div>

                    {/* Center Vertical Typography Title */}
                    <div className="relative z-10 my-auto flex items-center justify-center">
                      <span
                        className="
                          font-serif font-black
                          text-[13px] sm:text-[14px] md:text-[15px]
                          tracking-[0.16em]
                          uppercase
                          whitespace-nowrap
                          drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]
                          [writing-mode:vertical-rl]
                          rotate-180
                        "
                        style={{ color: book.theme.foil }}
                      >
                        {book.spineTitle}
                      </span>
                    </div>

                    {/* Bottom Rib & Bottom Icon */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <BottomIcon size={16} strokeWidth={2} style={{ color: book.theme.foil }} />
                      <div
                        className="h-0.5 w-6 opacity-60"
                        style={{ backgroundColor: book.theme.foilDim }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            WOODEN SHELF PLINTH (MATCHING IMAGE 1)
        ====================================================================== */}
        <div className="relative w-full max-w-[1200px]">
          {/* Top shelf bevel highlight */}
          <div className="h-1 w-full bg-gradient-to-r from-[#F0E2CD] via-[#FAF1E3] to-[#F0E2CD] rounded-t-sm" />
          {/* Main wooden shelf beam with authentic warm wood grain shading */}
          <div className="h-5 sm:h-6 w-full bg-gradient-to-b from-[#DEC39E] via-[#C9A97E] to-[#A88557] rounded-b-md shadow-[0_18px_36px_rgba(12,51,123,0.15)] border-t border-white/70" />
        </div>
      </div>
    </div>
  );
}
