import { Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 pt-6 mt-8 print:pt-4 print:mt-6">
      <div className="flex items-start justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
            <p className="font-medium text-gray-900">PSPro</p>
          </div>
          <p className="text-xs text-gray-600">Peter Sardy Productions</p>
          <p className="text-xs text-gray-500 mt-1">
            Professzionális grafika és webfejlesztés
          </p>
        </div>
        <div className="text-right text-xs text-gray-600">
          <p className="font-medium text-gray-900 mb-1">Kapcsolat</p>
          <p>info@pspro.hu</p>
          <p>+36 30 123 4567</p>
          <p className="mt-2 text-gray-500">Budapest, Magyarország</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center">
        <p>© {new Date().getFullYear()} PSPro – Peter Sardy Productions. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}
