import React from 'react';
import AudioPlayer from '../../AudioPlayer';

const audioExamples = [
  {
    title: "San Valentín",
    description: "Una canción romántica y personalizada, perfecta para decir 'te quiero' como nunca antes",
    audioUrl: "/songs/san-valentin.m4a"
  },
  {
    title: "Banda Sonora de Boda",
    description: "Convierte el día más especial de tu vida en una melodía que os acompañe para siempre.",
    audioUrl: "/songs/nuestro-primer-baile.m4a"
  },
  {
    title: "Cumpleaños Único",
    description: "Sorprende con una canción divertida y alegre que convierta cualquier cumpleaños en inolvidable",
    audioUrl: "/songs/cumple.m4a"
  },
  {
    title: "Agradecimiento",
    description: "Un homenaje musical para agradecer a alguien especial: amigos, familia o compañeros de trabajo",
    audioUrl: "/songs/eres-nuestra-historia.m4a"
  }
];

export default function AudioExamples() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escucha nuestros ejemplos
          </h2>
          <p className="text-gray-600 text-lg">
            Muestras de nuestras canciones personalizadas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audioExamples.map((example, index) => (
            <AudioPlayer 
              key={index}
              {...example}
            />
          ))}
        </div>
      </div>
    </section>
  );
}