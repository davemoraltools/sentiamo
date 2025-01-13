import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useScrollReset } from './hooks/useScrollReset';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ParticularesPage from './pages/Particulares';
import EmpresasPage from './pages/Empresas';
import NosotrosPage from './pages/Nosotros';
import GraciasPage from './pages/Gracias';
import NotFoundPage from './pages/NotFound';
// Importar páginas legales
import AvisoLegal from './pages/legal/AvisoLegal';
import Privacidad from './pages/legal/Privacidad';
import Cookies from './pages/legal/Cookies';
import Condiciones from './pages/legal/Condiciones';

export default function App() {
  const location = useLocation();
  useScrollReset();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/particulares" element={<ParticularesPage />} />
          <Route path="/empresas" element={<EmpresasPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/gracias" element={<GraciasPage />} />
          {/* Rutas para páginas legales */}
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/condiciones" element={<Condiciones />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}