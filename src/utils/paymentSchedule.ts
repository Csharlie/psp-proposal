import { ServiceItem } from '../types';

/**
 * Fizetési ütemezés típusa
 * - advance: 20% előleg a visszaigazoláskor, 80% az átadáskor (alapértelmezés)
 * - hosting-first: nincs előleg; a domain & tárhely díja indítja a munkát,
 *   a fennmaradó összeg az átadáskor esedékes
 */
export type PaymentSchedule = 'advance' | 'hosting-first';

export const DEFAULT_PAYMENT_SCHEDULE: PaymentSchedule = 'advance';

const HOSTING_CATEGORY = 'Domain & Tárhely szolgáltatások';

interface StageText {
  title: string;
  description: string;
}

export const PAYMENT_STAGE_TEXTS: Record<PaymentSchedule, StageText[]> = {
  advance: [
    { title: 'Előleg (20%)', description: 'A megrendelés visszaigazolása után' },
    { title: 'Végösszeg (80%)', description: 'A projekt sikeres átadása után' },
  ],
  'hosting-first': [
    {
      title: 'Domain & tárhely díja',
      description: 'A megrendelés visszaigazolása után. Beérkezését követően regisztráljuk a domaint, beállítjuk a tárhelyet, és elindul a weboldal fejlesztése.',
    },
    {
      title: 'Fennmaradó összeg',
      description: 'A kész weboldal átadásakor, az Ön jóváhagyását követően.',
    },
  ],
};

export const PROJECT_START_TEXTS: Record<PaymentSchedule, string> = {
  advance: 'A projekt megkezdése az előleg beérkezése és a szerződés aláírása után történik.',
  'hosting-first': 'A projekt a megrendelés írásos visszaigazolása és a domain- és tárhelydíj beérkezése után indul. Előleg fizetésére nincs szükség.',
};

export const CANCELLATION_TEXTS: Record<PaymentSchedule, string> = {
  advance: 'A projekt indítása után lemondás esetén a már elvégzett munka arányos díja számlázásra kerül, minimum az előleg összege.',
  'hosting-first': 'A projekt indítása után lemondás esetén a már elvégzett munka arányos díja számlázásra kerül. A már beszerzett domain és tárhely díja nem visszatéríthető.',
};

export const WORK_START_CONDITION_TEXTS: Record<PaymentSchedule, string> = {
  advance: 'A projekt megvalósítása a megrendelés írásos visszaigazolása és a vállalkozási díj beérkezése után kezdődik.',
  'hosting-first': 'A projekt megvalósítása a megrendelés írásos visszaigazolása és a domain- és tárhelydíj beérkezése után kezdődik.',
};

/** Az egyes fizetési szakaszok nettó összegei (egyszeri + éves díjak alapján). */
export function getPaymentStageNets(schedule: PaymentSchedule, services: ServiceItem[]): number[] {
  const upfrontServices = services.filter(s => s.billingType !== 'monthly');
  const total = upfrontServices.reduce((sum, s) => sum + s.price, 0);

  if (schedule === 'hosting-first') {
    const hosting = upfrontServices
      .filter(s => s.category === HOSTING_CATEGORY)
      .reduce((sum, s) => sum + s.price, 0);
    return [hosting, total - hosting];
  }

  return [total * 0.2, total * 0.8];
}
