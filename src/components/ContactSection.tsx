
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@pspro.hu',
      link: 'mailto:hello@pspro.hu',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+36 30 512 8221',
      link: 'tel:+36305128221',
    },
    {
      icon: Globe,
      label: 'Weboldal',
      value: 'www.pspro.hu',
      link: 'https://www.pspro.hu',
    },
    {
      icon: MapPin,
      label: 'Székhely',
      value: 'Kiskunfélegyháza, Magyarország',
      link: null,
    },
  ];

  return (
    <div className="mb-8">

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 mt-8 text-white">
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-3">
            Kérdése van az árajánlattal kapcsolatban?
          </h3>
          <p className="text-blue-100 mb-6">
            Állunk rendelkezésére! Vegye fel velünk a kapcsolatot bármelyik elérhetőségünkön, 
            és szívesen válaszolunk minden kérdésére.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors w-full">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-blue-100 mb-1">{item.label}</p>
                    <p className="font-semibold truncate">{item.value}</p>
                  </div>
                </div>
              );

              return item.link ? (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block w-full"
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="w-full">{content}</div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-white/20 w-full">
            <p className="text-sm text-blue-100">
              <span className="font-semibold">Nyitvatartás:</span> Hétfő - Péntek: 9:00 - 18:00
            </p>
            <p className="text-sm text-blue-100 mt-2">
              Hétvégén és munkaszüneti napokon emailben érhet el minket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
