import type { StoryEmotion } from '@/shared/types/story';
export const emotionalMap: Array<{ chapter: string; emotion: StoryEmotion; intention: string; validation: string }> = [
  { chapter:'Bienvenida', emotion:'curiosity', intention:'Abrir una pregunta.', validation:'¿Quiero seguir bajando?' },
  { chapter:'Nacimiento', emotion:'tenderness', intention:'Mostrar vulnerabilidad sin dramatizar.', validation:'¿La diferencia se siente humana?' },
  { chapter:'Papás', emotion:'gratitude', intention:'Reconocer el amor que sostuvo el inicio.', validation:'¿Se siente el cuidado?' },
  { chapter:'Abuelos', emotion:'nostalgia', intention:'Recordar las raíces.', validation:'¿Evoca hogar?' },
  { chapter:'Universidad', emotion:'chaos', intention:'Mostrar que el logro tuvo costo.', validation:'¿Se percibe la dificultad?' },
  { chapter:'Familia', emotion:'hope', intention:'Transformar la dificultad en apoyo.', validation:'¿El usuario siente compañía?' },
  { chapter:'Graduación', emotion:'pride', intention:'Dejar respirar el logro.', validation:'¿El momento se siente ganado?' },
  { chapter:'Invitación', emotion:'celebration', intention:'Convertir la emoción en encuentro.', validation:'¿Quiero celebrar con él?' },
];