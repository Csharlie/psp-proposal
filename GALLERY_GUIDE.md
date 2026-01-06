# Látványtervek Gallery - Használati útmutató

## Képek hozzáadása kliensspecifikusan

Minden kliensnek van egy saját `gallery` mappája a konfigurációs mappájában:

```
src/clients/
├── autozeno/
│   ├── config.ts
│   └── gallery/
│       ├── index.ts
│       └── [ide jönnek a képek]
├── bellator/
│   ├── config.ts
│   └── gallery/
│       ├── index.ts
│       └── [ide jönnek a képek]
├── pelda-kft/
│   └── ...
└── startup-xyz/
    └── ...
```

## Képek feltöltése - Lépésről lépésre

### 1. Másold be a képeket

Másold a látványterv képeket a kliens `gallery` mappájába. Például:

```
src/clients/autozeno/gallery/
├── index.ts
├── home-desktop.jpg
├── home-mobile.jpg
├── car-catalog.jpg
└── contact-page.jpg
```

### 2. Frissítsd a gallery/index.ts fájlt

Nyisd meg a `gallery/index.ts` fájlt és importáld a képeket:

```typescript
import { GalleryImage } from '../../../types';

// Képek importálása
import homeDesktop from './home-desktop.jpg';
import homeMobile from './home-mobile.jpg';
import carCatalog from './car-catalog.jpg';
import contactPage from './contact-page.jpg';

// Galéria konfiguráció
export const galleryImages: GalleryImage[] = [
  {
    url: homeDesktop,
    title: 'Kezdőlap - Desktop nézet',
    description: 'Reszponzív landing page terv desktop nézetben'
  },
  {
    url: homeMobile,
    title: 'Kezdőlap - Mobil nézet',
    description: 'Mobilra optimalizált kezdőlap'
  },
  {
    url: carCatalog,
    title: 'Autókatalógus',
    description: 'Szűrők és részletes járműadatok'
  },
  {
    url: contactPage,
    title: 'Kapcsolat oldal',
    description: 'Kapcsolatfelvételi űrlap és térkép'
  }
];
```

### 3. Kész!

A galéria automatikusan megjelenik az ajánlatban a projekt összefoglaló után, ha van legalább 1 kép.

## Galéria funkciók

- ✅ Grid elrendezés (2-4 oszlop reszponzíven)
- ✅ Lightbox teljes képernyős nézettel
- ✅ Navigáció nyilakkal (egér és billentyűzet)
- ✅ Képek letöltése
- ✅ Billentyűzet támogatás (Esc, nyilak)
- ✅ Nyomtatáskor nem jelenik meg

## Megjegyzések

- A képeknek `.jpg`, `.png`, vagy `.webp` formátumúaknak kell lenniük
- Javasolt képméret: 1920x1080 vagy hasonló arány
- A `title` és `description` mezők opcionálisak
- Ha nincs kép a tömbben, a galéria nem jelenik meg
