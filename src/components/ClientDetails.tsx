
import { Building2, Mail, MapPin, Phone, User } from 'lucide-react';
import { ClientInfo } from '../types';

interface ClientDetailsProps {
  clientInfo: ClientInfo;
  printable?: boolean;
}

export default function ClientDetails({ clientInfo, printable = false }: ClientDetailsProps) {
  return (
    <div className={printable ? "bg-white rounded-lg border border-gray-300 p-6 mb-6" : "bg-white rounded-lg shadow-md p-6 mb-6"}>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Ügyfél adatai</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Cég</p>
            <p className="font-medium">{clientInfo.company || 'Nincs megadva'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium">{clientInfo.email || 'Nincs megadva'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Telefon</p>
            <p className="font-medium">{clientInfo.phone || 'Nincs megadva'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Cím</p>
            <p className="font-medium">{clientInfo.address || 'Nincs megadva'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
