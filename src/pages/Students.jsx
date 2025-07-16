// Import React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Student page with profiles and connection features - Blue & White theme
function Students() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [connectedStudents, setConnectedStudents] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      // Connect with student
      setConnectedStudents([...connectedStudents, students[currentIndex]]);
      showToastMessage(`Connected with ${students[currentIndex].name}! 🎉`);
    } else {
      showToastMessage(`Passed on ${students[currentIndex].name}`);
    }
    // Move to next student
    setCurrentIndex((prev) => (prev + 1) % students.length);
  };

  const handleQuickAction = (action) => {
    switch(action) {
      case 'profile':
        showToastMessage('Opening your profile...');
        break;
      case 'studyGroups':
        showToastMessage('Loading study groups...');
        break;
      case 'opportunities':
        showToastMessage('Finding opportunities for you...');
        break;
      case 'messages':
        showToastMessage('Opening messages...');
        break;
      default:
        break;
    }
  };

  const currentStudent = students[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">Student Hub</h1>
          <p className="text-lg sm:text-xl text-white/80">Connect with fellow students and discover opportunities</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Student Profile Card (Swipe Feature) */}
          <div className="lg:col-span-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Discover Students</h2>
              
              {currentStudent && (
                <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                  {/* Avatar and Basic Info */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">{currentStudent.avatar}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{currentStudent.name}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4">{currentStudent.year} • {currentStudent.department}</p>
                  
                  {/* Stats */}
                  <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-blue-100 rounded-lg p-2 sm:p-3">
                      <div className="text-base sm:text-lg font-bold text-blue-600">{currentStudent.gpa}</div>
                      <div className="text-xs sm:text-sm text-gray-600">GPA</div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-2 sm:p-3">
                      <div className="text-base sm:text-lg font-bold text-blue-600">{currentStudent.location}</div>
                      <div className="text-xs sm:text-sm text-gray-600">Location</div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">"{currentStudent.bio}"</p>
                  
                  {/* Interests */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Interests</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {currentStudent.interests.map((interest, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Skills</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {currentStudent.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Swipe Buttons */}
                  <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <button 
                      onClick={() => handleSwipe('left')}
                      className="bg-red-500 text-white p-3 sm:p-4 rounded-full hover:bg-red-600 transition-colors shadow-lg hover:scale-105"
                    >
                      ❌ Pass
                    </button>
                    <button 
                      onClick={() => handleSwipe('right')}
                      className="bg-blue-500 text-white p-3 sm:p-4 rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:scale-105"
                    >
                      ✅ Connect
                    </button>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                    {currentIndex + 1} of {students.length} students
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Actions</h3>
              <div className="space-y-2 sm:space-y-3">
                <button 
                  onClick={() => handleQuickAction('profile')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 sm:p-3 rounded-xl text-center hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  👤 My Profile
                </button>
                <button 
                  onClick={() => handleQuickAction('studyGroups')}
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white p-2 sm:p-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  📚 Study Groups
                </button>
                <button 
                  onClick={() => handleQuickAction('opportunities')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 sm:p-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  🎯 Opportunities
                </button>
                <button 
                  onClick={() => handleQuickAction('messages')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 sm:p-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  💬 Messages
                </button>
              </div>
            </div>

            {/* Connected Students */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">My Connections</h3>
              {connectedStudents.length === 0 ? (
                <p className="text-white/70 text-center text-sm sm:text-base">No connections yet. Start swiping!</p>
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  {connectedStudents.slice(0, 5).map((student) => (
                    <div key={student.id} className="bg-white/30 rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3">
                      <div className="text-xl sm:text-2xl">{student.avatar}</div>
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">{student.name}</div>
                        <div className="text-white/70 text-xs sm:text-sm">{student.department}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Your Stats</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-white text-sm sm:text-base">
                  <span>Connections</span>
                  <span className="font-bold">{connectedStudents.length}</span>
                </div>
                <div className="flex justify-between text-white text-sm sm:text-base">
                  <span>Profile Views</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="flex justify-between text-white text-sm sm:text-base">
                  <span>Study Groups</span>
                  <span className="font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default Students; 