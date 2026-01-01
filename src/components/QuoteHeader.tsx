
import { QuoteInfo } from '../types';
import { FileText } from 'lucide-react';

interface QuoteHeaderProps {
  quoteNumber?: string;
  date?: string;
  validityDays?: number;
  quoteInfo?: QuoteInfo;
}

export default function QuoteHeader({ quoteNumber, date, validityDays, quoteInfo }: QuoteHeaderProps) {
  const info = quoteInfo || { quoteNumber, date, validityDays, issueDate: new Date().toISOString() };
  const issueDate = new Date(info.issueDate || info.date || new Date());
  const validUntil = new Date(issueDate);
  validUntil.setDate(validUntil.getDate() + (info.validityDays || 0));

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Árajánlat
            </h1>
          </div>
          <div className="space-y-1 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-700">Árajánlat száma:</span>{' '}
              {info.quoteNumber || (info as QuoteInfo).id}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Kiállítás dátuma:</span>{' '}
              {issueDate.toLocaleDateString('hu-HU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Érvényesség:</span>{' '}
              {validUntil.toLocaleDateString('hu-HU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}-ig
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 mb-2">
            PSPro
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Peter Sardy Productions</p>
            <p>Email: hello@pspro.hu</p>
            <p>Tel: +36 30 512 8221</p>
          </div>
        </div>
      </div>
    </div>
  );
}
