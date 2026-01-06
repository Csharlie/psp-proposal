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
    title: "Bellator Gym – Fitness Landing Page",
    description: "Egy üzletileg hatékony, mobilra optimalizált fitness weboldal, modern megjelenéssel, strukturált tartalommal és felhasználóbarát felépítéssel.",
    features: `
<div class="space-y-4">
  <p class="text-gray-700 mb-4">A weboldal egy landing page alapú, szekcionált felépítésre épül:</p>
  
  <ul class="space-y-2 list-disc text-gray-700 ml-8">
    <li>
      <span class="font-semibold text-gray-700">Hero szekciók</span><br/>
      <span class="text-gray-700">Azonnali értékajánlat, vizuális erő és egyértelmű CTA (Call to Action – cselekvésre ösztönzés)</span>
    </li>
    
    <li>
      <span class="font-semibold text-gray-700">Edzésprogramok bemutatása</span><br/>
      <span class="text-gray-700">Strukturált, kártyás rendszerrel, gyors áttekinthetőséggel</span>
    </li>
    
    <li>
      <span class="font-semibold text-gray-700">Edzők bemutatása</span><br/>
      <span class="text-gray-700">Bizalomépítés, szakmai hitelesség hangsúlyozása</span>
    </li>
    
    <li>
      <span class="font-semibold text-gray-700">Galéria</span><br/>
      <span class="text-gray-700">Életképek, hangulat, közösségi élmény vizuális megerősítése</span>
    </li>
    
    <li>
      <span class="font-semibold text-gray-700">Bérlet- és csomagstruktúra</span><br/>
      <span class="text-gray-700">Átlátható árképzés, kiemelt ajánlatokkal</span>
    </li>
    
    <li>
      <span class="font-semibold text-gray-700">Vélemények</span><br/>
      <span class="text-gray-700">Social proof (társadalmi bizonyíték) a döntési kockázat csökkentésére</span>
    </li>
    
    <li>
      <span class="font-semibold text-gray-700">Kapcsolati szekció</span><br/>
      <span class="text-gray-700">Űrlap, elérhetőségek, térkép – gyors és egyszerű kapcsolatfelvétel</span>
    </li>
  </ul>
</div>`,
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
