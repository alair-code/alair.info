import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  ExternalLink, 
  Check, 
  Eye, 
  MessageSquare 
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { getWhatsAppLink } from '../utils/helpers';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filters = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'sites', label: 'Sites Institucionais' },
    { id: 'sistemas', label: 'Sistemas Funcionais' },
    { id: 'landing-pages', label: 'Landing Pages' },
  ];

  const filteredProjects = activeFilter === 'todos'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section 
      id="projetos" 
      className="py-24 bg-surface-base border-t border-border-light relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-subtle border border-border-light text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
              <span>Portfólio & Casos de Sucesso</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
              Projetos construídos para gerar autoridade e vendas
            </h2>
          </div>
          <p className="text-base text-text-body max-w-md">
            Veja exemplos práticos de como desenvolvemos ferramentas digitais rápidas, modernas e orientadas a resultados para empresas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div 
          id="portfolio-filter-tabs"
          className="flex flex-wrap gap-2 mb-10 border-b border-border-light pb-4"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              type="button"
              id={`filter-btn-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-surface-subtle text-text-body hover:bg-surface-muted hover:text-brand-navy'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          id="portfolio-projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-2xl overflow-hidden border border-border-card bg-surface-base hover:border-border-subtle hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-surface-subtle cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-navy font-bold text-xs shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>Ver detalhes do projeto</span>
                  </span>
                </div>

                <span className="absolute top-3.5 left-3.5 text-[11px] font-bold px-3 py-1 rounded-full bg-surface-base/95 backdrop-blur-sm text-brand-navy shadow-sm border border-border-light">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-text-muted mb-1">
                    {project.clientName}
                  </div>
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-brand-navy font-display mb-3 leading-snug group-hover:text-brand-navy-light cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Impact Metric Banner */}
                  <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 mb-4 flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-emerald-900 leading-snug">
                      {project.results}
                    </span>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-subtle text-text-muted border border-border-light"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-surface-subtle text-text-muted">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-border-light flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-brand-navy hover:text-brand-navy-light flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ver especificações</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Olá, Alair! Gostei do projeto "${project.title}" e gostaria de solicitar um orçamento para o meu negócio.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-subtle hover:bg-brand-navy text-brand-navy hover:text-white transition-colors"
                    aria-label={`Solicitar orçamento similar a ${project.title}`}
                    title="Pedir orçamento no WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout under Portfolio */}
        <div className="mt-16 p-8 rounded-2xl bg-surface-subtle border border-border-card text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-brand-navy font-display">
              Tem uma ideia ou demanda específica em mente?
            </h4>
            <p className="text-sm text-text-body mt-1">
              Desenvolvemos soluções personalizadas que atendem exatamente ao fluxo de trabalho da sua empresa.
            </p>
          </div>
          <a
            id="portfolio-custom-project-btn"
            href={getWhatsAppLink('Olá, Alair! Gostaria de consultar a viabilidade técnica e orçamento para um projeto customizado para a minha empresa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4 text-brand-accent" />
            <span>Consultar Projeto</span>
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
