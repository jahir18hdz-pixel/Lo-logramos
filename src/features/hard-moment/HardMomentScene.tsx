import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';

export function HardMomentScene() {
  return (
    <Section>
      <p className="caption">Los últimos semestres</p>
      <Title className="mt-4">
        Mientras la meta se acercaba, mi atención y mi corazón estaban también con mi <span className="text-[var(--color-accent)]">abuelo</span>.
      </Title>
      <Subtitle>Su enfermedad hizo que la etapa final tuviera un peso distinto.</Subtitle>
      <Paragraph>
        Continuar estudiando mientras la familia atravesaba un momento difícil no fue sencillo. La carrera seguía exigiendo entregas y resultados, aunque emocionalmente todo se sintiera detenido.
      </Paragraph>
      <Paragraph>
        Decidí dedicarle también a él el esfuerzo final. Terminar significaba honrar todo lo que me había enseñado desde niño y llevar conmigo una parte de su historia hasta la meta.
      </Paragraph>
    </Section>
  );
}
