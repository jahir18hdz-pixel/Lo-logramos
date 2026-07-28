import type { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils/cn';
import { cinematicEase } from '@/core/motion/animations';

export function Subtitle({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <motion.p
      initial={{ opacity: 0, x: 36, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 0.95, ease: cinematicEase }}
      className={cn('mt-6 max-w-2xl text-justify text-base leading-8 text-[var(--color-ink)]/72 md:text-lg', className)}
      {...props}
    />
  );
}
