import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: '¿Cómo funciona el servicio para empresas?',
    answer: 'Ofrecemos canciones personalizadas como servicio de marca blanca. Tú las incluyes en tu oferta y nosotros nos encargamos del resto.'
  },
  {
    question: '¿Qué margen de beneficio puedo obtener?',
    answer: 'Nuestra tarifa fija te permite decidir el precio final y el margen que ganas con cada canción.'
  },
  {
    question: '¿Necesito firmar un contrato?',
    answer: 'Sí, para garantizar claridad y protección mutua. El contrato no implica costes adicionales.'
  },
  {
    question: '¿Cómo se gestionan los pagos?',
    answer: 'El cliente paga a la sala directamente, y tú nos transfieres el importe correspondiente a cada canción.'
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}