import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Loader2, ShieldAlert } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function GraciasPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isValidAccess, setIsValidAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Validate access
    const validateAccess = () => {
      const referrer = document.referrer;
      const isFromStripe = referrer.includes('https://buy.stripe.com') || 
                          referrer.includes('https://checkout.stripe.com');
      
      // Check for valid referrer or state passed from payment success
      const hasValidState = location.state?.fromPayment === true;
      
      if (!isFromStripe && !hasValidState) {
        navigate('/', { replace: true });
        return;
      }

      setIsValidAccess(true);
    };

    validateAccess();
  }, [navigate, location]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError(true);
    setIsLoading(false);
  };

  if (!isValidAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <div className="text-center p-8">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-display font-bold mb-4">
            Acceso no autorizado
          </h1>
          <p className="text-gray-600 mb-6">
            Redirigiendo a la página principal...
          </p>
        </div>
      </div>
    );
  }

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
                  href="https://docs.google.com/forms/d/e/1FAIpQLScAQI7flIBS3un2uhv4iPj-TFjQoisBfi2h44prtFG2FL4RUA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 underline"
                >
                  Abrir el formulario en una nueva ventana
                </a>
              </div>
            ) : (
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScAQI7flIBS3un2uhv4iPj-TFjQoisBfi2h44prtFG2FL4RUA/viewform?embedded=true" 
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