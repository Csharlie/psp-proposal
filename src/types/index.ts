
import { ReactNode } from 'react';
import { PricingVersion } from '../data/pricing';

export interface ClientInfo {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface ProjectInfo {
  title: string;
  description: string;
  features?: string | string[];
  timeline: string | string[];
  deliverables: string[];
  gallery?: GalleryImage[];
}

export interface GalleryImage {
  url: string;
  title?: string;
  description?: string;
}

export interface QuoteInfo {
  id?: ReactNode;
  issueDate?: string | number | Date;
  quoteNumber: string;
  date: string;
  validityDays: number;
  clientInfo: ClientInfo;
  projectInfo: ProjectInfo;
  pricingVersion: PricingVersion;
  showYearlyCosts?: boolean;
  notes?: string;
  customTexts?: {
    introduction?: string;
    conclusion?: string;
    paymentTerms?: string;
    additionalTerms?: string;
  };
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  selected: boolean;
  billingType: 'one-time' | 'monthly' | 'yearly';
  billingPeriod?: string; // "egyszeri", "havi", "éves"
  selectable?: boolean;
}

export interface QuoteData {
  quoteInfo: QuoteInfo;
  services: ServiceItem[];
  totalPrice: number;
  vatAmount: number;
  totalWithVat: number;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  services: string[];
  discount: number;
}
