import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  occasion: string;
}

export default function TestimonialCard({ name, text, occasion }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="mb-3">
        <div className="font-semibold text-gray-900 mb-1">{name}</div>
        <div className="text-sm text-gray-500">{occasion}</div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 italic flex-grow">{text}</p>
    </div>
  );
}