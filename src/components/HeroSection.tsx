import React from 'react';
import {
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Smartphone,
  Code2,
  Globe2,
  Layers3,
  ExternalLink,
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/helpers';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-surface-subtle via-surface-base to-surface-subtle pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden="true" />
      <div className="absolute -top-32 right-[-10rem] h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-[-12rem] h-80 w-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-base border border-border-light shadow-sm text-xs font-semibold text-text-title mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Projetos digitais sob medida</span>
              <span className="hidden sm:inline text-text-muted">• Atendimento Brasil</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-brand-navy tracking-tight leading-[1.08] font-display mb-6">
              Tecnologia que transforma sua presença digital em{' '}
              <span className="relative inline-block text-brand-navy">seu negócio.<svg className="absolute left-0 -bottom-2 w-full h-3 text-brand-accent/80 -z-10" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 9C60 2.5 180 2.5 247 8.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg></span>
            </h1>

            <p className="text-lg sm:text-xl text-text-body leading-relaxed max-w-2xl mb-8">
              <strong>sites profissionais, landing pages e sistemas web sob medida</strong> para empresas que precisam transmitir confiança, organizar processos digitais e conquistar oportunidades com clareza.
            </p>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-9">
              <a href={getWhatsAppLink('Olá, Alair! Vim pelo site da Alair Informática e gostaria de conversar sobre um projeto.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-brand-accent/40 group">
                <MessageSquare className="w-5 h-5 text-brand-accent" />
                <span>Falar comigo</span>
                <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface-base hover:bg-surface-subtle text-brand-navy border border-border-card text-base font-semibold transition-all duration-200 shadow-sm hover:shadow">
                <span>Conhecer soluções</span><ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
              <div className="flex items-center gap-2.5 rounded-xl border border-border-light bg-surface-base/80 px-3.5 py-3 text-xs sm:text-sm font-medium text-text-body shadow-xs"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Projeto pensado para seu negócio</span></div>
              <div className="flex items-center gap-2.5 rounded-xl border border-border-light bg-surface-base/80 px-3.5 py-3 text-xs sm:text-sm font-medium text-text-body shadow-xs"><Smartphone className="w-4 h-4 text-brand-blue shrink-0" /><span>Experiência responsiva</span></div>
              <div className="flex items-center gap-2.5 rounded-xl border border-border-light bg-surface-base/80 px-3.5 py-3 text-xs sm:text-sm font-medium text-text-body shadow-xs"><ShieldCheck className="w-4 h-4 text-brand-navy shrink-0" /><span>Suporte direto</span></div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-navy/5 blur-xl" aria-hidden="true" />
              <div className="relative rounded-3xl bg-surface-navy p-3 sm:p-4 shadow-2xl border border-brand-navy-light/40">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-navy">
                  <div className="flex items-center gap-2" aria-hidden="true"><span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" /><span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" /></div>
                  <div className="px-3 py-1 rounded-md bg-brand-navy-dark text-[10px] sm:text-[11px] font-mono text-text-inverted-muted border border-white/5">alair.info</div>
                  <div className="text-[10px] sm:text-[11px] text-text-light font-medium">Digital</div>
                </div>

                <div className="rounded-2xl overflow-hidden bg-surface-base border border-border-light p-4 sm:p-5 space-y-4">
                  <div className="flex items-start justify-between gap-4"><div><div className="text-[10px] uppercase tracking-wider font-bold text-text-muted mb-1">Soluções digitais</div><div className="text-xl sm:text-2xl font-extrabold text-brand-navy font-display">Feitas para crescer</div></div><div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-accent flex items-center justify-center shrink-0"><Code2 className="w-5 h-5" /></div></div>
                  <div className="grid grid-cols-3 gap-2.5"><div className="rounded-xl bg-surface-subtle border border-border-light p-3"><Globe2 className="w-4 h-4 text-brand-navy mb-2" /><div className="text-[11px] font-bold text-brand-navy">Sites</div><div className="text-[10px] text-text-muted mt-0.5">Presença</div></div><div className="rounded-xl bg-surface-subtle border border-border-light p-3"><Layers3 className="w-4 h-4 text-brand-navy mb-2" /><div className="text-[11px] font-bold text-brand-navy">Sistemas</div><div className="text-[10px] text-text-muted mt-0.5">Processos</div></div><div className="rounded-xl bg-surface-subtle border border-border-light p-3"><Zap className="w-4 h-4 text-brand-navy mb-2" /><div className="text-[11px] font-bold text-brand-navy">Landing</div><div className="text-[10px] text-text-muted mt-0.5">Conversão</div></div></div>
                  <div className="rounded-xl bg-brand-navy-dark p-4 text-white"><div className="flex items-center justify-between mb-3"><span className="text-xs font-semibold text-slate-200">Seu projeto</span><span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">Sob medida</span></div><div className="space-y-2"><div className="h-2 rounded-full bg-white/10 w-full" /><div className="h-2 rounded-full bg-white/10 w-4/5" /><div className="h-2 rounded-full bg-white/10 w-3/5" /></div><div className="mt-4 flex items-center gap-2 text-[11px] text-slate-200"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /><span>Estratégia + design + desenvolvimento</span></div></div>
                  <a href="https://sstdigital.vercel.app/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl border border-brand-accent/30 bg-brand-accent/10 px-4 py-3 hover:bg-brand-accent/15 transition-colors" aria-label="Conhecer o SST Digital, sistema criado por Alair">
                    <div><div className="text-[10px] uppercase tracking-wider font-bold text-brand-accent">Projeto em destaque</div><div className="text-sm font-bold text-brand-navy mt-0.5">SST Digital</div><div className="text-[11px] text-text-muted mt-0.5">Sistema web para gestão de processos — criado por Alair</div></div><ExternalLink className="w-4 h-4 text-brand-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-surface-base border border-border-card rounded-2xl p-3.5 shadow-xl flex items-center gap-3 max-w-[250px]"><div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0"><ShieldCheck className="w-5 h-5" /></div><div><div className="text-xs font-bold text-brand-navy">Atendimento direto</div><div className="text-[11px] text-text-muted mt-0.5">Do primeiro contato à entrega</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
