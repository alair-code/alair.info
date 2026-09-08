import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BRAND_INFO } from '../data/portfolioData';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || BRAND_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
