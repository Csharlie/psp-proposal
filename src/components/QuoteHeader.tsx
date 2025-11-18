import { Layers } from 'lucide-react';
import { QuoteInfo } from '../types';

interface QuoteHeaderProps {
  quoteInfo: QuoteInfo;
}

export default function QuoteHeader({ quoteInfo }: QuoteHeaderProps) {
  const validUntil = new Date(quoteInfo.issueDate);
  validUntil.setDate(validUntil.getDate() + quoteInfo.validityDays);

  return (
    <header className="border-b-2 border-gray-200 pb-8 mb-8 print:pb-6 print:mb-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Layers className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
            <h1 className="text-3xl font-light text-gray-900">PSPro</h1>
          </div>
          <p className="text-sm text-gray-600 font-light tracking-wide">
            Peter Sardy Productions
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Grafika · Webfejlesztés · Kreatív design
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            Árajánlat
          </p>
          <p className="text-sm font-medium text-gray-900 mb-1">
            #{quoteInfo.id}
          </p>
          <p className="text-xs text-gray-600">
            Kiállítva: {new Date(quoteInfo.issueDate).toLocaleDateString('hu-HU')}
          </p>
          <p className="text-xs text-gray-600">
            Érvényes: {validUntil.toLocaleDateString('hu-HU')}-ig
          </p>
        </div>
      </div>
    </header>
  );
}
