import {
  LoaderCircle,
  Music2,
  Volume2,
} from 'lucide-react';

import { useAudio } from '@/core/audio/AudioProvider';

export function MusicController() {
  const {
    playing,
    loading,
    unavailable,
    toggle,
  } = useAudio();

  const label = unavailable
    ? 'No se encontró la canción'
    : playing
      ? 'Pausar música'
      : 'Reproducir música';

  return (
    <div
      className="
        fixed
        bottom-[max(1rem,env(safe-area-inset-bottom))]
        right-[max(1rem,env(safe-area-inset-right))]
        z-[9999]
        flex
        items-center
        gap-2
        pointer-events-none
      "
    >
      {unavailable && (
        <span
          className="
            hidden
            rounded-full
            border
            border-[var(--color-primary)]/15
            bg-white/90
            px-3
            py-2
            text-xs
            text-[var(--color-ink)]/70
            shadow-lg
            backdrop-blur-md
            sm:block
          "
        >
          Agrega public/music/cancion.mp3
        </span>
      )}

      <button
        type="button"
        onClick={() => void toggle()}
        disabled={loading || unavailable}
        aria-label={label}
        title={label}
        className="
          pointer-events-auto
          grid
          size-12
          shrink-0
          touch-manipulation
          place-items-center
          rounded-full
          border
          border-[var(--color-primary)]/20
          bg-white/90
          text-[var(--color-primary)]
          shadow-lg
          backdrop-blur-md
          transition-transform
          duration-200
          hover:-translate-y-1
          hover:bg-white
          active:scale-95
          disabled:cursor-not-allowed
          disabled:opacity-60
          sm:size-14
        "
      >
        {loading ? (
          <LoaderCircle
            className="animate-spin"
            size={20}
          />
        ) : playing ? (
          <Volume2 size={20} />
        ) : (
          <Music2 size={20} />
        )}
      </button>
    </div>
  );
}