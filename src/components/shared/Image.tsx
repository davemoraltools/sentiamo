import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export default function Image({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`max-w-full ${className}`}
      {...props}
    />
  );
}