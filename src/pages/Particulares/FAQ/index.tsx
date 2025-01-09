import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from './faqData';

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}