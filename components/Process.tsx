"use client";

import { useInView } from "react-intersection-observer";
import { Scan, Printer, Palette, ArrowRight } from "lucide-react";

const processSteps = [
  {
    icon: <Scan className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Skanowanie 3D",
    subtitle: "Bezbolesne i precyzyjne",
    description: "Nowoczesny skaner 3D tworzy dokładny cyfrowy model Twojej jamy ustnej w zaledwie kilka minut. Proces jest całkowicie bezbolesny i bezdotykowy.",
    mobileDescription: "Bezbolesny skaner 3D tworzy precyzyjny model jamy ustnej.",
    image: "/skan1.jpg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Printer className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Druk 3D",
    subtitle: "Technologia przyszłości",
    description: "Cyfrowe dane trafiają do naszej pracowni, gdzie za pomocą zaawansowanej drukarki 3D powstaje podstawowy kształt ochraniacza z najwyższą precyzją.",
    mobileDescription: "Zaawansowana drukarka 3D tworzy precyzyjny kształt ochraniacza.",
    image: "/skan2.jpg",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Ręczne wykończenie",
    subtitle: "Perfekcja w detalu",
    description: "Nasi doświadczeni technicy ręcznie zdobią każdy ochraniacz, dbając o idealne dopasowanie, komfort i niepowtarzalną estetykę.",
    mobileDescription: "Ręczne wykończenie zapewnia idealne dopasowanie i estetykę.",
    image: "/skan3.jpg",
    color: "from-orange-500 to-red-500"
  }
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-8 sm:py-16 lg:py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent px-4">
            <span className="block sm:hidden">Jak powstają ochraniacze?</span>
            <span className="hidden sm:block">Jak powstają nasze indywidualne ochraniacze?</span>
          </h2>
          <div className="h-1 w-12 sm:w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            <span className="block sm:hidden">Technologia i rzemiosło w jednym</span>
            <span className="hidden sm:block">Odkryj innowacyjny proces tworzenia ochraniaczy, który łączy najnowszą technologię z tradycyjnym rzemiosłem</span>
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 sm:space-y-16 lg:space-y-20">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-12 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 space-y-3 sm:space-y-6 text-center lg:text-left">
                <div className="flex items-center gap-2 sm:gap-4 justify-center lg:justify-start">
                  <div className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${step.color} shadow-lg`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-4xl font-bold text-gray-600">0{index + 1}</span>
                    <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">{step.title}</h3>
                  <p className={`text-sm sm:text-lg font-medium mb-2 sm:mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                    <span className="block sm:hidden">{step.mobileDescription}</span>
                    <span className="hidden sm:block">{step.description}</span>
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  {processSteps.map((_, stepIndex) => (
                    <div 
                      key={stepIndex}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        stepIndex <= index 
                          ? `bg-gradient-to-r ${step.color} w-6 sm:w-12` 
                          : 'bg-gray-600 w-4 sm:w-8'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 max-w-lg w-full">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  <div className="relative bg-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 sm:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`p-1 sm:p-2 rounded-lg bg-gradient-to-r ${step.color}`}>
                          <div className="text-white text-sm">
                            {step.icon}
                          </div>
                        </div>
                        <span className="text-white font-semibold text-sm sm:text-base">{step.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-20">
          <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-2xl sm:rounded-3xl p-4 sm:p-12 shadow-2xl border border-zinc-600">
            <h3 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-4">
              Gotowy na swój idealny ochraniacz?
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-8 text-sm sm:text-lg px-4">
              <span className="block sm:hidden">Umów się na bezpłatne skanowanie 3D</span>
              <span className="hidden sm:block">Skontaktuj się z nami, aby umówić się na bezpłatne skanowanie 3D</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Umów się na skanowanie
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}