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
  subheadline: 'Desenvolvimento web profissional para empresas que buscam credibilidade, boa experiência digital e soluções sob medida.',
  defaultWhatsAppMessage: 'Olá, Alair! Vim pelo site da Alair Informática e gostaria de solicitar um orçamento para meu projeto.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'criacao-sites-profissionais', title: 'Criação de Sites Profissionais', category: 'Presença Digital',
    shortDescription: 'Sites institucionais e páginas empresariais responsivas, estruturadas para apresentar sua empresa com clareza e profissionalismo.',
    fullDescription: 'Desenvolvimento de sites institucionais com arquitetura de conteúdo, design responsivo, integração com canais de atendimento e fundamentos de SEO.',
    deliverables: ['Design alinhado à identidade da empresa', 'Estrutura responsiva para celulares e computadores', 'Fundamentos de SEO', 'Integração com WhatsApp e canais de atendimento', 'Publicação e orientação de manutenção'],
    idealFor: 'Empresas e profissionais que precisam fortalecer sua presença digital.', highlightBadge: 'Mais Solicitado', iconName: 'globe'
  },
  {
    id: 'sistemas-funcionais-empresariais', title: 'Desenvolvimento de Sistemas Funcionais', category: 'Automação & Gestão',
    shortDescription: 'Sistemas sob medida para organizar processos, centralizar informações e apoiar a operação do negócio.',
    fullDescription: 'Soluções personalizadas de acordo com o fluxo de trabalho e os requisitos de cada projeto, incluindo painéis, cadastros, relatórios e integrações.',
    deliverables: ['Levantamento de requisitos', 'Painéis e telas de gestão', 'Controle de acesso conforme o projeto', 'Relatórios e automações', 'Integrações com APIs quando necessárias'],
    idealFor: 'Negócios que precisam substituir processos manuais por ferramentas digitais.', iconName: 'layout-grid'
  },
  {
    id: 'desenvolvimento-frontend', title: 'Desenvolvimento Front-end', category: 'Interface & Experiência',
    shortDescription: 'Interfaces modernas, responsivas e acessíveis para sites e aplicações web.',
    fullDescription: 'Implementação de interfaces com foco em organização visual, responsividade, usabilidade e manutenção do código.',
    deliverables: ['Interfaces responsivas', 'Componentes reutilizáveis', 'Microinterações quando adequadas', 'Boas práticas de acessibilidade', 'Estrutura de código organizada'],
    idealFor: 'Empresas e projetos digitais que precisam de uma interface moderna.', iconName: 'code'
  },
  {
    id: 'desenvolvimento-backend', title: 'Desenvolvimento Back-end', category: 'Dados & Integrações',
    shortDescription: 'APIs, regras de negócio e integração com bancos de dados para aplicações web.',
    fullDescription: 'Desenvolvimento da camada de servidor conforme os requisitos do projeto, com autenticação, persistência de dados e integrações quando necessárias.',
    deliverables: ['APIs e regras de negócio', 'Modelagem de banco de dados', 'Autenticação conforme o projeto', 'Integração com serviços externos', 'Registros e tratamento de erros'],
    idealFor: 'Projetos que precisam de dados persistentes, integrações ou regras de negócio.', iconName: 'server'
  }
];

export const COMPETITIVE_DIFFERENTIALS: DifferentialItem[] = [
  { id: 'prazo', title: 'Cronograma transparente', description: 'As etapas e prazos são combinados de acordo com o escopo do projeto.', iconName: 'clock' },
  { id: 'atendimento', title: 'Atendimento próximo e personalizado', description: 'Comunicação direta durante o planejamento e desenvolvimento.', iconName: 'user-check' },
  { id: 'garantia', title: 'Revisões e ajustes', description: 'O projeto conta com uma etapa de revisão e ajustes conforme o escopo combinado.', iconName: 'refresh-cw' },
  { id: 'solucoes-sob-medida', title: 'Soluções sob medida', description: 'Cada solução é definida a partir das necessidades e objetivos do projeto.', iconName: 'sliders' },
  { id: 'suporte', title: 'Suporte pós-entrega', description: 'Orientação e suporte conforme as condições combinadas para cada projeto.', iconName: 'headphones' },
  { id: 'qualidade', title: 'Cuidado técnico e visual', description: 'Atenção à interface, organização do código, responsividade e experiência de uso.', iconName: 'gem' },
  { id: 'transparencia', title: 'Transparência no processo', description: 'Etapas claras e comunicação sobre o andamento do desenvolvimento.', iconName: 'shield' },
  { id: 'estabilidade', title: 'Responsividade e manutenção', description: 'Projetos estruturados para diferentes tamanhos de tela e evolução futura.', iconName: 'smartphone' }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'sst-digital',
    title: 'SST Digital',
    clientName: 'Projeto próprio',
    category: 'sistemas',
    categoryLabel: 'Sistema Funcional',
    description: 'Sistema web próprio voltado à gestão de processos de Saúde e Segurança do Trabalho, desenvolvido como projeto real de engenharia de software.',
    results: 'Projeto em evolução contínua. Não são apresentados números de resultados comerciais sem métricas públicas verificáveis.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Vercel'],
    imageUrl: '/sst-digital-dashboard.jpg',
    features: ['Aplicação web com módulos de gestão', 'Arquitetura baseada em banco de dados', 'Interface responsiva', 'Desenvolvimento e manutenção contínuos']
  }
];

export const FAQS_DATA: FAQItem[] = [
  { question: 'Quanto tempo leva para criar um site ou sistema?', answer: 'O prazo depende do escopo, quantidade de páginas, funcionalidades e integrações. Depois de entender o projeto, é definido um cronograma compatível com o trabalho necessário.' },
  { question: 'Como funciona a solicitação de orçamento?', answer: 'Você entra em contato pelo WhatsApp ou formulário e apresenta o que precisa. A partir dessas informações, conversamos sobre o escopo e as próximas etapas.' },
  { question: 'O projeto funciona em celulares e computadores?', answer: 'Os projetos são desenvolvidos com abordagem responsiva, buscando uma boa experiência em diferentes tamanhos de tela.' },
  { question: 'Existe suporte após a publicação?', answer: 'Sim. As condições de suporte, manutenção e eventuais ajustes são definidas de acordo com cada projeto.' },
  { question: 'O que diferencia o desenvolvimento sob medida?', answer: 'A solução é planejada de acordo com os requisitos do negócio, permitindo escolher funcionalidades, integrações e estrutura sem depender de um modelo genérico.' }
];
