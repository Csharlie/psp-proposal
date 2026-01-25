import { ClientConfig } from '../types';
import { galleryImages } from './gallery';

export const anettpappConfig: ClientConfig = {
  client: {
    name: "Papp Anett",
    contact: "Papp Anett",
    email: "info@pappanett.hu",
    phone: "+36 XX XXX XXXX",
    address: "Magyarország"
  },
  
  project: {
    title: "Papp Anett – Weboldal",
    description: "Modern, professzionális weboldal egyedi igényekhez szabva.",
    features: [
      `
<div class="space-y-4">
  <p class="text-gray-700 mb-4">A weboldal fő jellemzői:</p>
  
  <div class="space-y-3">
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Reszponzív megjelenés</h4>
      <p class="text-gray-600 text-sm">Minden eszközön tökéletes élmény</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Modern design</h4>
      <p class="text-gray-600 text-sm">Letisztult, felhasználóbarát felület</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">SEO optimalizált</h4>
      <p class="text-gray-600 text-sm">Keresőbarát, gyors betöltés</p>
    </div>
  </div>
</div>
      `
    ],
    gallery: galleryImages
  },
  
  quote: {
    id: "AP-2026-003",
    issueDate: "2026-01-25",
    validityDays: 30
  },
  
  selectedServices: [
    'responsive-design',
    'custom-design',
    'seo'
  ],
  
  pricingVersion: 'standard',
  
  showYearlyCosts: false,
  
  customTexts: {
    introduction: `## Üdvözöljük

Köszönjük érdeklődését szolgáltatásaink iránt.`,
    
    conclusion: `## Összegzés

Ajánlatunk összefoglalása.`,

    paymentTerms: `### Fizetési Feltételek

- **Előleg**: 30% szerződéskötéskor
- **Mérföldkő**: 30% fejlesztés közben
- **Végszámla**: 40% átadás-átvételkor
- **Fizetési határidő**: 8 nap
- **Fizetési mód**: Banki átutalás`,

    additionalTerms: `### További Feltételek

Projekt teljesítése a megállapodás szerint történik.`
  }
};
