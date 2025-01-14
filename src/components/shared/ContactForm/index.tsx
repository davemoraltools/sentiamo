import React from 'react';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import useContactForm from './useContactForm';

export default function ContactForm() {
  const { formData, handleChange, privacyAccepted, setPrivacyAccepted, submitStatus, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-[#FFE4E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Transforma tus recuerdos
          </h2>
          <p className="text-xl text-gray-600">
            Dinos tu historia y nosotros la transformaremos en música
          </p>
        </div>

        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="email-to" value="contacto@sentiamo.es" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Tu historia
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none"
              required
            />
          </div>

          {/* GDPR Notice */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg text-xs text-gray-600">
            <h3 className="font-semibold mb-2">Información Básica sobre Protección de Datos</h3>
            <ul className="space-y-1">
              <li><strong>Responsable:</strong> NCA Strategic Advisors SL</li>
              <li><strong>Finalidad:</strong> Gestionar la solicitud realizada a través del formulario de contacto</li>
              <li><strong>Legitimación:</strong> Consentimiento del interesado</li>
              <li><strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal</li>
              <li><strong>Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos</li>
            </ul>
            <p className="mt-2">
              Puedes consultar la información adicional y detallada sobre Protección de Datos en nuestra{' '}
              <Link to="/privacidad" className="text-pink-500 hover:text-pink-600 underline">
                Política de Privacidad
              </Link>
              .
            </p>
          </div>

          <div className="mt-4">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="privacy-accepted"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-300 rounded"
                required
              />
              <span className="text-xs text-gray-600">
                He leído y acepto la{' '}
                <Link to="/privacidad" className="text-pink-500 hover:text-pink-600 underline">
                  Política de Privacidad
                </Link>
              </span>
            </label>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg animate-fade-in">
              Gracias, hemos recibido tu formulario de contacto
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="w-full flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-pink-500 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5 mr-2" />
              {submitStatus === 'submitting' ? 'Enviando...' : 'Contactar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}