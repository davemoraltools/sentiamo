import React from 'react';

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-pink-50 to-pink-100">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-4 md:mb-6">
            Canciones personalizadas para momentos únicos
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Creamos canciones únicas y personalizadas que emocionan y convierten cualquier 
            celebración en un recuerdo para siempre.
          </p>
        </div>
      </div>
    </section>
  );
}