
import { servicePackages, formatPrice, serviceDefinitions } from '../data/services';
import { Package, Star } from 'lucide-react';

interface PackagesProps {
  pricingVersion: 'premium' | 'standard' | 'basic';
  onSelectPackage: (serviceIds: string[]) => void;
}

export default function Packages({ pricingVersion, onSelectPackage }: PackagesProps) {
  const getServiceName = (serviceId: string): string => {
    const service = serviceDefinitions.find(s => s.id === serviceId);
    return service?.name || serviceId;
  };

  return (
    <div className="mb-8 pb-8 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Package className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          Előre összeállított csomagok
        </h2>
      </div>

      <p className="text-gray-600 mb-6">
        Válasszon előre összeállított csomagjaink közül, amelyek a leggyakoribb igényeket 
        fedik le kedvezményes áron.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {servicePackages.map((pkg, index) => {
          const price = pkg.prices[pricingVersion];
          const discountedPrice = price * (1 - pkg.discount / 100);

          return (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-blue-100 text-sm">{pkg.description}</p>
                
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{formatPrice(discountedPrice)}</span>
                  <span className="text-blue-200 line-through text-sm">{formatPrice(price)}</span>
                </div>
                
                <div className="mt-2 inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  {pkg.discount}% megtakarítás
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Tartalmazza:</h4>
                <ul className="space-y-2 mb-6">
                  {pkg.services.map((serviceId, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{getServiceName(serviceId)}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPackage(pkg.services)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Csomag kiválasztása
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-blue-800">Tipp:</span> A csomagok kiválasztása 
          automatikusan bejelöli a bennük foglalt szolgáltatásokat. Ezt követően szabadon 
          módosíthatja a kiválasztást egyedi igényei szerint.
        </p>
      </div>
    </div>
  );
}
