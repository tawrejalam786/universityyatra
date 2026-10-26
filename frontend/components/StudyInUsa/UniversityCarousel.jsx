
"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ==========================================
   ORIGINAL UNIVERSITY DATA
========================================== */

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

const TOTAL = UNIVERSITIES.length;
const AUTOPLAY_DELAY = 4500;
const SCROLL_PAUSE = 2500;

/* ==========================================
   CIRCULAR INDEX HELPERS
========================================== */

function getWrappedDelta(index, position) {
  let delta = index - position;
  delta = ((delta % TOTAL) + TOTAL) % TOTAL;

  if (delta > TOTAL / 2) {
    delta -= TOTAL;
  }

  return delta;
}

function getScale(absDelta) {
  return 1 + Math.pow(absDelta, 1.35) * 0.16;
}

function getRotY(delta) {
  return (
    -Math.sign(delta) *
    Math.min(38, Math.pow(Math.abs(delta), 1.05) * 10.5)
  );
}

/* ==========================================
   CAROUSEL COMPONENT
========================================== */

export default function UniversityCarousel() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const autoplayRef = useRef(null);
  const scrollResumeRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(3);
  const [containerWidth, setContainerWidth] = useState(1300);
  const [isDragging, setIsDragging] = useState(false);

  const currentRef = useRef(3);
  const targetRef = useRef(3);

  const visibleRef = useRef(false);
  const hoveringRef = useRef(false);
  const scrollingRef = useRef(false);
  const interactingRef = useRef(false);
  const suppressClickRef = useRef(false);

  const dragRef = useRef({
    active: false,
    horizontal: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startIndex: 3,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  /* ==========================================
     UPDATE TARGET
  ========================================== */

  const moveTo = useCallback((value) => {
    targetRef.current = value;
  }, []);

  const handlePrev = useCallback(() => {
    moveTo(Math.round(targetRef.current) - 1);
  }, [moveTo]);

  const handleNext = useCallback(() => {
    moveTo(Math.round(targetRef.current) + 1);
  }, [moveTo]);

  /* ==========================================
     RESIZE OBSERVER
  ========================================== */

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const update = () => {
      setContainerWidth(element.clientWidth);
    };

    update();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     VISIBILITY OBSERVER

     AUTOPLAY ONLY WHEN SECTION IS VISIBLE
  ========================================== */

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;

        if (!entry.isIntersecting) {
          scrollingRef.current = false;
          interactingRef.current = false;
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     PAGE SCROLL HANDLING

     SCROLL NEVER CONTROLS CAROUSEL POSITION
  ========================================== */

  useEffect(() => {
    const handlePageScroll = () => {
      scrollingRef.current = true;

      if (scrollResumeRef.current) {
        clearTimeout(scrollResumeRef.current);
      }

      scrollResumeRef.current = setTimeout(() => {
        scrollingRef.current = false;
      }, SCROLL_PAUSE);
    };

    window.addEventListener("scroll", handlePageScroll, {
      passive: true,
    });

    window.addEventListener("wheel", handlePageScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handlePageScroll);
      window.removeEventListener("wheel", handlePageScroll);

      if (scrollResumeRef.current) {
        clearTimeout(scrollResumeRef.current);
      }
    };
  }, []);

  /* ==========================================
     STABLE AUTOPLAY

     PAUSES WHEN:
     - PAGE IS SCROLLING
     - SECTION IS OFF SCREEN
     - MOUSE IS HOVERING
     - USER IS DRAGGING
     - TAB IS HIDDEN
  ========================================== */

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (
        !visibleRef.current ||
        hoveringRef.current ||
        scrollingRef.current ||
        interactingRef.current ||
        dragRef.current.active ||
        document.hidden
      ) {
        return;
      }

      // Never advance while an earlier animation is unfinished.
      if (
        Math.abs(
          targetRef.current - currentRef.current
        ) > 0.025
      ) {
        return;
      }

      moveTo(Math.round(targetRef.current) + 1);
    }, AUTOPLAY_DELAY);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [moveTo]);

  /* ==========================================
     SMOOTH ANIMATION

     NO EXTRA STATE UPDATES WHEN IDLE
  ========================================== */

  useEffect(() => {
    let running = true;

    const animate = () => {
      if (!running) return;

      const target = targetRef.current;
      const current = currentRef.current;
      const difference = target - current;

      if (Math.abs(difference) > 0.002) {
        const easing = dragRef.current.horizontal
          ? 0.42
          : 0.15;

        const next = current + difference * easing;

        currentRef.current = next;
        setCurrentIndex(next);
      } else if (current !== target) {
        currentRef.current = target;
        setCurrentIndex(target);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  /* ==========================================
     RESPONSIVE ORIGINAL CARD DIMENSIONS
  ========================================== */

  const isMobile = containerWidth < 640;

  const factor = isMobile
    ? 1
    : Math.max(
        0.72,
        Math.min(1, containerWidth / 1400)
      );

  const cardW = Math.round(
    (isMobile ? 130 : 142) * factor
  );

  const cardH = Math.round(
    (isMobile ? 210 : 230) * factor
  );

  const gap = Math.round(
    (isMobile ? 20 : 30) * factor
  );

  /* ==========================================
     ORIGINAL NO-OVERLAP SPACING
  ========================================== */

  const xTable = [0];

  for (let i = 1; i <= 6; i++) {
    const previousScale = getScale(i - 1);
    const nextScale = getScale(i);

    xTable.push(
      xTable[i - 1] +
        (cardW * (previousScale + nextScale)) / 2 +
        gap
    );
  }

  const getXPos = (delta) => {
    const sign = Math.sign(delta);
    const abs = Math.abs(delta);

    const index = Math.floor(abs);
    const fraction = abs - index;

    if (index >= xTable.length - 1) {
      return (
        sign *
        (
          xTable[xTable.length - 1] +
          (abs - (xTable.length - 1)) * 300
        )
      );
    }

    return (
      sign *
      (
        xTable[index] +
        fraction * (xTable[index + 1] - xTable[index])
      )
    );
  };

  /* ==========================================
     TOUCH / MOUSE POINTER HANDLING
  ========================================== */

  const handlePointerDown = (event) => {
    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    if (
      event.target.closest(
        "button, a, input, textarea, select"
      )
    ) {
      return;
    }

    const now = performance.now();

    dragRef.current = {
      active: true,
      horizontal: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startIndex: targetRef.current,
      lastX: event.clientX,
      lastTime: now,
      velocity: 0,
    };

    interactingRef.current = true;
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;

    if (
      !drag.active ||
      drag.pointerId !== event.pointerId
    ) {
      return;
    }

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;

    if (!drag.horizontal) {
      if (
        Math.abs(dx) < 8 &&
        Math.abs(dy) < 8
      ) {
        return;
      }

      // Allow the browser to handle vertical page scrolling.
      if (Math.abs(dy) > Math.abs(dx)) {
        drag.active = false;
        interactingRef.current = false;
        return;
      }

      drag.horizontal = true;
      setIsDragging(true);
      suppressClickRef.current = true;

      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // Browser safely continues without pointer capture.
      }
    }

    const now = performance.now();
    const elapsed = Math.max(1, now - drag.lastTime);

    drag.velocity =
      (event.clientX - drag.lastX) / elapsed;

    drag.lastX = event.clientX;
    drag.lastTime = now;

    const distancePerCard = isMobile ? 125 : 185;

    moveTo(
      drag.startIndex - dx / distancePerCard
    );
  };

  const handlePointerEnd = (event) => {
    const drag = dragRef.current;

    if (
      !drag.active ||
      drag.pointerId !== event.pointerId
    ) {
      return;
    }

    if (drag.horizontal) {
      const movement =
        event.clientX - drag.startX;

      const swipeDirection =
        movement === 0 ? 0 : -Math.sign(movement);

      const distancePerCard = isMobile ? 125 : 185;

      const travelled =
        Math.abs(movement) / distancePerCard;

      let snapped = Math.round(targetRef.current);

      // Short, intentional swipes should still navigate.
      if (travelled > 0.18 && travelled < 0.5) {
        snapped =
          Math.round(drag.startIndex) +
          swipeDirection;
      }

      // Give a fast flick a natural extra push.
      if (Math.abs(drag.velocity) > 0.8) {
        snapped += -Math.sign(drag.velocity);
      }

      moveTo(snapped);

      // Suppress the click fired after dragging.
      setTimeout(() => {
        suppressClickRef.current = false;
      }, 120);
    }

    dragRef.current.active = false;
    dragRef.current.horizontal = false;
    dragRef.current.pointerId = null;

    setIsDragging(false);
    interactingRef.current = false;

    try {
      if (
        event.currentTarget.hasPointerCapture(event.pointerId)
      ) {
        event.currentTarget.releasePointerCapture(
          event.pointerId
        );
      }
    } catch {
      // Pointer capture fallback.
    }
  };

  /* ==========================================
     CLICK TO CENTER
  ========================================== */

  const handleCardClick = (index) => {
    if (
      suppressClickRef.current ||
      dragRef.current.active
    ) {
      return;
    }

    const target = Math.round(targetRef.current);
    const delta = getWrappedDelta(index, target);

    moveTo(target + delta);
  };

  /* ==========================================
     KEYBOARD NAVIGATION
  ========================================== */

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }
  };

  /* ==========================================
     RENDER ORIGINAL DESIGN
  ========================================== */

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Universities Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
      className="relative w-full select-none overflow-hidden bg-[#FAF8F5] py-6 outline-none sm:py-8 md:py-9"
    >

      {/* ORIGINAL HEADER */}
      <div className="mx-auto max-w-[850px] px-3.5 text-center sm:px-5">

        <h2 className="text-[28px] leading-[1.08] tracking-[-0.035em] sm:text-[38px] md:text-[46px] lg:text-[50px]">
          <span className="font-serif font-normal italic text-[#1765F5]">
            Streamline Your Future,
          </span>

          <br />

          <span className="font-extrabold text-[#0C337B]">
            Where could you go next ?
          </span>
        </h2>

        <p className="mx-auto mt-2.5 max-w-[620px] text-[13px] leading-relaxed text-[#526B8C] sm:text-[14px] md:text-[15px]">
          All-in-one guidance to compare top universities,
          accredited courses, and global degree pathways —
          faster and smarter.
        </p>

        {/* CTA */}
        <div className="mt-3.5 flex justify-center">
          <button
            type="button"
            onClick={() => {
              const element =
                document.getElementById("faq-section") ||
                document.querySelector("footer");

              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-[#0C337B] px-5 py-2 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(12,51,123,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1765F5] hover:shadow-[0_10px_24px_rgba(23,101,245,0.3)] sm:px-6 sm:py-2.5 sm:text-[13px]"
          >
            <span>Get Started for Free</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={11} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      {/* ORIGINAL 3D ARC SHOWCASE */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        className={`relative mt-4 flex h-[320px] w-full items-center justify-center overflow-hidden sm:mt-6 sm:h-[380px] md:h-[430px] lg:h-[460px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          touchAction: "pan-y",
          WebkitUserSelect: "none",
          userSelect: "none",
          maskImage:
            "linear-gradient(90deg,transparent 0%,black 4%,black 96%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg,transparent 0%,black 4%,black 96%,transparent 100%)",
        }}
      >

        {/* LEFT EDGE FADE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-40 w-12 bg-gradient-to-r from-[#FAF8F5] to-transparent sm:w-20"
        />

        {/* RIGHT EDGE FADE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-40 w-12 bg-gradient-to-l from-[#FAF8F5] to-transparent sm:w-20"
        />

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous university"
          className="absolute left-2 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#0C337B] shadow-md transition-all duration-200 hover:scale-110 hover:bg-[#1765F5] hover:text-white sm:left-4 sm:h-11 sm:w-11"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next university"
          className="absolute right-2 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#0C337B] shadow-md transition-all duration-200 hover:scale-110 hover:bg-[#1765F5] hover:text-white sm:right-4 sm:h-11 sm:w-11"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>

        {/* ORIGINAL 3D TRACK */}
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {UNIVERSITIES.map((univ, idx) => {
            const delta = getWrappedDelta(
              idx,
              currentIndex
            );

            if (Math.abs(delta) > 3.8) return null;

            const absDelta = Math.abs(delta);

            const scale = getScale(absDelta);
            const rotY = getRotY(delta);
            const xPos = getXPos(delta);

            const zIndex = Math.round(
              50 + absDelta * 10
            );

            const opacity =
              absDelta <= 2.8
                ? 1
                : Math.max(
                    0,
                    1 -
                      Math.pow(
                        (absDelta - 2.8),
                        1.6
                      )
                  );

            return (
              <div
                key={univ.name}
                onClick={() => handleCardClick(idx)}
                className="absolute left-1/2 top-1/2 cursor-grab active:cursor-grabbing"
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  transform: `translate(-50%, -50%) translateX(${xPos.toFixed(1)}px) scale(${scale.toFixed(3)}) rotateY(${rotY.toFixed(1)}deg)`,
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  zIndex,
                  opacity,
                  userSelect: "none",
                  touchAction: "pan-y",
                }}
              >
                {/* UNIVERSITY CARD */}
                <div
                  className="group relative h-full w-full overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(12,51,123,0.28)]"
                  style={{
                    isolation: "isolate",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* IMAGE */}
                  <Image
                    src={univ.image}
                    alt={univ.name}
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 160px, 220px"
                    className="pointer-events-none select-none object-cover object-center"
                    style={{
                      transform: "scale(1.015)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    priority={absDelta < 2}
                  />

                  {/* UNIVERSITY WATERMARK */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-3 z-10 flex select-none justify-center overflow-hidden px-2"
                  >
                    <span className="text-[20px] font-black uppercase leading-none tracking-[0.2em] text-white/35 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-[23px]">
                      {univ.short}
                    </span>
                  </div>

                  {/* NAAC BADGE */}
                  {/* <div className="pointer-events-none absolute left-2.5 top-2.5 z-20">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-0.5 text-[9px] font-extrabold text-[#0C337B] shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1765F5]" />
                      NAAC {univ.grade}
                    </span>
                  </div> */}

                  {/* DEPTH VIGNETTE */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent"
                  />

                  {/* UNIVERSITY INFORMATION */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 pt-6">
                    {/* <p className="mb-0.5 line-clamp-1 text-[9px] font-bold uppercase tracking-wider text-[#93C5FD]">
                      {univ.tier}
                    </p> */}

                    <h3 className="line-clamp-1 text-[12px] font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-[13px]">
                      {univ.name}
                    </h3>

                    <p className="mt-0.5 line-clamp-1 text-[9px] font-medium text-white/70">
                      {univ.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
