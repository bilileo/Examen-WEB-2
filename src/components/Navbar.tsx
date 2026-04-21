import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about';
  onPageChange: (page: 'home' | 'about') => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 border-b border-cyan-500/30 shadow-lg shadow-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => { onPageChange('home'); setIsOpen(false); }}>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-2">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Registry</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onPageChange('home')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => onPageChange('about')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'about'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50'
              }`}
            >
              Sobre Nosotros
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400 hover:text-cyan-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-cyan-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => { onPageChange('home'); setIsOpen(false); }}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => { onPageChange('about'); setIsOpen(false); }}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all ${
                currentPage === 'about'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Sobre Nosotros
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
