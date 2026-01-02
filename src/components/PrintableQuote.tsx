import Terms from './Terms';
import ProjectSummary from './ProjectSummary';
import QuoteHeader from './QuoteHeader';
import Footer from './Footer';
import { QRCodeSVG } from 'qrcode.react';
import ServicesList from './ServicesList';
import PaymentTerms from './PaymentTerms';
import PricingSummary from './PricingSummary';
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
    return (
      <div ref={ref} className="bg-white mt-8 p-8 print:p-8 max-w-4xl mx-auto">
        <QuoteHeader quoteInfo={quoteInfo} />
        <ClientDetails clientInfo={quoteInfo.clientInfo} />
        <ProjectSummary projectInfo={quoteInfo.projectInfo} />
        <ServicesList services={services} interactive={false} />

        {/* Ár összegzés */}
        <div className="my-8">
          <PricingSummary services={services} />
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
