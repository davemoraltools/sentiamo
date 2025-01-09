import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ to, onClick, children, className = '' }: NavLinkProps) {
  return (
    <Link 
      to={to}
      className={`nav-link text-base md:text-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}