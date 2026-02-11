import { CheckCircle } from 'lucide-react';

interface KeyTakeawaysProps {
  takeaways: string[];
}

export function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  return (
    <div className="mb-10 rounded-2xl border border-teal-200 bg-teal-50/50 p-6">
      <h2 className="mb-4 text-lg font-bold text-teal-900">Key Takeaways</h2>
      <ul className="space-y-3">
        {takeaways.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
            <span className="text-sm leading-relaxed text-teal-800">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
