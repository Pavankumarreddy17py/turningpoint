import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { getDreamCategory, getQuestion } from '../data/dreamTrees';
import { CheckCircle, ArrowLeft, MessageCircle, Phone, ShieldAlert } from 'lucide-react';

interface ConfirmationPageProps {
  dreamKey: string;
  responses: Record<string, string>;
  onConfirm: () => void;
  onBack: () => void;
}

export function ConfirmationPage({
  dreamKey,
  responses,
  onConfirm,
  onBack,
}: ConfirmationPageProps) {
  const dreamCategory = getDreamCategory(dreamKey);
  const isEmergency = dreamKey === 'emergency_services';

  const getReadableAnswer = (questionKey: string, answer: string): string => {
    const question = getQuestion(dreamKey, questionKey);
    if (!question) return answer;

    if (question.type === 'single' && question.options) {
      const option = question.options.find((opt) => opt.value === answer);
      return option?.label || answer;
    }

    return answer;
  };

  const handleWhatsAppMentor = () => {
    const phone = '917259771515';
    const mainDream = dreamCategory?.name.toUpperCase() || 'EMERGENCY';
    const selectionDetails = Object.entries(responses)
      .map(([q, a]) => {
        const question = getQuestion(dreamKey, q);
        const cleanQ = question ? question.text.toUpperCase() : q.toUpperCase();
        const cleanA = getReadableAnswer(q, a).toUpperCase();
        return `• *${cleanQ}:* ${cleanA}`;
      })
      .join('%0A');

    const message = encodeURIComponent(
      `*EMERGENCY CONTACT REQUEST*%0A%0A` +
      `*CATEGORY:* ${mainDream}%0A${selectionDetails}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  if (!dreamCategory) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            {isEmergency ? (
              <ShieldAlert className="w-16 h-16 text-red-600 animate-pulse" />
            ) : (
              <CheckCircle className="w-16 h-16 text-green-600" />
            )}
          </div>
          <h1 className="text-4xl font-black text-gray-800 mb-3 uppercase italic tracking-tighter">
            {isEmergency ? 'Emergency Contacts Ready' : 'Dream Path Clarified!'}
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            {isEmergency 
              ? 'Below are the verified numbers for your selection. Please use them immediately if needed.' 
              : "Review your responses below to generate your personalized roadmap."
            }
          </p>
        </div>

        {/* --- MAIN CARD --- */}
        <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[2rem]">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase italic">
              {dreamCategory.name}
            </h2>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-widest">{dreamCategory.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black text-gray-800 mb-4 uppercase tracking-tight">
              {isEmergency ? 'Selected Emergency Numbers:' : 'Your Responses:'}
            </h3>
            {Object.entries(responses).map(([questionKey, answer]) => {
              const question = getQuestion(dreamKey, questionKey);
              if (!question) return null;

              return (
                <div
                  key={questionKey}
                  className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-2"
                >
                  <p className="text-sm font-bold text-gray-500 uppercase">
                    {question.text}
                  </p>
                  <p className="text-lg font-black text-blue-600 uppercase italic">
                    {getReadableAnswer(questionKey, answer)}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* --- DYNAMIC FOOTER SECTION --- */}
        {isEmergency ? (
          <div className="space-y-6">
            <div className="bg-red-50 border-4 border-red-200 rounded-[2rem] p-6 text-center">
              <h3 className="text-xl font-black text-red-700 mb-2 uppercase italic">⚠️ Action Required</h3>
              <p className="text-red-900 font-bold mb-4">
                Dial the numbers shown above directly from your phone for immediate assistance.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppMentor}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-black uppercase flex items-center justify-center gap-2 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                >
                  <MessageCircle size={20} /> Chat with Mentor
                </Button>
                <Button 
                  variant="outline" 
                  onClick={onBack}
                  className="border-4 border-black px-8 py-4 font-black uppercase text-gray-700 rounded-2xl"
                >
                  <ArrowLeft size={18} className="mr-2" /> Change Category
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
              <p className="text-gray-700">We'll analyze your responses and create a personalized roadmap.</p>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2 inline" />
                Go Back
              </Button>

              <Button onClick={onConfirm} size="lg">
                Generate My Roadmap
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}