import { ServiceItem } from '../types';

interface PricingSummaryProps {
  services: ServiceItem[];
}

export default function PricingSummary({ services }: PricingSummaryProps) {
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
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 print:break-inside-avoid">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Árazási Összesítő</h2>
      <div className="space-y-3">
        {oneTimeTotal > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Egyszeri költségek:</span>
            <span className="font-semibold">{formatPrice(oneTimeTotal)}</span>
          </div>
        )}
        {yearlyTotal > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Éves díjak (1. év):</span>
            <span className="font-semibold">{formatPrice(yearlyTotal)}</span>
          </div>
        )}
        {monthlyTotal > 0 && (
          <div className="flex justify-between text-gray-700 pb-3 border-b">
            <span>Havi díjak:</span>
            <span className="font-semibold">{formatPrice(monthlyTotal)} / hó</span>
          </div>
        )}
        <div className="flex justify-between text-gray-700">
          <span>Összesen (nettó):</span>
          <span className="font-semibold">{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>ÁFA (27%):</span>
          <span className="font-semibold">{formatPrice(vatAmount)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t pt-3 text-blue-600">
          <span>Összesen (bruttó):</span>
          <span>{formatPrice(totalWithVat)}</span>
        </div>
        {monthlyTotal > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-300">
            <div className="flex justify-between text-sm text-gray-600">
              <span>+ Havi díj (bruttó):</span>
              <span className="font-semibold">{formatPrice(monthlyTotal * 1.27)} / hó</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
