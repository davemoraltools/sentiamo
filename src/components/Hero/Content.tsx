import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButtons from './ActionButtons';

export default function Content() {
  const navigate = useNavigate();

  return (
    <div className="mt-8 max-w-3xl mx-auto text-center">
      <p className="text-xl text-gray-200 mb-8 leading-relaxed">
        Haz que tus momentos especiales sean inolvidables con canciones únicas, 
        hechas a medida para ti o tu negocio.
      </p>
      <ActionButtons onNavigate={navigate} />
    </div>
  );
}