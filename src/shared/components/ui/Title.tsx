import type { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils/cn';
import { cinematicEase } from '@/core/motion/animations';

export function Title({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -44, filter: 'blur(9px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: cinematicEase }}
      className={cn('heading-l text-balance', className)}
      {...props}
    />
  );
}
