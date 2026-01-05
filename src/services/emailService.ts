import emailjs from '@emailjs/browser';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { EMAIL_CONFIG } from '../config/email';
import EmailQuote from '../components/EmailQuote';
import { QuoteInfo, ServiceItem } from '../types';

export const emailService = {
  // Email HTML generálás a dedikált EmailQuote komponensből
  getQuoteHTML(quoteInfo: QuoteInfo, services: ServiceItem[], quoteUrl: string): string {
    // React komponens renderelése statikus HTML-ké
    const emailQuoteElement = createElement(EmailQuote, {
      quoteInfo,
      services,
      quoteUrl
    });
    
    const htmlContent = renderToStaticMarkup(emailQuoteElement);
    
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
          ${htmlContent}
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

  // Email küldés EmailJS-en keresztül
  async sendQuoteEmail(params: {
    quoteInfo: QuoteInfo;
    services: ServiceItem[];
    quoteUrl: string;
  }): Promise<void> {
    // TESZT MÓD - csak console.log, nem küld valódi emailt
    if (EMAIL_CONFIG.testMode) {
      console.log('🧪 TESZT MÓD - Email NEM lett elküldve');
      console.log('📧 Email paraméterek:', {
        to_pspro: EMAIL_CONFIG.recipientEmail,
        client_name: params.quoteInfo.clientInfo.name,
        company_name: params.quoteInfo.clientInfo.company,
        project_name: params.quoteInfo.projectInfo.title,
        quote_url: params.quoteUrl,
      });
      
      // Szimuláljuk a küldési időt
      await new Promise(resolve => setTimeout(resolve, 1500));
      return;
    }

    // Email HTML generálás az új EmailQuote komponensből
    const quoteHTML = this.getQuoteHTML(params.quoteInfo, params.services, params.quoteUrl);

    // Send email via EmailJS
    const templateParams = {
      client_name: params.quoteInfo.clientInfo.name,
      client_email: params.quoteInfo.clientInfo.email,
      company_name: params.quoteInfo.clientInfo.company,
      project_name: params.quoteInfo.projectInfo.title,
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
