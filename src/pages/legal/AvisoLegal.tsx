import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AvisoLegal() {
  return (
    <>
      <SEO 
        title="Aviso Legal | Sentiamo"
        description="Información legal sobre Sentiamo, términos y condiciones de uso del sitio web y derechos de propiedad intelectual."
        canonical="https://sentiamo.es/aviso-legal"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-8">Aviso Legal</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Datos identificativos</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Titular: NCA Strategic Advisors SL</li>
                <li>CIF: B70941208</li>
                <li>Domicilio social: Santa Teresa 63, 4ª planta, 08302 Mataró, Barcelona</li>
                <li>Correo electrónico de contacto: info@sentiamo.es</li>
                <li>Dominio web: sentiamo.es</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Objeto y ámbito de aplicación</h2>
              <p className="text-gray-600">
                El presente Aviso Legal regula el uso del sitio web sentiamo.es (en adelante, el "Sitio Web"). 
                El acceso al Sitio Web implica la aceptación expresa y sin reservas de todos los términos del presente Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Propiedad intelectual e industrial</h2>
              <p className="text-gray-600">
                Todos los contenidos del Sitio Web, incluyendo sin limitación textos, gráficos, imágenes, su diseño y los derechos 
                de propiedad intelectual que pudieran corresponder a dichos contenidos, así como las marcas, nombres comerciales o 
                cualquier otro signo distintivo son propiedad de NCA Strategic Advisors SL o de sus legítimos propietarios, quedando 
                reservados todos los derechos sobre los mismos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Condiciones de uso</h2>
              <p className="text-gray-600">
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través del Sitio Web 
                y a no emplearlos para:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                <li>Provocar daños en los sistemas físicos y lógicos del Sitio Web, de sus proveedores o de terceras personas.</li>
                <li>Introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles 
                    de provocar daños en los sistemas físicos o lógicos de la empresa, proveedores o de terceras personas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Exclusión de garantías y responsabilidad</h2>
              <p className="text-gray-600">
                NCA Strategic Advisors SL no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza 
                que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal 
                o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las 
                medidas tecnológicas necesarias para evitarlo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Enlaces</h2>
              <p className="text-gray-600">
                En el caso de que en el Sitio Web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, 
                NCA Strategic Advisors SL no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso 
                asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Modificaciones</h2>
              <p className="text-gray-600">
                NCA Strategic Advisors SL se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
                oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través 
                de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Legislación aplicable y jurisdicción</h2>
              <p className="text-gray-600">
                La relación entre NCA Strategic Advisors SL y el usuario se regirá por la normativa española vigente y cualquier 
                controversia se someterá a los Juzgados y tribunales de Mataró.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Política de privacidad y cookies</h2>
              <p className="text-gray-600">
                Para más información sobre nuestra política de privacidad y cookies, por favor consulte los siguientes enlaces:
              </p>
              <div className="mt-2 space-y-2">
                <Link to="/privacidad" className="block text-pink-500 hover:text-pink-600 transition-colors">
                  Política de Privacidad
                </Link>
                <Link to="/cookies" className="block text-pink-500 hover:text-pink-600 transition-colors">
                  Política de Cookies
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Última actualización</h2>
              <p className="text-gray-600">
                Este Aviso Legal fue actualizado por última vez el 08 de enero de 2025.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}