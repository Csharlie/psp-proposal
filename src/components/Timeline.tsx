
import { Calendar, Clock } from 'lucide-react';

export function Timeline() {
  const phases = [
    { name: 'Tervezés', duration: '1-2 hét', description: 'Koncepció, wireframe, design' },
    { name: 'Fejlesztés', duration: '2-4 hét', description: 'Kódolás, funkciók implementálása' },
    { name: 'Tesztelés', duration: '1 hét', description: 'Minőségbiztosítás, hibajavítás' },
    { name: 'Átadás', duration: '1 hét', description: 'Oktatás, dokumentáció, éles indítás' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
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
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900">{phase.name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
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
