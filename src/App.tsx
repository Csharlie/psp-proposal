
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
        
        {/* Egyedi bevezető szöveg megjelenítése - IDEIGLENESEN ELREJTVE */}
        {/* {quoteInfo.customTexts?.introduction && (
          <CustomContent content={quoteInfo.customTexts.introduction} className="mt-8" />
        )} */}
        
        {/* Szolgáltatások listája */}
        {selectedServices.length > 0 && (
          <ServicesList 
            services={selectedServices} 
            interactive={false}
            title="Kiválasztott Szolgáltatások"
            showDescription={false}
          />
        )}

        {/* Árazási összesítő - teljes szélességű */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Árazási Összesítő</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Összesen:</span>
            <span className="font-semibold">{totalPrice.toLocaleString('hu-HU')} Ft</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">ÁFA (27%):</span>
            <span className="font-semibold">{vatAmount.toLocaleString('hu-HU')} Ft</span>
          </div>
          <div className="flex justify-between border-t pt-2 mt-2">
            <span className="font-bold text-lg">Összesen ÁFA-val:</span>
            <span className="font-bold text-lg text-blue-600">{totalWithVat.toLocaleString('hu-HU')} Ft</span>
          </div>
        </div>
        
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
