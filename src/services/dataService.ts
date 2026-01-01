
import { ServiceItem, QuoteInfo } from '../types';
import { getConfig } from '../clients';

// Adapter interfész
export interface IDataProvider {
  getServices(): Promise<ServiceItem[]>;
  getQuoteInfo(): Promise<QuoteInfo>;
  getPricingVersion(): Promise<'premium' | 'standard' | 'basic'>;
}

// Jelenlegi helyi implementáció
class LocalDataProvider implements IDataProvider {
  private clientKey: string;
  
  constructor(clientKey: string = 'autozeno') {
    this.clientKey = clientKey;
  }

  async getServices(): Promise<ServiceItem[]> {
    const config = getConfig(this.clientKey);
    const { createServices } = await import('../data/services');
    let services = createServices(config.pricingVersion);
    
    // Csak a kiválasztott szolgáltatásokat tartjuk meg, a selectedServices sorrendjében
    services = config.selectedServices
      .map(id => services.find(s => s.id === id))
      .filter((s): s is ServiceItem => s !== undefined);
    
    // Egyedi árak alkalmazása, ha vannak
    if (config.customPrices) {
      services = services.map(service => ({
        ...service,
        price: config.customPrices?.[service.id] ?? service.price,
        selected: true, // AutoZeno esetében minden szolgáltatás kiválasztva
      }));
    }
    
    return services;
  }

  async getQuoteInfo(): Promise<QuoteInfo> {
    const config = getConfig(this.clientKey);
    return {
      id: config.quote.id,
      issueDate: config.quote.issueDate,
      quoteNumber: config.quote.id,
      date: new Date(config.quote.issueDate).toLocaleDateString('hu-HU'),
      validityDays: config.quote.validityDays,
      pricingVersion: config.pricingVersion,
      clientInfo: {
        name: config.client.contact,
        company: config.client.name,
        email: config.client.email,
        phone: config.client.phone,
        address: config.client.address || '',
      },
      projectInfo: {
        title: config.project.title,
        description: config.project.description,
        timeline: config.project.timeline || '',
        deliverables: config.project.deliverables || [],
      },
      customTexts: config.customTexts,
    };
  }

  async getPricingVersion(): Promise<'premium' | 'standard' | 'basic'> {
    const config = getConfig(this.clientKey);
    return config.pricingVersion;
  }
}

// WordPress implementáció (később)
class WordPressDataProvider implements IDataProvider {
  private baseUrl: string;

  constructor(baseUrl: string = import.meta.env.VITE_WP_API_URL || '') {
    this.baseUrl = baseUrl;
  }

  async getServices(): Promise<ServiceItem[]> {
    const response = await fetch(`${this.baseUrl}/wp-json/psp/v1/services`);
    if (!response.ok) throw new Error('Failed to fetch services');
    return response.json();
  }

  async getQuoteInfo(): Promise<QuoteInfo> {
    const response = await fetch(`${this.baseUrl}/wp-json/psp/v1/quote-info`);
    if (!response.ok) throw new Error('Failed to fetch quote info');
    return response.json();
  }

  async getPricingVersion(): Promise<'premium' | 'standard' | 'basic'> {
    const response = await fetch(`${this.baseUrl}/wp-json/psp/v1/pricing-version`);
    if (!response.ok) throw new Error('Failed to fetch pricing version');
    const data = await response.json();
    return data.version;
  }
}

// Factory pattern
export class DataServiceFactory {
  static create(clientKey: string = 'autozeno'): IDataProvider {
    const useWordPress = import.meta.env.VITE_USE_WORDPRESS === 'true';
    
    if (useWordPress) {
      return new WordPressDataProvider();
    }
    
    return new LocalDataProvider(clientKey);
  }
}

// Export singleton
export const dataService = DataServiceFactory.create('autozeno');
