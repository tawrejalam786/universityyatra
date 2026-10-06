"use client";

import { useEffect, useRef } from "react";
import { useAnimate, useInView, useReducedMotion } from "framer-motion";

/** Server-rendered content stays visible without JavaScript. Animate once on entry. */
export default function ScrollReveal({ children, direction = "up", delay = 0, className = "" }) {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.2 });
  const reducedMotion = useReducedMotion();
  const played = useRef(false);

  useEffect(() => {
    if (!inView || reducedMotion !== false || played.current) return;
    played.current = true;
    const x = direction === "left" ? -28 : direction === "right" ? 28 : 0;
    const y = direction === "up" ? 28 : 0;
    const playback = animate(scope.current, { opacity: [0.35, 1], x: [x, 0], y: [y, 0] }, { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] });
    return () => playback.complete();
  }, [inView, reducedMotion, animate, scope, direction, delay]);

  return <div ref={scope} className={className}>{children}</div>;
}
