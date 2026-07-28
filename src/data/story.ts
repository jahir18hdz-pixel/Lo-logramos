import type { StoryDefinition } from '@/shared/types/story';
import { IntroScene } from '@/features/intro/IntroScene';
import { BirthScene } from '@/features/birth/BirthScene';
import { ParentsScene } from '@/features/parents/ParentsScene';
import { MaternalGrandparentsScene } from '@/features/grandparents/MaternalGrandparentsScene';
import { PaternalGrandparentsScene } from '@/features/grandparents/PaternalGrandparentsScene';
import { KindergartenScene } from '@/features/kindergarten/KindergartenScene';
import { ElementaryScene } from '@/features/elementary/ElementaryScene';
import { MiddleSchoolScene } from '@/features/middle-school/MiddleSchoolScene';
import { HighSchoolScene } from '@/features/high-school/HighSchoolScene';
import { UniversityScene } from '@/features/university/UniversityScene';
import { FamilyScene } from '@/features/family/FamilyScene';
import { HardMomentScene } from '@/features/hard-moment/HardMomentScene';
import { GraduationScene } from '@/features/graduation/GraduationScene';
import { InvitationScene } from '@/features/invitation/InvitationScene';

export const story: StoryDefinition = {
  title: 'Lo Logramos',
  chapters: [
    { id: 'intro', label: 'Bienvenida', emotion: 'curiosity', scenes: [{ id: 'intro-opening', title: 'Un camino, muchas personas, una meta', emotion: 'curiosity', tone: 'calm', speed: 'slow', component: IntroScene }] },
    { id: 'birth', label: 'Nacimiento', emotion: 'tenderness', scenes: [{ id: 'birth-origin', title: 'Llegué distinto', emotion: 'tenderness', tone: 'warm', component: BirthScene }] },
    { id: 'parents', label: 'Papás', emotion: 'gratitude', scenes: [{ id: 'parents-love', title: 'Los primeros años', emotion: 'gratitude', tone: 'warm', component: ParentsScene }] },
    {
      id: 'grandparents',
      label: 'Abuelos',
      emotion: 'nostalgia',
      scenes: [
        { id: 'maternal-grandparents', title: 'Mis abuelos maternos', emotion: 'tenderness', tone: 'warm', component: MaternalGrandparentsScene },
        { id: 'paternal-grandparents', title: 'Mis abuelos paternos', emotion: 'nostalgia', tone: 'deep', component: PaternalGrandparentsScene },
      ],
    },
    { id: 'kindergarten', label: 'Kínder', emotion: 'joy', scenes: [{ id: 'kindergarten-learning', title: 'Aprender se sentía bien', emotion: 'joy', tone: 'bright', component: KindergartenScene }] },
    { id: 'elementary', label: 'Primaria', emotion: 'discovery', scenes: [{ id: 'elementary-village', title: 'Mi pueblo', emotion: 'discovery', tone: 'warm', component: ElementaryScene }] },
    { id: 'middle-school', label: 'Secundaria', emotion: 'character', scenes: [{ id: 'middle-school-character', title: 'Aprendí a defenderme', emotion: 'character', tone: 'tense', component: MiddleSchoolScene }] },
    { id: 'high-school', label: 'Preparatoria', emotion: 'uncertainty', scenes: [{ id: 'high-school-future', title: 'El futuro', emotion: 'uncertainty', tone: 'deep', component: HighSchoolScene }] },
    { id: 'university', label: 'Universidad', emotion: 'chaos', scenes: [{ id: 'university-path', title: 'La etapa más difícil', emotion: 'chaos', tone: 'tense', component: UniversityScene }] },
    { id: 'family', label: 'Familia', emotion: 'hope', scenes: [{ id: 'family-support', title: 'Nunca soltaron', emotion: 'hope', tone: 'warm', component: FamilyScene }] },
    { id: 'hard-moment', label: 'Mi abuelo', emotion: 'sadness', scenes: [{ id: 'hard-moment-grandfather', title: 'Mi abuelo enfermó', emotion: 'sadness', tone: 'deep', component: HardMomentScene }] },
    { id: 'graduation', label: 'Graduación', emotion: 'pride', scenes: [{ id: 'graduation-achievement', title: 'Lo logramos familia', emotion: 'pride', tone: 'bright', component: GraduationScene }] },
    { id: 'invitation', label: 'Invitación', emotion: 'celebration', scenes: [{ id: 'invitation-celebrate', title: 'Celebremos juntos', emotion: 'celebration', tone: 'bright', component: InvitationScene }] },
  ],
};
