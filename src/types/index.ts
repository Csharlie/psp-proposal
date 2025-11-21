
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
  timeline: string;
  deliverables: string[];
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
  notes?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  selected: boolean;
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
