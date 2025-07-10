// Import React
import React from 'react';

// StudentsPage shows student features
function StudentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-orange-400 to-red-500 flex flex-col items-center justify-center p-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-white">Student Hub</h2>
      {/* Two feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Card: Connect with Faculty */}
        <div className="bg-gradient-to-br from-blue-500/20 to-pink-400/20 p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-3 text-white">Connect with Faculty</h3>
          <p className="text-white/80 mb-4">Find and connect with professors for guidance and mentorship.</p>
          <button className="bg-gradient-to-r from-red-500 to-pink-400 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform font-semibold">
            Browse Faculty
          </button>
        </div>
        {/* Card: Opportunities */}
        <div className="bg-gradient-to-br from-orange-500/20 to-pink-400/20 p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-3 text-white">Opportunities</h3>
          <p className="text-white/80 mb-4">Discover internships, workshops, and career opportunities.</p>
          <button className="bg-gradient-to-r from-orange-500 to-red-400 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform font-semibold">
            View Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentsPage; 