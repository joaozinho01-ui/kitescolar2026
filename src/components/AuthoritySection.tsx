import { Shield, Download, Star, Users, CreditCard, Lock } from 'lucide-react';

const badges = [
  { icon: Shield, text: "Compra 100% Segura" },
  { icon: Download, text: "100% Digital" },
  { icon: Star, text: "Satisfação Garantida" },
  { icon: Users, text: "+550 Clientes" },
  { icon: CreditCard, text: "Pagamento Facilitado" },
  { icon: Lock, text: "Dados Protegidos" },
];

const AuthoritySection = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            O <strong className="text-indigo-900">Kit Escolar Premium 2026</strong> é um produto 100% verificado, criado para facilitar a vida de pais e professores. Junte-se a centenas de clientes satisfeitos.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm"
              >
                <badge.icon className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
