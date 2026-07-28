import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import elementaryPhoto from '@/shared/assets/images/primaria.jpeg';

export function ElementaryScene() {
  return (
    <Section>
      <p className="caption">Primaria</p>
      <Title className="mt-4">
        Mi pueblo fue el primer escenario de una vida que todavía se sentía <span className="text-[var(--color-accent)]">sencilla</span>.
      </Title>
      <Subtitle>Tuve buenos maestros, hice amigos y crecí en un lugar donde casi todos los caminos eran conocidos.</Subtitle>
      <Paragraph>
        La primaria fue una etapa tranquila. Aprendía, jugaba y construía amistades sin pensar demasiado en el futuro. Ahí fui formando la disciplina que después necesitaría y también la curiosidad por entender cómo funcionaban las cosas.
      </Paragraph>
      <PhotoFrame wide src={elementaryPhoto} alt="Fotografía de primaria" caption="Mis años de primaria" />
    </Section>
  );
}
