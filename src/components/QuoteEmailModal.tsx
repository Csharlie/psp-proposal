import { X, Download } from 'lucide-react';
import { emailService } from '../services/emailService';
import { useState } from 'react';

interface QuoteEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientName: string;
  clientEmail: string;
  success: boolean;
}

export default function QuoteEmailModal({ isOpen, onClose, clientName, clientEmail }: QuoteEmailModalProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      await emailService.generatePDF();
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('Hiba történt a PDF generálása közben.');
    } finally {
      setDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center py-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Köszönjük az érdeklődést!
          </h2>
          
          <p className="text-gray-600 mb-4">
            Az ajánlatkérését rendszerünk sikeresen rögzítette!
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-900 mb-2">
              A rövid ajánlatáttekintőt kiküldtük az Ügyféladatok között szereplő email címre.
            </p>
            <p className="text-blue-700 font-semibold">
              {clientEmail}
            </p>
          </div>
          
          <p className="text-gray-500 mb-6">
            Hamarosan felvesszük Önnel a kapcsolatot!
          </p>
          
          <button
            onClick={onClose}
            className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Bezárás
          </button>
        </div>
      </div>
    </div>
  );
}
