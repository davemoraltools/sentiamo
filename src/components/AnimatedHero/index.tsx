import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Building2 } from 'lucide-react';

const phrases = [
  "una boda",
  "un San Valentín", 
  "cumpleaños únicos",
  "aniversarios especiales",
  "celebraciones familiares",
  "momentos inolvidables",
  "el amor de tu vida"
];

export default function AnimatedHero() {
  const navigate = useNavigate();
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
    <section className="relative min-h-[75vh] md:min-h-[85vh] w-full flex items-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white block mb-3">
              Canciones que cuentan{' '}
            </span>
            <span className="relative inline-block">
              <span className="text-gradient">
                {displayedText}
              </span>
              <motion.span
                className="absolute right-[-4px] top-0 h-full w-[3px] bg-primary"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: cursorBlinkRate, repeat: Infinity, repeatType: "reverse" }}
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto px-4">
            Haz que tus momentos especiales sean inolvidables con canciones únicas, 
            hechas a medida para ti o tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto mt-8 px-6 sm:px-0">
            <button 
              className="w-full sm:w-auto btn-primary flex items-center justify-center group px-6 py-3.5"
              onClick={() => navigate('/particulares')}
            >
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Para Particulares
            </button>
            <button 
              className="w-full sm:w-auto btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 flex items-center justify-center group px-6 py-3.5"
              onClick={() => navigate('/empresas')}
            >
              <Building2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Para Empresas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}