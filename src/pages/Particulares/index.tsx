import React from 'react';
import SEO from '../../components/SEO';
import Hero from './Hero';
import Features from './Features';
import Process from './Process';
import Pricing from '../../components/Pricing';
import AudioExamples from '../../components/shared/AudioExamples';
import SocialProof from '../../components/SocialProof';
import FAQ from './FAQ';
import ContactForm from '../../components/shared/ContactForm';

export default function ParticularesPage() {
  return (
    <>
      <SEO 
        title="Canciones Personalizadas para Particulares | Sentiamo"
        description="Crea momentos inolvidables con canciones personalizadas para cumpleaños, bodas, aniversarios y más. Sorprende a tus seres queridos con un regalo único."
        canonical="https://sentiamo.es/particulares"
        schemaType="Service"
      />
      <Hero />
      <Features />
      <Process />
      <Pricing />
      <AudioExamples />
      <SocialProof />
      <FAQ />
      <ContactForm />
    </>
  );
}