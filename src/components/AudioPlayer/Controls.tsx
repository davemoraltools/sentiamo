import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onBackward: () => void;
  onForward: () => void;
  disabled?: boolean;
}

export default function Controls({
  isPlaying,
  onPlayPause,
  onBackward,
  onForward,
  disabled = false
}: ControlsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onBackward}
        disabled={disabled}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
        aria-label="Retroceder 10 segundos"
      >
        <SkipBack className="w-5 h-5" />
      </button>
      
      <button
        onClick={onPlayPause}
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

      <button
        onClick={onForward}
        disabled={disabled}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
        aria-label="Avanzar 10 segundos"
      >
        <SkipForward className="w-5 h-5" />
      </button>
    </div>
  );
}