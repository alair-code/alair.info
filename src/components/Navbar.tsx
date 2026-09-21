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
    <header id="main-navigation-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-base/95 backdrop-blur-md shadow-lg shadow-slate-950/5 border-b border-border-light py-3.5' : 'bg-surface-base/75 backdrop-blur-md border-b border-transparent py-5'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-text-body transition-all duration-200 hover:bg-surface-subtle hover:text-brand-navy">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a id="header-instagram-link" href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Acessar Instagram da Alair Informática" className="inline-flex items-center gap-1.5 rounded-xl border border-border-light px-3 py-2 text-xs font-semibold text-text-body transition-all hover:border-border-subtle hover:bg-surface-subtle hover:text-brand-navy">
              <Instagram className="h-3.5 w-3.5 text-pink-600" />{BRAND_INFO.instagramHandle}
            </a>
            <a id="header-whatsapp-cta-button" href={getWhatsAppLink('Olá, Alair! Vim pelo site da Alair Informática e gostaria de solicitar um orçamento gratuito.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-navy-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2">
              <MessageSquare className="h-4 w-4 text-brand-accent" /><span>Orçamento WhatsApp</span><ArrowUpRight className="h-3.5 w-3.5 text-text-light" />
            </a>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <a id="header-mobile-quick-whatsapp" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp" className="rounded-xl bg-[#25D366] p-2 text-white shadow-sm">
              <MessageSquare className="h-4 w-4" />
            </a>
            <button id="mobile-menu-toggle-btn" type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-xl p-2 text-text-body hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-brand-accent" aria-expanded={mobileMenuOpen} aria-controls="mobile-menu-drawer" aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="border-b border-border-light bg-surface-base px-4 pb-6 pt-3 shadow-xl sm:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-text-title transition-colors hover:bg-surface-subtle">{link.label}</a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-border-light pt-4">
            <a id="mobile-instagram-link" href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-border-light py-2.5 text-sm font-semibold text-text-body hover:bg-surface-subtle">
              <Instagram className="h-4 w-4 text-pink-600" />Acompanhe no Instagram {BRAND_INFO.instagramHandle}
            </a>
            <a id="mobile-whatsapp-cta" href={getWhatsAppLink('Olá, Alair! Vim pelo site e quero solicitar um orçamento gratuito.')} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-base font-bold text-white shadow-md hover:bg-[#1ebe5d]">
              <MessageSquare className="h-5 w-5" />Solicitar Orçamento no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
