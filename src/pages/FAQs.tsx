import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';
// ✅ 1. Import your global background image
import faqsBg from '../assets/faq.png';

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
    <div 
      className="min-h-screen py-24"
      style={{
        /* ✅ 2. Applied background image with a 90% white overlay for perfect readability */
        backgroundImage: ` url('${faqsBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* ✅ 3. Added relative z-10 so content floats above the background */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-800 hover:text-black mb-12 font-bold uppercase text-xs transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex"
        >
          <ArrowLeft size={16} /> Go back
        </button>

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-black">
            FAQs
          </h2>
          <p className="text-gray-700 font-bold text-lg max-w-xl mx-auto">
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
                className={`rounded-2xl border-4 border-black transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-1' 
                    : 'bg-white/80 backdrop-blur-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-xl font-black text-black uppercase tracking-tight pr-4">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full border-2 border-black shrink-0 transition-colors ${isOpen ? 'bg-black text-white' : 'bg-transparent text-black'}`}>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* ✅ Added a smooth grid transition so the answer slides down nicely! */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 text-gray-700 font-medium text-lg border-t-2 border-black/10 mt-2">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-black rounded-full px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-black font-black uppercase tracking-wider text-sm">
              Still unsure? Start exploring and let clarity come step by step.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}