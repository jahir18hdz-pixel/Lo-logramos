import { motion } from 'framer-motion';
import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { fadeUp } from '@/core/motion/animations';

const people = ['Mamá', 'Papá', 'Mis hermanos', 'Mi novia'];

export function FamilyScene() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-3xl">
        <p className="caption">Quienes nunca soltaron</p>
        <Title className="mt-4">Nunca caminé <span className="text-[var(--color-accent)]">solo</span>.</Title>
        <Subtitle className="mx-auto">
          Cuando pensé que ya no podía continuar, otras personas recordaron por mí todo lo que aún podía lograr.
        </Subtitle>
        <div className="mx-auto my-12 grid max-w-xl gap-3" aria-label="Personas que me apoyaron">
          {people.map((person, index) => (
            <motion.p
              key={person}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.75 }}
              transition={{ delay: index * 0.12 }}
              className="border-b border-[var(--color-ink)]/10 py-3 text-center text-lg font-medium tracking-tight text-[var(--color-ink)]/90"
            >
              {person}
            </motion.p>
          ))}
        </div>
        <Paragraph className="mx-auto">
          Mi tío Daniel me ayudó a estudiar y a recuperar el camino. Mi familia sostuvo mis dudas, mi novia acompañó los días difíciles y mis hermanos formaron parte de una historia que nunca fue solamente mía.
        </Paragraph>
      </div>
    </Section>
  );
}
