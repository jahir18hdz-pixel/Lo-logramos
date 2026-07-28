import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import { QuizCard } from '@/shared/components/ui/QuizCard';
import babyPhoto from '@/shared/assets/images/bebe.jpeg';

export function BirthScene() {
  return (
    <Section>
      <p className="caption">18 de enero de 2004</p>
      <QuizCard question="¿En cuál oreja nací con la malformación?" answers={["Izquierda", "Derecha"]} correctIndex={0} />
      <Title className="mt-10">
        Ese día comenzó una historia que nadie podía <span className="text-[var(--color-accent)]">imaginar</span>.
      </Title>
      <Subtitle>
        Mis papás eran padres primerizos. Yo llegué con una malformación en la oreja izquierda y con muchas preguntas que ellos todavía no sabían responder.
      </Subtitle>
      <Paragraph>
        Me llevaron con médicos y especialistas buscando la mejor opción para mí. La mayoría coincidía en que era principalmente una cuestión estética, así que decidieron esperar. Antes de que yo pudiera comprender mi diferencia, ellos ya me habían enseñado a vivirla sin miedo.
      </Paragraph>
      <PhotoFrame src={babyPhoto} alt="Fotografía de bebé" caption="Mis primeros días" />
    </Section>
  );
}
