import { Clock, Frown, DollarSign, BrainCircuit } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Horas perdidas buscando inspiração",
    description: "Você tenta criar algo do zero, mas gasta horas olhando para a tela em branco ou garimpando imagens no Google que nunca combinam."
  },
  {
    icon: BrainCircuit,
    title: "Não sabe por onde começar",
    description: "São tantos formatos, tamanhos e ideias que você trava. Etiquetas, capas, calendários... parece impossível organizar tudo sozinha."
  },
  {
    icon: Frown,
    title: "Materiais com visual amador",
    description: "Mesmo se esforçando, o resultado final parece 'caseiro' demais. As cores não batem, as fontes são simples e você sente vergonha de entregar ou vender."
  },
  {
    icon: DollarSign,
    title: "Gastar com designers é caro",
    description: "Pagar alguém para fazer cada arte custa uma fortuna. E comprar templates avulsos acaba saindo caro no final das contas."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 animate-pulse">
            😓 Soa familiar?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Criar materiais escolares não deveria ser <br className="hidden md:block" />
            <span className="text-red-500 underline decoration-wavy underline-offset-4">um pesadelo.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nós sabemos como é frustrante querer entregar o melhor para seus alunos ou filhos (ou clientes), mas esbarrar na falta de tempo e habilidade técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
                  <problem.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
