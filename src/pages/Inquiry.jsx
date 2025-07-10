// Import React
import React from 'react';

// Inquiry & Chat page
function Inquiry() {
  // FAQ data
  const faqs = [
    { q: 'How do I connect with faculty?', a: 'Browse the faculty directory and send connection requests.' },
    { q: 'Can I use the bot for urgent questions?', a: 'Yes! The AI assistant is available 24/7 for quick help.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-orange-400 to-red-500 flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Inquiry & Chat</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Card: Chat with Bot */}
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-400/20 p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-3 text-white">Quick Questions?</h3>
          <p className="text-white/80 mb-4">Get instant answers from our AI assistant.</p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform font-semibold">
            Chat with Bot 🤖
          </button>
        </div>
        {/* Card: Connect with Peers */}
        <div className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-3 text-white">Connect with Peers</h3>
          <p className="text-white/80 mb-4">Chat with other students and faculty members.</p>
          <button className="bg-gradient-to-r from-orange-500 to-red-400 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform font-semibold">
            Start Chat 💬
          </button>
        </div>
      </div>
      {/* FAQ section */}
      <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-4 text-white">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/20">
              <h4 className="font-semibold mb-2 text-white">{faq.q}</h4>
              <p className="text-white/80">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inquiry; 