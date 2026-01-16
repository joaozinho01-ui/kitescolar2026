import { Shield, Check, Mail } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 md:p-12 border border-gray-200 relative overflow-hidden shadow-sm">

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              {/* Seal */}
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full flex flex-col items-center justify-center text-green-600 shadow-2xl border-4 border-green-50 animate-pulse-slow">
                  <Shield className="w-12 h-12 mb-2" />
                  <span className="text-4xl font-black">15</span>
                  <span className="text-xl font-bold tracking-widest">DIAS</span>
                  <span className="text-xs font-bold bg-green-100 px-3 py-1 rounded-full mt-2">GARANTIA TOTAL</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                  Seu risco é ZERO.
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Você tem <strong className="text-gray-900">15 dias completos</strong> para testar, baixar e usar o Kit Escolar Premium 2026. Se não gostar, devolvemos 100% do seu dinheiro. Sem letras miúdas.
                </p>

                <ul className="space-y-4">
                  {[
                    "Proteção total da sua compra",
                    "Reembolso facilitado via e-mail",
                    "Nenhuma justificativa necessária",
                    "Acesso imediato liberado agora"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600">
                        <Check className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <Mail className="w-4 h-4" />
                    Suporte rápido e humanizado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
