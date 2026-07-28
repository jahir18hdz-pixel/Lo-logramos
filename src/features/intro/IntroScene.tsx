import { ChevronDown, LoaderCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import { useAudio } from '@/core/audio/AudioProvider';
import { cinematicEase } from '@/core/motion/animations';
import { Section } from '@/shared/components/story/Section';

const words = [
  'Un',
  'camino.',
  'Muchas',
  'personas.',
  'Una',
  'meta.',
];

export function IntroScene() {
  const {
    start,
    loading,
    unavailable,
  } = useAudio();

  const handleStartJourney = () => {
    /*
     * Se intenta iniciar la música directamente dentro del clic.
     * No usamos await para que el desplazamiento no espere al audio.
     */
    void start();

    /*
     * Iniciamos el desplazamiento inmediatamente.
     */
    const introSection = document.getElementById('intro');

    if (!introSection) {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });

      return;
    }

    /*
     * Busca la siguiente sección dentro del contenido principal.
     */
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main section'),
    );

    const currentIndex = sections.findIndex(
      (section) => section === introSection,
    );

    const nextSection =
      currentIndex >= 0
        ? sections[currentIndex + 1]
        : null;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      return;
    }

    /*
     * Respaldo por si la siguiente escena no es un elemento section.
     */
    const nextElement =
      introSection.nextElementSibling as HTMLElement | null;

    if (nextElement) {
      nextElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      return;
    }

    /*
     * Último respaldo.
     */
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Section
      id="intro"
      className="text-center"
    >
      <div className="mx-auto max-w-5xl">
        <p className="caption">
          18 · 01 · 2004 — hasta hoy
        </p>

        <h1
          className="heading-xl mx-auto mt-7 max-w-4xl"
          aria-label="Un camino. Muchas personas. Una meta."
        >
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{
                opacity: 0,
                y: 45,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: 0.2 + index * 0.13,
                duration: 0.9,
                ease: cinematicEase,
              }}
              className={
                index === 5
                  ? 'mr-[.22em] inline-block text-[var(--color-primary)]'
                  : 'mr-[.22em] inline-block'
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.1,
            duration: 0.9,
          }}
          className="
            mx-auto
            mt-8
            max-w-xl
            text-center
            text-base
            leading-8
            text-[var(--color-ink)]/70
            md:text-lg
          "
        >
          Hay caminos que parecen personales, hasta que miramos atrás y
          reconocemos todas las manos que nos ayudaron a avanzar.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mt-14 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={handleStartJourney}
            disabled={loading}
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              inline-flex
              min-h-12
              touch-manipulation
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[var(--color-primary)]/20
              bg-white/75
              px-6
              py-3
              text-sm
              font-medium
              tracking-[0.08em]
              text-[var(--color-primary)]
              shadow-[0_12px_35px_rgba(47,65,86,0.12)]
              backdrop-blur-md
              transition
              duration-300
              hover:border-[var(--color-primary)]/35
              hover:bg-white
              disabled:cursor-wait
              disabled:opacity-70
              sm:px-8
              sm:text-base
            "
          >
            {loading ? (
              <>
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />

                <span>Iniciando recorrido...</span>
              </>
            ) : (
              <>
                <span>Recorrer el camino</span>

                <motion.span
                  animate={{
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex"
                  aria-hidden="true"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </>
            )}
          </motion.button>
        </motion.div>

        {unavailable && (
          <p
            className="
              mx-auto
              mt-4
              max-w-sm
              text-xs
              leading-5
              text-[var(--color-ink)]/50
            "
          >
            El recorrido continuará sin música porque no se encontró el
            archivo de audio.
          </p>
        )}
      </div>
    </Section>
  );
}