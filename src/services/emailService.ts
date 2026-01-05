import emailjs from '@emailjs/browser';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { EMAIL_CONFIG } from '../config/email';

export const emailService = {
  getQuoteHTML(): string {
    const printableElement = document.querySelector('.printable-quote');
    if (!printableElement) {
      throw new Error('Printable quote not found');
    }
    
    // Clone the element
    const clone = printableElement.cloneNode(true) as HTMLElement;
    
    // Tailwind -> Inline styles mapping
    const convertTailwindToInline = (element: HTMLElement) => {
      const classList = Array.from(element.classList);
      let inlineStyle = element.getAttribute('style') || '';
      
      // Alapvető mappings
      const styleMap: Record<string, string> = {
        // Background
        'bg-white': 'background-color: #ffffff;',
        'bg-gray-50': 'background-color: #f9fafb;',
        'bg-gray-100': 'background-color: #f3f4f6;',
        'bg-gray-200': 'background-color: #e5e7eb;',
        'bg-gray-300': 'background-color: #d1d5db;',
        'bg-gray-400': 'background-color: #9ca3af;',
        'bg-blue-50': 'background-color: #eff6ff;',
        'bg-blue-600': 'background-color: #2563eb;',
        
        // Text colors
        'text-gray-400': 'color: #9ca3af;',
        'text-gray-600': 'color: #4b5563;',
        'text-gray-700': 'color: #374151;',
        'text-gray-900': 'color: #111827;',
        'text-blue-600': 'color: #2563eb;',
        'text-white': 'color: #ffffff;',
        
        // Font sizes
        'text-xs': 'font-size: 0.75rem; line-height: 1rem;',
        'text-sm': 'font-size: 0.875rem; line-height: 1.25rem;',
        'text-base': 'font-size: 1rem; line-height: 1.5rem;',
        'text-lg': 'font-size: 1.125rem; line-height: 1.75rem;',
        'text-xl': 'font-size: 1.25rem; line-height: 1.75rem;',
        'text-2xl': 'font-size: 1.5rem; line-height: 2rem;',
        'text-3xl': 'font-size: 1.875rem; line-height: 2.25rem;',
        
        // Font weights
        'font-medium': 'font-weight: 500;',
        'font-semibold': 'font-weight: 600;',
        'font-bold': 'font-weight: 700;',
        
        // Padding
        'p-4': 'padding: 1rem;',
        'p-5': 'padding: 1.25rem;',
        'p-6': 'padding: 1.5rem;',
        'p-8': 'padding: 2rem;',
        'px-4': 'padding-left: 1rem; padding-right: 1rem;',
        'px-6': 'padding-left: 1.5rem; padding-right: 1.5rem;',
        'py-2': 'padding-top: 0.5rem; padding-bottom: 0.5rem;',
        'py-4': 'padding-top: 1rem; padding-bottom: 1rem;',
        
        // Margin
        'mt-2': 'margin-top: 0.5rem;',
        'mt-4': 'margin-top: 1rem;',
        'mt-6': 'margin-top: 1.5rem;',
        'mt-8': 'margin-top: 2rem;',
        'mb-2': 'margin-bottom: 0.5rem;',
        'mb-4': 'margin-bottom: 1rem;',
        'mb-6': 'margin-bottom: 1.5rem;',
        'mb-8': 'margin-bottom: 2rem;',
        
        // Border
        'border': 'border: 1px solid #e5e7eb;',
        'border-gray-200': 'border-color: #e5e7eb;',
        'border-gray-300': 'border-color: #d1d5db;',
        'rounded': 'border-radius: 0.25rem;',
        'rounded-lg': 'border-radius: 0.5rem;',
        'rounded-full': 'border-radius: 9999px;',
        
        // Layout - FLEX
        'flex': 'display: flex;',
        'items-center': 'align-items: center;',
        'items-start': 'align-items: flex-start;',
        'justify-center': 'justify-content: center;',
        'justify-between': 'justify-content: space-between;',
        
        // Layout - GRID
        'grid': 'display: grid;',
        'grid-cols-1': 'grid-template-columns: repeat(1, minmax(0, 1fr));',
        'grid-cols-2': 'grid-template-columns: repeat(2, minmax(0, 1fr));',
        'md\\:grid-cols-2': 'grid-template-columns: repeat(2, minmax(0, 1fr));',
        'md\\:col-span-2': 'grid-column: span 2 / span 2;',
        
        // Gap
        'gap-2': 'gap: 0.5rem;',
        'gap-3': 'gap: 0.75rem;',
        'gap-4': 'gap: 1rem;',
        'gap-6': 'gap: 1.5rem;',
        
        // Width/Display
        'w-5': 'width: 1.25rem;',
        'w-8': 'width: 2rem;',
        'h-5': 'height: 1.25rem;',
        'h-8': 'height: 2rem;',
        'w-full': 'width: 100%;',
        'block': 'display: block;',
        'inline-block': 'display: inline-block;',

        'text-right': 'text-align: right;',
      };
      
      classList.forEach(className => {
        if (styleMap[className]) {
          inlineStyle += ' ' + styleMap[className];
        }
      });
      
      if (inlineStyle.trim()) {
        element.setAttribute('style', inlineStyle.trim());
      }
      
      // Remove class attribute
      element.removeAttribute('class');
      
      // Process children
      Array.from(element.children).forEach(child => {
        if (child instanceof HTMLElement) {
          convertTailwindToInline(child);
        }
      });
    };
    
    convertTailwindToInline(clone);
    
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
          <div style="max-width: 800px; margin: 0 auto; background-color: #ffffff; padding: 40px;">
            ${clone.innerHTML}
          </div>
        </body>
      </html>
    `;
  },
  async generatePDF(): Promise<void> {
    const printableElement = document.querySelector('.printable-quote');
    if (!printableElement) {
      throw new Error('Printable quote not found');
    }

    const canvas = await html2canvas(printableElement as HTMLElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= 297; // A4 height

    // Add more pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= 297;
    }

    // Download
    pdf.save(`ajanlat-${new Date().getTime()}.pdf`);
  },

  async sendQuoteEmail(params: {
    clientName: string;
    clientEmail: string;
    companyName: string;
    projectName: string;
    quoteUrl: string;
  }): Promise<void> {
    // TESZT MÓD - csak console.log, nem küld valódi emailt
    if (EMAIL_CONFIG.testMode) {
      console.log('🧪 TESZT MÓD - Email NEM lett elküldve');
      console.log('📧 Email paraméterek:', {
        to_pspro: EMAIL_CONFIG.recipientEmail,
        to_client: EMAIL_CONFIG.testEmail || params.clientEmail,
        client_name: params.clientName,
        company_name: params.companyName,
        project_name: params.projectName,
        quote_url: params.quoteUrl,
      });
      
      // Szimuláljuk a küldési időt
      await new Promise(resolve => setTimeout(resolve, 1500));
      return;
    }

    // Get quote HTML
    const quoteHTML = this.getQuoteHTML();

    // Send email via EmailJS
    const templateParams = {
      client_name: params.clientName,
      client_email: params.clientEmail,
      company_name: params.companyName,
      project_name: params.projectName,
      quote_url: params.quoteUrl,
      quote_html: quoteHTML,
      recipient_email: EMAIL_CONFIG.recipientEmail,
    };

    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  },
};
