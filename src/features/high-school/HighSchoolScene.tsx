import { Section } from '@/shared/components/story/Section';
import { Title } from '@/shared/components/ui/Title';
import { Subtitle } from '@/shared/components/ui/Subtitle';
import { Paragraph } from '@/shared/components/ui/Paragraph';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import { QuizCard } from '@/shared/components/ui/QuizCard';
import highSchoolPhoto from '@/shared/assets/images/prepa.jpeg';

export function HighSchoolScene() {
  return (
    <Section>
      <p className="caption">Preparatoria</p>
      <Title className="mt-4">
        La pregunta dejó de ser qué me gustaba y comenzó a ser qué quería hacer con mi <span className="text-[var(--color-accent)]">vida</span>.
      </Title>
      <Subtitle>Siempre me habían gustado los videojuegos y las computadoras. Durante un tiempo imaginé que podía convertirme en jugador profesional.</Subtitle>
      <Paragraph>
        Después descubrí una posibilidad que cambió la dirección del camino: en vez de limitarme a jugar, podía aprender a crear videojuegos. Así fue como el desarrollo de software dejó de ser solo una idea y comenzó a parecerse a mi futuro.
      </Paragraph>
      <PhotoFrame wide src={highSchoolPhoto} alt="Fotografía de preparatoria" caption="Mi etapa de preparatoria" />
      <QuizCard
        question="¿Qué decidí estudiar para aprender a crear videojuegos?"
        answers={["Desarrollador de software", "Ingeniería en sistemas", "Desarrollador de videojuegos"]}
        correctIndex={0}
      />
    </Section>
  );
}
