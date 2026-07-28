import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/shared/components/story/Section';
import { cinematicEase } from '@/core/motion/animations';

const words = ['Un', 'camino.', 'Muchas', 'personas.', 'Una', 'meta.'];

export function IntroScene() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-5xl">
        <p className="caption">18 · 01 · 2004 — hasta hoy</p>
        <h1 className="heading-xl mx-auto mt-7 max-w-4xl" aria-label="Un camino. Muchas personas. Una meta.">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, y: 45, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2 + index * 0.13, duration: 0.9, ease: cinematicEase }}
              className={index === 5 ? 'mr-[.22em] inline-block text-[var(--color-primary)]' : 'mr-[.22em] inline-block'}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-center text-base leading-8 text-[var(--color-ink)]/70 md:text-lg"
        >
          Hay caminos que parecen personales, hasta que miramos atrás y reconocemos todas las manos que nos ayudaron a avanzar.
        </motion.p>
        <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} className="mt-14 flex flex-col items-center gap-3">
          <span className="caption">Desliza para recorrerlo</span>
          <ChevronDown size={20} className="text-[var(--color-primary)]" />
        </motion.div>
      </div>
    </Section>
  );
}
