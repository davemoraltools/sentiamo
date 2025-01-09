import React from 'react';
import PriceCard from './PriceCard';
import { scrollToElement } from '../../utils/scroll';

const plans = [
  {
    title: 'Nota del Corazón',
    subtitle: 'El detalle perfecto para emocionar',
    originalPrice: '34,90',
    price: '27,95',
    discount: '20',
    features: [
      { text: 'Canción personalizada con mimo' },
      { text: '1 revisión de letra pre-producción' },
      { text: 'Generamos una canción' },
      { text: 'Entrega formato MP3' },
      { text: 'Entrega: 2-3 días laborales' }
    ],
    href: '#contact'
  },
  {
    title: 'Armonía del Alma',
    subtitle: 'La canción que cuenta tu historia',
    originalPrice: '59,90',
    price: '47,95',
    discount: '20',
    features: [
      { text: 'Todo lo de Nota del Corazón' },
      { text: 'Canción personalizada con mimo' },
      { text: '1 revisión de la canción', highlight: true },
      { text: 'Entrega formato MP3' },
      { text: 'Entrega: 2-3 días laborales' }
    ],
    href: '#contact',
    isMostPopular: true
  },
  {
    title: 'Recuerdo Eterno',
    subtitle: 'El recuerdo más especial para toda la vida',
    originalPrice: '89,90',
    price: '77,95',
    discount: '15',
    features: [
      { text: 'Todo lo de Armonía del Alma' },
      { text: 'Canción personalizada con mimo' },
      { text: 'Dos versiones de la canción', highlight: true },
      { text: 'Entrega formato MP3' },
      { text: 'Entrega: 2-3 días laborales' }
    ],
    href: '#contact'
  }
];

export default function Pricing() {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('#contact');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Elige tu plan
          </h2>
          <p className="text-xl text-gray-600">
            Encuentra el plan perfecto para crear tu canción personalizada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} onButtonClick={handleContactClick} />
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-12">
          ¿Dudas sobre el mejor plan?{' '}
          <button 
            onClick={handleContactClick}
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            Contáctanos
          </button>
          {' '}y te ayudaremos a elegir.
        </p>
      </div>
    </section>
  );
}