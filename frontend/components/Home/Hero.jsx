
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Hero({
  videoSrc = "/videos/university-yatra-hero-f.mp4",
  posterImage = "",
  whatsappNumber = "917838195948",
}) {
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Safely start or resume playback.
  const playVideo = useCallback(() => {
    const video = videoRef.current;

    if (!video || !videoSrc || video.error) return;
    if (document.visibilityState === "hidden") return;

    // Muted video is required for reliable autoplay.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");

    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch((error) => {
        // AbortError may occur during a normal video load change.
        if (error?.name !== "AbortError") {
          console.warn("Hero video autoplay was blocked:", error);
        }
      });
    }
  }, [videoSrc]);

  // Resume playback when the user returns to the page.
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    const handlePageShow = () => {
      playVideo();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handlePageShow);

    playVideo();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [playVideo]);

  const handleVideoError = () => {
    const error = videoRef.current?.error;

    console.error("University Yatra hero video error:", {
      code: error?.code,
      message: error?.message,
      source: videoSrc,
    });

    // Keep the fallback visible instead of leaving a broken frame.
    setVideoError(true);
    setVideoPlaying(false);
  };

  return (
    <section className="relative isolate w-full min-h-[560px] overflow-hidden rounded-b-[24px] bg-[#F8FAFC] sm:min-h-[590px] md:min-h-[620px]">

      {/* BACKGROUND VIDEO AND OPTIONAL POSTER */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#F8FAFC]"
        style={{
          backgroundImage: posterImage ? `url("${posterImage}")` : "linear-gradient(135deg, #E8F0FE, #F8FAFC)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            poster={posterImage || undefined}
            onCanPlay={playVideo}
            onPlaying={() => {
              setVideoPlaying(true);
              setVideoError(false);
            }}
            onError={handleVideoError}
            className={`absolute inset-0 block h-full w-full object-cover object-top transition-opacity duration-300 ${videoPlaying && !videoError ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1440px] flex-col items-center justify-center px-3 pb-10 pt-[110px] text-center min-[390px]:px-4 sm:min-h-[590px] sm:px-6 sm:pb-14 sm:pt-36 md:h-full md:min-h-[560px] lg:px-8 lg:pt-40">

        {/* CTA BUTTONS - ORIGINAL POSITIONS PRESERVED */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-x-0 bottom-5 z-10 flex w-full flex-nowrap items-center justify-between gap-2 px-3 min-[390px]:px-4 sm:bottom-8 sm:px-6 lg:bottom-0 lg:px-8"
        >

          {/* LEFT BUTTON */}
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

          {/* RIGHT BUTTON */}
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
