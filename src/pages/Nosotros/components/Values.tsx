import React from 'react';
import { Heart, Lightbulb, Palette } from 'lucide-react';
import ValueCard from './ValueCard';

const values = [
  {
    icon: Heart,
    title: 'Cercanía',
    description: 'Te acompañamos paso a paso para asegurar que tu canción sea perfecta.'
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Utilizamos la última tecnología para crear experiencias inolvidables.'
  },
  {
    icon: Palette,
    title: 'Creatividad',
    description: 'Convertimos tus ideas en arte sonoro.'
  }
];

export default function Values() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <ValueCard key={index} {...value} />
      ))}
    </div>
  );
}