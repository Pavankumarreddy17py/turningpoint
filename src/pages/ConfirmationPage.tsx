import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { getDreamCategory, getQuestion } from '../data/dreamTrees';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

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

  const getReadableAnswer = (questionKey: string, answer: string): string => {
    const question = getQuestion(dreamKey, questionKey);
    if (!question) return answer;

    if (question.type === 'single' && question.options) {
      const option = question.options.find((opt) => opt.value === answer);
      return option?.label || answer;
    }

    return answer;
  };

  if (!dreamCategory) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Dream Path Clarified!
          </h1>
          <p className="text-lg text-gray-600">
            Review your responses below. When you're ready, we'll create your
            personalized roadmap.
          </p>
        </div>

        <Card className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {dreamCategory.name}
            </h2>
            <p className="text-gray-600">{dreamCategory.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Your Responses:
            </h3>
            {Object.entries(responses).map(([questionKey, answer]) => {
              const question = getQuestion(dreamKey, questionKey);
              if (!question) return null;

              return (
                <div
                  key={questionKey}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {question.text}
                  </p>
                  <p className="text-base font-semibold text-blue-600">
                    {getReadableAnswer(questionKey, answer)}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
          <p className="text-gray-700">
            We'll analyze your responses and create a personalized roadmap with:
          </p>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Your confirmed dream area and exact role</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Required skills and education/training needed</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Daily routine suggestions and short-term goals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Backup options and alternative paths</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            Go Back
          </Button>

          <Button onClick={onConfirm} size="lg">
            Generate My Roadmap
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Button>
        </div>
      </div>
    </div>
  );
}
