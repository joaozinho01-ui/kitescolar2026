import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ProductSection from '@/components/ProductSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FAQSection from '@/components/FAQSection';
import UrgencySection from '@/components/UrgencySection';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import BonusSection from '@/components/BonusSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero - Impacto Imediato */}
      <HeroSection />

      {/* 2. Identificação do Problema */}
      <ProblemSection />

      {/* 3. Visão de Solução */}
      <SolutionSection />

      {/* 4. Apresentação da Oferta */}
      <ProductSection />

      {/* 5. Diferencial */}
      <DifferentialsSection />

      {/* 6. Benefícios + Recursos */}
      <BenefitsSection />

      {/* 7. Prova Social */}
      <TestimonialsSection />

      {/* 8. Oferta e Planos */}
      <PricingSection />

      {/* 8.1. Bônus Exclusivos (Novo) */}
      <BonusSection />

      {/* 9. Garantia */}
      <GuaranteeSection />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Urgência */}
      <UrgencySection />

      {/* 14. Rodapé */}
      <Footer />

      {/* Sticky CTA */}
      <StickyCTA />
    </main>
  );
};

export default Index;
