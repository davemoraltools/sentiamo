import React from 'react';

interface AudioElementProps {
  src: string;
  ref: React.RefObject<HTMLAudioElement>;
  onTimeUpdate: () => void;
  onEnded: () => void;
  onLoadedData: () => void;
  onError: () => void;
}

export default function AudioElement({
  src,
  ref,
  onTimeUpdate,
  onEnded,
  onLoadedData,
  onError
}: AudioElementProps) {
  return (
    <audio
      ref={ref}
      src={src}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      onLoadedData={onLoadedData}
      onError={onError}
      preload="metadata"
    />
  );
}