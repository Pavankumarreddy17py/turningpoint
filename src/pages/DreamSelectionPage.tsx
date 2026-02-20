import { DreamCard } from '../components/DreamCard';
import { dreamCategories } from '../data/dreamTrees';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '../assets/bgimageforall.avif';

interface DreamSelectionPageProps {
  onSelectDream: (dreamKey: string) => void;
  onBack: () => void;
}

export function DreamSelectionPage({ onSelectDream, onBack }: DreamSelectionPageProps) {
  return (
    <div 
      className="min-h-screen py-12"
      style={{
        /* Creates a 95% white overlay so the logo is a subtle watermark */
        backgroundImage: `url(${logoImg})`,
        backgroundSize: 'auto', // Keeps the logo its natural size
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat', // Repeats the logo across the screen
        backgroundAttachment: 'fixed', // Keeps the background still while scrolling
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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

<h1 className="text-4xl font-bold text-white mb-3">
            Choose Your Dream Category
          </h1>
          <p className="text-lg text-white">
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
          <p className="text-sm text-gray-500 font-medium">
            Can't find your dream? We're continuously adding new categories.
          </p>
        </div>
      </div>
    </div>
  );
}