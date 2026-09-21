import React from 'react';
import { Instagram, MessageSquare, Mail, Phone, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="main-footer" className="relative overflow-hidden border-t border-brand-navy-light/40 bg-surface-navy-dark pt-16 pb-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-lg font-bold tracking-wider shadow-lg">
                <span className="font-display font-extrabold text-brand-accent">A</span><span className="font-display font-bold text-white">I</span>
              </div>
              <div>
                <span className="block font-display text-xl font-extrabold tracking-tight">Alair Informática</span>
                <span className="text-xs font-medium tracking-wide text-brand-accent">Soluções Web & Sistemas</span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">Desenvolvimento profissional de sites, páginas de conversão e sistemas funcionais para empresas em todo o Brasil.</p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a id="footer-instagram-link" href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil no Instagram da Alair Informática" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:border-pink-500/40 hover:bg-white/10">
                <Instagram className="h-4 w-4 text-pink-400" />{BRAND_INFO.instagramHandle}
              </a>
              <a id="footer-whatsapp-badge" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Alair Informática" className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-2 text-xs font-semibold text-[#6EE7A0] transition-all hover:bg-[#25D366]/20">
                <MessageSquare className="h-4 w-4" />WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navegação Rápida</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#inicio" className="transition-colors hover:text-brand-accent">Início</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-brand-accent">Sobre / Quem Sou</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-brand-accent">Serviços</a></li>
              <li><a href="#portfolio" className="transition-colors hover:text-brand-accent">Portfólio</a></li>
              <li><a href="#faq" className="transition-colors hover:text-brand-accent">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="transition-colors hover:text-brand-accent">Solicitar Orçamento</a></li>
            </ul>
          </div>

          <div className="space-y-3 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Contato Comercial</h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0 text-brand-accent" /><a href={getWhatsAppLink()} className="font-mono hover:underline">{BRAND_INFO.whatsappDisplay}</a></div>
              <div className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0 text-brand-accent" /><a href={`mailto:${BRAND_INFO.email}`} className="text-xs hover:underline">{BRAND_INFO.email}</a></div>
              <div className="flex items-center gap-2.5"><Instagram className="h-4 w-4 shrink-0 text-brand-accent" /><a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">instagram.com/alair.info</a></div>
              <p className="pt-2 text-xs leading-relaxed text-slate-400">Atendimento remoto em todo o Brasil para reuniões de alinhamento, briefing e entregas.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 sm:flex-row">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} <strong>Alair Informática</strong>. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">•</span><span>Desenvolvimento Web Profissional</span>
          </div>
          <button type="button" onClick={scrollToTop} aria-label="Voltar ao topo da página" className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/10">
            Voltar ao topo <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
