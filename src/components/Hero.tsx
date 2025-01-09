import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Building2, Users2 } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Canciones que cuentan <span className="text-gradient">tu historia</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Haz que tus momentos especiales sean inolvidables con canciones únicas, 
            hechas a medida para ti o tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="btn-primary flex items-center justify-center group"
              onClick={() => navigate('/particulares')}
            >
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Para Particulares
            </button>
            <button 
              className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 flex items-center justify-center group"
              onClick={() => navigate('/empresas')}
            >
              <Building2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Para Empresas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}