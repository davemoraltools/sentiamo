import React from 'react';
import { Play, Pause, Loader2 } from 'lucide-react';

interface PlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  onClick: () => void;
}

export default function PlayButton({ isPlaying, isLoading, onClick }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 
        ${isLoading ? 'bg-gray-400 cursor-wait' : 'bg-primary hover:bg-primary/90 active:scale-95'}`}
      aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
    >
      {isLoading ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : isPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6" />
      )}
    </button>
  );
}