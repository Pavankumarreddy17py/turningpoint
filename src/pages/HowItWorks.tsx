import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

// Define the interface for the props
interface HowItWorksProps {
  onBack: () => void;
  onStart: () => void;
}

export function HowItWorksPage({ onBack, onStart }: HowItWorksProps) {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10 pt-24 max-w-4xl mx-auto">
      {/* Back Button to clear the red error in App.tsx */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 font-bold uppercase text-xs transition-colors"
      >
        <ArrowLeft size={16} /> Back to Home
      </button>

      <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-black">How It Works</h2>
      
      <div className="space-y-12">
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-black text-white rounded-full flex-shrink-0 flex items-center justify-center font-black shadow-lg">1</div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black uppercase">Choose Your Dream</h3>
            <p className="text-gray-600 text-lg font-medium">Select from Education, Sports, AI, Business, and more.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-black text-white rounded-full flex-shrink-0 flex items-center justify-center font-black shadow-lg">2</div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black uppercase">Go Deeper (Sub-Dreams)</h3>
            <p className="text-gray-600 text-lg font-medium">Example: Sports → Cricket → Batter → Right-handed → Professional Level.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-black text-white rounded-full flex-shrink-0 flex items-center justify-center font-black shadow-lg">3</div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black uppercase">Answer AI Questions</h3>
            <p className="text-gray-600 text-lg font-medium">Our AI asks smart questions about your skills, time, and family situation—one by one.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-black text-white rounded-full flex-shrink-0 flex items-center justify-center font-black shadow-lg">4</div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black uppercase">Get Personalized Roadmap</h3>
            <p className="text-gray-600 text-lg font-medium">Receive clear goals, skill lists, preparation timelines, and backup plans.</p>
          </div>
        </div>
      </div>

      {/* Action Button using the onStart prop */}
      <div className="mt-16 text-center border-t pt-10">
        <Button 
          onClick={onStart}
          className="bg-black text-white px-12 py-5 rounded-full font-black uppercase text-lg shadow-2xl hover:scale-105 transition-transform"
        >
          Start Your Journey Now
        </Button>
      </div>
    </div>
  );
}