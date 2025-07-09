// Import React for creating components
import React from 'react';
// Import React Router components for navigation
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import our custom components
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
// Import authentication utility function
import { isAuthenticated } from './utils/auth';
// Import CSS styles
import './App.css';

// Protected Route Component - only allows logged-in users to access
const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated using our utility function
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

// Public Route Component - redirects logged-in users to home page
const PublicRoute = ({ children }) => {
  // If user is already logged in, redirect to home page
  return isAuthenticated() ? <Navigate to="/" replace /> : children;
};

// Main App component - the root of our application
function App() {
  // Return the JSX (HTML-like code) that will be displayed
  return (
    // Router wrapper - enables navigation throughout the app
    <Router>
      {/* Main app container */}
      <div className="App">
        {/* Header component - shows on all pages */}
        <Header />
        
        {/* Main content area */}
        <main>
          {/* Routes container - defines all the pages in our app */}
          <Routes>
            
            {/* Public Routes - accessible to everyone */}
            
            {/* Login page route */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            
            {/* Signup page route */}
            <Route 
              path="/signup" 
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              } 
            />
            
            {/* Protected Routes - only accessible to logged-in users */}
            
            {/* Homepage route - main page of the app */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              } 
            />
            
            {/* Fallback route - redirects any unknown URLs to home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Export the App component so it can be used as the main entry point
export default App;
