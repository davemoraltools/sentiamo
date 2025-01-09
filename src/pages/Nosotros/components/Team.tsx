import React from 'react';

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-6">El equipo</h2>
          <p className="text-lg text-gray-600 mb-10">
            Somos apasionados de la música y la tecnología, comprometidos con ofrecerte 
            la mejor experiencia posible. Trabajamos para que cada canción sea más que 
            una melodía, sea un recuerdo.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Equipo de SongCraft trabajando en conjunto"
            className="w-full h-[500px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}