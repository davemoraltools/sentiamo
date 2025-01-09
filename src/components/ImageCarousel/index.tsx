import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: Array<{
    url: string;
    alt: string;
  }>;
  interval?: number;
}

export default function ImageCarousel({ images, interval = 4000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full overflow-hidden aspect-[16/9]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={{
            enter: (direction: number) => ({
              x: direction > 0 ? '100%' : '-100%',
              opacity: 0
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1
            },
            exit: (direction: number) => ({
              zIndex: 0,
              x: direction < 0 ? '100%' : '-100%',
              opacity: 0
            })
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}