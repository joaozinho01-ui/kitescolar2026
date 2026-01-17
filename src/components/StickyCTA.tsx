import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately 800px)
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-4 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4">

        <div className="hidden md:block">
          <p className="text-sm font-semibold text-gray-900">
            🔥 Kit Escolar Premium 2026: <span className="text-red-600 font-bold">Últimas horas com desconto</span>
          </p>
        </div>

        <div className="flex-1 md:flex-none flex items-center gap-3">
          <a
            href="#planos"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap"
          >
            Quero aproveitar agora
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default StickyCTA;
