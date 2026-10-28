
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, GraduationCap } from "lucide-react";

/* ==========================================
   USA UNIVERSITIES DATA
========================================== */

const UNIVERSITIES = [
  {
    name: "Arizona State University",
    grade: "Arizona",
    image: "/images/universities/usa/arizona-state-university.webp",
  },
  {
    name: "University of Arizona",
    grade: "Arizona",
    image: "/images/universities/usa/university-of-arizona.webp",
  },
  // {
  //   name: "University of Illinois at Chicago",
  //   grade: "Illinois",
  //   image: "/images/universities/usa/university-of-illinois-chicago.webp",
  // },
  {
    name: "George Mason University",
    grade: "Virginia",
    image: "/images/universities/usa/george-mason-university.webp",
  },
  {
    name: "Northeastern University",
    grade: "Massachusetts",
    image: "/images/universities/usa/northeastern-university.webp",
  },
  {
    name: "Illinois State University",
    grade: "Illinois",
    image: "/images/universities/usa/illinois-state-university.webp",
  },
  {
    name: "University of South Florida",
    grade: "Florida",
    image: "/images/universities/usa/university-of-south-florida.webp",
  },
  {
    name: "University of Dayton",
    grade: "Ohio",
    image: "/images/universities/usa/university-of-dayton.webp",
  },
  {
    name: "Pace University",
    grade: "New York",
    image: "/images/universities/usa/pace-university.webp",
  },
  {
    name: "Saint Louis University",
    grade: "Missouri",
    image: "/images/universities/usa/saint-louis-university.webp",
  },
  {
    name: "University of New Haven",
    grade: "Connecticut",
    image: "/images/universities/usa/university-of-new-haven.webp",
  },
  {
    name: "Drexel University",
    grade: "Pennsylvania",
    image: "/images/universities/usa/drexel-university.webp",
  },
  {
    name: "New York Institute of Technology",
    grade: "New York",
    image: "/images/universities/usa/new-york-institute-of-technology.webp",
  },
  {
    name: "Florida International University",
    grade: "Florida",
    image: "/images/universities/usa/florida-international-university.webp",
  },
];

const TOTAL = UNIVERSITIES.length;
const AUTOPLAY_DELAY = 4500;
const SCROLL_PAUSE = 2500;
const START_INDEX = 3;

/* ==========================================
   3D CAROUSEL HELPERS
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
   UNIVERSITY IMAGE
   SHOWS FALLBACK IF IMAGE IS MISSING
========================================== */

function UniversityImage({ university, priority = false }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0C337B]">

      {!imageError ? (
        <Image
          src={university.image}
          alt={university.name}
          fill
          priority={priority}
          draggable={false}
          sizes="(max-width: 640px) 160px, 220px"
          className="pointer-events-none select-none object-cover object-center"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1765F5] via-[#0C337B] to-[#061D42] px-4 text-center">

          <GraduationCap
            size={42}
            strokeWidth={1.5}
            className="text-white/75"
          />

          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
            {university.grade}
          </span>

        </div>
      )}

    </div>
  );
}

/* ==========================================
   MAIN UNIVERSITY CAROUSEL
========================================== */

export default function UniversityCarousel() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const autoplayRef = useRef(null);
  const scrollResumeRef = useRef(null);
  const suppressTimerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(START_INDEX);
  const [containerWidth, setContainerWidth] = useState(1300);
  const [isDragging, setIsDragging] = useState(false);

  const currentRef = useRef(START_INDEX);
  const targetRef = useRef(START_INDEX);

  const visibleRef = useRef(false);
  const hoveringRef = useRef(false);
  const scrollingRef = useRef(false);
  const interactingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const reduceMotionRef = useRef(false);

  const dragRef = useRef({
    active: false,
    horizontal: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startIndex: START_INDEX,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  /* ==========================================
     REDUCED MOTION SUPPORT
  ========================================== */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      reduceMotionRef.current = media.matches;
    };

    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  /* ==========================================
     CAROUSEL NAVIGATION
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
     RESPONSIVE RESIZE OBSERVER
  ========================================== */

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const updateWidth = () => {
      setContainerWidth(element.clientWidth);
    };

    updateWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateWidth);

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     SECTION VISIBILITY
  ========================================== */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      visibleRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;

        if (!entry.isIntersecting) {
          scrollingRef.current = false;
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     PAUSE AUTOPLAY DURING PAGE SCROLL
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
     AUTOPLAY
  ========================================== */

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (
        !visibleRef.current ||
        hoveringRef.current ||
        scrollingRef.current ||
        interactingRef.current ||
        dragRef.current.active ||
        reduceMotionRef.current ||
        document.hidden
      ) {
        return;
      }

      const difference = Math.abs(
        targetRef.current - currentRef.current
      );

      if (difference > 0.025) {
        return;
      }

      moveTo(Math.round(targetRef.current) + 1);
    }, AUTOPLAY_DELAY);

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, [moveTo]);

  /* ==========================================
     SMOOTH ANIMATION
  ========================================== */

  useEffect(() => {
    let running = true;

    const animate = () => {
      if (!running) return;

      const target = targetRef.current;
      const current = currentRef.current;
      const difference = target - current;

      if (Math.abs(difference) > 0.002) {
        if (reduceMotionRef.current) {
          currentRef.current = target;
          setCurrentIndex(target);
        } else {
          const easing = dragRef.current.horizontal
            ? 0.42
            : 0.15;

          const next = current + difference * easing;

          currentRef.current = next;
          setCurrentIndex(next);
        }
      } else if (current !== target) {
        currentRef.current = target;
        setCurrentIndex(target);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  /* ==========================================
     RESPONSIVE CARD DIMENSIONS
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
     3D ARC SPACING
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
     POINTER DRAG START
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

  /* ==========================================
     POINTER DRAG MOVE
  ========================================== */

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

      // Let vertical page scrolling work normally.
      if (Math.abs(dy) > Math.abs(dx)) {
        drag.active = false;
        interactingRef.current = false;
        return;
      }

      drag.horizontal = true;
      setIsDragging(true);
      suppressClickRef.current = true;

      try {
        event.currentTarget.setPointerCapture(
          event.pointerId
        );
      } catch {
        // Pointer capture fallback.
      }
    }

    const now = performance.now();
    const elapsed = Math.max(
      1,
      now - drag.lastTime
    );

    drag.velocity =
      (event.clientX - drag.lastX) / elapsed;

    drag.lastX = event.clientX;
    drag.lastTime = now;

    const distancePerCard = isMobile ? 125 : 185;

    moveTo(
      drag.startIndex - dx / distancePerCard
    );
  };

  /* ==========================================
     POINTER DRAG END
  ========================================== */

  const handlePointerEnd = (event) => {
    const drag = dragRef.current;

    if (
      !drag.active ||
      drag.pointerId !== event.pointerId
    ) {
      setIsDragging(false);
      interactingRef.current = false;
      return;
    }

    if (drag.horizontal) {
      const movement =
        event.clientX - drag.startX;

      const swipeDirection =
        movement === 0
          ? 0
          : -Math.sign(movement);

      const distancePerCard = isMobile ? 125 : 185;
      const travelled =
        Math.abs(movement) / distancePerCard;

      let snapped = Math.round(
        targetRef.current
      );

      if (
        travelled > 0.18 &&
        travelled < 0.5
      ) {
        snapped =
          Math.round(drag.startIndex) +
          swipeDirection;
      }

      if (Math.abs(drag.velocity) > 0.8) {
        snapped += -Math.sign(drag.velocity);
      }

      moveTo(snapped);

      if (suppressTimerRef.current) {
        clearTimeout(suppressTimerRef.current);
      }

      suppressTimerRef.current = setTimeout(() => {
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
        event.currentTarget.hasPointerCapture(
          event.pointerId
        )
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
     CLICK TO CENTER UNIVERSITY
  ========================================== */

  const handleCardClick = (index) => {
    if (
      suppressClickRef.current ||
      dragRef.current.active
    ) {
      return;
    }

    const target = Math.round(
      targetRef.current
    );

    const delta = getWrappedDelta(
      index,
      target
    );

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
     CLEANUP
  ========================================== */

  useEffect(() => {
    return () => {
      if (suppressTimerRef.current) {
        clearTimeout(suppressTimerRef.current);
      }
    };
  }, []);

  /* ==========================================
     MAIN RENDER
  ========================================== */

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="USA Universities Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
      className="relative w-full select-none overflow-hidden bg-[#F4F7FA] py-7 outline-none sm:py-9 md:py-11"
    >

      {/* BACKGROUND DECORATIONS */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 h-[320px] w-[320px] rounded-full bg-[#1765F5]/[0.06] blur-[90px]" />

      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[340px] w-[340px] rounded-full bg-[#0C337B]/[0.05] blur-[100px]" />

      {/* =====================================
          SECTION HEADING
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-[850px] px-3.5 text-center sm:px-5">

        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1765F5] sm:text-[12px]">
          Universities in USA
        </p>

        <h2 className="text-[28px] font-bold leading-[1.1] tracking-[-0.035em] text-[#0C337B] sm:text-[36px] md:text-[42px] lg:text-[46px]">
          Where Could You Go{" "}
          <span className="text-[#1765F5]">
            Next !!
          </span>
        </h2>

      </div>

      {/* =====================================
          3D ARC CAROUSEL
      ===================================== */}

      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        className={`relative mt-4 flex h-[320px] w-full items-center justify-center overflow-hidden sm:mt-6 sm:h-[380px] md:h-[430px] lg:h-[460px] ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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

        {/* LEFT FADE */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-40 w-12 bg-gradient-to-r from-[#F4F7FA] to-transparent sm:w-20" />

        {/* RIGHT FADE */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-40 w-12 bg-gradient-to-l from-[#F4F7FA] to-transparent sm:w-20" />

        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous university"
          className="absolute left-2 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#0C337B] shadow-md transition-all duration-200 hover:scale-110 hover:bg-[#1765F5] hover:text-white sm:left-4 sm:h-11 sm:w-11"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        {/* NEXT BUTTON */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next university"
          className="absolute right-2 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#0C337B] shadow-md transition-all duration-200 hover:scale-110 hover:bg-[#1765F5] hover:text-white sm:right-4 sm:h-11 sm:w-11"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>

        {/* =====================================
            3D UNIVERSITY TRACK
        ===================================== */}

        <div className="relative flex h-full w-full items-center justify-center" style={{ transformStyle: "preserve-3d" }}>

          {UNIVERSITIES.map((university, index) => {
            const delta = getWrappedDelta(
              index,
              currentIndex
            );

            if (Math.abs(delta) > 3.8) {
              return null;
            }

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
                    1 - Math.pow(absDelta - 2.8, 1.6)
                  );

            return (
              <div
                key={university.name}
                onClick={() => handleCardClick(index)}
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
                <div className="group relative h-full w-full overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(12,51,123,0.28)]">

                  {/* UNIVERSITY IMAGE */}
                  <UniversityImage
                    university={university}
                    priority={absDelta < 2}
                  />

                  {/* DARK OVERLAY */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />

                  {/* STATE BADGE */}
                  <div className="pointer-events-none absolute left-2.5 top-2.5 z-20 max-w-[calc(100%-20px)]">

                    <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-white/40 bg-white/95 px-2 py-1 text-[9px] font-extrabold text-[#0C337B] shadow-md">

                      <MapPin
                        size={12}
                        strokeWidth={2.3}
                        className="shrink-0 text-[#1765F5]"
                      />

                      <span className="truncate">
                        {university.grade}
                      </span>

                    </span>

                  </div>

                  {/* UNIVERSITY DETAILS */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 pt-7">

                    <h3 className="line-clamp-3 text-[12px] font-extrabold leading-[1.3] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-[13px]">
                      {university.name}
                    </h3>

                    <p className="mt-1 flex items-center gap-1 text-[9px] font-medium leading-snug text-white/80">
                      <MapPin
                        size={10}
                        strokeWidth={2}
                        className="shrink-0"
                      />

                      <span className="truncate">
                        {university.grade}, USA
                      </span>
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
