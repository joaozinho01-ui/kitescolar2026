import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber usar o Canva ou ser designer?",
    answer: "Não! O Kit foi feito exatamente para quem não tem experiência. É só abrir, clicar no texto que quer mudar e pronto. É tão fácil quanto editar uma mensagem no WhatsApp."
  },
  {
    question: "Funciona pelo celular?",
    answer: "Sim, perfeitamente. Você pode editar tudo pelo aplicativo gratuito do Canva no seu celular, tablet ou computador."
  },
  {
    question: "Posso usar para vender os impressos?",
    answer: "Com certeza! A licença comercial está inclusa. Você pode imprimir e vender para mães na sua escola, bairro ou internet e ficar com 100% do lucro."
  },
  {
    question: "Recebo o acesso na hora?",
    answer: "Sim! Assim que o pagamento é confirmado (Pix ou Cartão), você recebe um e-mail com seu acesso em menos de 2 minutos. Pode começar a usar agora mesmo."
  },
  {
    question: "O material já está atualizado para 2026?",
    answer: "Sim, 100% atualizado com calendários 2026 e os personagens que as crianças mais estão pedindo este ano."
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gray-500 font-bold tracking-wider uppercase text-sm">
            Ainda com dúvidas?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-gray-200 px-6 shadow-sm data-[state=open]:border-indigo-200 data-[state=open]:ring-2 data-[state=open]:ring-indigo-50"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-indigo-600 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
