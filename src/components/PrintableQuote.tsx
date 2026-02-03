import Terms from './Terms';
import ProjectSummary from './ProjectSummary';
import QuoteHeader from './QuoteHeader';
import Footer from './Footer';
import { QRCodeSVG } from 'qrcode.react';
import ServicesList from './ServicesList';
import PaymentTerms from './PaymentTerms';
import PaymentBreakdown from './PaymentBreakdown';
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
      <div ref={ref} className="printable-quote bg-white mt-8 p-4 sm:p-8 print:mt-0 print:p-0 max-w-4xl print:max-w-none mx-auto print:mx-0">
        <QuoteHeader quoteInfo={quoteInfo} />
        <ClientDetails clientInfo={quoteInfo.clientInfo} printable={true} />
        <ProjectSummary projectInfo={quoteInfo.projectInfo} printable={true} />
        <ServicesList services={services} interactive={false} printable={true} />

        {/* Ár összegzés */}
        <div className="my-8">
          <PricingSummary services={services} showTotal={true} />
        </div>

        <PaymentTerms />
        <PaymentBreakdown services={services} showDetails={true} showYearlyCosts={quoteInfo.showYearlyCosts} />
        {/* <Timeline printable={true} /> */}
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
        
        {/* Nyomtatás gomb QR kód alatt */}
        <button
          onClick={() => window.print()}
          className="print:hidden w-full mb-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Nyomtatás
        </button>

        <Footer />
      </div>
    );
  }
);

PrintableQuote.displayName = 'PrintableQuote';

export default PrintableQuote;
