
import { ServiceItem } from '../types';

interface ServicesListProps {
  services: ServiceItem[];
  onToggle?: (id: string) => void;
  interactive?: boolean;
}

export default function ServicesList({ services, onToggle, interactive = true }: ServicesListProps) {
  const VAT_RATE = 0.27;

  const calculatePrices = (netPrice: number) => {
    const vat = netPrice * VAT_RATE;
    const gross = netPrice + vat;
    return { vat, gross };
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      maximumFractionDigits: 0
    }).format(price);
  };

  const selectedServices = services.filter(s => s.selected);
  const hasSelected = selectedServices.length > 0;

  const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const totalVat = total * VAT_RATE;
  const totalGross = total + totalVat;

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceItem[]>);

  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Szolgáltatások
      </h2>

      {Object.entries(groupedServices).map(([category, categoryServices]) => (
        <div key={category} className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-3">
            {category}
          </h3>
          <div className="space-y-2">
            {categoryServices.map(service => {
              const { vat, gross } = calculatePrices(service.price);
              return (
                <div
                  key={service.id}
                  className={`border rounded-lg p-4 transition-all print:break-inside-avoid ${
                    service.selected
                      ? 'border-gray-800 bg-gray-50'
                      : 'border-gray-200 bg-white'
                  } ${interactive ? 'hover:border-gray-400 cursor-pointer' : ''}`}
                  onClick={() => interactive && onToggle?.(service.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        {interactive && (
                          <input
                            type="checkbox"
                            checked={service.selected}
                            onChange={() => onToggle?.(service.id)}
                            className="mt-1 w-4 h-4 print:hidden"
                            onClick={(e) => e.stopPropagation()}
                          />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm text-gray-500">Nettó</p>
                      <p className="text-base font-medium text-gray-900">
                        {formatPrice(service.price)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        ÁFA: {formatPrice(vat)}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {formatPrice(gross)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {hasSelected && (
        <div className="mt-6 border-t-2 border-gray-300 pt-4">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Összesen nettó:</span>
            <span className="font-medium">{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>ÁFA (27%):</span>
            <span className="font-medium">{formatPrice(totalVat)}</span>
          </div>
          <div className="flex justify-between items-center text-lg font-medium text-gray-900">
            <span>Végösszeg bruttó:</span>
            <span>{formatPrice(totalGross)}</span>
          </div>
        </div>
      )}
    </section>
  );
}
