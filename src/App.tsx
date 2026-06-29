import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import FrictionChecklist from './components/FrictionChecklist';
import SecuritySection from './components/SecuritySection';
import FaqAccordion from './components/FaqAccordion';
import CredibilitySignals from './components/CredibilitySignals';
import AuditOffer from './components/AuditOffer';
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
        <FrictionChecklist onOpenModal={openModal} />
        <SecuritySection />
        <FaqAccordion />
        <CredibilitySignals />
        <AuditOffer onOpenModal={openModal} />
        <WhatHappensNext />
        <FinalCta onOpenModal={openModal} />
      </main>
      <Footer />
      <AuditModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
