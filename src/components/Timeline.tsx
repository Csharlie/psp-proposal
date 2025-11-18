import { ProjectPhase } from '../types';

export default function Timeline() {
  const phases: ProjectPhase[] = [
    {
      name: 'Tervezés és koncepció',
      duration: '3-5 nap',
      deliverables: ['Wireframe', 'Design koncepció', 'Arculati elemek']
    },
    {
      name: 'Fejlesztés',
      duration: '1-2 hét',
      deliverables: ['WordPress telepítés', 'Dizájn implementáció', 'Funkciók fejlesztése']
    },
    {
      name: 'Tartalomfeltöltés',
      duration: '2-3 nap',
      deliverables: ['Szövegek', 'Képek', 'Multimédia tartalmak']
    },
    {
      name: 'Tesztelés és finomhangolás',
      duration: '2-3 nap',
      deliverables: ['Reszponzivitás teszt', 'Böngésző kompatibilitás', 'Hibajavítások']
    },
    {
      name: 'Átadás és éles indítás',
      duration: '1 nap',
      deliverables: ['Domain beállítás', 'SEO alapok', 'Oktató anyag']
    }
  ];

  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Projekt ütemezés
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Becsült átfutási idő: 2-4 hét a projekt komplexitásától függően
      </p>
      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-300 pl-4 print:break-inside-avoid"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">
                  {index + 1}. {phase.name}
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {phase.deliverables.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <span className="text-sm text-gray-500 flex-shrink-0">
                {phase.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
