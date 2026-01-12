export function FAQsPage({ onBack }: { onBack: () => void }) {
    const faqs = [
      { q: "Is this platform free?", a: "Yes, you can begin exploring and get initial guidance at no cost." },
      { q: "Is this only for academic toppers?", a: "Not at all. It is for every student from Class 7 onwards." },
      { q: "Can parents use this with their children?", a: "Yes, we encourage joint exploration to improve alignment." },
      { q: "What if I don't have a dream yet?", a: "Our AI helps you discover interests through a discovery flow." }
    ];
  
    return (
      <div className="min-h-screen bg-white p-10 pt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b pb-6">
              <h4 className="text-xl font-bold mb-2 text-blue-900">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }