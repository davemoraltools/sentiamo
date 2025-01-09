import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'María G. Sánchez',
    text: 'La canción para el cumpleaños de mi madre fue perfecta. No pudo contener las lágrimas.',
    occasion: 'Cumpleaños familiar'
  },
  {
    name: 'C. Ruiz Martín',
    text: 'Sorprendí a mi pareja en nuestro aniversario. Un regalo único e inolvidable.',
    occasion: 'Aniversario de boda'
  },
  {
    name: 'Laura M.',
    text: 'El proceso fue muy fácil y el resultado superó todas mis expectativas.',
    occasion: 'San Valentín'
  },
  {
    name: 'David S.',
    text: 'Una experiencia increíble. La canción capturó perfectamente el mensaje que quería transmitir.',
    occasion: 'Pedida de matrimonio'
  },
  {
    name: 'Ana Torres R.',
    text: 'Mi hijo no podía estar más feliz con su canción de cumpleaños personalizada.',
    occasion: 'Cumpleaños infantil'
  },
  {
    name: 'Miguel A. López',
    text: 'Profesionales y creativos. Han conseguido plasmar nuestros sentimientos en música.',
    occasion: 'Boda'
  },
  {
    name: 'Patricia Vega',
    text: 'Una sorpresa inolvidable para mi hermana. La canción fue el regalo perfecto.',
    occasion: 'Graduación'
  },
  {
    name: 'R. Martínez',
    text: 'Calidad excepcional y atención personalizada. Superó todas mis expectativas.',
    occasion: 'Aniversario'
  },
  {
    name: 'Juan Carlos M.',
    text: 'La mejor manera de celebrar nuestras bodas de plata. Una joya musical.',
    occasion: '25º Aniversario'
  }
];

export default function SocialProof() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-16">
          {[
            { number: '500+', label: 'Canciones creadas' },
            { number: '4.9/5', label: 'Valoración media' },
            { number: '98%', label: 'Clientes satisfechos' },
            { number: '24-48h', label: 'Tiempo de entrega' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-500 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        
        <div className="relative overflow-hidden min-h-[250px] sm:min-h-[200px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
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
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {testimonials
                .slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage)
                .map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-pink-500 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Página ${index + 1} de ${totalPages}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}