import { ClientConfig } from '../types';

export const autozenoConfig: ClientConfig = {
  client: {
    name: "AutoZeno",
    contact: "Ügyvezető",
    email: "info@autozeno.hu",
    phone: "+36 30 123 4567",
    address: "Budapest, Magyarország"
  },
  
  project: {
    title: "AutoZeno - Autókereskedés Online Jelenléte",
    description: "Konverzió-központú landing oldal és autókatalógus rendszer fejlesztése, mobilra optimalizálva.",
    timeline:  [
      "Landing page: 5-7 munkanap",
      "Autókatalógus rendszer: 7-10 munkanap"
    ],
    deliverables: [
        "Konverzióra optimalizált landing oldal",
        "Átlátható autókatalógus rendszer",
        "Professzionális online megjelenés"
      // "Konverzió-központú landing page (1 oldal, mobilra optimalizálva)",
      // "Autókatalógus rendszer (szűrők, részletes járműadatok)",
      // "Érdeklődési űrlap integráció",
      // "Domain regisztráció és tárhely beállítás",
      // "SSL tanúsítvány",
      // "Havi műszaki karbantartás és támogatás",
      // "Képzés és dokumentáció",
      // "30 napos garanciális támogatás"
    ]
  },
  
  quote: {
    id: 'PSP-2026-001',
    issueDate: new Date().toISOString(),
    validityDays: 14
  },
  
  selectedServices: [
    'landing-page',
    'car-catalog-system',
    'domain-hosting',
    'maintenance-monthly',
    'domain-hosting-yearly'
  ],
  
  pricingVersion: 'standard',
  
  // Egyedi árak az AutoZeno projektre
  customPrices: {
    'landing-page': 119000,            // Konverzió-központú landing page
    'car-catalog-system': 219000,      // Autókatalógus rendszer szűrőkkel
    'domain-hosting': 9900,            // Domain + 1 év tárhely + SSL
    'maintenance-monthly': 9900,       // Havi karbantartás éves díja (35,000 Ft/hó × 12 hó)
    'domain-hosting-monthly': 3900,    // Domain + 1 év tárhely + SSL
    'domain-hosting-yearly': 39000,    // Domain + 1 év tárhely + SSL
  },
  
  customTexts: {
    introduction: `# VEZETŐI ÖSSZEFOGLALÓ – AutoZeno Online Jelenléte

## Miért van szükség erre a fejlesztésre?

Az autókereskedések számára az online jelenlét ma már nem opció, hanem alapvető üzleti szükséglet. Az ügyfelek 85%-a az interneten kezdi meg a vásárlási folyamatot, és a mobilhasználat aránya folyamatosan növekszik.

**AutoZeno számára egy professzionális, konverzió-központú online megoldás a következő üzleti előnyöket biztosítja:**

### 📈 Üzleti Hatás & ROI

- **Növekvő ügyfélszám**: Akár 40-60% több érdeklődő havonta a jól strukturált landing page és kereső-optimalizált autókatalógus révén
- **Gyorsabb értékesítés**: Az online katalógus 24/7 elérhetősége jelentősen csökkenti az értékesítési ciklus időtartamát
- **Csökkentett marketing költségek**: Hatékonyabb online hirdetések célzott landing oldalakkal (akár 30-50% jobb konverzió)
- **Professzionális megjelenés**: Versenyelőny a helyi piacon a modern, mobilbarát megoldással

---

## 🎯 Javasolt Megoldás Összetevői

### 1. Konverzió-központú Landing Page | 180 000 Ft

**Mit tartalmaz:**
- Egyoldalas, konverzióra optimalizált bemutatkozó oldal
- Mobilra optimalizált design (responsive)
- Tiszta CTA (Call-to-Action) gombok
- Kapcsolatfelvételi űrlap prominens elhelyezéssel
- Gyors betöltési idő
- Alapvető SEO optimalizálás

**Üzleti előny:** Az első benyomás számít - a professzionális landing page akár 3-5x több érdeklődőt generálhat.

---

### 2. Autókatalógus Rendszer | 320 000 Ft

**Mit tartalmaz:**
- Könnyen kezelhető járműadatbázis
- Haladó szűrési lehetőségek:
  - Márka, modell, évjárat
  - Ártartomány
  - Üzemanyag típus
  - Kilometerállás
  - Egyéb paraméterek
- Részletes járműadatok és képgaléria
- Érdeklődési űrlap minden járműnél
- Adminisztrációs felület egyszerű kezeléshez

**Üzleti előny:** Az ügyfelek 24/7 böngészhetik a készletet, ami jelentősen növeli az eladási lehetőségeket és csökkenti az értékesítési időt.

---

### 3. Domain & Tárhely Beállítás | 25 000 Ft (egyszeri) + 35 000 Ft/év megújítás

**Mit tartalmaz:**
- Egyedi domain regisztráció (pl. autozeno.hu)
- 1 év prémium tárhely
- SSL tanúsítvány (HTTPS - biztonság + SEO)
- E-mail címek beállítása
- DNS konfiguráció
- Kezdeti beállítás és konfiguráció

**Üzleti előny:** Professzionális megjelenés, biztonságos kapcsolat, jobb pozíció a keresőkben.

---

### 4. Havi Műszaki Karbantartás | 35 000 Ft/hó

**Mit tartalmaz:**
- WordPress és bővítmények rendszeres frissítése
- Biztonsági mentések (heti)
- Biztonsági monitoring és védelem
- Kisebb tartalmi módosítások (max. 2 óra/hó)
- Technikai támogatás e-mailben (24-48 órás válaszidő)
- Üzemidő monitoring
- Teljesítmény optimalizálás

**Üzleti előny:** Nyugodt működés, védelem a támadások ellen, folyamatos frissítések - Ön a vállalkozására koncentrálhat.

---

## 💰 Árazási Összefoglaló

| Szolgáltatás | Egyszeri költség | Havi költség | Éves költség |
|--------------|------------------|--------------|---------------|
| **Landing Page** | 180 000 Ft | - | - |
| **Autókatalógus Rendszer** | 320 000 Ft | - | - |
| **Domain & Tárhely (1. év)** | 25 000 Ft | - | - |
| **Havi Karbantartás (12 hó)** | - | 35 000 Ft | 420 000 Ft |
| **ÖSSZESEN (1. év)** | **525 000 Ft** | **35 000 Ft** | **945 000 Ft** |

**Megjegyzés:** A 2. évtől csak a havi karbantartás (420 000 Ft/év) és a domain megújítás (35 000 Ft/év) merül fel költségként, összesen: **455 000 Ft/év**.

---

## 📊 ROI Kalkuláció (Példa)

**Feltételezések:**
- Jelenlegi havi érdeklődések: 10 fő
- Konverziós ráta javulás: +50% (15 fő/hó)
- Átlagos eladási ár: 3 000 000 Ft
- Átlagos haszon: 10% = 300 000 Ft/autó
- Havi extra értékesítés: +1-2 autó

**Eredmény:**
- **Extra bevétel havonta:** 300 000 - 600 000 Ft
- **Beruházás megtérülése:** 2-4 hónap alatt
- **Éves extra nyereség:** 2 400 000 - 4 800 000 Ft

**A weboldal költsége így nem kiadás, hanem befektetés, amely sokszorosan megtérül.**

---`,
    
    conclusion: `## Összegzés

**Az AutoZeno számára egy professzionális online megoldás nem költség, hanem befektetés.** Minden hónapban több tucat potenciális vásárló éri el weboldalát, akik egyébként a versenytársaknál kötnek ki.

**Ajánlatunk előnyei:**
- ✅ Kulcsrakész megoldás – nem kell technikai tudás
- ✅ Mobilbarát és SEO-optimalizált
- ✅ Folyamatos támogatás és karbantartás
- ✅ Átlátható árazás, nincs rejtett költség
- ✅ 30 napos garanciális támogatás

**Kérdés esetén keressen bizalommal!**

Segítünk az AutoZeno online jelenlétének kiépítésében és a folyamatos növekedésben.`,

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

1. **Tervezés & Design**: 1-2 hét
2. **Fejlesztés**: 2-3 hét
3. **Tesztelés & Finomhangolás**: 1 hét
4. **Átadás & Képzés**: 1 hét

**Teljes átfutási idő: 4-6 hét**

### Mit tartalmaz a havi karbantartás?

- WordPress és bővítmények frissítése
- Biztonsági mentések (heti)
- Biztonsági figyelés és védelem
- Kisebb tartalmi módosítások (max. 2 óra/hó)
- Technikai támogatás e-mailben
- Üzemidő monitoring`
  }
};
