import { MotionConfig } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { cinematicEase } from './animations';

export function MotionEngine({ children }: PropsWithChildren) {
  return <MotionConfig reducedMotion="user" transition={{ duration: 1, ease: cinematicEase }}>{children}</MotionConfig>;
}