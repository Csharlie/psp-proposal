import { ClientConfig } from '../clients/types';

export const peldaKftConfig: ClientConfig = {
  client: {
    name: "Példa Kft.",
    contact: "Nagy János",
    email: "nagy.janos@pelda.hu",
    phone: "+36 30 123 4567",
    address: "1234 Budapest, Példa utca 12."
  },
  
  project: {
    title: "Vállalati bemutatkozó weboldal",
    description: "Modern, reszponzív weboldal a cég szolgáltatásainak bemutatására, amely professzionális megjelenést biztosít és könnyen kezelhető admin felülettel rendelkezik.",
    timeline: "6-8 hét",
    deliverables: [
      "Teljes körű UX/UI design",
      "WordPress fejlesztés Elementor builderrel",
      "Reszponzív megjelenés (mobil, tablet, desktop)",
      "SEO alapbeállítások",
      "Tartalomfeltöltés (max 10 oldal)",
      "Admin képzés",
      "1 hónap ingyenes support"
    ]
  },
  
  quote: {
    id: 'PSP-2025-001',
    issueDate: new Date().toISOString(),
    validityDays: 30
  },
  
  selectedServices: [
    'ux-ui-design',
    'wordpress-dev',
    'responsive-optimization',
    'basic-seo',
    'content-upload',
    'logo-design',
    'brand-identity'
  ],
  
  pricingVersion: 'standard',
  
  customTexts: {
    introduction: "Köszönjük a bizalmat! Az alábbiakban találja a weboldal fejlesztésére vonatkozó részletes ajánlatunkat. Célunk, hogy egy modern, felhasználóbarát és professzionális online jelenlétet biztosítsunk vállalkozása számára."
  }
};