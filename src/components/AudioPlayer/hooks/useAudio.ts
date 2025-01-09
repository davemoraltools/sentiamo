import { useState, useEffect, useRef } from 'react';

export function useAudio(url: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log('Loading audio from:', url); // Debug log
    const audio = new Audio(url);
    audioRef.current = audio;

    const handleLoadedData = () => {
      console.log('Audio loaded successfully'); // Debug log
      setIsLoading(false);
      setError(null);
    };

    const handleTimeUpdate = () => {
      if (audio) {
        const currentProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(isNaN(currentProgress) ? 0 : currentProgress);
      }
    };

    const handleEnded = () => {
      console.log('Audio playback ended'); // Debug log
      setIsPlaying(false);
      setProgress(0);
    };

    const handleError = (e: ErrorEvent) => {
      console.error('Audio error:', e); // Debug log
      setError('Error al cargar el audio');
      setIsLoading(false);
      setIsPlaying(false);
    };

    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, [url]);

  const togglePlay = async () => {
    if (!audioRef.current || isLoading) return;

    try {
      if (isPlaying) {
        console.log('Pausing audio'); // Debug log
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        console.log('Playing audio'); // Debug log
        setError(null);
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error('Playback error:', err); // Debug log
      setError('Error al reproducir el audio');
      setIsPlaying(false);
    }
  };

  return {
    isPlaying,
    progress,
    isLoading,
    error,
    togglePlay
  };
}