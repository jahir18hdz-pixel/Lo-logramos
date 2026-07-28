import { ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils/cn';
import { cinematicEase } from '@/core/motion/animations';

export function PhotoFrame({ src, alt, caption, wide = false }: { src?: string; alt: string; caption?: string; wide?: boolean }) {
  return (
    <motion.figure
      initial={{ opacity: 0, x: wide ? 70 : -70, rotate: wide ? 1.2 : -1.2 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 1.25, ease: cinematicEase }}
      className={cn(
        'group relative mt-10 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-primary)]/25 bg-white/35 p-2 shadow-[0_2rem_6rem_rgb(47_65_86_/_18%)] backdrop-blur-xl',
        wide ? 'w-full max-w-4xl' : 'w-full max-w-md',
      )}
    >
      <div className={cn('relative grid w-full place-items-center overflow-hidden rounded-[calc(var(--radius-sm)-.35rem)] bg-white/55', wide ? 'min-h-[18rem] max-h-[72svh]' : 'min-h-[24rem] max-h-[72svh]')}>
        {src ? (
          <>
            <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl transition duration-1000 group-hover:scale-125" />
            <motion.img
              src={src}
              alt={alt}
              className="relative z-10 block max-h-[70svh] w-full object-contain"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.7, ease: cinematicEase }}
            />
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-[var(--color-secondary)]">
            <ImageIcon aria-hidden="true" />
            <span className="caption px-6 text-center">{caption ?? 'Agrega una fotografía'}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className="caption px-2 pb-1 pt-3 text-center">{caption}</figcaption>}
    </motion.figure>
  );
}
