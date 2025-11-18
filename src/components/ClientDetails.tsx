import { ClientInfo } from '../types';

interface ClientDetailsProps {
  clientInfo: ClientInfo;
}

export default function ClientDetails({ clientInfo }: ClientDetailsProps) {
  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-8 print:bg-white print:border print:border-gray-200 print:p-4 print:mb-6">
      <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium">
        Ügyfél adatai
      </h2>
      <div className="space-y-2">
        <div>
          <p className="text-sm text-gray-500">Név / Vállalkozás</p>
          <p className="text-base font-medium text-gray-900">{clientInfo.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Kapcsolattartó</p>
          <p className="text-base text-gray-900">{clientInfo.contact}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Telefon</p>
            <p className="text-base text-gray-900">{clientInfo.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">E-mail</p>
            <p className="text-base text-gray-900">{clientInfo.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Számlázási cím</p>
          <p className="text-base text-gray-900">{clientInfo.address}</p>
        </div>
      </div>
    </section>
  );
}
