'use client';

import { useEffect, useRef } from 'react';
import { parallax } from '@/lib/animations/gsap-config';
import Image from 'next/image';

export default function ParallaxImage({ 
  src, 
  alt, 
  speed = 0.5, 
  className = '',
  ...props 
}) {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const animation = parallax(imageRef.current, speed);

    return () => {
      if (animation && animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      if (animation) {
        animation.kill();
      }
    };
  }, [speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={imageRef}>
        <Image 
          src={src} 
          alt={alt} 
          {...props}
        />
      </div>
    </div>
  );
}
