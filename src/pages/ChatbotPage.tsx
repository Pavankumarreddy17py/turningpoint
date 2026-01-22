import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';

interface ChatbotPageProps {
  onBack: () => void;
}

export function ChatbotPage({ onBack }: ChatbotPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl text-white">
            <MessageSquare size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase italic leading-none">J#₹ AI Assistant</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1 text-left">24/7 Guidance Support</p>
          </div>
        </div>
        <Button variant="outline" onClick={onBack} size="sm" className="border-2 border-black font-bold uppercase text-xs">
          <ArrowLeft size={14} className="mr-2" /> Back
        </Button>
      </div>

      {/* Chatbot Iframe Container */}
      <div className="w-full bg-gray-50 flex justify-center">
        <div className="w-full max-w-5xl h-[calc(100vh-100px)] shadow-2xl">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/OvM2ZuA4jMescDLX_2gp8"
            width="100%"
            style={{ height: '100%', minHeight: '700px' }}
            frameBorder="0"
            title="J#₹ Chatbot"
          ></iframe>
        </div>
      </div>
    </div>
  );
}