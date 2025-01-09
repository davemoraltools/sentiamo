import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <Music className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-montserrat font-bold">Sentiamo</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Transformamos tus historias en canciones únicas y personalizadas.
              Creamos melodías que perduran en el tiempo.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/particulares" className="text-gray-400 hover:text-white transition-colors">
                  Particulares
                </Link>
              </li>
              <li>
                <Link to="/empresas" className="text-gray-400 hover:text-white transition-colors">
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/aviso-legal" className="text-gray-400 hover:text-white transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/condiciones" className="text-gray-400 hover:text-white transition-colors">
                  Condiciones de Contratación
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sentiamo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}