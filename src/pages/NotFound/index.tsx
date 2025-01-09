import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEO 
        title="Página no encontrada | Sentiamo"
        description="La página que buscas no existe o ha sido movida."
        canonical="https://sentiamo.es/404"
      />
      {/* Rest of the component remains the same */}
    </>
  );
}