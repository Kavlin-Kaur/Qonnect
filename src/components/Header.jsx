// Import React and the useState and useEffect hooks for managing component state
import React, { useState, useEffect } from 'react';
// Import useNavigate for navigation and Link for creating links
import { Link, useNavigate } from 'react-router-dom';

// Create the Header component function
const Header = () => {
  // Create state variables to store user data and menu state
  const [user, setUser] = useState(null); // Store current user data (null if not logged in)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if mobile menu is open/closed
  
  // Get the navigate function from React Router
  const navigate = useNavigate();

  // useEffect hook - runs when component first loads (empty dependency array [])
  useEffect(() => {
    // Check if user is logged in by looking in localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      // If user data exists, parse it from JSON and set it in state
      setUser(JSON.parse(userData));
    }
  }, []); // Empty array means this only runs once when component loads

  // Function to handle user logout
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    // Clear user from state
    setUser(null);
    // Navigate to login page
    navigate('/login');
  };

  // Function to get user initials from name
  const getInitials = (name) => {
    // Split name into words, get first letter of each word, join them, make uppercase, limit to 2 letters
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Return the JSX (HTML-like code) that will be displayed
  return (
    // Header container - blue gradient background, shadow, border
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-lg border-b border-white/20 backdrop-blur-sm">
      {/* Main header content container - responsive max width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row - flexbox layout */}
        <div className="flex justify-between items-center h-20">
          
          {/* Logo section - left side */}
          <div className="flex items-center">
            {/* Link to homepage with logo */}
            <Link to="/" className="flex items-center group">
              {/* Logo icon */}
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3 group-hover:bg-white/30 transition-all duration-300">
                <span className="text-2xl font-bold text-white">Q</span>
              </div>
              {/* Logo text */}
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
                Qonnect
              </h1>
            </Link>
          </div>

          {/* Navigation menu - hidden on mobile, visible on desktop */}
          <nav className="hidden md:flex space-x-1">
            {/* Home link */}
            <Link
              to="/"
              className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              🏠 Home
            </Link>
            {/* Students section link */}
            <Link
              to="/students"
              className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              🎓 Students
            </Link>
            {/* Faculty section link */}
            <Link
              to="/faculty"
              className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              👨‍🏫 Faculty
            </Link>
            {/* Inquiry section link */}
            <Link
              to="/inquiry"
              className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              💬 Inquiry
            </Link>
          </nav>

          {/* User menu section - right side */}
          <div className="flex items-center space-x-4">
            
            {/* Show user profile if logged in, otherwise show login/signup buttons */}
            {user ? (
              // User is logged in - show profile dropdown
              <div className="relative">
                {/* Profile button - opens dropdown when clicked */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-3 text-sm rounded-xl bg-white/20 hover:bg-white/30 px-4 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {/* User avatar - circle with initials */}
                  <div className="w-8 h-8 bg-gradient-to-r from-white/30 to-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30">
                    {getInitials(user.name || user.email)} {/* Show user initials */}
                  </div>
                  {/* User name - hidden on mobile */}
                  <span className="hidden md:block text-white font-medium">{user.name || user.email}</span>
                  {/* Dropdown arrow */}
                  <svg className="w-4 h-4 text-white/70 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu - only show if menu is open */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl py-2 z-50 border border-white/20 animate-in slide-in-from-top-2 duration-200">
                    {/* User info section */}
                    <div className="px-4 py-3 border-b border-gray-200/50">
                      {/* User name */}
                      <p className="font-semibold text-gray-800">{user.name || 'User'}</p>
                      {/* User email */}
                      <p className="text-gray-600 text-sm">{user.email}</p>
                      {/* User type - only show if it exists */}
                      {user.userType && (
                        <p className="text-xs text-gray-500 capitalize mt-1">👤 {user.userType}</p>
                      )}
                    </div>
                    {/* Profile link for students */}
                    {user.userType === 'student' && (
                      <Link
                        to="/student-profile"
                        className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        👤 My Profile
                      </Link>
                    )}
                    {/* Settings link */}
                    <Link
                      to="/settings"
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ⚙️ Settings
                    </Link>
                    {/* Logout button */}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300"
                    >
                      🚪 Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - show login/signup buttons
              <div className="flex items-center space-x-3">
                {/* Sign in link */}
                <Link
                  to="/login"
                  className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Sign in
                </Link>
                {/* Sign up button */}
                <Link
                  to="/signup"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 border border-white/30"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile menu button - only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
            >
              {/* Hamburger menu icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation menu - only show on mobile when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 animate-in slide-in-from-top-2 duration-200">
            {/* Mobile menu items container */}
            <div className="space-y-2">
              {/* Home link for mobile */}
              <Link
                to="/"
                className="block px-4 py-3 text-white hover:bg-white/20 rounded-xl text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                🏠 Home
              </Link>
              {/* Students link for mobile */}
              <Link
                to="/students"
                className="block px-4 py-3 text-white hover:bg-white/20 rounded-xl text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                🎓 Students
              </Link>
              {/* Faculty link for mobile */}
              <Link
                to="/faculty"
                className="block px-4 py-3 text-white hover:bg-white/20 rounded-xl text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                👨‍🏫 Faculty
              </Link>
              {/* Inquiry link for mobile */}
              <Link
                to="/inquiry"
                className="block px-4 py-3 text-white hover:bg-white/20 rounded-xl text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                💬 Inquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Export the component so it can be used in other files
export default Header; 