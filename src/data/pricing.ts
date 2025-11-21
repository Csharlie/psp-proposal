export type PricingVersion = 'premium' | 'standard' | 'basic';

export interface PricingTier {
  id: PricingVersion;
  name: string;
  description: string;
  multiplier: number;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Alap',
    description: 'Kezdő vállalkozásoknak',
    multiplier: 1.0,
    features: [
      'Alapvető funkciók',
      'Email támogatás',
      '1 hónap garancia',
      '1 körös módosítás',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Legtöbbet választott csomag',
    multiplier: 1.35,
    features: [
      'Minden alap funkció',
      'Prioritásos támogatás',
      '3 hónap garancia',
      '2 körös módosítás',
      'Alapvető SEO',
    ],
  },
  {
    id: 'premium',
    name: 'Prémium',
    description: 'Teljes körű megoldás',
    multiplier: 1.75,
    features: [
      'Minden standard funkció',
      '24/7 támogatás',
      '6 hónap garancia',
      'Korlátlan módosítás',
      'Haladó SEO',
      'Teljesítmény optimalizálás',
      'Havi riport',
    ],
  },
];

export const getDefaultPricingVersion = (): PricingVersion => 'standard';

export const getPricingTier = (version: PricingVersion): PricingTier => {
  return pricingTiers.find(tier => tier.id === version) || pricingTiers[1];
};
