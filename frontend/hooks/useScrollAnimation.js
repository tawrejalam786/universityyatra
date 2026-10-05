'use client';

import { useEffect, useRef } from 'react';
import { fadeInScroll } from '@/lib/animations/gsap-config';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;

    try {
      animationRef.current = fadeInScroll(elementRef.current, null, options);
    } catch (error) {
      console.error('Animation error:', error);
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
        console.error('Cleanup error:', error);
      }
    };
  }, []); // Empty dependency array to run once

  return elementRef;
};

export default useScrollAnimation;
