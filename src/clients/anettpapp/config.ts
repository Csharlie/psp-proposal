import { ClientConfig } from '../types';
import { galleryImages } from './gallery';

export const anettpappConfig: ClientConfig = {
  client: {
    name: "Papp Anett",
    contact: "Papp Anett",
    email: "boszorka85@gmail.hu",
    phone: "+36 XX XXX XXXX",
    address: "Kiskunfélegyháza, Magyarország"
  },
  
  project: {
    title: "Papp Anett - Szertartásvezetői weboldal / Landing Page",
    description: "Egyedi szertartások (esküvő, fogadalom-megerősítés, névadó) bemutatására szolgáló, érzelmi és bizalmi döntésekre építő, mobilra optimalizált webes megjelenés, amely hosszú távon bővíthető, újratervezés nélkül.",
    features: [
      `
<div class="space-y-4">
  <h4 class="font-semibold text-gray-900 mb-6">A weboldal landing page jellegű, logikusan tagolt szekciókra épül</h4>
  
  <div class="space-y-3">
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Fejléc (Hero)</h4>
      <p class="text-gray-600 text-sm">Érzelmi felütésű hero szekció háttérképpel, központi üzenettel és egyetlen, személyes hangvételű cselekvésre ösztönző gombbal („Írj nekem”)</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Szolgáltatások</h4>
      <p class="text-gray-600 text-sm">Három különböző élethelyzet kiemelése: Esküvői szertartás, Fogadalom megerősítése, Névadó</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Bemutatkozás</h4>
      <p class="text-gray-600 text-sm">Rövid személyes bemutatkozó szekció képpel és szöveggel, amely az egyedi megközelítést hangsúlyozza</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Galéria</h4>
      <p class="text-gray-600 text-sm">Hangulatokat és pillanatokat bemutató galéria, amely képeken keresztül ad ízelítőt a szertartások atmoszférájából</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Folyamat bemutatása</h4>
      <p class="text-gray-600 text-sm">A közös munka ritmusa - világos lépések és mérföldkövek a megismerkedéstől a szertartás pillanatáig</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">No Go zóna</h4>
      <p class="text-gray-600 text-sm">Röviden arról, mi nem része a szertartásvezetésnek - egyértelmű határok és átlátható elvárások a megfelelő együttműködés érdekében</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Rólam mondták</h4>
      <p class="text-gray-600 text-sm">Valódi visszajelzések pároktól és családoktól, amelyek a jelenlétet, nyugalmat és hitelességet erősítik.</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Kapcsolatfelvétel</h4>
      <p class="text-gray-600 text-sm">"Ha megszólít, amit itt olvastál, beszéljünk." - kapcsolati űrlap és elérhetőségek (email, telefon, cím)</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Lábléc</h4>
      <p class="text-gray-600 text-sm">Navigációs linkek, szolgáltatások listája, kapcsolati információk, közösségi média linkek</p>
    </div>
  </div>
</div>`
    ],
    timeline: [
      `<div class="border-l-4 border-blue-500 pl-6 py-3">
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
          <h5 class="font-bold text-gray-900">Előkészítés</h5>
          <span class="text-sm font-semibold text-blue-600">2-3 munkanap</span>
        </div>
        <p class="text-gray-600 text-sm">Igényfelmérés, üzleti célok meghatározása, dizájn koncepció, vizuális irány kialakítása</p>
      </div>`,
      `<div class="border-l-4 border-blue-500 pl-6 py-3">
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
          <h5 class="font-bold text-gray-900">Látványterv</h5>
          <span class="text-sm font-semibold text-blue-600">5-7 munkanap</span>
        </div>
        <p class="text-gray-600 text-sm">Oldal vizuális megjelenésének kialakítása, színvilág és tipográfia véglegesítése, tartalom egyeztetés és jóváhagyás</p>
      </div>`,
      `<div class="border-l-4 border-blue-500 pl-6 py-3">
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
          <h5 class="font-bold text-gray-900">Fejlesztés</h5>
          <span class="text-sm font-semibold text-blue-600">5-7 munkanap</span>
        </div>
        <p class="text-gray-600 text-sm">Frontend kódolás, mobilra optimalizált megjelenés kialakítása, galéria és kapcsolati űrlap implementálása</p>
      </div>`,
      `<div class="border-l-4 border-blue-500 pl-6 py-3">
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
          <h5 class="font-bold text-gray-900">Átadás</h5>
          <span class="text-sm font-semibold text-blue-600">1-2 munkanap</span>
        </div>
        <p class="text-gray-600 text-sm">Tesztelés, végső finomhangolás, éles indítás</p>
      </div>`
    ],
    gallery: galleryImages
  },
  
  quote: {
    id: "PSP-2026-003",
    issueDate: "2026-01-25",
    validityDays: 30
  },
  
  selectedServices: [
    'landing-page',
    'domain-hosting',
    'domain-hosting-yearly'
  ],
  
  pricingVersion: 'basic',
  
  // Egyedi árak (opcionális felülírás)
  customPrices: {
    'landing-page': 219000,              // basic
    'domain-hosting': 14900,             // basic
    'domain-hosting-monthly': 3900,      // basic
    'domain-hosting-yearly': 39000,      // basic
  },
  
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
