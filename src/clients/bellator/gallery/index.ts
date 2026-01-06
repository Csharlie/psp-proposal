import { GalleryImage } from '../../../types';

/**
 * Bellator látványtervek
 * 
 * Használat:
 * 1. Tedd a képeket ebbe a mappába (pl. home-desktop.jpg, products.png)
 * 2. Importáld a képeket: import homeDesktop from './home-desktop.jpg'
 * 3. Add hozzá a galleryImages tömbhöz
 */

// Importáld ide a képeket:
import desktopMockup from './bellator-mockup-desktop.png';
import mobileMockup from './bellator-mockup-mobile.png';

export const galleryImages: GalleryImage[] = [
  {
    url: desktopMockup,
    title: 'Desktop Mockup',
    description: 'Bellator Gym weboldal - Desktop nézet'
  },
  {
    url: mobileMockup,
    title: 'Mobile Mockup',
    description: 'Bellator Gym weboldal - Mobil nézet'
  }
];
