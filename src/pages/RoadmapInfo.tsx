import logoImg from '../assets/ChatGPT Image for tp.png';
import { Button } from '../components/Button';
import { ArrowLeft, Map, CheckCircle, List, Calendar, Shield } from 'lucide-react';

export function RoadmapInfoPage({ onBack, onStart }: { onBack: () => void; onStart: () => void }) {
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
      <div className="max-w-5xl mx-auto px-8 relative z-10">
      <Button onClick={onBack} variant="secondary" className="mb-8 hover:bg-gray-100">
        <ArrowLeft size={16} className="mr-2" /> Back to Home
      </Button>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-gray-900">
            Your Personalized Roadmap
          </h2>
          <p className="text-xl text-gray-700 font-bold">
            We don't just give advice; we give you a path to follow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-6 flex items-center gap-2">
              <List className="text-blue-600" size={28} /> What's inside the Roadmap?
            </h3>
            <ul className="space-y-4 text-lg font-medium text-gray-800">
              <li className="flex gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-1" /> 
                <span><b className="font-black text-black">Exact Role Clarity:</b> No more "I want to be in Sports." Now it's "I am a Left-arm Pace Bowler."</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-1" /> 
                <span><b className="font-black text-black">Skill Checklist:</b> The exact technical and soft skills you need to build.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-1" /> 
                <span><b className="font-black text-black">Education Path:</b> Which courses or degrees actually help your specific dream.</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-6 flex items-center gap-2">
              <Calendar className="text-orange-600" size={28} /> Action & Safety
            </h3>
            <ul className="space-y-4 text-lg font-medium text-gray-800">
              <li className="flex gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-1" /> 
                <span><b className="font-black text-black">Daily Routine:</b> How to manage your time between study and your passion.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-1" /> 
                <span><b className="font-black text-black">Short-term Goals:</b> What to do in the next 3 months, 6 months, and 1 year.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-600 shrink-0 mt-1" /> 
                <span><b className="font-black text-black">Plan B (Backups):</b> A safety net to ensure your career is stable no matter what.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-slate-900 border-4 border-black text-white p-12 text-center rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          {/* Subtle dotted background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10">
            <Map className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase italic tracking-tight">Stop Guessing. Start Moving.</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg font-medium">
              Our AI roadmaps are designed specifically for the Indian education system and job market.
            </p>
        <Button onClick={onStart} className="bg-black text-white px-12 py-4 text-xl font-black uppercase hover:bg-gray-100">
          Create My Roadmap Now
        </Button>
          </div>
        </div>

      </div>
    </div>
  );
}