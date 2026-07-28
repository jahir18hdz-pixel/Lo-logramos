import type { StoryChapter } from '@/shared/types/story';
import { useStoryProgress } from './useStoryProgress';

export function ProgressThread({ chapters }: { chapters: StoryChapter[] }) {
  const progress = useStoryProgress();
  return (
    <aside className="fixed inset-y-[6vh] left-7 z-40 hidden w-8 md:block" aria-label="Progreso de la historia">
      <div className="absolute inset-y-0 left-0 w-px bg-[var(--color-ink)]/12" />
      <div className="absolute left-0 top-0 w-px bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-secondary)] shadow-[0_0_12px_rgba(179,207,229,.55)]" style={{ height: `${progress * 100}%` }} />
      {chapters.map((chapter, index) => {
        const top = chapters.length === 1 ? 0 : index / (chapters.length - 1);
        const active = progress + .02 >= top;
        return <span key={chapter.id} title={chapter.label} className={`absolute -left-[5px] block size-[11px] rounded-full border transition ${active ? 'border-[var(--color-accent)] bg-[var(--color-accent)] shadow-[0_0_12px_rgba(179,207,229,.7)]' : 'border-[var(--color-secondary)] bg-[var(--color-background)]'}`} style={{ top: `${top * 100}%` }} />;
      })}
    </aside>
  );
}