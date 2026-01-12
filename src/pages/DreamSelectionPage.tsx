import { DreamCard } from '../components/DreamCard';
import { dreamCategories } from '../data/dreamTrees';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';

interface DreamSelectionPageProps {
  onSelectDream: (dreamKey: string) => void;
  onBack: () => void;
}

export function DreamSelectionPage({ onSelectDream, onBack }: DreamSelectionPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            Back
          </Button>

          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Choose Your Dream Category
          </h1>
          <p className="text-lg text-gray-600">
            Select the area that best matches your dream. We'll guide you step-by-step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dreamCategories.map((dream) => (
            <DreamCard
              key={dream.key}
              name={dream.name}
              description={dream.description}
              icon={dream.icon}
              onClick={() => onSelectDream(dream.key)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Can't find your dream? We're continuously adding new categories.
          </p>
        </div>
      </div>
    </div>
  );
}
