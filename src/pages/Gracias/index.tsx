import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Loader2, ShieldAlert, Send } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function GraciasPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isValidAccess, setIsValidAccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const validateAccess = () => {
      const referrer = document.referrer;
      const isFromStripe = referrer.includes('https://buy.stripe.com') || 
                          referrer.includes('https://checkout.stripe.com');
      
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Contact form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo lo antes posible.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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

      {/* Simple header with just logo */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-2xl font-display font-bold text-center">
            Sentiamo
          </div>
        </div>
      </header>

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

          <div className="bg-white rounded-xl shadow-lg p-4 relative min-h-[200px] mb-12">
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

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold mb-4">
                ¿Tienes alguna duda?
              </h2>
              <p className="text-gray-600">
                Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
                Te responderemos lo antes posible.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-pink-500 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Simple footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sentiamo. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}