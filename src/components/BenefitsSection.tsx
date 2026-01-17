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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Future Pacing Block */}
        <div className="mb-20 bg-blue-50 rounded-[3rem] p-8 md:p-16 text-center border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

          <span className="relative z-10 inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-200">
            ✨ Visualize sua rotina
          </span>
          <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold text-indigo-950 mb-6 leading-tight">
            Imagine começar as aulas com <br />
            <span className="text-blue-600">tudo pronto e organizado...</span>
          </h2>
          <p className="relative z-10 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Você tranquila no sofá, vendo a mochila do seu filho impecável, com cadernos etiquetados, materiais personalizados e aquele sentimento delicioso de <strong>"missão cumprida"</strong> — sem ter gastado rios de dinheiro ou perdido noites em claro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div key={index} className="flex gap-4 p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-indigo-50">
                  <item.icon className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
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
