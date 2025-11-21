
import { ClientConfig } from '../types';

export const startupXyzConfig: ClientConfig = {
  client: {
    name: "Startup XYZ Kft.",
    contact: "Kovács Anna",
    email: "anna@startupxyz.hu",
    phone: "+36 20 987 6543",
    address: "1111 Budapest, Startup utca 1."
  },
  
  project: {
    title: "E-commerce webshop fejlesztés",
    description: "Teljes körű webáruház megoldás termékkatalógussal, kosár funkcióval és online fizetési lehetőséggel.",
    timeline: "10-12 hét",
    deliverables: [
      "Egyedi webshop design",
      "WooCommerce webáruház",
      "Termékkategóriák és szűrők",
      "Online fizetési integráció",
      "Készletkezelés",
      "Számlázási integráció",
      "Admin képzés",
      "2 hónap support"
    ]
  },
  
  quote: {
    id: 'PSP-2025-002',
    issueDate: new Date().toISOString(),
    validityDays: 30
  },
  
  selectedServices: [
    'ux-ui-design',
    'wordpress-dev',
    'webshop',
    'custom-modules',
    'advanced-seo',
    'performance-optimization',
    'security-package'
  ],
  
  pricingVersion: 'premium',
  
  discount: {
    type: 'percentage',
    value: 10,
    reason: 'Startup kedvezmény - első 10 ügyfél között'
  },
  
  customTexts: {
    introduction: "Örömmel készítettük el ajánlatunkat az e-commerce projektjére. Tapasztalatunk alapján egy jól működő webshop jelentős növekedést hozhat az online értékesítésben.",
    conclusion: "Bízunk benne, hogy ajánlatunk megfelel elvárásaiknak. Kérdés esetén állunk rendelkezésére!"
  }
};
