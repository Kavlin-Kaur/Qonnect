// Import React and the useState hook for managing component state
import React, { useState } from 'react';
// Import useNavigate for navigation and Link for creating links
import { useNavigate, Link } from 'react-router-dom';

// Create the Signup component function
const Signup = () => {
  // Create state variables to store form data
  // useState returns an array: [currentValue, functionToUpdateValue]
  const [name, setName] = useState(''); // Store user's full name input
  const [email, setEmail] = useState(''); // Store user's email input
  const [password, setPassword] = useState(''); // Store user's password input
  const [userType, setUserType] = useState('student'); // Store user type (student/faculty/inquiry)
  const [error, setError] = useState(''); // Store any error messages
  const [loading, setLoading] = useState(false); // Track if form is being submitted
  
  // Get the navigate function from React Router
  const navigate = useNavigate();

  // Function to handle form submission when user clicks "Create Account"
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();
    
    // Clear any previous error messages
    setError('');
    
    // Check if user filled in all required fields
    if (!name || !email || !password) {
      // Show error message if any field is empty
      setError('Please fill in all fields');
      return; // Stop the function here
    }
    
    // Check if password is at least 6 characters long
    if (password.length < 6) {
      // Show error message if password is too short
      setError('Password must be at least 6 characters');
      return; // Stop the function here
    }
    
    // Set loading to true to show "Creating account..." message
    setLoading(true);
    
    // Simulate a delay (like a real API call would have)
    // This makes the app feel more realistic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create an object with user data to store
    const userData = {
      name: name.trim(), // Remove extra spaces from name
      email: email, // User's email
      userType: userType, // User type (student/faculty/inquiry)
      isLoggedIn: true // Mark user as logged in
    };
    
    // Save user data to browser's localStorage
    // This keeps user logged in even if they refresh the page
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Set loading back to false
    setLoading(false);
    
    // Navigate to the homepage (redirect user)
    navigate('/');
  };

  // Return the JSX (HTML-like code) that will be displayed
  return (
    // Main container - full screen height, centered content
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Card container - white background, rounded corners, shadow, responsive max width */}
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col items-center">
        
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 lg:mb-10">
          {/* Logo container - gradient background, rounded corners */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
            {/* Logo letter "Q" */}
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-widest">Q</span>
          </div>
          {/* Main title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-700 mb-1 sm:mb-2 text-center">Join Qonnect</h1>
          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-blue-500 text-center">Create your account</p>
        </div>

        {/* Error message display - only shows if there's an error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 w-full text-center text-sm sm:text-base">
            {error}
          </div>
        )}

        {/* Signup form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
          
          {/* Name input field */}
          <div>
            {/* Label for name field */}
            <label className="block text-sm sm:text-base font-semibold text-blue-700 mb-1 sm:mb-2">
              Full Name
            </label>
            {/* Name input - controlled by name state */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 sm:px-4 lg:px-5 py-3 sm:py-4 border-2 border-blue-100 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base lg:text-lg bg-blue-50 placeholder-blue-300 shadow-sm"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email input field */}
          <div>
            {/* Label for email field */}
            <label className="block text-sm sm:text-base font-semibold text-blue-700 mb-1 sm:mb-2">
              Email Address
            </label>
            {/* Email input - controlled by email state */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 lg:px-5 py-3 sm:py-4 border-2 border-blue-100 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base lg:text-lg bg-blue-50 placeholder-blue-300 shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* User type selection dropdown */}
          <div>
            {/* Label for user type field */}
            <label className="block text-sm sm:text-base font-semibold text-blue-700 mb-1 sm:mb-2">
              I am a
            </label>
            {/* Dropdown select - controlled by userType state */}
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 sm:px-4 lg:px-5 py-3 sm:py-4 border-2 border-blue-100 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base lg:text-lg bg-blue-50 shadow-sm"
            >
              {/* Dropdown options */}
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="inquiry">Inquiry</option>
            </select>
          </div>

          {/* Password input field */}
          <div>
            {/* Label for password field */}
            <label className="block text-sm sm:text-base font-semibold text-blue-700 mb-1 sm:mb-2">
              Password
            </label>
            {/* Password input - controlled by password state */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 lg:px-5 py-3 sm:py-4 border-2 border-blue-100 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base lg:text-lg bg-blue-50 placeholder-blue-300 shadow-sm"
              placeholder="Create a password (min 6 characters)"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 sm:py-4 px-4 rounded-lg sm:rounded-xl font-bold text-white text-sm sm:text-base lg:text-lg transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 ${
              loading 
                ? 'bg-blue-200 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105'
            }`}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        {/* Link to login page */}
        <div className="text-center mt-6 sm:mt-8 w-full">
          <p className="text-blue-500 text-xs sm:text-sm lg:text-base">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-blue-700 hover:underline hover:text-blue-900 transition-colors">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the component so it can be used in other files
export default Signup; 