// Import React
import React, { useState } from 'react';

// Enhanced Faculty Directory page with connection system - Blue & White theme
function Faculty() {
  const [connectedFaculty, setConnectedFaculty] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Expanded faculty data inspired by Shoolini University
  const facultyList = [
    { id: 1, name: 'Dr. Pankaj Sharma', role: 'HOD CSE', department: 'Computer Science', specialization: 'AI & ML', room: '205', linkedin: 'https://linkedin.com/in/pankajsharma', achievements: 'Published 20+ papers in AI', color: 'from-blue-500 to-blue-600', email: 'pankaj.sharma@shoolini.edu' },
    { id: 2, name: 'Dr. Anurag Mehta', role: 'Senior Faculty', department: 'Biotechnology', specialization: 'Genomics', room: '208', linkedin: 'https://linkedin.com/in/anuragmehta', achievements: 'Shoolini Research Award 2022', color: 'from-blue-600 to-blue-700', email: 'anurag.mehta@shoolini.edu' },
    { id: 3, name: 'Dr. Nitesh Gupta', role: 'CSE Faculty', department: 'Computer Science', specialization: 'Cybersecurity', room: '210', linkedin: 'https://linkedin.com/in/niteshgupta', achievements: 'Best Teacher Award 2021', color: 'from-blue-400 to-blue-500', email: 'nitesh.gupta@shoolini.edu' },
    { id: 4, name: 'Dr. Ritu Sharma', role: 'Professor', department: 'Pharmacy', specialization: 'Pharmacology', room: '305', linkedin: 'https://linkedin.com/in/ritusharma', achievements: 'Patent holder in drug delivery', color: 'from-blue-500 to-blue-600', email: 'ritu.sharma@shoolini.edu' },
    { id: 5, name: 'Dr. Rajesh Kumar', role: 'Dean', department: 'Management', specialization: 'Marketing', room: '410', linkedin: 'https://linkedin.com/in/rajeshkumar', achievements: 'Authored 3 books on marketing', color: 'from-blue-600 to-blue-700', email: 'rajesh.kumar@shoolini.edu' },
    { id: 6, name: 'Dr. Neha Verma', role: 'Assistant Professor', department: 'Food Technology', specialization: 'Food Safety', room: '112', linkedin: 'https://linkedin.com/in/nehaverma', achievements: 'Young Scientist Award', color: 'from-blue-400 to-blue-500', email: 'neha.verma@shoolini.edu' },
    { id: 7, name: 'Dr. Sandeep Singh', role: 'Professor', department: 'Physics', specialization: 'Quantum Mechanics', room: '220', linkedin: 'https://linkedin.com/in/sandeepsingh', achievements: 'Research grant from DST', color: 'from-blue-500 to-blue-600', email: 'sandeep.singh@shoolini.edu' },
    { id: 8, name: 'Dr. Priya Chauhan', role: 'Associate Professor', department: 'Law', specialization: 'Cyber Law', room: '118', linkedin: 'https://linkedin.com/in/priyachauhan', achievements: 'Speaker at Intl. Law Conference', color: 'from-blue-600 to-blue-700', email: 'priya.chauhan@shoolini.edu' },
    { id: 9, name: 'Dr. Amit Joshi', role: 'Professor', department: 'Environmental Science', specialization: 'Climate Change', room: '330', linkedin: 'https://linkedin.com/in/amitjoshi', achievements: 'UN Environment Panelist', color: 'from-blue-400 to-blue-500', email: 'amit.joshi@shoolini.edu' }
  ];

  // Get unique departments for filter
  const departments = ['all', ...new Set(facultyList.map(f => f.department))];

  // Filter faculty based on search and department
  const filteredFaculty = facultyList.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || faculty.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  // Handle connection
  const handleConnect = (faculty) => {
    if (connectedFaculty.find(f => f.id === faculty.id)) {
      // Disconnect
      setConnectedFaculty(connectedFaculty.filter(f => f.id !== faculty.id));
      alert(`Disconnected from ${faculty.name}`);
    } else {
      // Connect
      setConnectedFaculty([...connectedFaculty, faculty]);
      alert(`Connected with ${faculty.name}! You can now message them.`);
    }
  };

  // Check if faculty is connected
  const isConnected = (facultyId) => {
    return connectedFaculty.some(f => f.id === facultyId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Faculty Directory</h1>
          <p className="text-xl text-white/80">Connect with professors and discover research opportunities</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-semibold mb-2">Search Faculty</label>
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Filter by Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-gray-800">
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Faculty Cards */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredFaculty.map(faculty => (
                <div key={faculty.id} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  {/* Avatar */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${faculty.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                    {faculty.name[0]}
                  </div>
                  
                  {/* Faculty Info */}
                  <h3 className="font-bold text-lg mb-2 text-white text-center">{faculty.name}</h3>
                  <p className="text-white/80 text-center mb-1">{faculty.role}</p>
                  <p className="text-white/70 text-sm text-center mb-1">{faculty.department}</p>
                  <p className="text-white/80 text-sm text-center mb-2">📍 {faculty.specialization}</p>
                  
                  {/* Details */}
                  <div className="space-y-1 mb-4 text-sm">
                    <p className="text-white/60">🏢 Room {faculty.room}</p>
                    <p className="text-white/60">📧 {faculty.email}</p>
                    <p className="text-white/70 text-xs italic">🏆 {faculty.achievements}</p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleConnect(faculty)}
                      className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                        isConnected(faculty.id)
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                      }`}
                    >
                      {isConnected(faculty.id) ? 'Disconnect' : 'Connect'}
                    </button>
                    <a
                      href={faculty.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-semibold transition-colors"
                    >
                      📱
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* My Connections */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">My Connections</h3>
              {connectedFaculty.length === 0 ? (
                <p className="text-white/70 text-center">No connections yet. Start connecting with faculty!</p>
              ) : (
                <div className="space-y-3">
                  {connectedFaculty.map((faculty) => (
                    <div key={faculty.id} className="bg-white/30 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${faculty.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                          {faculty.name[0]}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{faculty.name}</div>
                          <div className="text-white/70 text-xs">{faculty.department}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-white">
                  <span>Total Faculty</span>
                  <span className="font-bold">{facultyList.length}</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Connected</span>
                  <span className="font-bold">{connectedFaculty.length}</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Departments</span>
                  <span className="font-bold">{departments.length - 1}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl text-center hover:scale-105 transition-transform">
                  💬 Message All
                </button>
                <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white p-3 rounded-xl text-center hover:scale-105 transition-transform">
                  📅 Schedule Meeting
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-xl text-center hover:scale-105 transition-transform">
                  📚 Research Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty; 