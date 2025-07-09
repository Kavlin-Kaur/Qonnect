// Import React and the useState hook for managing component state
import React, { useState } from 'react';
// Import useNavigate for navigation and Link for creating links
import { useNavigate, Link } from 'react-router-dom';

// Create the Login component function
const Login = () => {
  // Create state variables to store form data
  // useState returns an array: [currentValue, functionToUpdateValue]
  const [email, setEmail] = useState(''); // Store user's email input
  const [password, setPassword] = useState(''); // Store user's password input
  const [error, setError] = useState(''); // Store any error messages
  const [loading, setLoading] = useState(false); // Track if form is being submitted
  
  // Get the navigate function from React Router
  const navigate = useNavigate();

  // Function to handle form submission when user clicks "Sign In"
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();
    
    // Clear any previous error messages
    setError('');
    
    // Check if user filled in all required fields
    if (!email || !password) {
      // Show error message if fields are empty
      setError('Please fill in all fields');
      return; // Stop the function here
    }
    
    // Set loading to true to show "Signing in..." message
    setLoading(true);
    
    // Simulate a delay (like a real API call would have)
    // This makes the app feel more realistic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create an object with user data to store
    const userData = {
      email: email, // User's email
      name: email.split('@')[0], // Extract name from email (part before @)
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
      {/* Card container - white background, rounded corners, shadow */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header section with logo and title */}
        <div className="text-center mb-8">
          {/* Logo container - gradient background, rounded corners */}
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center mb-4">
            {/* Logo letter "Q" */}
            <span className="text-2xl font-bold text-white">Q</span>
          </div>
          {/* Main title */}
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          {/* Subtitle */}
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        {/* Error message display - only shows if there's an error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email input field */}
          <div>
            {/* Label for email field */}
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            {/* Email input - controlled by email state */}
            <input
              type="email" // HTML5 email validation
              value={email} // Current value from state
              onChange={(e) => setEmail(e.target.value)} // Update state when user types
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-colors"
              placeholder="Enter your email" // Hint text
            />
          </div>

          {/* Password input field */}
          <div>
            {/* Label for password field */}
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            {/* Password input - controlled by password state */}
            <input
              type="password" // Hide password characters
              value={password} // Current value from state
              onChange={(e) => setPassword(e.target.value)} // Update state when user types
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-colors"
              placeholder="Enter your password" // Hint text
            />
          </div>

          {/* Submit button */}
          <button
            type="submit" // Triggers form submission
            disabled={loading} // Disable button while loading
            className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' // Gray when loading
                : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 hover:scale-105' // Gradient when ready
            }`}
          >
            {/* Show different text based on loading state */}
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Link to signup page */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            {/* Link to signup page */}
            <Link to="/signup" className="font-semibold text-red-600 hover:text-red-700">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the component so it can be used in other files
export default Login; 