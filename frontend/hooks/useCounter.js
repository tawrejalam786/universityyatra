'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useCounter = (end, options = {}) => {
  const elementRef = useRef(null);
  const counterRef = useRef({ value: options.start || 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;

    const element = elementRef.current;
    const duration = options.duration || 2;
    const suffix = options.suffix || '';
    const prefix = options.prefix || '';
    const decimals = options.decimals || 0;

    try {
      animationRef.current = gsap.to(counterRef.current, {
        value: end,
        duration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true,
          ...options.scrollTrigger,
        },
        onUpdate: () => {
          const value = counterRef.current.value;
          const formatted = decimals > 0 
            ? value.toFixed(decimals) 
            : Math.round(value);
          element.textContent = `${prefix}${formatted}${suffix}`;
        },
      });
    } catch (error) {
      console.error('Counter animation error:', error);
      // Fallback: just show the end value
      element.textContent = `${prefix}${end}${suffix}`;
    }

    return () => {
      try {
        if (animationRef.current && animationRef.current.scrollTrigger) {
          animationRef.current.scrollTrigger.kill();
        }
        if (animationRef.current) {
          animationRef.current.kill();
        }
      } catch (error) {
        console.error('Counter cleanup error:', error);
      }
    };
  }, []); // Empty dependency array

  return elementRef;
};

export default useCounter;
