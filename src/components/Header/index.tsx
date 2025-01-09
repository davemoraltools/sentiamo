import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenu from '../MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="text-gray-700 hover:text-pink-500 transition-colors" />
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeMenu}
        onItemClick={closeMenu}
      />
    </header>
  );
}