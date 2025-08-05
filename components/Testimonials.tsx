"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Trenując MMA potrzebuję niezawodnej ochrony. Ten ochraniacz jest idealnie dopasowany do moich zębów, nie przeszkadza w oddychaniu i daje poczucie pełnego bezpieczeństwa podczas walki.",
    author: "Marcin Kowalski",
    title: "Zawodowy zawodnik MMA"
  },
  {
    quote: "Jako trener boksu zawsze polecam moim zawodnikom ochraniacze od Ochraniaczenazeby.pl. Są trwałe, nie ograniczają mowy i zapewniają najwyższy poziom ochrony przed urazami.",
    author: "Anna Nowak",
    title: "Trener boksu olimpijskiego"
  },
  {
    quote: "Po kilku gotowych ochraniaczach z marketów, w końcu zdecydowałem się na indywidualny. Różnica jest kolosalna - komfort, dopasowanie i przede wszystkim poczucie bezpieczeństwa podczas treningów BJJ.",
    author: "Piotr Wiśniewski",
    title: "Pasjonat brazylijskiego jiu-jitsu"
  },
  {
    quote: "Ich obsługa klienta jest równie imponująca jak produkt. Ochraniacz dotarł szybciej niż się spodziewałem i jest dokładnie taki, jakiego potrzebowałem na zawody kickboxingu.",
    author: "Karolina Jabłońska",
    title: "Zawodniczka kickboxingu"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Opinie klientów</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Poznaj opinie osób, które już korzystają z naszych spersonalizowanych ochraniaczy.
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative bg-zinc-900 rounded-lg p-8 md:p-12 shadow-xl">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary" fill="currentColor" />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-xl italic text-gray-300 mb-6">"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold text-lg">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300"
                aria-label="Poprzednia opinia"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-primary w-6' : 'bg-zinc-700'}`}
                    aria-label={`Przejdź do opinii ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300"
                aria-label="Następna opinia"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}