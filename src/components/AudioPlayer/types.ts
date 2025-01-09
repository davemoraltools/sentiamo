export interface AudioPlayerProps {
  title: string;
  description: string;
  audioUrl: string;
}

export interface AudioState {
  isPlaying: boolean;
  progress: number;
  isLoading: boolean;
  error: string | null;
}