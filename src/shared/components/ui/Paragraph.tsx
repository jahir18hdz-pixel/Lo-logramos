import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/shared/utils/cn';
import { cinematicEase } from '@/core/motion/animations';

type ParagraphProps = HTMLMotionProps<'p'>;

export function Paragraph({
  className,
  ...props
}: ParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 0.9, ease: cinematicEase }}
      className={cn(
        'body-copy mt-5 max-w-[var(--reading-width)] text-justify',
        className
      )}
      {...props}
    />
  );
}