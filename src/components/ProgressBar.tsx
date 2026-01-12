interface ProgressBarProps {
  current: number;
  total: number;
  percentage: number;
  label?: string;
}

export function ProgressBar({ current, total, percentage, label }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          {label || 'Dream Clarity Progress'}
        </span>
        <span className="text-sm font-medium text-blue-600">
          {current} of {total} questions
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-xs font-semibold text-blue-600">{percentage}% Complete</span>
      </div>
    </div>
  );
}
