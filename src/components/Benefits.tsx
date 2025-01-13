import React from 'react';
import { Sparkles, Clock, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: '100% Personalizado',
    description: 'Cada canción está hecha desde cero, adaptada a tus necesidades.'
  },
  {
    icon: Clock,
    title: 'Rápido',
    description: 'Recibe tu canción personalizada en tan solo 48-72 horas.'
  },
  {
    icon: MessageSquare,
    title: 'Sencillo',
    description: 'Cuéntanos tu historia. Nosotros hacemos el resto.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[#FFF0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Momentos únicos
          </h2>
          <p className="text-gray-600 text-lg">
            Transformamos tus historias y momentos especiales en canciones únicas, 
            personalizadas con cariño y creatividad. Perfectas para cumpleaños, 
            aniversarios, eventos infantiles, ¡y mucho más!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}