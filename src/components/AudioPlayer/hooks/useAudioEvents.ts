import { useCallback } from 'react';
import { AUDIO_ERROR_MESSAGES } from '../constants';

interface UseAudioEventsParams {
  audio: HTMLAudioElement;
  onLoaded: () => void;
  onProgress: (progress: number) => void;
  onEnded: () => void;
  onError: (message: string) => void;
}

export function useAudioEvents({
  audio,
  onLoaded,
  onProgress,
  onEnded,
  onError
}: UseAudioEventsParams) {
  const handleLoadedData = useCallback(() => {
    console.log('Audio loaded successfully');
    onLoaded();
  }, [onLoaded]);

  const handleTimeUpdate = useCallback(() => {
    const currentProgress = (audio.currentTime / audio.duration) * 100;
    onProgress(isNaN(currentProgress) ? 0 : currentProgress);
  }, [audio, onProgress]);

  const handleEnded = useCallback(() => {
    console.log('Audio playback ended');
    onEnded();
  }, [onEnded]);

  const handleError = useCallback(() => {
    console.error('Audio error occurred');
    onError(AUDIO_ERROR_MESSAGES.LOAD_ERROR);
  }, [onError]);

  return {
    handleLoadedData,
    handleTimeUpdate,
    handleEnded,
    handleError
  };
}