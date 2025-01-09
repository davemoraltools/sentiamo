import React from 'react';
import { Play, Pause } from 'lucide-react';

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export default function PlayButton({ isPlaying, onClick, disabled }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors disabled:opacity-50"
      aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
    >
      {isPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6" />
      )}
    </button>
  );
}