'use client';

import HeroSlider from '@/components/HeroSlider';
import ServicesOverview from '@/components/ServicesOverview';
import YearlyPackages from '@/components/YearlyPackages';
import VisionMission from '@/components/VisionMission';
import HowItWorks from '@/components/HowItWorks';
import ContactHighlights from '@/components/ContactHighlights';

export default function Home() {
  const handleServiceSelect = (serviceId: string) => {
    // Handle service selection if needed
    console.log('Selected service:', serviceId);
  };

  return (
    <div>
      <HeroSlider onServiceSelect={handleServiceSelect} />
      <ServicesOverview />
      <YearlyPackages />
      <VisionMission />
      <HowItWorks />
      <ContactHighlights />
    </div>
  );
}