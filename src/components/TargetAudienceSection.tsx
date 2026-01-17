import { Briefcase, Crown, Users, Baby, GraduationCap, Clock } from 'lucide-react';

const audience = [
    {
        icon: Briefcase,
        title: "EMPREENDEDORES DE PAPELARIA",
        desc: "Para quem quer <span class='text-indigo-600 font-bold'>vender todos os dias</span>, escalar pedidos e transformar etiquetas em <span class='text-indigo-600 font-bold'>fonte real de renda</span>."
    },
    {
        icon: Crown,
        title: "QUEM QUER VIVER DE PERSONALIZADOS",
        desc: "Catálogo pronto que facilita fechamento rápido. <span class='text-indigo-600 font-bold'>Mais vendas, menos conversa e zero improviso.</span>"
    },
    {
        icon: Users,
        title: "QUEM QUER COMEÇAR DO ZERO",
        desc: "Ideal para iniciantes que querem vender mesmo sem experiência. <span class='text-indigo-600 font-bold'>Editou, mostrou, vendeu.</span>"
    },
    {
        icon: Baby,
        title: "PAIS E MÃES",
        desc: "Acabe com perdas e confusão. Organize tudo <span class='text-indigo-600 font-bold'>no mesmo dia, sem stress.</span>"
    },
    {
        icon: GraduationCap,
        title: "PROFESSORES",
        desc: "Identificação rápida e visual padronizado. <span class='text-indigo-600 font-bold'>Menos bagunça, mais controle.</span>"
    },
    {
        icon: Clock,
        title: "QUEM NÃO TEM TEMPO",
        desc: "Tudo pronto em minutos. <span class='text-indigo-600 font-bold'>Sem curva de aprendizado e sem perder horas.</span>"
    }
];

const TargetAudienceSection = () => {
    return (
        <section className="py-20 bg-indigo-50/50 relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                            <Briefcase className="w-6 h-6 text-indigo-600" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-indigo-950">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Para quem é este pack</span> <br />
                        <span>— e por que ele gera resultado rápido?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Isso não é um pack comum. É uma solução pensada primeiro para quem quer <strong className="text-indigo-700">faturar mais</strong>, criar <strong className="text-indigo-700">renda recorrente</strong> e até <strong className="text-indigo-700">viver de papelaria</strong> — sem depender de criação do zero.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {audience.map((item, index) => (
                        <div key={index} className="bg-white border border-indigo-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-100 transition-colors">
                                    <item.icon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-3 group-hover:text-indigo-700 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: item.desc }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TargetAudienceSection;
