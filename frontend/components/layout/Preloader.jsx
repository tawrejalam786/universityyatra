"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";

const DESTINATIONS = [
  "USA",
  "Canada",
  "UK",
  "Ireland",
  "UAE",
  "Germany",
  "France",
  "Russia",
  "Australia",
  "New Zealand",
  "Singapore",
  "Japan",
  "India",
];

const START = 300;
const GAP = 320;
const FINISH = START + (DESTINATIONS.length - 1) * GAP + 500;
const EASE = [0.76, 0, 0.24, 1];

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [pct, setPct] = useState(0);
  const instantExit = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      instantExit.current = true;
      setShow(false);
      return;
    }

    // Root layout mounts again on refresh, so replay the complete sequence.
    const timers = [];

    DESTINATIONS.forEach((_, i) => {
      if (i > 0) timers.push(setTimeout(() => setIndex(i), START + (i - 1) * GAP));
    });

    const counter = animate(0, 100, {
      duration: FINISH / 1000,
      ease: "linear",
      onUpdate: (value) => setPct(Math.round(value)),
    });

    timers.push(
      setTimeout(() => {
        setShow(false);
      }, FINISH + 150)
    );

    return () => {
      timers.forEach(clearTimeout);
      counter.stop();
    };
  }, []);

  useEffect(() => {
    if (!show) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading University Yatra"
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#1765F5] text-white"
          style={{ borderRadius: "0 0 50% 50% / 0 0 48px 48px" }}
          exit={
            instantExit.current
              ? { opacity: 0, transition: { duration: 0 } }
              : { y: "-112%", transition: { duration: 0.95, ease: EASE } }
          }
        >
          <div className="absolute left-6 top-5 text-sm text-white/80">University Yatra</div>

          <div className="absolute inset-0 flex -translate-y-[6%] flex-col items-center justify-center">
            <div className="mb-1 text-base text-white/80 sm:text-lg">Study in</div>

            <div className="h-16 overflow-hidden sm:h-24">
              <motion.div
                animate={{ y: `-${(index * 100) / DESTINATIONS.length}%` }}
                transition={{ duration: 0.38, ease: EASE }}
              >
                {DESTINATIONS.map((name) => (
                  <div
                    key={name}
                    className="flex h-16 items-center justify-center whitespace-nowrap text-5xl font-medium sm:h-24 sm:text-7xl"
                  >
                    {name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-9 right-6 text-xl tabular-nums text-white/80">{pct}%</div>
          <div className="absolute inset-x-6 bottom-5 h-0.5 bg-white/25">
            <div className="h-full bg-white" style={{ width: `${pct}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
