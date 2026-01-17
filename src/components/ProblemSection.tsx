import { Clock, Frown, DollarSign, BrainCircuit } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Janeiro chegou. <br />
            <span className="text-red-600">Como você está se sentindo?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Seja honesta... alguma dessas situações faz parte da sua rotina agora?
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          {/* Question 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100/50 hover:border-red-200 transition-colors group">
            <div className="flex gap-4">
              <div className="mt-1 min-w-[24px]">
                <BrainCircuit className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Ansiedade com a lista?</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "Tenho que comprar material, etiquetar tudo, encapar caderno... e ainda cuidar da casa e do trabalho."
                </p>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100/50 hover:border-red-200 transition-colors group">
            <div className="flex gap-4">
              <div className="mt-1 min-w-[24px]">
                <Frown className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Frustrada com o Canva?</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "Tentei fazer sozinha, mas perdi 3 horas e a arte ficou com cara de amadora. Queria algo bonito de verdade."
                </p>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100/50 hover:border-red-200 transition-colors group">
            <div className="flex gap-4">
              <div className="mt-1 min-w-[24px]">
                <DollarSign className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Dinheiro curto?</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "Pagar R$ 100,00 ou mais por um kit personalizado está fora de cogitação. Preciso economizar."
                </p>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100/50 hover:border-red-200 transition-colors group">
            <div className="flex gap-4">
              <div className="mt-1 min-w-[24px]">
                <Clock className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Urgência batendo?</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "As aulas começam logo e eu ainda não fiz nada. Preciso de uma solução pra ONTEM."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agitation Block */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-red-50 p-8 rounded-2xl border border-red-100">
          <p className="text-red-900 font-bold text-xl leading-snug">
            Você não precisa passar por esse estresse todo ano. <br />
            <span className="font-normal text-red-800 text-base mt-2 block">Existe um jeito mais inteligente (e barato) de resolver isso.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
