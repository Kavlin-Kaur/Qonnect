// Import React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Student page with profiles and connection features - Blue & White theme
function Students() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [connectedStudents, setConnectedStudents] = useState([]);

  // Sample student data
  const students = [
    {
      id: 1,
      name: "Priya Sharma",
      year: "3rd Year",
      department: "Computer Science",
      interests: ["Web Development", "AI/ML", "Data Science"],
      skills: ["React", "Python", "JavaScript"],
      avatar: "👩‍💻",
      bio: "Passionate about creating innovative web solutions and exploring AI technologies.",
      location: "Delhi",
      gpa: "8.9"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      year: "2nd Year",
      department: "Mechanical Engineering",
      interests: ["Robotics", "3D Printing", "Automation"],
      skills: ["SolidWorks", "Arduino", "Python"],
      avatar: "👨‍🔧",
      bio: "Love building robots and exploring mechanical innovations.",
      location: "Mumbai",
      gpa: "8.2"
    },
    {
      id: 3,
      name: "Anjali Patel",
      year: "4th Year",
      department: "Business Administration",
      interests: ["Marketing", "Entrepreneurship", "Finance"],
      skills: ["Digital Marketing", "Excel", "Leadership"],
      avatar: "👩‍💼",
      bio: "Future entrepreneur with a passion for business strategy and innovation.",
      location: "Bangalore",
      gpa: "9.1"
    },
    {
      id: 4,
      name: "Vikram Singh",
      year: "1st Year",
      department: "Electrical Engineering",
      interests: ["IoT", "Smart Cities", "Renewable Energy"],
      skills: ["Circuit Design", "IoT", "C++"],
      avatar: "👨‍⚡",
      bio: "Focused on sustainable energy solutions and smart technology.",
      location: "Chennai",
      gpa: "8.5"
    },
    {
      id: 5,
      name: "Zara Khan",
      year: "3rd Year",
      department: "Design & Arts",
      interests: ["UI/UX Design", "Graphic Design", "Animation"],
      skills: ["Figma", "Adobe Creative Suite", "Sketch"],
      avatar: "👩‍🎨",
      bio: "Creative designer passionate about user experience and visual storytelling.",
      location: "Hyderabad",
      gpa: "8.7"
    }
  ];

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      // Connect with student
      setConnectedStudents([...connectedStudents, students[currentIndex]]);
      alert(`Connected with ${students[currentIndex].name}! 🎉`);
    }
    // Move to next student
    setCurrentIndex((prev) => (prev + 1) % students.length);
  };

  const currentStudent = students[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Student Hub</h1>
          <p className="text-xl text-white/80">Connect with fellow students and discover opportunities</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Student Profile Card (Swipe Feature) */}
          <div className="lg:col-span-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Discover Students</h2>
              
              {currentStudent && (
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  {/* Avatar and Basic Info */}
                  <div className="text-6xl mb-4">{currentStudent.avatar}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentStudent.name}</h3>
                  <p className="text-gray-600 mb-4">{currentStudent.year} • {currentStudent.department}</p>
                  
                  {/* Stats */}
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">{currentStudent.gpa}</div>
                      <div className="text-sm text-gray-600">GPA</div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">{currentStudent.location}</div>
                      <div className="text-sm text-gray-600">Location</div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-700 mb-6 italic">"{currentStudent.bio}"</p>
                  
                  {/* Interests */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Interests</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {currentStudent.interests.map((interest, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Skills</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {currentStudent.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Swipe Buttons */}
                  <div className="flex justify-center gap-4 mt-8">
                    <button 
                      onClick={() => handleSwipe('left')}
                      className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    >
                      ❌ Pass
                    </button>
                    <button 
                      onClick={() => handleSwipe('right')}
                      className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
                    >
                      ✅ Connect
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    {currentIndex + 1} of {students.length} students
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/student-profile" className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl text-center hover:scale-105 transition-transform">
                  👤 My Profile
                </Link>
                <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white p-3 rounded-xl hover:scale-105 transition-transform">
                  📚 Study Groups
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:scale-105 transition-transform">
                  🎯 Opportunities
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl hover:scale-105 transition-transform">
                  💬 Messages
                </button>
              </div>
            </div>

            {/* Connected Students */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">My Connections</h3>
              {connectedStudents.length === 0 ? (
                <p className="text-white/70 text-center">No connections yet. Start swiping!</p>
              ) : (
                <div className="space-y-3">
                  {connectedStudents.slice(0, 5).map((student) => (
                    <div key={student.id} className="bg-white/30 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-2xl">{student.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{student.name}</div>
                        <div className="text-white/70 text-sm">{student.department}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-white">
                  <span>Connections</span>
                  <span className="font-bold">{connectedStudents.length}</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Profile Views</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Study Groups</span>
                  <span className="font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students; 