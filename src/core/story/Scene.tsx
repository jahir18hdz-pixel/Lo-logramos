import type { StoryScene } from '@/shared/types/story';

export function Scene({ scene }: { scene: StoryScene }) {
  const Component = scene.component;
  return (
    <div data-scene={scene.id}>
      <Component />
    </div>
  );
}
