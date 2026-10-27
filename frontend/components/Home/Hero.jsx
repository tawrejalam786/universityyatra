
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Landmark,
  MessagesSquare,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const TRUST_POINTS = [
  { icon: Landmark, label: "Top Universities" },
  { icon: MessagesSquare, label: "Expert Counselling" },
  { icon: BadgeCheck, label: "End-to-End Support" },
];

/* =========================================
   FLOATING WORDS

   position       = ORIGINAL DESKTOP POSITION
   mobilePosition = MOBILE ONLY POSITION

   Desktop values are kept unchanged.
========================================= */

const FLOATING_WORDS = [
  {
    label: "LOAN",
    color: "#D7F77D",
    textColor: "#063B72",

    // ORIGINAL DESKTOP - DO NOT CHANGE
    position: "left-[8%] top-[4%] -rotate-12 md:left-[12%] md:top-[8%] lg:left-[30%] lg:top-[0%]",

    // MOBILE ONLY
    mobilePosition: "left-[11%] top-[20px] -rotate-12",

    delay: 0,
  },
  {
    label: "SCHOLARSHIP",
    color: "#FFD4E6",
    textColor: "#063B72",

    // ORIGINAL DESKTOP - DO NOT CHANGE
    position: "right-[5%] top-[2%] rotate-8 md:right-[8%] md:top-[5%] lg:right-[25%] lg:top-[4%]",

    // MOBILE ONLY
    mobilePosition: "right-[2%] top-[-8px] rotate-8",

    delay: 0.3,
  },
  {
    label: "JOB MARKET",
    color: "#B5E9F2",
    textColor: "#063B72",

    // ORIGINAL DESKTOP - DO NOT CHANGE
    position: "right-[0%] bottom-[5%] -rotate-6 md:right-[1%] md:bottom-[5%] lg:right-[19%] lg:bottom-[8%]",

    // MOBILE ONLY
    mobilePosition: "right-[1%] bottom-[-10px] -rotate-6",

    delay: 0.6,
  },
  {
    label: "COUNTRY SELECTION",
    color: "#0C9253",
    textColor: "#FFFFFF",

    // ORIGINAL DESKTOP - DO NOT CHANGE
    position: "left-[0%] bottom-[8%] rotate-6 md:left-[1%] md:bottom-[8%] lg:left-[15%] lg:bottom-[12%]",

    // MOBILE ONLY
    mobilePosition: "left-[1%] bottom-[-10px] rotate-6",

    delay: 0.9,
  },
];

/* =========================================
   ORIGINAL DESKTOP FLOATING WORD COMPONENT

   No desktop styling changes.
========================================= */

function FloatingWord({ item, reduceMotion }) {
  return (
    <motion.span
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.85,
              y: 12,
            }
      }
      animate={
        reduceMotion
          ? {}
          : {
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
            }
      }
      transition={
        reduceMotion
          ? {}
          : {
              opacity: {
                duration: 0.5,
                delay: item.delay,
              },
              scale: {
                duration: 0.5,
                delay: item.delay,
              },
              y: {
                duration: 4,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      style={{
        backgroundColor: item.color,
        color: item.textColor,
      }}
      className={`pointer-events-none absolute z-20 hidden whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.02em] shadow-[0_8px_25px_rgba(6,59,114,0.08)] sm:inline-flex lg:px-4 lg:py-2 lg:text-[11px] ${item.position}`}
    >
      {item.label}
    </motion.span>
  );
}

/* =========================================
   MOBILE ONLY FLOATING WORD COMPONENT

   Mobile styling and positions are independent.
========================================= */

function MobileFloatingWord({ item, reduceMotion }) {
  return (
    <motion.span
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.85,
              y: 8,
            }
      }
      animate={
        reduceMotion
          ? {}
          : {
              opacity: 1,
              scale: 1,
              y: [0, -3, 0],
            }
      }
      transition={
        reduceMotion
          ? {}
          : {
              opacity: {
                duration: 0.5,
                delay: item.delay,
              },
              scale: {
                duration: 0.5,
                delay: item.delay,
              },
              y: {
                duration: 4,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className={`pointer-events-none absolute z-20 inline-flex max-w-[48%] items-center justify-center whitespace-nowrap rounded-full shadow-[0_5px_15px_rgba(12,51,123,0.12)] sm:hidden ${item.mobilePosition}`}
    >
      <span
        style={{
          backgroundColor: item.color,
          color: item.textColor,
        }}
        className="inline-flex items-center justify-center rounded-full px-2 py-1 text-[7px] font-extrabold uppercase tracking-[0.02em] min-[390px]:px-2.5 min-[390px]:py-1.5 min-[390px]:text-[8px]"
      >
        {item.label}
      </span>
    </motion.span>
  );
}

/* =========================================
   HERO COMPONENT
========================================= */

export default function Hero({
  videoSrc = "/videos/university-yatra-hero-f.mp4",
  posterImage = "",
  whatsappNumber = "917838195948",
}) {
  const reduceMotion = useReducedMotion();
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative isolate w-full overflow-hidden rounded-b-[24px] bg-[#F8FAFC] min-h-[560px] sm:min-h-[590px]  md:min-h-[650px]">

      {/* =====================================
          BACKGROUND VIDEO
      ===================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {!videoError && videoSrc && !reduceMotion && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={posterImage || undefined}
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover object-top"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      {/* =====================================
          HERO CONTENT
      ===================================== */}

      <div className="relative mx-auto flex min-h-[560px] w-full max-w-[1440px] flex-col items-center justify-center px-3 pb-10 pt-[110px] text-center min-[390px]:px-4 sm:min-h-[590px] sm:px-6 sm:pb-14 sm:pt-36 md:h-full md:min-h-[560px] lg:px-8 lg:pt-40">

        {/* FLOATING WORDS + TITLE */}

        <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center">

          {/* SMALL INTRO */}

            {/* <motion.p
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 mb-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#2459C5] sm:mb-4 sm:text-[12px]"
            >
              Your Dreams • Our Guidance
            </motion.p> */}

          {/* =====================================
              HEADING WRAPPER

              Mobile and desktop floating words
              are rendered separately.
          ===================================== */}

          <div className="relative mx-auto w-full max-w-[1050px]">

            {/* MOBILE FLOATING WORDS ONLY */}

            {/* <div className="pointer-events-none absolute inset-0 z-20 sm:hidden">
              {FLOATING_WORDS.map((item) => (
                <MobileFloatingWord
                  key={`${item.label}-mobile`}
                  item={item}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div> */}

            {/* DESKTOP FLOATING WORDS ONLY */}

            {/* <div className="hidden sm:block">
              {FLOATING_WORDS.map((item) => (
                <FloatingWord
                  key={item.label}
                  item={item}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div> */}

            {/* =====================================
                MAIN HEADING

                Desktop font size stays unchanged.
            ===================================== */}
{/* 
            <motion.h1
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 22,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
              }}
              className="relative z-10 mx-auto max-w-[950px] py-5 text-balance text-[clamp(36px,10vw,46px)] font-extrabold leading-[1.08] tracking-[-0.055em] text-[#2459C5] sm:py-0 sm:text-[clamp(40px,7vw,58px)]"
            >
              Taking Your

              <span className="block">
                Education{" "}
                <span className="text-[#063B72]">
                  Global
                </span>
              </span>
            </motion.h1> */}

          </div>
        </div>

        {/* =====================================
            CTA BUTTONS

            Mobile: Same row
            Desktop: Original styling
        ===================================== */}

        {/* =====================================
    CTA BUTTONS

    Left corner  : Book a Free Consultation
    Right corner : Chat on WhatsApp
    (Desktop + Mobile dono par same)
===================================== */}

<motion.div
  initial={
    reduceMotion
      ? false
      : {
          opacity: 0,
          y: 12,
        }
  }
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.6,
    delay: 0.3,
  }}
  className="absolute inset-x-0 bottom-5 z-10 flex w-full flex-nowrap items-center justify-between gap-2 px-3 min-[390px]:px-4 sm:bottom-8 sm:px-6 lg:bottom-10 lg:px-8"
>

  {/* CONSULTATION BUTTON - LEFT CORNER */}

  <Link
    href="/counselling"
    className="group inline-flex h-[43px] flex-none items-center justify-center gap-1 rounded-full bg-[#1765F5] px-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(6,59,114,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#075094] min-[360px]:text-[10px] min-[390px]:h-[46px] min-[390px]:gap-1.5 min-[390px]:px-4 sm:h-12 sm:gap-2 sm:px-6 sm:text-[12px]"
  >
    <span className="whitespace-nowrap">
      Book a Free Consultation
    </span>

    <ArrowUpRight
      size={13}
      className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-[16px]"
    />
  </Link>

  {/* WHATSAPP BUTTON - RIGHT CORNER */}

  <a
    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello University Yatra, I would like guidance for studying abroad.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-[43px] flex-none items-center justify-center gap-1 rounded-full border border-[#063B72]/15 bg-white/90 px-3 text-[9px] font-bold text-[#063B72] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white min-[360px]:text-[10px] min-[390px]:h-[46px] min-[390px]:gap-1.5 min-[390px]:px-4 sm:h-12 sm:gap-2 sm:px-6 sm:text-[12px]"
  >
    <FontAwesomeIcon
      icon={faWhatsapp}
      className="shrink-0 text-[14px] text-[#16A34A] sm:text-[18px]"
    />

    <span className="whitespace-nowrap">
      Chat on WhatsApp
    </span>
  </a>

</motion.div>

      </div>
    </section>
  );
}
