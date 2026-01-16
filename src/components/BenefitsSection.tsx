import { Palette, Clock, RotateCw, Download, DollarSign, PenTool } from 'lucide-react';

const benefits = [
  {
    icon: Palette,
    title: "Artes Prontas e Lindas",
    desc: "Pare de perder tempo tentando combinar cores. Nossos designers já fizeram o trabalho pesado para você."
  },
  {
    icon: PenTool,
    title: "Modelos 100% Editáveis",
    desc: "Abra no Canva, mude o nome, a turma e a foto em cliques. Personalização total sem estresse."
  },
  {
    icon: RotateCw,
    title: "Conteúdo Atualizado",
    desc: "Esqueça arquivos velhos de 2020. Aqui você tem o que está em alta com a criançada agora em 2026."
  },
  {
    icon: Clock,
    title: "Agilidade na Entrega",
    desc: "Se você vende, vai entregar 10x mais rápido. Se você é mãe, resolve a lista escolar em minutos."
  },
  {
    icon: Download,
    title: "Download Imediato",
    desc: "Pagou, baixou. Você recebe o acesso no seu e-mail na hora. Sem espera."
  },
  {
    icon: DollarSign,
    title: "Investimento Ridículo",
    desc: "Pelo preço de um cafezinho, você economiza dias de trabalho e dor de cabeça."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">
            Por que todo mundo ama?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">
            A ferramenta que faltava na sua rotina
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <item.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
