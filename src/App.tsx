
import { useState } from 'react';
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
import { createServices } from './data/services';
import { getDefaultPricingVersion } from './data/pricing';
import type { ServiceItem, QuoteInfo } from './types';

function App() {
  const [pricingVersion] = useState(getDefaultPricingVersion());
  const [services, setServices] = useState<ServiceItem[]>(() => createServices(pricingVersion));
  
  const [quoteInfo] = useState<QuoteInfo>({
    id: 'PSP-2024-001',
    issueDate: new Date().toISOString(),
    quoteNumber: 'PSP-2024-001',
    date: new Date().toLocaleDateString('hu-HU'),
    validityDays: 30,
    pricingVersion,
    clientInfo: {
      name: '',
      company: '',
      email: '',
      phone: '',
      address: '',
    },
    projectInfo: {
      title: '',
      description: '',
      timeline: '',
      deliverables: [],
    },
  });

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <QuoteHeader quoteInfo={quoteInfo} />
        
        <ClientDetails clientInfo={quoteInfo.clientInfo} />
        
        <ProjectSummary projectInfo={quoteInfo.projectInfo} />
        
        <ServicesList 
          services={services}
          onToggle={handleServiceToggle}
        />
        
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
