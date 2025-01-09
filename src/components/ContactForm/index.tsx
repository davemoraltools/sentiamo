import React from 'react';
import { Send } from 'lucide-react';
import useContactForm from './useContactForm';

export default function ContactForm() {
  const { formData, handleSubmit, handleChange } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-[#FFE4E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Transforma tus recuerdos
          </h2>
          <p className="text-gray-600 text-lg">
            Dinos tu historia y nosotros la transformaremos en música
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Tu historia
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-600 md:py-4 md:text-lg md:px-10"
            >
              <Send className="w-5 h-5 mr-2" />
              Contactar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}