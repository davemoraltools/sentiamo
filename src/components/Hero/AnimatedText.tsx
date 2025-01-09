import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const phrases = [
  "tu boda",
  "San Valentín", 
  "cumpleaños únicos",
  "aniversarios especiales",
  "celebraciones familiares",
  "momentos inolvidables",
  "el amor de tu vida"
];

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorBlinkRate, setCursorBlinkRate] = useState(0.8);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const typingSpeed = 500 / currentPhrase.length;

    if (!isDeleting && displayedText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), 2500);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsPaused(true);
      setCursorBlinkRate(0.25);
      setTimeout(() => {
        setCursorBlinkRate(0.8);
        setIsPaused(false);
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 500);
      return;
    }

    if (isPaused) return;

    const timeout = setTimeout(() => {
      setDisplayedText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentPhrase.slice(0, prev.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedText, isDeleting, isPaused]);

  return (
    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
      <span className="text-white block mb-2">
        Canciones que cuentan
      </span>
      <span className="relative inline-block">
        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {displayedText}
        </span>
        <motion.span
          className="absolute right-[-4px] top-0 h-full w-[3px] bg-primary"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: cursorBlinkRate, repeat: Infinity, repeatType: "reverse" }}
        />
      </span>
    </h1>
  );
}