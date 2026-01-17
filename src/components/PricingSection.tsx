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
    <section id="planos" className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            🔥 Oferta por tempo limitado
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">
            Escolha sua tranquilidade
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-end">

          {/* CARD 2 — KIT ESCOLAR BÁSICO 2026 (STARTING R$ 2,99) */}
          <div className="order-2 lg:order-1 bg-white rounded-3xl p-6 border border-gray-200 relative flex flex-col z-10 opacity-90 scale-95 origin-top lg:origin-center hover:opacity-100 transition-opacity">

            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-600 mb-1">
                Opção Econômica
              </h3>
              <p className="text-gray-400 text-xs">
                Apenas arquivos básicos
              </p>
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Artes escolares básicas</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Edição no Canva</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <X className="w-4 h-4 flex-shrink-0" />
                <span className="line-through">Sem bônus exclusivos</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <X className="w-4 h-4 flex-shrink-0" />
                <span className="line-through">Sem uso comercial</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <X className="w-4 h-4 flex-shrink-0" />
                <span className="line-through">Sem atualizações</span>
              </li>
            </ul>

            <div className="mt-auto text-center border-t border-gray-100 pt-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-sm text-gray-500 font-medium">R$</span>
                <span className="text-3xl font-bold text-gray-700">2,99</span>
              </div>

              <button
                onClick={() => setIsUpsellOpen(true)}
                className="block w-full bg-white hover:bg-gray-50 text-gray-500 font-medium py-3 rounded-xl text-sm transition-colors border-2 border-gray-200"
              >
                Quero o básico (limitado)
              </button>
            </div>
          </div>

          {/* CARD 1 — KIT ESCOLAR PREMIUM 2026 (MAIS POPULAR) */}
          <div className="order-1 lg:order-2 bg-white rounded-3xl p-8 border-2 border-orange-400 shadow-2xl relative transform scale-100 z-20 flex flex-col mb-8 lg:mb-0 ring-4 ring-orange-400/10">

            {/* Selo flutuante */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg flex items-center gap-2 whitespace-nowrap animate-pulse">
              <Star className="w-4 h-4 fill-white" />
              MÃES RECOMENDAM
            </div>

            <div className="text-center mb-6 mt-4">
              <h3 className="text-3xl font-extrabold text-indigo-950 leading-tight mb-2">
                Kit Completo <span className="text-orange-500">2026</span>
              </h3>
              <p className="text-gray-600 font-medium text-sm">
                A solução definitiva para zerar a lista escolar
              </p>
            </div>

            <ul className="space-y-4 mb-8 px-2">
              <li className="flex items-center gap-3 text-gray-800 font-bold text-base">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600 flex-shrink-0" /></div>
                <span>+500 temas editáveis</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-bold text-base">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600 flex-shrink-0" /></div>
                <span>Tudo do básico + centenas de artes</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-bold text-base">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600 flex-shrink-0" /></div>
                <span>Uso <strong>comercial liberado</strong> (lucre muito)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-bold text-base">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600 flex-shrink-0" /></div>
                <span>Acesso Vitalício + Atualizações</span>
              </li>
            </ul>

            {/* Bloco de Bônus */}
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 mb-8">
              <div className="flex items-center gap-2 mb-3 text-orange-700 font-bold uppercase tracking-wide text-xs">
                <Gift className="w-4 h-4" />
                Leve também hoje (Grátis):
              </div>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5" />
                  Agendas Escolares 2026
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5" />
                  Planner & Etiquetas
                </li>
              </ul>
            </div>

            <div className="mt-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-gray-400 text-lg line-through font-medium">R$ 97,00</span>
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">-80% OFF</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-lg text-indigo-950 font-medium translate-y-[-8px]">R$</span>
                <span className="text-6xl font-black text-indigo-950 tracking-tighter">19,90</span>
              </div>

              <a
                href="https://www.ggcheckout.com/checkout/v2/L1BtkHLS5kLwGB6hCWp7"
                className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] mb-4"
              >
                <span className="font-bold text-xl">GARANTIR TUDO AGORA</span>
                <span className="text-xs opacity-90 font-normal">Resolva sua vida por R$ 19,90</span>
              </a>

              <div className="flex justify-center gap-4 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Entrega Imediata</span>
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Compra Segura</span>
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
                Última chance
              </div>

              {/* Headlines */}
              <DialogTitle className="text-2xl font-bold text-white mb-2 leading-tight">
                Leve o pacote completo por apenas <span className="text-emerald-400">R$ 9,90</span>?
              </DialogTitle>
              <p className="text-slate-400 text-sm font-light mb-8">
                Você escolheu o básico, mas pode levar TUDO com um desconto secreto agora.
              </p>

              {/* Offer Card */}
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 mb-8 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center justify-center gap-1 mb-0">
                  <span className="text-sm text-slate-500 font-medium translate-y-[-4px]">De R$ 19,90 por</span>
                  <span className="text-4xl font-extrabold text-white tracking-tighter ml-2">R$ 9,90</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <a
                  href="https://www.ggcheckout.com/checkout/v2/Exk3mxeNML3mf9kHjRfS"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl text-lg shadow-[0_4px_20px_rgba(16,185,129,0.25)] transition-all transform hover:-translate-y-0.5"
                >
                  Sim, quero aproveitar o desconto
                </a>

                <a
                  href="https://www.ggcheckout.com/checkout/v2/IFAyQoqoImwHAkQYWZei"
                  className="block w-full text-center text-slate-600 hover:text-slate-400 text-xs font-medium py-1 transition-colors"
                >
                  Não, vou ficar apenas com o básico (sem bônus)
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
