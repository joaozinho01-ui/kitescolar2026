import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Santos",
    role: "Mãe de 2 filhos",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    content: "Antes eu gastava horrores comprando etiquetas prontas que não tinham a cara dos meus filhos. Agora eu mesma faço rapidinho e eles amam! Economizei muito.",
    rating: 5
  },
  {
    name: "Prof. Ana Paula",
    role: "Pedagoga",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces",
    content: "Facilitou demais minha vida na escola. Tenho materiais lindos para decorar a sala e organizar os alunos sem perder meu final de semana criando do zero.",
    rating: 5
  },
  {
    name: "Juliana Ferreira",
    role: "Empreendedora",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces",
    content: "Comecei a vender os kits impressos na minha cidade e já faturei mais de R$ 800 só na primeira semana de janeiro. O Kit se paga na primeira venda!",
    rating: 5
  },
  {
    name: "Camila Rodrigues",
    role: "Designer Gráfico",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    content: "Mesmo sendo designer, eu comprei pela praticidade. Já vem tudo no tamanho certo e organizado. Uso como base para meus clientes e ganho muito tempo.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Centenas de clientes satisfeitos
          </h2>
          <p className="text-xl text-gray-600">
            Veja quem já transformou sua rotina com o Kit Escolar Premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col h-full">
              <Quote className="w-8 h-8 text-indigo-200 mb-4" />
              <p className="text-gray-700 italic mb-6 flex-grow">"{t.content}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-indigo-600 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
