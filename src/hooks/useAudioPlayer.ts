import { useState, useEffect, useRef } from 'react';
import { useAudioStore } from '../store/audioStore';

export function useAudioPlayer(id: string, url: string) {
  const [isReady, setIsReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const { currentlyPlaying, setCurrentlyPlaying, stopAll } = useAudioStore();
  const isPlaying = currentlyPlaying === id;

  useEffect(() => {
    const audio = new Audio();
    audio.src = url;
    audioRef.current = audio;

    const handleCanPlay = () => setIsReady(true);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      stopAll();
      setCurrentTime(0);
    };
    const handleError = (e: ErrorEvent) => {
      console.error('Error loading audio:', e);
      stopAll();
      setIsReady(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.src = '';
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [url, id, stopAll]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentlyPlaying === id) {
      audio.play().catch(() => stopAll());
    } else {
      audio.pause();
    }
  }, [currentlyPlaying, id, stopAll]);

  const togglePlay = () => {
    if (!isReady || !audioRef.current) return;
    
    if (isPlaying) {
      stopAll();
    } else {
      setCurrentlyPlaying(id);
    }
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const skipForward = (seconds: number) => {
    if (!audioRef.current) return;
    const newTime = Math.min(audioRef.current.currentTime + seconds, duration);
    seek(newTime);
  };

  const skipBackward = (seconds: number) => {
    if (!audioRef.current) return;
    const newTime = Math.max(audioRef.current.currentTime - seconds, 0);
    seek(newTime);
  };

  return {
    isReady,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    seek,
    skipForward,
    skipBackward
  };
}