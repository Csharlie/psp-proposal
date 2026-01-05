// EmailJS konfiguráció
// Regisztrálj az emailjs.com oldalon és töltsd ki az alábbi adatokat

export const EMAIL_CONFIG = {
  // TESZT MÓD - állítsd true-ra teszteléshez (nem küld valódi emailt)
  testMode: false,
  
  // EmailJS Public Key (Account -> API Keys)
  publicKey: '1toY6f7DB47qWIE1o',
  
  // EmailJS Service ID (Email Services -> Service ID)
  serviceId: 'service_psp_proposal',
  
  // EmailJS Template ID (Email Templates -> Template ID)
  templateId: 'template_psp_proposal',
  
  // A saját email címed, ahova érkezzenek az ajánlatok
  recipientEmail: 'petersardy@gmail.com',  // BIZTONSÁGOS - csak ide megy!
  
  // Teszt email cím (ide küldi teszt módban az ügyfél email helyett)
  testEmail: 'petersardy@gmail.com',
};

// Email template paraméterek:
// - client_email: Az ügyfél email címe
// - client_name: Az ügyfél neve
// - quote_url: Az ajánlat URL-je
// - quote_html: A teljes ajánlat HTML tartalma
// - project_name: A projekt neve
