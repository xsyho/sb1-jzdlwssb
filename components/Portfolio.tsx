"use client";

import { useInView } from "react-intersection-observer";

const portfolioItems = [
  { image: "/9.png" },
  { image: "/10.png" },
  { image: "/1.png" },
  { image: "/5.png" },
  { image: "/2.png" },
  { image: "/6.png" },
  { image: "/7.png" },
  { image: "/8.png" },
  { image: "/11.png" },
  { image: "/12.png" },
  { image: "/13.png" },
  { image: "/15.png" }
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nasze realizacje</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 px-4">
            Zobacz przykłady naszych spersonalizowanych ochraniaczy na zęby,
            wykonanych dla zawodników różnych dyscyplin sportów walki.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`bg-zinc-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt="Ochraniacz na zęby"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}