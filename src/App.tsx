/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-text-primary">
      {/* Top Fixed Header with Navigation and Social Actions */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {/* 1. Seção inicial impactante */}
        <HeroSection />

        {/* 2. Sobre / Quem sou */}
        <AboutSection />

        {/* 3. Serviços */}
        <ServicesSection />

        {/* 4. Portfólio / Projetos */}
        <PortfolioSection />

        {/* 5. Dúvidas Frequentes & Garantias */}
        <FaqSection />

        {/* 6. Formulário de contato */}
        <ContactSection />
      </main>

      {/* Corporate Agency Footer */}
      <Footer />

      {/* 7. WhatsApp flutuante com atendimento interativo */}
      <FloatingWhatsApp />
    </div>
  );
}

