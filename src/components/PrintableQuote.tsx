import Terms from './Terms';
import ProjectSummary from './ProjectSummary';
import QuoteHeader from './QuoteHeader';
import Footer from './Footer';
import { QRCodeSVG } from 'qrcode.react';
import ServicesList from './ServicesList';
import PaymentTerms from './PaymentTerms';
import { Timeline, ProjectStartConditions } from './Timeline';
import { forwardRef } from 'react';
import ClientDetails from './ClientDetails';
import { QuoteInfo, ServiceItem } from '../types';

interface PrintableQuoteProps {
  quoteInfo: QuoteInfo;
  services: ServiceItem[];
  quoteUrl: string;
}

const PrintableQuote = forwardRef<HTMLDivElement, PrintableQuoteProps>(
  ({ quoteInfo, services, quoteUrl }, ref) => {
    const totalPrice = services.reduce((sum, s) => sum + s.price, 0);
    const vatAmount = totalPrice * 0.27;
    const totalWithVat = totalPrice + vatAmount;

    const formatPrice = (price: number): string => {
      return price.toLocaleString('hu-HU', {
        style: 'currency',
        currency: 'HUF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    };

    return (
      <div ref={ref} className="bg-white p-12 print:p-8 max-w-4xl mx-auto">
        <QuoteHeader quoteInfo={quoteInfo} />
        <ClientDetails clientInfo={quoteInfo.clientInfo} />
        <ProjectSummary projectInfo={quoteInfo.projectInfo} />
        <ServicesList services={services} interactive={false} />

        {/* Ár összegzés */}
        <div className="my-8 bg-gray-50 rounded-lg border border-gray-200 p-6 print:break-inside-avoid">
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Összesen (nettó):</span>
              <span className="font-semibold">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>ÁFA (27%):</span>
              <span className="font-semibold">{formatPrice(vatAmount)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-3 text-blue-600">
              <span>Összesen (bruttó):</span>
              <span>{formatPrice(totalWithVat)}</span>
            </div>
          </div>
        </div>

        <PaymentTerms />
        <Timeline />
        <ProjectStartConditions />
        <Terms />

        <div className="my-8 p-6 border-2 border-gray-200 rounded-lg text-center print:break-inside-avoid">
          <p className="text-sm text-gray-600 mb-3">
            Digitális ajánlat megtekintése
          </p>
          <div className="flex justify-center mb-3">
            <QRCodeSVG value={quoteUrl} size={120} level="M" />
          </div>
          <p className="text-xs text-gray-500">
            Olvassa be a QR-kódot az online ajánlatért
          </p>
        </div>

        <Footer />
      </div>
    );
  }
);

PrintableQuote.displayName = 'PrintableQuote';

export default PrintableQuote;
