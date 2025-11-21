
import { ClientConfig } from '../clients/types';
import { ServiceItem } from '../types';
import { graphicServices, webServices } from '../data/services';

const allServices = [...graphicServices, ...webServices];

export function getSelectedServices(config: ClientConfig): ServiceItem[] {
  return config.selectedServices
    .map(serviceId => {
      const service = allServices.find(s => s.id === serviceId);
      if (!service) {
        console.warn(`Service not found: ${serviceId}`);
        return null;
      }

      // Egyedi ár vagy prices objektumból vagy alapértelmezett
      let price: number;
      
      if (config.customPrices?.[serviceId]) {
        // Ha van egyedi ár
        price = config.customPrices[serviceId];
      } else if (service.prices) {
        // Ha van prices objektum, használjuk a pricing version-t
        price = service.prices[config.pricingVersion];
      } else {
        // Fallback az alapértelmezett price-ra
        price = service.price;
      }

      return {
        ...service,
        price,
        selected: true
      };
    })
    .filter((s): s is ServiceItem => s !== null);
}

export function calculateSubtotal(config: ClientConfig): number {
  const services = getSelectedServices(config);
  return services.reduce((sum, s) => sum + s.price, 0);
}

export function calculateDiscount(config: ClientConfig, subtotal: number): number {
  if (!config.discount) return 0;

  if (config.discount.type === 'percentage') {
    return subtotal * (config.discount.value / 100);
  } else {
    return config.discount.value;
  }
}

export function calculateTotal(config: ClientConfig): number {
  const subtotal = calculateSubtotal(config);
  const discount = calculateDiscount(config, subtotal);
  return subtotal - discount;
}

export function formatPrice(price: number): string {
  return price.toLocaleString('hu-HU') + ' Ft';
}
