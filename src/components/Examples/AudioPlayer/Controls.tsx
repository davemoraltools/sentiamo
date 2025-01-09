import React from 'react';
import { Volume2 } from 'lucide-react';
import PlayButton from './PlayButton';
import ProgressBar from './ProgressBar';

interface ControlsProps {
  isPlaying: boolean;
  progress: number;
  onPlayPause: () => void;
}

export default function Controls({ isPlaying, progress, onPlayPause }: ControlsProps) {
  return (
    <div className="flex items-center space-x-4">
      <PlayButton isPlaying={isPlaying} onClick={onPlayPause} />
      <ProgressBar progress={progress} />
      <Volume2 className="w-6 h-6 text-gray-500" />
    </div>
  );
}