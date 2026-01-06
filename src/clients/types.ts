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
    features?: string;
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
