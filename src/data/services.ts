
import { PricingVersion } from './pricing';
import { ServiceItem } from '../types';

// Szolgáltatások alapadatai árverziókkal
interface ServiceBase {
  id: string;
  name: string;
  description: string;
  category: string;
  prices: Record<PricingVersion, number>;
  billingType: 'one-time' | 'monthly' | 'yearly';
  billingPeriod?: string;
  selectable?: boolean;
}



// Előre összeállított csomagok
interface ServicePackage {
  name: string;
  description: string;
  services: string[];
  discount: number;
  prices: Record<PricingVersion, number>;
}

export const servicePackages: ServicePackage[] = [
  {
    name: 'BASE / BUSINESS',
    description: '1 oldalas Landing Page / Többoldalas Weboldal',
    services: [
      'ui-ux-design',
      'custom-web-dev',
      'responsive-design',
      'seo-optimization',
      'performance-optimization',
      'google-analytics',
      'ssl-certificate',
      'training',
    ],
    discount: 20,
    prices: {
      premium: 259900,
      standard: 219900,
      basic: 179900,
    },
  },
  {
    name: 'PROFESSIONAL / E-COMMERCE',
    description: 'Bővített Weboldal + Funkciók / Webshop rendszer',
    services: [
      'ui-ux-design',
      'woocommerce-setup',
      'responsive-design',
      'payment-integration',
      'product-management',
      'shipping-integration',
      'seo-optimization',
      'ssl-certificate',
      'training',
      'maintenance-monthly',
    ],
    discount: 25,
    prices: {
      premium: 359900,
      standard: 299900,
      basic: 239900,
    },
  },
  {
    name: 'ENTERPRISE',
    description: 'Nagyvállalati Webes Ökoszisztéma',
    services: [
      'ui-ux-design',
      'woocommerce-setup',
      'responsive-design',
      'payment-integration',
      'product-management',
      'shipping-integration',
      'seo-optimization',
      'ssl-certificate',
      'training',
      'maintenance-monthly',
    ],
    discount: 25,
    prices: {
      premium: 399900,
      standard: 359900,
      basic: 319900,
    },
  },

  // Website csomagok 

  {
    name: 'STARTER - Mikrovállalkozói Landing Page',
    description: 'Ideális: magánszemélyek, kezdő vállalkozások, egy szolgáltatás vagy egyszerű bemutatkozó oldal.',
    services: [
      'ui-ux-design',
      'wordpress-dev',
      'responsive-design',
      'seo-basics',
    ],
    discount: 0,
    prices: {
      premium: 139900,
      standard: 119900,
      basic: 99900,
    },
  },
  {
    name: 'BUSINESS - Többoldalas Weboldal',
    description: 'Ideális: KKV-k, szolgáltatók.',
    services: [
      'ui-ux-design',
      'custom-web-dev',
      'responsive-design',
      'seo-optimization',
      'performance-optimization',
      'google-analytics',
      'ssl-certificate',
      'training',
    ],
    discount: 20,
    prices: {
      premium: 259900,
      standard: 219900,
      basic: 179900,
    },
  },
  {
    name: 'PROFESSIONAL - Bővített Weboldal + Funkciók',
    description: 'Ideális: növekvő KKV-k, cégek, akik automatizáltabb rendszereket akarnak.',
    services: [
      'ui-ux-design',
      'woocommerce-setup',
      'responsive-design',
      'payment-integration',
      'product-management',
      'shipping-integration',
      'seo-optimization',
      'ssl-certificate',
      'training',
      'maintenance-monthly',
    ],
    discount: 25,
    prices: {
      premium: 359900,
      standard: 299900,
      basic: 239900,
    },
  },
  {
    name: 'E-COMMERCE - Webshop rendszer',
    description: 'Ideális: nagyvállalatok, ipari cégek, több országban működő szervezetek.',
    services: [
      'ui-ux-design',
      'woocommerce-setup',
      'responsive-design',
      'payment-integration',
      'product-management',
      'shipping-integration',
      'seo-optimization',
      'ssl-certificate',
      'training',
      'maintenance-monthly',
    ],
    discount: 25,
    prices: {
      premium: 399900,
      standard: 359900,
      basic: 319900,
    },
  },
  {
    name: 'ENTERPRISE - Nagyvállalati Webes Ökoszisztéma',
    description: 'Ideális: nagyvállalatok, ipari cégek, több országban működő szervezetek.',
    services: [
      'ui-ux-design',
      'woocommerce-setup',
      'responsive-design',
      'payment-integration',
      'product-management',
      'shipping-integration',
      'seo-optimization',
      'ssl-certificate',
      'training',
      'maintenance-monthly',
    ],
    discount: 25,
    prices: {
      premium: 679900,
      standard: 599900,
      basic: 519900,
    },
  },

  // Graphic design csomagok

  {
    name: 'GRAFIKAI CSOMAG - Teljes Branding & Marketing Design',
    description: 'Ideális: weboldal mellé, KKV-knak, nagyvállalatoknak, vagy magánszemélyeknek, akik egységes vizuális identitást szeretnének.',
    services: [
      'ui-ux-design',
      'woocommerce-setup',
      'responsive-design',
      'payment-integration',
      'product-management',
      'shipping-integration',
      'seo-optimization',
      'ssl-certificate',
      'training',
      'maintenance-monthly',
    ],
    discount: 25,
    prices: {
      premium: 1312500,
      standard: 975000,
      basic: 712500,
    },
  },
];

const serviceDefinitions: ServiceBase[] = [
  // Webfejlesztési szolgáltatások
  {
    id: 'ui-ux-design',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Weboldal UI/UX tervezés',
    description: 'Felhasználói felület és élmény tervezés, wireframe, mockup',
    prices: {
      premium: 79900,
      standard: 59900,
      basic: 39900,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'wordpress-dev',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Tartalomkezelő rendszer',
    description: 'Teljes körű WordPress weboldal',
    prices: {
      premium: 79900,
      standard: 59900,
      basic: 39900,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'responsive-design',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Reszponzív design',
    description: 'Mobilbarát, minden eszközön tökéletesen működő megjelenés',
    prices: {
      premium: 0,
      standard: 0,
      basic: 0,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'seo-basics',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Alap SEO beállítások',
    description: 'Kulcsszókutatás, on-page SEO, alapvető optimalizálás',
    prices: {
      premium: 0,
      standard: 0,
      basic: 0,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'seo-optimization',
    category: 'Webfejlesztési szolgáltatások',
    name: 'SEO optimalizálás',
    description: 'Keresőoptimalizálás, meta tagek, sitemap, robots.txt',
    prices: {
      premium: 120000,
      standard: 80000,
      basic: 50000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },

  // E-commerce szolgáltatások
  {
    id: 'woocommerce-setup',
    category: 'E-commerce szolgáltatások',
    name: 'WooCommerce webshop',
    description: 'Teljes körű webáruház WordPress WooCommerce-szel',
    prices: {
      premium: 450000,
      standard: 350000,
      basic: 250000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'payment-integration',
    category: 'E-commerce szolgáltatások',
    name: 'Fizetési rendszer integráció',
    description: 'Bankkártya, PayPal, Stripe, SimplePay integráció',
    prices: {
      premium: 150000,
      standard: 100000,
      basic: 70000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'product-management',
    category: 'E-commerce szolgáltatások',
    name: 'Termékkezelő rendszer',
    description: 'Termékek, kategóriák, készletkezelés, variációk',
    prices: {
      premium: 120000,
      standard: 80000,
      basic: 50000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'shipping-integration',
    category: 'E-commerce szolgáltatások',
    name: 'Szállítási módok beállítása',
    description: 'Futárszolgálat integráció, szállítási díjak kalkuláció',
    prices: {
      premium: 80000,
      standard: 60000,
      basic: 40000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },

  // Grafikai tervezés
  {
    id: 'logo-design',
    category: 'Grafikai tervezés',
    name: 'Logó tervezés',
    description: 'Egyedi logó tervezés, 3 koncepció, végtelen módosítás',
    prices: {
      premium: 150000,
      standard: 100000,
      basic: 60000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'brand-identity',
    category: 'Grafikai tervezés',
    name: 'Arculattervezés',
    description: 'Teljes vizuális arculat: logó, színek, tipográfia, stílusútmutató',
    prices: {
      premium: 300000,
      standard: 200000,
      basic: 120000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'social-media-graphics',
    category: 'Grafikai tervezés',
    name: 'Social media grafikák',
    description: 'Facebook, Instagram, LinkedIn posztok és borítóképek',
    prices: {
      premium: 80000,
      standard: 60000,
      basic: 40000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'banner-design',
    category: 'Grafikai tervezés',
    name: 'Banner és hirdetés tervezés',
    description: 'Online hirdetések, Google Ads, Facebook Ads grafikák',
    prices: {
      premium: 60000,
      standard: 45000,
      basic: 30000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },

  // Kiegészítő szolgáltatások
  {
    id: 'content-creation',
    category: 'Kiegészítő szolgáltatások',
    name: 'Tartalomkészítés',
    description: 'Szövegírás, képszerkesztés, tartalomfeltöltés',
    prices: {
      premium: 100000,
      standard: 70000,
      basic: 45000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'google-analytics',
    category: 'Kiegészítő szolgáltatások',
    name: 'Google Analytics beállítás',
    description: 'Analitika telepítés, célok, konverziók követése',
    prices: {
      premium: 50000,
      standard: 35000,
      basic: 25000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'ssl-certificate',
    category: 'Kiegészítő szolgáltatások',
    name: 'SSL tanúsítvány telepítés',
    description: 'HTTPS beállítás, biztonságos kapcsolat',
    prices: {
      premium: 30000,
      standard: 25000,
      basic: 20000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'backup-setup',
    category: 'Kiegészítő szolgáltatások',
    name: 'Automatikus mentés beállítása',
    description: 'Napi automatikus biztonsági mentés',
    prices: {
      premium: 40000,
      standard: 30000,
      basic: 20000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'training',
    category: 'Kiegészítő szolgáltatások',
    name: 'Oktatás és átadás',
    description: 'Személyes oktatás a weboldal kezeléséhez',
    prices: {
      premium: 80000,
      standard: 60000,
      basic: 40000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'maintenance-monthly',
    category: 'Karbantartási szolgáltatások',
    name: 'Havi karbantartás (opcionális)',
    description: 'Frissítések, biztonsági mentések, kisebb módosítások',
    prices: {
      premium: 180000,
      standard: 120000,
      basic: 72000,
    },
    billingType: 'monthly',
    billingPeriod: 'havi',
  },
  {
    id: 'performance-optimization',
    category: 'Kiegészítő szolgáltatások',
    name: 'Teljesítmény optimalizálás',
    description: 'Gyors betöltés, képoptimalizálás, kód minifikálás',
    prices: {
      premium: 100000,
      standard: 70000,
      basic: 45000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },

  // Bellator specifikus szolgáltatások
  {
    id: 'landing-page-bellator',
    category: 'Webfejlesztés',
    name: 'Landing Page',
    description: 'Egyoldalas, konverzió-központú bemutatkozó oldal mobilra optimalizálva',
    prices: {
      premium: 219000,
      standard: 179000,
      basic: 139000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
    selectable: false,
  },

  // Benettcar specifikus szolgáltatások
  {
    id: 'landing-page-benettcar',
    category: 'Webfejlesztés',
    name: 'Landing Page',
    description: 'Egyoldalas, konverzió-központú bemutatkozó oldal mobilra optimalizálva',
    prices: {
      premium: 219000,
      standard: 179000,
      basic: 159000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
    selectable: false,
  },
  {
    id: 'online-booking-benettcar',
    category: 'Webfejlesztés',
    name: 'Online Időpontfoglaló Rendszer',
    description: 'Központi admin felület foglalások kezelésére, automatizált online foglalási rendszer, email értesítések',
    prices: {
      premium: 319000,
      standard: 279000,
      basic: 259000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
    selectable: true,
  },

  // AutoZeno specifikus szolgáltatások
  {
    id: 'landing-page',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Landing Page',
    description: 'Egyoldalas, konverzió-központú bemutatkozó oldal mobilra optimalizálva',
    prices: {
      premium: 220000,
      standard: 180000,
      basic: 140000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
    selectable: false,
  },
  {
    id: 'car-catalog-system',
    category: 'E-commerce szolgáltatások',
    name: 'Autókatalógus Rendszer',
    description: 'Járműadatbázis rendezési lehetőségekkel és részletes járműadatokkal',
    prices: {
      premium: 400000,
      standard: 320000,
      basic: 250000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'domain-hosting',
    category: 'Domain & Tárhely szolgáltatások',
    name: 'Domain & Tárhely Beállítás (egyszeri)',
    description: 'Domain és tárhely technikai beállítása, SSL tanúsítvány aktiválása',
    prices: {
      premium: 29900,
      standard: 19900,
      basic: 14900,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'custom-web-dev',
    category: 'Kiegészítő szolgáltatások',
    name: 'Egyedi webfejlesztés (React/Next.js)',
    description: 'Modern, egyedi weboldal React vagy Next.js technológiával',
    prices: {
      premium: 500000,
      standard: 400000,
      basic: 300000,
    },
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'domain-hosting-monthly',
    category: 'Domain & Tárhely szolgáltatások',
    name: 'Domain & Tárhely (havi díj)',
    description: 'Prémium tárhely (1 GB), aktív SSL tanúsítvány és céges email címek',
    prices: {
      premium: 5900,
      standard: 4900,
      basic: 3900,
    },
    billingType: 'monthly',
    billingPeriod: 'havi',
  },
  {
    id: 'domain-hosting-yearly',
    category: 'Domain & Tárhely szolgáltatások',
    name: 'Domain & Tárhely (éves díj)',
    description: 'Prémium tárhely (1 GB), aktív SSL tanúsítvány és céges email címek',
    prices: {
      premium: 59000,
      standard: 49000,
      basic: 39000,
    },
    billingType: 'yearly',
    billingPeriod: 'éves',
  },
];

// Szolgáltatások létrehozása a kiválasztott árverzioval
export function createServices(pricingVersion: PricingVersion): ServiceItem[] {
  return serviceDefinitions.map(service => ({
    ...service,
    price: service.prices[pricingVersion],
    selected: service.selectable === false,
    billingType: service.billingType,
    billingPeriod: service.billingPeriod,
    selectable: service.selectable !== false,
  }));
}

// Ár formázás
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Csomag teljes árának kiszámítása
export function calculatePackagePrice(
  serviceIds: string[],
  pricingVersion: PricingVersion
): number {
  return serviceDefinitions
    .filter(service => serviceIds.includes(service.id))
    .reduce((sum, service) => sum + service.prices[pricingVersion], 0);
}

// Szolgáltatás ár lekérése ID alapján
export function getServicePrice(serviceId: string, version: PricingVersion): number {
  const service = serviceDefinitions.find(s => s.id === serviceId);
  return service?.prices[version] || 0;
}

// Teljes ár számítása kiválasztott szolgáltatásokra
export function getTotalPrice(serviceIds: string[], version: PricingVersion): number {
  return serviceIds.reduce((total, id) => {
    return total + getServicePrice(id, version);
  }, 0);
}

export interface Service {
  id: string;
  name: string;
  description: string;
  prices: Record<PricingVersion, number>;
  unit?: string;
}

export const services: Service[] = [
  {
    id: 'web-design',
    name: 'Weboldal tervezés',
    description: 'Egyedi, modern design készítése',
    prices: {
      premium: 500000,
      standard: 400000,
      basic: 300000,
    },
    unit: 'Ft',
  },
  {
    id: 'web-development',
    name: 'Weboldal fejlesztés',
    description: 'Reszponzív, SEO-optimalizált weboldal',
    prices: {
      premium: 800000,
      standard: 600000,
      basic: 450000,
    },
    unit: 'Ft',
  },
  {
    id: 'cms-integration',
    name: 'CMS integráció',
    description: 'Tartalomkezelő rendszer beépítése',
    prices: {
      premium: 300000,
      standard: 250000,
      basic: 200000,
    },
    unit: 'Ft',
  },
  {
    id: 'hosting-setup',
    name: 'Hosting és domain beállítás',
    description: 'Szerver konfiguráció és domain regisztráció',
    prices: {
      premium: 100000,
      standard: 80000,
      basic: 60000,
    },
    unit: 'Ft',
  },
  {
    id: 'maintenance',
    name: 'Karbantartás (havi)',
    description: 'Rendszeres frissítések és támogatás',
    prices: {
      premium: 50000,
      standard: 35000,
      basic: 25000,
    },
    unit: 'Ft/hó',
  },
];

export const graphicServices: ServiceItem[] = [
  {
    id: 'logo-design',
    category: 'Grafikai szolgáltatások',
    name: 'Logótervezés',
    description: 'Egyedi logó koncepcióktól a végső kivitelezésig, több verzióval',
    price: 150000,
    selected: false,
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'brand-identity',
    category: 'Grafikai szolgáltatások',
    name: 'Teljes arculat kialakítása',
    description: 'Logó, színvilág, tipográfia, arculati kézikönyv',
    price: 450000,
    selected: false,
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'print-materials',
    category: 'Grafikai szolgáltatások',
    name: 'Névjegykártya és nyomdai grafika',
    description: 'Névjegy, levélpapír, mappák, szórólapok tervezése',
    price: 80000,
    selected: false,
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'social-media',
    category: 'Grafikai szolgáltatások',
    name: 'Social media vizuálok',
    description: 'Facebook, Instagram, LinkedIn posztok és borítóképek',
    price: 60000,
    selected: false,
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'creative-design',
    category: 'Grafikai szolgáltatások',
    name: 'Kreatív design anyagok',
    description: 'Prezentációk, infografikák, marketing anyagok',
    price: 120000,
    selected: false,
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  },
  {
    id: 'workshop-templates',
    category: 'Grafikai szolgáltatások',
    name: 'Workshop vizuális sablonok',
    description: 'Egyedi PowerPoint és Keynote sablonok',
    price: 90000,
    selected: false,
    billingType: 'one-time',
    billingPeriod: 'egyszeri',
  }
];

export const webServices: ServiceItem[] = createServices('standard').filter(
  s => s.category === 'Webfejlesztési szolgáltatások'
);

export const graphicServicesLegacy: ServiceItem[] = createServices('standard').filter(
  s => s.category === 'Grafikai tervezés'
);

// Export a szolgáltatás definíciókat
export { serviceDefinitions };
