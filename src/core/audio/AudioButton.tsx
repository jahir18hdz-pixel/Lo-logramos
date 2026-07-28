import { useAudio } from './AudioProvider';
import styles from './AudioButton.module.css';

export function AudioButton() {
  const {
    playing,
    loading,
    unavailable,
    interactionRequired,
    toggle,
  } = useAudio();

  if (unavailable) {
    return null;
  }

  const getLabel = () => {
    if (loading) return 'Cargando música';
    if (playing) return 'Pausar música';
    return 'Reproducir música';
  };

  return (
    <div className={styles.wrapper}>
      {interactionRequired && !playing && (
        <span className={styles.hint}>
          Toca para activar la música
        </span>
      )}

      <button
        type="button"
        className={`${styles.button} ${
          playing ? styles.playing : ''
        }`}
        onClick={() => void toggle()}
        disabled={loading}
        aria-label={getLabel()}
        title={getLabel()}
      >
        {loading ? (
          <span className={styles.loader} />
        ) : playing ? (
          <span aria-hidden="true">♫</span>
        ) : (
          <span aria-hidden="true">♪</span>
        )}
      </button>
    </div>
  );
}