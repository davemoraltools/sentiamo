import React from 'react';
import ImageCarousel from './index';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    alt: 'Music studio setup with instruments'
  },
  {
    url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    alt: 'Couple dancing at wedding'
  },
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    alt: 'Family celebration'
  }
];

export default function CarouselDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <ImageCarousel images={images} interval={4000} />
    </div>
  );
}