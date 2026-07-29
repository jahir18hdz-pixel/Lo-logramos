import { CalendarDays, Clock3, MapPin, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section } from '@/shared/components/story/Section';
import { GlassCard } from '@/shared/components/ui/GlassCard';

const details = [
  { icon: CalendarDays, label: 'Fecha', value: '30 de agosto' },
  { icon: Clock3, label: 'Hora', value: '3:00 p. m.' },
  { icon: MapPin, label: 'Lugar', value: 'Héroes Carranza' },
];

const giftIdeas = [
  { src: '/regalos/herramienta-1.jpeg', title: 'Herramienta 01' },
  { src: '/regalos/herramienta-2.jpeg', title: 'Herramienta 02' },
  { src: '/regalos/herramienta-3.jpeg', title: 'Herramienta 03' },
  { src: '/regalos/herramienta-4.jpeg', title: 'Herramienta 04' },
  { src: '/regalos/herramienta-5.jpeg', title: 'Herramienta 05' },
  { src: '/regalos/herramienta-6.jpeg', title: 'Herramienta 06' },
  { src: '/regalos/herramienta-7.jpeg', title: 'Herramienta 07' },
  { src: '/regalos/herramienta-8.jpeg', title: 'Herramienta 08' },
  { src: '/regalos/herramienta-9.jpeg', title: 'Herramienta 09' },
  { src: '/regalos/herramienta-10.jpeg', title: 'Herramienta 10' },
  { src: '/regalos/herramienta-11.jpeg', title: 'Herramienta 11' },
  { src: '/regalos/herramienta-12.jpeg', title: 'Herramienta 12' },
  { src: '/regalos/herramienta-13.jpeg', title: 'Herramienta 13' },
  { src: '/regalos/herramienta-14.jpeg', title: 'Herramienta 14' },
  { src: '/regalos/herramienta-15.jpeg', title: 'Herramienta 15' },
];

function GiftCarousel() {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const item = giftIdeas[index];
  const previous = () => setIndex((value) => (value - 1 + giftIdeas.length) % giftIdeas.length);
  const next = () => setIndex((value) => (value + 1) % giftIdeas.length);

  return (
    <div className="mt-10">
      <p className="caption text-center">Algunas ideas de herramientas</p>
      <div className="relative mx-auto mt-5 max-w-md overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-primary)]/15 bg-white/55 p-2 shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius-md)-.35rem)] bg-[var(--color-background-soft)]">
          {!failed[index] ? (
            <motion.img
              key={item.src}
              src={item.src}
              alt={item.title}
              initial={{ opacity: 0, x: 45, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65 }}
              onError={() => setFailed((value) => ({ ...value, [index]: true }))}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center text-[var(--color-primary)]/65">
              <ImageIcon size={30} />
              <span className="text-sm">Agrega {item.src.replace('/regalos/', 'public/regalos/')}</span>
            </div>
          )}
        </div>
        <button type="button" onClick={previous} aria-label="Imagen anterior" className="absolute left-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-[var(--color-primary)] shadow-lg backdrop-blur transition hover:scale-105"><ChevronLeft size={19} /></button>
        <button type="button" onClick={next} aria-label="Imagen siguiente" className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-[var(--color-primary)] shadow-lg backdrop-blur transition hover:scale-105"><ChevronRight size={19} /></button>
      </div>
      <div className="mt-4 flex justify-center gap-2" aria-label="Seleccionar imagen del carrusel">
        {giftIdeas.map((gift, giftIndex) => (
          <button
            type="button"
            key={gift.src}
            onClick={() => setIndex(giftIndex)}
            aria-label={`Ver imagen ${giftIndex + 1}`}
            className={`h-2 rounded-full transition-all ${giftIndex === index ? 'w-7 bg-[var(--color-primary)]' : 'w-2 bg-[var(--color-primary)]/25'}`}
          />
        ))}
      </div>
    </div>
  );
}

export function InvitationScene() {
  return (
    <Section className="text-center">
      <motion.div initial={{ opacity: 0, y: 28, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.25 }}>
        <GlassCard className="mx-auto max-w-2xl border-white/30 px-7 py-11 md:px-11">
          <span className="caption">Después de recorrer esta historia</span>
          <h2 className="heading-l mt-5">Celebremos juntos</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-[var(--color-ink)]/72 md:text-base">
            Mi graduación como Ingeniero en Desarrollo y Gestión de Software.
          </p>
          <div className="mt-9 divide-y divide-[var(--color-ink)]/12 border-y border-[var(--color-ink)]/12">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center justify-between gap-4 py-4 text-left">
                <span className="flex items-center gap-3 text-sm text-[var(--color-ink)]/58"><Icon size={17} />{label}</span>
                <strong className="text-sm font-medium text-[var(--color-ink)] md:text-base">{value}</strong>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-9 max-w-xl text-justify text-sm leading-7 text-[var(--color-ink)]/70 [text-align-last:center] md:text-base">
            Lo más importante para mí es contar con tu presencia en este día. Compartirlo contigo vale mucho más que cualquier detalle. Si está dentro de tus posibilidades y deseas obsequiarme algo, preparé algunas ideas de herramientas que necesito para seguir creciendo profesionalmente y que todavía no he podido conseguir. Tu compañía, de cualquier manera, es el mejor regalo.
          </p>
          <GiftCarousel />
        </GlassCard>
        <p className="mx-auto mt-9 max-w-xl text-justify text-sm leading-7 text-[var(--color-ink)]/58 [text-align-last:center]">
          No fue solo mi logro. Fue el resultado de una familia que nunca dejó de creer. Gracias por formar parte del camino; ahora quiero que también formes parte de la celebración.
        </p>
      </motion.div>
    </Section>
  );
}
