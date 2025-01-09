import React from 'react';
import SEO from '../../components/SEO';

export default function Privacidad() {
  return (
    <>
      <SEO 
        title="Política de Privacidad | Sentiamo"
        description="Conoce cómo protegemos tus datos personales y qué derechos tienes sobre ellos en Sentiamo."
        canonical="https://sentiamo.es/privacidad"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-8">Política de Privacidad</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Responsable del tratamiento</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Identidad: NCA Strategic Advisors SL</li>
                <li>CIF: B70941208</li>
                <li>Domicilio: Santa Teresa 63, 4ª planta, 08302 Mataró, Barcelona</li>
                <li>Correo electrónico de contacto: info@sentiamo.es</li>
                <li>Dominio web: sentiamo.es</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Datos personales que se recopilan</h2>
              <p className="text-gray-600">En sentiamo.es recopilamos los siguientes datos personales:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Nombre y correo electrónico: A través del formulario de contacto para gestionar solicitudes y consultas.</li>
                <li>Dirección IP: Registrada automáticamente en los logs del servidor por motivos técnicos y de seguridad.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Finalidad del tratamiento</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Gestionar las solicitudes recibidas a través del formulario de contacto y responder a las consultas.</li>
                <li>Garantizar la seguridad de la web mediante el registro de logs del servidor.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Legitimación del tratamiento</h2>
              <p className="text-gray-600">El tratamiento de datos se basa en:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>El consentimiento del usuario, que se solicita al completar el formulario de contacto.</li>
                <li>El interés legítimo del responsable para garantizar la seguridad del sitio web.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Destinatarios de los datos</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Los datos personales no se cederán a terceros, salvo obligación legal.</li>
                <li>En el caso de la pasarela de pago, los datos necesarios serán transferidos a Stripe, conforme a su propia política de privacidad.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Conservación de los datos</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Los datos del formulario de contacto se conservarán durante el tiempo necesario para gestionar la consulta y hasta un máximo de 12 meses.</li>
                <li>Los logs del servidor se almacenarán durante un plazo de 6 meses.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Derechos del usuario</h2>
              <p className="text-gray-600">Los usuarios tienen derecho a:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Acceso: Conocer los datos personales tratados.</li>
                <li>Rectificación: Solicitar la corrección de datos inexactos o incompletos.</li>
                <li>Supresión: Solicitar la eliminación de los datos cuando ya no sean necesarios.</li>
                <li>Oposición: Negarse al tratamiento de sus datos en determinadas circunstancias.</li>
                <li>Limitación del tratamiento: Restringir el uso de sus datos en ciertos casos.</li>
                <li>Portabilidad: Recibir sus datos en un formato estructurado y transferirlos a otro responsable.</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Para ejercer estos derechos, los usuarios pueden contactar en: info@sentiamo.es, indicando su nombre, apellidos y la solicitud concreta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Medidas de seguridad</h2>
              <p className="text-gray-600">
                En sentiamo.es se aplican medidas técnicas y organizativas para proteger los datos personales de accesos no autorizados, pérdida o alteración.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Actualizaciones de esta política</h2>
              <p className="text-gray-600">
                Esta Política de Privacidad podrá actualizarse periódicamente para reflejar cambios legales o mejoras en nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Última actualización</h2>
              <p className="text-gray-600">
                Esta Política de Privacidad fue revisada por última vez el 08 de enero de 2025.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}