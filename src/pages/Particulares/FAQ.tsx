import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: '¿Cuánto tiempo tardaré en recibir mi canción?',
    answer: `Después de realizar tu pedido, recibirás un cuestionario para capturar lo que deseas transmitir. Una vez completado, nuestros creadores comenzarán a trabajar en tu canción.

Generalmente, la entrega se realiza en 2-3 días, dependiendo de qué tan rápido completes el cuestionario y valides la letra. Si necesitas un servicio exprés de 24h, contáctanos para analizar las opciones.`
  },
  {
    question: '¿Necesito escribir la letra yo mismo?',
    answer: '¡No es necesario! Nosotros nos encargaremos de capturar la esencia de tu historia con base en el cuestionario que completes. Sin embargo, si tienes una idea o letra, podemos basarnos en ella. Te enviaremos la letra para revisión antes de que el cantante le dé vida.'
  },
  {
    question: '¿Puedo elegir el estilo musical de mi canción?',
    answer: 'Por supuesto, puedes seleccionar entre pop, rock, balada, infantil y casi cualquier género musical. También puedes indicarnos ejemplos de referencia para que nos inspiremos.'
  },
  {
    question: '¿Puede mi canción ser igual a una de vuestras demos?',
    answer: 'Cada canción que creamos es completamente única y personalizada según tus indicaciones. Aunque nos inspires con un ejemplo de nuestras demos, la composición será original.'
  },
  {
    question: '¿En qué formato recibiré mi canción?',
    answer: 'Te entregaremos tu canción en formato MP3 por correo electrónico, lista para llevar en tu móvil, ordenador o guardar en un pendrive.'
  },
  {
    question: '¿En qué idiomas puedo solicitar mi canción?',
    answer: 'Ofrecemos canciones en español (España y Latinoamérica), inglés y catalán. Para otros idiomas, ponte en contacto con nosotros para valorar las opciones.'
  },
  {
    question: '¿Puedo hacer cambios después de recibir mi canción?',
    answer: 'No es posible realizar cambios una vez que la canción está compuesta y producida. Sin embargo, puedes solicitar modificaciones en la letra antes de que se realice la composición final.'
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