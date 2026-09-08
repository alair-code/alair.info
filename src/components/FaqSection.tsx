import React, { useState } from 'react';
import { ChevronDown, MessageSquare, HelpCircle, ShieldCheck, Clock, Smartphone, Headphones } from 'lucide-react';
import { FAQS_DATA } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const FaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 bg-surface-subtle border-t border-border-light relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guarantees Summary Strip */}
        <div className="rounded-2xl bg-brand-navy text-white p-8 sm:p-10 mb-20 shadow-xl border border-brand-navy-light/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-4 sm:pt-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-2 text-brand-accent">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-display">Pontualidade</div>
              <div className="text-xs text-slate-300 mt-1">Prazos combinados para cada projeto</div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-2 text-brand-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-display">Garantia</div>
              <div className="text-xs text-slate-300 mt-1">Revisão e ajustes inclusos</div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-2 text-brand-accent">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-display">Responsivo</div>
              <div className="text-xs text-slate-300 mt-1">Adaptado para diferentes telas</div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-2 text-brand-accent">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-display">Suporte</div>
              <div className="text-xs text-slate-300 mt-1">Atendimento próximo e dedicado</div>
            </div>
          </div>
        </div>

        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-base border border-border-light text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-brand-navy" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight mb-3">
              Perguntas Frequentes
            </h2>
            <p className="text-base text-text-body">
              Entenda como funciona o processo de desenvolvimento, prazos e suporte para a sua empresa.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-border-card bg-surface-base overflow-hidden transition-all shadow-xs hover:border-border-subtle"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-navy hover:bg-surface-subtle transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-navy' : 'text-text-muted'}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-text-body leading-relaxed border-t border-border-light/60 bg-surface-subtle/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp Direct Prompt */}
          <div className="mt-10 p-6 rounded-2xl bg-surface-base border border-border-card text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-sm font-bold text-brand-navy">Precisa de uma resposta personalizada para o seu caso?</div>
              <div className="text-xs text-text-muted mt-0.5">Tire suas dúvidas técnicas diretamente com o Alair pelo WhatsApp.</div>
            </div>
            <a 
              href={getWhatsAppLink('Olá, Alair! Tenho uma dúvida sobre o desenvolvimento de sites e gostaria de conversar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-accent" />
              <span>Tirar Dúvida no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
