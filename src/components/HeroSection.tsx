import { ArrowDown, CheckCircle2, Download, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import PromoTimer from './PromoTimer';
import mockupPremium from '@/assets/mockuppremium.webp';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Top Banner */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <PromoTimer />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 pt-28">


        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Kit Escolar Premium 2026 — <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Materiais Prontos, Editáveis e Atualizados
              </span>
            </h1>

            {/* Mobile Image (Visible only on mobile/tablet) */}
            <div className="flex lg:hidden justify-center mb-8 -mt-2">
              <div className="relative float-animation px-4">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90"></div>
                <img
                  src={mockupPremium}
                  alt="Kit Escolar Premium 2026"
                  className="relative w-full max-w-sm rounded-2xl shadow-2xl border-4 border-white/10"
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Tenha acesso a centenas de artes escolares organizadas, prontas para personalizar, imprimir ou vender, mesmo que você nunca tenha usado Canva.
            </p>

            {/* Micro-triggers */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 text-primary-foreground/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Não precisa saber design
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-accent" />
                Download imediato
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Uso pessoal ou comercial
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <a
                href="#planos"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-indigo-950 px-8 py-5 rounded-xl text-xl font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.5)] border-b-4 border-yellow-600"
              >
                Garantir meu acesso agora
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </a>

              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="text-primary-foreground/80 text-sm font-semibold">
                  🔒 Pagamento Único • Acesso Vitalício
                </p>
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-primary-foreground text-sm">A partir de</span>
                  <span className="text-yellow-400 text-2xl font-bold">R$2,99</span>
                </div>
              </div>
            </div>


          </div>

          {/* Right Content - Mockup (Hidden on mobile, visible on lg) */}
          <div className="hidden lg:flex justify-center">
            <div className="relative float-animation px-4">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90"></div>
              <img
                src={mockupPremium}
                alt="Kit Escolar Premium 2026"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
