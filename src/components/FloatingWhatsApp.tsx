import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasPrompted, setHasPrompted] = useState<boolean>(false);

  useEffect(() => {
    // Show polite notification popup after 4 seconds if user hasn't opened it
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const [messageInput, setMessageInput] = useState('');

  const handleStartChat = () => {
    const customText = messageInput.trim() 
      ? `Olá, Alair! ${messageInput}`
      : 'Olá, Alair! Vim pelo site da Alair Informática e gostaria de solicitar um orçamento gratuito para meu projeto.';
    window.open(getWhatsAppLink(customText), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div 
      id="floating-whatsapp-widget"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Interactive Tooltip Card / Chat Bubble */}
      {(isOpen || hasPrompted) && (
        <div 
          id="whatsapp-chat-popup"
          className={`mb-3 w-80 sm:w-88 rounded-2xl bg-surface-base border border-border-card shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
            isOpen ? 'scale-100 opacity-100' : hasPrompted && !isOpen ? 'scale-95 opacity-90 hidden sm:block' : 'scale-75 opacity-0 pointer-events-none'
          }`}
        >
          {/* Header */}
          <div className="bg-brand-navy p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-navy-light border-2 border-brand-accent flex items-center justify-center font-bold text-sm text-white">
                  AI
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-navy" />
              </div>
              <div>
                <div className="text-sm font-bold font-display leading-tight flex items-center gap-1.5">
                  <span>Alair Informática</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-accent/20 text-brand-accent font-mono font-normal">
                    Online
                  </span>
                </div>
                <div className="text-xs text-text-light mt-0.5">
                  Resposta rápida no WhatsApp
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setHasPrompted(false);
              }}
              aria-label="Fechar janela do WhatsApp"
              className="p-1.5 text-text-light hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Body */}
          <div className="p-4 bg-surface-subtle text-xs space-y-3">
            <div className="p-3 rounded-2xl rounded-tl-none bg-surface-base border border-border-light text-text-title shadow-xs leading-relaxed">
              Olá! Tudo bem? 👋 
              <br /><br />
              Como posso ajudar sua empresa a se destacar e <strong className="font-semibold text-brand-navy">vender mais pela internet</strong> hoje?
            </div>

            <div className="text-[10px] text-text-muted text-right">
              Atendimento pelo número oficial: (33) 99947-7045
            </div>
          </div>

          {/* Quick Input & Trigger */}
          <div className="p-3 bg-surface-base border-t border-border-light flex items-center gap-2">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleStartChat()}
              placeholder="Digite sua dúvida ou projeto..."
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-border-card bg-surface-subtle text-text-title focus:outline-none focus:ring-1 focus:ring-brand-navy"
            />
            <button
              type="button"
              id="whatsapp-popup-send-btn"
              onClick={handleStartChat}
              aria-label="Enviar mensagem no WhatsApp"
              className="p-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-brand-accent shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Primary Floating Circle Button */}
      <button
        id="floating-whatsapp-btn"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setHasPrompted(false);
        }}
        aria-label="Abrir atendimento no WhatsApp da Alair Informática"
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />

        <div className="relative">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageSquare className="w-7 h-7 text-white fill-white/20" />
          )}
        </div>

        {/* Status indicator dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-surface-base" />
      </button>
    </div>
  );
};
