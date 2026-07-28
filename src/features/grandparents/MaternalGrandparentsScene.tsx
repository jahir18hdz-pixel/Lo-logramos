import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import maternalGrandparentsPhoto from '@/shared/assets/images/abuelos-maternos.jpeg';

export function MaternalGrandparentsScene() {
  return (
    <Section>
      <p className="caption">El hogar de mis abuelitos maternos</p>
      <Title className="mt-4">
        Antes de conocer el mundo, conocí un lugar donde siempre estaba <span className="text-[var(--color-accent)]">protegido</span>.
      </Title>
      <Subtitle>
        Viví con mis abuelitos maternos, quienes me cuidaron con una ternura inmensa y se convirtieron en una presencia fundamental durante mis primeros años.
      </Subtitle>
      <Paragraph>
        En su casa nunca me faltó cariño. Me acompañaron, me consintieron y me hicieron sentir que siempre existía un lugar seguro al cual volver.
      </Paragraph>
      <PhotoFrame wide src={maternalGrandparentsPhoto} alt="Fotografía con mis abuelos maternos" caption="Con mis abuelos maternos" />
    </Section>
  );
}
