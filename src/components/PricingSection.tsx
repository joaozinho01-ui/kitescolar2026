import { Check, Star, Zap, Shield, Gift, X, CreditCard, ArrowRight } from 'lucide-react';
import mockupPremium from '@/assets/mockuppremium.webp';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PricingSection = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <section id="planos" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            🔥 Oferta por tempo limitado
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">
            Escolha o pacote ideal para você
          </h2>
          <p className="text-xl text-gray-600">
            Comece hoje mesmo a lucrar com materiais escolares
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

          {/* CARD 2 — KIT ESCOLAR BÁSICO 2026 (STARTING R$ 2,99) */}
          <div className="order-1 bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg relative flex flex-col z-10 lg:my-6">

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Kit Escolar Básico 2026
              </h3>
              <p className="text-gray-500 text-sm">
                Ideal para quem quer economizar
              </p>
            </div>

            <div className="mb-6 mx-auto max-w-[200px] opacity-80 grayscale-[30%]">
              <img src={mockupPremium} alt="Kit Escolar Básico" className="w-full h-auto object-cover rounded-lg" />
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-gray-700 text-sm">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>+500 temas editáveis</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-sm">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Atualizado para 2026</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-sm">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Edição no Canva gratuito</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="line-through">Sem bônus</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="line-through">Sem uso comercial</span>
              </li>
            </ul>

            <div className="mt-auto text-center border-t border-gray-100 pt-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-base text-gray-600 font-medium translate-y-[-4px]">R$</span>
                <span className="text-4xl font-extrabold text-gray-800">2,99</span>
              </div>
              <p className="text-gray-400 text-xs font-medium mb-6 uppercase">Pagamento Único</p>

              <button
                onClick={() => setIsUpsellOpen(true)}
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-4 rounded-xl text-lg transition-colors border border-gray-200"
              >
                Quero o Básico
              </button>
            </div>
          </div>

          {/* CARD 1 — KIT ESCOLAR PREMIUM 2026 (MAIS POPULAR) */}
          <div className="order-2 bg-white rounded-[2rem] p-8 border-2 border-orange-400 shadow-2xl relative transform scale-100 lg:scale-105 z-20 flex flex-col">

            {/* Selo flutuante */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg flex items-center gap-2 whitespace-nowrap">
              <Star className="w-4 h-4 fill-white" />
              MAIS ESCOLHIDO
            </div>

            <div className="text-center mb-6 mt-4">
              <h3 className="text-3xl font-extrabold text-indigo-950 leading-tight mb-2">
                Kit Escolar Premium <span className="text-orange-500">2026</span>
              </h3>
              <p className="text-gray-600 font-medium">
                O pacote completo para criar materiais incríveis e lucrar em 2026
              </p>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner border border-gray-100 mx-auto max-w-xs sm:max-w-sm">
              <img src={mockupPremium} alt="Kit Escolar Premium" className="w-full h-auto object-cover" />
            </div>

            <ul className="space-y-3 mb-8 px-2">
              <li className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>+500 temas editáveis</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Atualizado para 2026</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Edição no Canva gratuito</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Uso <strong>comercial liberado</strong></span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Acesso vitalício</span>
              </li>
            </ul>

            {/* Bloco de Bônus */}
            <div className="bg-green-50 rounded-xl p-5 border border-green-100 mb-8">
              <div className="flex items-center gap-2 mb-3 text-green-700 font-bold uppercase tracking-wide text-sm">
                <Gift className="w-5 h-5" />
                Bônus Exclusivos
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5" />
                  Agendas Escolares 2026
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5" />
                  Etiquetas prontas para material
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5" />
                  Artes para brindes (squeeze, caneca)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5" />
                  Planner escolar completo
                </li>
              </ul>
            </div>

            <div className="mt-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-gray-400 text-lg line-through font-medium">R$ 97,00</span>
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-sm font-bold">-80% OFF</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-lg text-indigo-950 font-medium translate-y-[-8px]">R$</span>
                <span className="text-6xl font-black text-indigo-950 tracking-tighter">19,90</span>
              </div>
              <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wide">Pagamento Único</p>

              <a
                href="https://www.ggcheckout.com/checkout/v2/L1BtkHLS5kLwGB6hCWp7"
                className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-5 rounded-xl text-xl shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] mb-4"
              >
                QUERO O PREMIUM AGORA
              </a>

              <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Entrega imediata</span>
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Acesso vitalício</span>
                <span className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> Sem mensalidades</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Logic for Upsell Modal */}
      <Dialog open={isUpsellOpen} onOpenChange={setIsUpsellOpen}>
        <DialogContent className="sm:max-w-md bg-slate-950 border border-slate-800 shadow-2xl rounded-3xl p-0 overflow-hidden text-white">

          <div className="relative p-8 flex flex-col items-center text-center">

            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(50,250,150,0.05)_0%,transparent_50%)]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-yellow-400" />
                Oferta Exclusiva
              </div>

              {/* Headlines */}
              <DialogTitle className="text-3xl font-serif font-medium text-white mb-2 tracking-tight">
                Antes de continuar...
              </DialogTitle>
              <p className="text-slate-400 text-sm font-light mb-8">
                Liberei uma condição especial só agora para você.
              </p>

              {/* Offer Card */}
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 mb-8 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h3 className="text-lg font-bold text-white mb-1">
                  Kit Escolar Premium <span className="text-emerald-400">2026</span>
                </h3>
                <p className="text-slate-400 text-xs mb-4">
                  Completo, com bônus exclusivos e acesso imediato
                </p>

                <div className="flex items-center justify-center gap-1 mb-0">
                  <span className="text-sm text-slate-500 font-medium translate-y-[-4px]">R$</span>
                  <span className="text-4xl font-extrabold text-white tracking-tighter">9,90</span>
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8 text-left px-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>+500 artes escolares editáveis</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>Bônus exclusivos liberados</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>Muito mais valor pelo mesmo acesso</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>Download imediato</span>
                </li>
              </ul>

              {/* CTAs */}
              <div className="space-y-4">
                <a
                  href="https://www.ggcheckout.com/checkout/v2/Exk3mxeNML3mf9kHjRfS"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl text-lg shadow-[0_4px_20px_rgba(16,185,129,0.25)] transition-all transform hover:-translate-y-0.5"
                >
                  Sim, quero o Premium por R$ 9,90
                </a>

                <a
                  href="https://www.ggcheckout.com/checkout/v2/IFAyQoqoImwHAkQYWZei"
                  className="block w-full text-center text-slate-600 hover:text-slate-400 text-xs font-medium py-1 transition-colors"
                >
                  Não, prefiro o plano básico por R$ 2,99
                </a>
              </div>

            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
