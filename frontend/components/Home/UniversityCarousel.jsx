"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

/* ==========================================
   COUNTRIES DATA
========================================== */

const countries = [
  {
    name: "USA",
    fullName: "United States of America",
    image: "/images/countries/new-york-usas.webp",
    flag: "us",
    featuredCity: "New York",
    cities: ["New York", "Boston", "Los Angeles", "San Francisco"],
    href: "/study-in-usa",
  },
  {
    name: "Canada",
    fullName: "Canada",
    image: "/images/countries/toronta-canadass.webp",
    flag: "ca",
    featuredCity: "Toronto",
    cities: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    href: "/study-in-canada",
  },
  // {
  //   name: "Europe",
  //   fullName: "Study in Europe",
  //   image: "/images/countries/amsterdam-europe.webp",
  //   flag: "eu",
  //   featuredCity: "Amsterdam",
  //   cities: ["Amsterdam", "Barcelona", "Milan", "Prague"],
  //   href: "/study-in-france",
  // },
  {
    name: "UK",
    fullName: "United Kingdom",
    image: "/images/countries/london-uk.webp",
    flag: "gb",
    featuredCity: "London",
    cities: ["London", "Manchester", "Edinburgh", "Birmingham"],
    href: "/study-in-uk",
  },
  {
    name: "Ireland",
    fullName: "Ireland",
    image: "/images/countries/dublin-ireland.webp",
    flag: "ie",
    featuredCity: "Dublin",
    cities: ["Dublin", "Cork", "Galway", "Limerick"],
    href: "/study-in-ireland",
  },
  {
    name: "UAE",
    fullName: "United Arab Emirates",
    image: "/images/countries/dubai-uae.webp",
    flag: "ae",
    featuredCity: "Dubai",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    href: "/study-in-uae",
  },
  {
    name: "Germany",
    fullName: "Germany",
    image: "/images/countries/berlin-germany.webp",
    flag: "de",
    featuredCity: "Berlin",
    cities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    href: "/study-in-germany",
  },
  {
    name: "France",
    fullName: "France",
    image: "/images/countries/paris-france.webp",
    flag: "fr",
    featuredCity: "Paris",
    cities: ["Paris", "Lyon", "Toulouse", "Bordeaux"],
    href: "/study-in-france",
  },
  {
    name: "Russia",
    fullName: "Russia",
    image: "/images/countries/moscow-russia.webp",
    flag: "ru",
    featuredCity: "Moscow",
    cities: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
    href: "/study-in-russia",
  },
  {
    name: "Australia",
    fullName: "Australia",
    image: "/images/countries/sydney-australia.webp",
    flag: "au",
    featuredCity: "Sydney",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    href: "/study-in-australia",
  },
  {
    name: "New Zealand",
    fullName: "New Zealand",
    image: "/images/countries/auckland-new-zealand.webp",
    flag: "nz",
    featuredCity: "Auckland",
    cities: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
    href: "/contact",
  },
  {
    name: "Singapore",
    fullName: "Singapore",
    image: "/images/countries/marina-bay-singapore.webp",
    flag: "sg",
    featuredCity: "Singapore",
    cities: ["Clementi", "Queenstown", "Jurong", "Bras Basah"],
    href: "/contact",
  },
  {
    name: "Japan",
    fullName: "Japan",
    image: "/images/countries/tokyo-japan.webp",
    flag: "jp",
    featuredCity: "Tokyo",
    cities: ["Tokyo", "Osaka", "Kyoto", "Fukuoka"],
    href: "/contact",
  },
];

/* ==========================================
   CAROUSEL MATH (no library)

   How it works
   ------------
   `pos` is a plain number: the (fractional) index of the card that is
   currently in the centre. Every card i has a signed distance from the
   centre on the circle:

       d = wrap(i - pos)            // always in [-n/2, n/2]

   From |d| we compute, with plain functions, everything about the card:
   its scale, its x position, its stacking order and whether it is
   visible. There is no cloning of slides, no loop mode and no hidden
   internal state, so a card can never "go missing": at ANY value of
   `pos` every card is placed by the same formula.

   Depth: the old coverflow used `depth` + perspective. For rotate = 0
   that is exactly a scale-down, so the depth is applied here as
   scale = base-scale * PERSPECTIVE / (PERSPECTIVE + DEPTH * |d|).
   Same look, but without a 3D rendering context, which is what the
   Bing / Firefox tile glitches were coming from.
========================================== */

const N = countries.length;

const PERSPECTIVE = 1200; // px, same idea as the old coverflow
const DEPTH = 180; // px, same as the old coverflow `depth`
const SCALE_DROP = 0.12; // each step away from centre = 12% smaller
const MIN_SCALE = 0.55; // never smaller than this (before depth)
const MAX_STEP = Math.ceil(N / 2) + 1; // furthest distance we ever compute
const MAX_JUMP = 3; // most cards a single swipe may travel
const SWIPE_THRESHOLD = 6; // px before a press becomes a drag

/* [min container width, visible slides, gap] — same table as before */
const BREAKPOINTS = [
  [1536, 4.5, 18],
  [1280, 4.2, 15],
  [1024, 3.5, 12],
  [768, 2.8, 16],
  [640, 2.2, 16],
  [480, 1.6, 16],
  [0, 1.2, 15],
];

const mod = (a, n) => ((a % n) + n) % n;

/* signed shortest distance on the circle, result in [-N/2, N/2] */
const wrap = (x) => {
  const m = mod(x, N);
  return m > N / 2 ? m - N : m;
};

/* total apparent scale of a card that is `a` steps from the centre */
const scaleAt = (a) => {
  const base = Math.max(1 - SCALE_DROP * a, MIN_SCALE);
  return (base * PERSPECTIVE) / (PERSPECTIVE + DEPTH * a);
};

/* apparent x distance from the centre for whole steps 0..MAX_STEP */
const buildOffsets = (cardWidth, gap) => {
  const xs = [0];
  for (let a = 1; a <= MAX_STEP; a += 1) {
    xs[a] =
      xs[a - 1] +
      (cardWidth * scaleAt(a - 1)) / 2 +
      gap +
      (cardWidth * scaleAt(a)) / 2;
  }
  return xs;
};

/* same, but for a fractional distance (linear between whole steps) */
const offsetAt = (xs, a) => {
  const last = xs.length - 1;
  if (a >= last) return xs[last] + (a - last) * (xs[last] - xs[last - 1]);
  const lo = Math.floor(a);
  return xs[lo] + (xs[lo + 1] - xs[lo]) * (a - lo);
};

const getLayoutFor = (containerWidth) => {
  const row = BREAKPOINTS.find(([min]) => containerWidth >= min);
  const [, perView, gap] = row;
  const cardWidth = (containerWidth - gap * (perView - 1)) / perView;
  const xs = buildOffsets(cardWidth, gap);

  /* first distance where a card is completely outside the container */
  let visibleSteps = MAX_STEP;
  for (let a = 1; a <= MAX_STEP; a += 1) {
    if (xs[a] - (cardWidth * scaleAt(a)) / 2 > containerWidth / 2) {
      visibleSteps = a;
      break;
    }
  }
  /* never show the same card on both sides of the circle */
  visibleSteps = Math.min(visibleSteps, Math.floor((N - 1) / 2));

  return { cardWidth, xs, visibleSteps };
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/* useLayoutEffect on the client, useEffect on the server (no warning) */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ==========================================
   COUNTRY CARD

   Rendering-safe rules (keep them, they prevent white tiles / lines):
   - solid colours only, no SVG shapes, no gradients on the panel
   - no mask-image, no backdrop-blur, no image zoom on hover
   - no animated opacity / shadow on the card
   - images load eagerly so a card never slides in with an empty photo
========================================== */

function CountryCard({ country, index, focusable }) {
  return (
    <article className="relative flex h-full w-full min-w-0 flex-col rounded-[22px] bg-[#0B50CF] shadow-[0_12px_30px_rgba(12,51,123,0.18)] sm:rounded-[25px]">
      {/* PHOTO */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-t-[22px] bg-[#A2C1FB] sm:rounded-t-[25px]">
        <Image
          src={country.image}
          alt={`${country.fullName} - ${country.featuredCity}`}
          fill
          draggable={false}
          loading="eager"
          priority={index < 3}
          sizes="(max-width: 479px) 85vw, (max-width: 767px) 60vw, (max-width: 1023px) 45vw, 30vw"
          className="object-cover object-center"
        />

        {/* FLAG - LEFT */}
        <div className="absolute left-4 top-4 z-10 inline-flex h-9 w-[60px] items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={`/images/flags/${country.flag}.png`}
            alt={`${country.name} flag`}
            width={60}
            height={36}
            draggable={false}
            loading="eager"
            className="h-full w-full object-contain"
          />
        </div>

        {/* COUNTRY NAME - RIGHT */}
        <div className="absolute right-4 top-4 z-10 rounded-lg bg-white px-3 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          <p className="text-[13px] font-bold leading-none text-[#0B50CF] sm:text-[14px]">
            {country.name}
          </p>
        </div>
      </div>

      {/* BLUE PANEL */}
      <div className="relative z-10 -mt-5 shrink-0 rounded-[22px] bg-[#0B50CF] px-4 pb-4 pt-4 sm:-mt-6 sm:rounded-[25px] sm:px-5 sm:pb-5 sm:pt-5">
        <p className="mb-2 text-[14px] font-bold text-white sm:text-[15px]">
          {country.name === "Singapore"
            ? "Popular Education Areas"
            : "Popular Cities"}
        </p>

        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          {country.cities.map((city) => (
            <span
              key={city}
              className="truncate rounded-full bg-[#F2F7FF] px-2 py-2 text-center text-[12px] font-bold leading-[1.2] text-[#0B50CF] sm:text-[13px]"
            >
              {city}
            </span>
          ))}
        </div>

        <Link
          href={country.href}
          draggable={false}
          tabIndex={focusable ? 0 : -1}
          aria-label={`Explore studying in ${country.fullName}`}
          className="group/btn relative mt-3 flex items-center justify-center rounded-full border-2 border-white bg-white py-[9px] pl-4 pr-14 text-[15px] font-bold text-[#0B50CF] transition-colors duration-300 hover:bg-[#2F77F5] hover:text-white sm:text-[16px]"
        >
          <span>Explore {country.name}</span>

          <span className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B50CF] text-white transition-colors duration-300 group-hover/btn:bg-white group-hover/btn:text-[#0B50CF]">
            <ArrowRight size={19} strokeWidth={2.4} />
          </span>
        </Link>
      </div>
    </article>
  );
}

/* ==========================================
   CAROUSEL
========================================== */

export default function CountriesCarousel() {
  const stageRef = useRef(null);
  const slideRefs = useRef([]);

  /* all mutable animation state lives here, never in React state, so
     moving the cards does not re-render the component every frame */
  const engine = useRef({
    pos: 0, // fractional index of the centred card
    target: 0, // integer index we are animating to
    raf: 0,
    cardWidth: 0,
    xs: [0, 0],
    visibleSteps: 3,
    drag: null,
    suppressClick: false,
  });

  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  /* ---------- place every card for the current `pos` ---------- */
  const paint = useCallback(() => {
    const e = engine.current;
    for (let i = 0; i < N; i += 1) {
      const el = slideRefs.current[i];
      if (!el) continue;

      const d = wrap(i - e.pos);
      const a = Math.abs(d);

      /* every card is always positioned by the same formula; cards that
         are completely outside the container are only hidden, never
         left at a stale position */
      const x = Math.sign(d) * offsetAt(e.xs, a);
      const k = scaleAt(a);

      el.style.visibility = a > e.visibleSteps ? "hidden" : "visible";
      /* only used to order the cards against each other; the section is
         `isolate`d, so these numbers can never rise above the navbar */
      el.style.zIndex = String(10 - Math.round(a));
      el.style.transform = `translate3d(${x.toFixed(2)}px,0,0) scale(${k.toFixed(4)})`;
    }
  }, []);

  /* ---------- measure the container, size the cards ---------- */
  const layout = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const width = stage.clientWidth;
    if (!width) return;

    const e = engine.current;
    const next = getLayoutFor(width);
    e.cardWidth = next.cardWidth;
    e.xs = next.xs;
    e.visibleSteps = next.visibleSteps;

    for (let i = 0; i < N; i += 1) {
      const el = slideRefs.current[i];
      if (!el) continue;
      el.style.width = `${next.cardWidth}px`;
      el.style.marginLeft = `${-next.cardWidth / 2}px`;
    }
    paint();
  }, [paint]);

  useIsoLayoutEffect(() => {
    layout();
    setReady(true);

    const stage = stageRef.current;
    let observer;
    if (stage && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(layout);
      observer.observe(stage);
    }
    window.addEventListener("resize", layout);
    window.addEventListener("pageshow", layout);

    const e = engine.current;
    return () => {
      cancelAnimationFrame(e.raf);
      if (observer) observer.disconnect();
      window.removeEventListener("resize", layout);
      window.removeEventListener("pageshow", layout);
    };
  }, [layout]);

  /* ---------- animate `pos` to an integer target ---------- */
  const animateTo = useCallback(
    (target) => {
      const e = engine.current;
      cancelAnimationFrame(e.raf);

      e.target = target;
      setActive(mod(Math.round(target), N));

      const from = e.pos;
      const distance = Math.abs(target - from);
      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (distance < 0.001 || reduceMotion) {
        e.pos = target;
        paint();
        return;
      }

      const duration = 450 + 110 * Math.min(distance, MAX_JUMP);
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        e.pos = from + (target - from) * easeOutCubic(t);
        paint();
        if (t < 1) {
          e.raf = requestAnimationFrame(tick);
        } else {
          e.pos = target;
          paint();
        }
      };
      e.raf = requestAnimationFrame(tick);
    },
    [paint]
  );

  const go = useCallback(
    (delta) => {
      const e = engine.current;
      animateTo(Math.round(e.target) + delta);
    },
    [animateTo]
  );

  const goToIndex = useCallback(
    (index) => {
      const e = engine.current;
      const current = Math.round(e.target);
      animateTo(current + wrap(index - current));
    },
    [animateTo]
  );

  /* ---------- drag / swipe (pointer events: mouse, touch, pen) ---------- */
  const onPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const e = engine.current;
    cancelAnimationFrame(e.raf);
    e.suppressClick = false;
    e.drag = {
      id: event.pointerId,
      startX: event.clientX,
      startPos: e.pos,
      lastX: event.clientX,
      lastT: event.timeStamp,
      velocity: 0, // px per ms
      moved: false,
    };
  };

  const onPointerMove = (event) => {
    const e = engine.current;
    const drag = e.drag;
    if (!drag || drag.id !== event.pointerId) return;

    const dx = event.clientX - drag.startX;

    if (!drag.moved) {
      if (Math.abs(dx) < SWIPE_THRESHOLD) return;
      drag.moved = true;
      try {
        stageRef.current.setPointerCapture(event.pointerId);
      } catch (err) {
        /* pointer already gone, ignore */
      }
    }

    const dt = Math.max(1, event.timeStamp - drag.lastT);
    drag.velocity = drag.velocity * 0.7 + ((event.clientX - drag.lastX) / dt) * 0.3;
    drag.lastX = event.clientX;
    drag.lastT = event.timeStamp;

    /* one neighbour distance of finger travel = one card */
    const unit = e.xs[1] || 1;
    e.pos = drag.startPos - dx / unit;
    paint();
  };

  const finishDrag = (event, cancelled) => {
    const e = engine.current;
    const drag = e.drag;
    if (!drag || drag.id !== event.pointerId) return;
    e.drag = null;

    if (!drag.moved) return; // it was a click, let the click go through

    e.suppressClick = true;
    window.setTimeout(() => {
      e.suppressClick = false;
    }, 60);

    try {
      stageRef.current.releasePointerCapture(event.pointerId);
    } catch (err) {
      /* ignore */
    }

    const unit = e.xs[1] || 1;
    const flick = cancelled ? 0 : (drag.velocity * 220) / unit;
    const base = Math.round(drag.startPos);
    let target = Math.round(e.pos - flick);
    target = Math.max(base - MAX_JUMP, Math.min(base + MAX_JUMP, target));
    animateTo(target);
  };

  /* a drag must never open a link; clicking a side card centres it */
  const onClickCapture = (event) => {
    const e = engine.current;
    if (e.suppressClick) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const slide = event.target.closest("[data-index]");
    if (!slide) return;
    const index = Number(slide.dataset.index);
    if (index !== mod(Math.round(e.target), N)) {
      event.preventDefault();
      event.stopPropagation();
      goToIndex(index);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  return (
    <section
      aria-labelledby="countries-carousel-title"
      className="relative isolate z-0 w-full select-none overflow-hidden bg-[#F8FAFF] py-10 sm:py-12 lg:py-14"
    >
      {/* HEADER */}
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-5 lg:px-8">
        <div className="relative mb-6 flex flex-col items-center gap-5 lg:mb-8">
          <div className="mx-auto w-full max-w-[850px] text-center">
            <div className="mx-auto w-full max-w-[800px]">
              <h2
                id="countries-carousel-title"
                className="text-center text-[28px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#1765F5] sm:text-[35px] lg:text-[44px]"
              >
                The World Is{" "}
                <span className="text-[#0C337B]">Your Campus..</span>
              </h2>

              <p className="mx-auto mt-3 max-w-[750px] text-center text-[12px] leading-[1.65] text-[#526B8C] sm:text-[13px] lg:text-[14px]">
                Explore study opportunities across 40+ countries and leading
                universities worldwide. From choosing the right destination to
                finding programmes that match your goals, discover a world of
                possibilities for your academic and professional future.
              </p>
            </div>
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="flex items-center justify-center gap-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous country"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] shadow-sm transition-colors duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next country"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] shadow-sm transition-colors duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* STAGE: cards are absolutely placed around the centre line */}
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Study destinations"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => finishDrag(event, false)}
        onPointerCancel={(event) => finishDrag(event, true)}
        onClickCapture={onClickCapture}
        onDragStart={(event) => event.preventDefault()}
        style={{ visibility: ready ? "visible" : "hidden" }}
        className="relative mx-auto my-6 h-[490px] w-full cursor-grab touch-pan-y outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-[#1765F5] sm:h-[420px] lg:h-[530px]"
      >
        {countries.map((country, index) => (
          <div
            key={country.name}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            data-index={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${N}`}
            aria-hidden={index === active ? undefined : true}
            className="absolute left-1/2 top-0 h-full"
            style={{ visibility: "hidden" }}
          >
            <CountryCard
              country={country}
              index={index}
              focusable={index === active}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
