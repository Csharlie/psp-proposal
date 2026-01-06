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
    description: "Üzletileg hatékony, mobilra optimalizált fitness weboldal, modern megjelenéssel, strukturált tartalommal, felhasználóbarát és konverzió-központú felépítéssel.",
    features: `
<div class="space-y-4">
  <p class="text-gray-700 mb-4">A weboldal landing page jellegű, logikusan tagolt szekciókra épülő struktúrával készül:</p>
  
  <div class="space-y-3">
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Hero szekció</h4>
      <p class="text-gray-600 text-sm">Figyelemfelkeltő, vizuálisan erős, kettéválasztott hero szekció célzott üzenetekkel</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Edzésprogramok bemutatása</h4>
      <p class="text-gray-600 text-sm">Strukturált, kártyás rendszerrel, gyors áttekinthetőséggel</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Edzők bemutatása</h4>
      <p class="text-gray-600 text-sm">Bizalomépítés, szakmai hitelesség hangsúlyozása</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Galéria</h4>
      <p class="text-gray-600 text-sm">Életképek, hangulat, közösségi élmény vizuális megerősítése</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Bérlet- és csomagstruktúra</h4>
      <p class="text-gray-600 text-sm">Átlátható árképzés, kiemelt ajánlatokkal</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Vélemények</h4>
      <p class="text-gray-600 text-sm">Valós vendégvisszajelzések, amelyek segítenek a választásban</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Kapcsolati szekció</h4>
      <p class="text-gray-600 text-sm">Űrlap, elérhetőségek, térkép – gyors és egyszerű kapcsolatfelvétel</p>
    </div>
  </div>
</div>`,
    timeline:  [
      "Tervezés: 3-5 munkanap",
      "Fejlesztés: 5-7 munkanap"
    ],
    // deliverables: [
    //   "Professzionális online megjelenés"
    // ]
  },
  
  quote: {
    id: 'PSP-2026-002',
    issueDate: new Date().toISOString(),
    validityDays: 30
  },
  
  selectedServices: [
    'landing-page-bellator'
  ],
  
  pricingVersion: 'basic',
  
  // Megjelenítési beállítások
  showYearlyCosts: false,
  
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
