"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const UNIVERSITIES = [
  {
    name: "Chandigarh University",
    short: "CHANDIGARH",
    grade: "A+",
    image: "/images/universities/portrait/chandigarh-university.jpg",
    tier: "Tier 1 Accredited",
    location: "Punjab, India",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    short: "AMRITA",
    grade: "A++",
    image: "/images/universities/portrait/amrita-university.jpg",
    tier: "Global Research Hub",
    location: "Coimbatore, India",
  },
  {
    name: "Vivekananda Global University",
    short: "VGU",
    grade: "A+",
    image: "/images/universities/portrait/vgu.jpg",
    tier: "Industry Partnered",
    location: "Jaipur, India",
  },
  {
    name: "Shoolini University",
    short: "SHOOLINI",
    grade: "A+",
    image: "/images/universities/portrait/shoolini-university.jpg",
    tier: "Top Ranked Bio-Sciences",
    location: "Solan, HP",
  },
  {
    name: "Amity University",
    short: "AMITY",
    grade: "A+",
    image: "/images/universities/portrait/amity-university.jpg",
    tier: "Global Campus Network",
    location: "Noida, India",
  },
  {
    name: "Manipal University Jaipur",
    short: "MANIPAL",
    grade: "A+",
    image: "/images/universities/portrait/manipal-university-jaipur.jpg",
    tier: "Innovation & Tech",
    location: "Jaipur, India",
  },
  {
    name: "UPES Dehradun",
    short: "UPES",
    grade: "A",
    image: "/images/universities/portrait/upes.jpg",
    tier: "Energy & Tech Hub",
    location: "Dehradun, India",
  },
  {
    name: "Galgotias University",
    short: "GALGOTIAS",
    grade: "A+",
    image: "/images/universities/portrait/galgotias-university.jpg",
    tier: "Engineering & MBA",
    location: "Greater Noida, India",
  },
  {
    name: "GLA University",
    short: "GLA",
    grade: "A+",
    image: "/images/universities/portrait/gla-university.jpg",
    tier: "Career Focused",
    location: "Mathura, India",
  },
  {
    name: "Lovely Professional University",
    short: "LPU",
    grade: "A++",
    image: "/images/universities/portrait/lpu.jpg",
    tier: "Diverse Community",
    location: "Punjab, India",
  },
  {
    name: "Parul University",
    short: "PARUL",
    grade: "A++",
    image: "/images/universities/portrait/parul-university.jpg",
    tier: "Emerging Leader",
    location: "Vadodara, India",
  },
  {
    name: "Sharda University",
    short: "SHARDA",
    grade: "A+",
    image: "/images/universities/portrait/sharda-university.jpg",
    tier: "International Diversity",
    location: "Greater Noida, India",
  },
  {
    name: "Uttaranchal University",
    short: "UTTARANCHAL",
    grade: "A+",
    image: "/images/universities/portrait/uttaranchal-university.jpg",
    tier: "Academic Excellence",
    location: "Dehradun, India",
  },
];

export default function UniversityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [targetIndex, setTargetIndex] = useState(3);
  const [containerWidth, setContainerWidth] = useState(1300);
  const [isHovered, setIsHovered] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const animFrame = useRef(null);
  const containerRef = useRef(null);

  const total = UNIVERSITIES.length;

  // Track container width for responsive measurements
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      } else if (typeof window !== "undefined") {
        setContainerWidth(window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = useCallback(() => {
    setTargetIndex((prev) => Math.round(prev) - 1);
  }, []);

  const handleNext = useCallback(() => {
    setTargetIndex((prev) => Math.round(prev) + 1);
  }, []);

  // Smooth spring-like interpolation toward targetIndex
  useEffect(() => {
    const step = () => {
      setCurrentIndex((prev) => {
        const diff = targetIndex - prev;
        if (Math.abs(diff) < 0.002) {
          return targetIndex;
        }
        return prev + diff * 0.12;
      });
      animFrame.current = requestAnimationFrame(step);
    };
    animFrame.current = requestAnimationFrame(step);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [targetIndex]);

  // Subtle auto-advance every 4.5s when not dragging or hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setTargetIndex((prev) => Math.round(prev) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Pointer drag interactions
  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setTargetIndex((prev) => prev - dx / 200);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setTargetIndex((prev) => Math.round(prev));
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // Dynamic responsive measurements
  const isMobile = containerWidth < 640;
  const factor = isMobile
    ? 1
    : Math.max(0.72, Math.min(1.0, containerWidth / 1400));
  const cardW = Math.round((isMobile ? 130 : 142) * factor);
  const cardH = Math.round((isMobile ? 210 : 230) * factor);
  const gap = Math.round((isMobile ? 20 : 30) * factor);

  // Progressive scale function: Center is 1.0 (~230px), edges flare up to ~1.72 (~395px)
  const getScale = (absDelta) => 1 + Math.pow(absDelta, 1.35) * 0.16;

  // Inward 3D Y-rotation
  const getRotY = (delta) => {
    const sign = Math.sign(delta);
    const abs = Math.abs(delta);
    return -sign * Math.min(38, Math.pow(abs, 1.05) * 10.5);
  };

  // Precompute exact cumulative X positions so that the gap between ANY two adjacent cards is GUARANTEED to be >= gap
  const X_table = [0];
  for (let i = 1; i <= 6; i++) {
    const s_prev = getScale(i - 1);
    const s_curr = getScale(i);
    // Half width of prev + half width of curr + guaranteed gap
    const step = (cardW * (s_prev + s_curr)) / 2 + gap;
    X_table.push(X_table[i - 1] + step);
  }

  // Smooth continuous X position interpolation for dragging/scrubbing
  const getXPos = (delta) => {
    const sign = Math.sign(delta);
    const abs = Math.abs(delta);
    const floor = Math.floor(abs);
    const frac = abs - floor;
    if (floor >= X_table.length - 1) {
      const last = X_table[X_table.length - 1];
      return sign * (last + (abs - (X_table.length - 1)) * 300);
    }
    return (
      sign * (X_table[floor] + frac * (X_table[floor + 1] - X_table[floor]))
    );
  };

  return (
    <section
      role="region"
      aria-label="Universities Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full overflow-hidden bg-[#FAF8F5] py-6 sm:py-8 md:py-9 select-none outline-none"
    >
      {/* =========================================================
          1. TOP HEADER (Exact 1:1 match with reference design)
      ========================================================== */}
      <div className="mx-auto max-w-[850px] px-3.5 sm:px-5 text-center">
        <h2 className="text-[28px] sm:text-[38px] md:text-[46px] lg:text-[50px] tracking-[-0.035em] leading-[1.08]">
          <span className="font-serif italic font-normal text-[#1765F5]">
            Streamline Your Future,
          </span>
          <br />
          <span className="font-extrabold text-[#0C337B]">
            Where could you go next ?
          </span>
        </h2>

        <p className="mx-auto mt-2.5 max-w-[620px] text-[13px] sm:text-[14px] md:text-[15px] text-[#526B8C] leading-relaxed">
          All-in-one guidance to compare top universities, accredited courses, and global degree pathways — faster and smarter.
        </p>

        {/* Central Pill CTA Button (Matching black/navy pill from reference) */}
        <div className="mt-3.5 flex justify-center">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("faq-section") || document.querySelector("footer");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-[#0C337B] px-5 py-2 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(12,51,123,0.2)] transition-all duration-300 hover:bg-[#1765F5] hover:shadow-[0_10px_24px_rgba(23,101,245,0.3)] hover:-translate-y-0.5 sm:px-6 sm:py-2.5 sm:text-[13px]"
          >
            <span>Get Started for Free</span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={11} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      {/* =========================================================
          2. 3D CONCAVE ARC SHOWCASE (Zero Overlap Guaranteed)
          - Center cards: small, flat, ~230px tall
          - Side cards: flare taller up to ~400px+ with 3D inward rotation
          - Zero overlap: strictly calibrated visual gap between all cards
          - Flank cards bleed softly off the left & right viewport edges
      ========================================================== */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative mt-4 sm:mt-6 h-[320px] sm:h-[380px] md:h-[430px] lg:h-[460px] w-full cursor-grab active:cursor-grabbing overflow-hidden flex items-center justify-center"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          maskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        {/* Soft edge subtle gradient accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-40 w-12 sm:w-20 bg-gradient-to-r from-[#FAF8F5] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-40 w-12 sm:w-20 bg-gradient-to-l from-[#FAF8F5] to-transparent"
        />

        {/* Left Arrow Navigation */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous university"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#0C337B] shadow-md backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#1765F5] hover:text-white"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        {/* Right Arrow Navigation */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next university"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#0C337B] shadow-md backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#1765F5] hover:text-white"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>

        {/* 3D Track Container */}
        <div
          className="relative h-full w-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {UNIVERSITIES.map((univ, idx) => {
            // Circular index wrapping
            let delta = idx - currentIndex;
            delta = ((delta % total) + total) % total;
            if (delta > total / 2) delta -= total;

            // Only render visible cards in active arc (-3.8 to +3.8)
            if (Math.abs(delta) > 3.8) return null;

            const absDelta = Math.abs(delta);

            // 1. Scale factor: Center is 1.0 (~230px), sides flare up to ~1.72 (~395px tall)
            const scale = getScale(absDelta);

            // 2. Inward 3D Y-Rotation (sides face inward)
            const rotY = getRotY(delta);

            // 3. Exact Horizontal Spacing with GUARANTEED gap (never overlaps)
            const xPos = getXPos(delta);

            // 4. Stacking order: natural concave amphitheater order
            const zIndex = Math.round(50 + absDelta * 10);

            // 5. Soft edge opacity fade for outermost bleeding cards
            const opacity =
              absDelta <= 2.8
                ? 1
                : Math.max(0, 1 - Math.pow((absDelta - 2.8) / 1.0, 1.6));

            return (
              <div
                key={univ.name}
                onClick={() => setTargetIndex(idx)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  transformStyle: "preserve-3d",
                  transform: `translateX(${xPos.toFixed(1)}px) scale(${scale.toFixed(
                    3
                  )}) rotateY(${rotY.toFixed(1)}deg)`,
                  zIndex,
                  opacity,
                }}
              >
                {/* Card Visual Body with 3D Depth Effect */}
                <div className="group relative h-full w-full overflow-hidden rounded-[24px] border border-white/20 bg-slate-950 shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_24px_48px_rgba(12,51,123,0.28)] hover:-translate-y-1">
                  {/* Layer 1: Full-bleed Portrait University Image */}
                  <Image
                    src={univ.image}
                    alt={univ.name}
                    fill
                    sizes="(max-width: 640px) 160px, 220px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority={absDelta < 2}
                  />

                  {/* Layer 2: 3D Depth Typography Watermark in Upper Sky */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-3 z-10 flex justify-center overflow-hidden px-2 select-none"
                  >
                    <span className="font-black uppercase tracking-[0.2em] text-white/35 text-[20px] sm:text-[23px] leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-0.5">
                      {univ.short}
                    </span>
                  </div>

                  {/* Layer 3: Top-Left NAAC Accreditation Badge */}
                  <div className="absolute left-2.5 top-2.5 z-20">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-extrabold text-[#0C337B] shadow-md border border-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1765F5]" />
                      NAAC {univ.grade}
                    </span>
                  </div>

                  {/* Layer 4: Depth Vignette Gradient */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent"
                  />

                  {/* Layer 5: Bottom Depth Info */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-3 pt-6">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#93C5FD] line-clamp-1 mb-0.5">
                      {univ.tier}
                    </p>
                    <h3 className="line-clamp-1 text-[12px] sm:text-[13px] font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                      {univ.name}
                    </h3>
                    <p className="text-[9px] text-white/70 line-clamp-1 mt-0.5 font-medium">
                      {univ.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          3. BOTTOM 3 FEATURE COLUMNS (Exact 1:1 match with Image 1)
      ========================================================== */}
      <div className="mx-auto mt-6 sm:mt-7 md:mt-8 grid max-w-[1140px] grid-cols-1 gap-4 px-3.5 sm:px-5 sm:grid-cols-3 sm:gap-6 md:gap-8 text-center">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <h4 className="text-[15px] sm:text-[16px] md:text-[17px] font-extrabold text-[#0C337B] tracking-tight">
            Real-Time Collaboration
          </h4>
          <p className="mt-1.5 max-w-[320px] text-[12px] sm:text-[13px] leading-relaxed text-[#526B8C]">
            Direct one-on-one sessions with expert admission mentors to plan, evaluate, and fast-track your university applications.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <h4 className="text-[15px] sm:text-[16px] md:text-[17px] font-extrabold text-[#0C337B] tracking-tight">
            Task & Project Tracking
          </h4>
          <p className="mt-1.5 max-w-[320px] text-[12px] sm:text-[13px] leading-relaxed text-[#526B8C]">
            Stay ahead on application deadlines, eligibility criteria, and fee structures tailored to your exact profile.
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <h4 className="text-[15px] sm:text-[16px] md:text-[17px] font-extrabold text-[#0C337B] tracking-tight">
            Performance Insights
          </h4>
          <p className="mt-1.5 max-w-[320px] text-[12px] sm:text-[13px] leading-relaxed text-[#526B8C]">
            Gain actionable admission guidance with acceptance rate analytics, scholarship options, and career outcome insights.
          </p>
        </div>
      </div>
    </section>
  );
}