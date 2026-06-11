import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number; // seconds
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function CountUp({ end, duration = 2, prefix = '', suffix = '', decimals = 0 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    startRef.current = start;
    const step = (t: number) => {
      const elapsed = (t - start) / 1000; // seconds
      const progress = Math.min(elapsed / duration, 1);
      const current = +((end * progress).toFixed(decimals));
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, decimals]);

  return (
    <span>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}
