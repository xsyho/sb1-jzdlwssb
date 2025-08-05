"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { PhoneCall, Mail, MapPin, Send } from "lucide-react";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consent: boolean;
};

// Initialize EmailJS with your public key
emailjs.init("rfCkMynH12eslfsYk");

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone || 'Nie podano',
        message: data.message,
        to_email: "ochraniaczenazeby@gmail.com"
      };

      await emailjs.send(
        'service_o82l60l',
        'template_672764d',
        templateParams
      );
      
      setSubmitted(true);
      reset();
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    }
  };
  
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skontaktuj się z nami</h2>
              <div className="h-1 w-16 sm:w-20 bg-primary mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Masz pytania dotyczące naszych ochraniaczy na zęby? Skontaktuj się z nami, a z przyjemnością odpowiemy na wszystkie Twoje pytania.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold">Telefon</h3>
                    <p className="text-sm sm:text-base text-gray-300">+48 721 090 264</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold">Email</h3>
                    <p className="text-sm sm:text-base text-gray-300 break-all">ochraniaczenazeby@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold">Adres</h3>
                    <p className="text-sm sm:text-base text-gray-300">ul. Armii Krajowej 62C<br />72-210 Dobra<br />Polska</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="order-1 lg:order-2 bg-zinc-800 rounded-lg p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Wyślij wiadomość</h3>
              
              {submitted ? (
                <div className="bg-green-900/30 border border-green-700 text-green-100 px-4 py-3 rounded-md mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base">Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Imię jest wymagane" })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-700 border ${errors.name ? 'border-red-500' : 'border-zinc-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base`}
                    placeholder="Twoje imię i nazwisko"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Adres e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email jest wymagany",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Nieprawidłowy format adresu email"
                      }
                    })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-700 border ${errors.email ? 'border-red-500' : 'border-zinc-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base`}
                    placeholder="twoj@email.pl"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Numer telefonu (opcjonalnie)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    placeholder="+48 123 456 789"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Wiadomość jest wymagana" })}
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-700 border ${errors.message ? 'border-red-500' : 'border-zinc-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base`}
                    placeholder="Twoja wiadomość..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    {...register("consent", { required: "Zgoda na przetwarzanie danych jest wymagana" })}
                    className="mt-1 h-4 w-4 text-primary bg-zinc-700 border-zinc-600 rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
                    <a 
                      href="/polityka-prywatnosci" 
                      target="_blank"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      polityką prywatności
                    </a>
                    {" "}w celu udzielenia odpowiedzi na zapytanie.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-xs sm:text-sm text-red-500">{errors.consent.message}</p>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}