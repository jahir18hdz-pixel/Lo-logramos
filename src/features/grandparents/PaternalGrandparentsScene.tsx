import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import paternalGrandparentsPhoto from '@/shared/assets/images/abuelos-paternos.jpeg';

export function PaternalGrandparentsScene() {
  return (
    <Section>
      <p className="caption">El hogar de mis abuelos paternos</p>
      <Title className="mt-4">
        En otro hogar también crecí rodeado de cariño, trabajo y <span className="text-[var(--color-accent)]">enseñanzas</span>.
      </Title>
      <Subtitle>
        Mis abuelos paternos también me consintieron, pero además me enseñaron a observar cómo se resuelven los días con esfuerzo, paciencia y humildad.
      </Subtitle>
      <Paragraph>
        Con ellos aprendí sobre herramientas, responsabilidad y el valor de ganarse las cosas. Muchas de las lecciones más importantes de mi vida no llegaron dentro de un salón: llegaron viéndolos trabajar.
      </Paragraph>
      <PhotoFrame wide src={paternalGrandparentsPhoto} alt="Fotografía con mis abuelos paternos" caption="Con mis abuelos paternos" />
    </Section>
  );
}
