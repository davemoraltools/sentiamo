import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  description: string;
  audioUrl: string;
}

// Mantener registro del audio actualmente reproduciendo
let currentlyPlaying: HTMLAudioElement | null = null;

export default function AudioPlayer({ title, description, audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(currentProgress) ? 0 : currentProgress);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      currentlyPlaying = null;
    };

    const handleError = () => {
      console.error('Error loading audio:', audioUrl);
      setIsPlaying(false);
      currentlyPlaying = null;
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [audioUrl]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        currentlyPlaying = null;
      } else {
        // Detener el audio actual si existe
        if (currentlyPlaying && currentlyPlaying !== audio) {
          currentlyPlaying.pause();
        }
        await audio.play();
        setIsPlaying(true);
        currentlyPlaying = audio;
      }
    } catch (error) {
      console.error('Error toggling play:', error);
      setIsPlaying(false);
      currentlyPlaying = null;
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const newTime = percentage * audio.duration;
    
    if (!isNaN(newTime)) {
      audio.currentTime = newTime;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>

        <div className="flex-1">
          <div 
            className="h-2 bg-gray-200 rounded-full cursor-pointer relative"
            onClick={handleProgressClick}
          >
            <div 
              className="absolute h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <audio 
          ref={audioRef} 
          src={audioUrl} 
          preload="metadata"
        />
      </div>
    </div>
  );
}