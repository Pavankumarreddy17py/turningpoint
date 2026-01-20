import { Button } from '../components/Button';
import { 
  Target, Users, Heart, Sparkles, Trophy, 
  Brain, HelpCircle, CheckCircle2, Star, 
  TrendingUp, ShieldCheck, ArrowRight,
  MessageCircle, Mail, MapPin // Added for Contact Section
} from 'lucide-react';
import logoImg from '../assets/main logo of tp.png';

interface LandingPageProps {
  onGetStarted: () => void;
  setAppState: (state: any) => void;
}

export function LandingPage({ onGetStarted, setAppState }: LandingPageProps) {
  // CONFIGURATION FOR CONTACT REDIRECTS
  const whatsappNumber = "917259771515"; 
  const emailAddress = "support@turningpoint.com";

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
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md uppercase">J#₹ -Jayaho janatha  Happy Resources </h1>
          <h2 className="text-3xl font-bold text-blue-100 mb-6 drop-shadow-sm">Turning Confusion into Clear Dream Paths</h2>
          <Button 
            size="lg" 
            onClick={onGetStarted} 
            className="px-16 py-6 text-2xl shadow-2xl bg-white text-black hover:bg-gray-100 transition-all border-none mt-8 font-bold uppercase flex items-center justify-center gap-3 mx-auto"
          >
            <span className="text-2xl">🚀</span>
            <span className="text-black">Start Your Dream Journey</span>
          </Button>
        </header>

         {/* --- ADDED CONTACT US SECTION --- */}
        <section className="mb-24 scroll-mt-24" id="contact">
  <h3 className="text-4xl font-black text-white uppercase mb-10 tracking-widest text-center">
    Contact Us
  </h3>

  <div className="flex justify-center max-w-4xl mx-auto">
    
    {/* WhatsApp Redirect */}
    <a 
      href={`https://wa.me/${whatsappNumber}?text=Hi HJR Team, I need help with my career path!`}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/95 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] border-4 border-black hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] transition-all"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        
        <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-500 transition-colors">
          <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white" />
        </div>

        <h4 className="text-xl font-black text-black uppercase">
          WhatsApp
        </h4>

        <p className="text-gray-600 font-bold uppercase text-[10px]">
          Chat with an expert
        </p>


      </div>
    </a>

  </div>
</section>

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

        {/* 5. REDESIGNED VISUAL JOURNEY */}
        <section className="mb-24">
          <h3 className="text-4xl font-black text-black uppercase mb-10 tracking-widest drop-shadow-md">The Path to Clarity</h3>
          <div className="bg-white/95 rounded-[3rem] p-12 shadow-2xl border border-gray-200 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-4 border-dashed border-gray-400 mb-4">
                  <HelpCircle className="w-10 h-10 text-gray-400" />
                </div>
                <h4 className="font-bold text-black uppercase text-sm">Confusion</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">Start Here</p>
              </div>
              <ArrowRight className="hidden md:block w-8 h-8 text-gray-300" />
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-200 mb-4">
                  <Brain className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="font-bold text-black uppercase text-sm">AI Guidance</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">Smart Questions</p>
              </div>
              <ArrowRight className="hidden md:block w-8 h-8 text-blue-200" />
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center border-4 border-orange-200 mb-4">
                  <Star className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-black uppercase text-sm">Clarity</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">Found Your Goal</p>
              </div>
              <ArrowRight className="hidden md:block w-8 h-8 text-orange-200" />
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
              { name: "Rahul S.", role: "Class 12 Student", text: "HJR turned my stress into a plan. I knew I loved Sports, but I didn't know how to make it a career while studying. The roadmap fixed that.", stars: 5 },
              { name: "Anjali K.", role: "Parent", text: "As a parent, I wanted to help but didn't want to push. This platform helped us talk about dreams in a practical way. Highly recommended.", stars: 5 },
              { name: "Vikram M.", role: "B.Tech Student", text: "The AI questions are actually smart. It asked me about my family situation and time, not just my grades. Very realistic guidance.", stars: 5 }
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
        {/* 4.1 WHO IS THIS FOR */}
        <section className="mb-24">
          <div className="bg-white/95 rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl border border-gray-200">
            <h3 className="text-4xl font-black text-black uppercase mb-10 tracking-widest text-center">
              Who Is J#₹ For?
            </h3>
                  
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Students",
                  text: "Confused about career, streams, skills, or future direction. Especially helpful if you feel pressure but lack clarity.",
                },
                {
                  title: "Parents",
                  text: "Who want to support their child without forcing decisions. We help turn confusion into healthy conversations.",
                },
                {
                  title: "Dreamers & Explorers",
                  text: "People who feel they are meant for more but don’t know the right path yet. Career, passion, or life direction.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
                  <h4 className="text-xl font-black mb-3 uppercase">{item.title}</h4>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5.1 DREAM CATEGORIES PREVIEW */}
        <section className="mb-24">
          <h3 className="text-4xl font-black text-white uppercase mb-12 tracking-widest">
            Explore Dream Categories
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Sports & Athletics",
              "Technology & AI",
              "Arts, Drawing & Creativity",
              "Medical & Healthcare",
              "Defense & Services",
              "Business & Startups",
              "Research & Innovation",
              "Leadership & Strategy",
            ].map((dream, i) => (
              <div
                key={i}
                className="bg-white/95 p-6 rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition-transform"
              >
                <h4 className="font-black text-black uppercase text-sm">{dream}</h4>
                <p className="text-xs text-gray-600 mt-2">
                  Step-by-step guidance, eligibility, skills & real-world paths.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6.2 WHAT YOU WILL GET */}
        <section className="mb-24">
          <div className="bg-black text-white rounded-3xl p-14 max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-black uppercase mb-10 tracking-widest text-center">
              What You Will Get
            </h3>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                "Personalized dream analysis",
                "Clear career / life direction",
                "Skill & education roadmap",
                "Alternative backup paths",
                "Confidence to take action",
                "Mental clarity & focus",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-400" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6.3 FAQ PREVIEW */}
        <section className="mb-24">
          <div className="bg-white/95 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl border border-gray-200">
            <h3 className="text-3xl font-black uppercase mb-8 tracking-widest text-center">
              Common Questions
            </h3>

            <div className="space-y-6 text-left">
              <p><strong>❓ Is this only for students?</strong><br/>No. Anyone seeking clarity can use HJR.</p>
              <p><strong>❓ What if I change my dream?</strong><br/>That’s normal. We adapt the roadmap.</p>
              <p><strong>❓ Is this practical or motivational?</strong><br/>100% practical. Emotion + execution.</p>
            </div>
          </div>
        </section>





        <footer className="pt-10 border-t border-white/20">
          <img src={logoImg} alt="HJR Logo" className="h-10 mx-auto mb-4 grayscale brightness-200 opacity-50" />
          <p className="text-sm text-white/70">© 2026 Turning Point • HJR</p>
          <div className="flex justify-center gap-6 mt-4 text-[10px] text-white/40 uppercase font-black tracking-widest">
            <button onClick={() => setAppState('faq')}>Privacy</button>
            <button onClick={() => setAppState('faq')}>Terms</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Contact Us</button>
          </div>
        </footer>
      </div>
    </div>
  );
}