import { QuoteInfo, ServiceItem } from '../types';

interface EmailQuoteProps {
  quoteInfo: QuoteInfo;
  services: ServiceItem[];
  quoteUrl: string;
}

// Email-barát komponens - táblázatos layout inline stílusokkal
export default function EmailQuote({ quoteInfo, services }: EmailQuoteProps) {
  const calculateTotals = () => {
    const oneTime = services.filter(s => s.billingType === 'one-time').reduce((sum, s) => sum + s.price, 0);
    const monthly = services.filter(s => s.billingType === 'monthly').reduce((sum, s) => sum + s.price, 0);
    const yearly = services.filter(s => s.billingType === 'yearly').reduce((sum, s) => sum + s.price, 0);
    const totalNet = oneTime + monthly + yearly;
    const vat = totalNet * 0.27;
    const gross = totalNet + vat;
    
    return { oneTime, monthly, yearly, totalNet, vat, gross };
  };

  const totals = calculateTotals();

  return (
    <table role="presentation" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#ffffff' }}>
      <tbody>
        {/* Header */}
        <tr>
          <td style={{ padding: '40px 40px 20px 40px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>
              Árajánlat
            </h1>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0' }}>
              Szám: {quoteInfo.quoteNumber} | Dátum: {quoteInfo.date}
            </p>
          </td>
        </tr>

        {/* Ügyfél adatok */}
        <tr>
          <td style={{ padding: '0 40px 20px 40px' }}>
            <table role="presentation" style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '20px', backgroundColor: '#f9fafb' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 16px 0' }}>
                      Ügyfél adatai
                    </h2>
                    <table role="presentation" style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: '8px 0', width: '50%', verticalAlign: 'top' }}>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>Név</p>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: '0' }}>{quoteInfo.clientInfo.name}</p>
                          </td>
                          <td style={{ padding: '8px 0', width: '50%', verticalAlign: 'top' }}>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>Cég</p>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: '0' }}>{quoteInfo.clientInfo.company}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px 0', width: '50%', verticalAlign: 'top' }}>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>Email</p>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: '0' }}>{quoteInfo.clientInfo.email}</p>
                          </td>
                          <td style={{ padding: '8px 0', width: '50%', verticalAlign: 'top' }}>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>Telefon</p>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: '0' }}>{quoteInfo.clientInfo.phone}</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} style={{ padding: '8px 0' }}>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>Cím</p>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: '0' }}>{quoteInfo.clientInfo.address}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Projekt összefoglaló */}
        <tr>
          <td style={{ padding: '0 40px 20px 40px' }}>
            <table role="presentation" style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '20px', backgroundColor: '#f9fafb' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 16px 0' }}>
                      Projekt összefoglaló
                    </h2>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>Projekt címe</p>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 16px 0' }}>{quoteInfo.projectInfo.title}</p>
                    
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>Leírás</p>
                    <p style={{ fontSize: '14px', color: '#374151', margin: '0', lineHeight: '1.6' }}>{quoteInfo.projectInfo.description}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Szolgáltatások */}
        <tr>
          <td style={{ padding: '0 40px 20px 40px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 16px 0' }}>
              Választott szolgáltatások
            </h2>
            <table role="presentation" style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>Szolgáltatás</th>
                  <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>Ár</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={service.id} style={{ borderBottom: index < services.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                    <td style={{ padding: '12px' }}>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: '0 0 4px 0' }}>{service.name}</p>
                      {service.description && (
                        <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>{service.description}</p>
                      )}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <p style={{ fontSize: '14px', fontWeight: '600', color: '#2563eb', margin: '0' }}>
                        {service.price.toLocaleString('hu-HU')} Ft
                        {service.billingType === 'monthly' && '/hó'}
                        {service.billingType === 'yearly' && '/év'}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>

        {/* Összesítő */}
        <tr>
          <td style={{ padding: '0 40px 40px 40px' }}>
            <table role="presentation" style={{ width: '100%', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', margin: '0 0 16px 0' }}>
                      Árazási összesítő
                    </h3>
                    
                    {totals.oneTime > 0 && (
                      <table role="presentation" style={{ width: '100%', marginBottom: '8px' }}>
                        <tr>
                          <td style={{ fontSize: '14px', color: '#374151', padding: '4px 0' }}>Egyszeri költség (Nettó)</td>
                          <td style={{ fontSize: '14px', fontWeight: '600', color: '#111827', textAlign: 'right', padding: '4px 0' }}>
                            {totals.oneTime.toLocaleString('hu-HU')} Ft
                          </td>
                        </tr>
                      </table>
                    )}
                    
                    {totals.monthly > 0 && (
                      <table role="presentation" style={{ width: '100%', marginBottom: '8px' }}>
                        <tr>
                          <td style={{ fontSize: '14px', color: '#374151', padding: '4px 0' }}>Havi költség (Nettó)</td>
                          <td style={{ fontSize: '14px', fontWeight: '600', color: '#111827', textAlign: 'right', padding: '4px 0' }}>
                            {totals.monthly.toLocaleString('hu-HU')} Ft/hó
                          </td>
                        </tr>
                      </table>
                    )}
                    
                    {totals.yearly > 0 && (
                      <table role="presentation" style={{ width: '100%', marginBottom: '16px' }}>
                        <tr>
                          <td style={{ fontSize: '14px', color: '#374151', padding: '4px 0' }}>Éves költség (Nettó)</td>
                          <td style={{ fontSize: '14px', fontWeight: '600', color: '#111827', textAlign: 'right', padding: '4px 0' }}>
                            {totals.yearly.toLocaleString('hu-HU')} Ft/év
                          </td>
                        </tr>
                      </table>
                    )}
                    
                    <div style={{ borderTop: '2px solid #bfdbfe', paddingTop: '16px', marginTop: '8px' }}>
                      <table role="presentation" style={{ width: '100%' }}>
                        <tr>
                          <td style={{ fontSize: '14px', color: '#374151', padding: '4px 0' }}>Nettó összesen</td>
                          <td style={{ fontSize: '14px', fontWeight: '600', color: '#111827', textAlign: 'right', padding: '4px 0' }}>
                            {totals.totalNet.toLocaleString('hu-HU')} Ft
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '14px', color: '#374151', padding: '4px 0' }}>ÁFA (27%)</td>
                          <td style={{ fontSize: '14px', fontWeight: '600', color: '#111827', textAlign: 'right', padding: '4px 0' }}>
                            {totals.vat.toLocaleString('hu-HU')} Ft
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '16px', fontWeight: '700', color: '#111827', padding: '8px 0 0 0' }}>Bruttó összesen</td>
                          <td style={{ fontSize: '18px', fontWeight: '700', color: '#2563eb', textAlign: 'right', padding: '8px 0 0 0' }}>
                            {totals.gross.toLocaleString('hu-HU')} Ft
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Footer */}
        <tr>
          <td style={{ padding: '20px 40px', backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>
              PSPro | hello@pspro.hu | +36 30 512 8221
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
