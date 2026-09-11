import { useEffect, useState } from 'react';

export function useScrollProgress(threshold = 24): { progress: number; scrolled: boolean } {
  const [state, setState] = useState({ progress: 0, scrolled: false });

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({ progress: max > 0 ? Math.min(1, y / max) : 0, scrolled: y > threshold });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [threshold]);

  return state;
}
