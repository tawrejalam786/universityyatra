
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Hero({
  videoSrc = "/videos/university-yatra-heross.mp4",
  posterImage = "",
  whatsappNumber = "919217368750",
}) {
  const videoRef = useRef(null);
  const retryTimerRef = useRef(null);
  const retryCountRef = useRef(0);

  const reduceMotion = useReducedMotion();
  const [mediaError, setMediaError] = useState(false);

  const startVideo = useCallback(() => {
    const video = videoRef.current;

    if (!video || video.error || document.hidden) return;

    video.muted = true;

    const promise = video.play();

    if (promise && typeof promise.catch === "function") {
      promise.catch((error) => {
        if (error?.name !== "AbortError") {
          console.warn("Hero video playback:", error);
        }
      });
    }
  }, []);

  useEffect(() => {
    retryCountRef.current = 0;

    const resume = () => {
      if (!document.hidden) {
        startVideo();
      }
    };

    document.addEventListener("visibilitychange", resume);
    window.addEventListener("pageshow", resume);

    startVideo();

    return () => {
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("pageshow", resume);

      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
      }
    };
  }, [videoSrc, startVideo]);

  const handleVideoError = () => {
    const video = videoRef.current;

    console.error("Hero video loading error:", {
      code: video?.error?.code,
      message: video?.error?.message,
      src: videoSrc,
      networkState: video?.networkState,
      readyState: video?.readyState,
    });

    setMediaError(true);

    if (retryCountRef.current >= 2) {
      console.error("Hero video failed after retries.");
      return;
    }

    retryCountRef.current += 1;

    if (retryTimerRef.current) {
      clearTimeout(retryTimerRef.current);
    }

    retryTimerRef.current = setTimeout(() => {
      const currentVideo = videoRef.current;

      if (!currentVideo) return;

      currentVideo.load();
    }, retryCountRef.current * 1500);
  };

  const handleVideoLoaded = () => {
    setMediaError(false);
    startVideo();
  };

  return (
    <section className="relative isolate w-full min-h-[560px] overflow-hidden rounded-b-[24px] bg-[#F8FAFC] sm:min-h-[590px] md:min-h-[620px]">

      {/* VIDEO BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#E8F0FE]"
        style={{
          backgroundImage: posterImage ? `url("${posterImage}")` : "linear-gradient(135deg, #E8F0FE 0%, #F8FAFC 100%)",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {videoSrc && (
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterImage || undefined}
            disablePictureInPicture
            onLoadedData={handleVideoLoaded}
            onCanPlay={startVideo}
            onError={handleVideoError}
            className={mediaError ? "absolute inset-0 block h-full w-full object-cover object-top opacity-0" : "absolute inset-0 block h-full w-full object-cover object-top"}
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1440px] flex-col items-center justify-center px-3 pb-10 pt-[110px] text-center min-[390px]:px-4 sm:min-h-[590px] sm:px-6 sm:pb-14 sm:pt-36 md:h-full md:min-h-[560px] lg:px-8 lg:pt-40">

        {/* HERO HEADING */}
        {/* <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mx-auto max-w-[900px] text-balance text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] min-[390px]:text-[32px] sm:text-[38px] md:text-[46px] lg:text-[54px]"
        >
          Making Global Education{" "}
          <span className="text-[#1765F5]">Easy & Accessible</span>
        </motion.h1> */}

        {/* <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-[700px] text-balance text-[14px] leading-[1.6] text-[#526B8C] sm:text-[15px] md:text-[16px]"
        >
          Explore top universities, discover the best courses, and get expert advice — all in one place.
        </motion.p> */}

        {/* CTA BUTTONS */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-x-0 bottom-5 z-10 flex w-full flex-nowrap items-center justify-between gap-2 px-3 min-[390px]:px-4 sm:bottom-8 sm:px-6 lg:bottom-0 lg:px-8"
        >

          <Link
            href="/contact"
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

