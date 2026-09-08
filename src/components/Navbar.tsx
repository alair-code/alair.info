import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Instagram, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-base/95 backdrop-blur-md shadow-sm border-b border-border-light py-3.5'
          : 'bg-surface-base/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <a
            id="nav-brand-logo"
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-brand-navy rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-brand-accent font-display font-extrabold">A</span>
              <span className="text-white font-display font-bold">I</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-brand-navy font-display leading-tight group-hover:text-brand-navy-light transition-colors">
                Alair Informática
              </span>
              <span className="text-xs text-text-muted font-medium tracking-wide">
                Soluções Web & Sistemas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-text-body hover:text-brand-navy rounded-lg hover:bg-surface-subtle transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Actions: Instagram + WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Profile Link */}
            <a
              id="header-instagram-link"
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar Instagram da Alair Informática"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-body hover:text-brand-navy border border-border-light hover:border-border-subtle rounded-xl hover:bg-surface-subtle transition-all duration-200"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>{BRAND_INFO.instagramHandle}</span>
            </a>

            {/* Primary Action Button */}
            <a
              id="header-whatsapp-cta-button"
              href={getWhatsAppLink('Olá, Alair! Vim pelo site da Alair Informática e gostaria de solicitar um orçamento gratuito.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy text-white text-sm font-semibold tracking-wide hover:bg-brand-navy-light shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4 text-brand-accent fill-brand-accent/20" />
              <span>Orçamento WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="header-mobile-quick-whatsapp"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar no WhatsApp"
              className="p-2 rounded-xl bg-brand-navy text-brand-accent"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-text-body hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-brand-navy"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="sm:hidden bg-surface-base border-b border-border-light px-4 pt-3 pb-6 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-text-title hover:bg-surface-subtle rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border-light flex flex-col gap-3">
            <a
              id="mobile-instagram-link"
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-text-body border border-border-light rounded-xl hover:bg-surface-subtle"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Acompanhe no Instagram {BRAND_INFO.instagramHandle}</span>
            </a>

            <a
              id="mobile-whatsapp-cta"
              href={getWhatsAppLink('Olá, Alair! Vim pelo site e quero solicitar um orçamento gratuito.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy text-white text-base font-bold shadow-md hover:bg-brand-navy-light"
            >
              <MessageSquare className="w-5 h-5 text-brand-accent" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
