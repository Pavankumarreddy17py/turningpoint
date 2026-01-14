import { Button } from '../components/Button';
import { 
  Target, Users, Heart, Sparkles, Trophy, 
  Brain, HelpCircle, CheckCircle2, Star, 
  TrendingUp, ShieldCheck, ArrowRight
} from 'lucide-react';
import logoImg from '../assets/main logo of tp.png';

interface LandingPageProps {
  onGetStarted: () => void;
  setAppState: (state: any) => void;
}

export function LandingPage({ onGetStarted, setAppState }: LandingPageProps) {
  return (
    <div className="min-h-screen relative font-sans">
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-12 text-center">
        <header className="mb-12">
          <img src={logoImg} alt="HJR Logo" className="w-32 h-32 mx-auto mb-6 drop-shadow-xl" />
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md uppercase">HJR  </h1>
          <h2 className="text-3xl font-bold text-blue-100 mb-6 drop-shadow-sm">Turning Confusion into Clear Dream Paths</h2>
          <Button 
    size="lg" 
    onClick={onGetStarted} 
    className="px-16 py-6 text-2xl shadow-2xl bg-white text-black hover:bg-gray-100 transition-all border-none mt-8 font-bold uppercase flex items-center justify-center gap-3 mx-auto"
  >
    <span className="text-2xl">🚀</span>
    {/* Explicitly setting text-black here overrides any inherited white text */}
    <span className="text-black">Start Your Dream Journey</span>
  </Button>
        </header>

        {/* 3. TRUST STATISTICS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: 'Students Guided', value: '10,000+', icon: <Users className="w-5 h-5" /> },
            { label: 'Dream Categories', value: '24+', icon: <Trophy className="w-5 h-5" /> },
            { label: 'Success Rate', value: '98%', icon: <TrendingUp className="w-5 h-5" /> },
            { label: 'Expert Verified', value: '100%', icon: <ShieldCheck className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
              <div className="flex justify-center mb-2 text-blue-300">{stat.icon}</div>
              <div className="text-3xl font-black">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* 4. NEW VISION SECTION */}
        <section id="vision" className="mb-24 scroll-mt-24">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 text-left max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <Target className="w-12 h-12 text-black" />
              <h3 className="text-5xl font-black text-black uppercase tracking-tighter italic underline decoration-4">Our Vision</h3>
            </div>
            <div className="space-y-6 text-gray-900">
              <p className="text-2xl font-bold leading-tight">
              Our vision is to ensure that  <span className="bg-black text-white px-2"> every individual</span>, students, parents, and anyone seeking direction — gets clarity, confidence, and a clear path forward for their future.
              </p>
              <div className="border-l-8 border-black pl-6 py-2 space-y-4">
                <p className="text-xl font-bold text-gray-800">At HJR, we believe:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-center text-lg font-medium"><CheckCircle2 className="text-black shrink-0" /> Big dreams become possible when broken into small steps</li>
                  <li className="flex gap-3 items-center text-lg font-medium"><CheckCircle2 className="text-black shrink-0" /> Asking the right questions changes everything</li>
                  <li className="flex gap-3 items-center text-lg font-medium"><CheckCircle2 className="text-black shrink-0" /> Clarity leads to confidence, and confidence leads to action</li>
                </ul>
              </div>
              <p className="text-xl font-black text-black pt-4 uppercase tracking-tight italic">
              That’s why we guide people step by step, transforming dreams into practical, personalized paths — one question at a time.
              </p>
            </div>
          </div>
        </section>

        {/* 5. REDESIGNED VISUAL JOURNEY (The Path to Clarity) */}
        <section className="mb-24">
          <h3 className="text-4xl font-black text-black uppercase mb-10 tracking-widest drop-shadow-md">The Path to Clarity</h3>
          <div className="bg-white/95 rounded-[3rem] p-12 shadow-2xl border border-gray-200 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-4 border-dashed border-gray-400 mb-4">
                  <HelpCircle className="w-10 h-10 text-gray-400" />
                </div>
                <h4 className="font-bold text-black uppercase text-sm">Confusion</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">Start Here</p>
              </div>

              <ArrowRight className="hidden md:block w-8 h-8 text-gray-300" />

              {/* Step 2 */}
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-200 mb-4">
                  <Brain className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="font-bold text-black uppercase text-sm">AI Guidance</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">Smart Questions</p>
              </div>

              <ArrowRight className="hidden md:block w-8 h-8 text-blue-200" />

              {/* Step 3 */}
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center border-4 border-orange-200 mb-4">
                  <Star className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-black uppercase text-sm">Clarity</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">Found Your Goal</p>
              </div>

              <ArrowRight className="hidden md:block w-8 h-8 text-orange-200" />

              {/* Step 4 */}
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center shadow-xl mb-4 transform rotate-3">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h4 className="font-black text-black uppercase text-sm">Action Roadmap</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">Final Result</p>
              </div>
            </div>
            
            <p className="mt-12 text-gray-600 font-bold italic text-lg border-t pt-8">
              "Your personalized journey moves from broad dreams to specific action steps."
            </p>
          </div>
        </section>

        {/* 6. REVIEWS SECTION */}
        <section className="mb-24">
          <h3 className="text-3xl font-black text-white uppercase mb-10 tracking-widest">Student Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul S.",
                role: "Class 12 Student",
                text: "HJR turned my stress into a plan. I knew I loved Sports, but I didn't know how to make it a career while studying. The roadmap fixed that.",
                stars: 5
              },
              {
                name: "Anjali K.",
                role: "Parent",
                text: "As a parent, I wanted to help but didn't want to push. This platform helped us talk about dreams in a practical way. Highly recommended.",
                stars: 5
              },
              {
                name: "Vikram M.",
                role: "B.Tech Student",
                text: "The AI questions are actually smart. It asked me about my family situation and time, not just my grades. Very realistic guidance.",
                stars: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white/95 p-8 rounded-3xl shadow-xl text-left border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-orange-400 mb-4">
                    {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-bold text-black">{review.name}</div>
                  <div className="text-xs text-blue-600 font-bold uppercase">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FINAL REMINDER & FOOTER */}
        <section className="mb-20">
          <div className="bg-white/95 p-10 rounded-3xl border border-gray-200 max-w-3xl mx-auto text-center shadow-2xl">
            <h4 className="text-2xl font-bold mb-6 italic text-gray-800">❤️ A Gentle Reminder</h4>
            <p className="text-lg leading-relaxed text-gray-600 font-medium">
              You are not late. You are not weak. Confusion is normal. 
              Changing dreams is okay. Everyone's journey is different.
            </p>
          </div>
        </section>

        <footer className="pt-10 border-t border-white/20">
          <img src={logoImg} alt="HJR Logo" className="h-10 mx-auto mb-4 grayscale brightness-200 opacity-50" />
          <p className="text-sm text-white/70">© 2026 Turning Point • HJR</p>
          <div className="flex justify-center gap-6 mt-4 text-[10px] text-white/40 uppercase font-black tracking-widest">
            <button onClick={() => setAppState('faq')}>Privacy</button>
            <button onClick={() => setAppState('faq')}>Terms</button>
            <button onClick={() => setAppState('faq')}>Contact Us</button>
          </div>
        </footer>
      </div>
    </div>
  );
}