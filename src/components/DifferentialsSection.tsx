import { Zap, LayoutGrid, CalendarRange, PenTool, Clock, ShieldCheck } from 'lucide-react';

const differentials = [
  {
    icon: LayoutGrid,
    title: "Já vem 100% Organizado",
    desc: "Nada de pastas bagunçadas. Tudo separado por categorias, temas e tipos de arquivo para você achar o que quer em segundos."
  },
  {
    icon: CalendarRange,
    title: "Atualizado para 2026",
    desc: "Calendários, datas comemorativas e temas que estão em alta com a criançada neste ano."
  },
  {
    icon: PenTool,
    title: "Não exige experiência",
    desc: "Você não precisa ser designer. Se sabe clicar e arrastar, você consegue fazer artes incríveis no Canva."
  },
  {
    icon: Clock,
    title: "Economia Real de Tempo",
    desc: "O que levava horas agora leva minutos. Tenha mais tempo livre para você e sua família."
  },
  {
    icon: ShieldCheck,
    title: "Arquivos Testados",
    desc: "Garantimos que os arquivos abrem corretamente e estão na medida certa para impressão."
  },
  {
    icon: Zap,
    title: "Acesso Vitalício",
    desc: "Comprou, é seu para sempre. Use quantas vezes quiser, por quantos anos precisar."
  }
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
            🚀 O Segredo do Kit
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Por que o Kit Escolar Premium <br />
            <span className="text-yellow-400">é diferente de tudo?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700/50 hover:bg-indigo-800 transition-colors">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-900/50">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-indigo-200 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DifferentialsSection;
