import React from 'react';
import BenefitCard from './BenefitCard';
import { benefitsData } from './benefitsData';

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
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}