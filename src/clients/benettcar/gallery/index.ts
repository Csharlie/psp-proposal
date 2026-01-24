import { GalleryImage } from '../../../types';

/**
 * Benett Car Business látványtervek
 * 
 * Használat:
 * 1. Tedd a képeket ebbe a mappába (pl. benettcar-desktop.png, benettcar-mobile.png)
 * 2. Importáld a képeket: import desktopMockup from './benettcar-desktop.png'
 * 3. Add hozzá a galleryImages tömbhöz
 */

// Importáld ide a képeket:
import desktopMockup from './benettcar-desktop.png';
import mobileMockup from './benettcar-mobile.png';

export const galleryImages: GalleryImage[] = [
  {
    url: desktopMockup,
    title: 'Desktop Mockup',
    description: 'Benett Car Business weboldal - Desktop nézet'
  },
  {
    url: mobileMockup,
    title: 'Mobile Mockup',
    description: 'Benett Car Business weboldal - Mobil nézet'
  }
];
