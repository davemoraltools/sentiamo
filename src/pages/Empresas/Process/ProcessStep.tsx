import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

export default function ProcessStep({ icon: Icon, title, description, number }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <div className="mt-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="font-montserrat font-semibold text-xl mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}