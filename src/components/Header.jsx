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
    // Header container - white background, shadow, border
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Main header content container - responsive max width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row - flexbox layout */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo section - left side */}
          <div className="flex items-center">
            {/* Link to homepage with logo */}
            <Link to="/" className="flex items-center">
              {/* Logo text */}
              <h1 className="text-2xl font-bold text-gray-900">Qonnect</h1>
            </Link>
          </div>

          {/* Navigation menu - hidden on mobile, visible on desktop */}
          <nav className="hidden md:flex space-x-8">
            {/* Home link */}
            <Link
              to="/"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            {/* Students section link */}
            <Link
              to="/#students"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Students
            </Link>
            {/* Faculty section link */}
            <Link
              to="/#faculty"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Faculty
            </Link>
            {/* Inquiry section link */}
            <Link
              to="/#inquiry"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Inquiry
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
                  className="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {/* User avatar - circle with initials */}
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {getInitials(user.name || user.email)} {/* Show user initials */}
                  </div>
                  {/* User name - hidden on mobile */}
                  <span className="hidden md:block text-gray-700">{user.name || user.email}</span>
                </button>

                {/* Dropdown menu - only show if menu is open */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    {/* User info section */}
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      {/* User name */}
                      <p className="font-medium">{user.name || 'User'}</p>
                      {/* User email */}
                      <p className="text-gray-500">{user.email}</p>
                      {/* User type - only show if it exists */}
                      {user.userType && (
                        <p className="text-xs text-gray-400 capitalize">{user.userType}</p>
                      )}
                    </div>
                    {/* Logout button */}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - show login/signup buttons
              <div className="flex items-center space-x-4">
                {/* Sign in link */}
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Sign in
                </Link>
                {/* Sign up button */}
                <Link
                  to="/signup"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile menu button - only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
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
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile menu items container */}
            <div className="space-y-1">
              {/* Home link for mobile */}
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-base font-medium"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Home
              </Link>
              {/* Students link for mobile */}
              <Link
                to="/#students"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-base font-medium"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Students
              </Link>
              {/* Faculty link for mobile */}
              <Link
                to="/#faculty"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-base font-medium"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Faculty
              </Link>
              {/* Inquiry link for mobile */}
              <Link
                to="/#inquiry"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-base font-medium"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Inquiry
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