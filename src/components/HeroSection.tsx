import React from 'react';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Lock,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-surface-subtle via-surface-base to-surface-subtle"
    >
      {/* Subtle geometric background grid for tech precision */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0A2540 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Badge */}
            <div 
              id="hero-availability-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-base border border-border-light shadow-sm text-xs font-semibold text-text-title mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Agenda aberta para novos projetos empresariais</span>
              <span className="text-text-muted">• Atendimento Brasil</span>
            </div>

            {/* Impact Heading with Tagline & Main Value Proposition */}
            <h1 
              id="hero-main-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-brand-navy tracking-tight leading-[1.15] font-display mb-6"
            >
              Seu site pronto para fazer o seu{' '}
              <span className="relative inline-block text-brand-navy">
                negócio crescer
                <svg 
                  className="absolute left-0 -bottom-2 w-full h-3 text-brand-accent/70 -z-10" 
                  viewBox="0 0 250 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M3 9C60 2.5 180 2.5 247 8.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
              .
            </h1>

            {/* Subtitle addressing revenue expansion */}
            <p 
              id="hero-lead-paragraph"
              className="text-lg sm:text-xl text-text-body leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Desenvolvimento de sites profissionais e sistemas sob medida para{' '}
              <strong className="font-semibold text-brand-navy">empresas que querem aumentar o seu faturamento</strong>. 
              Mais do que presença online: uma ferramenta confiável, rápida e de alta conversão.
            </p>

            {/* Call to Action Group */}
            <div 
              id="hero-cta-group"
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              {/* Primary High-Converting WhatsApp Button */}
              <a
                id="hero-primary-whatsapp-cta"
                href={getWhatsAppLink('Olá, Alair! Vim pelo site da Alair Informática e gostaria de solicitar um orçamento gratuito para fazer meu negócio crescer.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-brand-accent/40 group"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400/30 group-hover:scale-110 transition-transform" />
                </div>
                <span>Solicite seu Orçamento Gratuito</span>
                <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Projects Button */}
              <a
                id="hero-secondary-projects-cta"
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface-base hover:bg-surface-subtle text-brand-navy border border-border-card text-base font-semibold transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>Ver Projetos Realizados</span>
              </a>
            </div>

            {/* Value Guarantees / Micro Trust Signals */}
            <div 
              id="hero-trust-signals"
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-border-light/80 w-full"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-body">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Entrega no prazo combinado</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-body">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Garantia de revisão e ajustes</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-body col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Sites 100% responsivos</span>
              </div>
            </div>

          </div>

          {/* Interactive Visual Showcase Column (Agency-grade Mockup & Performance Card) */}
          <div className="lg:col-span-5 relative">
            <div 
              id="hero-showcase-container"
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Decorative Gradient Frame */}
              <div className="relative rounded-2xl bg-surface-navy p-3 sm:p-4 shadow-2xl border border-brand-navy-light/40">
                
                {/* Browser/Window Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-brand-navy-dark text-[11px] font-mono text-text-inverted-muted flex items-center gap-1.5 border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>alairinformatica.com.br</span>
                  </div>
                  <div className="text-[11px] text-text-light font-medium">
                    100% Online
                  </div>
                </div>

                {/* Hero Showcase Mockup Content */}
                <div className="rounded-xl overflow-hidden bg-surface-base border border-border-light shadow-inner p-4 space-y-4">
                  {/* Mock Dashboard Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                        AI
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Painel de Faturamento</div>
                        <div className="text-[10px] text-text-muted">Crescimento constante do negócio</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      +42% no mês
                    </span>
                  </div>

                  {/* Metric Tiles */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-2.5 rounded-lg bg-surface-subtle border border-border-light">
                      <div className="text-[10px] uppercase font-semibold text-text-muted">Conversão Mobile</div>
                      <div className="text-lg font-bold text-brand-navy">99.4%</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Otimizado para vendas</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-subtle border border-border-light">
                      <div className="text-[10px] uppercase font-semibold text-text-muted">Velocidade Google</div>
                      <div className="text-lg font-bold text-brand-navy">0.7 seg</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Core Web Vitals A+</div>
                    </div>
                  </div>

                  {/* Visual Preview Graphic */}
                  <div className="relative rounded-lg overflow-hidden border border-border-light aspect-[16/9]">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80" 
                      alt="Interface moderna de site corporativo desenvolvido por Alair Informática"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent flex items-end p-3">
                      <div className="text-white">
                        <div className="text-xs font-bold font-display">Sites Sob Medida & Sistemas Web</div>
                        <div className="text-[11px] text-slate-200">Projetados para atrair clientes reais</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Preview */}
                  <div className="flex items-center justify-between p-2.5 bg-brand-navy-dark text-white rounded-lg text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-medium">Orçamento direto sem custo</span>
                    </div>
                    <span className="text-brand-accent font-semibold text-[11px] flex items-center gap-1">
                      (33) 99947-7045
                    </span>
                  </div>
                </div>

                {/* Quality & Direct Support Floating Tag */}
                <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-surface-base border border-border-card rounded-xl p-3 shadow-xl flex items-center gap-3 max-w-[270px]">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy">Garantia & Suporte</div>
                    <div className="text-[11px] text-text-muted mt-0.5">Atendimento direto com o desenvolvedor</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
