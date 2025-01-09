import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Header/Logo';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-white/90 bg-header-texture"></div>
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}