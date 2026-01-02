
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
    timeline?: string | string[];
    deliverables?: string[];
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
