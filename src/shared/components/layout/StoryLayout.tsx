import type { StoryDefinition } from '@/shared/types/story';

import { MotionEngine } from '@/core/motion/MotionEngine';
import { ProgressThread } from '@/core/progress/ProgressThread';
import { StoryEngine } from '@/core/story/StoryEngine';

import { AmbientBackground } from './AmbientBackground';
import { MusicController } from './MusicController';

type StoryLayoutProps = {
  story: StoryDefinition;
};

export function StoryLayout({ story }: StoryLayoutProps) {
  return (
    <>
      <MotionEngine>
        <AmbientBackground />

        <ProgressThread chapters={story.chapters} />

        <main className="relative z-10">
          <StoryEngine story={story} />
        </main>

        <footer className="relative z-10 py-12 text-center">
          <span className="caption opacity-50">
            Hecho con memorias, no con plantillas
          </span>
        </footer>
      </MotionEngine>

      <MusicController />
    </>
  );
}