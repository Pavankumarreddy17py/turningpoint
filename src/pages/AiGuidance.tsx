import { Brain, Target, Sparkles } from 'lucide-react';
export function AiGuidancePage({ onBack }: { onBack: () => void }) {
  // Use onBack in your JSX
  return (
    <div className="min-h-screen bg-blue-50 p-10 pt-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Smart AI Guidance</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Target className="text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold mb-2">Dream Readiness Score</h4>
            <p className="text-sm text-gray-500">A data-driven score based on your clarity, skill readiness, and academic alignment.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Brain className="text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold mb-2">Relevant Questioning</h4>
            <p className="text-sm text-gray-500">No generic advice. The AI only asks what is needed based on your previous answers.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Sparkles className="text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold mb-2">Actionable Logic</h4>
            <p className="text-sm text-gray-500">Every roadmap is built with local Indian contexts and real-world milestones.</p>
          </div>
        </div>
      </div>
    </div>
  );
}