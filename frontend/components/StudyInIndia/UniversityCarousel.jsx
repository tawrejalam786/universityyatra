"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";

/* ==========================================
   STUDY IN INDIA - ORIGINAL UNIVERSITY DATA
   NAMES, IMAGES AND GRADES UNCHANGED
========================================== */

const UNIVERSITIES = [
  {
    name: "Chandigarh University",
    grade: "A+",
    image: "/images/universities/chandigarh-university.webp",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    grade: "A++",
    image: "/images/universities/amrita-university.webp",
  },
  {
    name: "Vivekananda Global University",
    grade: "A+",
    image: "/images/universities/vgu.webp",
  },
  {
    name: "Shoolini University",
    grade: "A+",
    image: "/images/universities/shoolini-university.webp",
  },
  {
    name: "Amity University",
    grade: "A+",
    image: "/images/universities/amity-university.webp",
  },
  {
    name: "Manipal University Jaipur",
    grade: "A+",
    image: "/images/universities/manipal-university-jaipur.webp",
  },
  {
    name: "University of Petroleum and Energy Studies (UPES)",
    grade: "A",
    image: "/images/universities/upes.webp",
  },
  {
    name: "Dr. D. Y. Patil University, Navi Mumbai",
    grade: "A++",
    image: "/images/universities/dy-patil-university.webp",
  },
  {
    name: "Galgotias University",
    grade: "A+",
    image: "/images/universities/galgotias-university.webp",
  },
  {
    name: "GLA University",
    grade: "A+",
    image: "/images/universities/gla-university.webp",
  },
  {
    name: "Lovely Professional University",
    grade: "A++",
    image: "/images/universities/lpu.webp",
  },
  {
    name: "Parul University",
    grade: "A++",
    image: "/images/universities/parul-university.webp",
  },
  {
    name: "Sharda University",
    grade: "A+",
    image: "/images/universities/sharda-university.webp",
  },
  {
    name: "Uttaranchal University",
    grade: "A+",
    image: "/images/universities/uttaranchal-university.webp",
  },
];

const TOTAL = UNIVERSITIES.length;
const START_INDEX = 3;

const AUTOPLAY_DELAY = 4500;
const SCROLL_PAUSE = 2500;

/* cards further than this from the centre are fully faded out */
const VISIBLE_RANGE = 3.8;

/* ==========================================
   3D ARC HELPERS

   Rendering-safe rules (keep them, they prevent white lines / tiles):
   - NO mask-image on the stage (the edge fades are plain overlays)
   - NO transform-style: preserve-3d and NO backface-visibility
     (cards never turn more than 38deg, so they never show their back)
   - NO transform on the <Image>, NO hover shadow animation
   - cards are never unmounted, only hidden, so an image can never
     appear late as an empty white card
   - cards are moved straight in the DOM, not through React state,
     so there is no re-render of every card on every frame
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

function getOpacity(absDelta) {
  if (absDelta <= 2.8) return 1;
  return Math.max(0, 1 - Math.pow(absDelta - 2.8, 1.6));
}

/* card size, spacing and x positions for a given container width */
function getGeometry(containerWidth) {
  const isMobile = containerWidth < 640;

  const factor = isMobile
    ? 1
    : Math.max(0.72, Math.min(1, containerWidth / 1400));

  const cardW = Math.round((isMobile ? 130 : 142) * factor);
  const cardH = Math.round((isMobile ? 210 : 230) * factor);
  const gap = Math.round((isMobile ? 20 : 30) * factor);

  const xTable = [0];

  for (let i = 1; i <= 6; i++) {
    xTable.push(
      xTable[i - 1] +
        (cardW * (getScale(i - 1) + getScale(i))) / 2 +
        gap
    );
  }

  return {
    cardW,
    cardH,
    xTable,
    distancePerCard: isMobile ? 125 : 185,
  };
}

function getXPos(xTable, delta) {
  const sign = Math.sign(delta);
  const abs = Math.abs(delta);

  const index = Math.floor(abs);
  const fraction = abs - index;

  if (index >= xTable.length - 1) {
    return (
      sign *
      (xTable[xTable.length - 1] +
        (abs - (xTable.length - 1)) * 300)
    );
  }

  return (
    sign *
    (xTable[index] +
      fraction * (xTable[index + 1] - xTable[index]))
  );
}

/* useLayoutEffect on the client, useEffect on the server (no warning) */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ==========================================
   MAIN UNIVERSITY CAROUSEL
========================================== */

export default function UniversityCarousel() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const geometryRef = useRef(null);

  const animationRef = useRef(null);
  const autoplayRef = useRef(null);
  const scrollResumeRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(1300);
  const [measured, setMeasured] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const currentRef = useRef(START_INDEX);
  const targetRef = useRef(START_INDEX);

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
    startIndex: START_INDEX,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  const geometry = useMemo(
    () => getGeometry(containerWidth),
    [containerWidth]
  );

  /* ==========================================
     PLACE EVERY CARD FOR THE CURRENT POSITION
  ========================================== */

  const paint = useCallback(() => {
    const geo = geometryRef.current;

    if (!geo) return;

    const position = currentRef.current;

    for (let i = 0; i < TOTAL; i++) {
      const element = cardRefs.current[i];

      if (!element) continue;

      const delta = getWrappedDelta(i, position);
      const absDelta = Math.abs(delta);

      const scale = getScale(absDelta);
      const rotY = getRotY(delta);
      const xPos = getXPos(geo.xTable, delta);
      const opacity = getOpacity(absDelta);

      element.style.transform = `translate(-50%, -50%) translateX(${xPos.toFixed(
        1
      )}px) scale(${scale.toFixed(3)}) rotateY(${rotY.toFixed(1)}deg)`;

      element.style.zIndex = String(Math.round(50 + absDelta * 10));

      /* opacity: 1 is removed completely so a fully visible card never
         becomes its own offscreen group */
      element.style.opacity =
        opacity >= 1 ? "" : opacity.toFixed(3);

      element.style.visibility =
        absDelta > VISIBLE_RANGE ? "hidden" : "visible";
    }
  }, []);

  /* ==========================================
     CHANGE CAROUSEL POSITION
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
     MEASURE CONTAINER (BEFORE FIRST PAINT)
  ========================================== */

  useIsoLayoutEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const update = () => {
      const width = element.clientWidth;

      if (width) {
        setContainerWidth(width);
        setMeasured(true);
      }
    };

    update();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);

      return () => {
        window.removeEventListener("resize", update);
      };
    }

    const observer = new ResizeObserver(update);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* geometry changed (resize): re-place all cards right away */
  useIsoLayoutEffect(() => {
    geometryRef.current = geometry;
    paint();
  }, [geometry, paint]);

  /* ==========================================
     RUN AUTOPLAY ONLY WHEN VISIBLE
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
          interactingRef.current = false;
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
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
     STABLE AUTO SLIDER
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

      // Do not move while an animation is running.
      if (
        Math.abs(targetRef.current - currentRef.current) > 0.025
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
     SMOOTH 3D CAROUSEL ANIMATION
  ========================================== */

  useEffect(() => {
    let running = true;

    const animate = () => {
      if (!running) return;

      const target = targetRef.current;
      const current = currentRef.current;
      const difference = target - current;

      if (Math.abs(difference) > 0.002) {
        const easing = dragRef.current.horizontal ? 0.42 : 0.15;

        currentRef.current = current + difference * easing;
        paint();
      } else if (current !== target) {
        currentRef.current = target;
        paint();
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
  }, [paint]);

  /* ==========================================
     POINTER / TOUCH DRAG
  ========================================== */

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    if (
      event.target.closest("button, a, input, textarea, select")
    ) {
      return;
    }

    dragRef.current = {
      active: true,
      horizontal: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startIndex: targetRef.current,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
    };

    interactingRef.current = true;
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;

    if (!drag.active || drag.pointerId !== event.pointerId) {
      return;
    }

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;

    if (!drag.horizontal) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) {
        return;
      }

      // Keep normal vertical scrolling functional.
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
        // Continue without pointer capture.
      }
    }

    const now = performance.now();
    const elapsed = Math.max(1, now - drag.lastTime);

    drag.velocity = (event.clientX - drag.lastX) / elapsed;

    drag.lastX = event.clientX;
    drag.lastTime = now;

    moveTo(drag.startIndex - dx / geometry.distancePerCard);
  };

  const handlePointerEnd = (event) => {
    const drag = dragRef.current;

    if (!drag.active || drag.pointerId !== event.pointerId) {
      return;
    }

    if (drag.horizontal) {
      const movement = event.clientX - drag.startX;

      const swipeDirection =
        movement === 0 ? 0 : -Math.sign(movement);

      const travelled =
        Math.abs(movement) / geometry.distancePerCard;

      let snapped = Math.round(targetRef.current);

      if (travelled > 0.18 && travelled < 0.5) {
        snapped = Math.round(drag.startIndex) + swipeDirection;
      }

      if (Math.abs(drag.velocity) > 0.8) {
        snapped += -Math.sign(drag.velocity);
      }

      moveTo(snapped);

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
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      // Safe fallback.
    }
  };

  /* ==========================================
     CLICK ANY CARD TO BRING IT TO CENTER
  ========================================== */

  const handleCardClick = (index) => {
    if (suppressClickRef.current || dragRef.current.active) {
      return;
    }

    const target = Math.round(targetRef.current);
    const delta = getWrappedDelta(index, target);

    moveTo(target + delta);
  };

  /* ==========================================
     KEYBOARD ARROW NAVIGATION
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
     MAIN RENDER
  ========================================== */

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Explore Universities"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
      className="relative isolate z-0 w-full select-none overflow-hidden bg-[#F4F7FA] py-7 outline-none sm:py-9 md:py-11"
    >
      {/* BACKGROUND DECORATIONS */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 h-[320px] w-[320px] rounded-full bg-[#18B8B5]/[0.06] blur-[90px]" />

      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[340px] w-[340px] rounded-full bg-[#063B72]/[0.05] blur-[100px]" />

      {/* =====================================
          HEADER - ORIGINAL INDIA CONTENT
          USA STYLE CENTERED PLACEMENT
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-[850px] px-3.5 text-center sm:px-5">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#085af9] sm:text-[12px]">
          Explore Universities
        </p>

        <h2 className="text-[28px] font-bold leading-[1.1] tracking-[-0.035em] text-[#063B72] sm:text-[36px] md:text-[42px] lg:text-[46px]">
          Where Could You Go{" "}
          <span className="text-[#085af9]">Next !!</span>
        </h2>
      </div>

      {/* =====================================
          USA STYLE 3D ARC SHOWCASE
      ===================================== */}

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
          touchAction: "pan-y",
          WebkitUserSelect: "none",
          userSelect: "none",
          visibility: measured ? "visible" : "hidden",
        }}
      >
        {/* LEFT EDGE FADE */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-[90] w-12 bg-gradient-to-r from-[#F4F7FA] to-[#F4F7FA]/0 sm:w-20" />

        {/* RIGHT EDGE FADE */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-[90] w-12 bg-gradient-to-l from-[#F4F7FA] to-[#F4F7FA]/0 sm:w-20" />

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous university"
          className="absolute left-2 top-1/2 z-[100] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#063B72] shadow-md transition-colors duration-200 hover:bg-[#18B8B5] hover:text-white sm:left-4 sm:h-11 sm:w-11"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next university"
          className="absolute right-2 top-1/2 z-[100] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#063B72] shadow-md transition-colors duration-200 hover:bg-[#18B8B5] hover:text-white sm:right-4 sm:h-11 sm:w-11"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>

        {/* =====================================
            3D CARDS TRACK
            perspective sits directly on the parent of the cards,
            so rotateY gets real depth without preserve-3d
        ===================================== */}

        <div
          className="relative h-full w-full"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          {UNIVERSITIES.map((university, index) => (
            <div
              key={university.name}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              onClick={() => handleCardClick(index)}
              className="absolute left-1/2 top-1/2 cursor-grab active:cursor-grabbing"
              style={{
                width: `${geometry.cardW}px`,
                height: `${geometry.cardH}px`,
                transformOrigin: "center center",
                userSelect: "none",
                touchAction: "pan-y",
              }}
            >
              {/* =====================================
                  UNIVERSITY IMAGE CARD
              ===================================== */}

              <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
                {/* ORIGINAL UNIVERSITY IMAGE */}
                <Image
                  src={university.image}
                  alt={university.name}
                  fill
                  draggable={false}
                  loading="eager"
                  sizes="(max-width: 640px) 160px, 220px"
                  className="pointer-events-none select-none object-cover object-center"
                />

                {/* IMAGE DEPTH OVERLAY */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />

                {/* =====================================
                    ORIGINAL NAAC GRADE
                ===================================== */}

                <div className="pointer-events-none absolute left-2.5 top-2.5 z-20">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-white px-2 py-1 text-[9px] font-extrabold text-[#063B72] shadow-md">
                    <BadgeCheck
                      size={12}
                      strokeWidth={2.3}
                      className="text-[#085af9]"
                    />
                    NAAC {university.grade}
                  </span>
                </div>

                {/* =====================================
                    ORIGINAL UNIVERSITY NAME
                    + ACCREDITATION
                ===================================== */}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 pt-7">
                  <h3 className="line-clamp-3 text-[12px] font-extrabold leading-[1.3] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-[13px]">
                    {university.name}
                  </h3>

                  <p className="mt-1 text-[9px] font-medium leading-snug text-white/80">
                    NAAC {university.grade} Accredited
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
