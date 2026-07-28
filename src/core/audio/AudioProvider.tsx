import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
  type RefObject,
} from 'react';

type AudioContextValue = {
  playing: boolean;
  loading: boolean;
  unavailable: boolean;
  toggle: () => Promise<void>;
  audioRef: RefObject<HTMLAudioElement | null>;
};

const AudioContext = createContext<AudioContextValue | null>(null);
const TARGET_VOLUME = 0.28;
const FADE_DURATION_MS = 2200;

export function AudioProvider({ children }: PropsWithChildren) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const startedAutomaticallyRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const stopFade = useCallback(() => {
    if (fadeFrameRef.current !== null) {
      cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
  }, []);

  const fadeIn = useCallback(
    (audio: HTMLAudioElement) => {
      stopFade();
      audio.volume = 0;
      const startedAt = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - startedAt) / FADE_DURATION_MS, 1);
        audio.volume = TARGET_VOLUME * progress;

        if (progress < 1 && !audio.paused) {
          fadeFrameRef.current = requestAnimationFrame(step);
        } else {
          fadeFrameRef.current = null;
        }
      };

      fadeFrameRef.current = requestAnimationFrame(step);
    },
    [stopFade],
  );

  const playWithFade = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;

    setLoading(true);
    setUnavailable(false);

    try {
      audio.volume = 0;
      await audio.play();
      fadeIn(audio);
      setPlaying(true);
    } catch {
      // Algunos navegadores no consideran la rueda del mouse una activación
      // válida. El botón flotante queda disponible como alternativa.
      setPlaying(false);
    } finally {
      setLoading(false);
    }
  }, [fadeIn]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      stopFade();
      audio.pause();
      setPlaying(false);
      return;
    }

    await playWithFade();
  }, [playWithFade, stopFade]);

  useEffect(() => {
    const startOnFirstInteraction = () => {
      if (startedAutomaticallyRef.current) return;
      startedAutomaticallyRef.current = true;
      void playWithFade();
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('wheel', startOnFirstInteraction);
      window.removeEventListener('touchmove', startOnFirstInteraction);
      window.removeEventListener('touchstart', startOnFirstInteraction);
      window.removeEventListener('pointerdown', startOnFirstInteraction);
      window.removeEventListener('keydown', startOnFirstInteraction);
    };

    // wheel/touchmove cubren el primer desplazamiento. touchstart,
    // pointerdown y keydown garantizan compatibilidad con las políticas
    // de reproducción automática de distintos navegadores.
    window.addEventListener('wheel', startOnFirstInteraction, { passive: true });
    window.addEventListener('touchmove', startOnFirstInteraction, { passive: true });
    window.addEventListener('touchstart', startOnFirstInteraction, { passive: true });
    window.addEventListener('pointerdown', startOnFirstInteraction, { passive: true });
    window.addEventListener('keydown', startOnFirstInteraction);

    return () => {
      removeListeners();
      stopFade();
    };
  }, [playWithFade, stopFade]);

  const value = useMemo(
    () => ({ playing, loading, unavailable, toggle, audioRef }),
    [playing, loading, unavailable, toggle],
  );

  return (
    <AudioContext.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        src="/music/cancion.mp3"
        loop
        preload="auto"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setUnavailable(true);
        }}
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used inside AudioProvider');
  return context;
}
