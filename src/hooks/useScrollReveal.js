import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to a ref,
 * adds 'visible' class to elements with .reveal / .reveal-left / .reveal-right
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach(node => node.classList.add('visible'));
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
