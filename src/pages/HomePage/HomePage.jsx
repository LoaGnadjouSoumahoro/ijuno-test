import BenefitsSection from './sections/BenefitsSection';

import FeaturesSection from './sections/FeaturesSection';
import HeroSection from './sections/HeroSection';
import HowItWorksSection from './sections/HowItWorksSection';
import PartnerSection from './sections/PartnerSection';
import StatsSection from './sections/StatsSection';
import TestimonialsSection from './sections/TestimonialsSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <PartnerSection />
      <BenefitsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </main>
  );
};
export default HomePage;
