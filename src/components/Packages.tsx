import { packages } from '../data/services';
import { ServiceItem } from '../types';
import { Check } from 'lucide-react';

interface PackagesProps {
  allServices: ServiceItem[];
  onSelectPackage: (serviceIds: string[]) => void;
}

export default function Packages({ allServices, onSelectPackage }: PackagesProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getServiceName = (serviceId: string) => {
    return allServices.find(s => s.id === serviceId)?.name || serviceId;
  };

  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Csomagajánlatok
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Előre összeállított csomagok kedvezményes áron
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-4">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="border-2 border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-all print:break-inside-avoid"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {pkg.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {pkg.description}
            </p>
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-2xl font-medium text-gray-900">
                {formatPrice(pkg.price)}
              </p>
              <p className="text-xs text-gray-500">bruttó ár</p>
            </div>
            <ul className="space-y-2 mb-6">
              {pkg.services.map((serviceId) => (
                <li key={serviceId} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{getServiceName(serviceId)}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onSelectPackage(pkg.services)}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium print:hidden"
            >
              Csomag választása
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
