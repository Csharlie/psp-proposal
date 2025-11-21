export type PricingVersion = 'premium' | 'standard' | 'basic';

export interface PricingConfig {
  deposit: number; // Előleg százalék
  final: number; // Végső fizetés százalék
  paymentDeadline: number; // Fizetési határidő (napok)
  label: string; // Verzió neve
  description: string; // Verzió leírása
}

export const pricingVersions: Record<PricingVersion, PricingConfig> = {
  premium: {
    deposit: 25,
    final: 75,
    paymentDeadline: 8,
    label: 'Prémium csomag',
    description: 'Teljes körű szolgáltatás, gyors átfutási idővel',
  },
  standard: {
    deposit: 30,
    final: 70,
    paymentDeadline: 15,
    label: 'Standard csomag',
    description: 'Kiváló ár-érték arány, optimális megoldás',
  },
  basic: {
    deposit: 40,
    final: 60,
    paymentDeadline: 30,
    label: 'Alap csomag',
    description: 'Költséghatékony megoldás, alapvető funkciókkal',
  },
};

// Aktuális verzió kiválasztása - ITT VÁLTOZTASD MEG!
export const currentPricingVersion: PricingVersion = 'standard';

// Az aktuális verzióhoz tartozó config kinyer';

export const getCurrentPricing = () => pricingVersions[currentPricingVersion];