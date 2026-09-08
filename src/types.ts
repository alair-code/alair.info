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
