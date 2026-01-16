import { CheckCircle, Sparkles } from 'lucide-react';
import mockup1 from '@/assets/mockup1.webp';

const benefits = [
  "Resolver tudo em menos de 10 minutos",
  "Ter acesso a artes lindas e organizadas",
  "Ganhar tempo e tranquilidade na rotina",
  "Poder gerar renda extra vendendo os impressos"
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full opacity-50"></div>
            <img
              src={mockup1}
              alt="Solução Kit Escolar Premium"
              className="relative rounded-3xl shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100 animate-bounce-soft">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Resultado</p>
                <p className="text-sm font-bold text-gray-900">Profissional & Rápido</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              ✨ Imagine agora...
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              E se você pudesse ter tudo pronto em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">minutos?</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Visualize acessar uma biblioteca completa, escolher o tema que você ama, editar o nome rapidinho e... pronto! Sua impressora trabalhando enquanto você toma um café.
            </p>

            <ul className="space-y-5">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-blue-800 italic font-medium text-lg text-center">
                "Finalmente uma solução que entende a rotina de quem não tem tempo a perder."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
