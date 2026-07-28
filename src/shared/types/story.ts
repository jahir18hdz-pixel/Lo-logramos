import type { ComponentType } from 'react';

export type StoryEmotion = 'curiosity' | 'tenderness' | 'gratitude' | 'nostalgia' | 'joy' | 'discovery' | 'character' | 'uncertainty' | 'chaos' | 'sadness' | 'hope' | 'pride' | 'celebration';
export type SceneTone = 'calm' | 'warm' | 'deep' | 'tense' | 'bright';
export type SceneSpeed = 'slow' | 'normal';

export interface StoryScene {
  id: string;
  title: string;
  emotion: StoryEmotion;
  tone?: SceneTone;
  speed?: SceneSpeed;
  component: ComponentType;
}

export interface StoryChapter {
  id: string;
  label: string;
  emotion: StoryEmotion;
  scenes: StoryScene[];
}

export interface StoryDefinition {
  title: string;
  chapters: StoryChapter[];
}