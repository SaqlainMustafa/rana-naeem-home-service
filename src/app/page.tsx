'use client';

import { useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import ServicesOverview from '@/components/ServicesOverview';
import YearlyPackages from '@/components/YearlyPackages';
import VisionMission from '@/components/VisionMission';
import HowItWorks from '@/components/HowItWorks';
import ContactHighlights from '@/components/ContactHighlights';

export default function Home() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
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