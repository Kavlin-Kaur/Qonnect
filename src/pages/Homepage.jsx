// Import React
import React from 'react';
import { Link } from 'react-router-dom';

// Simplified homepage with clean design and events - Blue & White theme
function Homepage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      
      {/* Main Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome to Qonnect
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Connect, Collaborate, and Communicate with Students & Faculty
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Your ultimate academic networking platform for students and faculty
          </p>

          {/* Main Navigation Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <Link to="/students" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50">
              🎓 Student Hub
            </Link>
            <Link to="/faculty" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50">
              👨‍🏫 Faculty Directory
            </Link>
            <Link to="/inquiry" className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50">
              💬 Inquiry & Chat
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="text-2xl font-bold">2,847</div>
              <div className="text-sm">Students</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm">Faculty</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-white/80">Don't miss out on these exciting opportunities!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className="space-y-2 text-white/80">
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
                <button className="w-full mt-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition-transform">
                  Register Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/events" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              View All Events
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage; 