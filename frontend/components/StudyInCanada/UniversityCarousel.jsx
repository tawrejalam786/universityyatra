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
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
} from "lucide-react";


/* ---------- Canada ---------- */
const canadaCarousel = {
  eyebrow: "Universities in Canada",
  ariaLabel: "Canada Universities Showcase",
  items: [
    {
      name: "University of Ottawa",
      image: "/images/universities/canada/university-of-ottawas.webp",
      subtitle: "Ontario, Canada",
      pin: true,
    },
    {
      name: "Toronto Metropolitan University",
      image: "/images/universities/canada/toronto-metropolitan-university.webp",
      subtitle: "Toronto, Canada",
    },
    {
      name: "University of Saskatchewan",
      image: "/images/universities/canada/university-of-saskatchewan.webp",
      subtitle: "Saskatchewan, Canada",
    },
    {
      name: "Laurentian University",
      image: "/images/universities/canada/laurentian-university.webp",
      subtitle: "Ontario, Canada",
    },
    {
      name: "Trent University",
      image: "/images/universities/canada/trent-university.webp",
      subtitle: "Ontario, Canada",
    },
    {
      name: "University of Windsor",
      image: "/images/universities/canada/university-of-windsor.webp",
      subtitle: "Ontario, Canada",
    },
    {
      name: "York University",
      image: "/images/universities/canada/york-university.webp",
      subtitle: "Ontario, Canada",
    },
    {
      name: "Wilfrid Laurier University",
      image: "/images/universities/canada/wilfrid-laurier-university.webp",
      subtitle: "Ontario, Canada",
    },
    {
      name: "Carleton University",
      image: "/images/universities/canada/carleton-university.webp",
      subtitle: "Ontario, Canada",
    },
    {
      name: "Mohawk College",
      image: "/images/universities/canada/mohawk-college.webp",
      subtitle: "Ontario, Canada",
    },
    {
      name: "British Columbia Institute of Technology",
      image: "/images/universities/canada/british-columbia-institute-of-technology.webp",
      subtitle: "British Columbia, Canada",
    },
    {
      name: "Thompson Rivers University",
      image: "/images/universities/canada/thompson-rivers-university.webp",
      subtitle: "British Columbia, Canada",
    },
  ],
};

/* TEMPLATE FOR ANY OTHER COUNTRY
const ukCarousel = {
  eyebrow: "Universities in UK",
  ariaLabel: "UK Universities Showcase",
  items: [
    { name: "University of Example", image: "/images/universities/uk/example.webp", subtitle: "London, UK", pin: true },
    // ... at least 8 items
  ],
};
*/

const PRESETS = {
  usa: canadaCarousel,
};

const AUTOPLAY_DELAY = 4500;
const SCROLL_PAUSE = 2500;

const DEFAULT_THEME = {
  accent: "#1765F5",
  dark: "#0C337B",
  bg: "#F4F7FA",
  hover: "#1765F5",
};

/* ==========================================
   ARC MATH (plain functions, no library)
========================================== */

function wrapDelta(index, position, total) {
  let delta = index - position;

  delta = ((delta % total) + total) % total;

  if (delta > total / 2) {
    delta -= total;
  }

  return delta;
}

/* cards grow the further they are from the centre (same as before) */
function getScale(absDelta) {
  return 1 + Math.pow(absDelta, 1.35) * 0.16;
}

function getOpacity(absDelta) {
  if (absDelta <= 2.8) return 1;
  return Math.max(0, 1 - Math.pow(absDelta - 2.8, 1.6));
}

/* sizes and x positions for one container size */
function getGeometry(width, height) {
  const isMobile = width < 640;

  const factor = isMobile
    ? 1
    : Math.max(0.72, Math.min(1, width / 1400));

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
    width,
    height,
    cardW,
    cardH,
    xTable,
    isMobile,
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

/* size helper: every number inside a card scales with --k, exactly
   like the old transform: scale() did, but without a transform */
const k = (px) => `calc(var(--k) * ${px}px)`;

/* ==========================================
   CARD IMAGE (fallback if the file is missing)
========================================== */

function CardImage({ item, dark }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: dark }}
    >
      {!failed ? (
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading="eager"
          draggable={false}
          sizes="(max-width: 640px) 160px, 260px"
          className="pointer-events-none select-none object-cover object-center"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center text-center"
          style={{ gap: k(12), padding: `0 ${k(16)}` }}
        >
          <GraduationCap
            size={42}
            strokeWidth={1.5}
            className="text-white/75"
            style={{ width: k(42), height: k(42) }}
          />

          <span
            className="font-bold uppercase text-white/80"
            style={{ fontSize: k(10), letterSpacing: "0.12em" }}
          >
            {item.subtitle || item.name}
          </span>
        </div>
      )}
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function UniversityCarousel({
  country = "usa",
  items: itemsProp,
  eyebrow: eyebrowProp,
  heading = "Where Could You Go",
  highlight = "Next !!",
  ariaLabel: ariaLabelProp,
  theme: themeProp,
}) {
  const preset = PRESETS[country] || PRESETS.usa;

  const items =
    Array.isArray(itemsProp) && itemsProp.length > 0
      ? itemsProp
      : preset.items;
  const eyebrow = eyebrowProp ?? preset.eyebrow;
  const ariaLabel =
    ariaLabelProp ?? preset.ariaLabel ?? "Universities showcase";
  const theme = { ...DEFAULT_THEME, ...preset.theme, ...themeProp };
  const total = items.length;
  const startIndex = Math.min(3, total - 1);

  /* never show the same card on both sides of the circle */
  const visibleRange = Math.min(3.8, total / 2);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const geometryRef = useRef(null);

  const animationRef = useRef(null);
  const autoplayRef = useRef(null);
  const scrollResumeRef = useRef(null);
  const suppressTimerRef = useRef(null);

  const [size, setSize] = useState({ width: 1300, height: 460 });
  const [measured, setMeasured] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const currentRef = useRef(startIndex);
  const targetRef = useRef(startIndex);

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
    startIndex,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  const geometry = useMemo(
    () => getGeometry(size.width, size.height),
    [size.width, size.height]
  );

  /* ==========================================
     PLACE EVERY CARD FOR THE CURRENT POSITION
     (plain layout values, whole pixels, no transform)
  ========================================== */

  const paint = useCallback(() => {
    const geo = geometryRef.current;

    if (!geo) return;

    const position = currentRef.current;

    for (let i = 0; i < total; i++) {
      const element = cardRefs.current[i];

      if (!element) continue;

      const delta = wrapDelta(i, position, total);
      const absDelta = Math.abs(delta);

      if (absDelta > visibleRange) {
        element.style.visibility = "hidden";
        continue;
      }

      const scale = getScale(absDelta);
      const width = Math.round(geo.cardW * scale);
      const height = Math.round(geo.cardH * scale);
      const x = getXPos(geo.xTable, delta);

      const style = element.style;

      style.width = `${width}px`;
      style.height = `${height}px`;
      style.left = `${Math.round(geo.width / 2 + x - width / 2)}px`;
      style.top = `${Math.round((geo.height - height) / 2)}px`;
      style.zIndex = String(Math.round(10 + absDelta));
      style.setProperty("--k", scale.toFixed(3));

      const opacity = getOpacity(absDelta);

      /* opacity 1 is removed completely, so a fully visible card is
         never an offscreen group */
      style.opacity = opacity >= 1 ? "" : opacity.toFixed(3);
      style.visibility = "visible";
    }
  }, [total, visibleRange]);

  /* ==========================================
     REDUCED MOTION
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
     NAVIGATION
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
      const height = element.clientHeight;

      if (width && height) {
        setSize((previous) =>
          previous.width === width && previous.height === height
            ? previous
            : { width, height }
        );
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

    return () => observer.disconnect();
  }, []);

  /* size changed: place all cards again before the browser paints */
  useIsoLayoutEffect(() => {
    geometryRef.current = geometry;
    paint();
  }, [geometry, paint]);

  /* ==========================================
     AUTOPLAY ONLY WHILE THE SECTION IS VISIBLE
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
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     PAUSE AUTOPLAY WHILE THE PAGE SCROLLS
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

      /* wait until the current move has finished */
      if (
        Math.abs(targetRef.current - currentRef.current) > 0.025
      ) {
        return;
      }

      moveTo(Math.round(targetRef.current) + 1);
    }, AUTOPLAY_DELAY);

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, [moveTo]);

  /* ==========================================
     ANIMATION LOOP
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
        } else {
          const easing = dragRef.current.horizontal ? 0.42 : 0.15;

          currentRef.current = current + difference * easing;
        }

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

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [paint]);

  /* ==========================================
     POINTER DRAG
  ========================================== */

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    if (event.target.closest("button, a, input, textarea, select")) {
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

      /* let vertical page scrolling work normally */
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
        /* continue without pointer capture */
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
      setIsDragging(false);
      interactingRef.current = false;
      return;
    }

    if (drag.horizontal) {
      const movement = event.clientX - drag.startX;
      const swipeDirection = movement === 0 ? 0 : -Math.sign(movement);
      const travelled = Math.abs(movement) / geometry.distancePerCard;

      let snapped = Math.round(targetRef.current);

      if (travelled > 0.18 && travelled < 0.5) {
        snapped = Math.round(drag.startIndex) + swipeDirection;
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
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      /* nothing to release */
    }
  };

  /* click a card to bring it to the centre */
  const handleCardClick = (index) => {
    if (suppressClickRef.current || dragRef.current.active) {
      return;
    }

    const target = Math.round(targetRef.current);

    moveTo(target + wrapDelta(index, target, total));
  };

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

  useEffect(() => {
    return () => {
      if (suppressTimerRef.current) {
        clearTimeout(suppressTimerRef.current);
      }
    };
  }, []);

  /* ==========================================
     RENDER
  ========================================== */

  const fade = (direction) =>
    `linear-gradient(${direction}, ${theme.bg}, ${theme.bg}00)`;

  const arrowClass =
    "absolute top-1/2 z-[100] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-md transition-colors duration-200 sm:h-11 sm:w-11";

  /* arrow hover colour without a library: swap colours with CSS vars */
  const arrowStyle = { color: theme.dark };
  const arrowHover = {
    onMouseEnter: (event) => {
      event.currentTarget.style.backgroundColor = theme.hover;
      event.currentTarget.style.color = "#ffffff";
    },
    onMouseLeave: (event) => {
      event.currentTarget.style.backgroundColor = "";
      event.currentTarget.style.color = theme.dark;
    },
  };

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
      className="relative isolate z-0 w-full select-none overflow-hidden py-7 outline-none sm:py-9 md:py-11"
      style={{ backgroundColor: theme.bg }}
    >
      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-[320px] w-[320px] rounded-full blur-[90px]"
        style={{ backgroundColor: `${theme.accent}0F` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[340px] w-[340px] rounded-full blur-[100px]"
        style={{ backgroundColor: `${theme.dark}0D` }}
      />

      {/* HEADING */}
      <div className="relative z-10 mx-auto max-w-[850px] px-3.5 text-center sm:px-5">
        {eyebrow ? (
          <p
            className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] sm:text-[12px]"
            style={{ color: theme.accent }}
          >
            {eyebrow}
          </p>
        ) : null}

        <h2
          className="text-[28px] font-bold leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[42px] lg:text-[46px]"
          style={{ color: theme.dark }}
        >
          {heading}{" "}
          <span style={{ color: theme.accent }}>{highlight}</span>
        </h2>
      </div>

      {/* STAGE */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        className={`relative mt-4 h-[320px] w-full overflow-hidden sm:mt-6 sm:h-[380px] md:h-[430px] lg:h-[460px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          touchAction: "pan-y",
          WebkitUserSelect: "none",
          userSelect: "none",
          visibility: measured ? "visible" : "hidden",
        }}
      >
        {/* EDGE FADES (plain overlays, no mask) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-[90] w-12 sm:w-20"
          style={{ background: fade("90deg") }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-[90] w-12 sm:w-20"
          style={{ background: fade("270deg") }}
        />

        {/* ARROWS */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous university"
          className={`${arrowClass} left-2 sm:left-4`}
          style={arrowStyle}
          {...arrowHover}
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next university"
          className={`${arrowClass} right-2 sm:right-4`}
          style={arrowStyle}
          {...arrowHover}
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>

        {/* CARDS */}
        {items.map((item, index) => (
          <div
            key={item.name}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            onClick={() => handleCardClick(index)}
            className="absolute cursor-grab overflow-hidden bg-slate-950 active:cursor-grabbing"
            style={{
              "--k": 1,
              visibility: "hidden",
              width: `${geometry.cardW}px`,
              height: `${geometry.cardH}px`,
              borderRadius: k(24),
              boxShadow: "0 16px 36px rgba(0,0,0,0.18)",
              userSelect: "none",
              touchAction: "pan-y",
            }}
          >
            <CardImage item={item} dark={theme.dark} />

            {/* DARK OVERLAY */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/35 to-black/10"
            />

            {/* TOP-LEFT BADGE (optional) */}
            {item.badge ? (
              <div
                className="pointer-events-none absolute z-20"
                style={{ left: k(10), top: k(10) }}
              >
                <span
                  className="inline-flex items-center rounded-full border border-white/40 bg-white font-extrabold shadow-md"
                  style={{
                    gap: k(4),
                    padding: `${k(4)} ${k(8)}`,
                    fontSize: k(9),
                    color: theme.dark,
                  }}
                >
                  <BadgeCheck
                    size={12}
                    strokeWidth={2.3}
                    style={{
                      width: k(12),
                      height: k(12),
                      color: theme.accent,
                    }}
                  />
                  {item.badge}
                </span>
              </div>
            ) : null}

            {/* NAME + SUBTITLE */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
              style={{
                padding: `${k(28)} ${k(12)} ${k(12)}`,
              }}
            >
              <h3
                className="line-clamp-3 font-extrabold text-white"
                style={{
                  fontSize: k(geometry.isMobile ? 12 : 13),
                  lineHeight: 1.3,
                  textShadow: "0 2px 6px rgba(0,0,0,0.9)",
                }}
              >
                {item.name}
              </h3>

              {item.subtitle ? (
                <p
                  className="flex items-center font-medium text-white/80"
                  style={{
                    marginTop: k(4),
                    gap: k(4),
                    fontSize: k(9),
                    lineHeight: 1.35,
                  }}
                >
                  {item.pin ? (
                    <MapPin
                      size={10}
                      strokeWidth={2}
                      className="shrink-0"
                      style={{ width: k(10), height: k(10) }}
                    />
                  ) : null}

                  <span className="truncate">{item.subtitle}</span>
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
