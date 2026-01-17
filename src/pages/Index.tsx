import { Suspense, lazy } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';

// Lazy load below-the-fold content to improve initial load time
const SolutionSection = lazy(() => import('@/components/SolutionSection'));
const ProductSection = lazy(() => import('@/components/ProductSection'));
const DifferentialsSection = lazy(() => import('@/components/DifferentialsSection'));
const BenefitsSection = lazy(() => import('@/components/BenefitsSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
const GuaranteeSection = lazy(() => import('@/components/GuaranteeSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const UrgencySection = lazy(() => import('@/components/UrgencySection'));
const Footer = lazy(() => import('@/components/Footer'));
const StickyCTA = lazy(() => import('@/components/StickyCTA'));
const BonusSection = lazy(() => import('@/components/BonusSection'));

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero - Impacto Imediato (Eager Load) */}
      <HeroSection />

      {/* 2. Identificação do Problema (Eager Load) */}
      <ProblemSection />

      <Suspense fallback={<div className="h-screen bg-gray-50" />}>
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
      </Suspense>
    </main>
  );
};

export default Index;
