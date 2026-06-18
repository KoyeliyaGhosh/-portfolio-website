import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to individual target elements inside the ref container,
 * adding the 'visible' class when they enter the viewport.
 */
export function useScrollReveal(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observers = [];

    targets.forEach(target => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            target.classList.add('visible');
            observer.unobserve(target);
          }
        },
        { 
          threshold,
          rootMargin: '0px 0px -30px 0px'
        }
      );
      observer.observe(target);
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [threshold]);

  return ref;
}
