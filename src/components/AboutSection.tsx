import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  RefreshCw, 
  Sliders, 
  Headphones, 
  Gem, 
  Shield, 
  Smartphone,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPETITIVE_DIFFERENTIALS, BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

const iconMap = {
  clock: Clock,
  'user-check': UserCheck,
  'refresh-cw': RefreshCw,
  sliders: Sliders,
  headphones: Headphones,
  gem: Gem,
  shield: Shield,
  smartphone: Smartphone,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-surface-base border-t border-border-light relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-subtle border border-border-light text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
            <span>Sobre a Alair Informática</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight mb-4">
            Base técnica sólida, visão de negócios e foco em resultados reais para o seu projeto.
          </h2>
          <p className="text-base sm:text-lg text-text-body leading-relaxed">
            Conheça o profissional por trás da marca e os princípios que garantem a segurança e o sucesso do seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-text-body text-base sm:text-lg leading-relaxed">
            <p className="text-brand-navy font-medium text-lg sm:text-xl leading-relaxed">
              Sou formado em <strong className="font-bold text-brand-navy">Técnico em Informática</strong> e atualmente estou concluindo minha formação em <strong className="font-bold text-brand-navy">Análise e Desenvolvimento de Sistemas (ADS)</strong>, unindo conhecimento prático e base técnica sólida para entregar soluções digitais de alta qualidade.
            </p>

            <p>
              Sou o <strong>criador do SST Digital</strong> — sistema web desenvolvido para organizar processos empresariais, com interface clara e funcionalidade real. O projeto está disponível em <a href="https://sstdigital.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 font-medium text-brand-navy hover:text-brand-navy-light">https://sstdigital.vercel.app/</a> para quem deseja conhecer uma solução concreta entregue sob medida.
            </p>

            <p className="text-text-body leading-relaxed">
              O site <strong>alair.info</strong> é uma apresentação profissional do meu trabalho como desenvolvedor de soluções digitais. A proposta é simples: comunicar com clareza o que desenvolvo, como funciona o processo e como entrar em contato — sem exageros, sem números inventados e sem afirmações sem evidência.
            </p>

            <p className="p-4 rounded-xl bg-surface-subtle border-l-4 border-brand-navy text-text-title font-medium italic">
              "A Alair Informática nasceu para oferecer mais do que um site comum: construímos soluções digitais sob medida, com foco em funcionalidade, clareza e experiência do usuário para cada projeto."
            </p>

            {/* Professional portrait */}
            <div className="w-full mb-6 flex flex-col items-center">
              <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-surface-subtle border-4 border-brand-accent/70 shadow-xl overflow-hidden ring-4 ring-brand-accent/10">
                <img
                  src="/assets/alair-foto.webp"
                  alt="Alair Soares — desenvolvedor e criador do SST Digital"
                  className="block w-full h-full object-cover object-[50%_28%] scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[11px] text-text-muted mt-3 text-center">Alair Soares — desenvolvedor e criador do SST Digital</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-border-card bg-surface-subtle flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-navy text-brand-accent shrink-0"><GraduationCap className="w-5 h-5" /></div>
                <div><div className="font-bold text-brand-navy text-sm font-display">Técnico em Informática</div><div className="text-xs text-text-muted mt-0.5">Formação prática sólida em infraestrutura e lógica</div></div>
              </div>
              <div className="p-4 rounded-xl border border-border-card bg-surface-subtle flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-navy text-brand-accent shrink-0"><Award className="w-5 h-5" /></div>
                <div><div className="font-bold text-brand-navy text-sm font-display">Análise e Desenv. de Sistemas</div><div className="text-xs text-text-muted mt-0.5">Graduação em conclusão com foco em engenharia de software</div></div>
              </div>
            </div>

            <div className="pt-2">
              <a id="about-talk-whatsapp-btn" href={getWhatsAppLink('Olá, Alair! Li sobre sua trajetória na Alair Informática e gostaria de conversar sobre um projeto.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light font-bold text-base group underline-offset-4 hover:underline">
                <span>Falar diretamente com o desenvolvedor no WhatsApp</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-surface-navy text-white p-6 sm:p-8 shadow-xl border border-brand-navy-light/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2 font-mono">Compromisso Profissional</div>
                <h3 className="text-2xl font-bold font-display text-white mb-4">Por que empresas confiam na Alair Informática?</h3>
                <p className="text-sm text-text-light mb-6 leading-relaxed">Tratamos cada projeto com a seriedade de um investimento corporativo. O objetivo final é sempre um: gerar retorno e simplificar a vida do seu cliente.</p>
                <ul className="space-y-3.5 mb-8">
                  {['Atendimento individual e consultivo sem intermediários','Etapas do projeto combinadas conforme o escopo','Código limpo, seguro e proprietário para sua empresa','Ajustes e revisões conforme o escopo combinado para cada projeto','Suporte contínuo para manter tudo estável e no ar'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-100"><CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
                <a id="about-cta-quote-btn" href={getWhatsAppLink('Olá, Alair! Gostaria de agendar uma conversa sobre o site da minha empresa.')} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-navy font-bold text-sm transition-all duration-200 shadow-md">
                  <MessageSquare className="w-4 h-4" /><span>Solicite seu Orçamento Gratuito</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-display tracking-tight mb-3">Diferenciais Competitivos</h3>
            <p className="text-sm sm:text-base text-text-body">Práticas concretas que elevam a qualidade do serviço e protegem o investimento do seu negócio.</p>
          </div>
          <div id="competitive-differentials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPETITIVE_DIFFERENTIALS.map((diff) => {
              const IconComp = iconMap[diff.iconName] || CheckCircle2;
              return <div key={diff.id} id={`diff-card-${diff.id}`} className="p-6 rounded-2xl bg-surface-subtle border border-border-card hover:border-border-subtle hover:bg-surface-base transition-all duration-200 hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-surface-base border border-border-light flex items-center justify-center text-brand-navy mb-5 shadow-xs group-hover:bg-brand-navy group-hover:text-brand-accent transition-all duration-300"><IconComp className="w-5 h-5" /></div>
                  <h4 className="text-base font-bold text-brand-navy font-display mb-2 leading-snug">{diff.title}</h4>
                  <p className="text-sm text-text-body leading-relaxed">{diff.description}</p>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
