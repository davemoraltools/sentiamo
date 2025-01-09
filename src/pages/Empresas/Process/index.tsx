import React from 'react';
import { FileText, Music2, Clock } from 'lucide-react';
import ProcessStep from './ProcessStep';

const steps = [
  {
    icon: FileText,
    title: 'Ofreces el servicio',
    description: 'Incluye las canciones personalizadas en tu catálogo de servicios o paquetes de cumpleaños y eventos.'
  },
  {
    icon: Music2,
    title: 'Nos llegan los detalles',
    description: 'El cliente rellena un formulario online sencillo con los datos que necesitamos para la canción.'
  },
  {
    icon: Clock,
    title: 'Entrega en 24-48 horas',
    description: 'Nosotros creamos la canción y la entregamos lista para usar. Sin que tengas que preocuparte por nada.'
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            ¿Cómo funciona?
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