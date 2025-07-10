// Import React
import React from 'react';

// FacultyPage shows the faculty directory
function FacultyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-orange-400 to-red-500 flex flex-col items-center justify-center p-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-white">Faculty Directory</h2>
      {/* Faculty cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Example faculty cards */}
        {[{ name: 'Dr. Pankaj', role: 'HOD CSE', room: '205', color: 'from-red-500 to-pink-400' },
          { name: 'Anurag Sir', role: 'Senior Faculty', room: '208', color: 'from-blue-500 to-pink-400' },
          { name: 'Nitesh Sir', role: 'CSE Faculty', room: '210', color: 'from-orange-500 to-red-400' }
        ].map(faculty => (
          <div key={faculty.name} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/20 text-center hover:scale-105 transition-transform">
            {/* Circle avatar with first letter */}
            <div className={`w-16 h-16 bg-gradient-to-r ${faculty.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
              {faculty.name[0]}
            </div>
            <h3 className="font-semibold text-lg mb-1 text-white">{faculty.name}</h3>
            <p className="text-white/80 mb-1">{faculty.role}</p>
            <p className="text-white/60 text-sm mb-2">Room {faculty.room}</p>
            <button className="mt-2 bg-gradient-to-r from-red-500 to-pink-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform font-semibold">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyPage; 