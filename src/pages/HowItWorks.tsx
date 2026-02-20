import { ArrowLeft, Brain, Target, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/Button';
import howItWorksBg from '../assets/how it works.png';

// Define the interface for the props
interface HowItWorksProps {
  onBack: () => void;
  onStart: () => void;
}

export function HowItWorksPage({ onBack, onStart }: HowItWorksProps) {
  return (
    <div 
      className="min-h-screen py-24"
      style={{
        /* ✅ Background image with a 90% white overlay for perfect text readability */
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('${howItWorksBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keeps the background locked while scrolling
      }}
    >
      {/* ✅ Inner container ensures content sits above the background (relative z-10) */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-800 hover:text-black mb-10 font-bold uppercase text-xs transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-black">
          How Turning Point Works
        </h2>

        <p className="text-gray-800 font-medium text-lg max-w-3xl mb-16">
          Turning Point helps you transform your dream into a clear, achievable life plan using
          structured thinking, AI intelligence, and real-world logic.
        </p>

        {/* Core Steps */}
        <div className="space-y-14">

          {/* Step 1 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] shrink-0">
              1
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase">Choose Your Dream</h3>
              <p className="text-gray-800 font-medium text-lg">
                Start by selecting your main dream area such as Education, Sports, Business,
                Technology, Government Jobs, or Creative Fields.
              </p>
              <p className="text-gray-600 font-bold uppercase text-sm tracking-wider mt-2">
                No pressure. No commitment. Just exploration.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] shrink-0">
              2
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase">Break It Into Sub-Dreams</h3>
              <p className="text-gray-800 font-medium text-lg">
                We help you go deeper step by step.
              </p>
              <p className="text-blue-700 font-bold mt-2 bg-blue-50/80 inline-block px-3 py-1 rounded border border-blue-200">
                Example: Sports → Cricket → Batter → Right-Handed → Professional Level
              </p>
              <p className="text-gray-700 font-medium mt-3">
                This clarity removes confusion and gives your dream a real structure.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] shrink-0">
              3
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase">AI Understands You</h3>
              <p className="text-gray-800 font-medium text-lg">
                Our AI asks intelligent, human-like questions about:
              </p>
              <ul className="list-disc ml-6 mt-3 text-gray-800 font-medium space-y-1">
                <li>Your age and background</li>
                <li>Current skills & education level</li>
                <li>Available time & resources</li>
                <li>Family and financial situation</li>
              </ul>
              <p className="text-gray-600 font-bold uppercase text-sm tracking-wider mt-4">
                Questions appear one by one, so you never feel overwhelmed.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] shrink-0">
              4
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase">Get a Personalized Roadmap</h3>
              <p className="text-gray-800 font-medium text-lg">
                Based on your answers, Turning Point creates a clear roadmap that includes:
              </p>
              <ul className="list-disc ml-6 mt-3 text-gray-800 font-medium space-y-1">
                <li>Skill-building path</li>
                <li>Daily / monthly preparation plan</li>
                <li>Realistic timelines</li>
                <li>Backup & alternative career options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Trust Section */}
        <div className="mt-20 border-t-4 border-black pt-14">
          <h3 className="text-3xl font-black uppercase mb-10">
            Why Turning Point Is Different
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-4 bg-white/60 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
              <Brain className="w-8 h-8 text-black shrink-0" />
              <div>
                <h4 className="font-black uppercase mb-1">AI With Human Logic</h4>
                <p className="text-gray-700 font-medium">
                  Not generic advice. Every suggestion is based on *your* reality.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white/60 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
              <Target className="w-8 h-8 text-black shrink-0" />
              <div>
                <h4 className="font-black uppercase mb-1">Clarity Over Motivation</h4>
                <p className="text-gray-700 font-medium">
                  We focus on direction, not empty motivational quotes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white/60 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
              <ShieldCheck className="w-8 h-8 text-black shrink-0" />
              <div>
                <h4 className="font-black uppercase mb-1">Privacy First</h4>
                <p className="text-gray-700 font-medium">
                  Your answers are safe and never shared.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white/60 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
              <Users className="w-8 h-8 text-black shrink-0" />
              <div>
                <h4 className="font-black uppercase mb-1">Built for Real People</h4>
                <p className="text-gray-700 font-medium">
                  Students, job seekers, dreamers, and late starters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center border-t-4 border-black pt-14 bg-white/50 backdrop-blur-sm rounded-[3rem] p-10 border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-3xl font-black uppercase mb-4">
            Your Dream Deserves a Plan
          </h3>
          <p className="text-gray-800 font-medium max-w-xl mx-auto mb-8">
            Turning Point helps you stop guessing and start moving forward with clarity.
          </p>

          <Button
            onClick={onStart}
            className="bg-black text-white border-2 border-black px-14 py-5 rounded-full font-black uppercase text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] transition-all"
          >
            Start Your Journey Now
          </Button>
        </div>

      </div>
    </div>
  );
}