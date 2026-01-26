
import { ServiceItem } from '../types';

interface ServicesListProps {
  services: ServiceItem[];
  onToggle?: (serviceId: string) => void;
  interactive?: boolean;
  title?: string;
  showDescription?: boolean;
  printable?: boolean;
}

export default function ServicesList({ services, onToggle, interactive, title = 'Elérhető szolgáltatások', showDescription = true, printable = false }: ServicesListProps) {
  const VAT_RATE = 0.27;

  // Szolgáltatások melletti bruttó árak kiszámítása (nettó + ÁFA) 
  const calculatePrices = (netPrice: number) => {
    const vat = netPrice * VAT_RATE;
    const gross = netPrice + vat;
    return { vat, gross };
  };

  // Szolgáltatások csoportosítása kategóriák szerint
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceItem[]>);

  // Rendereljük a szolgáltatást
  const renderService = (service: ServiceItem) => (
    <div
      key={service.id}
      onClick={() => interactive !== false && service.selectable !== false && onToggle?.(service.id)}
      className={`
        p-5 rounded-lg border-2 transition-all
        ${interactive === false || service.selectable === false ? 'cursor-default' : 'cursor-pointer'}
        ${
          service.selectable === false
            ? printable ? 'border-gray-400 bg-gray-100' : 'border-gray-400 bg-gray-100 shadow-sm'
            : service.selected
            ? printable ? 'border-blue-500 bg-blue-50' : 'border-blue-500 bg-blue-50 shadow-md'
            : printable ? 'border-gray-200 bg-white' : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
        }
      `}
    >
      <div className="flex items-start gap-3">
        {!printable && (
          <div className="flex-shrink-0 mt-1">
            {service.selected ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${service.selectable === false ? 'text-gray-500' : 'text-blue-600'}`}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            )}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-gray-900 leading-tight">
              {service.name}
            </h4>
            <span className={`
              text-sm font-bold whitespace-nowrap flex-shrink-0
              ${service.selectable === false ? 'text-gray-600' : service.selected ? 'text-blue-600' : 'text-gray-700'}
            `}>
              {service.price} Ft{service.billingPeriod && service.billingType !== 'one-time' ? `/${service.billingPeriod === 'havi' ? 'hó' : 'év'}` : ''}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {title}
      </h2>

      {interactive !== false && showDescription && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 text-sm">
            Válassza ki a projekthez szükséges szolgáltatásokat. Kattintson a szolgáltatásra 
            a kiválasztáshoz vagy eltávolításhoz.
          </p>
        </div>
      )}

      {Object.entries(groupedServices).map(([category, categoryServices]) => {
        // Domain & Tárhely szolgáltatások szétválasztása
        const oneTimeHosting = categoryServices.find(s => s.id === 'domain-hosting');
        const monthlyHosting = categoryServices.find(s => s.id === 'domain-hosting-monthly');
        const yearlyHosting = categoryServices.find(s => s.id === 'domain-hosting-yearly');
        const otherServices = categoryServices.filter(s => 
          s.id !== 'domain-hosting' && 
          s.id !== 'domain-hosting-monthly' && 
          s.id !== 'domain-hosting-yearly'
        );

        return (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-blue-200">
              {category}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Domain & Tárhely speciális kezelés */}
              {oneTimeHosting && (
                <>
                  {renderService(oneTimeHosting)}
                  {(monthlyHosting || yearlyHosting) && (
                    <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
                      {yearlyHosting && renderService(yearlyHosting)}
                      {monthlyHosting && renderService(monthlyHosting)}
                    </div>
                  )}
                </>
              )}
              
              {/* Ha nincs oneTimeHosting (mert külön szekcióban van), akkor is megjelenítjük a havi/éves tárhely szolgáltatásokat */}
              {!oneTimeHosting && (monthlyHosting || yearlyHosting) && (
                <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
                  {yearlyHosting && renderService(yearlyHosting)}
                  {monthlyHosting && renderService(monthlyHosting)}
                </div>
              )}
              
              {/* Többi szolgáltatás */}
              {otherServices.map((service) => renderService(service))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
