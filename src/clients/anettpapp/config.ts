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
      <h4 class="font-semibold text-gray-900 mb-1">Bemutatkozás</h4>
      <p class="text-gray-600 text-sm">Rövid személyes bemutatkozó szekció képpel és szöveggel, amely az egyedi megközelítést hangsúlyozza</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Szolgáltatások</h4>
      <p class="text-gray-600 text-sm">Három különböző élethelyzet kiemelése kártyás elrendezésben ikonokkal: Esküvői szertartás, Fogadalom megerősítése, Névadó</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Galéria</h4>
      <p class="text-gray-600 text-sm">Hangulatokat és pillanatokat bemutató galéria, amely képeken keresztül ad ízelítőt a szertartások atmoszférájából</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">Folyamat bemutatása</h4>
      <p class="text-gray-600 text-sm">Számozott lépésekben bemutatva a közös munka ritmusa - a megismerkedéstől a szertartás pillanatáig</p>
    </div>
    
    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h4 class="font-semibold text-gray-900 mb-1">No Go zóna</h4>
      <p class="text-gray-600 text-sm">Rövid, őszinte állítások arról, mi nem része a szertartásvezetésnek</p>
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
    gallery: galleryImages
  },
  
  quote: {
    id: "AP-2026-003",
    issueDate: "2026-01-25",
    validityDays: 30
  },
  
  selectedServices: [
    'landing-page',
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
