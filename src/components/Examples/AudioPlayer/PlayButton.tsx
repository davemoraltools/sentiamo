import React from 'react';
import { Play, Pause } from 'lucide-react';

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export default function PlayButton({ isPlaying, onClick, disabled = false }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors group
        ${disabled 
          ? 'bg-gray-300 cursor-not-allowed' 
          : 'bg-primary hover:bg-primary/90'
        }`}
      aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
    >
      {isPlaying ? (
        <Pause className="w-6 h-6 group-hover:scale-110 transition-transform" />
      ) : (
        <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}