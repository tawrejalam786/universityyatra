// GSAP Configuration and Utilities
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in animation
export const fadeIn = (element, delay = 0, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration,
    delay,
    ease: 'power3.out',
  });
};

// Fade in with scroll trigger
export const fadeInScroll = (element, triggerElement, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: options.duration || 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: triggerElement || element,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      toggleActions: options.toggleActions || 'play none none none',
      ...options.scrollTrigger,
    },
  });
};

// Slide in from left
export const slideInLeft = (element, delay = 0, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    x: -100,
    duration,
    delay,
    ease: 'power3.out',
  });
};

// Slide in from right
export const slideInRight = (element, delay = 0, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    x: 100,
    duration,
    delay,
    ease: 'power3.out',
  });
};

// Scale up animation
export const scaleUp = (element, delay = 0, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    scale: 0.8,
    duration,
    delay,
    ease: 'back.out(1.7)',
  });
};

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, staggerDelay = 0.2, duration = 1) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration,
    stagger: staggerDelay,
    ease: 'power3.out',
  });
};

// Counter animation
export const animateCounter = (element, start = 0, end, duration = 2) => {
  const obj = { value: start };
  return gsap.to(obj, {
    value: end,
    duration,
    ease: 'power1.out',
    onUpdate: () => {
      if (element) {
        element.textContent = Math.round(obj.value);
      }
    },
  });
};

// Parallax effect
export const parallax = (element, speed = 0.5) => {
  return gsap.to(element, {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: 0,
    },
  });
};

// Pin section
export const pinSection = (element, options = {}) => {
  return ScrollTrigger.create({
    trigger: element,
    start: options.start || 'top top',
    end: options.end || '+=100%',
    pin: true,
    pinSpacing: options.pinSpacing !== false,
    ...options,
  });
};

// Batch animation for multiple sections
export const batchAnimation = (selector, animation = fadeInScroll) => {
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => animation(batch),
    start: 'top 80%',
    once: true,
  });
};

export default gsap;
