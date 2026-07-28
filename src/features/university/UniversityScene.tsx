import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { Timeline } from '@/shared/components/ui/Timeline';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import codePhoto from '@/shared/assets/images/codigo.jpeg';

const items = [
  { mark: 'Ingreso', title: 'Una sola oportunidad', description: 'Presenté el examen de admisión con nervios. Era mi única opción y, aunque no había estudiado, logré entrar.' },
  { mark: 'Inicio', title: 'La realidad universitaria', description: 'Las materias, los proyectos y el código fueron mucho más difíciles de lo que había imaginado.' },
  { mark: 'Crisis', title: 'Casi abandonar', description: 'Hubo una etapa en la que perder el camino parecía más fácil que encontrar fuerzas para continuar.' },
  { mark: 'Regreso', title: 'Volver a intentarlo', description: 'Con ayuda de mi familia y de mi tío Daniel, retomé el rumbo y aprendí a pedir apoyo.' },
  { mark: 'Final', title: 'El último esfuerzo', description: 'Llegué a los últimos semestres entendiendo que terminar ya no era un objetivo individual.' },
];

export function UniversityScene() {
  return (
    <Section>
      <p className="caption">Universidad</p>
      <Title className="mt-4">
        Entré con miedo. Después descubrí que aprobar el examen solo había sido el <span className="text-[var(--color-accent)]">comienzo</span>.
      </Title>
      <Subtitle>La universidad fue mucho más difícil de lo que imaginaba, pero también fue el lugar donde aprendí cuánto podía resistir.</Subtitle>
      <Paragraph>
        Hubo desvelos, proyectos que no funcionaban, frustraciones y momentos en los que pensé seriamente en dejar la carrera. No fue una línea recta. Fue aprender, caer, detenerme y volver a intentarlo.
      </Paragraph>
      <PhotoFrame wide src={codePhoto} alt="Código y proyectos universitarios" caption="Aprendiendo a construir con código" />
      <Timeline items={items} />
    </Section>
  );
}
