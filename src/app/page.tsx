import { HeroSection } from "@/components/sections/HeroSection";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { BusinessOutcomes } from "@/components/sections/BusinessOutcomes";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WorkingApproach } from "@/components/sections/WorkingApproach";
import { WhyKartgen } from "@/components/sections/WhyKartgen";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Service Pillars */}
      <ServicePillars />

      {/* 4. Business Outcomes */}
      <BusinessOutcomes />

      {/* 5. Selected Work */}
      <SelectedWork />

      {/* 6. Working Approach */}
      <WorkingApproach />

      {/* 7. Why Kartgen */}
      <WhyKartgen />

      {/* 8. Final CTA */}
      <FinalCTA />
    </>
  );
}
