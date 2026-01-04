import { ServiceItem } from '../types';

interface PricingSummaryProps {
  services: ServiceItem[];
  showTotal?: boolean;
}

export default function PricingSummary({ services, showTotal = false }: PricingSummaryProps) {
  // Szolgáltatások szétválasztása díjtípus szerint
  const oneTimeServices = services.filter(s => s.billingType === 'one-time');
  const monthlyServices = services.filter(s => s.billingType === 'monthly');
  const yearlyServices = services.filter(s => s.billingType === 'yearly');

  const oneTimeTotal = oneTimeServices.reduce((sum, s) => sum + s.price, 0);
  const monthlyTotal = monthlyServices.reduce((sum, s) => sum + s.price, 0);
  const yearlyTotal = yearlyServices.reduce((sum, s) => sum + s.price, 0);

  // Teljes egyszeri költség (egyszeri + éves díjak az első évre)
  const totalPrice = oneTimeTotal + yearlyTotal;
  const vatAmount = totalPrice * 0.27;
  const totalWithVat = totalPrice + vatAmount;

  const formatPrice = (price: number): string => {
    return price.toLocaleString('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Árazási Összesítő</h2>
      
      <div className="space-y-4">
        {/* Egyszeri költségek blokk */}
        {oneTimeTotal > 0 && (
          <div className="bg-gradient-to-br  from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Egyszeri költségek</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Nettó:</span>
                <span className="font-semibold">{formatPrice(oneTimeTotal)}</span>
              </div>
              {showTotal && (
                <div className="flex justify-between text-gray-700">
                  <span>ÁFA (27%):</span>
                  <span className="font-semibold">{formatPrice(oneTimeTotal * 0.27)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold border-t pt-3 text-blue-600">
                <span>Bruttó:</span>
                <span>{formatPrice(oneTimeTotal * 1.27)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Havi díjak blokk */}
        {monthlyTotal > 0 && (
          <div className="bg-gradient-to-br  from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Havi díjak</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Nettó / hó:</span>
                <span className="font-semibold">{formatPrice(monthlyTotal)}</span>
              </div>
              {showTotal && (
                <div className="flex justify-between text-gray-700">
                  <span>ÁFA (27%):</span>
                  <span className="font-semibold">{formatPrice(monthlyTotal * 0.27)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold border-t pt-3 text-blue-600">
                <span>Bruttó / hó:</span>
                <span>{formatPrice(monthlyTotal * 1.27)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Éves díjak blokk */}
        {yearlyTotal > 0 && (
          <div className="bg-gradient-to-br  from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Éves díjak</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Nettó / év:</span>
                <span className="font-semibold">{formatPrice(yearlyTotal)}</span>
              </div>
              {showTotal && (
                <div className="flex justify-between text-gray-700">
                  <span>ÁFA (27%):</span>
                  <span className="font-semibold">{formatPrice(yearlyTotal * 0.27)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold border-t pt-3 text-blue-600">
                <span>Bruttó / év:</span>
                <span>{formatPrice(yearlyTotal * 1.27)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
