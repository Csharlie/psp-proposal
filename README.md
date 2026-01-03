# PSP Proposal - Professzionális Árajánlat Rendszer

## 📋 Áttekintés

A PSP Proposal egy modern, professzionális árajánlat készítő rendszer webfejlesztési és digitális szolgáltatásokhoz. A rendszer lehetővé teszi személyre szabott, nyomtatható árajánlatok gyors és egyszerű létrehozását, különböző ügyfelek és projektek számára.

## ✨ Főbb Funkciók

### Felhasználói Szempontból

#### 🎯 Ügyfélalapú Árajánlatok
- **Többféle ügyfélprofil kezelése**: Minden ügyfél saját konfigurációval rendelkezik
- **Személyre szabott tartalom**: Ügyfélspecifikus bevezető szövegek, projekt leírások
- **Automatikus adatkezelés**: Ügyfél adatok (név, cég, elérhetőségek) automatikus betöltése

#### 💰 Rugalmas Árképzés
- **Három árszint**: Premium, Standard és Basic csomagok
- **Egyedi árak beállítása**: Ügyfélspecifikus kedvezmények alkalmazása
- **Különböző számlázási típusok**: Egyszeri, havi és éves díjak támogatása
- **Automatikus ÁFA kalkuláció**: 27%-os ÁFA automatikus számítása

#### 🛠️ Szolgáltatás Menedzsment
- **Interaktív szolgáltatás választó**: Egyszerű ki/be kapcsolás a szolgáltatásokhoz
- **Kategorizált szolgáltatások**: Áttekinthető csoportosítás (Design, Fejlesztés, Marketing, stb.)
- **Kölcsönösen kizáró opciók**: Bizonyos szolgáltatások (pl. havi/éves tárhely) intelligens kezelése
- **Részletes leírások**: Minden szolgáltatáshoz tartozó pontos ismertető

#### 📦 Csomagajánlatok
- **Előre összeállított csomagok**: Gyakori szolgáltatás kombinációk
- **Kedvezményes árak**: Csomagokban elérhető előnyök
- **Testreszabható tartalom**: Minden csomag személyre szabható

#### 📄 Professzionális Megjelenés
- **Modern, tiszta design**: Tailwind CSS alapú, reszponzív felület
- **Nyomtatásra optimalizált**: Tökéletes PDF export lehetőség
- **QR kód integráció**: Online verzió gyors elérése
- **Márka identitás**: Professzionális branding elemek

#### 📊 Átlátható Információk
- **Projekt részletek**: Világos projekt leírás és célkitűzések
- **Időtervezés**: Becsült projekt timeline megjelenítése
- **Szállítandók listája**: Konkrét deliverables felsorolása
- **Fizetési feltételek**: Átlátható fizetési ütemezés

#### 🎨 Testreszabható Tartalom
- **Markdown támogatás**: Formázott szövegek beágyazása
- **Egyedi szekciók**: Bevezető, összegzés, fizetési feltételek személyre szabása
- **Rugalmas struktúra**: Igény szerinti tartalom beillesztés

## 🔧 Technikai Háttér

### Technológiai Stack

#### Frontend
- **React 18.3**: Modern UI komponensek
- **TypeScript**: Type-safe fejlesztés
- **Vite 5.4**: Gyors build eszköz és dev server
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Lucide React**: Modern ikon library

#### Speciális Könyvtárak
- **react-to-print**: Nyomtatás funkció
- **qrcode.react**: QR kód generálás
- **react-markdown**: Markdown renderelés
- **Supabase**: Jövőbeli backend integráció előkészítve

#### Fejlesztői Eszközök
- **ESLint**: Kódminőség ellenőrzés
- **PostCSS & Autoprefixer**: CSS feldolgozás
- **TypeScript ESLint**: TypeScript linting

### Architekturális Felépítés

#### Többrétegű Architektúra

```
┌─────────────────────────────────────┐
│        UI Components Layer          │
│  (QuoteHeader, ServicesList, etc.)  │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│      Service & Data Layer           │
│   (dataService, serviceHelpers)     │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│      Configuration Layer            │
│  (Client Configs, Pricing, Data)    │
└─────────────────────────────────────┘
```

#### Data Service Adapter Pattern
A rendszer adapter mintát használ, amely lehetővé teszi különböző adatforrások használatát:
- **LocalDataProvider**: Helyi konfigurációs fájlok (jelenleg aktív)
- **WordPressDataProvider**: WordPress REST API integráció (előkészítve)
- Könnyen bővíthető további adatforrásokkal

## 🚀 Telepítés és Használat

### Előfeltételek

- **Node.js**: 16.x vagy újabb verzió
- **npm**: 7.x vagy újabb (vagy yarn/pnpm)
- **Git**: Verziókezeléshez

### Telepítési Lépések

1. **Repository klónozása**
```bash
git clone <repository-url>
cd psp-proposal
```

2. **Függőségek telepítése**
```bash
npm install
```

3. **Fejlesztői szerver indítása**
```bash
npm run dev
```

A rendszer elérhető lesz a `http://localhost:5173` címen.

4. **Production build készítése**
```bash
npm run build
```

A build eredménye a `dist/` mappában lesz.

5. **Production preview**
```bash
npm run preview
```

### További Parancsok

```bash
# TypeScript típusellenőrzés
npm run typecheck

# Kód linting
npm run lint
```

## 📁 Fájl Struktúra és Architektúra

### Főbb Könyvtárak

```
psp-proposal/
├── src/
│   ├── components/          # UI komponensek
│   │   ├── QuoteHeader.tsx       # Árajánlat fejléc
│   │   ├── ClientDetails.tsx     # Ügyfél adatok
│   │   ├── ServicesList.tsx      # Szolgáltatások lista
│   │   ├── PricingSummary.tsx    # Ár összesítő
│   │   ├── ProjectSummary.tsx    # Projekt összefoglaló
│   │   ├── Timeline.tsx          # Időtervezés
│   │   ├── Packages.tsx          # Csomag ajánlatok
│   │   ├── PaymentTerms.tsx      # Fizetési feltételek
│   │   ├── Terms.tsx             # Általános feltételek
│   │   ├── ContactSection.tsx    # Kapcsolat szekció
│   │   ├── Footer.tsx            # Lábléc
│   │   ├── PrintableQuote.tsx    # Nyomtatható verzió
│   │   └── CustomContent.tsx     # Egyedi tartalom
│   │
│   ├── clients/             # Ügyfél konfigurációk
│   │   ├── index.ts              # Config loader
│   │   ├── types.ts              # TypeScript típusok
│   │   ├── autozeno/
│   │   │   └── config.ts         # Autozeno konfiguráció
│   │   ├── pelda-kft/
│   │   │   └── config.ts         # Példa Kft. konfiguráció
│   │   └── startup-xyz/
│   │       └── config.ts         # Startup XYZ konfiguráció
│   │
│   ├── data/                # Alapadatok
│   │   ├── config.ts             # Globális konfiguráció
│   │   ├── pricing.ts            # Árképzési szintek
│   │   └── services.ts           # Szolgáltatások definíciója
│   │
│   ├── services/            # Üzleti logika
│   │   └── dataService.ts        # Adatkezelő service (Adapter)
│   │
│   ├── types/               # TypeScript típusdefiníciók
│   │   └── index.ts              # Központi típusok
│   │
│   ├── utils/               # Segéd funkciók
│   │   └── serviceHelpers.ts     # Szolgáltatás kalkulációk
│   │
│   ├── App.tsx              # Fő alkalmazás komponens
│   ├── main.tsx             # Belépési pont
│   └── index.css            # Globális stílusok
│
├── public/                  # Statikus fájlok
├── dist/                    # Build kimenet (generált)
│
├── vite.config.ts           # Vite konfiguráció
├── tsconfig.json            # TypeScript konfiguráció
├── tailwind.config.js       # Tailwind konfiguráció
├── postcss.config.js        # PostCSS konfiguráció
├── eslint.config.js         # ESLint konfiguráció
├── package.json             # Függőségek és scriptek
└── README.md                # Ez a fájl
```

### Komponens Architektúra

#### Prezentációs Komponensek
- **Felelősség**: Adatok megjelenítése
- **Jellemzők**: Props alapú, állapotmentes
- **Példák**: `QuoteHeader`, `ClientDetails`, `Footer`

#### Konténer Komponensek
- **Felelősség**: Adatkezelés és logika
- **Jellemzők**: Állapotmenedzsment, API hívások
- **Példa**: `App.tsx`

#### Utility Komponensek
- **Felelősség**: Újrafelhasználható funkciók
- **Jellemzők**: Generikus, testreszabható
- **Példák**: `CustomContent`, `PrintableQuote`

### Adatkezelés

#### Kliens Konfiguráció (`ClientConfig`)
Minden ügyfél rendelkezik saját konfigurációs fájllal:

```typescript
{
  client: {              // Ügyfél adatok
    name: string
    contact: string
    email: string
    phone: string
    address: string
  },
  project: {             // Projekt információk
    title: string
    description: string
    timeline: string | string[]
    deliverables: string[]
  },
  quote: {               // Árajánlat metaadatok
    id: string
    issueDate: string
    validityDays: number
  },
  selectedServices: string[]      // Kiválasztott szolgáltatások ID-k
  pricingVersion: 'premium' | 'standard' | 'basic'
  customPrices?: Record<string, number>   // Egyedi árak
  customTexts?: {                         // Egyedi szövegek
    introduction?: string
    conclusion?: string
    paymentTerms?: string
  }
}
```

#### Szolgáltatások (`ServiceItem`)
```typescript
{
  id: string                    // Egyedi azonosító
  name: string                  // Megjelenő név
  description: string           // Részletes leírás
  category: string              // Kategória
  price: number                 // Ár (Ft)
  selected: boolean             // Kiválasztva
  billingType: 'one-time' | 'monthly' | 'yearly'
  billingPeriod?: string        // Megjelenített számlázási periódus
}
```

#### Árképzési Szintek
A rendszer három árképzési szintet támogat:
- **Premium**: Legmagasabb szolgáltatási szint
- **Standard**: Közepes szint (alapértelmezett)
- **Basic**: Kezdő szint

### State Management

Az alkalmazás React useState hookokat használ:
- `pricingVersion`: Aktív árképzési szint
- `services`: Elérhető szolgáltatások listája
- `quoteInfo`: Árajánlat metaadatok
- `loading`: Betöltési állapot
- `error`: Hibaállapot

### Styling Megközelítés

- **Utility-first**: Tailwind CSS osztályok
- **Responsive**: Mobile-first design
- **Print-friendly**: Speciális print stílusok
- **Konzisztens**: Design rendszer követése

## 🎨 Testreszabás

### Új Ügyfél Hozzáadása

1. Hozz létre új mappát: `src/clients/uj-ugyfel/`
2. Hozz létre `config.ts` fájlt a mappában
3. Regisztráld az `src/clients/index.ts` fájlban
4. Módosítsd a `dataService.ts`-ben a `DEFAULT_CLIENT_KEY` értéket

### Új Szolgáltatás Hozzáadása

1. Nyisd meg: `src/data/services.ts`
2. Add hozzá az új szolgáltatást a megfelelő kategóriában
3. Állítsd be az árakat mindhárom árképzési szinten

### Branding Testreszabása

- **Színek**: `tailwind.config.js`
- **Logó/Grafika**: `src/components/QuoteHeader.tsx`
- **Footer**: `src/components/Footer.tsx`
- **Általános feltételek**: `src/components/Terms.tsx`

## 📝 Licenc

Lásd a `LICENSE` fájlt a részletekért.

---

**Készítette**: PSP Proposal Team  
**Utolsó frissítés**: 2026. január