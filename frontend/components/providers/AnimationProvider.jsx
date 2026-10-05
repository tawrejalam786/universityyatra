'use client';

import { useEffect } from 'react';
import { initLenis, destroyLenis } from '@/lib/animations/lenis-config';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AnimationProvider({ children }) {
  useEffect(() => {
    try {
      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger);

      // Initialize Lenis smooth scroll
      const lenis = initLenis();

      // Sync Lenis with GSAP ScrollTrigger
      if (lenis) {
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      }

      // Cleanup on unmount
      return () => {
        try {
          destroyLenis();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        } catch (error) {
          console.error('Cleanup error:', error);
        }
      };
    } catch (error) {
      console.error('Animation initialization error:', error);
    }
  }, []);

  return <>{children}</>;
}
