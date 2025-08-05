'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Section - modernized */}
        <div className="mb-8 sm:mb-12">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 backdrop-blur-sm border border-purple-500/20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10 p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Company Logo */}
                  <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20">
                        <img
                          src="/logo1.jpeg"
                          alt="Ochraniaczenazeby.pl Logo"
                          className="h-32 w-auto sm:h-40 md:h-48 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="18" cy="6" r="1"/>
                    </svg>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      Śledź nas na Instagramie
                    </h3>
                  </div>
                  
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    Odkryj kulisy tworzenia ochraniaczy, zobacz najnowsze realizacje i poznaj historie naszych klientów
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <a 
                      href="https://www.instagram.com/ochraniacze_na_zeby.pl/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden text-sm sm:text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 715.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.80c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.80c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                      <span className="relative z-10">Odwiedź nasz profil</span>
                      <div className="relative z-10 w-2 h-2 bg-white rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
                
                {/* Instagram Preview */}
                <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-auto">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-30"></div>
                    
                    {/* Main container */}
                    <div className="relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-purple-500/20 max-w-sm mx-auto">
                      {/* Header */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="relative">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full p-0.5">
                            <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center">
                              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 715.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.80c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.80c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-zinc-900"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">@ochraniacze_na_zeby.pl</h4>
                          <p className="text-gray-400 text-xs sm:text-sm">Najnowsze realizacje</p>
                        </div>
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Image Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {[
                          "/1.png",
                          "/2.png",
                          "/5.png",
                          "/6.png"
                        ].map((src, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-zinc-700">
                              <img 
                                src={src} 
                                alt={`Instagram post ${index + 1}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-700">
                        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <span>Live</span>
                          </div>
                          <span>•</span>
                          <span>12 nowych postów</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Aktualizowane codziennie
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Dlaczego my?</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Kontakt</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Informacje prawne</h3>
            <ul className="space-y-2">
              <li>
                <a href="/polityka-prywatnosci" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Polityka prywatności</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 sm:mt-10 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              &copy; {currentYear} Ochraniaczenazeby.pl. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/ochraniacze_na_zeby.pl/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 715.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.80c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.80c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}