import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';

export function QuizCard({ question, answers, correctIndex }: { question: string; answers: string[]; correctIndex: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === correctIndex;

  return (
    <GlassCard className="mt-9 max-w-xl">
      <p className="heading-m">{question}</p>
      <div className="mt-5 grid gap-2.5">
        {answers.map((answer, index) => {
          const chosen = selected === index;
          return (
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.985 }}
              key={answer}
              onClick={() => setSelected(index)}
              className={`flex min-h-11 items-center justify-between rounded-xl border px-4 text-left text-sm transition ${chosen ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-lg' : 'border-[var(--color-ink)]/15 bg-white/45 text-[var(--color-ink)]/85 hover:bg-white/80'}`}
            >
              <span>{answer}</span>
              {chosen && (isCorrect ? <Check size={17} /> : <X size={17} />)}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.p
            key={String(isCorrect)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 text-sm leading-6 text-[var(--color-accent)]"
          >
            {isCorrect ? 'Correcto. Esta memoria también forma parte del camino.' : 'No exactamente, pero estuviste cerca.'}
          </motion.p>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
