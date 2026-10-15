
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
========================================= */

const FLOATING_WORDS = [
  {
    label: "LOAN",
    color: "#D7F77D",
    textColor: "#063B72",
    position: "left-[5%] top-[12%] -rotate-12 lg:left-[16%] lg:top-[12%]",
    delay: 0,
  },
  {
    label: "SCHOLARSHIP",
    color: "#FFD4E6",
    textColor: "#063B72",
    position: "right-[4%] top-[7%] rotate-8 lg:right-[19%] lg:top-[5%]",
    delay: 0.3,
  },
  {
    label: "JOB MARKET",
    color: "#B5E9F2",
    textColor: "#063B72",
    position: "right-[1%] top-[46%] -rotate-6 lg:right-[9%] lg:top-[46%]",
    delay: 0.6,
  },
  {
    label: "COUNTRY SELECTION",
    color: "#0C9253",
    textColor: "#FFFFFF",
    position: "left-[1%] top-[51%] rotate-6 lg:left-[8%] lg:top-[50%]",
    delay: 0.9,
  },
];

/* =========================================
   FLOATING WORD COMPONENT
========================================= */

function FloatingWord({ item, reduceMotion }) {
  return (
    <motion.span
      initial={
        reduceMotion
          ? false
          : { opacity: 0, scale: 0.85, y: 12 }
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
        color: item.textColor || "#063B72",
      }}
      className={`pointer-events-none absolute z-20 hidden whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.04em] shadow-[0_8px_25px_rgba(6,59,114,0.08)] sm:inline-flex lg:px-5 lg:py-2.5 lg:text-[12px] ${item.position}`}
    >
      {item.label}
    </motion.span>
  );
}

/* =========================================
   HERO COMPONENT
========================================= */

export default function Hero({
  videoSrc = "/videos/university-yatra-hero.mp4",
  posterImage = "",
  whatsappNumber = "917838195948",
}) {
  const reduceMotion = useReducedMotion();
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative isolate min-h-[690px] w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] sm:min-h-[720px] lg:min-h-[780px]">

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
            className="h-full w-full object-cover object-center"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      {/* LIGHT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/80 to-white/5" />

      {/* =====================================
          HERO CONTENT
      ===================================== */}

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pb-20 pt-32 text-center sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">

        {/* FLOATING WORDS + TITLE */}
        <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center">

          {/* DESKTOP FLOATING WORDS */}
          {FLOATING_WORDS.map((item) => (
            <FloatingWord
              key={item.label}
              item={item}
              reduceMotion={reduceMotion}
            />
          ))}

          {/* SMALL INTRO */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#18A6A3] sm:text-[12px]"
          >
            Your Dreams • Our Guidance
          </motion.p>

          {/* MAIN TITLE */}
          <motion.h1
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 22 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
            }}
            className="relative z-10 mx-auto max-w-[1050px] text-balance text-[clamp(40px,7vw,92px)] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#063B72]"
          >
            Taking Your
            <span className="block">
              Education{" "}
              <span className="text-[#18B8B5]">
                Global
              </span>
            </span>
          </motion.h1>

          {/* =====================================
              MOBILE FLOATING WORDS
          ===================================== */}

          <div className="relative z-10 mt-5 flex max-w-[390px] flex-wrap justify-center gap-2 sm:hidden">
            {FLOATING_WORDS.map((item) => (
              <span
                key={item.label}
                style={{
                  backgroundColor: item.color,
                  color: item.textColor || "#063B72",
                }}
                className="rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.04em]"
              >
                {item.label}
              </span>
            ))}
          </div>

        </div>

        {/* =====================================
            DESCRIPTION
        ===================================== */}

        <motion.p
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative z-10 mx-auto mt-5 max-w-[650px] text-[13px] leading-[1.7] text-[#425A70] sm:text-[15px]"
        >
          Explore top universities, discover the right courses, and get
          expert guidance for every step of your study abroad journey.
        </motion.p>

        {/* =====================================
            CTA BUTTONS
        ===================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="relative z-10 mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >

          {/* CONSULTATION BUTTON */}
          <Link
            href="/counselling"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#063B72] px-6 text-[12px] font-bold text-white shadow-[0_10px_30px_rgba(6,59,114,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#075094] sm:w-auto"
          >
            Book a Free Consultation

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* WHATSAPP BUTTON */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello University Yatra, I would like guidance for studying abroad."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#063B72]/15 bg-white/80 px-6 text-[12px] font-bold text-[#063B72] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-[18px] text-[#16A34A]"
            />

            Chat on WhatsApp
          </a>

        </motion.div>

        {/* =====================================
            TRUST POINTS
        ===================================== */}

        <motion.ul
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-medium text-[#425A70] sm:gap-x-7 sm:text-[12px]"
        >
          {TRUST_POINTS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2"
            >
              <Icon
                size={15}
                className="text-[#18B8B5]"
              />
              {label}
            </li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}
