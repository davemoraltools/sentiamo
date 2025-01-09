import React from 'react';
import SEO from '../../components/SEO';
import Hero from './components/Hero';
import Team from './components/Team';
import ContactForm from '../../components/shared/ContactForm';

export default function NosotrosPage() {
  return (
    <>
      <SEO 
        title="Sobre Nosotros | Sentiamo"
        description="Conoce al equipo detrás de Sentiamo. Expertos en música y tecnología creando canciones personalizadas únicas con pasión y creatividad."
        canonical="https://sentiamo.es/nosotros"
        schemaType="Organization"
      />
      <Hero />
      <Team />
      <ContactForm />
    </>
  );
}