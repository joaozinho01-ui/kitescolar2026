import { Zap, Clock, Gift, ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const UrgencySection = () => {
  return (
    <section className="py-20 bg-indigo-900 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Zap className="w-4 h-4" />
            OFERTA RELÂMPAGO
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            O tempo está acabando!
          </h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-8">
            Essa condição especial com bônus e preço de lançamento pode sair do ar a qualquer momento.
          </p>

          <div className="flex justify-center mb-10">
            <CountdownTimer />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { icon: Clock, text: "Promoção válida HOJE" },
            { icon: Gift, text: "Bônus liberados agora" },
            { icon: Zap, text: "Preço sobe em breve" },
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
              <item.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#planos"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all hover:scale-105 shadow-lg shadow-green-500/20"
          >
            Quero aproveitar antes que acabe
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
