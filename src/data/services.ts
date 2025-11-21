
import { PricingVersion } from './pricing';
import { ServiceItem } from '../types';

// Szolgáltatások alapadatai árverziókkal
interface ServiceBase {
  id: string;
  name: string;
  description: string;
  category: string;
  prices: Record<PricingVersion, number>;
}

const serviceDefinitions: ServiceBase[] = [
  // Webfejlesztési szolgáltatások
  {
    id: 'ux-ui-design',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Weboldal UX/UI tervezés',
    description: 'Felhasználói élmény és felület tervezés, wireframe, mockup',
    prices: {
      premium: 200000,
      standard: 150000,
      basic: 100000,
    },
  },
  {
    id: 'wordpress-dev',
    category: 'Webfejlesztési szolgáltatások',
    name: 'WordPress és Elementor fejlesztés',
    description: 'Modern, reszponzív WordPress weboldal Elementor builderrel',
    prices: {
      premium: 350000,
      standard: 280000,
      basic: 200000,
    },
  },
  {
    id: 'design-dev-package',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Design + fejlesztés egyben',
    description: 'Teljes körű megoldás a tervezéstől az éles indításig',
    prices: {
      premium: 550000,
      standard: 420000,
      basic: 300000,
    },
  },
  {
    id: 'custom-modules',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Egyedi modulok és logika',
    description: 'Testreszabott funkciók, API integrációk, automatizálások',
    prices: {
      premium: 180000,
      standard: 140000,
      basic: 100000,
    },
  },
  {
    id: 'webshop',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Webshop funkciók',
    description: 'WooCommerce webáruház beállítás és testreszabás',
    prices: {
      premium: 280000,
      standard: 220000,
      basic: 160000,
    },
  },
  {
    id: 'responsive-optimization',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Reszponzív optimalizálás',
    description: 'Mobil és tablet nézetek finomhangolása',
    prices: {
      premium: 80000,
      standard: 60000,
      basic: 40000,
    },
  },
  {
    id: 'content-upload',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Tartalomfeltöltés',
    description: 'Szövegek, képek, videók feltöltése és formázása',
    prices: {
      premium: 60000,
      standard: 45000,
      basic: 30000,
    },
  },
  {
    id: 'basic-seo',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Alap SEO beállítások',
    description: 'Keresőoptimalizálás, meta adatok, sitemap, alapvető SEO',
    prices: {
      premium: 70000,
      standard: 55000,
      basic: 40000,
    },
  },
  {
    id: 'advanced-seo',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Haladó SEO optimalizálás',
    description: 'Részletes kulcsszókutatás, technikai SEO, link building stratégia',
    prices: {
      premium: 150000,
      standard: 120000,
      basic: 90000,
    },
  },
  {
    id: 'performance-optimization',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Teljesítmény optimalizálás',
    description: 'Gyorsítás, cache beállítás, képoptimalizálás, Core Web Vitals',
    prices: {
      premium: 100000,
      standard: 80000,
      basic: 60000,
    },
  },
  {
    id: 'security-package',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Biztonsági csomag',
    description: 'SSL, tűzfal, biztonsági mentések, malware védelem',
    prices: {
      premium: 90000,
      standard: 70000,
      basic: 50000,
    },
  },
  {
    id: 'multilingual',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Többnyelvű weboldal',
    description: 'WPML vagy Polylang integráció, 2-3 nyelv beállítása',
    prices: {
      premium: 120000,
      standard: 95000,
      basic: 70000,
    },
  },
  {
    id: 'booking-system',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Foglalási rendszer',
    description: 'Online időpontfoglalás, naptár integráció',
    prices: {
      premium: 200000,
      standard: 160000,
      basic: 120000,
    },
  },
  {
    id: 'membership-system',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Tagsági rendszer',
    description: 'Regisztráció, belépés, felhasználói profilok, tartalom korlátozás',
    prices: {
      premium: 250000,
      standard: 200000,
      basic: 150000,
    },
  },
  {
    id: 'blog-setup',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Blog funkció beállítás',
    description: 'Blogmotor, kategóriák, címkék, kommentrendszer',
    prices: {
      premium: 80000,
      standard: 60000,
      basic: 45000,
    },
  },
  {
    id: 'newsletter-integration',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Hírlevél integráció',
    description: 'Mailchimp, Sendinblue vagy más rendszer bekötése',
    prices: {
      premium: 60000,
      standard: 45000,
      basic: 35000,
    },
  },
  {
    id: 'analytics-setup',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Analitika beállítás',
    description: 'Google Analytics, Tag Manager, konverziók követése',
    prices: {
      premium: 70000,
      standard: 55000,
      basic: 40000,
    },
  },
  {
    id: 'gdpr-compliance',
    category: 'Webfejlesztési szolgáltatások',
    name: 'GDPR megfelelőség',
    description: 'Cookie banner, adatvédelmi nyilatkozat, hozzájárulás kezelés',
    prices: {
      premium: 80000,
      standard: 60000,
      basic: 45000,
    },
  },
  {
    id: 'maintenance',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Karbantartási csomag (havi)',
    description: 'Havi support, frissítések, biztonsági mentések, monitoring',
    prices: {
      premium: 25000,
      standard: 20000,
      basic: 15000,
    },
  },
  {
    id: 'hosting-setup',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Tárhelyre telepítés',
    description: 'Domain beállítás, tárhelyre feltöltés, éles indítás',
    prices: {
      premium: 50000,
      standard: 40000,
      basic: 30000,
    },
  },
  {
    id: 'migration',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Weboldal migráció',
    description: 'Meglévő weboldal áthelyezése új tárhelyre vagy platformra',
    prices: {
      premium: 120000,
      standard: 95000,
      basic: 70000,
    },
  },
  {
    id: 'redesign',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Weboldal újratervezés',
    description: 'Meglévő weboldal modern megjelenésre frissítése',
    prices: {
      premium: 400000,
      standard: 320000,
      basic: 240000,
    },
  },
  {
    id: 'landing-page',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Landing page készítés',
    description: 'Egyoldalas konverziós céloldal kampányokhoz',
    prices: {
      premium: 150000,
      standard: 120000,
      basic: 90000,
    },
  },
  {
    id: 'portfolio-site',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Portfólió weboldal',
    description: 'Kreatív bemutatkozó oldal galéria funkcióval',
    prices: {
      premium: 200000,
      standard: 160000,
      basic: 120000,
    },
  },
  {
    id: 'corporate-site',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Vállalati bemutatkozó oldal',
    description: 'Professzionális céges weboldal 5-10 aloldallal',
    prices: {
      premium: 450000,
      standard: 360000,
      basic: 270000,
    },
  },

  // Grafikai tervezés
  {
    id: 'logo-design',
    name: 'Logó tervezés',
    description: 'Egyedi arculati logó készítése, 3 koncepcióban, végleges fájlok',
    category: 'Grafikai tervezés',
    prices: {
      premium: 150000,
      standard: 120000,
      basic: 90000,
    },
  },
  {
    id: 'brand-identity',
    name: 'Teljes arculattervezés',
    description: 'Komplett vizuális arculat (logó, színpaletta, tipográfia, stílusútmutató)',
    category: 'Grafikai tervezés',
    prices: {
      premium: 400000,
      standard: 320000,
      basic: 250000,
    },
  },
  {
    id: 'business-card',
    name: 'Névjegykártya tervezés',
    description: 'Kétoldalas névjegykártya design',
    category: 'Grafikai tervezés',
    prices: {
      premium: 50000,
      standard: 40000,
      basic: 30000,
    },
  },
  {
    id: 'social-media-graphics',
    name: 'Social media grafika csomag',
    description: '10 db egyedi poszt design közösségi médiához',
    category: 'Grafikai tervezés',
    prices: {
      premium: 120000,
      standard: 90000,
      basic: 70000,
    },
  },
  {
    id: 'print-materials',
    name: 'Nyomdai anyagok',
    description: 'Névjegykártya, levélpapír, mappák, szórólapok',
    category: 'Grafikai tervezés',
    prices: {
      premium: 80000,
      standard: 60000,
      basic: 45000,
    },
  },
  {
    id: 'presentation-design',
    name: 'Prezentáció design',
    description: 'Egyedi PowerPoint vagy Keynote prezentáció',
    category: 'Grafikai tervezés',
    prices: {
      premium: 100000,
      standard: 80000,
      basic: 60000,
    },
  },
  {
    id: 'infographic',
    name: 'Infografika készítés',
    description: 'Adatok vizualizálása egyedi grafikává',
    category: 'Grafikai tervezés',
    prices: {
      premium: 120000,
      standard: 90000,
      basic: 70000,
    },
  },
  {
    id: 'flyer-design',
    name: 'Flyer és brosúra tervezés',
    description: 'Hirdetési anyagok, promóciós anyagok',
    category: 'Grafikai tervezés',
    prices: {
      premium: 90000,
      standard: 70000,
      basic: 50000,
    },
  },
  {
    id: 'banner-design',
    name: 'Banner design',
    description: 'Web és közösségi média banner',
    category: 'Grafikai tervezés',
    prices: {
      premium: 60000,
      standard: 45000,
      basic: 30000,
    },
  },
  {
    id: 'packaging-design',
    name: 'Csomagolás tervezés',
    description: 'Termékcsomagolás, doboz, címke design',
    category: 'Grafikai tervezés',
    prices: {
      premium: 150000,
      standard: 120000,
      basic: 90000,
    },
  },
  {
    id: 'editorial-design',
    name: 'Szerkesztői design',
    description: 'Cikk, hírlevél, újság szerkesztési design',
    category: 'Grafikai tervezés',
    prices: {
      premium: 100000,
      standard: 80000,
      basic: 60000,
    },
  },
  {
    id: 'illustration',
    name: 'Illusztráció készítés',
    description: 'Egyedi illusztrációk készítése szükség szerint',
    category: 'Grafikai tervezés',
    prices: {
      premium: 180000,
      standard: 140000,
      basic: 100000,
    },
  },
];

// Szolgáltatások konvertálása ServiceItem formátumra
export const createServices = (pricingVersion: PricingVersion): ServiceItem[] => {
  return serviceDefinitions.map(service => ({
    id: service.id,
    name: service.name,
    description: service.description,
    category: service.category,
    price: service.prices[pricingVersion],
    selected: false,
  }));
};

// Csomagok definíciója
export interface PackageDefinition {
  name: string;
  description: string;
  services: string[];
  prices: Record<PricingVersion, number>;
}

export const servicePackages: PackageDefinition[] = [
  {
    name: 'Starter csomag',
    description: 'Ideális induló vállalkozásoknak',
    services: ['ux-ui-design', 'wordpress-dev', 'basic-seo'],
    prices: {
      premium: 520000,
      standard: 400000,
      basic: 280000,
    },
  },
  {
    name: 'Business csomag',
    description: 'Teljes körű online jelenlét',
    services: ['design-dev-package', 'custom-modules', 'basic-seo', 'maintenance'],
    prices: {
      premium: 825000,
      standard: 635000,
      basic: 455000,
    },
  },
  {
    name: 'E-commerce csomag',
    description: 'Komplett webshop megoldás',
    services: ['design-dev-package', 'webshop', 'basic-seo', 'maintenance'],
    prices: {
      premium: 925000,
      standard: 715000,
      basic: 515000,
    },
  },
];

// Export a jelenlegi árverziós szolgáltatásokat
export { serviceDefinitions };

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

// Segédfüggvény az ár lekérdezéséhez
export const getServicePrice = (serviceId: string, version: PricingVersion): number => {
  const service = services.find(s => s.id === serviceId);
  return service?.prices[version] || 0;
};

// Segédfüggvény az összes ár kiszámításához
export const getTotalPrice = (serviceIds: string[], version: PricingVersion): number => {
  return serviceIds.reduce((total, id) => {
    return total + getServicePrice(id, version);
  }, 0);
};

// Formázott ár megjelenítése
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('hu-HU', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const graphicServices: ServiceItem[] = [
  {
    id: 'logo-design',
    category: 'Grafikai szolgáltatások',
    name: 'Logótervezés',
    description: 'Egyedi logó koncepcióktól a végső kivitelezésig, több verzióval',
    price: 150000,
    selected: false
  },
  {
    id: 'brand-identity',
    category: 'Grafikai szolgáltatások',
    name: 'Teljes arculat kialakítása',
    description: 'Logó, színvilág, tipográfia, arculati kézikönyv',
    price: 450000,
    selected: false
  },
  {
    id: 'print-materials',
    category: 'Grafikai szolgáltatások',
    name: 'Névjegykártya és nyomdai grafika',
    description: 'Névjegy, levélpapír, mappák, szórólapok tervezése',
    price: 80000,
    selected: false
  },
  {
    id: 'social-media',
    category: 'Grafikai szolgáltatások',
    name: 'Social media vizuálok',
    description: 'Facebook, Instagram, LinkedIn posztok és borítóképek',
    price: 60000,
    selected: false
  },
  {
    id: 'creative-design',
    category: 'Grafikai szolgáltatások',
    name: 'Kreatív design anyagok',
    description: 'Prezentációk, infografikák, marketing anyagok',
    price: 120000,
    selected: false
  },
  {
    id: 'workshop-templates',
    category: 'Grafikai szolgáltatások',
    name: 'Workshop vizuális sablonok',
    description: 'Egyedi PowerPoint és Keynote sablonok',
    price: 90000,
    selected: false
  }
];

export const webServices: ServiceItem[] = [
  {
    id: 'ux-ui-design',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Weboldal UX/UI tervezés',
    description: 'Felhasználói élmény és felület tervezés, wireframe, mockup',
    price: 200000,
    selected: false
  },
  {
    id: 'wordpress-dev',
    category: 'Webfejlesztési szolgáltatások',
    name: 'WordPress és Elementor fejlesztés',
    description: 'Modern, reszponzív WordPress weboldal Elementor builderrel',
    price: 350000,
    selected: false
  },
  {
    id: 'design-dev-package',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Design + fejlesztés egyben',
    description: 'Teljes körű megoldás a tervezéstől az éles indításig',
    price: 550000,
    selected: false
  },
  {
    id: 'custom-modules',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Egyedi modulok és logika',
    description: 'Testreszabott funkciók, API integrációk, automatizálások',
    price: 180000,
    selected: false
  },
  {
    id: 'webshop',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Webshop funkciók',
    description: 'WooCommerce webáruház beállítás és testreszabás',
    price: 280000,
    selected: false
  },
  {
    id: 'responsive-optimization',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Reszponzív optimalizálás',
    description: 'Mobil és tablet nézetek finomhangolása',
    price: 80000,
    selected: false
  },
  {
    id: 'content-upload',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Tartalomfeltöltés',
    description: 'Szövegek, képek, videók feltöltése és formázása',
    price: 60000,
    selected: false
  },
  {
    id: 'basic-seo',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Alap SEO beállítások',
    description: 'Keresőoptimalizálás, meta adatok, sitemap, alapvető SEO',
    price: 70000,
    selected: false
  },
  {
    id: 'advanced-seo',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Haladó SEO optimalizálás',
    description: 'Részletes kulcsszókutatás, technikai SEO, link building stratégia',
    price: 150000,
    selected: false
  },
  {
    id: 'performance-optimization',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Teljesítmény optimalizálás',
    description: 'Gyorsítás, cache beállítás, képoptimalizálás, Core Web Vitals',
    price: 100000,
    selected: false
  },
  {
    id: 'security-package',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Biztonsági csomag',
    description: 'SSL, tűzfal, biztonsági mentések, malware védelem',
    price: 90000,
    selected: false
  },
  {
    id: 'multilingual',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Többnyelvű weboldal',
    description: 'WPML vagy Polylang integráció, 2-3 nyelv beállítása',
    price: 120000,
    selected: false
  },
  {
    id: 'booking-system',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Foglalási rendszer',
    description: 'Online időpontfoglalás, naptár integráció',
    price: 200000,
    selected: false
  },
  {
    id: 'membership-system',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Tagsági rendszer',
    description: 'Regisztráció, belépés, felhasználói profilok, tartalom korlátozás',
    price: 250000,
    selected: false
  },
  {
    id: 'blog-setup',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Blog funkció beállítás',
    description: 'Blogmotor, kategóriák, címkék, kommentrendszer',
    price: 80000,
    selected: false
  },
  {
    id: 'newsletter-integration',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Hírlevél integráció',
    description: 'Mailchimp, Sendinblue vagy más rendszer bekötése',
    price: 60000,
    selected: false
  },
  {
    id: 'analytics-setup',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Analitika beállítás',
    description: 'Google Analytics, Tag Manager, konverziók követése',
    price: 70000,
    selected: false
  },
  {
    id: 'gdpr-compliance',
    category: 'Webfejlesztési szolgáltatások',
    name: 'GDPR megfelelőség',
    description: 'Cookie banner, adatvédelmi nyilatkozat, hozzájárulás kezelés',
    price: 80000,
    selected: false
  },
  {
    id: 'maintenance',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Karbantartási csomag (havi)',
    description: 'Havi support, frissítések, biztonsági mentések, monitoring',
    price: 25000,
    selected: false
  },
  {
    id: 'hosting-setup',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Tárhelyre telepítés',
    description: 'Domain beállítás, tárhelyre feltöltés, éles indítás',
    price: 50000,
    selected: false
  },
  {
    id: 'migration',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Weboldal migráció',
    description: 'Meglévő weboldal áthelyezése új tárhelyre vagy platformra',
    price: 120000,
    selected: false
  },
  {
    id: 'redesign',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Weboldal újratervezés',
    description: 'Meglévő weboldal modern megjelenésre frissítése',
    price: 400000,
    selected: false
  },
  {
    id: 'landing-page',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Landing page készítés',
    description: 'Egyoldalas konverziós céloldal kampányokhoz',
    price: 150000,
    selected: false
  },
  {
    id: 'portfolio-site',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Portfólió weboldal',
    description: 'Kreatív bemutatkozó oldal galéria funkcióval',
    price: 200000,
    selected: false
  },
  {
    id: 'corporate-site',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Vállalati bemutatkozó oldal',
    description: 'Professzionális céges weboldal 5-10 aloldallal',
    price: 450000,
    selected: false
  }
];
