'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";

const leftImages = [
  { url: "/6.png", alt: "Ochraniacz na zęby - niebieski z napisem HANDZU" },
  { url: "/7.png", alt: "Ochraniacz na zęby - zielony z napisem NOKAUT" },
  { url: "/8.png", alt: "Ochraniacz na zęby - czarny z czerwonym napisem FIGHT MODE" },
];

const rightImages = [
  { url: "/1.png", alt: "Ochraniacz na zęby" },
  { url: "/5.png", alt: "Ochraniacz na zęby" },
  { url: "/2.png", alt: "Ochraniacz na zęby" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 to-zinc-900/80"></div>
      
      {/* Animated spotlight effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[40%] h-[40rem] w-[60rem] bg-primary/30 blur-[100px] opacity-50 animate-spotlight"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16 lg:pt-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Indywidualne ochraniacze na zęby dla{" "}
            <span className="text-primary">wojowników</span>
          </h1>
          
          <p 
            className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Profesjonalna ochrona. Idealne dopasowanie. Polska produkcja.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 group"
            >
              Zamów teraz
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 group"
            >
              Nasze realizacje
              <ImageIcon className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Mobile Portfolio Preview */}
        <div className="block lg:hidden mt-12">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Nasze realizacje</h3>
            <div className="h-0.5 w-16 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            {[...leftImages, ...rightImages].slice(0, 6).map((image, index) => (
              <div 
                key={index}
                className={`aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${800 + index * 100}ms`,
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Left side - Desktop only */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
        {leftImages.map((image, index) => (
          <div 
            key={index}
            className={`group relative transition-all duration-700 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-full'
            }`}
            style={{ 
              transitionDelay: `${500 + index * 200}ms`,
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main image container */}
            <div className="relative w-40 h-40 overflow-hidden rounded-2xl shadow-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm"></div>
              <img
                src={image.url}
                alt={image.alt}
                className="relative z-10 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>
              
              {/* Sparkle effect on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Desktop only */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
        {rightImages.map((image, index) => (
          <div 
            key={index}
            className={`group relative transition-all duration-700 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            }`}
            style={{ 
              transitionDelay: `${600 + index * 150}ms`,
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main image container */}
            <div className="relative w-40 h-40 overflow-hidden rounded-2xl shadow-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm"></div>
              <img
                src={image.url}
                alt={image.alt}
                className="relative z-10 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>
              
              {/* Sparkle effect on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce"></div>
        </div>
        <span className="text-white/80 text-xs sm:text-sm mt-2">Przewiń w dół</span>
      </div>
    </section>
  );
}