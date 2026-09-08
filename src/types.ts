export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string;
  highlightBadge?: string;
  iconName: 'code' | 'server' | 'globe' | 'layout-grid' | 'shield-check' | 'zap';
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientName: string;
  category: 'sites' | 'sistemas' | 'landing-pages' | 'ecommerce';
  categoryLabel: string;
  description: string;
  results: string;
  technologies: string[];
  imageUrl: string;
  features: string[];
  liveUrl?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: 'clock' | 'user-check' | 'refresh-cw' | 'sliders' | 'headphones' | 'gem' | 'shield' | 'smartphone';
}

export interface FAQItem {
  question: string;
  answer: string;
}
