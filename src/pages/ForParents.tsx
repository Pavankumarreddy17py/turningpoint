import { ShieldCheck, HeartHandshake, Map, Compass } from 'lucide-react';

export function ForParentsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-green-50 p-10 pt-24 text-center">
      <h2 className="text-4xl font-bold mb-6">For Parents</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-16">Build trust and reduce career stress with shared decision-making.</p>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-3xl shadow-sm text-left">
          <ShieldCheck className="text-green-600 mb-4" />
          <h4 className="text-xl font-bold mb-2">Emotional Safety</h4>
          <p className="text-gray-600">A supportive environment where children can express true interests without fear of judgment.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm text-left">
          <Map className="text-green-600 mb-4" />
          <h4 className="text-xl font-bold mb-2">Backup Reassurance</h4>
          <p className="text-gray-600">We balance passion with stability by always including secondary career paths.</p>
        </div>
      </div>
    </div>
  );
}