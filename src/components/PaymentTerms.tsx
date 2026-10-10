
import { CreditCard } from 'lucide-react';
import { DEFAULT_VAT_RATE } from '../utils/vat';
import { DEFAULT_PAYMENT_SCHEDULE, PAYMENT_STAGE_TEXTS, PaymentSchedule } from '../utils/paymentSchedule';

interface PaymentTermsProps {
  vatRate?: number;
  paymentSchedule?: PaymentSchedule;
}

export default function PaymentTerms({ vatRate = DEFAULT_VAT_RATE, paymentSchedule = DEFAULT_PAYMENT_SCHEDULE }: PaymentTermsProps) {
  return (
    <div className="mb-8">
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
            {PAYMENT_STAGE_TEXTS[paymentSchedule].map((stage, index) => (
              <div key={stage.title} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{stage.title}</p>
                  <p className="text-sm text-gray-600">{stage.description}</p>
                </div>
              </div>
            ))}
            {paymentSchedule === 'hosting-first' && (
              <p className="text-sm text-gray-600 pt-2 border-t border-blue-200">
                A havi díjas szolgáltatások díja havonta, az igénybevétel kezdetétől esedékes.
              </p>
            )}
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
              <span>
                {vatRate > 0
                  ? `ÁFA: ${Math.round(vatRate * 100)}% (tartalmazza a végösszeget)`
                  : 'A feltüntetett árak végösszegek, ÁFA-t nem tartalmaznak'}
              </span>
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
