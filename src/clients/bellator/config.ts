import { ClientConfig } from '../types';

export const bellatorConfig: ClientConfig = {
  client: {
    name: "Bellator Gym",
    contact: "Makány Balázs",
    email: "info@pspro.hu",
    phone: "+36 XX XXX XXXX",
    address: "Kiskunfélegyháza, Magyarország"
  },
  
  project: {
    title: "Bellator Gym Landing Page",
    description: "Projekt leírás.",
    timeline:  [
      "Tervezés: X munkanap",
      "Fejlesztés: X munkanap"
    ],
    deliverables: [
      "Professzionális online megjelenés"
    ]
  },
  
  quote: {
    id: 'PSP-2026-002',
    issueDate: new Date().toISOString(),
    validityDays: 30
  },
  
  selectedServices: [
    'landing-page'
  ],
  
  pricingVersion: 'standard',
  
  // Egyedi árak
  customPrices: {
    'landing-page': 150000
  },
  
  customTexts: {
    introduction: `# VEZETŐI ÖSSZEFOGLALÓ – Bellator

## Projekt Bemutatás

Egyedi projekt leírás ide kerül.

---`,
    
    conclusion: `## Összegzés

Ajánlatunk összefoglalása.

**Ajánlatunk előnyei:**
- ✅ Kulcsrakész megoldás
- ✅ Mobilbarát és SEO-optimalizált
- ✅ Folyamatos támogatás
- ✅ Átlátható árazás

**Kérdés esetén keressen bizalommal!**`,

    paymentTerms: `### Fizetési Feltételek

- **Előleg**: 50% szerződéskötéskor
- **Végszámla**: 50% átadás-átvételkor
- **Fizetési határidő**: 8 nap
- **Fizetési mód**: Banki átutalás

### Érvényesség

- Ajánlat érvényessége: **30 nap**
- Árak tartalmazzák az ÁFÁ-t
- Árak HUF-ban értendők`,

    additionalTerms: `### Projekt Ütemezés

1. **Tervezés & Design**: X hét
2. **Fejlesztés**: X hét
3. **Tesztelés & Finomhangolás**: X hét
4. **Átadás & Képzés**: X hét

**Teljes átfutási idő: X hét**`
  }
};
