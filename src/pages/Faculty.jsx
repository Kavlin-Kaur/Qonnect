// Import React
import React from 'react';

// Faculty Directory page
function Faculty() {
  // Expanded faculty data inspired by Shoolini University
  const facultyList = [
    { name: 'Dr. Pankaj Sharma', role: 'HOD CSE', department: 'Computer Science', specialization: 'AI & ML', room: '205', linkedin: 'https://linkedin.com/in/pankajsharma', achievements: 'Published 20+ papers in AI', color: 'from-red-500 to-pink-400' },
    { name: 'Dr. Anurag Mehta', role: 'Senior Faculty', department: 'Biotechnology', specialization: 'Genomics', room: '208', linkedin: 'https://linkedin.com/in/anuragmehta', achievements: 'Shoolini Research Award 2022', color: 'from-blue-500 to-pink-400' },
    { name: 'Dr. Nitesh Gupta', role: 'CSE Faculty', department: 'Computer Science', specialization: 'Cybersecurity', room: '210', linkedin: 'https://linkedin.com/in/niteshgupta', achievements: 'Best Teacher Award 2021', color: 'from-orange-500 to-red-400' },
    { name: 'Dr. Ritu Sharma', role: 'Professor', department: 'Pharmacy', specialization: 'Pharmacology', room: '305', linkedin: 'https://linkedin.com/in/ritusharma', achievements: 'Patent holder in drug delivery', color: 'from-pink-500 to-yellow-400' },
    { name: 'Dr. Rajesh Kumar', role: 'Dean', department: 'Management', specialization: 'Marketing', room: '410', linkedin: 'https://linkedin.com/in/rajeshkumar', achievements: 'Authored 3 books on marketing', color: 'from-purple-500 to-pink-400' },
    { name: 'Dr. Neha Verma', role: 'Assistant Professor', department: 'Food Technology', specialization: 'Food Safety', room: '112', linkedin: 'https://linkedin.com/in/nehaverma', achievements: 'Young Scientist Award', color: 'from-yellow-500 to-orange-400' },
    { name: 'Dr. Sandeep Singh', role: 'Professor', department: 'Physics', specialization: 'Quantum Mechanics', room: '220', linkedin: 'https://linkedin.com/in/sandeepsingh', achievements: 'Research grant from DST', color: 'from-blue-700 to-blue-300' },
    { name: 'Dr. Priya Chauhan', role: 'Associate Professor', department: 'Law', specialization: 'Cyber Law', room: '118', linkedin: 'https://linkedin.com/in/priyachauhan', achievements: 'Speaker at Intl. Law Conference', color: 'from-red-700 to-yellow-300' },
    { name: 'Dr. Amit Joshi', role: 'Professor', department: 'Environmental Science', specialization: 'Climate Change', room: '330', linkedin: 'https://linkedin.com/in/amitjoshi', achievements: 'UN Environment Panelist', color: 'from-green-500 to-blue-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-orange-400 to-red-500 flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Faculty Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {facultyList.map(faculty => (
          <div key={faculty.name} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/20 text-center hover:scale-105 transition-transform">
            {/* Circle avatar with first letter */}
            <div className={`w-16 h-16 bg-gradient-to-r ${faculty.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
              {faculty.name[0]}
            </div>
            <h3 className="font-semibold text-lg mb-1 text-white">{faculty.name}</h3>
            <p className="text-white/80 mb-1">{faculty.role} - {faculty.department}</p>
            <p className="text-white/70 text-sm mb-1">Specialization: {faculty.specialization}</p>
            <p className="text-white/60 text-sm mb-1">Room {faculty.room}</p>
            <p className="text-white/60 text-xs mb-1">{faculty.achievements}</p>
            <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="block text-blue-200 underline text-xs mb-2">LinkedIn</a>
            <button className="mt-2 bg-gradient-to-r from-red-500 to-pink-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform font-semibold">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty; 