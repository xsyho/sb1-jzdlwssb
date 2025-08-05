"use client";

import { useInView } from "react-intersection-observer";
import { Crosshair, Shield, Award, Sparkles, Zap, Users } from "lucide-react";

const features = [
  {
    icon: <Crosshair className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Dopasowanie na miarę",
    subtitle: "Precyzja w każdym detalu",
    description: "Każdy ochraniacz jest wykonywany indywidualnie, na podstawie cyfrowego skanu Twojej jamy ustnej, dla maksymalnej wygody i ochrony.",
    mobileDescription: "Indywidualny skan 3D zapewnia idealne dopasowanie i maksymalną ochronę.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    highlight: "Technologia 3D"
  },
  {
    icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Wysoka trwałość",
    subtitle: "Materiały premium",
    description: "Wykonane z najlepszych materiałów, nasze ochraniacze są odporne na uszkodzenia i zachowują swoje właściwości przez długi czas.",
    mobileDescription: "Najlepsze materiały gwarantują długotrwałą ochronę i komfort.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10",
    highlight: "Certyfikowane materiały"
  },
  {
    icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Zatwierdzone przez zawodników",
    subtitle: "Wybór profesjonalistów",
    description: "Polecane i używane przez profesjonalnych zawodników MMA, boksu i innych sportów walki w całej Polsce.",
    mobileDescription: "Wybór profesjonalnych zawodników MMA, boksu i sportów walki.",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-500/10 to-orange-500/10",
    highlight: "Profesjonalna jakość"
  }
];

const additionalFeatures = [
  { icon: <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Personalizacja kolorów" },
  { icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Szybka realizacja" },
  { icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Wsparcie eksperta" }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-8 sm:py-16 lg:py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30 mb-3 sm:mb-6">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Dlaczego jesteśmy najlepsi</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent px-4">
            Dlaczego my?
          </h2>
          <div className="h-1 w-12 sm:w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed px-4">
            <span className="block sm:hidden">Maksymalna ochrona bez kompromisów w komforcie.</span>
            <span className="hidden sm:block">Tworzymy ochraniacze na zęby, które zapewniają maksymalną ochronę bez kompromisów w komforcie. Poznaj nasze unikalne zalety.</span>
          </p>
        </div>
        
        {/* Main Features Grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-700 ease-out ${
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Main card */}
              <div className={`relative bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full`}>
                {/* Icon and badge */}
                <div className="flex items-start justify-between mb-3 sm:mb-6">
                  <div className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-semibold`}>
                      {feature.highlight}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-white group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    <span className="block sm:hidden">{feature.mobileDescription}</span>
                    <span className="hidden sm:block">{feature.description}</span>
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className={`transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
            <div className="text-center mb-4 sm:mb-8">
              <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Dodatkowe korzyści</h3>
              <p className="text-sm sm:text-base text-gray-400 hidden sm:block">Wszystko, czego potrzebujesz w jednym miejscu</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
              {additionalFeatures.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-zinc-800/50 rounded-lg sm:rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="p-1 sm:p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-8 sm:mt-16 transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-sm sm:text-base text-gray-400">Przekonaj się sam</span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Zamów swój ochraniacz
              <div className="w-2 h-2 bg-white rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}