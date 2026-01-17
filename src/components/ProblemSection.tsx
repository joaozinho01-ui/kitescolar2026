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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Cansada de gastar horas e dinheiro <br className="hidden md:block" />
            <span className="text-red-500">com material escolar?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nós sabemos o estresse que é todo início de ano.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <div className="mt-1 min-w-[24px]">
                <Frown className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-gray-700 font-medium leading-snug">
                <span className="font-bold text-gray-900 block mb-1">Falta de Criatividade:</span>
                Você tenta criar algo no computador mas sente que fica com "cara de amador".
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 min-w-[24px]">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-gray-700 font-medium leading-snug">
                <span className="font-bold text-gray-900 block mb-1">Horas Perdidas:</span>
                Garimpar imagens no Google que nunca combinam entre si.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 min-w-[24px]">
                <DollarSign className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-gray-700 font-medium leading-snug">
                <span className="font-bold text-gray-900 block mb-1">Preço Alto:</span>
                Pagar designer ou comprar itens personalizados prontos custa uma fortuna.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
