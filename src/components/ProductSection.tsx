import temaMinnie from '@/assets/tema-minnie.webp';
import temaGatinhos from '@/assets/tema-gatinhos.webp';
import temaFrozen from '@/assets/tema-frozen.webp';
import temaSonic from '@/assets/tema-sonic.webp';
import temaDivertidamente from '@/assets/tema-divertidamente.webp';
import { ArrowRight, Download, Edit3, Printer, ShoppingCart, Search } from 'lucide-react';

const temas = [
  { img: temaMinnie, name: "Minnie e Margarida" },
  { img: temaFrozen, name: "Frozen" },
  { img: temaSonic, name: "Sonic" },
  { img: temaGatinhos, name: "Gatinhos" },
  { img: temaDivertidamente, name: "Divertidamente" },
];

const steps = [
  { icon: ShoppingCart, title: "1. Compra Confirmada", desc: "Pagamento seguro e rápido." },
  { icon: Download, title: "2. Acesso Imediato", desc: "Link enviado por e-mail na hora." },
  { icon: Search, title: "3. Escolha o Material", desc: "Navegue pelas pastas organizadas." },
  { icon: Edit3, title: "4. Edite no Canva", desc: "Altere nome e turma em segundos." },
  { icon: Printer, title: "5. Imprima ou Venda", desc: "Material pronto para usar ou lucrar." },
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">

        {/* Intro */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Apresentamos o <br />
            <span className="text-indigo-600">Kit Escolar Premium 2026</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma coleção completa e definitiva de materiais escolares editáveis, 100% atualizados para 2026, pensados para facilitar sua rotina e economizar seu tempo.
          </p>
        </div>

        {/* Carousel Preview */}
        <div className="mb-20">
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {temas.map((tema, index) => (
              <div key={index} className="w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-white">
                <img src={tema.img} alt={tema.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 font-medium">
            + Centenas de outros temas esperando por você...
          </p>
        </div>

        {/* How it works */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Como funciona? <span className="text-indigo-600">Passo a passo simples:</span>
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4 text-indigo-600 border border-gray-100">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute translate-x-32 w-6 h-6 text-gray-300 mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
