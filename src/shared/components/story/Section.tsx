import { Children, type PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { cn } from '@/shared/utils/cn';
import { cinematicEase } from '@/core/motion/animations';

export function Section({ children, className, id }: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={cn('relative flex min-h-[100svh] items-center py-[var(--section-y)]', className)}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
          }}
        >
          {Children.map(children, (child, index) => (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 34,
                  x: index % 2 === 0 ? -18 : 18,
                  filter: 'blur(10px)',
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 1.05, ease: cinematicEase },
                },
              }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
