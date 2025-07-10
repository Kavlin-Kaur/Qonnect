// Import React
import React from 'react';
import { Link } from 'react-router-dom';

// Minimal landing page with links to each section
function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-orange-400 to-red-500 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
        Welcome to Qonnect
      </h1>
      <p className="text-xl text-white/90 mb-10">
        Connect, Collaborate, and Communicate with Students & Faculty
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <Link to="/students" className="bg-gradient-to-r from-red-500 to-pink-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform">Student Hub</Link>
        <Link to="/faculty" className="bg-gradient-to-r from-blue-500 to-pink-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform">Faculty Directory</Link>
        <Link to="/inquiry" className="bg-gradient-to-r from-orange-500 to-red-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform">Inquiry & Chat</Link>
      </div>
    </div>
  );
}

export default Homepage; 