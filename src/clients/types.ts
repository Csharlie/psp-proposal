export interface ClientConfig {
  // Ügyfél adatok
  client: {
    name: string;
    contact: string;
    email: string;
    phone: string;
    address?: string;
  };
  
  // Projekt információk
  project: {
    title: string;
    description: string;
    features?: string | string[];
    timeline?: string | string[];
    deliverables?: string[];
    gallery?: import('../types').GalleryImage[];
  };
  
  // Ajánlat beállítások
  quote: {
    id: string;
    issueDate: string;
    validityDays: number;
  };
  
  // Kiválasztott szolgáltatások (ID-k)
  selectedServices: string[];
  
  // Árváltozat
  pricingVersion: 'premium' | 'standard' | 'basic';
    // Megjelenítési beállítások
  showYearlyCosts?: boolean;
    // ÁFA kulcs (alapértelmezés: 0.27; 0 esetén nettó = bruttó, ÁFA sorok rejtve)
  vatRate?: number;
    // Fizetési ütemezés (alapértelmezés: 'advance' = 20% előleg + 80% végösszeg)
  paymentSchedule?: import('../utils/paymentSchedule').PaymentSchedule;
    // Egyedi árak (opcionális felülírás)
  customPrices?: Record<string, number>;
  
  // Kedvezmény
  discount?: {
    type: 'percentage' | 'fixed';
    value: number;
    reason?: string;
  };
  
  // Egyedi szövegek
  customTexts?: {
    introduction?: string;
    conclusion?: string;
    paymentTerms?: string;
    additionalTerms?: string;
  };
}
