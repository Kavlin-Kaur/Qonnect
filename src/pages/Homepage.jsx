// Import React
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUserProfile } from '../utils/auth';

// Simplified homepage with clean design and events - Blue & White theme
function Homepage() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUserProfile()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Hackathon 2024",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      location: "Main Campus",
      type: "Competition",
      icon: "💻"
    },
    {
      id: 2,
      title: "Career Fair",
      date: "Dec 20, 2024",
      time: "2:00 PM",
      location: "Auditorium",
      type: "Career",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "Dec 25, 2024",
      time: "6:00 PM",
      location: "Open Air Theater",
      type: "Cultural",
      icon: "🎭"
    },
    {
      id: 4,
      title: "Research Symposium",
      date: "Jan 5, 2025",
      time: "9:00 AM",
      location: "Conference Hall",
      type: "Academic",
      icon: "🔬"
    }
  ];

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleEventAction = (action, eventTitle) => {
    switch(action) {
      case 'register':
        showToastMessage(`Registered for ${eventTitle}! 🎉`);
        break;
      case 'viewAll':
        showToastMessage('Loading all events...');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      
      {/* Show user info if logged in */}
      {user && (
        <div className="max-w-2xl mx-auto bg-white/80 rounded-xl p-6 mt-8 mb-4 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Welcome, {user.name}!</h2>
          <p className="text-blue-600">Email: {user.email}</p>
          <p className="text-blue-600">Role: {user.role}</p>
        </div>
      )}

      {/* Main Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome to Qonnect
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 font-light">
            Connect, Collaborate, and Communicate with Students & Faculty
          </p>
          
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Your ultimate academic networking platform for students and faculty
          </p>

          {/* Main Navigation Buttons */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
            <Link to="/students" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50">
              🎓 Student Hub
            </Link>
            <Link to="/faculty" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50">
              👨‍🏫 Faculty Directory
            </Link>
            <Link to="/inquiry" className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50">
              💬 Inquiry & Chat
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-white">
              <div className="text-xl sm:text-2xl font-bold">2,847</div>
              <div className="text-xs sm:text-sm">Students</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-white">
              <div className="text-xl sm:text-2xl font-bold">156</div>
              <div className="text-xs sm:text-sm">Faculty</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-white">
              <div className="text-xl sm:text-2xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Upcoming Events</h2>
            <p className="text-lg sm:text-xl text-white/80">Don't miss out on these exciting opportunities!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{event.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏷️</span>
                    <span>{event.type}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleEventAction('register', event.title)}
                  className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <button 
              onClick={() => handleEventAction('viewAll')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
            >
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default Homepage; 