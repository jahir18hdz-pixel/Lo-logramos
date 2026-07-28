import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import middleSchoolPhoto from '@/shared/assets/images/secundaria.jpeg';

export function MiddleSchoolScene() {
  return (
    <Section>
      <p className="caption">Secundaria</p>
      <Title className="mt-4">
        Por primera vez salí de mi pueblo y entré a un lugar donde casi nadie me <span className="text-[var(--color-accent)]">conocía</span>.
      </Title>
      <Subtitle>Las preguntas sobre mi oreja aparecieron, aunque casi siempre nacían de la curiosidad y no de la intención de hacer daño.</Subtitle>
      <Paragraph>
        Solo una vez un niño decidió llamarme “duende”. Le advertí que parara. Cuando continuó, me defendí (obvio, lo puse en su lugar, jeje). Mi abuelita estuvo de mi lado y aquel momento me dejó una lección: podía escuchar preguntas, pero no permitir que alguien convirtiera mi diferencia en una forma de disminuirme.
      </Paragraph>
      <Paragraph>
        También fue una etapa en la que comencé a tomar la escuela con mayor responsabilidad, acompañado de cerca por mi mamá.
      </Paragraph>
      <PhotoFrame wide src={middleSchoolPhoto} alt="Fotografía de secundaria" caption="Mi etapa de secundaria" />
    </Section>
  );
}
