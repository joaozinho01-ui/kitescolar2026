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

      <div className="container mx-auto px-4 py-8 relative z-10 pt-28">


        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4 tracking-tight">
              Volta às aulas <br className="hidden lg:block" />
              <span className="text-yellow-400">sem estresse e gastando pouco.</span>
            </h1>

            {/* Mobile Image (Visible only on mobile/tablet) */}
            <div className="flex lg:hidden justify-center mb-6 -mt-2">
              <div className="relative float-animation px-4">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90"></div>
                <img
                  src={mockupPremium}
                  alt="Kit Escolar Premium 2026"
                  fetchPriority="high"
                  className="relative w-full max-w-xs rounded-2xl shadow-2xl border-4 border-white/10"
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Tenha <span className="text-white font-bold bg-white/20 px-1 rounded">acesso imediato</span> ao acervo que vai resolver sua lista de material em 10 minutos.
            </p>

            {/* Micro-triggers - Simplified */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-primary-foreground/90 font-medium text-sm">
              <div className="flex items-center gap-1.5 bg-indigo-900/30 px-3 py-1.5 rounded-full border border-indigo-500/30">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Zero esforço técnico
              </div>
              <div className="flex items-center gap-1.5 bg-indigo-900/30 px-3 py-1.5 rounded-full border border-indigo-500/30">
                <Download className="w-4 h-4 text-green-400" />
                Baixe e edite agora
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <a
                href="#planos"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-indigo-950 px-8 py-5 rounded-xl text-xl font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(250,204,21,0.4)] border-b-4 border-yellow-600"
              >
                Sentir o alívio de resolver hoje
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </a>

              <p className="text-primary-foreground/60 text-xs font-medium mt-2 flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400" /> Acesso vitalício por valor de cafézinho
              </p>
            </div>


          </div>

          {/* Right Content - Mockup (Hidden on mobile, visible on lg) */}
          <div className="hidden lg:flex justify-center">
            <div className="relative float-animation px-4">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90"></div>
              <img
                src={mockupPremium}
                alt="Kit Escolar Premium 2026"
                fetchPriority="high"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white/10"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-soft">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-bold uppercase">Status Atual</p>
                  <p className="text-sm font-bold text-gray-900">Mãe Tranquila & Feliz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
