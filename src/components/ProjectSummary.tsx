
import { Briefcase } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import type { ProjectInfo } from '../types';

interface ProjectSummaryProps {
  projectInfo: ProjectInfo;
  printable?: boolean;
}

export default function ProjectSummary({ projectInfo, printable = false }: ProjectSummaryProps) {
  return (
    <div className={printable ? "bg-white rounded-lg border border-gray-300 p-6 mb-6" : "bg-white rounded-lg shadow-md p-6 mb-6"}>
      <div className="flex items-center gap-3 mb-4">
        <Briefcase className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">Projekt összefoglaló</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Projekt címe</h3>
          <p className="text-gray-700">{projectInfo.title || 'Nincs megadva'}</p>
        </div>
        
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Leírás</h3>
          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: projectInfo.description || 'Nincs megadva' }} />
        </div>
        
        {projectInfo.features && (
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Funkciók</h3>
            {Array.isArray(projectInfo.features) ? (
              <div className="space-y-4">
                {projectInfo.features.map((feature, index) => (
                  <div key={index} dangerouslySetInnerHTML={{ __html: feature }} />
                ))}
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: projectInfo.features }} />
            )}
          </div>
        )}
        
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Időkeret</h3>
          {Array.isArray(projectInfo.timeline) ? (
            <div className="space-y-3">
              {projectInfo.timeline.map((item, index) => (
                typeof item === 'string' && item.includes('<div') ? (
                  <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ) : (
                  <li key={index} className="text-gray-700">{item}</li>
                )
              ))}
            </div>
          ) : (
            <p className="text-gray-700">{projectInfo.timeline || 'Nincs megadva'}</p>
          )}
        </div>
        
        {projectInfo.deliverables && projectInfo.deliverables.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Eredmények</h3>
            <ul className="list-disc list-inside space-y-1">
              {projectInfo.deliverables.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
