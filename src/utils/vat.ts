export const DEFAULT_VAT_RATE = 0.27;

export const formatVatLabel = (vatRate: number): string =>
  `ÁFA (${Math.round(vatRate * 100)}%)`;
