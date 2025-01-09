import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
}

export default function NavLinks({ className = '', onItemClick }: NavLinksProps) {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (onItemClick) onItemClick();
  };

  return (
    <>
      <Link 
        to="/particulares" 
        className={`${className} text-base md:text-lg hover:text-pink-500 transition-colors duration-200`}
        onClick={onItemClick}
      >
        Particulares
      </Link>
      <Link 
        to="/empresas" 
        className={`${className} text-base md:text-lg hover:text-pink-500 transition-colors duration-200`}
        onClick={onItemClick}
      >
        Empresas
      </Link>
      <Link 
        to="/nosotros" 
        className={`${className} text-base md:text-lg hover:text-pink-500 transition-colors duration-200`}
        onClick={onItemClick}
      >
        Nosotros
      </Link>
      <button 
        onClick={scrollToContact}
        className="bg-pink-500 text-white px-4 md:px-6 py-2 rounded-full hover:bg-pink-600 transition-colors text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        Empezar
      </button>
    </>
  );
}