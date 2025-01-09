import React from 'react';
import SEO from '../../components/SEO';

export default function Condiciones() {
  return (
    <>
      <SEO 
        title="Condiciones de Contratación | Sentiamo"
        description="Términos y condiciones para la contratación de servicios de canciones personalizadas en Sentiamo."
        canonical="https://sentiamo.es/condiciones"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-8">Condiciones Generales de Contratación</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Identificación del vendedor</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Titular: NCA Strategic Advisors SL</li>
                <li>CIF: B70941208</li>
                <li>Domicilio social: Santa Teresa 63, 4ª planta, 08302 Mataró, Barcelona</li>
                <li>Correo electrónico de contacto: info@sentiamo.es</li>
                <li>Dominio web: sentiamo.es</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Objeto del contrato</h2>
              <p className="text-gray-600">
                Estas condiciones generales regulan la contratación de canciones personalizadas realizadas mediante 
                inteligencia artificial a través del sitio web sentiamo.es.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Proceso de compra</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>El usuario realiza el pago a través de la pasarela Stripe.</li>
                <li>Una vez confirmado el pago, el usuario recibe un formulario para completar los datos necesarios para la personalización de la letra de la canción.</li>
                <li>El equipo de sentiamo.es redactará la letra y la enviará al usuario para su revisión y aprobación.</li>
                <li>Tras recibir el visto bueno del usuario sobre la letra, se procederá a la composición final de la canción.</li>
                <li>Una vez iniciada la composición, no será posible realizar modificaciones.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Precio y formas de pago</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Los precios indicados en el sitio web incluyen los impuestos aplicables.</li>
                <li>El pago se gestiona exclusivamente a través de Stripe, garantizando la seguridad mediante sus políticas y certificaciones.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Plazo de entrega</h2>
              <p className="text-gray-600">
                El tiempo necesario para la entrega de la canción dependerá del flujo de trabajo y las características del pedido. 
                Este plazo se especificará en las FAQ del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Derecho de desistimiento</h2>
              <p className="text-gray-600">
                Dado que se trata de un producto personalizado, no es posible ejercer el derecho de desistimiento una vez que 
                el usuario haya aprobado la letra y se haya iniciado la composición, conforme al artículo 103.c) del Real 
                Decreto Legislativo 1/2007.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Propiedad intelectual</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>El cliente recibe un derecho de uso personal y no exclusivo sobre la canción personalizada.</li>
                <li>NCA Strategic Advisors SL se reserva todos los derechos de explotación comercial sobre el producto.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Obligaciones del cliente</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Proporcionar información precisa y completa en el formulario de personalización.</li>
                <li>Revisar y aprobar la letra en el plazo especificado para evitar retrasos.</li>
                <li>No reproducir, distribuir ni utilizar la canción con fines comerciales sin autorización expresa.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Exclusión de garantías y responsabilidad</h2>
              <p className="text-gray-600">El vendedor no será responsable por:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Fallos técnicos en la pasarela de pago Stripe.</li>
                <li>Retrasos ocasionados por la falta de respuesta o aprobación por parte del usuario.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Legislación aplicable y jurisdicción</h2>
              <p className="text-gray-600">
                Estas condiciones se rigen por la legislación española. Cualquier disputa se someterá a los juzgados y 
                tribunales de Mataró.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Última actualización</h2>
              <p className="text-gray-600">
                Estas condiciones generales fueron revisadas por última vez el 08 de enero de 2025.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}