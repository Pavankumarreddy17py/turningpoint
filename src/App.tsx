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
import feedbackBg from "./assets/feedback.png";
// Removed Supabase import
import { getDreamCategory } from './data/dreamTrees';
import logoImg from './assets/main logo of tp.png';

// ✅ IMPORT YOUR LOCAL GENERATOR HERE
import { generateRoadmap } from './roadmaps'; 

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

  // Logic for Session/Roadmap (Now completely local)
  const handleSelectDream = (dreamKey: string) => {
    // Replaced Supabase student/session creation with local mock data
    setSessionData({ 
      ...sessionData, 
      studentId: 'local-student', 
      sessionId: `session-${Date.now()}`, 
      dreamKey 
    });
    setAppState('questions');
  };

  const handleQuestionComplete = (responses: Record<string, string>) => {
    // Replaced Supabase saveResponses with purely local state
    setSessionData({ ...sessionData, responses });
    setAppState('confirmation');
  };

  const handleConfirmRoadmap = async () => {
    if (sessionData.dreamKey === 'emergency_services') {
      setAppState('roadmap'); 
      return; 
    }

    setLoading(true); 
    setAppState('roadmap');
    
    try {
      const dreamCategory = getDreamCategory(sessionData.dreamKey!);
      
      // ✅ CALLING YOUR LOCAL FUNCTION INSTEAD OF SUPABASE FETCH
      // Because it's local, we use a setTimeout to simulate a tiny loading delay
      setTimeout(() => {
        const roadmap = generateRoadmap(
          sessionData.dreamKey!, 
          dreamCategory?.name || 'Your Dream', 
          sessionData.responses
        );
        
        setSessionData(prev => ({ ...prev, roadmap }));
        setLoading(false);
      }, 800);

    } catch (error) { 
      console.error('Error generating roadmap:', error); 
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

  const submitFeedback = () => {
    if (rating === 0) return alert("Please select a rating!");
    setSubmittingFeedback(true);
    
    // Simulating a backend save locally
    setTimeout(() => {
      console.log("Feedback saved locally:", { rating, comment });
      alert("Thank you for your feedback!");
      setAppState('landing');
      setRating(0);
      setComment("");
      setSubmittingFeedback(false);
    }, 500);
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
          </div>
        )}
      </nav>

      <main>
        {appState === 'landing' && <LandingPage onGetStarted={handleGetStarted} setAppState={setAppState} />}
        {appState === 'roadmap-info' && <RoadmapInfoPage onBack={handleBackToLanding} onStart={handleGetStarted} />}
        {appState === 'how-it-works' && <HowItWorksPage onBack={handleBackToLanding} onStart={handleGetStarted} />}
        {appState === 'parents' && <ForParentsPage onBack={handleBackToLanding} />}
        {appState === 'ai-guidance' && <AiGuidancePage onBack={handleBackToLanding} />}
        {appState === 'faq' && <FAQsPage onBack={handleBackToLanding} />}
        {appState === 'chatbot' && <ChatbotPage onBack={() => setAppState('landing')} />}
        
        {/* FEEDBACK PAGE UI */}
        {appState === 'feedback' && (
          <div 
            className="min-h-[80vh] flex items-center justify-center p-6"
            style={{
              /* ✅ Background image with a 90% white overlay */
              backgroundImage: `url('${feedbackBg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            {/* ✅ Added bg-white/80 and backdrop-blur-md for a frosted glass effect on the card! */}
            <div className="max-w-md w-full bg-white/80 backdrop-blur-md border-4 border-black p-8 rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10">
              <h2 className="text-3xl font-black text-black uppercase italic mb-2">Your Feedback</h2>
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button key={num} onClick={() => setRating(num)} className="hover:scale-110 transition-transform">
                    <Star 
                      size={32} 
                      fill={rating >= num ? "black" : "none"} 
                      className={rating >= num ? "text-black" : "text-gray-400"} 
                    />
                  </button>
                ))}
              </div>
              <textarea 
                className="w-full border-2 border-black rounded-2xl p-4 h-32 mb-6 bg-white shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-black transition-all"
                placeholder="Share your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button 
                onClick={submitFeedback} 
                disabled={submittingFeedback} 
                className="w-full bg-black text-white py-4 border-2 border-black font-black uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
              >
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

export default App;