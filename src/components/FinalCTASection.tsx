import { ArrowRight, Lock, CheckCircle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-indigo-950 relative overflow-hidden text-center">

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="mb-8 flex justify-center">
            <div className="bg-red-500/20 text-red-100 border border-red-500/30 px-6 py-2 rounded-full text-sm font-bold animate-pulse">
              ⚠️ Condição promocional por tempo limitado
            </div>
          </div>

          <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Não deixe para depois o que <br />
            <span className="text-yellow-400">vai facilitar seu 2026</span>
          </h2>

          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Garanta agora centenas de artes prontas, economize horas de trabalho e comece o ano com o pé direito.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-10 border border-white/10">
            <p className="text-indigo-200 text-sm mb-4 font-medium uppercase tracking-widest">A oferta encerra em:</p>
            <div className="flex justify-center">
              <CountdownTimer />
            </div>
          </div>

          <a
            href="#planos"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
          >
            Garantir meu Kit Escolar Premium 2026 agora
            <ArrowRight className="w-7 h-7" />
          </a>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-indigo-200 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Pagamento 100% Seguro
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Acesso Imediato
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Garantia de Satisfação
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
