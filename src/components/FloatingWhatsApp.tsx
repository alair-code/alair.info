import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { getWhatsAppLink } from '../utils/helpers';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'h-7 w-7' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path fill="currentColor" d="M19.11 17.02c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.73.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.36 0 1.39 1.01 2.74 1.15 2.93.14.19 1.98 3.02 4.8 4.24.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z"/>
    <path fill="currentColor" d="M16 4.5a11.48 11.48 0 0 0-9.82 17.43L4.5 27.5l5.73-1.64A11.5 11.5 0 1 0 16 4.5Zm0 20.98c-1.88 0-3.72-.5-5.31-1.46l-.38-.23-3.4.97.99-3.31-.25-.4A9.49 9.49 0 1 1 16 25.48Z"/>
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const handleStartChat = () => {
    const customText = messageInput.trim()
      ? `Olá, Alair! ${messageInput}`
      : BRAND_INFO.defaultWhatsAppMessage;

    window.open(getWhatsAppLink(customText), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessageInput('');
  };

  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {isOpen && (
        <div
          id="whatsapp-chat-popup"
          className="absolute bottom-[calc(100%+14px)] right-0 w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl shadow-slate-950/20"
          role="dialog"
          aria-label="Atendimento pelo WhatsApp"
        >
          <div className="flex items-center justify-between bg-[#075E54] p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#128C7E]">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-sm font-extrabold">WhatsApp</div>
                <div className="text-xs text-white/75">{BRAND_INFO.whatsappDisplay}</div>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Fechar atendimento do WhatsApp" className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-[#ECE5DD] p-4">
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white p-3 text-sm leading-relaxed text-slate-700 shadow-sm">
              Olá! 👋 Como posso ajudar no seu próximo projeto?
              <span className="mt-1 block text-[10px] text-slate-400">agora</span>
            </div>
          </div>

          <div className="flex gap-2 border-t border-slate-100 bg-white p-3">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleStartChat()}
              placeholder="Escreva sua mensagem..."
              aria-label="Mensagem para o WhatsApp"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
            />
            <button type="button" id="whatsapp-popup-send-btn" onClick={handleStartChat} aria-label="Enviar mensagem no WhatsApp" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm transition hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/25">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        id="floating-whatsapp-btn"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="whatsapp-chat-popup"
        aria-label={isOpen ? 'Fechar WhatsApp' : 'Abrir WhatsApp'}
        className="whatsapp-pulse group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_-10px_rgba(37,211,102,.55)] transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/35" aria-hidden="true" />
        {isOpen ? <X className="h-7 w-7" /> : <WhatsAppIcon className="h-8 w-8" />}
        <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-white bg-[#25D366] shadow-sm" aria-hidden="true" />
      </button>
    </div>
  );
};
