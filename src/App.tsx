import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Printer } from 'lucide-react';
import QuoteHeader from './components/QuoteHeader';
import ClientDetails from './components/ClientDetails';
import ProjectSummary from './components/ProjectSummary';
import Packages from './components/Packages';
import ServicesList from './components/ServicesList';
import PaymentTerms from './components/PaymentTerms';
import Timeline from './components/Timeline';
import Terms from './components/Terms';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrintableQuote from './components/PrintableQuote';
import { graphicServices, webServices } from './data/services';
import { QuoteInfo, ServiceItem } from './types';

function App() {
  const [services, setServices] = useState<ServiceItem[]>([
    ...graphicServices,
    ...webServices
  ]);

  const quoteInfo: QuoteInfo = {
    id: 'PSP-2025-001',
    issueDate: new Date().toISOString(),
    validityDays: 30,
    clientInfo: {
      name: 'Példa Kft.',
      contact: 'Kovács János',
      phone: '+36 30 123 4567',
      email: 'kovacs.janos@pelda.hu',
      address: '1234 Budapest, Példa utca 12.'
    }
  };

  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: `PSPro_Arajanlat_${quoteInfo.id}`
  });

  const toggleService = (id: string) => {
    setServices(services.map(s =>
      s.id === id ? { ...s, selected: !s.selected } : s
    ));
  };

  const selectPackage = (serviceIds: string[]) => {
    setServices(services.map(s => ({
      ...s,
      selected: serviceIds.includes(s.id)
    })));
  };

  const quoteUrl = window.location.href;

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="flex justify-end mb-4 print:hidden">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                <Printer className="w-4 h-4" />
                Nyomtatás / PDF
              </button>
            </div>

            <QuoteHeader quoteInfo={quoteInfo} />
            <ClientDetails clientInfo={quoteInfo.clientInfo} />
            <ProjectSummary />
            <Packages allServices={services} onSelectPackage={selectPackage} />
            <ServicesList
              services={services}
              onToggle={toggleService}
              interactive={true}
            />
            <PaymentTerms />
            <Timeline />
            <Terms />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </div>

      <div className="hidden">
        <PrintableQuote
          ref={printRef}
          quoteInfo={quoteInfo}
          services={services.filter(s => s.selected)}
          quoteUrl={quoteUrl}
        />
      </div>
    </>
  );
}

export default App;
