import { ClientConfig } from '../types';
import { galleryImages } from './gallery';

export const benettcarConfig: ClientConfig = {
  client: {
    name: "Benett Car Business Kft.",
    contact: "László Béla",
    email: "info@pspro.hu",
    phone: "+36 20 240 1601",
    address: "Cegléd, Magyarország"
  },
  
  project: {
    title: "Benett Car Business Kft. – Landing Page + Online Időpontfoglaló Rendszer",
    description: `Üzletileg hatékony, <span class=\"font-semibold text-black\">mobilra optimalizált weboldal</span>, modern megjelenéssel, strukturált tartalommal, felhasználóbarát és konverzió-központú felépítéssel, valamint egy <span class=\"font-semibold text-black\">online időpontfoglaló rendszer</span> kialakítása, amely csökkenti az adminisztrációt, átláthatóvá teszi a szervizkapacitást, és <span class=\"font-semibold text-black\">megtartja a vezetői kontrollt az időpontok felett.</span>`,
    features: [
      // Első features szekció - Weboldal szerkezete
      `
<div class="space-y-4">
  <h4 class="font-semibold text-gray-900 mb-6">A weboldal landing page jellegű, logikusan tagolt szekciókra épül</h4>
  
  <div class="space-y-3">
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Fejléc (Hero)</h4>
      <p class="text-gray-600 text-sm">Figyelemfelkeltő, vizuálisan erős hero szekció célzott üzenetekkel</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Szolgáltatások</h4>
      <p class="text-gray-600 text-sm">Kártyás rendszerrel bemutatott szolgáltatások gyors áttekinthetőséggel</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Galéria</h4>
      <p class="text-gray-600 text-sm">Műhely, munkák, hangulat – vizuális bizalomépítés.</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Foglalás (Booking)</h4>
      <p class="text-gray-600 text-sm">Belépési pont foglalható időpontokra, szabad / foglalt napok megjelenítése</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Útmenti segítség</h4>
      <p class="text-gray-600 text-sm">Kiemelt szekció az útmenti segítségnyújtás bemutatására</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Csapat bemutatása</h4>
      <p class="text-gray-600 text-sm">Bizalomépítés, szakmai hitelesség hangsúlyozása</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Vélemények</h4>
      <p class="text-gray-600 text-sm">Valós vendégvisszajelzések, amelyek segítenek a választásban</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Kapcsolat</h4>
      <p class="text-gray-600 text-sm">Űrlap, elérhetőségek, térképes lokáció megjelenítés</p>
    </div>
  </div>
</div>`,
      // Második features szekció - Időpontfoglaló rendszer
      `
<div class="space-y-4">
  <h4 class="font-semibold text-gray-900 my-8">Az Online Időpontfoglaló Rendszer főbb jellemzői:</h4>
  
  <div class="space-y-3">
    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Központi adminisztráció</h4>
      <p class="text-gray-600 text-sm">A vezető látja az összes foglalást, szerkesztheti, törölheti vagy hozzáadhatja azokat</p>
    </div>
    
    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Automatizált foglalási rendszer</h4>
      <p class="text-gray-600 text-sm">Az ügyfelek online időpontot foglalhatnak, amely automatikusan megjelenik az admin felületen</p>
    </div>
    
    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Naptár nézet</h4>
      <p class="text-gray-600 text-sm">Áttekinthető naptár a foglalások kezeléséhez és szabad időpontok megtekintéséhez</p>
    </div>
    
    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Email értesítések</h4>
      <p class="text-gray-600 text-sm">Azonnali értesítés a vezetőnek új foglaláskor, megerősítő email az ügyfélnek elfogadáskor</p>
    </div>
  </div>
</div>`
    ],
    timeline:  [
      `<div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h5 class="font-semibold text-gray-900 mb-2">Landing Page</h5>
        <p class="text-gray-700 text-sm">Tervezés: <span class="font-medium">3-5 munkanap</span> | Fejlesztés: <span class="font-medium">5-7 munkanap</span></p>
      </div>`,
      `<div class="bg-green-50 border border-green-100 rounded-lg p-4">
        <h5 class="font-semibold text-gray-900 mb-2">Online Időpontfoglaló Rendszer</h5>
        <p class="text-gray-700 text-sm">Tervezés: <span class="font-medium">5-7 munkanap</span> | Fejlesztés: <span class="font-medium">7-10 munkanap</span></p>
      </div>`
    ],
    // deliverables: [
    //   "Professzionális online megjelenés"
    // ],
    gallery: galleryImages
  },
  
  quote: {
    id: 'PSP-2026-004',
    issueDate: new Date().toISOString(),
    validityDays: 30
  },
  
  selectedServices: [
    'landing-page-benettcar',
    'online-booking-benettcar',
    'domain-hosting',
    'ssl-certificate',
    'google-analytics',
    'training',
  ],
  
  pricingVersion: 'basic',
  
  // Egyedi árak (opcionális felülírás)
  customPrices: {
    'landing-page-benettcar': 159000,     // basic
    'online-booking-benettcar': 279000,   // basic
    'domain-hosting': 14900,              // basic
    'ssl-certificate': 20000,             // basic
    'google-analytics': 25000,            // basic
    'training': 40000,                    // basic
  },
  
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
