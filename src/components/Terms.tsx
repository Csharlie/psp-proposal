interface TermsProps {
  customText?: string;
}

import { FileCheck } from 'lucide-react';

export default function Terms({ customText }: TermsProps) {
  const terms = [
    {
      title: 'Érvényesség',
      content: 'Az árajánlat kiállítástól számított 30 napig érvényes. Ezt követően az árak és feltételek változhatnak.',
    },
    {
      title: 'Projekt indítás',
      content: 'A projekt megkezdése az előleg beérkezése és a szerződés aláírása után történik.',
    },
    {
      title: 'Tartalom biztosítása',
      content: 'A megrendelő köteles a szükséges tartalmakat (szövegek, képek, logók) időben biztosítani. Késedelem esetén a határidő módosulhat.',
    },
    {
      title: 'Módosítások',
      content: 'A projekt során 2 körös módosítási lehetőség biztosított. További módosítások óradíj alapján kerülnek számlázásra (15.000 Ft/óra).',
    },
    {
      title: 'Szerzői jogok',
      content: 'A projekt átadása után a szerzői jogok a megrendelőre szállnak. A forráskód és design fájlok a megrendelő tulajdonába kerülnek.',
    },
    {
      title: 'Garancia',
      content: 'A projekt átadásától számított 30 napig ingyenes hibajavítást biztosítunk. Ez nem terjed ki az új funkciókra vagy módosításokra.',
    },
    {
      title: 'Felelősség',
      content: 'A vállalkozó nem vállal felelősséget a megrendelő által biztosított tartalmak jogszerűségéért és a harmadik féltől származó szolgáltatásokért.',
    },
    {
      title: 'Lemondás',
      content: 'A projekt indítása után lemondás esetén a már elvégzett munka arányos díja számlázásra kerül, minimum az előleg összege.',
    },
  ];

  return (
    <div className="mb-8 pb-8 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <FileCheck className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          Általános szerződési feltételek
        </h2>
      </div>

      <p className="text-gray-600 mb-6">
        Az alábbi feltételek minden projektre érvényesek. A részletes szerződési feltételeket 
        a megrendelés visszaigazolásakor rögzítjük.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {terms.map((term, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                {index + 1}
              </span>
              {term.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{term.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-blue-800">Megjegyzés:</span> A teljes körű 
          Általános Szerződési Feltételek dokumentumot a szerződéskötéskor bocsátjuk 
          rendelkezésre. Kérdés esetén állunk rendelkezésére.
        </p>
      </div>
    </div>
  );
}