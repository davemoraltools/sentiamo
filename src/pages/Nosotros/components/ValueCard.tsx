import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <h3 className="font-montserrat font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}