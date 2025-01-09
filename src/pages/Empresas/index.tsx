import React from 'react';
import SEO from '../../components/SEO';
import Hero from './Hero';
import Features from './Features';
import Process from './Process';
import AudioExamples from '../../components/shared/AudioExamples';
import SocialProof from '../../components/SocialProof';
import FAQ from './FAQ';
import ContactForm from '../../components/shared/ContactForm';

export default function EmpresasPage() {
  return (
    <>
      <SEO 
        title="Canciones Personalizadas para Empresas | Sentiamo"
        description="Diferencia tu negocio con canciones personalizadas. Servicio de marca blanca para salas de eventos, wedding planners y empresas de entretenimiento."
        canonical="https://sentiamo.es/empresas"
        schemaType="Service"
      />
      <Hero />
      <Features />
      <Process />
      <AudioExamples />
      <SocialProof />
      <FAQ />
      <ContactForm />
    </>
  );
}