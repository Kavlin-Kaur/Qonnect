import React, { useState } from "react";

export default function FinalApp({ onAuth }) {
  // State to toggle between login and sign-up form
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-4">
      <div className="w-full max-w-md bg-white text-black rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-red-600 text-white py-6 px-6 text-center">
          <h1 className="text-2xl font-bold">Qonnect</h1>
          <p className="mt-1">{isLogin ? "Welcome back!" : "Join Qonnect today"}</p>
        </div>

        {/* Form Section */}
        <div className="p-6 space-y-5">
          {/* Toggle Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="px-4 py-2 border border-red-600 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition"
            >
              {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>

          {/* Conditional Rendering: Show Login or Signup Form */}
          {isLogin ? <LoginForm onAuth={onAuth} /> : <SignupForm onAuth={onAuth} />}
          {/* TEMP: Test Auth Button for Debugging */}
          <button
            className="w-full mt-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            onClick={() => {
              if (onAuth) {
                console.log('Test Auth button clicked');
                onAuth();
              }
            }}
          >
            Test Auth (Debug)
          </button>
        </div>
      </div>
    </div>
  );
}

// Login Form Component
function LoginForm({ onAuth }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAuth) {
      console.log('onAuth called from LoginForm');
      onAuth(); // Simulate successful login
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium mb-1">
          Email address
        </label>
        <input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div>
        <label htmlFor="login-password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="login-password"
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500" />
          <span className="ml-2 text-sm text-gray-700">Remember me</span>
        </label>
        <a href="#" className="text-sm text-red-600 hover:text-red-800 underline">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
      >
        Log In
      </button>
    </form>
  );
}

// Signup Form Component
function SignupForm({ onAuth }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAuth) {
      console.log('onAuth called from SignupForm');
      onAuth(); // Simulate successful signup
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="signup-name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <input
          id="signup-name"
          type="text"
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium mb-1">
          Email address
        </label>
        <input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="signup-password"
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div>
        <label htmlFor="signup-confirm-password" className="block text-sm font-medium mb-1">
          Confirm Password
        </label>
        <input
          id="signup-confirm-password"
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
      >
        Create Account
      </button>
    </form>
  );
} 