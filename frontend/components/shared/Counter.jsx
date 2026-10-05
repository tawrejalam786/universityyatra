'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Counter({ 
  end, 
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = ''
}) {
  const ref = useRef(null);
  const counterRef = useRef({ value: start });
  const [displayValue, setDisplayValue] = useState(`${prefix}${start}${suffix}`);

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;

    try {
      const animation = gsap.to(counterRef.current, {
        value: end,
        duration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
        },
        onUpdate: () => {
          const value = counterRef.current.value;
          const formatted = decimals > 0 
            ? value.toFixed(decimals) 
            : Math.round(value);
          setDisplayValue(`${prefix}${formatted}${suffix}`);
        },
      });

      return () => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      };
    } catch (error) {
      console.error('Counter error:', error);
      setDisplayValue(`${prefix}${end}${suffix}`);
    }
  }, [end, start, duration, suffix, prefix, decimals]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
