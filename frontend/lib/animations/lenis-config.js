// Lenis Smooth Scroll Configuration
import Lenis from 'lenis';

let lenisInstance = null;

export const initLenis = () => {
  if (typeof window === 'undefined') return null;

  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
};

export const destroyLenis = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

export const scrollTo = (target, options = {}) => {
  if (!lenisInstance) return;
  
  lenisInstance.scrollTo(target, {
    offset: options.offset || 0,
    duration: options.duration || 1.2,
    easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
    ...options,
  });
};

export const getLenis = () => lenisInstance;

export default { initLenis, destroyLenis, scrollTo, getLenis };
