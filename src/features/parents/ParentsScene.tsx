import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';

export function ParentsScene() {
  return (
    <Section>
      <p className="caption">Mis primeros refugios</p>
      <Title className="mt-4">
        Antes de enseñarme a caminar, ya me habían enseñado a <span className="text-[var(--color-accent)]">sentirme amado</span>.
      </Title>
      <Subtitle>Mis papás aprendieron a ser padres al mismo tiempo que yo aprendía a descubrir el mundo.</Subtitle>
      <Paragraph>
        Me acompañaron a consultas, hicieron preguntas, buscaron respuestas y tomaron decisiones pensando siempre en mi bienestar. Nunca dejaron que mi oreja definiera lo que yo podía llegar a ser.
      </Paragraph>
      <Paragraph>
        Con los años, mi mamá también estuvo muy presente en la escuela, ayudándome a ser más responsable, a cumplir con mis tareas y a no rendirme cuando algo se complicaba. Cada logro que hoy lleva mi nombre tiene detrás una parte de su paciencia, sus desvelos y su confianza.
      </Paragraph>
    </Section>
  );
}
