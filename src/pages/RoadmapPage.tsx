import { Button } from '../components/Button';
import { Card } from '../components/Card';
import {
  Target,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Lightbulb,
  Home,
  PlayCircle,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';

/* ---------------- TYPES ---------------- */

interface Roadmap {
  confirmed_dream: string;
  exact_role: string;
  required_skills: string[];
  education_training: string;
  daily_routine: string;
  short_term_goals: string[];
  backup_options: string[];
}

interface RoadmapPageProps {
  roadmap: Roadmap | null;
  loading: boolean;
  onStartNew: () => void;
  dreamKey: string;
  responses: Record<string, string>;
}

/* ---------------- COMPONENT ---------------- */

export function RoadmapPage({
  roadmap,
  loading,
  onStartNew,
  dreamKey,
  responses = {},
}: RoadmapPageProps) {
  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black mx-auto mb-4" />
          <h2 className="text-xl font-black uppercase">
            Generating Your Roadmap...
          </h2>
        </div>
      </div>
    );
  }

  /* ---------------- EMPTY STATE ---------------- */
  if (!roadmap) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Button onClick={onStartNew}>Start New Journey</Button>
      </div>
    );
  }

  /* ---------------- HELPERS ---------------- */

const handleWhatsApp = (): void => {
  if (typeof window === 'undefined') return;

  const phone: string = '917259771515';

  const mainDream: string = (dreamKey || 'Selected Dream')
    .replace(/-/g, ' ')
    .toUpperCase();

  const lines: string[] = [];

  lines.push(`DREAM:- ${mainDream}`);

  Object.entries(responses).forEach(([question, answer]) => {
    const q = question.replace(/_/g, ' ').toUpperCase();
    const a = answer.replace(/_/g, ' ').toUpperCase();
    lines.push(`${q}:- ${a}`);
  });

  const message: string = encodeURIComponent(lines.join('\n'));

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};


  /** ✅ FIXED YOUTUBE EMBED LINKS */
  const getDreamVideo = (key: string) => {
    const map: Record<string, string> = {
      cricket: 'https://www.youtube.com/embed/S_B7_T3q8_c',
      'software-engineer': 'https://www.youtube.com/embed/uXW7pX-S7S0',
      upsc: 'https://www.youtube.com/embed/3uN6_X_C5wM',
      default: 'https://www.youtube.com/embed/P66_YmS5Cmk',
    };
    return map[key] || map.default;
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* --- ADDED: SELECTION DETAILS AT TOP --- */}
{/* --- IMPROVED SELECTION SUMMARY --- */}
{/* --- NEO-BRUTALIST SELECTION SUMMARY --- */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-2 bg-blue-600 rounded-full"></div>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">
              Verified Selection
            </h3>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] border-4 border-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="relative z-10">
              {/* Main Dream Heading */}
              <div className="mb-10">
                <p className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-2">Confirmed Goal</p>
                <h2 className="text-5xl font-black text-white uppercase italic leading-none tracking-tighter">
                  {dreamKey.replace(/-/g, ' ')}
                </h2>
              </div>

              {/* Selection Badges Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(responses).map(([question, answer]) => (
                  <div 
                    key={question} 
                    className="bg-white/5 border-2 border-white/10 rounded-2xl p-5 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <ClipboardCheck size={16} className="text-blue-400 group-hover:text-white" />
                      </div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">
                        {question.replace(/_/g, ' ')}
                      </p>
                    </div>
                    <p className="text-xl font-black text-white uppercase tracking-tight leading-tight">
                      {answer.replace(/_/g, ' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 px-6 py-2 bg-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                Selections Logged for Mentor Discussion
              </span>
            </div>
          </div>
        </div>

        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-12">
          <Target className="w-14 h-14 mx-auto text-green-600 mb-4" />
          <h1 className="text-4xl font-black mb-2">
            Your Personalized Roadmap
          </h1>
          <p className="text-lg text-gray-600">
            Dream → Clarity → Action
          </p>
        </div>

        {/* ---------- DREAM SUMMARY ---------- */}
        <div className="space-y-6 mb-12">
          <Card>
            <h2 className="text-xl font-bold mb-1">Confirmed Dream</h2>
            <p className="text-lg">{roadmap.confirmed_dream}</p>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-1">Exact Role</h2>
            <p className="text-lg">{roadmap.exact_role}</p>
          </Card>
        </div>

        {/* ---------- VIDEO SECTION ---------- */}
        <section className="mb-16">
          <h3 className="text-2xl font-black flex items-center gap-2 mb-4">
            <PlayCircle /> Expert Video Guidance
          </h3>

          <div className="aspect-video rounded-2xl overflow-hidden border-4 border-black shadow-xl">
            <iframe
              src={getDreamVideo(dreamKey)}
              title="Career Guidance Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {/* ---------- DETAILS ---------- */}
        <div className="space-y-6">

          <Card>
            <Lightbulb className="mb-2 text-orange-600" />
            <h3 className="font-bold text-lg mb-2">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {roadmap.required_skills.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-orange-100 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <BookOpen className="mb-2 text-indigo-600" />
            <h3 className="font-bold text-lg mb-2">Education & Training</h3>
            <p className="whitespace-pre-line">{roadmap.education_training}</p>
          </Card>

          <Card>
            <Clock className="mb-2 text-teal-600" />
            <h3 className="font-bold text-lg mb-2">Daily Routine</h3>
            <p className="whitespace-pre-line">{roadmap.daily_routine}</p>
          </Card>

          <Card>
            <Calendar className="mb-2 text-pink-600" />
            <h3 className="font-bold text-lg mb-2">Short‑Term Goals</h3>
            <ul className="list-disc pl-5 space-y-1">
              {roadmap.short_term_goals.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <ShieldCheck className="mb-2 text-green-600" />
            <h3 className="font-bold text-lg mb-2">Backup Options</h3>
            <ul className="list-disc pl-5 space-y-1">
              {roadmap.backup_options.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* ---------- MENTOR BOOKING ---------- */}
        <section className="mt-16">
          <h3 className="text-2xl font-black mb-4">
            Book a Mentor Session
          </h3>

          {/* ✅ CALENDLY EMBED (RELIABLE) */}
          <div className="border-4 border-black rounded-2xl overflow-hidden">
            <iframe
              src="https://calendly.com/your-mentor-link/30min"
              className="w-full h-[700px]"
              frameBorder="0"
            />
          </div>
        </section>

        {/* ---------- ACTIONS ---------- */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
          <Button
            onClick={handleWhatsApp}
            className="bg-[#25D366] text-white px-8 py-4 text-lg font-bold flex gap-2"
          >
            <MessageCircle /> Chat with Mentor
          </Button>

          <Button
            onClick={onStartNew}
            className="bg-black text-white px-8 py-4 text-lg font-bold flex gap-2"
          >
            <RotateCcw /> Start New Journey
          </Button>
        </div>
      </div>
    </div>
  );
}