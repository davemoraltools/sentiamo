import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const phrases = [
  "texto de prueba uno",
  "texto de prueba dos",
  "texto de prueba tres",
  "texto de prueba cuatro"
];

export default function TestSection() {
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
      setCursorBlinkRate(0.25); // Faster blink during pause
      setTimeout(() => {
        setCursorBlinkRate(0.8); // Return to normal blink rate
        setIsPaused(false);
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 500); // 0.5 second pause with faster cursor blink
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
    <section className="test-section bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="test-content bg-white p-8 rounded-lg shadow-lg">
          <h2 className="test-heading text-3xl font-bold mb-6 text-center">
            <span className="block mb-2">Sección de prueba:</span>
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
          </h2>
          
          <p className="test-paragraph text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </div>
    </section>
  );
}