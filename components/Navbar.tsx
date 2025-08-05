"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'O nas', href: '#about' },
  { name: 'Nasze realizacje', href: '#portfolio' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/logo1.jpeg"
                alt="Ochraniaczenazeby.pl"
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="ml-4 px-3 sm:px-4 py-2 rounded bg-primary hover:bg-primary/90 transition-colors duration-200 font-medium text-white text-sm lg:text-base"
            >
              Zamów teraz
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Otwórz menu</span>
              {isOpen ? (
                <X className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="block w-full text-center mt-4 px-4 py-2 rounded bg-primary hover:bg-primary/90 transition-colors duration-200 font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              Zamów teraz
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}