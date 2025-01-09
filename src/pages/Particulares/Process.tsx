import React from 'react';
import { MessageSquare, Music, Clock } from 'lucide-react';
import ProcessStep from './ProcessStep';

const steps = [
  {
    icon: MessageSquare,
    title: 'Cuéntanos tu historia',
    description: 'Rellena un sencillo formulario con los detalles de la canción: nombres, anécdotas, emociones y estilo musical.'
  },
  {
    icon: Music,
    title: 'Creamos tu canción',
    description: 'Transformamos tu historia en una letra única y la acompañamos con la música perfecta para la ocasión.'
  },
  {
    icon: Clock,
    title: 'Recíbela en 24-48 horas',
    description: 'Te enviamos la canción en formato digital para que la uses como quieras: una fiesta, un regalo o ese momento especial.'
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-[#FFF0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Un, dos, tres, dale al play
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} number={index + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}