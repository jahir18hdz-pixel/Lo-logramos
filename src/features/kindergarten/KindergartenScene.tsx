import { Section } from '@/shared/components/story/Section';
import { PhotoFrame } from '@/shared/components/ui/PhotoFrame';
import kindergartenPhoto from '@/shared/assets/images/kinder.jpeg';

export function KindergartenScene() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-3xl">
        <p className="caption">Mis primeros aprendizajes</p>
        <h2 className="heading-l mt-6">Terminé el kínder sabiendo algo que apenas estaba comenzando a descubrir.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-justify text-base leading-8 text-[var(--color-ink)]/75 [text-align-last:center] md:text-lg">
          Prácticamente ya sabía leer y escribir. Aquello parecía pequeño, pero fue la primera señal de que aprender podía convertirse en una parte importante de mi vida.
        </p>
        <div className="mx-auto flex justify-center text-left">
          <PhotoFrame src={kindergartenPhoto} alt="Fotografía de kínder" caption="Mi etapa de kínder" />
        </div>
      </div>
    </Section>
  );
}
