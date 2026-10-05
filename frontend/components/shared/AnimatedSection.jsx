'use client';

import { useEffect, useRef } from 'react';
import { fadeInScroll } from '@/lib/animations/gsap-config';

export default function AnimatedSection({ 
  children, 
  className = '',
  duration = 1,
  delay = 0,
  ...props 
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;

    try {
      const animation = fadeInScroll(ref.current, null, {
        duration,
        delay,
        scrollTrigger: {
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      return () => {
        if (animation && animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        if (animation) {
          animation.kill();
        }
      };
    } catch (error) {
      console.error('AnimatedSection error:', error);
    }
  }, [duration, delay]); // Only depend on primitives

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}
