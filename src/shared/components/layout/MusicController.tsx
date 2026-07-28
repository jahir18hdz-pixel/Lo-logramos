import { LoaderCircle, Music2, Volume2 } from 'lucide-react';
import { useAudio } from '@/core/audio/AudioProvider';

export function MusicController() {
  const { playing, loading, unavailable, toggle } = useAudio();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {unavailable && (
        <span className="hidden rounded-full border border-[var(--color-primary)]/15 bg-white/80 px-3 py-2 text-xs text-[var(--color-ink)]/70 shadow-lg backdrop-blur-xl sm:block">
          Agrega public/music/cancion.mp3
        </span>
      )}
      <button
        type="button"
        onClick={() => void toggle()}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
        title={unavailable ? 'Agrega public/music/cancion.mp3' : playing ? 'Pausar música' : 'Reproducir música'}
        className="grid size-12 place-items-center rounded-full border border-[var(--color-primary)]/20 bg-white/78 text-[var(--color-primary)] shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
      >
        {loading ? <LoaderCircle className="animate-spin" size={18} /> : playing ? <Volume2 size={18} /> : <Music2 size={18} />}
      </button>
    </div>
  );
}
