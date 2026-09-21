import React from 'react';
import { CheckCircle2, ArrowRight, Layers, LayoutGrid, Globe } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="como-trabalho" className="py-24 bg-surface-subtle border-t border-border-light relative overflow-hidden scroll-mt-12">
      <div className="ambient-light absolute top-10 right-1/4 h-72 w-72 bg-brand-accent/5" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14" data-reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-base border border-border-light text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Processo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight mb-4">
            Como trabalho
          </h2>
          <p className="text-base sm:text-lg text-text-body leading-relaxed">
            Um fluxo direto, transparente e sem intermediários. Cada etapa é combinada com você antes de começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-group>
          {[
            { n: '01', title: 'Entendimento', desc: 'Entendo o objetivo, o público e as funcionalidades que realmente importam para o seu projeto.', icon: Globe },
            { n: '02', title: 'Planejamento', desc: 'Defino estrutura, design responsivo e funcionalidades conforme o escopo combinado.', icon: LayoutGrid },
            { n: '03', title: 'Desenvolvimento', desc: 'Construo a solução com código organizado, responsivo e preparado para evolução futura.', icon: Layers },
            { n: '04', title: 'Entrega', desc: 'Faço ajustes finais, preparo a publicação e deixo orientações claras para manutenção.', icon: CheckCircle2 },
          ].map((s) => (
            <div key={s.n} data-reveal className="card-premium card-glow-line group p-7 rounded-2xl bg-surface-base border border-border-card hover:border-brand-navy/30 shadow-xs hover:shadow-e2">
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl font-extrabold text-brand-navy/10 font-display leading-none transition-colors duration-300 group-hover:text-brand-accent/25">{s.n}</span>
                <div className="icon-lift w-10 h-10 rounded-xl bg-surface-subtle border border-border-light text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-accent">
                  <s.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-brand-navy font-display mb-2">{s.title}</h3>
              <p className="text-sm text-text-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-3" data-reveal>
          <a href="#contato" className="btn-premium btn-navy inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-md group">
            <span>Solicitar orçamento</span>
            <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="#servicos" className="btn-premium inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-base hover:bg-surface-subtle text-brand-navy border border-border-card text-sm font-bold shadow-sm">
            <span>Ver serviços</span>
          </a>
        </div>
      </div>
    </section>
  );
};
