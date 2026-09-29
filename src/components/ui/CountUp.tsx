'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  decimals?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountUp({ to, decimals = 0, duration = 2, suffix = '', prefix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [isInView, to, decimals, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
