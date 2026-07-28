import { motion } from "framer-motion";
import { Section } from "@/shared/components/story/Section";
import { PhotoFrame } from "@/shared/components/ui/PhotoFrame";
import graduationPhoto from "@/shared/assets/images/graduacion.jpeg";

export function GraduationScene() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-4xl">
        <p className="caption">El resultado de todo el camino</p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="heading-xl mt-7"
        >
          LO LOGRAMOS
          <br />
          <span className="text-[var(--color-accent)]">FAMILIA</span>
        </motion.h2>
        <p className="mx-auto mt-8 max-w-2xl text-justify text-lg leading-8 text-[var(--color-ink)]/78 [text-align-last:center] md:text-xl">
          Hoy soy Ingeniero en Desarrollo y Gestión de Software.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-justify text-base leading-8 text-[var(--color-ink)]/62 [text-align-last:center]">
          Dicen que una meta se alcanza con esfuerzo. Yo descubrí que también se
          alcanza con amor, apoyo y personas que nunca dejaron de creer en mi.
          Cada persona que está leyendo este mensaje, tuvo un papel importante
          para que yo pudiera llegar hasta aquí.{" "}
        </p>
        <div className="mx-auto flex justify-center text-left">
          <PhotoFrame
            wide
            src={graduationPhoto}
            alt="Fotografía de graduación"
            caption="El día que lo logramos"
          />
        </div>
      </div>
    </Section>
  );
}
