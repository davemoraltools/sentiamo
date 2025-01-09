import React from 'react';
import SEO from '../../components/SEO';

export default function Cookies() {
  return (
    <>
      <SEO 
        title="Política de Cookies | Sentiamo"
        description="Información sobre el uso de cookies en Sentiamo y cómo gestionarlas."
        canonical="https://sentiamo.es/cookies"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-8">Política de Cookies</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las cookies?</h2>
              <p className="text-gray-600">
                Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web. 
                Estas permiten al sitio recordar información sobre la visita, como las preferencias de idioma o los datos necesarios 
                para su correcto funcionamiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Tipos de cookies utilizadas en este sitio web</h2>
              <p className="text-gray-600">En sentiamo.es, únicamente utilizamos cookies técnicas estrictamente necesarias para:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Garantizar el correcto funcionamiento del sitio web.</li>
                <li>Procesar pagos a través de la pasarela Stripe.</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Estas cookies no recopilan información personal ni se utilizan para fines publicitarios o analíticos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Gestión y desactivación de cookies</h2>
              <p className="text-gray-600">
                Dado que solo utilizamos cookies necesarias, estas no requieren del consentimiento del usuario para su activación. 
                Si desea restringir o bloquear cookies, puede hacerlo configurando las opciones de su navegador:
              </p>
              <ul className="list-none mt-4 space-y-2">
                <li>
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    Google Chrome: Instrucciones
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    Mozilla Firefox: Instrucciones
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    Safari: Instrucciones
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    Microsoft Edge: Instrucciones
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Actualización de esta política</h2>
              <p className="text-gray-600">
                Esta Política de Cookies podrá actualizarse periódicamente para reflejar cambios en el uso de cookies 
                en el sitio web o actualizaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Última actualización</h2>
              <p className="text-gray-600">
                Esta Política de Cookies fue revisada por última vez el 08 de enero de 2025.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}