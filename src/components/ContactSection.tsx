import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    tipoProjeto: 'Criação de Site Profissional',
    urgencia: 'Próximos 15 a 30 dias',
    mensagem: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore if canvas-confetti has environment issue
    }

    setIsSubmitted(true);

    // Format comprehensive message for Alair's WhatsApp
    const whatsappMessage = `*SOLICITAÇÃO DE ORÇAMENTO - ALAIR INFORMÁTICA*
----------------------------------------
*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa || 'Não informado'}
*Telefone/WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email || 'Não informado'}
*Tipo de Projeto:* ${formData.tipoProjeto}
*Prazo Desejado:* ${formData.urgencia}
*Detalhes/Necessidades:* 
${formData.mensagem || 'Gostaria de agendar uma conversa para entender valores e cronograma.'}
----------------------------------------
_Enviado pelo formulário de contato do site_`;

    const targetUrl = getWhatsAppLink(whatsappMessage);
    
    // Open WhatsApp in new window/tab after 800ms
    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <section 
      id="contato" 
      className="py-24 bg-surface-base border-t border-border-light relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-subtle border border-border-light text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
            <span>Iniciar Projeto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight mb-4">
            Solicite seu orçamento gratuito e dê o próximo passo
          </h2>
          <p className="text-base sm:text-lg text-text-body">
            Preencha os dados abaixo ou inicie a conversa diretamente no WhatsApp. Respondemos rapidamente com uma análise sob medida para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="rounded-2xl bg-surface-subtle border border-border-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-brand-navy font-display">
                Canais de Atendimento Direto
              </h3>
              
              <div className="space-y-4">
                {/* WhatsApp Direct */}
                <a
                  href={getWhatsAppLink('Olá, Alair! Gostaria de tirar dúvidas diretamente pelo WhatsApp.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-base border border-border-light hover:border-emerald-500/50 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-muted">WhatsApp Comercial</div>
                    <div className="text-base font-bold text-brand-navy mt-0.5 font-mono">
                      {BRAND_INFO.whatsappDisplay}
                    </div>
                    <div className="text-xs text-emerald-600 font-medium">Clique para iniciar conversa imediata</div>
                  </div>
                </a>

                {/* Instagram Direct */}
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-base border border-border-light hover:border-pink-500/50 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-600 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-muted">Instagram Oficial</div>
                    <div className="text-base font-bold text-brand-navy mt-0.5">
                      {BRAND_INFO.instagramHandle}
                    </div>
                    <div className="text-xs text-text-muted">Projetos, bastidores e novidades</div>
                  </div>
                </a>

                {/* E-mail */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-base border border-border-light">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-semibold text-text-muted">E-mail Profissional</div>
                    <div className="text-sm font-semibold text-brand-navy mt-0.5 truncate">
                      {BRAND_INFO.email}
                    </div>
                    <div className="text-xs text-text-muted">Envio de briefing e propostas formais</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-base border border-border-light">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-muted">Região de Atuação</div>
                    <div className="text-sm font-semibold text-brand-navy mt-0.5">
                      {BRAND_INFO.location}
                    </div>
                    <div className="text-xs text-text-muted">Reuniões via Google Meet / WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Badge */}
            <div className="p-5 rounded-2xl bg-surface-subtle border border-border-card space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                <ShieldCheck className="w-5 h-5 text-brand-navy" />
                <span>Garantias da Alair Informática</span>
              </div>
              <ul className="text-xs text-text-body space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Orçamento 100% gratuito sem taxa de consultoria inicial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sigilo comercial de todos os dados e ideias compartilhadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proposta técnica clara e sem surpresas no decorrer do projeto</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: High-Converting Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface-base border border-border-card p-6 sm:p-10 shadow-lg relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy font-display">
                    Mensagem Formatada com Sucesso!
                  </h3>
                  <p className="text-sm sm:text-base text-text-body max-w-md mx-auto leading-relaxed">
                    Estamos abrindo o WhatsApp do Alair com todos os seus dados organizados para agilizar seu atendimento. Caso não tenha aberto automaticamente:
                  </p>
                  <div className="pt-4">
                    <a
                      href={getWhatsAppLink(`Olá, Alair! Sou ${formData.nome} da empresa ${formData.empresa} e preenchi o formulário no seu site.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 text-brand-accent" />
                      <span>Abrir WhatsApp Agora</span>
                    </a>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-text-muted hover:text-brand-navy underline cursor-pointer"
                    >
                      Preencher novamente
                    </button>
                  </div>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-border-light pb-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy font-display">
                        Formulário de Orçamento Rápido
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">
                        Envie os detalhes do seu projeto e receba uma estimativa técnica
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-brand-navy bg-surface-subtle px-2.5 py-1 rounded-md border border-border-light">
                      Gratuito
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome Completo */}
                    <div>
                      <label htmlFor="form-nome" className="block text-xs font-bold text-text-title uppercase tracking-wider mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        id="form-nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: João da Silva"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border-card bg-surface-base text-sm text-text-title focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Nome da Empresa */}
                    <div>
                      <label htmlFor="form-empresa" className="block text-xs font-bold text-text-title uppercase tracking-wider mb-1.5">
                        Nome da Empresa
                      </label>
                      <input
                        id="form-empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ex: Silva & Filhos Ltda"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border-card bg-surface-base text-sm text-text-title focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp / Telefone */}
                    <div>
                      <label htmlFor="form-whatsapp" className="block text-xs font-bold text-text-title uppercase tracking-wider mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        id="form-whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Ex: (33) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border-card bg-surface-base text-sm text-text-title focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all"
                      />
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold text-text-title uppercase tracking-wider mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: contato@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border-card bg-surface-base text-sm text-text-title focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Tipo de Projeto */}
                    <div>
                      <label htmlFor="form-tipoProjeto" className="block text-xs font-bold text-text-title uppercase tracking-wider mb-1.5">
                        Tipo de Serviço
                      </label>
                      <select
                        id="form-tipoProjeto"
                        name="tipoProjeto"
                        value={formData.tipoProjeto}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border-card bg-surface-base text-sm text-text-title focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="Criação de Site Profissional">Criação de Site Profissional</option>
                        <option value="Desenvolvimento de Sistema Funcional">Sistema Funcional (PMEs / Grandes Empresas)</option>
                        <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                        <option value="Desenvolvimento Front-end">Desenvolvimento Front-end</option>
                        <option value="Desenvolvimento Back-end / APIs">Desenvolvimento Back-end / APIs</option>
                        <option value="Reformulação de Site Atual">Reformulação de Site Atual</option>
                        <option value="Outro Projeto Digital">Outro Projeto Digital</option>
                      </select>
                    </div>

                    {/* Previsão de Início */}
                    <div>
                      <label htmlFor="form-urgencia" className="block text-xs font-bold text-text-title uppercase tracking-wider mb-1.5">
                        Previsão de Início
                      </label>
                      <select
                        id="form-urgencia"
                        name="urgencia"
                        value={formData.urgencia}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border-card bg-surface-base text-sm text-text-title focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="Imediato (urgente)">Imediato (urgente)</option>
                        <option value="Próximos 15 a 30 dias">Próximos 15 a 30 dias</option>
                        <option value="Próximos 60 dias">Próximos 60 dias</option>
                        <option value="Apenas pesquisando valores">Apenas pesquisando valores</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem / Descrição */}
                  <div>
                    <label htmlFor="form-mensagem" className="block text-xs font-bold text-text-title uppercase tracking-wider mb-1.5">
                      Conte um pouco sobre o que sua empresa precisa
                    </label>
                    <textarea
                      id="form-mensagem"
                      name="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Ex: Quero um site moderno para atrair clientes de consultoria e receber orçamentos direto no WhatsApp..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-card bg-surface-base text-sm text-text-title focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="form-submit-btn"
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                    >
                      <MessageSquare className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
                      <span>Solicitar Orçamento Gratuito via WhatsApp</span>
                      <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[11px] text-center text-text-muted mt-2">
                      🔒 Seus dados estão seguros e não enviamos spam. Resposta em horário comercial.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
