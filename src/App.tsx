
import { useState, useEffect } from 'react';
import { dataService } from './services/dataService';
import QuoteHeader from './components/QuoteHeader';
import ClientDetails from './components/ClientDetails';
import ServicesList from './components/ServicesList';
import PricingSummary from './components/PricingSummary';
import ProjectSummary from './components/ProjectSummary';
import { Timeline } from './components/Timeline';
import Packages from './components/Packages';
import PaymentTerms from './components/PaymentTerms';
import Terms from './components/Terms';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrintableQuote from './components/PrintableQuote';
import { CustomContent } from './components/CustomContent';
import type { ServiceItem, QuoteInfo } from './types';

function App() {
  const [pricingVersion, setPricingVersion] = useState<'premium' | 'standard' | 'basic'>('premium');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [pricingVer, servicesData, quoteData] = await Promise.all([
          dataService.getPricingVersion(),
          dataService.getServices(),
          dataService.getQuoteInfo(),
        ]);
        
        setPricingVersion(pricingVer);
        setServices(servicesData);
        setQuoteInfo(quoteData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Hiba az adatok betöltésekor');
        console.error('Data loading error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    // Kölcsönösen kizáró tárhely szolgáltatások (csak havi és éves között)
    const recurringHostingServices = ['domain-hosting-monthly', 'domain-hosting-yearly'];
    const isRecurringHosting = recurringHostingServices.includes(serviceId);
    
    setServices(prev =>
      prev.map(service => {
        // Ha havi vagy éves tárhely szolgáltatást választunk
        if (isRecurringHosting && recurringHostingServices.includes(service.id)) {
          if (service.id === serviceId) {
            // Az aktuális szolgáltatás toggle-ölése
            return { ...service, selected: !service.selected };
          } else {
            // A másik ismétlődő tárhely szolgáltatás kikapcsolása
            return { ...service, selected: false };
          }
        }
        // Minden más szolgáltatás normál toggle
        if (service.id === serviceId) {
          return { ...service, selected: !service.selected };
        }
        return service;
      })
    );
  };

  const selectedServices = services.filter(s => s.selected);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Adatok betöltése...</p>
        </div>
      </div>
    );
  }

  if (error || !quoteInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-2">Hiba!</p>
          <p className="text-gray-600">{error || 'Az adatok nem érhetők el'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:px-0 print:py-0 print:max-w-none">
        <div className="print:hidden">
          <QuoteHeader quoteInfo={quoteInfo} />
          
          <ClientDetails clientInfo={quoteInfo.clientInfo} />
          
          <ProjectSummary projectInfo={quoteInfo.projectInfo} />
          
          {/* Egyedi bevezető szöveg megjelenítése - IDEIGLENESEN ELREJTVE */}
          {/* {quoteInfo.customTexts?.introduction && (
            <CustomContent content={quoteInfo.customTexts.introduction} className="mt-8" />
          )} */}
          
          {/* Alap szolgáltatás */}
          <ServicesList 
            services={services.filter(s => s.selectable === false)} 
            interactive={false}
            title="A projekt alapja"
            showDescription={true}
          />
          
          {/* Választható szolgáltatások */}
          <ServicesList 
            services={services.filter(s => s.selectable !== false)} 
            interactive={true}
            onToggle={handleServiceToggle}
            title="Elérhető szolgáltatások"
            showDescription={true}
          />        

          {/* Árazási összesítő */}
          {selectedServices.length > 0 && (
            <PricingSummary services={selectedServices} />
          )}
          
          {/* Egyedi záró szöveg megjelenítése - IDEIGLENESEN ELREJTVE */}
          {/* {quoteInfo.customTexts?.conclusion && (
            <CustomContent content={quoteInfo.customTexts.conclusion} className="mt-8" />
          )} */}
          
          {/* Projekt ütemezés - IDEIGLENESEN ELREJTVE */}
          {/* <Timeline /> */}
          
          {/* Fizetési feltételek - IDEIGLENESEN ELREJTVE */}
          {/* {quoteInfo.customTexts?.paymentTerms ? (
            <CustomContent content={quoteInfo.customTexts.paymentTerms} className="mt-8" />
          ) : (
            <PaymentTerms />
          )} */}
          
          {/* További feltételek - IDEIGLENESEN ELREJTVE */}
          {/* {quoteInfo.customTexts?.additionalTerms ? (
            <CustomContent content={quoteInfo.customTexts.additionalTerms} className="mt-8" />
          ) : (
            <Terms />
          )} */}
          
          <ContactSection />
          
          <Footer />
          
          {/* Nyomtatható dokumentáció fejléc */}
          <div className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Részletes és nyomtatható dokumentáció</h2>
          </div>
        </div>
        
        <div className="print:mt-0 relative max-w-4xl mx-auto">
          {/* Nyomtatás gomb */}
          <button
            onClick={() => window.print()}
            className="print:hidden absolute -top-20 right-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Nyomtatás
          </button>
          
          <PrintableQuote
            quoteInfo={quoteInfo}
            services={selectedServices}
            quoteUrl={window.location.href}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
