import { Layers } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
      <div className="mb-4">
        <p className="font-semibold text-gray-900 mb-2">PSPro - Pesardy Péter E.V.</p>
        <p>Professzionális webfejlesztés és grafikai tervezés</p>
      </div>
      
      <div className="space-y-1 mb-4">
        <p>Email: hello@pspro.hu | Telefon: +36 30 123 4567</p>
        <p>Székhely: Budapest, Magyarország</p>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p>&copy; {currentYear} PSPro. Minden jog fenntartva.</p>
        <p className="mt-2 text-xs text-gray-500">
          Ez az árajánlat bizalmas információkat tartalmaz, kizárólag a címzett részére készült.
        </p>
      </div>
    </footer>
  );
}
