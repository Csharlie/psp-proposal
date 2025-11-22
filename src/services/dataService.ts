
import { ServiceItem, QuoteInfo } from '../types';

// Adapter interfész
export interface IDataProvider {
  getServices(): Promise<ServiceItem[]>;
  getQuoteInfo(): Promise<QuoteInfo>;
  getPricingVersion(): Promise<'premium' | 'standard' | 'basic'>;
}

// Jelenlegi helyi implementáció
class LocalDataProvider implements IDataProvider {
  async getServices(): Promise<ServiceItem[]> {
    const { createServices } = await import('../data/services');
    const pricingVersion = await this.getPricingVersion();
    return createServices(pricingVersion);
  }

  async getQuoteInfo(): Promise<QuoteInfo> {
    return {
      id: 'PSP-2024-001',
      issueDate: new Date().toISOString(),
      quoteNumber: 'PSP-2024-001',
      date: new Date().toLocaleDateString('hu-HU'),
      validityDays: 30,
      pricingVersion: await this.getPricingVersion(),
      clientInfo: {
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
      },
      projectInfo: {
        title: '',
        description: '',
        timeline: '',
        deliverables: [],
      },
    };
  }

  async getPricingVersion(): Promise<'premium' | 'standard' | 'basic'> {
    const { getDefaultPricingVersion } = await import('../data/pricing');
    return getDefaultPricingVersion();
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
  static create(): IDataProvider {
    const useWordPress = import.meta.env.VITE_USE_WORDPRESS === 'true';
    
    if (useWordPress) {
      return new WordPressDataProvider();
    }
    
    return new LocalDataProvider();
  }
}

// Export singleton
export const dataService = DataServiceFactory.create();
