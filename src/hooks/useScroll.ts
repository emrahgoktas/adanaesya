'use client';

import { useEffect, useState } from 'react';
import { throttle } from '@/lib/utils';

export function useScroll(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const apply = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = throttle(() => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    }, 80);

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      onScroll.cancel();
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return scrolled;
}
