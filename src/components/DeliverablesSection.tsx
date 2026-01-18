import { CheckCircle2, FileImage, Layout, Grid, Type, Image, Smartphone, Infinity, Unlock, Zap } from 'lucide-react';

const deliverables = [
    { icon: CheckCircle2, text: "+700 etiquetas editáveis em alta resolução" },
    { icon: FileImage, text: "Arquivos prontos em <strong>PNG e JPG</strong>" },
    { icon: Layout, text: "Editável no <strong>Canva, Studio e CorelDRAW</strong>" },
    { icon: Grid, text: "Temas, formatos e tamanhos organizados" },
    { icon: Type, text: "Fontes infantis que valorizam o material" },
    { icon: Image, text: "Fundos prontos para imprimir sem ajustes" },
    { icon: Smartphone, text: "Compatível com celular ou computador" },
    { icon: Infinity, text: "Acesso vitalício e impressão ilimitada" },
    { icon: Unlock, text: "Uso pessoal ou comercial liberado" },
    { icon: Zap, text: "Solução pronta para parar de improvisar" }
];

const DeliverablesSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://i.postimg.cc/J4pHfVpT/Captura-de-tela-2026-01-16-235710.png"
                            alt="Preview do Kit"
                            loading="lazy"
                            decoding="async"
                            className="w-full max-w-2xl h-auto rounded-xl shadow-lg border border-gray-100"
                        />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-4">
                        O que está incluso no seu acesso?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Lista completa de tudo que você recebe imediatamente:
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
                    {deliverables.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-5 bg-indigo-50/50 border border-indigo-100 rounded-xl hover:border-indigo-300 transition-colors group"
                        >
                            <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                <item.icon className="w-5 h-5 text-indigo-600" />
                            </div>
                            <p
                                className="text-gray-700 font-medium text-sm md:text-base"
                                dangerouslySetInnerHTML={{ __html: item.text }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DeliverablesSection;
