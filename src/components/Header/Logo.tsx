import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

export default function Logo() {
  return (
    <Link 
      to="/" 
      className="flex items-center hover:opacity-80 transition-opacity"
    >
      <Music className="h-8 w-8 text-pink-500" />
      <span className="ml-2 text-xl font-montserrat font-bold">Sentiamo</span>
    </Link>
  );
}