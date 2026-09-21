import React from 'react';
import { ArrowUpRight, ExternalLink, Layers3, Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => (
  <section id="portfolio" className="relative overflow-hidden border-t border-border-light bg-brand-navy py-24 text-white scroll-mt-12">
    <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(0,212,178,.32), transparent 30%), radial-gradient(circle at 85% 70%, rgba(0,102,204,.28), transparent 30%)' }} aria-hidden="true" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-accent">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Projeto em destaque
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Meu trabalho precisa falar por mim.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Uma solução real apresentada no próprio portfólio para demonstrar interface, organização e desenvolvimento sob medida.
        </p>
      </div>

      <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-sm">
        <div className="grid lg:grid-cols-12">
          <div className="relative min-h-[300px] overflow-hidden bg-slate-950 p-6 sm:p-8 lg:col-span-7 lg:min-h-[440px]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" aria-hidden="true" />
            <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-inner sm:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div>
                <span className="text-[10px] font-medium tracking-[0.18em] text-slate-400">SST DIGITAL</span>
              </div>
              <div className="grid flex-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                  <Layers3 className="mb-5 h-6 w-6 text-brand-accent" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Projeto próprio</p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white">SST Digital</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">Sistema web criado para organizar processos e apresentar uma experiência digital funcional.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Foco</p>
                  <div className="mt-4 space-y-3"><div className="h-2 rounded-full bg-white/10" /><div className="h-2 w-4/5 rounded-full bg-brand-accent/40" /><div className="h-2 w-3/5 rounded-full bg-white/10" /></div>
                  <p className="mt-5 text-xs leading-relaxed text-slate-400">Interface, processos e desenvolvimento sob medida.</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-300"><span className="h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" /> Disponível para conhecer</div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-accent">Caso real</p>
            <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">Uma solução concreta, não apenas uma promessa.</h3>
            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">O SST Digital é um dos projetos apresentados no portfólio e permite conhecer uma aplicação web desenvolvida por mim.</p>
            <a href="https://sstdigital.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3.5 text-sm font-extrabold text-brand-navy shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover focus:outline-none focus:ring-4 focus:ring-brand-accent/30">
              Conhecer o SST Digital <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contato" className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
              Quero um projeto assim <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
);
