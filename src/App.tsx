
import { useState, useEffect } from 'react';
import { dataService } from './services/dataService';
import QuoteHeader from './components/QuoteHeader';
import ClientDetails from './components/ClientDetails';
import ServicesList from './components/ServicesList';
import ProjectSummary from './components/ProjectSummary';
import { Timeline } from './components/Timeline';
import Packages from './components/Packages';
import PaymentTerms from './components/PaymentTerms';
import Terms from './components/Terms';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrintableQuote from './components/PrintableQuote';
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
    setServices(prev =>
      prev.map(service =>
        service.id === serviceId
          ? { ...service, selected: !service.selected }
          : service
      )
    );
  };

  const selectedServices = services.filter(s => s.selected);
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const vatAmount = totalPrice * 0.27;
  const totalWithVat = totalPrice + vatAmount;

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <QuoteHeader quoteInfo={quoteInfo} />
        
        <ClientDetails clientInfo={quoteInfo.clientInfo} />
        
        <ProjectSummary projectInfo={quoteInfo.projectInfo} />        
        
        <Packages 
          pricingVersion={pricingVersion}
          onSelectPackage={(serviceIds) => {
            setServices(prev =>
              prev.map(service =>
                serviceIds.includes(service.id)
                  ? { ...service, selected: true }
                  : service
              )
            );
          }}
        />
        
        <ServicesList 
          services={services}
          onToggle={handleServiceToggle}
        />
        
        <Timeline />
        
        <PaymentTerms />
        
        <Terms />
        
        <ContactSection />
        
        <Footer />
        
        <PrintableQuote
          quoteInfo={quoteInfo}
          services={selectedServices}
          quoteUrl={window.location.href}
        />
      </div>
    </div>
  );
}

export default App;
