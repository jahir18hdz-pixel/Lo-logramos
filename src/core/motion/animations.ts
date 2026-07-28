import type { Variants } from 'framer-motion';

export const cinematicEase = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.15, ease: cinematicEase } },
};

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(8px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.3, ease: cinematicEase } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.06 } },
};