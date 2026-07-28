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
  interactionRequired: boolean;
  toggle: () => Promise<void>;
  start: () => Promise<boolean>;
  audioRef: RefObject<HTMLAudioElement | null>;
};

const AudioContext = createContext<AudioContextValue | null>(null);

const TARGET_VOLUME = 0.28;
const FADE_DURATION_MS = 1200;

export function AudioProvider({ children }: PropsWithChildren) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);
  const playPromiseRef = useRef<Promise<boolean> | null>(null);

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [interactionRequired, setInteractionRequired] = useState(false);

  const stopFade = useCallback(() => {
    if (fadeFrameRef.current !== null) {
      window.cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
  }, []);

  const fadeIn = useCallback(
    (audio: HTMLAudioElement) => {
      stopFade();

      audio.volume = 0;

      const startedAt = performance.now();

      const step = (now: number) => {
        if (audio.paused) {
          fadeFrameRef.current = null;
          return;
        }

        const elapsed = now - startedAt;
        const progress = Math.min(elapsed / FADE_DURATION_MS, 1);

        // Suavizado ease-out para que el volumen no suba bruscamente.
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        audio.volume = TARGET_VOLUME * easedProgress;

        if (progress < 1) {
          fadeFrameRef.current = window.requestAnimationFrame(step);
        } else {
          audio.volume = TARGET_VOLUME;
          fadeFrameRef.current = null;
        }
      };

      fadeFrameRef.current = window.requestAnimationFrame(step);
    },
    [stopFade],
  );

  const start = useCallback(async (): Promise<boolean> => {
    const audio = audioRef.current;

    if (!audio) {
      return false;
    }

    if (!audio.paused) {
      setPlaying(true);
      setInteractionRequired(false);
      hasStartedRef.current = true;
      return true;
    }

    // Evita varios intentos simultáneos al tocar rápidamente.
    if (playPromiseRef.current) {
      return playPromiseRef.current;
    }

    const playRequest = async () => {
      setLoading(true);
      setUnavailable(false);

      try {
        audio.volume = 0;

        await audio.play();

        hasStartedRef.current = true;
        setPlaying(true);
        setInteractionRequired(false);

        fadeIn(audio);

        return true;
      } catch (error) {
        console.warn(
          'El navegador bloqueó la reproducción automática:',
          error,
        );

        setPlaying(false);
        setInteractionRequired(true);

        return false;
      } finally {
        setLoading(false);
        playPromiseRef.current = null;
      }
    };

    playPromiseRef.current = playRequest();

    return playPromiseRef.current;
  }, [fadeIn]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!audio.paused) {
      stopFade();
      audio.pause();
      setPlaying(false);
      return;
    }

    await start();
  }, [start, stopFade]);

  useEffect(() => {
    const attemptStart = () => {
      if (hasStartedRef.current) {
        return;
      }

      void start();
    };

    /*
     * pointerup funciona para mouse, pluma y la mayoría de pantallas táctiles.
     * touchend se conserva como respaldo para Safari/iOS.
     * keydown permite iniciar con teclado.
     */
    window.addEventListener('pointerup', attemptStart, {
      passive: true,
    });

    window.addEventListener('touchend', attemptStart, {
      passive: true,
    });

    window.addEventListener('keydown', attemptStart);

    return () => {
      window.removeEventListener('pointerup', attemptStart);
      window.removeEventListener('touchend', attemptStart);
      window.removeEventListener('keydown', attemptStart);

      stopFade();
    };
  }, [start, stopFade]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handleCanPlay = () => {
      setUnavailable(false);
    };

    const handleWaiting = () => {
      if (!audio.paused) {
        setLoading(true);
      }
    };

    const handlePlaying = () => {
      setLoading(false);
      setPlaying(true);
      setInteractionRequired(false);
    };

    const handlePause = () => {
      setPlaying(false);
      setLoading(false);
    };

    const handleError = () => {
      setPlaying(false);
      setLoading(false);
      setUnavailable(true);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const value = useMemo<AudioContextValue>(
    () => ({
      playing,
      loading,
      unavailable,
      interactionRequired,
      toggle,
      start,
      audioRef,
    }),
    [
      playing,
      loading,
      unavailable,
      interactionRequired,
      toggle,
      start,
    ],
  );

  return (
    <AudioContext.Provider value={value}>
      {children}

      <audio
        ref={audioRef}
        src="/music/cancion.mp3"
        loop
        preload="metadata"
        playsInline
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error(
      'useAudio debe utilizarse dentro de AudioProvider',
    );
  }

  return context;
}