import { useEffect, useRef, useState } from 'react';

/**
 * Triggers a boolean flag once an element crosses ~25% into the viewport.
 * Animates once (does not re-trigger on scroll back out).
 */
export function useScrollReveal(threshold = 0.25) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
