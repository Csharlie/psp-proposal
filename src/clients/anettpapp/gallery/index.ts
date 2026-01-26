import { GalleryImage } from '../../../types';

/**
 * Papp Anett látványtervek
 * 
 * Használat:
 * 1. Tedd a képeket ebbe a mappába (pl. home-desktop.jpg, products.png)
 * 2. Importáld a képeket: import homeDesktop from './home-desktop.jpg'
 * 3. Add hozzá a galleryImages tömbhöz
 */

// Importáld ide a képeket:
import desktopConcept from './anett-papp-desktop.png';
import mobileConcept from './anett-papp-mobile.png';

export const galleryImages: GalleryImage[] = [
  {
    url: desktopConcept,
    title: 'Desktop Concept',
    description: 'Papp Anett weboldal - Asztali nézet'
  },
  {
    url: mobileConcept,
    title: 'Mobile Concept',
    description: 'Papp Anett weboldal - Mobil nézet'
  }
];
