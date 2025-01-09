import React from 'react';
import AudioPlayer from './AudioPlayer';

const examples = [
  {
    title: "San Valentín",
    description: "Una canción romántica y personalizada, perfecta para decir 'te quiero' como nunca antes",
    audioUrl: "https://example.com/san-valentin.mp3"
  },
  {
    title: "Aniversario de Amor",
    description: "Melodías que cuentan tu historia de pareja y celebran cada momento compartido",
    audioUrl: "https://example.com/aniversario.mp3"
  },
  {
    title: "Cumpleaños Único",
    description: "Sorprende con una canción divertida y alegre que convierta cualquier cumpleaños en inolvidable",
    audioUrl: "https://example.com/cumpleanos.mp3"
  },
  {
    title: "Agradecimiento",
    description: "Un homenaje musical para agradecer a alguien especial: amigos, familia o compañeros de trabajo",
    audioUrl: "https://example.com/agradecimiento.mp3"
  }
];

export default function Examples() {
  return (
    <section id="examples" className="py-20 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            ¿Cómo suenan nuestras canciones?
          </h2>
          <p className="text-gray-600 text-lg">
            Celebra el amor y momentos especiales con una canción única. 
            Aquí tienes algunos ejemplos que muestran cómo transformamos historias 
            en melodías inolvidables. ¡San Valentín nunca sonará igual!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <AudioPlayer key={index} {...example} />
          ))}
        </div>
      </div>
    </section>
  );
}