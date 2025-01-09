import React from 'react';
import { DollarSign, Wallet, Settings } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: DollarSign,
    title: 'Ingresos adicionales',
    description: 'Añade un valor extra a tus servicios y aumenta tus beneficios con un producto de alto valor.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Wallet,
    title: 'Sin costes iniciales',
    description: 'No necesitas inversión ni gastos adicionales. Solo ofreces el servicio y nosotros hacemos el resto.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Settings,
    title: 'Fácil de gestionar',
    description: 'Nos encargamos de todo: creación de la canción y entrega al cliente. Tú solo añades el servicio a tu oferta.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
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