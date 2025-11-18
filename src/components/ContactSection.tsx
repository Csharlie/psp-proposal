import { Mail, Phone, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="mb-8 print:hidden">
      <div className="bg-gray-800 text-white p-8 rounded-lg">
        <h2 className="text-xl font-medium mb-4">
          Készen áll az indulásra?
        </h2>
        <p className="text-gray-300 mb-6">
          Fogadja el az ajánlatot és kezdjük el közös munkánkat.
        </p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 mb-6">
          <CheckCircle className="w-5 h-5" />
          Ajánlat elfogadása
        </button>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <a href="mailto:info@pspro.hu" className="hover:text-gray-200">
              info@pspro.hu
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400" />
            <a href="tel:+36301234567" className="hover:text-gray-200">
              +36 30 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
