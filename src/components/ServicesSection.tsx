import React, { useState } from 'react';
import { 
  Globe, 
  LayoutGrid, 
  Code, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';
import { ServiceItem } from '../types';

const serviceIcons = {
  globe: Globe,
  'layout-grid': LayoutGrid,
  code: Code,
  server: Server,
  'shield-check': Server,
  zap: Globe,
};

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section 
      id="servicos" 
      className="py-24 bg-surface-subtle border-t border-border-light relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-base border border-border-light text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 shadow-xs">
              <span>Soluções Especializadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
              Serviços desenvolvidos sob medida para o seu projeto
            </h2>
          </div>
          <p className="text-base text-text-body max-w-md">
            Do site institucional ao sistema web funcional, cada solução é planejada a partir das necessidades do seu projeto.
          </p>
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES_DATA.map((service) => {
            const Icon = serviceIcons[service.iconName] || Globe;
            const isSelected = service.id === selectedServiceId;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border relative text-left group ${
                  isSelected
                    ? 'bg-surface-base border-brand-navy shadow-lg ring-1 ring-brand-navy transform -translate-y-1'
                    : 'bg-surface-base/80 border-border-card hover:border-border-subtle hover:bg-surface-base hover:shadow-md'
                }`}
              >
                {service.highlightBadge && (
                  <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-navy text-brand-accent tracking-wide shadow-xs">
                    {service.highlightBadge}
                  </span>
                )}

                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    isSelected 
                      ? 'bg-brand-navy text-brand-accent' 
                      : 'bg-surface-subtle border border-border-light text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-accent'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                    {service.category}
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy font-display mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-text-body line-clamp-3 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-light flex items-center justify-between text-xs font-bold text-brand-navy">
                  <span>{isSelected ? 'Detalhes abaixo' : 'Ver especificações'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-brand-navy' : 'text-text-muted group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Deep Dive Panel */}
        <div 
          id="service-detailed-panel"
          className="rounded-2xl bg-surface-base border border-border-card p-6 sm:p-10 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle text-xs font-bold text-brand-navy border border-border-light">
                <Sparkles className="w-3.5 h-3.5 text-brand-navy" />
                <span>Escopo & Entregáveis Oficiais</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display">
                {activeService.title}
              </h3>

              <p className="text-base text-text-body leading-relaxed">
                {activeService.fullDescription}
              </p>

              {/* Deliverables Checklist */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                  O que está incluso neste serviço:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-text-title">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Box for Service */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-surface-subtle border border-border-card p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">
                    Aplicação Recomendada:
                  </div>
                  <div className="text-sm font-semibold text-brand-navy leading-relaxed">
                    {activeService.idealFor}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-light space-y-3">
                  <div className="text-xs text-text-body">
                    Orçamento gratuito formatado sem qualquer compromisso:
                  </div>

                  <a
                    id={`service-cta-${activeService.id}`}
                    href={getWhatsAppLink(`Olá, Alair! Gostaria de solicitar um orçamento para o serviço de ${activeService.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 text-brand-accent" />
                    <span>Solicitar Orçamento no WhatsApp</span>
                  </a>

                  <p className="text-[11px] text-center text-text-muted">
                    Atendimento ágil direto pelo WhatsApp: (33) 99947-7045
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
