import { Gift, ArrowRight } from 'lucide-react';
import bonus1 from '@/assets/bonus.webp';

const bonuses = [
    {
        title: "Pack Extra de Etiquetas",
        description: "Modelos variados para diferenciar seus produtos e encantar clientes.",
        image: bonus1,
        tag: "Exclusivo Premium"
    },
    {
        title: "Artes para Brindes",
        description: "Gabaritos prontos para sublimação em squeezes, canecas e toalhinhas.",
        image: "https://proffabimendanha.com.br/wp-content/uploads/2026/01/2-10-819x1024.png",
        tag: "Exclusivo Premium"
    },
    {
        title: "Mockups Profissionais",
        description: "Imagens de alta qualidade para divulgar seus produtos nas redes sociais.",
        image: "https://proffabimendanha.com.br/wp-content/uploads/2026/01/Post-Linkedin-Me-Ajude-Encontrar-Emprego-Moderno-Verde-2.png",
        tag: "Exclusivo Premium"
    },
    {
        title: "Tags de Envio e Cartões",
        description: "O toque final perfeito para agregrar valor na entrega do seu produto.",
        image: "https://proffabimendanha.com.br/wp-content/uploads/2026/01/Agradecimento-Sticker-1-e1768102766494.webp",
        tag: "Exclusivo Premium"
    }
];

const BonusSection = () => {
    return (
        <section className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Gift className="w-4 h-4" />
                        Vantagens do Plano Premium
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">
                        Bônus Exclusivos do <span className="text-indigo-600">Kit Escolar Premium 2026</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Materiais extras selecionados para você economizar tempo de produção e aumentar seu lucro nas vendas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-purple-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center relative overflow-hidden group">

                            {/* Value Tag */}
                            <div className="absolute top-4 right-4 bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-md">
                                Valor Real: <span className="line-through">R$ 47,00</span>
                            </div>

                            <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                <img
                                    src={bonus.image}
                                    alt={bonus.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left pt-6 md:pt-0">
                                <span className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider mb-3">
                                    {bonus.tag}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {bonus.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                    {bonus.description}
                                </p>
                                <p className="text-green-600 font-bold text-sm bg-green-50 inline-block px-3 py-1 rounded-lg">
                                    Hoje: Grátis
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-white border-2 border-indigo-100 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Garanta todos esses bônus hoje mesmo!
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Ao escolher o plano Premium, você recebe acesso automático a todo esse material complementar.
                    </p>

                    <a
                        href="https://www.ggcheckout.com/checkout/v2/L1BtkHLS5kLwGB6hCWp7"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg shadow-green-500/20 transition-all transform hover:-translate-y-1"
                    >
                        Quero o Kit Premium com Todos os Bônus
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default BonusSection;
