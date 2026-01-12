import { useState } from 'react';
import { Button } from './components/Button';
import { LandingPage } from './pages/LandingPage';
import { DreamSelectionPage } from './pages/DreamSelectionPage';
import { QuestionFlowPage } from './pages/QuestionFlowPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { RoadmapInfoPage } from './pages/RoadmapInfo';
import { HowItWorksPage } from './pages/HowItWorks';
import { ForParentsPage } from './pages/ForParents';
import { AiGuidancePage } from './pages/AiGuidance';
import { FAQsPage } from './pages/FAQs';
import { SignupPage } from './pages/SignupPage'; 
import { LoginPage } from './pages/LoginPage'; 
import { Menu, X } from 'lucide-react'; // Added Menu icons

import { supabase } from './lib/supabase';
import { getDreamCategory } from './data/dreamTrees';
import logoImg from './assets/main logo of tp.png';

// 1. UPDATED APP STATE TYPE
type AppState = 'landing' | 'selection' | 'questions' | 'confirmation' | 'roadmap' | 
                'how-it-works' | 'parents' | 'ai-guidance' | 'faq' | 'roadmap-info' |
                'signup' | 'login';

interface SessionData {
  studentId: string | null;
  sessionId: string | null;
  dreamKey: string | null;
  responses: Record<string, string>;
  roadmap: any | null;
}

function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [sessionData, setSessionData] = useState<SessionData>({
    studentId: null,
    sessionId: null,
    dreamKey: null,
    responses: {},
    roadmap: null,
  });
  const [loading, setLoading] = useState(false);

  // Navigation Handlers
  const handleGetStarted = () => setAppState('selection');
  const handleBackToLanding = () => setAppState('landing');
  const handleBackToSelection = () => setAppState('selection');
  const handleBackToQuestions = () => setAppState('questions');

  // Logic for Session/Roadmap
  const handleSelectDream = async (dreamKey: string) => {
    try {
      const student = await createOrGetStudent();
      const session = await createDreamSession(student.id, dreamKey);
      setSessionData({ 
        ...sessionData, 
        studentId: student.id, 
        sessionId: session.id, 
        dreamKey 
      });
      setAppState('questions');
    } catch (error) { 
      console.error('Error starting session:', error); 
    }
  };

  const handleQuestionComplete = async (responses: Record<string, string>) => {
    setSessionData({ ...sessionData, responses });
    if (sessionData.sessionId) await saveResponses(sessionData.sessionId, responses);
    setAppState('confirmation');
  };

  const handleConfirmRoadmap = async () => {
    setLoading(true); 
    setAppState('roadmap');
    try {
      const dreamCategory = getDreamCategory(sessionData.dreamKey!);
      const roadmap = await generateRoadmap(
        sessionData.dreamKey!, 
        dreamCategory?.name || 'Your Dream', 
        sessionData.responses
      );
      if (sessionData.sessionId) {
        await saveRoadmap(sessionData.sessionId, roadmap);
        await updateSessionComplete(sessionData.sessionId);
      }
      setSessionData({ ...sessionData, roadmap });
    } catch (error) { 
      console.error('Error generating roadmap:', error); 
    } finally { 
      setLoading(false); 
    }
  };

  const handleStartNew = () => {
    setSessionData({ 
        studentId: sessionData.studentId, 
        sessionId: null, 
        dreamKey: null, 
        responses: {}, 
        roadmap: null 
    });
    setAppState('selection');
  };

  // Helper to change page and close menu
  const navigateTo = (state: AppState) => {
    setAppState(state);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- UNIVERSAL RESPONSIVE NAVBAR --- */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-[100] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToLanding}>
            <img src={logoImg} alt="Turning Point" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-black leading-tight">Turning Point</span>
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">HJR Platform</span>
            </div>
          </div>
          
          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-gray-600">
            <button onClick={() => setAppState('landing')} className="hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => setAppState('selection')} className="hover:text-blue-600 transition-colors">Categories</button>
            <button onClick={() => setAppState('roadmap-info')} className="hover:text-blue-600 transition-colors">Roadmaps</button>
            <button onClick={() => setAppState('how-it-works')} className="hover:text-blue-600 transition-colors">How It Works</button>
            <button onClick={() => setAppState('parents')} className="hover:text-blue-600 transition-colors">For Parents</button>
            <button onClick={() => setAppState('ai-guidance')} className="hover:text-blue-600 transition-colors">AI Guidance</button>
            <button onClick={() => setAppState('faq')} className="hover:text-blue-600 transition-colors">FAQs</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setAppState('login')} 
              className="hidden sm:block text-xs font-bold text-gray-500 hover:text-black uppercase"
            >
              Login / Signup
            </button>
            
            <Button onClick={handleGetStarted} variant="primary" size="sm" className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase shadow-md">
              Start
            </Button>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="lg:hidden p-1 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-xl flex flex-col p-6 gap-4 text-sm font-bold uppercase tracking-widest text-gray-600 animate-in slide-in-from-top duration-200">
            <button onClick={() => navigateTo('landing')} className="text-left border-b pb-2">Home</button>
            <button onClick={() => navigateTo('selection')} className="text-left border-b pb-2">Categories</button>
            <button onClick={() => navigateTo('roadmap-info')} className="text-left border-b pb-2">Roadmaps</button>
            <button onClick={() => navigateTo('how-it-works')} className="text-left border-b pb-2">How It Works</button>
            <button onClick={() => navigateTo('parents')} className="text-left border-b pb-2">For Parents</button>
            <button onClick={() => navigateTo('ai-guidance')} className="text-left border-b pb-2">AI Guidance</button>
            <button onClick={() => navigateTo('faq')} className="text-left border-b pb-2">FAQs</button>
            <button onClick={() => navigateTo('login')} className="text-left text-blue-600">Login / Signup</button>
          </div>
        )}
      </nav>

      {/* --- PAGE CONTENT --- */}
      <main>
        {appState === 'signup' && (
          <SignupPage onSwitch={() => setAppState('login')} onSignupSuccess={() => setAppState('login')} />
        )}
        {appState === 'login' && (
          <LoginPage onSwitch={() => setAppState('signup')} onLoginSuccess={() => setAppState('landing')} />
        )}
        {appState === 'landing' && (
          <LandingPage onGetStarted={handleGetStarted} setAppState={setAppState} />
        )}
        {appState === 'roadmap-info' && (
          <RoadmapInfoPage onBack={handleBackToLanding} onStart={handleGetStarted} />
        )}
        {appState === 'how-it-works' && (
          <HowItWorksPage onBack={handleBackToLanding} onStart={handleGetStarted} />
        )}
        {appState === 'parents' && <ForParentsPage onBack={handleBackToLanding} />}
        {appState === 'ai-guidance' && <AiGuidancePage onBack={handleBackToLanding} />}
        {appState === 'faq' && <FAQsPage onBack={handleBackToLanding} />}
        {appState === 'selection' && (
          <DreamSelectionPage onSelectDream={handleSelectDream} onBack={handleBackToLanding} />
        )}
        {appState === 'questions' && sessionData.dreamKey && (
          <QuestionFlowPage dreamKey={sessionData.dreamKey} onComplete={handleQuestionComplete} onBack={handleBackToSelection} />
        )}
        {appState === 'confirmation' && sessionData.dreamKey && (
          <ConfirmationPage dreamKey={sessionData.dreamKey} responses={sessionData.responses} onConfirm={handleConfirmRoadmap} onBack={handleBackToQuestions} />
        )}
        {appState === 'roadmap' && (
          <RoadmapPage 
            roadmap={sessionData.roadmap} 
            loading={loading} 
            onStartNew={handleStartNew} 
            dreamKey={sessionData.dreamKey || ''}
          />
        )}
      </main>
    </div>
  );
}

// --- DATABASE FUNCTIONS (Supabase) ---

async function createOrGetStudent() {
  const sessionKey = 'hjr_student_id';
  let studentId = localStorage.getItem(sessionKey);
  if (studentId) {
    const { data: existing } = await supabase.from('students').select('*').eq('id', studentId).maybeSingle();
    if (existing) return existing;
  }
  const { data: student, error } = await supabase.from('students').insert({ name: 'Anonymous Student', age: null, class_level: null }).select().single();
  if (error) throw error;
  localStorage.setItem(sessionKey, student.id);
  return student;
}

async function createDreamSession(studentId: string, dreamKey: string) {
  const { data: session, error } = await supabase.from('dream_sessions').insert({
      student_id: studentId,
      dream_category: dreamKey,
      current_step: 0,
      total_steps: 0,
      progress_percentage: 0,
    }).select().single();
  if (error) throw error;
  return session;
}

async function saveResponses(sessionId: string, responses: Record<string, string>) {
  const entries = Object.entries(responses).map(([key, value], index) => ({
    session_id: sessionId,
    question_key: key,
    question_text: key,
    answer: value,
    step_number: index + 1,
  }));
  const { error } = await supabase.from('session_responses').insert(entries);
  if (error) throw error;
}

async function generateRoadmap(dreamKey: string, dreamName: string, responses: Record<string, string>) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const response = await fetch(`${supabaseUrl}/functions/v1/generate-roadmap`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${supabaseAnonKey}` },
    body: JSON.stringify({ dreamCategory: dreamKey, dreamName, responses }),
  });
  if (!response.ok) throw new Error('Failed to generate roadmap');
  return await response.json();
}

async function saveRoadmap(sessionId: string, roadmap: any) {
  const { error } = await supabase.from('dream_roadmaps').insert({
    session_id: sessionId,
    confirmed_dream: roadmap.confirmed_dream,
    exact_role: roadmap.exact_role,
    required_skills: roadmap.required_skills,
    education_training: roadmap.education_training,
    daily_routine: roadmap.daily_routine,
    short_term_goals: roadmap.short_term_goals,
    backup_options: roadmap.backup_options,
  });
  if (error) throw error;
}

async function updateSessionComplete(sessionId: string) {
  const { error } = await supabase.from('dream_sessions').update({
      is_completed: true,
      completed_at: new Date().toISOString(),
      progress_percentage: 100,
    }).eq('id', sessionId);
  if (error) throw error;
}

export default App;