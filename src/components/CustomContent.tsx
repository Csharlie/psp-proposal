import ReactMarkdown from 'react-markdown';

interface CustomContentProps {
  content?: string;
  className?: string;
}

export function CustomContent({ content, className = '' }: CustomContentProps) {
  if (!content) return null;

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-8 ${className}`}>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
