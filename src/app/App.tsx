import { AudioProvider } from '@/core/audio/AudioProvider';
import { ThemeProvider } from '@/core/theme/ThemeProvider';
import { StoryLayout } from '@/shared/components/layout/StoryLayout';
import { story } from '@/data/story';

export function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <StoryLayout story={story} />
      </AudioProvider>
    </ThemeProvider>
  );
}