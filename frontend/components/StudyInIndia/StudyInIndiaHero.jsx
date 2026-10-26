"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, Home } from "lucide-react";

/* ==========================================
   DEFAULTS (Study in India) - override via props
========================================== */

const defaultBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Study in India" },
];

/*
  6 photos, in this order:
  0 = LEFT  tall      (portrait)
  1 = LEFT  top       (square)
  2 = LEFT  bottom    (square)
  3 = RIGHT top       (square)
  4 = RIGHT tall      (portrait)
  5 = RIGHT bottom    (square)
*/
const defaultPhotos = [
  { src: "/images/hero/campus.webp", alt: "Indian university campus building" },
  { src: "/images/hero/students.webp", alt: "Students studying together on campus" },
  { src: "/images/hero/library.webp", alt: "University library with students" },
  { src: "/images/hero/city.webp", alt: "Indian city street scene" },
  { src: "/images/hero/graduation.webp", alt: "Graduates celebrating with caps" },
  { src: "/images/hero/landmark.webp", alt: "Indian landmark at sunrise" },
];

// which 3 photos show on mobile (small, big, small)
const mobileIndexes = [1, 0, 3];

function PhotoTile({ photo, className = "", priority = false, delay = 0, reduceMotion, sizes }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[18px] border-[3px] border-white shadow-[0_12px_30px_rgba(12,51,123,0.16)] lg:rounded-[22px] ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>
  );
}

export default function StudyInIndiaHero({
  title = "Study in",
  highlight = "India.",
  description = "Pursue recognized online degrees with the flexibility to balance education, work, and personal commitments , while building toward your long-term career goals.",
  breadcrumbs = defaultBreadcrumbs,
  photos = defaultPhotos,
  primaryLabel = "Book a Free Consultation",
  primaryTargetId = "faq-section",
  whatsappLabel = "Chat On WhatsApp",
  whatsappUrl = "https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20my%20study%20options%20in%20India.",
}) {
  const reduceMotion = useReducedMotion();

  const handlePrimaryClick = () => {
    const el =
      document.getElementById(primaryTargetId) ||
      document.querySelector("footer");

    el?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const fade = (delay = 0, y = 14) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const tallSizes = "(max-width: 1023px) 30vw, 160px";
  const smallSizes = "(max-width: 1023px) 30vw, 160px";

  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#F4F8FF] to-[#EAF2FF] pb-8 pt-[100px] min-[390px]:pt-[110px] sm:pb-10 md:pt-[115px] lg:pb-10 lg:pt-[120px]">
      {/* soft background circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-16 -z-10 h-64 w-64 rounded-full bg-[#DCEAFF]/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#DCEAFF]/70"
      />

      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-6">
          {/* =====================================
              LEFT COLLAGE (desktop only)
          ===================================== */}
          <div className="hidden h-[330px] grid-cols-2 grid-rows-2 gap-2 lg:grid">
            <PhotoTile
              photo={photos[0]}
              priority
              delay={0.1}
              reduceMotion={reduceMotion}
              sizes={tallSizes}
              className="row-span-2"
            />
            <PhotoTile
              photo={photos[1]}
              delay={0.18}
              reduceMotion={reduceMotion}
              sizes={smallSizes}
            />
            <PhotoTile
              photo={photos[2]}
              delay={0.26}
              reduceMotion={reduceMotion}
              sizes={smallSizes}
            />
          </div>

          {/* =====================================
              CENTER TEXT
          ===================================== */}
          <div className="flex flex-col items-center text-center">
            {/* breadcrumb pill */}
            <motion.nav {...fade(0.05, -8)} aria-label="Breadcrumb" className="mb-4">
              <ol className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-[#DCE8F8] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#526B8C] shadow-[0_4px_14px_rgba(12,51,123,0.06)]">
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <li key={crumb.label} className="inline-flex items-center gap-1">
                      {index === 0 && (
                        <Home size={12} className="text-[#1765F5]" aria-hidden="true" />
                      )}

                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className="transition-colors hover:text-[#1765F5]"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span
                          aria-current={isLast ? "page" : undefined}
                          className={isLast ? "text-[#1765F5]" : ""}
                        >
                          {crumb.label}
                        </span>
                      )}

                      {!isLast && (
                        <ChevronRight
                          size={12}
                          aria-hidden="true"
                          className="text-[#A0B3C8]"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            </motion.nav>

            <motion.h1
              {...fade(0.1)}
              className="text-balance text-[30px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0C337B] sm:text-[40px] lg:text-[42px] xl:text-[46px]"
            >
              {title} <span className="text-[#1765F5]">{highlight}</span>
            </motion.h1>

            <motion.p
              {...fade(0.16)}
              className="mt-3 max-w-[460px] text-[13px] leading-[1.7] text-[#4B5F7A] sm:text-[14px]"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fade(0.22)}
              className="mt-5 flex w-full flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row"
            >
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(23,101,245,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0C337B] hover:bg-[#0C337B]"
              >
                <span>{primaryLabel}</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.4}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] bg-white px-5 py-3 text-[13px] font-bold text-[#0C337B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px] fill-[#25D366] transition-colors group-hover:fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
                </svg>
                <span>{whatsappLabel}</span>
              </a>
            </motion.div>
          </div>

          {/* =====================================
              RIGHT COLLAGE (desktop only, mirrored)
          ===================================== */}
          <div className="hidden h-[330px] grid-cols-2 grid-rows-2 gap-2 lg:grid">
            <PhotoTile
              photo={photos[3]}
              delay={0.18}
              reduceMotion={reduceMotion}
              sizes={smallSizes}
            />
            <PhotoTile
              photo={photos[4]}
              priority
              delay={0.1}
              reduceMotion={reduceMotion}
              sizes={tallSizes}
              className="col-start-2 row-span-2 row-start-1"
            />
            <PhotoTile
              photo={photos[5]}
              delay={0.26}
              reduceMotion={reduceMotion}
              sizes={smallSizes}
            />
          </div>

          {/* =====================================
              MOBILE / TABLET: 3 PHOTOS IN A ROW
          ===================================== */}
          <div className="grid h-[110px] grid-cols-[1fr_1.2fr_1fr] gap-2 sm:h-[150px] sm:gap-3 lg:hidden">
            {mobileIndexes.map((photoIndex, i) => (
              <PhotoTile
                key={photoIndex}
                photo={photos[photoIndex]}
                delay={0.15 + i * 0.08}
                reduceMotion={reduceMotion}
                sizes="(max-width: 1023px) 33vw, 0px"
              />
            ))}
          </div>
        </div>
      </div>

      {/* soft blend into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}