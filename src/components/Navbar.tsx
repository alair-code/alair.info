import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-base/90 backdrop-blur-xl shadow-e1 border-b border-border-light py-3.5'
          : 'bg-surface-base/80 backdrop-blur-md border-b border-transparent py-5'
      }`}
    >
      {/* Linha de luz no topo quando rolado — sensação de navbar premium */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a id="nav-brand-logo" href="#inicio" className="group flex items-center gap-3.5 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-brand-accent">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-lg font-bold tracking-wider shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="font-display font-extrabold text-brand-accent">A</span><span className="font-display font-bold text-white">I</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-tight text-brand-navy transition-colors group-hover:text-brand-navy-light">Alair Informática</span>
              <span className="text-xs font-medium tracking-wide text-text-muted">Soluções Web & Sistemas</span>
            </div>
          </a>

          <nav id="desktop-nav-links" className="hidden items-center gap-1 lg:flex xl:gap-1.5" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link rounded-lg px-3.5 py-2 text-sm font-semibold text-text-body hover:bg-surface-subtle hover:text-brand-navy"
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
              className="group inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-body hover:text-brand-navy border border-border-light hover:border-border-subtle rounded-xl hover:bg-surface-subtle transition-all duration-200"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600 transition-transform duration-300 group-hover:scale-110" />
              <span>{BRAND_INFO.instagramHandle}</span>
            </a>

            {/* Primary Action Button */}
            <a
              id="header-whatsapp-cta-button"
              href={getWhatsAppLink('Olá, Alair! Vim pelo site da Alair Informática e gostaria de solicitar um orçamento gratuito.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold tracking-wide hover:bg-[#1eb857] shadow-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4 text-white fill-white/20" />
              <span>Orçamento WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
              className="btn-premium rounded-xl bg-[#25D366] p-2 text-white shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-text-body hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-brand-accent transition-transform duration-200 active:scale-90"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="sm:hidden bg-surface-base border-b border-border-light px-4 pt-3 pb-6 shadow-e2"
          style={{ animation: 'hero-enter 0.35s var(--ease-premium) both' }}
        >
          <nav className="flex flex-col gap-1.5" aria-label="Navegação mobile">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-text-title hover:bg-surface-subtle rounded-xl transition-colors"
                style={{ animation: 'hero-enter 0.4s var(--ease-premium) both', animationDelay: `${idx * 45}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-border-light pt-4">
            <a id="mobile-instagram-link" href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-border-light py-2.5 text-sm font-semibold text-text-body hover:bg-surface-subtle">
              <Instagram className="h-4 w-4 text-pink-600" />Acompanhe no Instagram {BRAND_INFO.instagramHandle}
            </a>

            <a
              id="mobile-whatsapp-cta"
              href={getWhatsAppLink('Olá, Alair! Vim pelo site e quero solicitar um orçamento gratuito.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-premium flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-base font-bold shadow-md hover:bg-[#1eb857]"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
