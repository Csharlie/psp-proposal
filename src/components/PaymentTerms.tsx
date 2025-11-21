
import { getCurrentPricing } from '../data/pricing';

export default function PaymentTerms() {
  const pricing = getCurrentPricing();

  return (
    <section className="mb-8 print:mb-6 print:break-inside-avoid">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Fizetési feltételek
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg print:bg-white print:border print:border-gray-200 print:p-4">
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <span className="font-medium text-gray-900 w-8">{pricing.deposit}%</span>
            <span>A projekt megkezdésekor előleg formájában</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-gray-900 w-8">{pricing.final}%</span>
            <span>A projekt átadásakor, az éles indítás előtt</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            Fizetési határidő: számla kézhezvételétől számított {pricing.paymentDeadline} napon belül.
            Átutalással történő kiegyenlítés.
          </p>
        </div>
      </div>
    </section>
  );
}
