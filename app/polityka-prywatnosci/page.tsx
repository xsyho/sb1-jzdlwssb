import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Polityka prywatności - Ochraniaczenazeby.pl',
  description: 'Polityka prywatności serwisu Ochraniaczenazeby.pl - zasady przetwarzania i ochrony danych osobowych.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Polityka prywatności</h1>
          <div className="h-1 w-20 bg-primary mb-6"></div>
        </div>

        {/* Content */}
        <div className="bg-zinc-800 rounded-lg p-6 sm:p-8 shadow-xl">
          <div className="prose prose-invert max-w-none">
            
            <h2 className="text-xl font-bold mb-4 text-white">1. Postanowienia ogólne</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług świadczonych przez serwis internetowy Ochraniaczenazeby.pl (dalej: Serwis).
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz polską ustawą o ochronie danych osobowych z dnia 10 maja 2018 r.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">2. Administrator danych osobowych</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Administratorem danych osobowych jest właściciel strony internetowej:
            </p>
            <div className="bg-zinc-700 p-4 rounded-lg mb-4">
              <p className="text-white font-medium">Ochraniaczenazeby.pl</p>
              <p className="text-gray-300">Adres: ul. Armii Krajowej 62C, 72-210 Dobra, Polska</p>
              <p className="text-gray-300">E-mail kontaktowy do spraw ochrony danych: ochraniaczenazeby@gmail.com</p>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Niniejszy Serwis nie posiada wyznaczonego Inspektora Ochrony Danych (IOD).
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">3. Jakie dane zbieramy</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Za pośrednictwem formularza kontaktowego zbieramy następujące dane osobowe:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>imię i nazwisko</li>
              <li>adres e-mail</li>
              <li>numer telefonu (opcjonalnie, jeśli zostanie podany przez użytkownika)</li>
              <li>treść wiadomości przesłanej poprzez formularz kontaktowy</li>
              <li>adres IP automatycznie rejestrowany przez serwer w celu zapewnienia bezpieczeństwa</li>
            </ul>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Numer telefonu jest zbierany opcjonalnie - tylko jeśli użytkownik zdecyduje się go podać w formularzu kontaktowym.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Serwis nie korzysta z plików cookies ani innych technologii śledzących.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">4. Cele przetwarzania danych</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dane osobowe są przetwarzane wyłącznie w celu:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>udzielenia odpowiedzi na zapytania przesłane przez formularz kontaktowy,</li>
              <li>świadczenia usług związanych z produkcją ochraniaczy na zęby,</li>
              <li>komunikacji w sprawach związanych z realizacją zamówienia,</li>
              <li>wypełnienia obowiązków prawnych nałożonych na administratora.</li>
            </ul>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Dane nie są wykorzystywane do celów marketingowych, statystycznych ani analitycznych.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">5. Podstawa prawna przetwarzania</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Podstawą przetwarzania danych osobowych są:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>zgoda wyrażona przez zaznaczenie odpowiedniego pola w formularzu (art. 6 ust. 1 lit. a RODO) — w zakresie danych przetwarzanych za zgodą,</li>
              <li>niezbędność do wykonania umowy lub podjęcia działań przed zawarciem umowy (art. 6 ust. 1 lit. b RODO),</li>
              <li>prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO) — w szczególności w zakresie analizy i zapewnienia bezpieczeństwa serwisu (np. adres IP).</li>
            </ul>

            <h2 className="text-xl font-bold mb-4 text-white">6. Okres przechowywania danych</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, nie dłużej jednak niż przez okres 3 lat od ostatniego kontaktu z użytkownikiem, po czym zostaną bezpiecznie usunięte lub zanonimizowane.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Jeżeli przepisy prawa wymagają dłuższego przechowywania danych (np. wymagania archiwizacyjne), będą one przechowywane zgodnie z tymi przepisami.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">7. Prawa osób, których dane dotyczą</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Masz prawo do:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>dostępu do swoich danych osobowych,</li>
              <li>sprostowania (poprawiania) danych,</li>
              <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
              <li>ograniczenia przetwarzania danych,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>cofnięcia zgody na przetwarzanie w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed cofnięciem zgody).</li>
            </ul>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Aby skorzystać ze swoich praw, prosimy o kontakt pod adresem e-mail: ochraniaczenazeby@gmail.com.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Masz również prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO), jeśli uważasz, że przetwarzanie Twoich danych narusza przepisy RODO.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">8. Bezpieczeństwo danych</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe przed nieuprawnionym dostępem, ujawnieniem, utratą, modyfikacją lub zniszczeniem. Wykorzystujemy bezpieczne połączenia SSL oraz ograniczamy dostęp do danych wyłącznie do osób upoważnionych.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">9. Usługodawcy zewnętrzni (procesory danych)</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Formularz kontaktowy korzysta z usługi EmailJS, która przetwarza dane osobowe użytkowników w imieniu administratora w celu przesłania wiadomości e-mail. EmailJS jest podmiotem przetwarzającym dane zgodnie z zawartą umową powierzenia przetwarzania danych.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Serwis jest hostowany na platformie Netlify, która pełni rolę dostawcy usług hostingowych i nie przetwarza ani nie przechowuje danych przesyłanych przez formularz kontaktowy.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white">10. Zmiany w polityce prywatności</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich istotnych zmianach będziemy informować poprzez publikację zaktualizowanej wersji na stronie internetowej Serwisu. Zalecamy regularne sprawdzanie treści polityki.
            </p>

            <div className="bg-zinc-700 p-4 rounded-lg mt-8">
              <p className="text-gray-300 text-sm">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}