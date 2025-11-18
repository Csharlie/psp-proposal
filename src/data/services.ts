import { ServiceItem } from '../types';

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
    id: 'maintenance',
    category: 'Webfejlesztési szolgáltatások',
    name: 'Karbantartási csomag',
    description: 'Havi support, frissítések, biztonsági mentések (havi díj)',
    price: 25000,
    selected: false
  }
];

export const packages = [
  {
    name: 'Basic',
    description: 'Kezdő vállalkozásoknak',
    services: ['logo-design', 'print-materials', 'wordpress-dev', 'basic-seo'],
    price: 580000
  },
  {
    name: 'Standard',
    description: 'Növekvő cégeknek',
    services: ['brand-identity', 'social-media', 'design-dev-package', 'content-upload', 'basic-seo'],
    price: 980000
  },
  {
    name: 'Premium',
    description: 'Komplex projektek',
    services: ['brand-identity', 'social-media', 'creative-design', 'design-dev-package', 'custom-modules', 'webshop', 'content-upload', 'basic-seo', 'maintenance'],
    price: 1450000
  }
];
