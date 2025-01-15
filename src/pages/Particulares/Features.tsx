import React from 'react';
import { Gift, Clock, Calendar } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Gift,
    title: 'Regalo Único',
    description: 'Cada canción se adapta a tu historia, con letras personalizadas y un estilo musical a tu gusto.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Clock,
    title: 'Fácil y Rápido',
    description: 'Recibe tu canción lista en 48-72 horas.',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Calendar,
    title: 'Para cualquier ocasión',
    description: 'Desde cumpleaños y aniversarios hasta sorpresas románticas o familiares. ¡Tú decides!',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}