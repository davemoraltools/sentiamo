import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

export default function GraciasPage() {
  return (
    <>
      <Helmet>
        <title>Gracias por tu compra | Sentiamo</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-display font-bold mb-4">
              ¡Gracias por tu compra!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Para comenzar a crear tu canción personalizada, por favor completa el siguiente formulario.
              Esta información nos ayudará a hacer tu canción única y especial.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_op5PFaUmQRA4z7KOLZ1I-E4-XyfuxuqNdqUbo99IgEecaA/viewform?embedded=true" 
              width="100%" 
              height="2377" 
              style={{ border: 'none' }}
              title="Formulario de personalización"
            >
              Cargando...
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}