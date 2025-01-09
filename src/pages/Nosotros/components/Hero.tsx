import React from 'react';
import Values from './Values';

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Nosotros
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Nacimos con un objetivo claro: transformar historias personales en experiencias 
            inolvidables a través de la música. Cada canción es creada con cariño, 
            creatividad y atención al detalle, asegurándonos de que sea única y especial.
          </p>
          <Values />
        </div>
      </div>
    </section>
  );
}