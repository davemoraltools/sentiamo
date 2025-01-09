import React from 'react';
import SEO from '../../components/SEO';
import AnimatedHero from '../../components/AnimatedHero';
import Benefits from '../../components/Benefits';
import AudioExamples from '../../components/shared/AudioExamples';
import SocialProof from '../../components/SocialProof';
import Pricing from '../../components/Pricing';
import ContactForm from '../../components/shared/ContactForm';

export default function HomePage() {
  return (
    <>
      <SEO />
      <main>
        <AnimatedHero />
        <Benefits />
        <AudioExamples />
        <SocialProof />
        <Pricing />
        <ContactForm />
      </main>
    </>
  );
}