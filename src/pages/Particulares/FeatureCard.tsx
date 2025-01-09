import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({ icon: Icon, title, description, image }: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 transform -translate-y-14 group-hover:-translate-y-16 transition-transform duration-300">
          <Icon className="w-6 h-6 text-pink-500" />
        </div>
        <div className="-mt-8">
          <h3 className="font-montserrat font-semibold text-xl mb-2">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}