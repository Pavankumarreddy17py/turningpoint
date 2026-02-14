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
import { ChatbotPage } from './pages/ChatbotPage';
import { Menu, X, Star, Send } from 'lucide-react'; 
import { supabase } from './lib/supabase';
import { getDreamCategory } from './data/dreamTrees';
import logoImg from './assets/main logo of tp.png';

// import { SignupPage } from './pages/SignupPage'; 
// import { LoginPage } from './pages/LoginPage'; 

// 1. UPDATED APP STATE TYPE
type AppState = 'landing' | 'selection' | 'questions' | 'confirmation' | 'roadmap' | 
                'how-it-works' | 'parents' | 'ai-guidance' | 'faq' | 'roadmap-info' |
                 'feedback' | 'chatbot';

interface SessionData {
  studentId: string | null;
  sessionId: string | null;
  dreamKey: string | null;
  responses: Record<string, string>;
  roadmap: any | null;
}

function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sessionData, setSessionData] = useState<SessionData>({
    studentId: null,
    sessionId: null,
    dreamKey: null,
    responses: {},
    roadmap: null,
  });
  const [loading, setLoading] = useState(false);

  // --- FEEDBACK STATE ---
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submittingFeedback, setSubmittingFeedback] = useState(false);

  // Navigation Handlers
  const handleGetStarted = () => setAppState('selection');
  const handleBackToLanding = () => setAppState('landing');
  const handleBackToSelection = () => setAppState('selection');
  const handleBackToQuestions = () => setAppState('questions');

  const navigateTo = (state: AppState) => {
    setAppState(state);
    setIsMenuOpen(false);
  };

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
    // 1. Check if this is the Emergency Services category
    if (sessionData.dreamKey === 'emergency_services') {
      setAppState('roadmap'); // Move to the summary page immediately
      return; // Stop the function here so no AI roadmap is generated
    }

    // 2. Otherwise, proceed with normal AI generation for other dreams
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

  const submitFeedback = async () => {
    if (rating === 0) return alert("Please select a rating!");
    setSubmittingFeedback(true);
    try {
      const { error } = await supabase.from('feedback').insert({
        student_id: sessionData.studentId,
        rating,
        comment
      });
      if (error) throw error;
      alert("Thank you for your feedback!");
      setAppState('landing');
      setRating(0);
      setComment("");
    } catch (err) {
      console.error(err);
    } finally {
      setSubmittingFeedback(false);
    }
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
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">J#₹ Platform</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-gray-600">
            <button onClick={() => navigateTo('landing')} className="hover:text-blue-600">Home</button>
            <button onClick={() => navigateTo('selection')} className="hover:text-blue-600">Categories</button>
            <button onClick={() => navigateTo('roadmap-info')} className="hover:text-blue-600">Roadmaps</button>
            <button onClick={() => navigateTo('how-it-works')} className="hover:text-blue-600">How It Works</button>
            <button onClick={() => navigateTo('feedback')} className="hover:text-blue-600">Feedback</button>
            <button onClick={() => navigateTo('faq')} className="hover:text-blue-600">FAQs</button>
          </div>

          <div className="flex items-center gap-4">
            {/* <button 
              onClick={() => navigateTo('login')} 
              className="hidden sm:block text-xs font-bold text-gray-500 hover:text-black uppercase"
            >
              Login / Signup
            </button> */}
            
            <Button onClick={handleGetStarted} variant="primary" size="sm" className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase shadow-md">
              Start
            </Button>

            <button className="lg:hidden p-1 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-xl flex flex-col p-6 gap-4 text-sm font-bold uppercase tracking-widest text-gray-600 animate-in slide-in-from-top duration-200">
            <button onClick={() => navigateTo('landing')} className="text-left border-b pb-2">Home</button>
            <button onClick={() => navigateTo('selection')} className="text-left border-b pb-2">Categories</button>
            <button onClick={() => navigateTo('feedback')} className="text-left border-b pb-2">Feedback</button>
            <button onClick={() => navigateTo('faq')} className="text-left border-b pb-2">FAQs</button>
            {/* <button onClick={() => navigateTo('login')} className="text-left text-blue-600">Login / Signup</button> */}
          </div>
        )}
      </nav>

      <main>
        {/* {appState === 'signup' && <SignupPage onSwitch={() => setAppState('login')} onSignupSuccess={() => setAppState('login')} />}
        {appState === 'login' && <LoginPage onSwitch={() => setAppState('signup')} onLoginSuccess={() => setAppState('landing')} />} */}
        {appState === 'landing' && <LandingPage onGetStarted={handleGetStarted} setAppState={setAppState} />}
        {appState === 'roadmap-info' && <RoadmapInfoPage onBack={handleBackToLanding} onStart={handleGetStarted} />}
        {appState === 'how-it-works' && <HowItWorksPage onBack={handleBackToLanding} onStart={handleGetStarted} />}
        {appState === 'parents' && <ForParentsPage onBack={handleBackToLanding} />}
        {appState === 'ai-guidance' && <AiGuidancePage onBack={handleBackToLanding} />}
        {appState === 'faq' && <FAQsPage onBack={handleBackToLanding} />}
        {appState === 'chatbot' && <ChatbotPage onBack={() => setAppState('landing')} />}
        
        {/* FEEDBACK PAGE UI */}
        {appState === 'feedback' && (
          <div className="min-h-[80vh] flex items-center justify-center p-6 bg-white">
            <div className="max-w-md w-full border-4 border-black p-8 rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black uppercase italic mb-2">Your Feedback</h2>
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button key={num} onClick={() => setRating(num)}>
                    <Star size={32} fill={rating >= num ? "black" : "none"} className={rating >= num ? "text-black" : "text-gray-300"} />
                  </button>
                ))}
              </div>
              <textarea 
                className="w-full border-2 border-black rounded-2xl p-4 h-32 mb-6"
                placeholder="Share your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button onClick={submitFeedback} disabled={submittingFeedback} className="w-full bg-black text-white py-4 font-black uppercase flex items-center justify-center gap-2">
                {submittingFeedback ? "Sending..." : <>Submit <Send size={20} /></>}
              </Button>
            </div>
          </div>
        )}

        {appState === 'selection' && <DreamSelectionPage onSelectDream={handleSelectDream} onBack={handleBackToLanding} />}
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
            responses={sessionData.responses || {}}
          />
        )}
      </main>
    </div>
  );
}

// --- DATABASE FUNCTIONS ---
async function createOrGetStudent() {
  const sessionKey = 'J#₹_student_id';
  let studentId = localStorage.getItem(sessionKey);
  if (studentId) {
    const { data: existing } = await supabase.from('students').select('*').eq('id', studentId).maybeSingle();
    if (existing) return existing;
  }
  const { data: student, error } = await supabase.from('students').insert({ name: 'Anonymous Student' }).select().single();
  if (error) throw error;
  localStorage.setItem(sessionKey, student.id);
  return student;
}

async function createDreamSession(studentId: string, dreamKey: string) {
  const { data: session, error } = await supabase.from('dream_sessions').insert({
      student_id: studentId,
      dream_category: dreamKey,
    }).select().single();
  if (error) throw error;
  return session;
}

async function saveResponses(sessionId: string, responses: Record<string, string>) {
  const entries = Object.entries(responses).map(([key, value], index) => ({
    session_id: sessionId,
    question_key: key,
    answer: value,
    step_number: index + 1,
  }));
  await supabase.from('session_responses').insert(entries);
}

async function generateRoadmap(dreamKey: string, dreamName: string, responses: Record<string, string>) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const response = await fetch(`${supabaseUrl}/functions/v1/generate-roadmap`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${supabaseAnonKey}` },
    body: JSON.stringify({ dreamCategory: dreamKey, dreamName, responses }),
  });
  return await response.json();
}

async function saveRoadmap(sessionId: string, roadmap: any) {
  await supabase.from('dream_roadmaps').insert({
    session_id: sessionId,
    confirmed_dream: roadmap.confirmed_dream,
    exact_role: roadmap.exact_role,
    required_skills: roadmap.required_skills,
    education_training: roadmap.education_training,
    daily_routine: roadmap.daily_routine,
    short_term_goals: roadmap.short_term_goals,
    backup_options: roadmap.backup_options,
  });
}

async function updateSessionComplete(sessionId: string) {
  await supabase.from('dream_sessions').update({ is_completed: true }).eq('id', sessionId);
}

export default App;