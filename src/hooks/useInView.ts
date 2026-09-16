import { useEffect, useRef, useState } from 'react';

const HAS_IO = typeof window !== 'undefined' && 'IntersectionObserver' in window;

export function useInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(!HAS_IO);

  useEffect(() => {
    const el = ref.current;
    if (!el || !HAS_IO) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}
