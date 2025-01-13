import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function GraciasPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError(true);
    setIsLoading(false);
  };

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

          <div className="bg-white rounded-xl shadow-lg p-4 relative min-h-[200px]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <Loader2 className="w-8 h-8 text-pink-500 animate-spin" />
              </div>
            )}
            
            {error ? (
              <div className="text-center py-8">
                <p className="text-red-600 mb-4">Lo sentimos, ha ocurrido un error al cargar el formulario.</p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf_op5PFaUmQRA4z7KOLZ1I-E4-XyfuxuqNdqUbo99IgEecaA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 underline"
                >
                  Abrir el formulario en una nueva ventana
                </a>
              </div>
            ) : (
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_op5PFaUmQRA4z7KOLZ1I-E4-XyfuxuqNdqUbo99IgEecaA/viewform?embedded=true" 
                width="100%" 
                height="2377"
                style={{ border: 'none' }}
                title="Formulario de personalización"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              >
                Cargando...
              </iframe>
            )}
          </div>
        </div>
      </div>
    </>
  );
}