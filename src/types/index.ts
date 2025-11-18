export interface ClientInfo {
  name: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
}

export interface QuoteInfo {
  id: string;
  issueDate: string;
  validityDays: number;
  clientInfo: ClientInfo;
}

export interface ServiceItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  selected: boolean;
}

export interface PaymentTerms {
  upfront: number;
  onDelivery: number;
}

export interface ProjectPhase {
  name: string;
  duration: string;
  deliverables: string[];
}
