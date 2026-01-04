import { ServiceItem } from '../types';

interface PaymentBreakdownProps {
  services: ServiceItem[];
  showDetails?: boolean;
}

export default function PaymentBreakdown({ services, showDetails = false }: PaymentBreakdownProps) {
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

  // Előleg (20%) és végösszeg (80%)
  const advancePaymentNet = totalPrice * 0.20;
  const advancePaymentVat = vatAmount * 0.20;
  const advancePayment = totalWithVat * 0.20;
  
  const finalPaymentNet = totalPrice * 0.80;
  const finalPaymentVat = vatAmount * 0.80;
  const finalPayment = totalWithVat * 0.80;

  const formatPrice = (price: number): string => {
    return price.toLocaleString('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  if (services.length === 0 || totalWithVat === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-6 rounded-lg border border-gray-300">
        <h3 className="font-bold text-gray-900 mb-6 text-xl">Összesített beruházás és fizetési ütemezés</h3>
        
        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Fizetési ütemezés</h4>
        <div className="space-y-4">
          {/* Előleg */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <span className="font-semibold text-gray-900">Előleg (20%)</span>
            </div>
            <div className="ml-10 space-y-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Nettó:</span>
                <span className="font-semibold">{formatPrice(advancePaymentNet)}</span>
              </div>
              {showDetails && (
                <div className="flex justify-between text-gray-700">
                  <span>ÁFA (27%):</span>
                  <span className="font-semibold">{formatPrice(advancePaymentVat)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-blue-600 border-t pt-2">
                <span>Bruttó:</span>
                <span>{formatPrice(advancePayment)}</span>
              </div>
            </div>
          </div>

          {/* Végösszeg */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <span className="font-semibold text-gray-900">Végösszeg (80%)</span>
            </div>
            <div className="ml-10 space-y-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Nettó:</span>
                <span className="font-semibold">{formatPrice(finalPaymentNet)}</span>
              </div>
              {showDetails && (
                <div className="flex justify-between text-gray-700">
                  <span>ÁFA (27%):</span>
                  <span className="font-semibold">{formatPrice(finalPaymentVat)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-blue-600 border-t pt-2">
                <span>Bruttó:</span>
                <span>{formatPrice(finalPayment)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Összesített összegek */}
        <div className="mt-6 pt-6 border-t-2 border-gray-300 space-y-3">
          {/* Havi díjak */}
          {monthlyTotal > 0 && (
            <>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">Összesített nettó / hó:</span>
                <span className="font-semibold">{formatPrice(monthlyTotal)}</span>
              </div>
              {showDetails && (
                <div className="flex justify-between text-gray-700">
                  <span className="font-semibold">ÁFA (27%):</span>
                  <span className="font-semibold">{formatPrice(monthlyTotal * 0.27)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-blue-600 pb-3 border-b-2 border-gray-300">
                <span>Összesített bruttó / hó:</span>
                <span>{formatPrice(monthlyTotal * 1.27)}</span>
              </div>
            </>
          )}
          
          {/* Egyszeri + éves */}
          <div className="flex justify-between text-gray-700 pt-3">
            <span className="font-semibold">Összesített nettó / egyszeri + éves:</span>
            <span className="font-semibold">{formatPrice(totalPrice)}</span>
          </div>
          {showDetails && (
            <div className="flex justify-between text-gray-700">
              <span className="font-semibold">ÁFA (27%):</span>
              <span className="font-semibold">{formatPrice(vatAmount)}</span>
            </div>
          )}
          <div className="flex justify-between text-2xl font-bold text-gray-900 border-t-2 pt-3">
            <span>Összesített bruttó / egyszeri + éves:</span>
            <span>{formatPrice(totalWithVat)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
