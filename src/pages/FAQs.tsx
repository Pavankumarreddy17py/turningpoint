import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQsPage({ onBack }: { onBack: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is Turning Point free to use?",
      a: "Yes. You can explore dreams, answer AI questions, and get initial guidance completely free."
    },
    {
      q: "Who should use this platform?",
      a: "Students from Class 7 onwards, college students, job seekers, and anyone confused about their future path."
    },
    {
      q: "What if I don’t have a dream yet?",
      a: "That’s normal. Our AI helps you discover interests through a guided discovery flow."
    },
    {
      q: "Is this platform only for toppers?",
      a: "No. Turning Point is built for everyone—average students, slow learners, and late starters included."
    },
    {
      q: "Can parents use this with their children?",
      a: "Yes. Parents are encouraged to explore the platform together with their children."
    },
    {
      q: "Is my data safe here?",
      a: "Absolutely. Your answers are private and used only to generate your personalized roadmap."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-10 pt-24 max-w-4xl mx-auto">

      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-12"
      >
        <ArrowLeft size={16} /> Go back
      </button>

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold mb-3">
          FAQs
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Quick answers to common questions before you begin your journey.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="space-y-5">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen ? 'bg-white shadow-lg' : 'bg-gray-50'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        Still unsure? Start exploring and let clarity come step by step.
      </div>
    </div>
  );
}
