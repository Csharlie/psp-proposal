import { ServiceItem } from '../types';
import { DEFAULT_VAT_RATE, formatVatLabel } from '../utils/vat';
import {
  DEFAULT_PAYMENT_SCHEDULE,
  PAYMENT_STAGE_TEXTS,
  PaymentSchedule,
  getPaymentStageNets,
} from '../utils/paymentSchedule';

interface PaymentBreakdownProps {
  services: ServiceItem[];
  showDetails?: boolean;
  showYearlyCosts?: boolean;
  vatRate?: number;
  paymentSchedule?: PaymentSchedule;
}

export default function PaymentBreakdown({ services, showDetails = false, showYearlyCosts = true, vatRate = DEFAULT_VAT_RATE, paymentSchedule = DEFAULT_PAYMENT_SCHEDULE }: PaymentBreakdownProps) {
  // Szolgáltatások szétválasztása díjtípus szerint
  const oneTimeServices = services.filter(s => s.billingType === 'one-time');
  const monthlyServices = services.filter(s => s.billingType === 'monthly');
  const yearlyServices = services.filter(s => s.billingType === 'yearly');

  const oneTimeTotal = oneTimeServices.reduce((sum, s) => sum + s.price, 0);
  const monthlyTotal = monthlyServices.reduce((sum, s) => sum + s.price, 0);
  const yearlyTotal = yearlyServices.reduce((sum, s) => sum + s.price, 0);

  // Teljes egyszeri költség (egyszeri + éves díjak az első évre)
  const totalPrice = oneTimeTotal + yearlyTotal;
  const vatAmount = totalPrice * vatRate;
  const totalWithVat = totalPrice + vatAmount;

  // Fizetési szakaszok (pl. előleg + végösszeg, vagy tárhely + fennmaradó összeg)
  const stageNets = getPaymentStageNets(paymentSchedule, services);
  const stages = PAYMENT_STAGE_TEXTS[paymentSchedule]
    .map((text, index) => ({ ...text, net: stageNets[index] }))
    .filter(stage => stage.net > 0);

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
          {stages.map((stage, index) => (
            <div key={stage.title} className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="font-semibold text-gray-900">{stage.title}</span>
              </div>
              <p className="ml-10 mb-3 text-sm text-gray-600">{stage.description}</p>
              <div className="ml-10 space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Nettó:</span>
                  <span className="font-semibold">{formatPrice(stage.net)}</span>
                </div>
                {showDetails && vatRate > 0 && (
                  <div className="flex justify-between text-gray-700">
                    <span>{formatVatLabel(vatRate)}:</span>
                    <span className="font-semibold">{formatPrice(stage.net * vatRate)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-blue-600 border-t pt-2">
                  <span>Bruttó:</span>
                  <span>{formatPrice(stage.net * (1 + vatRate))}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Összesített összegek */}
        <div className="mt-6 space-y-3">
          {/* Egyszeri + éves */}
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Összesített nettó{showYearlyCosts ? ' / egyszeri + éves' : ''}:</span>
            <span className="font-semibold">{formatPrice(totalPrice)}</span>
          </div>
          {showDetails && vatRate > 0 && (
            <div className="flex justify-between text-gray-700">
              <span className="font-semibold">{formatVatLabel(vatRate)}:</span>
              <span className="font-semibold">{formatPrice(vatAmount)}</span>
            </div>
          )}
          <div className={`flex flex-col sm:flex-row sm:justify-between text-2xl font-bold text-gray-900 pt-4 sm:pt-3 ${monthlyTotal > 0 ? 'border-t pb-4 border-b border-gray-300' : 'border-t-2'}`}>
            <span>Összesített bruttó{showYearlyCosts ? ' / egyszeri + éves' : ''}:</span>
            <span>{formatPrice(totalWithVat)}</span>
          </div>

          {/* Havi díjak */}
          {monthlyTotal > 0 && (
            <>
              <div className="flex justify-between text-gray-700 pt-3">
                <span className="font-semibold">Összesített nettó / hó:</span>
                <span className="font-semibold">{formatPrice(monthlyTotal)}</span>
              </div>
              {showDetails && vatRate > 0 && (
                <div className="flex justify-between text-gray-700">
                  <span className="font-semibold">{formatVatLabel(vatRate)}:</span>
                  <span className="font-semibold">{formatPrice(monthlyTotal * vatRate)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-blue-600 border-t-2 pt-3">
                <span>Összesített bruttó / hó:</span>
                <span>{formatPrice(monthlyTotal * (1 + vatRate))}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
