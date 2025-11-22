
import { CreditCard } from 'lucide-react';

export default function PaymentTerms() {
  return (
    <div className="mb-8 pb-8 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          Fizetési feltételek
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Fizetési ütemezés</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Előleg - 20%</p>
                <p className="text-sm text-gray-600">A megrendelés visszaigazolása után</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Végösszeg - 80%</p>
                <p className="text-sm text-gray-600">A projekt sikeres átadása után</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Fizetési módok</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Banki átutalás (elsődleges)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Fizetési határidő: 8 nap</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Számla kiállítása elektronikusan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>ÁFA: 27% (tartalmazza a végösszeget)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-800">Kedvezmény:</span> Teljes összeg 
          előre történő kifizetése esetén 5% kedvezményt biztosítunk. Visszatérő ügyfelek 
          számára egyedi kedvezményes árazást kínálunk.
        </p>
      </div>
    </div>
  );
}
