import React from 'react';
import { Link } from 'react-router-dom';
import { X, Music } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import NavLinks from '../navigation/NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 300,
              duration: 0.3
            }}
            className="fixed right-0 top-0 h-screen w-[280px] bg-white shadow-xl z-50"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center" onClick={onClose}>
                  <Music className="h-8 w-8 text-primary" />
                  <span className="ml-2 text-xl font-display font-bold">SongCraft</span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <nav className="p-6">
              <div className="flex flex-col space-y-4">
                <NavLinks onItemClick={onClose} />
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}