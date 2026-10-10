import { ClientConfig } from '../types';
import { galleryImages } from './gallery';

export const farkasklaraConfig: ClientConfig = {
  client: {
    name: "Farkas Klára Könyvelőiroda",
    contact: "Farkas Klára",
    email: "",
    phone: "",
    address: "6000 Kecskemét, Berzsenyi utca 19."
  },

  project: {
    title: "Farkas Klára Könyvelőiroda – Többoldalas céges weboldal",
    description: `Szakmai hitelességet sugárzó, <span class="font-semibold text-black">mobilra optimalizált céges weboldal</span> a könyvelőiroda számára, amely érthetően mutatja be a szolgáltatásokat egyéni vállalkozóknak, kis- és középvállalkozásoknak és nagyobb cégeknek. Minden szolgáltatás <span class="font-semibold text-black">saját aloldalt</span> kap, az érdeklődők pedig egy <span class="font-semibold text-black">ajánlatkérő űrlapon</span> keresztül, a kívánt szolgáltatás előválasztásával vehetik fel a kapcsolatot.`,
    features: [
      // Első features szekció - Főoldal szerkezete
      `
<div class="space-y-4">
  <h4 class="font-semibold text-gray-900 mb-6">A főoldal logikusan tagolt szekciókra épül</h4>

  <div class="space-y-3">
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Fejléc (Hero)</h4>
      <p class="text-gray-600 text-sm">Nyugodt, bizalomépítő hero szekció háttérképpel, központi üzenettel, ajánlatkérés és szolgáltatások gombbal</p>
    </div>

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Kinek szólunk</h4>
      <p class="text-gray-600 text-sm">Három ügyfélcsoport kiemelése: egyéni vállalkozók, kis- és középvállalkozások, vállalatok</p>
    </div>

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Szolgáltatások</h4>
      <p class="text-gray-600 text-sm">Ikonos, teljes felületükön kattintható kártyák: könyvelés, adótanácsadás, adóbevallás, bérszámfejtés, végelszámolás, pályázatok</p>
    </div>

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Bemutatkozás és csapat</h4>
      <p class="text-gray-600 text-sm">Az iroda és a szakmai vezető bemutatása, a csapat tagjai szerepkörökkel</p>
    </div>

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Ajánlatkérés</h4>
      <p class="text-gray-600 text-sm">Ajánlatkérő űrlap szolgáltatás-előválasztással és kompakt elérhetőségi panellel</p>
    </div>

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Térkép</h4>
      <p class="text-gray-600 text-sm">Teljes szélességű térkép az iroda helyével és útvonaltervezési linkkel</p>
    </div>
  </div>
</div>`,
      // Második features szekció - Aloldalak
      `
<div class="space-y-4">
  <h4 class="font-semibold text-gray-900 my-8">Aloldalak:</h4>

  <div class="space-y-3">
    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Szolgáltatás aloldalak</h4>
      <p class="text-gray-600 text-sm">Minden szolgáltatás saját oldalt kap: mit tartalmaz, hogyan zajlik lépésről lépésre, díjazás, gyakori kérdések és közvetlen ajánlatkérés</p>
    </div>

    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Rólunk</h4>
      <p class="text-gray-600 text-sm">Az iroda teljes bemutatkozása, a csapat és a közös munka folyamata</p>
    </div>

    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Könyvelőváltás</h4>
      <p class="text-gray-600 text-sm">Külön oldal azoknak, akik könyvelőt váltanának: mire számíthatnak, hogyan zajlik az átállás</p>
    </div>

    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Tudástár</h4>
      <p class="text-gray-600 text-sm">Cikkek adózási és könyvelési témákban, amelyek bővíthetők és a keresőkben is megtalálhatók</p>
    </div>

    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Kapcsolat</h4>
      <p class="text-gray-600 text-sm">Elérhetőségek, nyitvatartás, ajánlatkérő űrlap és térkép</p>
    </div>

    <div class="bg-green-50 border border-green-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Keresőoptimalizálás</h4>
      <p class="text-gray-600 text-sm">Szolgáltatásonként és városra optimalizált oldalcímek (pl. „Könyvelés Kecskemét”)</p>
    </div>
  </div>
</div>`
    ],
    timeline: [
      `<div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h5 class="font-semibold text-gray-900 mb-2">Többoldalas céges weboldal</h5>
        <p class="text-gray-700 text-sm">Tervezés: <span class="font-medium">3-5 munkanap</span> | Fejlesztés: <span class="font-medium">7-10 munkanap</span></p>
      </div>`
    ],
    gallery: galleryImages
  },

  quote: {
    id: 'PSP-2026-005',
    issueDate: new Date().toISOString(),
    validityDays: 30
  },

  selectedServices: [
    'website-farkasklara',
    'domain-hosting',
    'domain-hosting-yearly',
    'training-basic',
    'website-usage-baseline-3m',
  ],

  pricingVersion: 'basic',

  // Egyedi árak (opcionális felülírás)
  customPrices: {
    'website-farkasklara': 199000,        // basic
    'domain-hosting': 14900,              // basic
    'domain-hosting-yearly': 39000,       // basic
    'training-basic': 0,                  // basic - ingyenes
    'training': 29000,                    // basic
    'maintenance-monthly': 14900,         // basic
  },

  // Megjelenítési beállítások
  showYearlyCosts: false,

  customTexts: {
    paymentTerms: `### Fizetési Feltételek

- **Előleg**: 50% szerződéskötéskor
- **Végszámla**: 50% átadás-átvételkor
- **Fizetési határidő**: 8 nap
- **Fizetési mód**: Banki átutalás

### Érvényesség

- Ajánlat érvényessége: **30 nap**
- Árak tartalmazzák az ÁFÁ-t
- Árak HUF-ban értendők`,

    additionalTerms: `### További Feltételek

**9. Domain és tárhely szolgáltatás**

A domain és tárhely külső szolgáltatótól kerül biztosításra. A vállalkozó viszonteladóként végzi a beszerzést, beállítást és SSL aktiválást. A tárhelyszolgáltató infrastruktúrájából eredő problémák (szerverleállás, e-mail hiba, adat-visszaállítás) kezelése külön egyeztetés és óradíjas elszámolás alapján történik.

**10. Felelősség és garancia**

A vállalkozó a külső szolgáltató (tárhely, domain) rendelkezésre állásáért és működéséért felelősséget nem vállal. A technikai egyeztetéseket elvégzi, de a szolgáltatói infrastruktúra meghibásodásából eredő problémák nem képezik a projekt hatókörét.`
  }
};
