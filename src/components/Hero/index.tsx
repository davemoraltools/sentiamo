import React from 'react';
import { useNavigate } from 'react-router-dom';
import Background from './Background';
import Content from './Content';
import AnimatedText from './AnimatedText';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Background />
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText />
          <Content />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 rounded-full bg-white/20">
          <div className="w-full h-1/2 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}