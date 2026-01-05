
import { Calendar, Clock } from 'lucide-react';

interface TimelineProps {
  printable?: boolean;
}

export function Timeline({ printable = false }: TimelineProps) {
  const phases = [
    { name: 'Előkészítés', duration: '2-3 munkanap', description: 'Igényfelmérés, üzleti célok meghatározása' },
    { name: 'Vizuális megjelenés', duration: '3-5 munkanap', description: 'Oldalstruktúra és szekciók megtervezése' },
    { name: 'Technikai megvalósítás', duration: '7-10 munkanap', description: 'Működő, élesíthető landing oldal' },
    { name: 'Átadás', duration: '1-2 munkanap', description: 'Tesztelés, végső finomhangolás, éles indítás' },
  ];

  return (
    <div className={printable ? "bg-white rounded-lg border border-gray-300 p-6 mb-6" : "bg-white rounded-lg shadow-md p-6 mb-6"}>
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">Projekt ütemterv</h2>
      </div>
      
      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">{index + 1}</span>
            </div>
            <div className="flex-1">
              <div className={printable ? "mb-1 flex items-center justify-between gap-2" : "flex items-center gap-2 mb-1"}>
                <h3 className="font-semibold text-gray-900">{phase.name}</h3>
                <div className="flex pt-2 pb-1 items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{phase.duration}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectStartConditions() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-6">
      <h3 className="font-semibold text-gray-900 mb-3">Projektindítás és feltételek</h3>
      <div className="space-y-2 text-sm text-gray-700">
        <p>A projekt megvalósítása a megrendelés írásos visszaigazolása és a vállalkozási díj beérkezése után kezdődik.</p>
        <p>A megjelölt határidők az indulás időpontjától számítandók.</p>
        <p>Az ajánlatban szereplő tartalom fix scope-nak minősül, az azon felüli igények külön egyeztetés és árazás tárgyát képezik.</p>
      </div>
    </div>
  );
}
