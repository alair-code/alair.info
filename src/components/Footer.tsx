import React from 'react';
import { Instagram, MessageSquare, Mail, Phone, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="bg-surface-navy-dark text-white border-t border-brand-navy-light/40 pt-16 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-border-navy">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-navy border border-brand-navy-light flex items-center justify-center text-white font-bold text-lg tracking-wider">
                <span className="text-brand-accent font-display font-extrabold">A</span>
                <span className="text-white font-display font-bold">I</span>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-display block">
                  Alair Informática
                </span>
                <span className="text-xs text-brand-accent font-medium tracking-wide">
                  Soluções Web de Alta Performance
                </span>
              </div>
            </div>

            <p className="text-sm text-text-light leading-relaxed max-w-sm">
              "Seu site pronto para fazer o seu negócio crescer." Desenvolvimento profissional de sites institucionais, páginas de conversão e sistemas funcionais para empresas em todo o Brasil.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Instagram link */}
              <a
                id="footer-instagram-link"
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no Instagram da Alair Informática"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 hover:border-pink-500/40 transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{BRAND_INFO.instagramHandle}</span>
              </a>

              {/* WhatsApp direct */}
              <a
                id="footer-whatsapp-badge"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Alair Informática"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{BRAND_INFO.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-light">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-brand-accent transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-accent transition-colors">Sobre / Quem Sou</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-accent transition-colors">Serviços Oferecidos</a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-brand-accent transition-colors">Portfólio & Projetos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-accent transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-brand-accent transition-colors">Solicitar Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-light">
              Contato Comercial
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={getWhatsAppLink()} className="hover:underline font-mono">
                  {BRAND_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:underline text-xs">
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  instagram.com/alair.info
                </a>
              </div>
              <p className="text-xs text-text-light pt-2 leading-relaxed">
                Atendimento remoto em todo o Brasil para reuniões de alinhamento, briefing e entregas.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-light">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} <strong>Alair Informática</strong>. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">•</span>
            <span>CNPJ & Desenvolvimento Web Profissional</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
