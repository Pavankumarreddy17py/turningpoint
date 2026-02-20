import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ProgressBar } from '../components/ProgressBar';
import {
  getDreamCategory,
  getFirstQuestion,
  getNextQuestion,
  getTotalQuestionsForPath,
  Question,
} from '../data/dreamTrees';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuestionFlowPageProps {
  dreamKey: string;
  onComplete: (responses: Record<string, string>) => void;
  onBack: () => void;
}

export function QuestionFlowPage({
  dreamKey,
  onComplete,
  onBack,
}: QuestionFlowPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [error, setError] = useState('');
  const [questionHistory, setQuestionHistory] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const dreamCategory = getDreamCategory(dreamKey);

  useEffect(() => {
    setResponses({});
    setCurrentAnswer('');
    setError('');
    setCurrentStep(1);

    const firstQuestion = getFirstQuestion(dreamKey);
    if (firstQuestion) {
      setCurrentQuestion(firstQuestion);
      setQuestionHistory([firstQuestion]);
    } else {
      setCurrentQuestion(null);
      setQuestionHistory([]);
    }
  }, [dreamKey]);

  const validateAnswer = (question: Question, answer: string): boolean => {
    if (!answer || answer.trim() === '') {
      setError('Please provide an answer');
      return false;
    }

    if (question.type === 'number') {
      const num = parseFloat(answer);
      if (isNaN(num)) {
        setError('Please enter a valid number');
        return false;
      }
      if (question.validation?.min && num < question.validation.min) {
        setError(`Minimum value is ${question.validation.min}`);
        return false;
      }
      if (question.validation?.max && num > question.validation.max) {
        setError(`Maximum value is ${question.validation.max}`);
        return false;
      }
    }

    setError('');
    return true;
  };

  const handleNext = () => {
    if (!currentQuestion) return;

    if (!validateAnswer(currentQuestion, currentAnswer)) {
      return;
    }

    const newResponses = { ...responses, [currentQuestion.key]: currentAnswer };
    setResponses(newResponses);

    const nextQuestion = getNextQuestion(dreamKey, currentQuestion.key, currentAnswer);

    if (!nextQuestion) {
      onComplete(newResponses);
      return;
    }

    setCurrentQuestion(nextQuestion);
    setQuestionHistory([...questionHistory, nextQuestion]);
    setCurrentStep(currentStep + 1);
    setCurrentAnswer('');
    setError('');
  };

  const handlePrevious = () => {
    if (questionHistory.length <= 1) {
      onBack();
      return;
    }

    const newHistory = [...questionHistory];
    newHistory.pop();
    const previousQuestion = newHistory[newHistory.length - 1];
    const keysToKeep = new Set(newHistory.map((q) => q.key));
    const trimmedResponses = Object.fromEntries(
      Object.entries(responses).filter(([key]) => keysToKeep.has(key))
    );

    setQuestionHistory(newHistory);
    setResponses(trimmedResponses);
    setCurrentQuestion(previousQuestion);
    setCurrentStep(currentStep - 1);
    setCurrentAnswer(trimmedResponses[previousQuestion.key] || '');
    setError('');
  };

  const handleOptionSelect = (value: string) => {
    setCurrentAnswer(value);
    setError('');
  };

  const totalQuestions = getTotalQuestionsForPath(dreamKey, responses) || currentStep;
  const progress = Math.round((currentStep / Math.max(totalQuestions, currentStep)) * 100);

  if (!currentQuestion || !dreamCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {dreamCategory.name}
            </h2>
            <span className="text-sm text-gray-600">
              Question {currentStep}
            </span>
          </div>
          <ProgressBar
            current={currentStep}
            total={Math.max(totalQuestions, currentStep)}
            percentage={progress}
          />
        </div>

        <Card className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {currentQuestion.text}
          </h3>

          <div className="space-y-4">
            {currentQuestion.type === 'single' && currentQuestion.options && (
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      currentAnswer === option.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium text-gray-800">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'text' && (
              <Input
                type="text"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Type your answer here..."
                error={error}
              />
            )}

            {currentQuestion.type === 'number' && (
              <Input
                type="number"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Enter a number..."
                error={error}
                min={currentQuestion.validation?.min}
                max={currentQuestion.validation?.max}
              />
            )}
          </div>

          {error && currentQuestion.type === 'single' && (
            <p className="mt-4 text-sm text-red-600">{error}</p>
          )}
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious}>
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            Previous
          </Button>

          <Button onClick={handleNext}>
            Next
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Take your time. There are no wrong answers.
          </p>
        </div>
      </div>
    </div>
  );
}
