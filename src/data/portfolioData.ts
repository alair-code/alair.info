import { ServiceItem, PortfolioProject, DifferentialItem, FAQItem } from '../types';

export const BRAND_INFO = {
  name: 'Alair Informática',
  tagline: 'Seu site pronto para fazer o seu negócio crescer.',
  developerName: 'Alair',
  whatsappNumber: '5533999477045',
  whatsappDisplay: '(33) 99947-7045',
  instagramHandle: '@alair.info',
  instagramUrl: 'https://instagram.com/alair.info',
  email: 'alairapolinariosoares@gmail.com',
  location: 'Brasil - Atendimento Nacional Remoto',
  headline: 'Transforme visitantes em clientes com um site moderno, rápido e feito sob medida.',
  subheadline: 'Desenvolvimento web profissional de alto padrão para empresas que buscam credibilidade, autoridade e aumento real no faturamento.',
  defaultWhatsAppMessage: 'Olá, Alair! Vim pelo site da Alair Informática e gostaria de solicitar um orçamento gratuito para meu projeto.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'criacao-sites-profissionais',
    title: 'Criação de Sites Profissionais',
    category: 'Presença Digital & Conversão',
    shortDescription: 'Sites institucionais e páginas empresariais elegantes, otimizadas para o Google e preparadas para atrair novos clientes todos os dias.',
    fullDescription: 'Construímos sites institucionais completos que posicionam sua empresa como líder no seu segmento. Cada página é planejada com arquitetura persuasiva, design corporativo exclusivo, velocidade máxima de carregamento e compatibilidade total com smartphones, tablets e computadores.',
    deliverables: [
      'Design corporativo exclusivo e alinhado à sua marca',
      'Otimização completa para SEO (Google e buscadores)',
      'Integração direta com WhatsApp e canais de atendimento',
      'Velocidade ultrarrápida com métricas Core Web Vitals no verde',
      'Painel intuitivo para gerenciamento de conteúdo',
      'Certificado de segurança SSL e conformidade com a LGPD'
    ],
    idealFor: 'Empresas, prestadores de serviços, consultorias e indústrias que querem se posicionar com autoridade e fechar mais negócios.',
    highlightBadge: 'Mais Solicitado',
    iconName: 'globe'
  },
  {
    id: 'sistemas-funcionais-empresariais',
    title: 'Desenvolvimento de Sistemas Funcionais',
    category: 'Automação & Gestão',
    shortDescription: 'Sistemas sob medida para pequenas, médias e grandes empresas automatizarem processos, eliminarem planilhas e escalarem operações.',
    fullDescription: 'Soluções personalizadas desenvolvidas especificamente para o fluxo de trabalho da sua empresa. Criamos painéis administrativos, portais de clientes, módulos de gestão financeira e automações operacionais que reduzem erros manuais e geram economia de tempo e dinheiro.',
    deliverables: [
      'Mapeamento completo dos processos do seu negócio',
      'Painéis de controle (Dashboards) com métricas em tempo real',
      'Controle de acessos com múltiplos níveis de permissão',
      'Automação de relatórios e emissão de documentos',
      'Integrações com gateways de pagamento, ERPs e APIs externas',
      'Armazenamento seguro em nuvem com backup automático'
    ],
    idealFor: 'Pequenas, Médias e Grandes Empresas que necessitam de processos digitais ágeis e controle centralizado.',
    highlightBadge: 'Alto Retorno',
    iconName: 'layout-grid'
  },
  {
    id: 'desenvolvimento-frontend',
    title: 'Desenvolvimento Front-end',
    category: 'Interface & Experiência',
    shortDescription: 'Criação de interfaces visuais modernas, interativas e com excelente usabilidade para proporcionar a melhor experiência ao usuário.',
    fullDescription: 'Especialização em transformar protótipos e conceitos de design em códigos limpos, performáticos e responsivos. Utilizamos as tecnologias mais avançadas do mercado (React, TypeScript, Tailwind) para garantir fluidez impecável e taxa máxima de conversão.',
    deliverables: [
      'Interfaces modernas com padrão estético de grandes empresas',
      'Totalmente adaptado a qualquer tamanho de tela (mobile-first)',
      'Microinterações e animações que encantam o usuário',
      'Código limpo, acessível (WCAG AA) e de fácil manutenção',
      'Carregamento instantâneo com técnicas modernas de bundle e cache'
    ],
    idealFor: 'Empresas e startups que buscam modernizar a experiência de seus clientes ou lançar novas plataformas digitais.',
    iconName: 'code'
  },
  {
    id: 'desenvolvimento-backend',
    title: 'Desenvolvimento Back-end',
    category: 'Segurança & Infraestrutura',
    shortDescription: 'Construção de infraestruturas lógicas robustas, APIs seguras e bancos de dados confiáveis para suportar o crescimento da sua empresa.',
    fullDescription: 'A estrutura invisível que faz seu sistema funcionar com máxima estabilidade e segurança. Desenvolvemos APIs rápidas, rotinas de autenticação rigorosas e integrações confiáveis para processar dados sem lentidão ou falhas.',
    deliverables: [
      'Arquitetura segura com proteção contra vulnerabilidades',
      'Modelagem e otimização de bancos de dados relacionais e em nuvem',
      'Criação e consumo de APIs RESTful estruturadas',
      'Sistemas de autenticação segura e controle de sessões',
      'Monitoramento contínuo de estabilidade e registros de log'
    ],
    idealFor: 'Negócios que operam com dados sensíveis, integrações complexas ou necessitam de alta disponibilidade 24/7.',
    iconName: 'server'
  }
];

export const COMPETITIVE_DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'prazo',
    title: 'Entrega dentro do prazo combinado',
    description: 'Cronograma transparente do início à entrega final. Respeitamos seu tempo e seus planos de lançamento com seriedade absoluta.',
    iconName: 'clock'
  },
  {
    id: 'atendimento',
    title: 'Atendimento próximo e personalizado',
    description: 'Comunicação direta sem intermediários ou burocracias. Você fala diretamente com quem planeja e desenvolve seu projeto.',
    iconName: 'user-check'
  },
  {
    id: 'garantia',
    title: 'Garantia de revisão e ajustes',
    description: 'Período dedicado para refinamento minucioso até que o resultado atenda exatamente aos padrões esperados e às necessidades da sua empresa.',
    iconName: 'refresh-cw'
  },
  {
    id: 'solucoes-sob-medida',
    title: 'Soluções funcionais e sob medida',
    description: 'Não empurramos modelos engessados. Analisamos o modelo de negócio da sua empresa para construir exatamente o que gera resultado.',
    iconName: 'sliders'
  },
  {
    id: 'suporte',
    title: 'Suporte dedicado',
    description: 'Acompanhamento pós-entrega para esclarecer dúvidas, manter o sistema atualizado e garantir que você nunca fique desamparado.',
    iconName: 'headphones'
  },
  {
    id: 'qualidade',
    title: 'Qualidade em cada detalhe',
    description: 'Do alinhamento de cada elemento visual até a segurança e velocidade do código, cada detalhe é tratado com rigor profissional.',
    iconName: 'gem'
  },
  {
    id: 'transparencia',
    title: 'Transparência em todo processo',
    description: 'Etapas claras com relatórios de evolução e demonstrações práticas. Você acompanha cada fase do desenvolvimento.',
    iconName: 'shield'
  },
  {
    id: 'estabilidade',
    title: 'Sites e sistemas estáveis e responsivos',
    description: 'Experiência perfeita em computadores, notebooks e celulares, com alta disponibilidade e sem travamentos.',
    iconName: 'smartphone'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-nexustech-b2b',
    title: 'Portal Corporativo B2B para Empresa de Tecnologia',
    clientName: 'Nexus Soluções Corporativas',
    category: 'sites',
    categoryLabel: 'Site Institucional',
    description: 'Desenvolvimento de portal institucional para indústria e distribuição de equipamentos tecnológicos, com catálogo interativo e módulo de captação de orçamentos empresariais.',
    results: 'Aumento de 142% nos pedidos de cotação via WhatsApp nos primeiros 60 dias após o lançamento.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Otimizado', 'WhatsApp API'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    features: [
      'Catálogo interativo com filtros por categoria e aplicação',
      'Integração direta com o WhatsApp comercial da equipe de vendas',
      'Carregamento em 0.8s e pontuação 98 no Google PageSpeed',
      'Layout responsivo corporativo de alto padrão'
    ]
  },
  {
    id: 'proj-gestaoflex-erp',
    title: 'Sistema de Gestão de Ordens de Serviço e Clientes',
    clientName: 'Apex Engenharia & Manutenção',
    category: 'sistemas',
    categoryLabel: 'Sistema Funcional',
    description: 'Sistema web completo para gestão de contratos, abertura de chamados técnicos, controle financeiro de ordens de serviço e relatórios para a diretoria.',
    results: 'Economia média de 18 horas semanais da equipe administrativa e redução de 90% em extravio de dados.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT Auth'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    features: [
      'Dashboard com indicadores financeiros e operacionais em tempo real',
      'Módulo de emissão de relatórios em PDF com 1 clique',
      'Hierarquia de permissões para técnicos, gerentes e diretoria',
      'Histórico completo de atendimentos e status em kanban'
    ]
  },
  {
    id: 'proj-clinicavita-lp',
    title: 'Landing Page de Alta Conversão para Clínica Médica',
    clientName: 'Instituto Vita Medicina Especializada',
    category: 'landing-pages',
    categoryLabel: 'Landing Page',
    description: 'Página de alta conversão estruturada para campanhas de tráfego pago (Google Ads e Meta Ads), com foco em agendamento de consultas particulares.',
    results: 'Taxa de conversão de visitantes em contatos atingiu 14.8%, reduzindo o custo por lead pela metade.',
    technologies: ['React', 'Tailwind CSS', 'Google Tag Manager', 'Copywriting Persuasivo'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    features: [
      'Carregamento prioritário no celular para tráfego pago',
      'Seção de perguntas frequentes com respostas diretas',
      'Apresentação de corpo clínico com credenciais verificadas',
      'Rastreamento inteligente de conversões e cliques'
    ]
  },
  {
    id: 'proj-urbano-imoveis',
    title: 'Plataforma Imobiliária com Busca Inteligente',
    clientName: 'Urbano Empreendimentos',
    category: 'sites',
    categoryLabel: 'Site Institucional',
    description: 'Portal imobiliário corporativo com vitrine de lançamentos residenciais e comerciais, visualizador de fotos em alta definição e simulação de contato.',
    results: 'Mais de 2.300 acessos qualificados por mês e crescimento expressivo na geração de visitas aos estandes.',
    technologies: ['React', 'TypeScript', 'Filtros Dinâmicos', 'Mapas Interativos'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    features: [
      'Filtro dinâmico por bairro, faixa de valor e tipo de imóvel',
      'Galerias de imagens otimizadas sem perda de qualidade',
      'Formulário inteligente com envio instantâneo ao corretor',
      'Apresentação de plantas baixas e diferenciais dos empreendimentos'
    ]
  },
  {
    id: 'proj-logistica-portal',
    title: 'Painel de Rastreamento e Gestão de Entregas',
    clientName: 'Rota Express Cargas Rápidas',
    category: 'sistemas',
    categoryLabel: 'Sistema Funcional',
    description: 'Painel centralizado onde clientes corporativos consultam status de cargas em tempo real e a equipe interna controla manifestos e despachos.',
    results: 'Redução de 65% no volume de ligações para o SAC através da autoatendimento online.',
    technologies: ['React', 'REST APIs', 'Node.js', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    features: [
      'Consulta pública de entrega através do código de rastreio',
      'Painel interno protegido para operadores da transportadora',
      'Disparo de alertas por WhatsApp sobre mudanças de status',
      'Exportação de planilhas de desempenho mensal'
    ]
  },
  {
    id: 'proj-advocacia-autoridade',
    title: 'Site de Autoridade para Escritório de Advocacia Tributária',
    clientName: 'Carvalho & Associados Advogados',
    category: 'sites',
    categoryLabel: 'Site Institucional',
    description: 'Website de posicionamento executivo com arquitetura sóbria, blog jurídico para captação orgânica no Google e área de contato prioritário.',
    results: 'Posicionamento na primeira página do Google para 12 termos estratégicos da região em 90 dias.',
    technologies: ['React', 'Tailwind CSS', 'Schema.org SEO', 'Acessibilidade AA'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    features: [
      'Identidade visual sóbria, corporativa e de prestígio',
      'Seção de artigos jurídicos com leitura rápida e estruturada',
      'Canal de consulta prévia com triagem automática',
      'Segurança total de dados e conformidade ética'
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Quanto tempo leva para criar e entregar um site profissional?',
    answer: 'O prazo varia de acordo com o escopo: Landing Pages de alta conversão costumam ser entregues entre 5 a 10 dias úteis. Sites institucionais completos entre 10 a 20 dias úteis. Sistemas funcionais sob medida dependem da complexidade dos módulos e são acordados com cronograma detalhado antes do início.'
  },
  {
    question: 'Como funciona a solicitação de orçamento gratuito?',
    answer: 'Basta clicar em qualquer botão do WhatsApp ou preencher o formulário aqui no site. Conversamos sobre os objetivos da sua empresa, o que você precisa alcançar e apresentamos uma proposta sob medida, sem qualquer custo ou compromisso.'
  },
  {
    question: 'O site vai funcionar perfeitamente em celulares e computadores?',
    answer: 'Sim, 100%. Todos os sites e sistemas desenvolvidos pela Alair Informática são construídos com abordagem mobile-first, garantindo carregamento rápido, excelente legibilidade e usabilidade fluida em smartphones, tablets e computadores.'
  },
  {
    question: 'Terei suporte após o site ser publicado?',
    answer: 'Com certeza. Oferecemos garantia de revisão e ajustes, além de suporte dedicado para garantir que tudo funcione com máxima estabilidade e você se sinta completamente seguro com a nova ferramenta da sua empresa.'
  },
  {
    question: 'O que diferencia a Alair Informática de modelos genéricos ou construtores comuns?',
    answer: 'Desenvolvemos códigos limpos, modernos e sob medida para o seu negócio, sem as limitações e lentidões de templates prontos. Isso garante que seu site seja veloz, tenha excelente ranqueamento no Google e passe a autoridade necessária para fechar grandes contratos.'
  }
];
