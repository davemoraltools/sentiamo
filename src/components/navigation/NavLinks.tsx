import React from 'react';
import NavLink from './NavLink';
import { navigationItems } from '../../config/navigation';
import { scrollToElement } from '../../utils/scroll';

interface NavLinksProps {
  onItemClick?: () => void;
}

export default function NavLinks({ onItemClick }: NavLinksProps) {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('#contact');
    onItemClick?.();
  };

  return (
    <>
      {navigationItems.map(({ path, label }) => (
        <NavLink 
          key={path}
          to={path}
          onClick={onItemClick}
          className="block w-full md:w-auto"
        >
          {label}
        </NavLink>
      ))}
      <button 
        onClick={handleContactClick}
        className="btn-primary w-full md:w-auto"
      >
        Empezar
      </button>
    </>
  );
}