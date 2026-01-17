import { Zap, LayoutGrid, CalendarRange, PenTool, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
            🚀 Conheça o "Acervo Inteligente"
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Por que designers cobram R$ 200, <br />
            mas você paga <span className="text-yellow-400">menos de R$ 20?</span>
          </h2>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            O segredo não é mágica. É o nosso método de produção em escala que entrega qualidade profissional por centavos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Card 1: The Old Way */}
          <div className="bg-indigo-950/50 p-8 rounded-2xl border border-indigo-800 opacity-70 scale-95">
            <div className="text-indigo-400 font-bold uppercase text-xs mb-2 tracking-widest">O Jeito Tradicional</div>
            <h3 className="text-xl font-bold mb-4 text-white">Contratar Designer</h3>
            <ul className="space-y-3 text-sm text-indigo-200">
              <li className="flex gap-2"><span className="text-red-400">×</span> Caro (R$ 50/arte)</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> Demora dias</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> Difícil pedir alteração</li>
            </ul>
          </div>

          {/* Card 2: The New Way (Hero) */}
          <div className="bg-white text-indigo-950 p-8 rounded-2xl border-2 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.2)] md:-mt-8 md:mb-8 relative z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-indigo-900 font-bold px-4 py-1 rounded-full text-xs uppercase whitespace-nowrap">
              A Solução Kit Premium
            </div>
            <h3 className="text-2xl font-extrabold mb-4">Acervo Inteligente 2026</h3>
            <p className="mb-6 text-sm font-medium">Nosso time de designers cria TUDO antecipadamente. Você só entra, escolhe e personaliza.</p>
            <ul className="space-y-3 font-semibold">
              <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-green-500" /> Preço de "banana"</li>
              <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-green-500" /> Pronto na hora</li>
              <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-green-500" /> Qualidade de agência</li>
            </ul>
          </div>

          {/* Card 3: The Bad Way */}
          <div className="bg-indigo-950/50 p-8 rounded-2xl border border-indigo-800 opacity-70 scale-95">
            <div className="text-indigo-400 font-bold uppercase text-xs mb-2 tracking-widest">O Jeito Amador</div>
            <h3 className="text-xl font-bold mb-4 text-white">Fazer Sozinha</h3>
            <ul className="space-y-3 text-sm text-indigo-200">
              <li className="flex gap-2"><span className="text-red-400">×</span> Estresse mental</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> Resultado "caseiro"</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> Perda de tempo</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <LayoutGrid className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="font-bold">100% Organizado</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <CalendarRange className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="font-bold">Atualizado 2026</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <PenTool className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="font-bold">Editável Canva</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <ShieldCheck className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="font-bold">Garantido</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DifferentialsSection;
