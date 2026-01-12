import { Button } from '../components/Button';
import { ArrowLeft, Map, CheckCircle, List, Calendar, Shield } from 'lucide-react';

export function RoadmapInfoPage({ onBack, onStart }: { onBack: () => void; onStart: () => void }) {
  return (
    <div className="min-h-screen bg-white p-8 pt-24 max-w-5xl mx-auto">
      <Button onClick={onBack} variant="secondary" className="mb-8 hover:bg-gray-100">
        <ArrowLeft size={16} className="mr-2" /> Back to Home
      </Button>

      <div className="text-center mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Your Personalized Roadmap</h2>
        <p className="text-xl text-gray-600">We don't just give advice; we give you a path to follow.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-50 p-8 border-2 border-black">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <List className="text-blue-600" /> What's inside the Roadmap?
          </h3>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3">
              <CheckCircle className="text-green-600 shrink-0" /> 
              <span><b>Exact Role Clarity:</b> No more "I want to be in Sports." Now it's "I am a Left-arm Pace Bowler."</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-green-600 shrink-0" /> 
              <span><b>Skill Checklist:</b> The exact technical and soft skills you need to build.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-green-600 shrink-0" /> 
              <span><b>Education Path:</b> Which courses or degrees actually help your specific dream.</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 border-2 border-black">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="text-orange-600" /> Action & Safety
          </h3>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3">
              <CheckCircle className="text-green-600 shrink-0" /> 
              <span><b>Daily Routine:</b> How to manage your time between study and your passion.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-green-600 shrink-0" /> 
              <span><b>Short-term Goals:</b> What to do in the next 3 months, 6 months, and 1 year.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-green-600 shrink-0" /> 
              <span><b>Plan B (Backups):</b> A safety net to ensure your career is stable no matter what.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white p-12 text-center rounded-3xl shadow-2xl">
        <Map className="w-16 h-16 mx-auto mb-6 text-blue-400" />
        <h3 className="text-3xl font-bold mb-4 uppercase">Stop Guessing. Start Moving.</h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          Our AI roadmaps are designed specifically for the Indian education system and job market.
        </p>
        <Button onClick={onStart} className="bg-black text-white px-12 py-4 text-xl font-black uppercase hover:bg-gray-100">
          Create My Roadmap Now
        </Button>
      </div>
    </div>
  );
}