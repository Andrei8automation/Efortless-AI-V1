import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import IntegrationLogos from './components/IntegrationLogos';
import FrictionChecklist from './components/FrictionChecklist';
import SecuritySection from './components/SecuritySection';
import FaqAccordion from './components/FaqAccordion';
import CredibilitySignals from './components/CredibilitySignals';
import TestimonialsSection from './components/TestimonialsSection';
import AuditOffer from './components/AuditOffer';
import PricingTransparency from './components/PricingTransparency';
import WhatHappensNext from './components/WhatHappensNext';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-[#0a0a0a] ambient-mesh font-sans min-h-screen text-gray-100">
      <ScrollProgress />
      <Navbar onOpenModal={openModal} />
      <main>
        <HeroSection onOpenModal={openModal} />
        <WhoItsFor />
        <HowItWorks />
        <IntegrationLogos />
        <FrictionChecklist onOpenModal={openModal} />
        <SecuritySection />
        <CredibilitySignals />
        <TestimonialsSection />
        <AuditOffer onOpenModal={openModal} />
        <PricingTransparency />
        <WhatHappensNext />
        <FaqAccordion />
        <FinalCta onOpenModal={openModal} />
      </main>
      <Footer />
      <AuditModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
