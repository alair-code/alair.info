import React from 'react';
import { X, CheckCircle2, TrendingUp, MessageSquare, ExternalLink, Code2 } from 'lucide-react';
import { PortfolioProject } from '../types';
import { getWhatsAppLink } from '../utils/helpers';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-dark/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="project-modal-dialog"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-base rounded-2xl shadow-2xl border border-border-card text-left focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-base/90 hover:bg-surface-subtle text-text-body border border-border-light shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Visual Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-navy rounded-t-2xl">
          <img 
            src={project.imageUrl} 
            alt={`Demonstração de ${project.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent flex items-end p-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider mb-2">
                {project.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1">
                Cliente / Segmento: {project.clientName}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Result Highlight Box */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                Impacto no Negócio & Faturamento
              </div>
              <div className="text-sm font-semibold text-emerald-950 mt-0.5">
                {project.results}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
              Sobre a Solução
            </h4>
            <p className="text-base text-text-body leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
              Principais Recursos Implementados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-text-title">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Tecnologias & Arquitetura</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-md bg-surface-subtle border border-border-card text-xs font-semibold text-brand-navy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer / WhatsApp CTA */}
          <div className="pt-4 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-text-muted text-center sm:text-left">
              Deseja um projeto semelhante com alta conversão para o seu negócio?
            </div>

            <a
              id="project-modal-whatsapp-cta"
              href={getWhatsAppLink(`Olá, Alair! Vi o projeto "${project.title}" no seu portfólio e gostaria de um orçamento para uma solução semelhante.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-brand-accent" />
              <span>Solicitar Orçamento Deste Tipo</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
