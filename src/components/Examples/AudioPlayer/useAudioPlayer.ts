import { useState, useRef } from 'react';

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(isNaN(progress) ? 0 : progress);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return {
    audioRef,
    isPlaying,
    progress,
    togglePlay,
    handleTimeUpdate,
    handleEnded
  };
}