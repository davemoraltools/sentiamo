import React from 'react';
import { Users, Building2 } from 'lucide-react';
import type { NavigateFunction } from 'react-router-dom';

interface ActionButtonsProps {
  onNavigate: NavigateFunction;
}

export default function ActionButtons({ onNavigate }: ActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button 
        className="btn-primary flex items-center justify-center group"
        onClick={() => onNavigate('/particulares')}
      >
        <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Para Particulares
      </button>
      <button 
        className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 flex items-center justify-center group"
        onClick={() => onNavigate('/empresas')}
      >
        <Building2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Para Empresas
      </button>
    </div>
  );
}